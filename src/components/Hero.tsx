import React, { useRef, useState, useEffect } from 'react';
import { Upload, Sparkles } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { apiFetch, ApiError, type ApiTrip } from '../lib/api';
import { API_GENERATE_PATH, MAX_TRIP_DAYS } from '../lib/config';
import { parseTripPrompt } from '../lib/parseTrip';
import ItineraryView from './ItineraryView';

const SUGGESTIONS = [
  "I'm planning a 7-day trip to Japan in October. I love food, hidden cafes, scenic hikes, and want to avoid crowds....",
  "Looking for a relaxing weekend in Bali, focusing on yoga retreats, pristine beaches, and organic food....",
  "Show me the best culinary spots in Paris, avoiding tourist traps, for a 5-day romantic getaway....",
  "I have two weeks for an adventure in New Zealand. I want to try bungee jumping, see the fjords, and hike the glaciers....",
  "Plan a 10-day cultural dive into Egypt. I want to see the Pyramids, cruise the Nile, and explore ancient temples....",
  "Looking for a family-friendly week in Costa Rica. We love wildlife, easy nature walks, and relaxing on the beach....",
  "Show me an action-packed 5-day itinerary for New York City, including Broadway shows, great pizza, and hidden speakeasies...."
];

// Best-effort parse lives in src/lib/parseTrip.ts (single chat-box source of truth).

function friendlyError(err: unknown): string {
  if (err instanceof ApiError) {
    if (err.status === 401) return 'Your session has expired. Please log in again, then retry.';
    if (err.status === 429 || err.code === 'rate_limited')
      return 'Too many requests right now. Wait about a minute and try again.';
    if (err.status === 504 || err.code === 'model_timeout')
      return 'Generation timed out (longer trips take longer). Try fewer days — e.g. 3–5 — or retry in a moment.';
    if (err.status === 503 || err.code === 'model_unavailable')
      return 'The AI model is busy right now. Try a shorter trip or try again in a minute.';
    if (err.code === 'provider_quota_exceeded')
      return 'The AI quota is exhausted right now. Please try again later.';
    if (err.code === 'destination_required') return 'Please tell us the destination.';
    if (err.code === 'days_must_be_1_to_30') return `Trip length must be between 1 and ${MAX_TRIP_DAYS} days.`;
    if (err.status === 502) return 'Trip generation failed on our end. Please try again in a moment.';
    if (err.code === 'server_misconfigured')
      return 'The AI backend is not configured yet. Please contact support.';
    return 'Something went wrong. Please try again.';
  }
  return 'Network error. Please check your connection and try again.';
}

