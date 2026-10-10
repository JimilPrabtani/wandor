import { useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import GoogleSignInButton from '../components/GoogleSignInButton';
import { ArrowLeft, User, ShieldCheck, AlertCircle } from 'lucide-react';

export default function Login() {
  const { user, isConfigured } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = (location.state as any)?.from?.pathname || '/history';

  // Redirect once authenticated
  useEffect(() => {
    if (user) navigate(redirectPath, { replace: true });
  }, [user, navigate, redirectPath]);

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
            <User className="w-6 h-6 text-wandor-dark" />
          </div>

          <h1 className="font-sans text-3xl font-bold text-wandor-dark mb-2">
            Welcome to Wandor
          </h1>
          <p className="font-sans text-sm text-wandor-muted mb-6">
            Sign in with Google to generate itineraries and access your trip history.
          </p>

          {/* Backend not configured notice */}
          {!isConfigured && (
            <div className="mb-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 text-left flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="font-sans text-xs font-semibold leading-relaxed">
                Sign-in is not configured. Set VITE_GOOGLE_CLIENT_ID in your environment to enable it.
              </p>
            </div>
          )}

          {/* Sign in with Google */}
          <div className="mb-6">
            <GoogleSignInButton />
          </div>

          <div className="mt-6 flex items-center justify-center gap-1.5 text-xs text-wandor-muted">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Secured by Google</span>
          </div>

        </div>

      </div>
    </div>
  );
}
