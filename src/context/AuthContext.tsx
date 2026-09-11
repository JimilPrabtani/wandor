// Deep module: AuthContext. Small interface (useAuth), deep implementation
// (OAuth, JWT, session). # ponytail: internal helpers hidden; upgrade path = split adapter for in-memory test seam
import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
  CognitoUserAttribute,
} from 'amazon-cognito-identity-js';

export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
}

export interface AuthResponse {
  success: boolean;
  message?: string;
  needsConfirmation?: boolean;
}

interface AuthContextType {
  user: UserProfile | null;
  loading: boolean;
  isConfigured: boolean;
  login: (email: string, password: string) => Promise<AuthResponse>;
  signup: (email: string, password: string, name: string) => Promise<AuthResponse>;
  confirmSignup: (email: string, code: string) => Promise<AuthResponse>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<AuthResponse>;
  confirmPasswordReset: (email: string, code: string, newPassword: string) => Promise<AuthResponse>;
  getIdToken: () => Promise<string | null>;
}

const POOL_ID = import.meta.env.VITE_COGNITO_USER_POOL_ID as string | undefined;
const CLIENT_ID = import.meta.env.VITE_COGNITO_CLIENT_ID as string | undefined;
const COGNITO_DOMAIN = import.meta.env.VITE_COGNITO_DOMAIN as string | undefined;

const userPool = POOL_ID && CLIENT_ID
  ? new CognitoUserPool({ UserPoolId: POOL_ID, ClientId: CLIENT_ID })
  : null;

// --- OAuth (Cognito Hosted UI / Google federation) token storage ---
const OAUTH_KEY = 'wandor_oauth_tokens';

interface OAuthTokens {
  id_token: string;
  access_token: string;
  refresh_token?: string;
}

function readOAuthTokens(): OAuthTokens | null {
  try {
    const raw = localStorage.getItem(OAUTH_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed?.id_token === 'string') return parsed as OAuthTokens;
  } catch {
    // corrupt entry — ignore
  }
  return null;
}

function decodeJwtPayload(jwt: string): Record<string, unknown> | null {
  try {
    const base64 = jwt.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base64));
  } catch {
    return null;
  }
}

function isJwtValid(jwt: string): boolean {
  const payload = decodeJwtPayload(jwt);
  const exp = typeof payload?.exp === 'number' ? payload.exp : 0;
  return exp * 1000 > Date.now() + 60_000; // 60s clock slack
}

function profileFromIdToken(jwt: string): UserProfile | null {
  const payload = decodeJwtPayload(jwt);
  const email = typeof payload?.email === 'string' ? payload.email : null;
  if (!email) return null;
  const name = typeof payload?.name === 'string' && payload.name.trim()
    ? payload.name
    : email.split('@')[0];
  return {
    name,
    email,
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(email)}`,
  };
}

async function oauthTokenRequest(params: Record<string, string>): Promise<OAuthTokens | null> {
  if (!COGNITO_DOMAIN || !CLIENT_ID) return null;
  try {
    const res = await fetch(`https://${COGNITO_DOMAIN}/oauth2/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ client_id: CLIENT_ID, ...params }).toString(),
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (typeof data?.id_token !== 'string') return null;
    return data as OAuthTokens;
  } catch {
    return null;
  }
}

function getCurrentCognitoUser(): CognitoUser | null {
  return userPool ? userPool.getCurrentUser() : null;
}