export default function Hero() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const [prompt, setPrompt] = useState('');
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ApiTrip | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, getIdToken } = useAuth();

  useEffect(() => {
    if (location.hash === '#chatbox') {
      const element = document.getElementById('chatbox');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => element.focus(), 500);
      }
    }
  }, [location]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSuggestionIndex((prev) => (prev + 1) % SUGGESTIONS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [prompt]);

  const currentSuggestion = SUGGESTIONS[suggestionIndex];

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab' && prompt === '') {
      e.preventDefault();
      setPrompt(currentSuggestion);
    }
  };

  // Prompt-only: everything (destination, days, style, budget) comes from the chat box.
  const handlePlanMyTrip = async () => {
    setError(null);
    if (!user) {
      navigate('/login');
      return;
    }
    const activePrompt = prompt.trim() || currentSuggestion;
    const parsed = parseTripPrompt(activePrompt);
    const finalDestination = parsed.destination.trim();
    // Default to 5 days when the prompt doesn't state a length.
    const numDays = Number.parseInt(parsed.days || '5', 10);

    if (!finalDestination) {
      setError('Tell us where to go in your message — e.g. "7-day trip to Japan with hidden cafes and hikes".');
      return;
    }
    if (!Number.isInteger(numDays) || numDays < 1 || numDays > MAX_TRIP_DAYS) {
      setError(`Couldn't find a trip length in your message — include 1–${MAX_TRIP_DAYS} days, e.g. "5-day trip to Paris".`);
      return;
    }

    setIsGenerating(true);
    setResult(null);
    try {
      const data = await apiFetch<{ trip: ApiTrip }>(
        API_GENERATE_PATH,
        {
          method: 'POST',
          body: { destination: finalDestination, days: numDays, preferences: activePrompt, prompt: activePrompt },
        },
        getIdToken
      );
      setResult(data.trip);
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    } catch (err) {
      setError(friendlyError(err));
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="relative min-h-svh w-full overflow-hidden">
      <div className="relative z-[2] max-w-[1360px] mx-auto pt-[88px] max-md:pt-[76px]">

        <div className="flex flex-col items-center px-6 pt-16 pb-24 text-center">
          <h1 className="font-sans text-[clamp(40px,6vw,68px)] font-medium text-wandor-text leading-[1.05] tracking-[-0.04em] max-w-[820px] mb-5">
            Where are you exploring next?
          </h1>
          <p className="font-sans text-xl font-medium text-wandor-muted leading-relaxed max-w-[500px] mb-10">
            Tell our AI where you're going and what you love. We'll create a personalized itinerary for you.
          </p>

          {/* Liquid Glass Prompt Card */}
          <div className="relative w-full max-w-[701px] min-h-[220px] bg-white border-[3px] border-white rounded-[36px] sm:rounded-[44px] shadow-[0_0_4px_0_rgba(0,0,0,0.15)] overflow-hidden p-6 sm:p-7 text-left">

            {/* Dynamic Suggestion (shown when empty) */}
            {prompt === '' && (
              <div
                onClick={() => setPrompt(currentSuggestion)}
                className="w-full cursor-pointer transition-opacity duration-500 ease-in-out hover:opacity-70 group pr-2 mb-12 sm:mb-8"
              >
                <p className="font-sans text-lg sm:text-xl font-medium text-wandor-prompt/60 leading-relaxed break-words">
                  {currentSuggestion}
                </p>
                <span className="text-xs font-sans font-semibold uppercase text-wandor-prompt/40 mt-2 block opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to use this prompt
                </span>
              </div>
            )}

            {/* Chat box only — destination, days, style & budget all come from the prompt text */}
            <textarea
              id="chatbox"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder=""
              className="w-full h-[100px] bg-transparent border-none outline-none font-sans text-lg sm:text-xl font-medium text-wandor-prompt leading-relaxed resize-none relative z-10 mb-4"
              spellCheck={false}
            />

            <p className="font-sans text-xs text-gray-400 mb-6">
              Include destination + length in your message — e.g. “7-day trip to Japan with hidden cafes, food tours and hikes”.
            </p>

            {error && (
              <div className="mb-4 text-red-700 bg-red-50 border border-red-200 rounded-2xl p-4 font-sans text-sm text-left">
                {error}
              </div>
            )}

            <div className="flex items-center justify-between gap-4 mt-2">
              <input ref={fileInputRef} type="file" accept="image/*,.pdf" className="hidden" />

              <button
                aria-label="Upload inspiration"
                onClick={() => fileInputRef.current?.click()}
                className="w-11 h-11 bg-transparent border border-white/70 rounded-full cursor-pointer flex items-center justify-center backdrop-blur-[14px] transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 shrink-0"
              >
                <Upload className="w-[18px] h-[18px] text-wandor-text flex-shrink-0" />
              </button>

              <button
                onClick={handlePlanMyTrip}
                disabled={isGenerating}
                className="px-6 h-12 sm:h-14 bg-black border-none rounded-[44px] shadow-[0_0_2px_0_rgba(0,0,0,0.05)] cursor-pointer flex items-center justify-center font-sans text-sm sm:text-base font-medium text-[#fafafa] uppercase tracking-[0.02em] transition-all hover:bg-[#333] active:scale-95 gap-2 disabled:opacity-60"
              >
                {isGenerating ? (
                  <>
                    <Sparkles className="w-5 h-5 text-amber-400 animate-spin" />
                    Generating…
                  </>
                ) : (
                  'Plan My Trip'
                )}
              </button>
            </div>
          </div>

          {/* Inline result — same page, solid opaque card for readability */}
          {(isGenerating || result) && (
            <div ref={resultRef} className="w-full max-w-[860px] mt-10 text-left scroll-mt-24">
              {isGenerating && !result && (
                <div className="bg-white rounded-[32px] shadow-xl border border-black/5 p-8 flex items-center gap-4" aria-busy="true" aria-label="Generating itinerary">
                  <div className="w-10 h-10 rounded-full border-2 border-black/10 border-t-black/60 animate-spin shrink-0" />
                  <div>
                    <p className="font-sans text-base font-bold text-gray-900">Crafting your itinerary…</p>
                    <p className="font-sans text-sm text-gray-500">Longer trips take longer — 7 days can take ~30–45 seconds.</p>
                  </div>
                </div>
              )}
              {result && (
                <div className="bg-white rounded-[32px] shadow-xl border border-black/5 p-6 sm:p-10">
                  <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                      <Sparkles className="w-3.5 h-3.5" /> Your AI Itinerary — {result.destination}, {result.days} days
                    </div>
                    <Link
                      to="/history"
                      className="inline-flex items-center gap-2 text-gray-900 font-sans text-xs font-bold uppercase tracking-wider hover:opacity-70 transition-opacity no-underline"
                    >
                      View in History
                    </Link>
                  </div>
                  <ItineraryView itinerary={result.itinerary} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
