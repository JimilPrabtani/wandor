import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { apiFetch, ApiError, type ApiTrip } from '../lib/api';
import ItineraryView from '../components/ItineraryView';
import { getTripImage } from '../data/trips';
import { Sparkles, Trash2, Calendar, MapPin, User, LogOut, History as HistoryIcon, PlusCircle, AlertCircle, KeyRound, ChevronDown, ChevronUp } from 'lucide-react';

export default function History() {
  const { user, logout, getIdToken } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'history' | 'profile'>('history');

  const [trips, setTrips] = useState<ApiTrip[]>([]);
  const [generated, setGenerated] = useState(0);
  const [limit, setLimit] = useState(7);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedSk, setExpandedSk] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    apiFetch<{ trips: ApiTrip[]; generated: number; limit: number }>('/api/trips', {}, getIdToken)
      .then((data) => {
        if (cancelled) return;
        setTrips(data.trips);
        setGenerated(data.generated);
        setLimit(data.limit);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err instanceof ApiError && err.status === 401
          ? 'Your session has expired. Please log in again.'
          : 'Could not load your trip history. Please try again.');
      })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = async (sk: string) => {
    const previous = trips;
    setTrips(trips.filter(t => t.sk !== sk));
    try {
      await apiFetch(`/api/trips/${encodeURIComponent(sk)}`, { method: 'DELETE' }, getIdToken);
    } catch {
      setTrips(previous);
      setError('Could not delete that trip. Please try again.');
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-transparent pt-20 pb-24 px-6 flex items-center justify-center">
        <div className="bg-white/80 border-[3px] border-white rounded-[44px] shadow-[0_0_4px_0_rgba(0,0,0,0.15)] backdrop-blur-2xl p-10 text-center max-w-[500px]">
          <div className="w-16 h-16 rounded-full bg-wandor-dark/5 mx-auto mb-4 flex items-center justify-center">
            <User className="w-8 h-8 text-wandor-dark" />
          </div>
          <h2 className="font-sans text-2xl font-bold text-wandor-dark mb-2">Please Log In</h2>
          <p className="font-sans text-wandor-muted text-base mb-6">
            You need to be logged in to view your trip history and profile.
          </p>
          <Link
            to="/login"
            className="inline-block bg-wandor-dark text-white px-8 py-3.5 rounded-full font-sans text-sm font-semibold uppercase tracking-wider hover:bg-black transition-all shadow-md no-underline"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent pt-8 sm:pt-12 pb-24 px-4 sm:px-6 md:px-20">
      <div className="max-w-[1100px] mx-auto">

        {/* User Profile Banner Header */}
        <div className="bg-white/80 border-[3px] border-white rounded-[44px] shadow-[0_0_4px_0_rgba(0,0,0,0.15)] backdrop-blur-xl p-8 max-md:p-6 mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-md shrink-0"
              />
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-wandor-dark/5 text-wandor-dark font-sans text-xs font-bold uppercase tracking-wider mb-1">
                  Explorer Account
                </span>
                <h1 className="font-sans text-3xl font-bold text-wandor-dark">{user.name}</h1>
                <p className="font-sans text-sm text-wandor-muted">
                  {user.email} • {generated} of {limit} free trips used
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <Link
                to="/ai-generator"
                className="bg-wandor-dark text-white px-5 py-3 rounded-full font-sans text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 hover:bg-black transition-all shadow-sm no-underline"
              >
                <Sparkles className="w-4 h-4 text-amber-400" /> Generate New Trip
              </Link>

              <button
                onClick={() => { logout(); navigate('/login'); }}
                className="px-5 py-3 rounded-full border border-red-200 bg-red-50 text-red-600 font-sans text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 hover:bg-red-100 transition-all cursor-pointer"
              >
                <LogOut className="w-4 h-4 text-red-600" /> Log Out
              </button>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-3 mb-8 border-b border-black/5 pb-4">
          <button
            onClick={() => setActiveTab('history')}
            className={`px-6 py-3 rounded-full font-sans text-sm font-bold uppercase tracking-wider transition-all cursor-pointer inline-flex items-center gap-2 ${
              activeTab === 'history'
                ? 'bg-wandor-dark text-white shadow-md'
                : 'bg-white/70 backdrop-blur-md border border-white text-wandor-dark hover:bg-white'
            }`}
          >
            <HistoryIcon className="w-4 h-4" /> My History ({trips.length})
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`px-6 py-3 rounded-full font-sans text-sm font-bold uppercase tracking-wider transition-all cursor-pointer inline-flex items-center gap-2 ${
              activeTab === 'profile'
                ? 'bg-wandor-dark text-white shadow-md'
                : 'bg-white/70 backdrop-blur-md border border-white text-wandor-dark hover:bg-white'
            }`}
          >
            <User className="w-4 h-4" /> Profile & Security
          </button>
        </div>

        {/* TAB 1: MY HISTORY */}
        {activeTab === 'history' && (
          <div>
            {error && (
              <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 flex items-center gap-3 text-sm font-semibold">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {loading ? (
              <div className="bg-white/70 border-[3px] border-white rounded-[36px] p-12 text-center backdrop-blur-xl">
                <Sparkles className="w-10 h-10 text-amber-500 mx-auto mb-4 animate-spin" />
                <p className="font-sans text-wandor-muted text-base">Loading your saved trips...</p>
              </div>
            ) : trips.length === 0 ? (
              <div className="bg-white/70 border-[3px] border-white rounded-[36px] p-12 text-center backdrop-blur-xl">
                <HistoryIcon className="w-12 h-12 text-wandor-muted mx-auto mb-4" />
                <h3 className="font-sans text-2xl font-bold text-wandor-dark mb-2">No Saved Trips Yet</h3>
                <p className="font-sans text-wandor-muted text-base mb-6 max-w-[400px] mx-auto">
                  Generate an AI itinerary to populate your history.
                </p>
                <Link
                  to="/ai-generator"
                  className="inline-flex items-center gap-2 bg-wandor-dark text-white px-6 py-3.5 rounded-full font-sans text-sm font-semibold uppercase tracking-wider hover:bg-black transition-all no-underline"
                >
                  <PlusCircle className="w-4 h-4" /> Create AI Itinerary
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {trips.map((trip) => (
                  <div
                    key={trip.sk}
                    className="bg-white border-2 border-white rounded-[32px] overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl group"
                  >
                    {/* Card Header Image */}
                    <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                      <img
                        src={getTripImage({ country: trip.destination })}
                        alt={trip.destination}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="bg-amber-500/90 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1">
                          <Sparkles className="w-3 h-3" /> AI Generated
                        </span>
                        <span className="bg-white/30 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {trip.destination}
                        </span>
                      </div>

                      <button
                        onClick={() => handleDelete(trip.sk)}
                        title="Remove from history"
                        className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white/80 hover:text-red-400 hover:bg-black/60 flex items-center justify-center transition-all cursor-pointer border border-white/20"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-sans text-xl font-bold text-white leading-tight line-clamp-1">
                          {trip.itinerary?.title || trip.destination}
                        </h3>
                        <p className="font-sans text-xs text-white/80 flex items-center gap-1 mt-1">
                          <Calendar className="w-3 h-3" />
                          Added {new Date(trip.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} • {trip.days} Days
                        </p>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 bg-white">
                      {trip.preferences && (
                        <p className="font-sans text-xs text-wandor-muted italic mb-4 line-clamp-2 bg-gray-50 p-3 rounded-xl border border-gray-100">
                          "{trip.preferences}"
                        </p>
                      )}

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-wandor-muted font-medium">{trip.days}-Day Plan</span>
                        <button
                          onClick={() => setExpandedSk(expandedSk === trip.sk ? null : trip.sk)}
                          className="text-wandor-dark font-sans text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
                        >
                          {expandedSk === trip.sk ? (
                            <>Hide Full Plan <ChevronUp className="w-3.5 h-3.5" /></>
                          ) : (
                            <>View Full Plan <ChevronDown className="w-3.5 h-3.5" /></>
                          )}
                        </button>
                      </div>

                      {expandedSk === trip.sk && trip.itinerary && (
                        <div className="mt-6 pt-6 border-t border-gray-100">
                          <ItineraryView itinerary={trip.itinerary} />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: PROFILE & SECURITY */}
        {activeTab === 'profile' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Profile Info Card */}
            <div className="bg-white/85 border-[3px] border-white rounded-[44px] shadow-[0_0_4px_0_rgba(0,0,0,0.15)] backdrop-blur-xl p-8">
              <h2 className="font-sans text-2xl font-bold text-wandor-dark mb-6 flex items-center gap-2">
                <User className="w-6 h-6 text-wandor-dark" /> Profile Information
              </h2>

              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-wandor-muted mb-1.5">Full Name</label>
                  <input
                    type="text"
                    readOnly
                    value={user.name}
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-2xl font-sans text-sm font-medium text-gray-500 cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-wandor-muted mb-1.5">Email Address</label>
                  <input
                    type="email"
                    readOnly
                    value={user.email}
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-2xl font-sans text-sm font-medium text-gray-500 cursor-not-allowed"
                  />
                  <p className="text-[11px] text-wandor-muted mt-1">Your identity is managed by Amazon Cognito.</p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-wandor-muted mb-1.5">AI Trip Usage</label>
                  <div className="px-4 py-3 bg-white border border-gray-200 rounded-2xl font-sans text-sm font-medium text-wandor-dark">
                    {generated} of {limit} free AI trip generations used
                  </div>
                </div>
              </div>
            </div>

            {/* Password & Security Card */}
            <div className="bg-white/85 border-[3px] border-white rounded-[44px] shadow-[0_0_4px_0_rgba(0,0,0,0.15)] backdrop-blur-xl p-8">
              <h2 className="font-sans text-2xl font-bold text-wandor-dark mb-4 flex items-center gap-2">
                <KeyRound className="w-6 h-6 text-wandor-dark" /> Password & Security
              </h2>

              <p className="font-sans text-xs text-wandor-muted leading-relaxed mb-6">
                To change your password, request a verification code to be sent to your registered email address, then set a new password.
              </p>

              <Link
                to={`/reset-password?email=${encodeURIComponent(user.email)}`}
                className="w-full py-4 rounded-full bg-white border border-gray-300 text-wandor-dark font-sans text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-gray-50 transition-all cursor-pointer shadow-sm mb-6 no-underline"
              >
                <KeyRound className="w-4 h-4 text-wandor-dark" /> Reset My Password
              </Link>

              <div className="pt-6 border-t border-gray-100">
                <button
                  onClick={() => { logout(); navigate('/login'); }}
                  className="w-full py-3.5 rounded-full border border-red-200 bg-red-50 text-red-600 font-sans text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-red-100 transition-all cursor-pointer"
                >
                  <LogOut className="w-4 h-4 text-red-600" /> Log Out of Account
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
