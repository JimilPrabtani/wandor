import { Check, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <div className="min-h-screen bg-transparent pt-8 sm:pt-12 pb-24 px-4 sm:px-6 md:px-20">
      <div className="max-w-[1040px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white text-wandor-dark text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Transparent Pricing
          </div>
          <h1 className="font-sans text-[clamp(40px,5vw,56px)] font-bold text-wandor-dark leading-[1.05] tracking-[-0.04em] mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="font-sans text-lg text-wandor-muted max-w-[600px] mx-auto leading-relaxed">
            Choose the plan that fits your travel style. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Boarding Pass Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch max-w-[900px] mx-auto">
          
          {/* Economy Class (Free) — active plan */}
          <div className="relative bg-white/95 border-2 border-wandor-dark/10 rounded-sm shadow-[0_12px_24px_rgba(0,0,0,0.06)] backdrop-blur-2xl transition-all duration-300 ease-cinematic hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] flex flex-col overflow-hidden">

            <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.2em]">
              Active Plan
            </div>

            {/* Ticket Header */}
            <div className="bg-gray-100/80 px-8 py-5 border-b-2 border-dashed border-gray-300 flex items-center justify-between">
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-wandor-muted">
                CLASS
              </span>
              <span className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-wandor-dark">
                ECONOMY
              </span>
            </div>

            <div className="p-8 flex flex-col justify-between flex-grow">
              <div>
                <h2 className="font-display text-4xl font-normal text-wandor-dark mb-2 tracking-widest uppercase opacity-80" style={{ transform: 'rotate(-1deg)' }}>Free</h2>
                <p className="font-sans text-sm font-medium text-wandor-muted mb-8 uppercase tracking-widest">
                  For casual explorers
                </p>
                
                <div className="mb-8 pb-8 border-b-2 border-dashed border-gray-200">
                  <span className="font-display text-6xl font-normal text-wandor-dark tracking-tighter opacity-90">$0</span>
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-wandor-muted ml-2"> / forever</span>
                </div>
                
                <ul className="space-y-5 mb-10">
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-wandor-dark shrink-0 mt-0.5" />
                    <span className="font-sans text-sm font-bold uppercase tracking-wider text-wandor-dark">7 AI trip generations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-wandor-dark shrink-0 mt-0.5" />
                    <span className="font-sans text-sm font-bold uppercase tracking-wider text-wandor-dark">Standard guides</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-wandor-dark shrink-0 mt-0.5" />
                    <span className="font-sans text-sm font-bold uppercase tracking-wider text-wandor-dark">Save to history</span>
                  </li>
                </ul>
              </div>

              <Link
                to="/ai-generator"
                className="w-full py-4 rounded-sm border-2 border-wandor-dark bg-transparent text-wandor-dark font-sans text-xs font-bold uppercase tracking-[0.2em] transition-all hover:bg-wandor-dark hover:text-white text-center no-underline"
              >
                Your Current Plan
              </Link>
            </div>
            
            {/* Cutouts for ticket effect */}
            <div className="absolute top-[68px] -left-3 w-6 h-6 bg-transparent border-r-2 border-wandor-dark/10 rounded-full shadow-inner" style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}></div>
            <div className="absolute top-[68px] -right-3 w-6 h-6 bg-transparent border-l-2 border-wandor-dark/10 rounded-full shadow-inner" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}></div>
          </div>

          {/* First Class (Pro) — coming soon */}
          <div className="relative bg-white/95 border-2 border-wandor-dark/40 rounded-sm shadow-[0_12px_24px_rgba(0,0,0,0.12)] backdrop-blur-2xl flex flex-col overflow-hidden opacity-60 grayscale">

            <div className="absolute top-4 right-4 bg-wandor-dark text-white px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.2em]">
              Coming Soon
            </div>

            {/* Ticket Header */}
            <div className="bg-wandor-dark/5 px-8 py-5 border-b-2 border-dashed border-wandor-dark flex items-center justify-between">
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-wandor-muted">
                CLASS
              </span>
              <span className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-wandor-dark">
                FIRST CLASS
              </span>
            </div>

            <div className="p-8 flex flex-col justify-between flex-grow">
              <div>
                <h2 className="font-display text-4xl font-normal text-wandor-dark mb-2 tracking-widest uppercase opacity-80" style={{ transform: 'rotate(1deg)' }}>Pro</h2>
                <p className="font-sans text-sm font-medium text-wandor-muted mb-8 uppercase tracking-widest">
                  For ultimate explorers
                </p>
                
                <div className="mb-8 pb-8 border-b-2 border-dashed border-wandor-dark/30">
                  <span className="font-display text-6xl font-normal text-wandor-dark tracking-tighter opacity-90">$9</span>
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-wandor-muted ml-2"> / month</span>
                </div>
                
                <ul className="space-y-5 mb-10">
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-wandor-dark shrink-0 mt-0.5" />
                    <span className="font-sans text-sm font-bold uppercase tracking-wider text-wandor-dark">Unlimited AI routing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-wandor-dark shrink-0 mt-0.5" />
                    <span className="font-sans text-sm font-bold uppercase tracking-wider text-wandor-dark">Multi-city stitching</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-wandor-dark shrink-0 mt-0.5" />
                    <span className="font-sans text-sm font-bold uppercase tracking-wider text-wandor-dark">Offline exports</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                disabled
                className="w-full py-4 rounded-sm bg-wandor-dark/60 text-white font-sans text-xs font-bold uppercase tracking-[0.2em] text-center shadow-lg cursor-not-allowed"
              >
                Coming Soon
              </button>
            </div>

            {/* Cutouts for ticket effect */}
            <div className="absolute top-[68px] -left-3 w-6 h-6 bg-transparent border-r-2 border-wandor-dark rounded-full shadow-inner" style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}></div>
            <div className="absolute top-[68px] -right-3 w-6 h-6 bg-transparent border-l-2 border-wandor-dark rounded-full shadow-inner" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}></div>
          </div>

        </div>

      </div>
    </div>
  );
}
