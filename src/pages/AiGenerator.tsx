import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { apiFetch, ApiError, type ApiTrip } from '../lib/api';
import ItineraryView from '../components/ItineraryView';
import { Sparkles, MapPin, Calendar, Compass, DollarSign, History as HistoryIcon } from 'lucide-react';

const SUGGESTED_PROMPTS = [
  "Hidden cafes, food tours, and bamboo groves — avoid the crowds",
  "Romantic getaway with oceanfront dining and slow mornings",
  "Active adventure: hiking fjords, bungee jumping, and glaciers",
  "Family-friendly with rainforest walks and beach relaxation"
];

export default function AiGenerator() {
  const { getIdToken } = useAuth();
  const location = useLocation();

  const [promptText, setPromptText] = useState((location.state as any)?.prompt || '');
  const [destination, setDestination] = useState('');
  const [days, setDays] = useState('5');
  const [travelStyle, setTravelStyle] = useState('Balanced');
  const [budget, setBudget] = useState('Comfort');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ApiTrip | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const numDays = Number(days);
    if (!destination.trim()) {
      setError('Please enter a destination.');
      return;
    }
    if (!Number.isInteger(numDays) || numDays < 1 || numDays > 30) {
      setError('Trip length must be a whole number between 1 and 30 days.');
      return;
    }

    const preferences = [
      promptText.trim(),
      `Travel style: ${travelStyle}.`,
      `Budget level: ${budget}.`,
    ].filter(Boolean).join(' ');

    setIsGenerating(true);
    setResult(null);

    try {
      const data = await apiFetch<{ trip: ApiTrip }>(
        '/api/trips/generate',
        { method: 'POST', body: { destination: destination.trim(), days: numDays, preferences } },
        getIdToken
      );
      setResult(data.trip);
    } catch (err) {
      if (err instanceof ApiError) {
        if (err.status === 402) {
          setError(`You've used all ${err.limit ?? 7} free AI trips. Upgrade to Pro (coming soon) for unlimited generations.`);
        } else if (err.code === 'destination_required') {
          setError('Please enter a destination.');
        } else if (err.code === 'days_must_be_1_to_30') {
          setError('Trip length must be between 1 and 30 days.');
        } else if (err.status === 401) {
          setError('Your session has expired. Please log in again.');
        } else if (err.status === 502) {
          setError('Trip generation failed on our end. Please try again in a moment.');
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
            Tell our AI what you love and where you want to go. We'll generate a personalized day-by-day itinerary instantly saved to your history.
          </p>
        </div>

        {/* Interactive Liquid Glass Form Card */}
        <div className="bg-white/85 border-[3px] border-white rounded-[44px] shadow-[0_0_4px_0_rgba(0,0,0,0.15)] backdrop-blur-2xl p-8 max-md:p-6">
          <form onSubmit={handleGenerate} className="space-y-6">

            {/* Prompt Input */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-wandor-dark mb-2">
                Describe Your Dream Experience
              </label>
              <textarea
                value={promptText}
                onChange={(e) => setPromptText(e.target.value)}
                placeholder="e.g. I want a cultural trip with traditional tea houses, scenic hikes, and authentic ramen spots..."
                rows={3}
                className="w-full p-4 bg-white border border-gray-200 rounded-3xl font-sans text-base text-wandor-dark outline-none focus:border-wandor-dark transition-colors resize-none shadow-inner"
              />
            </div>

            {/* Quick Suggestions */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-wandor-muted mb-2">
                Or click a suggested prompt:
              </p>
              <div className="flex flex-wrap gap-2">
                {SUGGESTED_PROMPTS.map((suggestion, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setPromptText(suggestion)}
                    className="text-left text-xs font-medium text-wandor-dark bg-white/70 border border-gray-200/80 px-3.5 py-2 rounded-2xl hover:bg-white transition-all cursor-pointer"
                  >
                    "{suggestion.substring(0, 45)}..."
                  </button>
                ))}
              </div>
            </div>

            {/* Preference Controls Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100">

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-wandor-dark mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-wandor-muted" /> Destination
                </label>
                <input
                  type="text"
                  required
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="e.g. Japan, France, Bali"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-full font-sans text-sm font-medium text-wandor-dark outline-none focus:border-wandor-dark"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-wandor-dark mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-wandor-muted" /> How Many Days? (1–30)
                </label>
                <input
                  type="number"
                  required
                  min={1}
                  max={30}
                  step={1}
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  placeholder="5"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-full font-sans text-sm font-medium text-wandor-dark outline-none focus:border-wandor-dark"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-wandor-dark mb-2 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-wandor-muted" /> Travel Pace & Style
                </label>
                <select
                  value={travelStyle}
                  onChange={(e) => setTravelStyle(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-full font-sans text-sm font-medium text-wandor-dark outline-none focus:border-wandor-dark cursor-pointer"
                >
                  <option value="Relaxed">Relaxed (Slow & Leisurely)</option>
                  <option value="Balanced">Balanced (Culture + Rest)</option>
                  <option value="Action-Packed">Action-Packed (High Energy)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-wandor-dark mb-2 flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-wandor-muted" /> Target Budget Level
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-full font-sans text-sm font-medium text-wandor-dark outline-none focus:border-wandor-dark cursor-pointer"
                >
                  <option value="Budget">Budget Friendly</option>
                  <option value="Comfort">Comfort & Value</option>
                  <option value="Luxury">Luxury & Premium</option>
                </select>
              </div>

            </div>

            {/* Generation Error */}
            {error && (
              <div className="text-red-600 bg-red-50 border border-red-100 rounded-2xl p-4 font-sans text-sm">
                {error}
              </div>
            )}

            {/* Submit Action */}
            <div className="pt-4">
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
