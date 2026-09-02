import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import GoogleOAuthButton from '../components/GoogleOAuthButton';
import { ArrowLeft, Mail, Lock, User, ShieldCheck, Eye, EyeOff, AlertCircle, CheckCircle2, KeyRound } from 'lucide-react';

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [needsConfirmation, setNeedsConfirmation] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const { user, isConfigured, login, signup, confirmSignup } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = (location.state as any)?.from?.pathname || '/history';

  // Redirect once authenticated (covers email login and Google OAuth callback)
  useEffect(() => {
    if (user) navigate(redirectPath, { replace: true });
  }, [user, navigate, redirectPath]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);
    setSubmitting(true);

    try {
      if (needsConfirmation) {
        const res = await confirmSignup(email, confirmationCode);
        if (!res.success) {
          setErrorMsg(res.message || 'Confirmation failed.');
          return;
        }
        // Log straight in with the password used at sign-up
        const loginRes = await login(email, password);
        if (!loginRes.success) {
          setNeedsConfirmation(false);
          setIsSignUp(false);
          setSuccessMsg('Email confirmed! Please log in.');
          return;
        }
        return; // effect above navigates
      }

      if (isSignUp) {
        if (password !== confirmPassword) {
          setErrorMsg('Passwords do not match. Please verify your entries.');
          return;
        }
        const res = await signup(email, password, name);
        if (!res.success) {
          setErrorMsg(res.message || 'Registration failed.');
          return;
        }
        if (res.needsConfirmation) {
          setNeedsConfirmation(true);
          setSuccessMsg(`We sent a confirmation code to ${email}. Enter it below to activate your account.`);
          return;
        }
        await login(email, password);
      } else {
        const res = await login(email, password);
        if (!res.success) {
          if (res.needsConfirmation) {
            setNeedsConfirmation(true);
            setSuccessMsg('Your email is not confirmed yet. Enter the code from your inbox below.');
            return;
          }
          setErrorMsg(res.message || 'Login failed.');
          return;
        }
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-transparent pt-12 pb-24 px-6 flex items-center justify-center">
      <div className="w-full max-w-[480px]">

        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-wandor-muted hover:text-wandor-dark font-sans text-sm font-medium mb-6 transition-colors group no-underline"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" /> Back to Home
        </Link>

        {/* Liquid Glass Card */}
        <div className="bg-white/90 border-[3px] border-white rounded-[44px] shadow-[0_12px_40px_rgba(0,0,0,0.12)] backdrop-blur-2xl p-8 max-md:p-6 text-center">

          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-wandor-dark/5 mb-4">
            {needsConfirmation ? <KeyRound className="w-6 h-6 text-wandor-dark" /> : <User className="w-6 h-6 text-wandor-dark" />}
          </div>

          <h1 className="font-sans text-3xl font-bold text-wandor-dark mb-2">
            {needsConfirmation ? 'Confirm Your Email' : isSignUp ? 'Join Wandor' : 'Welcome Back'}
          </h1>
          <p className="font-sans text-sm text-wandor-muted mb-6">
            {needsConfirmation
              ? 'Enter the 6-digit verification code we emailed you.'
              : isSignUp
                ? 'Create an account to save itineraries and access AI trip history.'
                : 'Log in to view your saved trip history and AI itineraries.'}
          </p>

          {/* Backend not configured notice */}
          {!isConfigured && (
            <div className="mb-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 text-left flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="font-sans text-xs font-semibold leading-relaxed">
                Authentication backend is not configured. Set VITE_COGNITO_USER_POOL_ID and VITE_COGNITO_CLIENT_ID in your .env file to enable sign-in.
              </p>
            </div>
          )}

          {/* Alert Messages */}
          {errorMsg && (
            <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-left flex items-start gap-3 animate-in fade-in duration-200">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <p className="font-sans text-xs font-semibold leading-relaxed">{errorMsg}</p>
            </div>
          )}

          {successMsg && (
            <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-left flex items-start gap-3 animate-in fade-in duration-200">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <p className="font-sans text-xs font-semibold leading-relaxed">{successMsg}</p>
            </div>
          )}

          {!needsConfirmation && (
            <>
              {/* Google via Cognito Hosted UI */}
              <div className="mb-6">
                <GoogleOAuthButton />
              </div>

              <div className="relative flex py-2 items-center mb-6">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink mx-4 text-xs font-semibold uppercase text-wandor-muted">or continue with email</span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>
            </>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            {needsConfirmation ? (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-wandor-dark mb-1.5">
                  Verification Code
                </label>
                <div className="relative">
                  <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-wandor-muted" />
                  <input
                    type="text"
                    required
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    value={confirmationCode}
                    onChange={(e) => setConfirmationCode(e.target.value)}
                    placeholder="123456"
                    className="w-full pl-11 pr-4 py-3.5 bg-white/90 border border-gray-200 rounded-full font-sans text-sm font-medium text-wandor-dark outline-none focus:border-wandor-dark transition-colors"
                  />
                </div>
              </div>
            ) : (
              <>
                {isSignUp && (
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-wandor-dark mb-1.5">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-wandor-muted" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Jane Explorer"
                        className="w-full pl-11 pr-4 py-3.5 bg-white/90 border border-gray-200 rounded-full font-sans text-sm font-medium text-wandor-dark outline-none focus:border-wandor-dark transition-colors"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-wandor-dark mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-wandor-muted" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full pl-11 pr-4 py-3.5 bg-white/90 border border-gray-200 rounded-full font-sans text-sm font-medium text-wandor-dark outline-none focus:border-wandor-dark transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-wandor-dark">
                      Password
                    </label>
                    {!isSignUp && (
                      <button
                        type="button"
                        onClick={() => navigate(`/reset-password${email ? `?email=${encodeURIComponent(email)}` : ''}`)}
                        className="text-xs font-semibold text-wandor-muted hover:text-wandor-dark underline cursor-pointer"
                      >
                        Forgot?
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-wandor-muted" />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-11 pr-11 py-3.5 bg-white/90 border border-gray-200 rounded-full font-sans text-sm font-medium text-wandor-dark outline-none focus:border-wandor-dark transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-wandor-muted hover:text-wandor-dark cursor-pointer"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {isSignUp && (
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-wandor-dark mb-1.5">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-wandor-muted" />
                      <input
                        type={showPassword ? "text" : "password"}
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-11 pr-4 py-3.5 bg-white/90 border border-gray-200 rounded-full font-sans text-sm font-medium text-wandor-dark outline-none focus:border-wandor-dark transition-colors"
                      />
                    </div>
                  </div>
                )}
              </>
            )}

            <button
              type="submit"
              disabled={submitting || !isConfigured}
              className="w-full py-4 rounded-full bg-wandor-dark text-white font-sans text-sm font-bold uppercase tracking-wider hover:bg-black transition-all shadow-md mt-6 cursor-pointer disabled:opacity-50"
            >
              {needsConfirmation ? 'Confirm Email' : isSignUp ? 'Create Account' : 'Log In'}
            </button>
          </form>

          <div className="mt-6 text-center">
            {needsConfirmation ? (
              <button
                type="button"
                onClick={() => { setNeedsConfirmation(false); setErrorMsg(null); setSuccessMsg(null); }}
                className="text-xs font-semibold text-wandor-dark underline underline-offset-4 cursor-pointer"
              >
                Back to sign in
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setErrorMsg(null);
                  setSuccessMsg(null);
                }}
                className="text-xs font-semibold text-wandor-dark underline underline-offset-4 cursor-pointer"
              >
                {isSignUp ? 'Already have an account? Log in' : "Don't have an account? Sign up"}
              </button>
            )}
          </div>

          <div className="mt-6 flex items-center justify-center gap-1.5 text-xs text-wandor-muted">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Secured by Amazon Cognito</span>
          </div>

        </div>

      </div>
    </div>
  );
}
