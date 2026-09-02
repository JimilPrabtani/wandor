import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { TRIPS } from '../data/trips';
import { ArrowLeft, MapPin, Clock } from 'lucide-react';

export default function TripDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const trip = TRIPS.find(t => String(t.id) === String(id));

  useEffect(() => {
    if (!trip) {
      navigate('/discover');
    }
  }, [trip, navigate]);

  if (!trip) return null;

  return (
    <div className="min-h-screen bg-transparent pb-24">

      {/* Page Header Container */}
      <div className="max-w-[860px] mx-auto px-4 sm:px-6 md:px-20 pt-8 sm:pt-12 pb-8 sm:pb-10">

        {/* Back Link */}
        <Link
          to="/discover"
          className="inline-flex items-center gap-2 text-wandor-muted hover:text-wandor-dark font-sans text-sm font-medium mb-8 transition-colors group no-underline"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
          Back to Discover
        </Link>

        {/* Country + Duration + Save Action */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-5">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1.5 bg-white/80 backdrop-blur-md border border-white text-wandor-dark px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase shadow-sm">
              <MapPin className="w-3.5 h-3.5" /> {trip.country}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/80 backdrop-blur-md border border-white text-wandor-dark px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase shadow-sm">
              <Clock className="w-3.5 h-3.5" /> {trip.duration}
            </span>
            <span className="text-yellow-500 text-sm tracking-wide">★★★★★</span>
          </div>
        </div>

        {/* Trip Title */}
        <h1 className="font-sans text-[clamp(36px,5vw,64px)] font-bold text-wandor-dark leading-[1.05] tracking-[-0.04em] mb-4">
          {trip.title}
        </h1>
        <p className="font-sans text-base text-wandor-muted leading-relaxed max-w-[620px]">
          A carefully curated {trip.duration.toLowerCase()} journey through {trip.country}. Explore iconic landmarks, savour local cuisine, and create memories that last a lifetime.
        </p>
      </div>

      {/* Divider */}
      <div className="max-w-[860px] mx-auto px-4 sm:px-6 md:px-20">
        <hr className="border-gray-200/80 mb-10" />
      </div>

      {/* Itinerary Section — Liquid Glass Cards */}
      <div className="max-w-[860px] mx-auto px-4 sm:px-6 md:px-20">
        <h2 className="font-sans text-2xl font-bold text-wandor-dark mb-8 tracking-[-0.02em]">
          Your Itinerary
        </h2>

        <div className="space-y-6">
          {trip.itinerary?.map((day: any) => (
            <div
              key={day.day}
              className="bg-white/80 border-[3px] border-white rounded-[32px] p-8 max-md:p-6 shadow-[0_0_4px_0_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-300 hover:shadow-lg"
            >
              <span className="inline-block font-sans text-[11px] font-bold text-wandor-prompt uppercase tracking-widest mb-3 bg-wandor-prompt/10 px-3 py-1 rounded-full">
                Day {day.day}
              </span>
              <h3 className="font-sans text-xl font-bold text-wandor-dark mb-2 tracking-[-0.02em]">
                {day.title}
              </h3>
              <p className="font-sans text-[15px] text-wandor-muted leading-[1.75]">
                {day.description}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
