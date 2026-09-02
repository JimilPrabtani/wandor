import React, { useState } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { KeyRound, Lock, Mail, Eye, EyeOff, CheckCircle2, AlertCircle, ArrowLeft, ShieldCheck } from 'lucide-react';

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { forgotPassword, confirmPasswordReset } = useAuth();

  const [step, setStep] = useState<'request' | 'confirm'>('request');
  const [email, setEmail] = useState(searchParams.get('email') || '');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [status, setStatus] = useState<{ type: 'success' | 'error' | 'info'; message: string } | null>(null);

  const handleRequestCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setSubmitting(true);
    const res = await forgotPassword(email);
    setSubmitting(false);
    if (res.success) {
      setStep('confirm');
      setStatus({ type: 'info', message: `We emailed a verification code to ${email}. Enter it below with your new password.` });
    } else {
      setStatus({ type: 'error', message: res.message || 'Could not send reset code.' });
    }
  };

  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (newPassword !== confirmPassword) {
      setStatus({ type: 'error', message: 'Passwords do not match.' });
      return;
    }

    setSubmitting(true);
    const res = await confirmPasswordReset(email, code, newPassword);
    setSubmitting(false);
    if (res.success) {
      setStatus({ type: 'success', message: res.message || 'Password reset successfully!' });
    } else {
      setStatus({ type: 'error', message: res.message || 'Failed to reset password.' });
    }
  };

  const inputClass = "w-full pl-11 pr-4 py-3.5 bg-white/90 border border-gray-200 rounded-full font-sans text-sm font-medium text-wandor-dark outline-none focus:border-wandor-dark transition-colors";

  return (
    <div className="min-h-screen bg-transparent pt-12 pb-24 px-6 flex items-center justify-center">
      <div className="w-full max-w-[480px]">

        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-wandor-muted hover:text-wandor-dark font-sans text-sm font-medium mb-6 transition-colors group no-underline"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" /> Return to Login
        </Link>

        <div className="bg-white/90 border-[3px] border-white rounded-[44px] shadow-[0_12px_40px_rgba(0,0,0,0.12)] backdrop-blur-2xl p-8 max-md:p-6 text-center">

          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-wandor-dark/5 mb-4">
            <KeyRound className="w-6 h-6 text-wandor-dark" />
          </div>

          <h1 className="font-sans text-3xl font-bold text-wandor-dark mb-2">
            {step === 'request' ? 'Reset Password' : 'Set New Password'}
          </h1>
          <p className="font-sans text-sm text-wandor-muted mb-6">
            {step === 'request'
              ? 'Enter your email address and we will send you a verification code.'
              : 'Enter the emailed code and choose a new secure password.'}
          </p>

          {status && (
            <div className={`mb-6 p-4 rounded-2xl border text-left flex items-start gap-3 animate-in fade-in duration-200 ${
              status.type === 'success' ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                : status.type === 'info' ? 'bg-blue-50 border-blue-200 text-blue-900'
                : 'bg-red-50 border-red-200 text-red-900'
            }`}>
              {status.type === 'error' ? (
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              ) : (
                <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${status.type === 'success' ? 'text-emerald-600' : 'text-blue-600'}`} />
              )}
              <div>
                <p className="font-sans text-xs font-semibold leading-relaxed">{status.message}</p>
                {status.type === 'success' && (
                  <button
                    onClick={() => navigate('/login')}
                    className="mt-3 py-2 px-5 rounded-full bg-emerald-700 text-white font-sans text-xs font-bold uppercase tracking-wider hover:bg-emerald-800 transition-colors cursor-pointer"
                  >
                    Go to Login Page
                  </button>
                )}
              </div>
            </div>
          )}

          {step === 'request' && (
            <form onSubmit={handleRequestCode} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-wandor-dark mb-1.5">
                  Registered Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-wandor-muted" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-full bg-wandor-dark text-white font-sans text-sm font-bold uppercase tracking-wider hover:bg-black transition-all shadow-md mt-6 cursor-pointer disabled:opacity-50"
              >
                Send Verification Code
              </button>
            </form>
          )}

          {step === 'confirm' && status?.type !== 'success' && (
            <form onSubmit={handleConfirm} className="space-y-4 text-left">
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
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="123456"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-wandor-dark mb-1.5">
                  New Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-wandor-muted" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Min 8 characters"
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

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-wandor-dark mb-1.5">
                  Confirm New Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-wandor-muted" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className={inputClass}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-full bg-wandor-dark text-white font-sans text-sm font-bold uppercase tracking-wider hover:bg-black transition-all shadow-md mt-6 cursor-pointer disabled:opacity-50"
              >
                Reset Password
              </button>

              <button
                type="button"
                onClick={() => { setStep('request'); setStatus(null); }}
                className="w-full text-center text-xs font-semibold text-wandor-muted hover:text-wandor-dark underline underline-offset-4 cursor-pointer pt-2"
              >
                Didn't get a code? Send again
              </button>
            </form>
          )}

          <div className="mt-6 flex items-center justify-center gap-1.5 text-xs text-wandor-muted">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Secured by Amazon Cognito</span>
          </div>

        </div>

      </div>
    </div>
  );
}
