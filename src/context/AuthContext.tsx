// Google Identity Services auth. No backend sessions, no AWS: the Google ID
// token (JWT) is the session. It lives in localStorage, its expiry is checked
// client-side, and the Vercel API re-validates it with Google on every
// generation request. When it expires the user signs in again (one click).
import React, { createContext, useContext, useState, useEffect } from 'react';
import { GOOGLE_CLIENT_ID as CLIENT_ID, AVATAR_BASE, TOKEN_KEY } from '../lib/config';

export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
}

interface AuthContextType {
  user: UserProfile | null;
  loading: boolean;
  isConfigured: boolean;
  signInWithCredential: (idToken: string) => boolean;
  getIdToken: () => Promise<string | null>;
  logout: () => void;
}

declare global {
  interface Window {
    google?: any;
  }
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
  const name =
    typeof payload?.name === 'string' && payload.name.trim()
      ? payload.name
      : email.split('@')[0];
  const picture = typeof payload?.picture === 'string' ? payload.picture : '';
  return {
    name,
    email,
    avatar:
      picture ||
      `${AVATAR_BASE}?seed=${encodeURIComponent(email)}`,
  };
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const isConfigured = !!CLIENT_ID;

  // Restore session from the stored Google ID token on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(TOKEN_KEY);
      if (stored && isJwtValid(stored)) {
        setUser(profileFromIdToken(stored));
      } else if (stored) {
        localStorage.removeItem(TOKEN_KEY);
      }
    } catch {
      // storage unavailable — stay logged out
    }
    setLoading(false);
  }, []);

  const signInWithCredential = (idToken: string): boolean => {
    if (!isJwtValid(idToken)) return false;
    const profile = profileFromIdToken(idToken);
    if (!profile) return false;
    try {
      localStorage.setItem(TOKEN_KEY, idToken);
    } catch {
      return false;
    }
    setUser(profile);
    return true;
  };

  const getIdToken = async (): Promise<string | null> => {
    try {
      const stored = localStorage.getItem(TOKEN_KEY);
      if (stored && isJwtValid(stored)) return stored;
      localStorage.removeItem(TOKEN_KEY);
    } catch {
      // ignore
    }
    setUser(null);
    return null;
  };

  const logout = () => {
    try {
      localStorage.removeItem(TOKEN_KEY);
    } catch {
      // ignore
    }
    try {
      window.google?.accounts?.id?.disableAutoSelect();
    } catch {
      // GIS not loaded — nothing to reset
    }
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, isConfigured, signInWithCredential, getIdToken, logout }}
    >
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

export const googleClientId = CLIENT_ID;
