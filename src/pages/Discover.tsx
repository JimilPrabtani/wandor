import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TRIPS, COUNTRIES, INTERESTS, getTripImage } from '../data/trips';
import { MapPin, Clock, Star, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Discover() {
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedInterest, setSelectedInterest] = useState('All');

  const filteredTrips = TRIPS.filter(trip =>
    (selectedCountry === 'All' || trip.country === selectedCountry) &&
    (selectedInterest === 'All' || trip.interests.includes(selectedInterest))
  );

  return (
    <div className="min-h-screen bg-transparent pt-8 sm:pt-10 pb-28 px-4 sm:px-6 md:px-16">
      <div className="max-w-[1360px] mx-auto">

        {/* ── Header ──────────────────────────────────────────── */}
        <div className="mb-10 text-center max-w-[700px] mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white text-wandor-dark text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Curated Collections
          </div>
          <h1 className="font-sans text-[clamp(36px,5vw,56px)] font-bold text-wandor-dark leading-[1.05] tracking-[-0.04em] mb-4">
            Discover Your Next Adventure
          </h1>
          <p className="font-sans text-base text-wandor-muted leading-relaxed">
            Hand-picked itineraries across the globe — filter by destination or interest to find your perfect trip.
          </p>
        </div>

        {/* ── Filters ─────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-center">

          {/* Country dropdown */}
          <div className="relative">
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              aria-label="Filter by destination"
              className={`appearance-none rounded-[12px] border-dashed border-[2px] px-5 py-2.5 pr-10 font-sans text-sm font-bold uppercase tracking-wider cursor-pointer
                          outline-none transition-all duration-300 ease-cinematic shadow-sm
                          ${selectedCountry !== 'All'
                  ? 'bg-wandor-dark text-white border-wandor-dark'
                  : 'bg-white/80 backdrop-blur-md border-wandor-dark/30 text-wandor-dark hover:bg-white hover:border-wandor-dark/50'
                }`}
            >
              {COUNTRIES.map(c => (
                <option key={c} value={c} className="bg-white text-wandor-dark font-sans uppercase">
                  {c === 'All' ? 'ALL DESTINATIONS' : c}
                </option>
              ))}
            </select>
            <div className={`absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none ${selectedCountry !== 'All' ? 'text-white' : 'text-wandor-dark/50'}`}>
              <svg width="11" height="7" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Interest pills */}
          <div className="flex flex-wrap gap-3 justify-center" role="group" aria-label="Filter by interest">
            {INTERESTS.map(interest => (
              <button
                key={interest}
                onClick={() => setSelectedInterest(interest)}
                aria-pressed={selectedInterest === interest}
                className={`px-4 py-2 rounded-[12px] border-dashed border-[2px] font-sans text-sm font-bold uppercase tracking-wider transition-all duration-300 ease-cinematic cursor-pointer shadow-sm
                            focus:outline-none focus:ring-2 focus:ring-wandor-dark/20 hover:scale-[0.98] active:scale-95
                            ${selectedInterest === interest
                    ? 'bg-wandor-dark text-white border-wandor-dark'
                    : 'bg-white/80 backdrop-blur-md border-wandor-dark/30 text-wandor-dark hover:bg-white hover:border-wandor-dark/50'
                  }`}
              >
                {interest}
              </button>
            ))}
          </div>
        </div>

        {/* ── Visual Liquid Glass Card Grid ──────────────────── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="Destination cards"
        >
          {filteredTrips.map((trip, idx) => (
            <Link
              key={trip.id}
              to={`/trip/${trip.id}`}
              role="listitem"
              className="group relative bg-white/95 p-4 pb-14 border border-white/50 rounded-sm overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] hover:-translate-y-2 backdrop-blur-xl transition-all duration-500 ease-cinematic flex flex-col no-underline text-inherit"
              style={{
                 /* Add a very slight random rotation to make them look like scattered polaroids */
                 transform: `rotate(${(idx % 3 === 0) ? -1 : (idx % 2 === 0) ? 2 : 0}deg)`,
              }}
            >
              {/* Vibrant Image Header */}
              <div className="relative h-64 w-full bg-gray-200 overflow-hidden shadow-inner">
                <img
                  src={getTripImage(trip)}
                  alt={trip.title}
                  loading="lazy"
                  className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.05] sepia-[0.05] group-hover:scale-105 transition-transform duration-700 ease-out-expo"
                />

                {/* Light glass top pill badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="bg-white/80 backdrop-blur-md text-wandor-dark border border-dashed border-wandor-dark/20 text-[10px] font-bold uppercase tracking-[0.1em] px-3.5 py-1 rounded-[4px] shadow-sm flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-wandor-prompt" />
                    {trip.country}
                  </span>
                  
                  <span className="bg-white/80 backdrop-blur-md text-wandor-dark border border-dashed border-wandor-dark/20 text-[10px] font-bold uppercase tracking-[0.1em] px-3.5 py-1 rounded-[4px] shadow-sm flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-wandor-dark text-wandor-dark" />
                    {trip.rating ? trip.rating : '4.8'}
                  </span>
                </div>
              </div>

              {/* Polaroid Footer Content */}
              <div className="pt-6 flex flex-col justify-between flex-grow">
                
                <div className="text-center">
                  {/* Trip Title as Stamped Typewriter Text */}
                  <h3 className="font-display text-2xl font-normal text-wandor-dark/80 leading-snug tracking-widest mb-3 group-hover:text-black transition-colors uppercase" style={{ transform: 'rotate(-2deg)' }}>
                    {trip.title}
                  </h3>
                  
                  {/* Interest tags */}
                  <div className="flex flex-wrap gap-2 justify-center mb-3">
                    {trip.interests.map(i => (
                      <span
                        key={i}
                        className="text-wandor-muted font-display text-[12px] font-normal tracking-[0.1em] uppercase opacity-70"
                      >
                        [{i}]
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer - Minimalist stamping */}
                <div className="pt-4 mt-auto border-t-2 border-dashed border-gray-200 flex items-center justify-between text-sm opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-wandor-dark font-sans text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-wandor-prompt" />
                    {trip.duration}
                  </span>

                  <span className="inline-flex items-center gap-1 text-wandor-dark font-sans text-xs font-bold uppercase tracking-widest">
                    Open <ArrowUpRight className="w-4 h-4 text-wandor-dark" />
                  </span>
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* ── Empty state ─────────────────────────────────────── */}
        {filteredTrips.length === 0 && (
          <div className="text-center py-20 bg-white/70 border-[3px] border-white rounded-[36px] backdrop-blur-xl">
            <p className="text-wandor-muted font-sans text-base mb-4">No trips found matching your selected filters.</p>
            <button
              onClick={() => { setSelectedCountry('All'); setSelectedInterest('All'); }}
              className="bg-wandor-dark text-white px-6 py-2.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider hover:bg-black transition-all cursor-pointer"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* ── Results count ───────────────────────────────────── */}
        {filteredTrips.length > 0 && (
          <p className="text-wandor-muted text-sm mt-8 text-center" aria-live="polite">
            {filteredTrips.length} destination{filteredTrips.length !== 1 ? 's' : ''} found
          </p>
        )}

      </div>
    </div>
  );
}
