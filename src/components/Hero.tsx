import React, { useRef, useState, useEffect } from 'react';
import { Upload } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const SUGGESTIONS = [
  "I'm planning a 7-day trip to Japan in October. I love food, hidden cafes, scenic hikes, and want to avoid crowds....",
  "Looking for a relaxing weekend in Bali, focusing on yoga retreats, pristine beaches, and organic food....",
  "Show me the best culinary spots in Paris, avoiding tourist traps, for a 5-day romantic getaway....",
  "I have two weeks for an adventure in New Zealand. I want to try bungee jumping, see the fjords, and hike the glaciers....",
  "Plan a 10-day cultural dive into Egypt. I want to see the Pyramids, cruise the Nile, and explore ancient temples....",
  "Looking for a family-friendly week in Costa Rica. We love wildlife, easy nature walks, and relaxing on the beach....",
  "Show me an action-packed 5-day itinerary for New York City, including Broadway shows, great pizza, and hidden speakeasies...."
];

export default function Hero() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [prompt, setPrompt] = useState('');
  const [suggestionIndex, setSuggestionIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

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

  const handlePlanMyTrip = () => {
    const activePrompt = prompt.trim() || currentSuggestion;

    // Ensure user is logged in for history tracking
    if (!user) {
      navigate('/login');
      return;
    }

    // Hand the prompt to the AI generator page, which calls the backend
    navigate('/ai-generator', { state: { prompt: activePrompt } });
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

            {/* Interactive Textarea */}
            <textarea
              id="chatbox"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder=""
              className="w-full h-[100px] bg-transparent border-none outline-none font-sans text-lg sm:text-xl font-medium text-wandor-prompt leading-relaxed resize-none relative z-10 mb-10"
              spellCheck={false}
            />

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
                className="px-6 h-12 sm:h-14 bg-black border-none rounded-[44px] shadow-[0_0_2px_0_rgba(0,0,0,0.05)] cursor-pointer flex items-center justify-center font-sans text-sm sm:text-base font-medium text-[#fafafa] uppercase tracking-[0.02em] transition-all hover:bg-[#333] active:scale-95 gap-2"
              >
                Plan My Trip
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
