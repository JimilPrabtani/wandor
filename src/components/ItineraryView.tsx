import { Sparkles, Sun, Sunset, Moon, UtensilsCrossed, Lightbulb, Wallet } from 'lucide-react';
import type { Itinerary } from '../lib/api';

// Shared renderer for AI-generated itineraries (AiGenerator result + History detail).
// Everything is rendered as plain text nodes only.
export default function ItineraryView({ itinerary }: { itinerary: Itinerary }) {
  return (
    <div className="text-left">
      <h2 className="font-sans text-2xl md:text-3xl font-bold text-wandor-dark tracking-[-0.02em] mb-3">
        {itinerary.title}
      </h2>
      <p className="font-sans text-[15px] text-wandor-muted leading-[1.75] mb-4">
        {itinerary.summary}
      </p>

      {itinerary.budgetEstimate && (
        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-2 rounded-full font-sans text-xs font-bold uppercase tracking-wider mb-6">
          <Wallet className="w-4 h-4 text-emerald-600" /> {itinerary.budgetEstimate}
        </div>
      )}

      <div className="space-y-5">
        {itinerary.days.map((day) => (
          <div
            key={day.day}
            className="bg-white/85 border-[3px] border-white rounded-[32px] p-6 md:p-8 shadow-[0_0_4px_0_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-300 hover:shadow-lg"
          >
            <span className="inline-block font-sans text-[11px] font-bold text-wandor-prompt uppercase tracking-widest mb-3 bg-wandor-prompt/10 px-3 py-1 rounded-full">
              Day {day.day}
            </span>
            <h3 className="font-sans text-xl font-bold text-wandor-dark mb-4 tracking-[-0.02em]">
              {day.theme}
            </h3>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Sun className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                <p className="font-sans text-sm text-wandor-muted leading-relaxed">
                  <span className="font-bold text-wandor-dark uppercase text-xs tracking-wider mr-1.5">Morning</span>
                  {day.morning}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Sunset className="w-4 h-4 text-orange-500 shrink-0 mt-1" />
                <p className="font-sans text-sm text-wandor-muted leading-relaxed">
                  <span className="font-bold text-wandor-dark uppercase text-xs tracking-wider mr-1.5">Afternoon</span>
                  {day.afternoon}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Moon className="w-4 h-4 text-indigo-500 shrink-0 mt-1" />
                <p className="font-sans text-sm text-wandor-muted leading-relaxed">
                  <span className="font-bold text-wandor-dark uppercase text-xs tracking-wider mr-1.5">Evening</span>
                  {day.evening}
                </p>
              </div>
            </div>

            {day.food?.length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="font-sans text-xs font-bold uppercase tracking-wider text-wandor-dark mb-2 flex items-center gap-1.5">
                  <UtensilsCrossed className="w-3.5 h-3.5 text-wandor-muted" /> Food to Try
                </p>
                <div className="flex flex-wrap gap-2">
                  {day.food.map((item, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-50 border border-gray-200 text-wandor-dark px-3 py-1 rounded-full font-sans text-xs font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {itinerary.insiderTips?.length > 0 && (
        <div className="mt-6 bg-amber-50/80 border-2 border-amber-200/60 rounded-[32px] p-6 md:p-8">
          <p className="font-sans text-sm font-bold uppercase tracking-wider text-wandor-dark mb-3 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-amber-500" /> Insider Tips
          </p>
          <ul className="space-y-2">
            {itinerary.insiderTips.map((tip, idx) => (
              <li key={idx} className="font-sans text-sm text-wandor-muted leading-relaxed flex items-start gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-1" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <p className="mt-6 font-sans text-xs text-wandor-muted italic text-center">
        AI-generated — verify opening hours and prices before you go.
      </p>
    </div>
  );
}
