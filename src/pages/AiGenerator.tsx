import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { apiFetch, ApiError, type ApiTrip } from '../lib/api';
import { API_GENERATE_PATH, MAX_TRIP_DAYS } from '../lib/config';
import { parseTripPrompt } from '../lib/parseTrip';
import ItineraryView from '../components/ItineraryView';
import { Sparkles, History as HistoryIcon } from 'lucide-react';

export default function AiGenerator() {
  const { getIdToken } = useAuth();
  const location = useLocation();

  const [promptText, setPromptText] = useState((location.state as any)?.prompt || '');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ApiTrip | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const fullPrompt = promptText.trim();
    if (!fullPrompt) {
      setError('Describe your trip — e.g. "7-day trip to Japan with hidden cafes, food tours and scenic hikes".');
      return;
    }

    // Prompt-only: destination + days are parsed from the chat box text.
    const parsed = parseTripPrompt(fullPrompt);
    if (!parsed.destination) {
      setError('Include a destination in your message — e.g. "7-day trip to Japan with hidden cafes and hikes".');
      return;
    }
    // Default to 5 days when the prompt doesn't state a length.
    const numDays = Number.parseInt(parsed.days || '5', 10);
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
          body: {
            destination: parsed.destination,
            days: numDays,
            preferences: fullPrompt,
            prompt: fullPrompt,
          },
        },
        getIdToken
      );
      setResult(data.trip);
    } catch (err) {
      if (err instanceof ApiError) {
        if (err.status === 402) {
          setError(`You've used all ${err.limit ?? 7} free AI trips. Upgrade to Pro (coming soon) for unlimited generations.`);
        } else if (err.code === 'destination_required') {
          setError('Include a destination in your message — e.g. "7-day trip to Japan".');
        } else if (err.code === 'days_must_be_1_to_30') {
          setError(`Trip length must be between 1 and ${MAX_TRIP_DAYS} days — include it in your message, e.g. "5-day trip to Paris".`);
        } else if (err.status === 401) {
          setError('Your session has expired. Please log in again.');
        } else if (err.status === 502) {
          setError('Trip generation failed on our end. Please try again in a moment.');
        } else if (err.status === 503 || err.code === 'model_unavailable') {
          setError('The AI model is busy right now. Try a shorter trip or try again in a minute.');
        } else if (err.status === 504 || err.code === 'model_timeout') {
          setError('Generation timed out. Try fewer days or try again — shorter trips return faster.');
        } else if (err.code === 'provider_quota_exceeded') {
          setError('The AI quota is exhausted right now. Please try again later or contact support.');
        } else if (err.code === 'rate_limited' || err.status === 429) {
          setError('Too many requests right now. Wait a minute and try again.');
        } else if (err.code === 'server_misconfigured') {
          setError('The AI backend is not configured yet (missing API key). Please contact support.');
        } else {
          setError('Something went wrong. Please try again.');
        }
      } else {
        setError('Network error. Please check your connection and try again.');
      }
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-transparent pt-8 sm:pt-12 pb-24 px-4 sm:px-6 md:px-20">
      <div className="max-w-[860px] mx-auto">

        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white text-wandor-dark text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-500" /> Wandor AI Engine
          </div>
          <h1 className="font-sans text-[clamp(36px,5vw,56px)] font-bold text-wandor-dark leading-[1.05] tracking-[-0.04em] mb-4">
            Generate Your Custom AI Trip
          </h1>
          <p className="font-sans text-lg text-wandor-muted max-w-[560px] mx-auto leading-relaxed">
            Describe everything in one message — destination, days, style and budget. We'll generate a personalized day-by-day itinerary instantly saved to your history.
          </p>
        </div>

        {/* Single chat-box card */}
        <div className="bg-white/85 border-[3px] border-white rounded-[44px] shadow-[0_0_4px_0_rgba(0,0,0,0.15)] backdrop-blur-2xl p-8 max-md:p-6">
          <form onSubmit={handleGenerate} className="space-y-6">

            {/* Prompt Input — the only input */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-wandor-dark mb-2">
                Describe Your Dream Trip
              </label>
              <textarea
                value={promptText}
                onChange={(e) => setPromptText(e.target.value)}
                placeholder='e.g. 7-day trip to Japan with traditional tea houses, scenic hikes, authentic ramen spots, comfort budget, relaxed pace...'
                rows={5}
                className="w-full p-4 bg-white border border-gray-200 rounded-3xl font-sans text-base text-wandor-dark outline-none focus:border-wandor-dark transition-colors resize-none shadow-inner"
              />
              <p className="font-sans text-xs text-gray-400 mt-2">
                Include destination + length — e.g. “7-day trip to Japan with hidden cafes, food tours and hikes”.
              </p>
            </div>

            {/* Generation Error */}
            {error && (
              <div className="text-red-600 bg-red-50 border border-red-100 rounded-2xl p-4 font-sans text-sm">
                {error}
              </div>
            )}

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isGenerating}
                className="w-full py-4 rounded-full bg-wandor-dark text-white font-sans text-sm font-bold uppercase tracking-wider hover:bg-black transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isGenerating ? (
                  <>
                    <Sparkles className="w-5 h-5 text-amber-400 animate-spin" />
                    Generating Your AI Itinerary...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    Generate Itinerary & Save to History
                  </>
                )}
              </button>
            </div>

          </form>
        </div>

        {/* Generated Itinerary Result */}
        {result && (
          <div className="mt-12">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/90 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5" /> Your AI Itinerary — {result.destination}, {result.days} days
              </div>
              <Link
                to="/history"
                className="inline-flex items-center gap-2 text-wandor-dark font-sans text-xs font-bold uppercase tracking-wider hover:opacity-70 transition-opacity no-underline"
              >
                <HistoryIcon className="w-4 h-4" /> View in History
              </Link>
            </div>
            <ItineraryView itinerary={result.itinerary} />
          </div>
        )}

      </div>
    </div>
  );
}