function getSessionIdToken(): Promise<string | null> {
  const cognitoUser = getCurrentCognitoUser();
  if (!cognitoUser) return Promise.resolve(null);
  return new Promise((resolve) => {
    // getSession auto-refreshes with the stored refresh token when expired
    cognitoUser.getSession((err: Error | null, session: any) => {
      if (err || !session?.isValid()) {
        resolve(null);
        return;
      }
      resolve(session.getIdToken().getJwtToken());
    });
  });
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const oauthHandled = useRef(false); // StrictMode double-mount guard

  const isConfigured = !!userPool;

  // Restore session / handle Google OAuth redirect on mount
  useEffect(() => {
    if (oauthHandled.current) return;
    oauthHandled.current = true;

    const restore = async () => {
      // 1. Hosted UI redirect back to /login?code=...
      const url = new URL(window.location.href);
      const code = url.pathname === '/login' ? url.searchParams.get('code') : null;
      if (code && COGNITO_DOMAIN && CLIENT_ID) {
        const tokens = await oauthTokenRequest({
          grant_type: 'authorization_code',
          redirect_uri: `${window.location.origin}/login`,
          code,
        });
        url.searchParams.delete('code');
        url.searchParams.delete('state');
        window.history.replaceState({}, '', url.pathname + url.search);
        if (tokens) {
          localStorage.setItem(OAUTH_KEY, JSON.stringify(tokens));
          setUser(profileFromIdToken(tokens.id_token));
          setLoading(false);
          return;
        }
      }

      // 2. Previously stored OAuth tokens (refreshed lazily in getIdToken)
      const stored = readOAuthTokens();
      if (stored) {
        setUser(profileFromIdToken(stored.id_token));
        setLoading(false);
        return;
      }

      // 3. Cached SRP session from amazon-cognito-identity-js
      const token = await getSessionIdToken();
      if (token) setUser(profileFromIdToken(token));
      setLoading(false);
    };

    restore();
  }, []);

  const getIdToken = async (): Promise<string | null> => {
    const oauth = readOAuthTokens();
    if (oauth) {
      if (isJwtValid(oauth.id_token)) return oauth.id_token;
      if (oauth.refresh_token) {
        const refreshed = await oauthTokenRequest({
          grant_type: 'refresh_token',
          refresh_token: oauth.refresh_token,
        });
        if (refreshed) {
          const merged = { ...oauth, ...refreshed };
          localStorage.setItem(OAUTH_KEY, JSON.stringify(merged));
          return merged.id_token;
        }
      }
      localStorage.removeItem(OAUTH_KEY);
      return null;
    }
    return getSessionIdToken();
  };

  const login = (email: string, password: string): Promise<AuthResponse> => {
    if (!userPool) return Promise.resolve({ success: false, message: 'Authentication backend is not configured.' });
    const username = email.trim().toLowerCase();
    const cognitoUser = new CognitoUser({ Username: username, Pool: userPool });
    const details = new AuthenticationDetails({ Username: username, Password: password });
    return new Promise((resolve) => {
      cognitoUser.authenticateUser(details, {
        onSuccess: (session) => {
          setUser(profileFromIdToken(session.getIdToken().getJwtToken()));
          resolve({ success: true });
        },
        onFailure: (err) => {
          if (err?.code === 'UserNotConfirmedException') {
            resolve({ success: false, needsConfirmation: true, message: 'Please confirm your email address first.' });
            return;
          }
          resolve({ success: false, message: err?.message || 'Login failed.' });
        },
      });
    });
  };

  const signup = (email: string, password: string, name: string): Promise<AuthResponse> => {
    if (!userPool) return Promise.resolve({ success: false, message: 'Authentication backend is not configured.' });
    const username = email.trim().toLowerCase();
    const attributes = [new CognitoUserAttribute({ Name: 'email', Value: username })];
    if (name.trim()) attributes.push(new CognitoUserAttribute({ Name: 'name', Value: name.trim() }));
    return new Promise((resolve) => {
      userPool.signUp(username, password, attributes, [], (err, result) => {
        if (err) {
          resolve({ success: false, message: err.message || 'Registration failed.' });
          return;
        }
        resolve({ success: true, needsConfirmation: !result?.userConfirmed });
      });
    });
  };

  const confirmSignup = (email: string, code: string): Promise<AuthResponse> => {
    if (!userPool) return Promise.resolve({ success: false, message: 'Authentication backend is not configured.' });
    const cognitoUser = new CognitoUser({ Username: email.trim().toLowerCase(), Pool: userPool });
    return new Promise((resolve) => {
      cognitoUser.confirmRegistration(code.trim(), true, (err) => {
        if (err) {
          resolve({ success: false, message: err.message || 'Invalid confirmation code.' });
          return;
        }
        resolve({ success: true });
      });
    });
  };

  const logout = () => {
    getCurrentCognitoUser()?.signOut();
    localStorage.removeItem(OAUTH_KEY);
    setUser(null);
  };

  const forgotPassword = (email: string): Promise<AuthResponse> => {
    if (!userPool) return Promise.resolve({ success: false, message: 'Authentication backend is not configured.' });
    const cognitoUser = new CognitoUser({ Username: email.trim().toLowerCase(), Pool: userPool });
    return new Promise((resolve) => {
      cognitoUser.forgotPassword({
        onSuccess: () => resolve({ success: true }),
        inputVerificationCode: () => resolve({ success: true }),
        onFailure: (err) => resolve({ success: false, message: err?.message || 'Could not start password reset.' }),
      });
    });
  };

  const confirmPasswordReset = (email: string, code: string, newPassword: string): Promise<AuthResponse> => {
    if (!userPool) return Promise.resolve({ success: false, message: 'Authentication backend is not configured.' });
    const cognitoUser = new CognitoUser({ Username: email.trim().toLowerCase(), Pool: userPool });
    return new Promise((resolve) => {
      cognitoUser.confirmPassword(code.trim(), newPassword, {
        onSuccess: () => resolve({ success: true, message: 'Password reset successfully! You can now log in with your new password.' }),
        onFailure: (err) => resolve({ success: false, message: err?.message || 'Failed to reset password.' }),
      });
    });
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      isConfigured,
      login,
      signup,
      confirmSignup,
      logout,
      forgotPassword,
      confirmPasswordReset,
      getIdToken,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
