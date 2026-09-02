import { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FaqItem {
  id: number;
  category: string;
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    id: 1,
    category: 'AI & Planning',
    question: 'How does Wandor generate personalized trip itineraries?',
    answer: 'Wandor uses advanced AI algorithms trained on thousands of curated travel guides, local recommendations, and real-time transit routes. You describe your dream trip, preferences, travel pace, and budget, and Wandor builds a day-by-day customized schedule in seconds.'
  },
  {
    id: 2,
    category: 'AI & Planning',
    question: 'Can I customize an AI-generated itinerary after creation?',
    answer: 'Absolutely! Once your itinerary is generated, you can swap activities, adjust duration, add specific culinary spots or hidden gems, and save the updated version directly to your My History dashboard.'
  },
  {
    id: 3,
    category: 'Accounts & History',
    question: 'Where can I see my saved and past generated itineraries?',
    answer: 'When logged into your Wandor account, simply click your profile avatar in the navigation bar and select "My History". All your saved trips, generated plans, and custom notes are stored safely in your profile.'
  },
  {
    id: 4,
    category: 'Pricing & Pro',
    question: 'Is Wandor free to use?',
    answer: 'Yes! Our Free tier allows you to browse all destination guides and generate up to 5 curated plans. For unlimited AI trip generation, multi-city stitching, and priority recommendations, you can upgrade to Wandor Pro anytime.'
  },
  {
    id: 5,
    category: 'Booking & Logistics',
    question: 'Does Wandor book flights and hotels directly?',
    answer: 'Wandor provides complete itinerary planning and recommendations with direct links to preferred booking partners. Full direct flight and hotel booking integrations are currently rolling out to Pro members.'
  },
  {
    id: 6,
    category: 'Accounts & History',
    question: 'How do authentication and user accounts work?',
    answer: 'You can sign up or log in using email/password, or via quick one-click social providers (Google & Apple). Your history syncs automatically across all your devices.'
  }
];

export default function Faq() {
  const [openId, setOpenId] = useState<number | null>(1);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'AI & Planning', 'Accounts & History', 'Pricing & Pro', 'Booking & Logistics'];

  const filteredFaqs = activeCategory === 'All' 
    ? FAQS 
    : FAQS.filter(faq => faq.category === activeCategory);

  const toggleAccordion = (id: number) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-transparent pt-8 sm:pt-12 pb-24 px-4 sm:px-6 md:px-20">
      <div className="max-w-[960px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white text-wandor-dark text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-wandor-prompt" /> FAQs & Knowledge Base
          </div>
          <h1 className="font-sans text-[clamp(36px,5vw,56px)] font-bold text-wandor-dark leading-[1.05] tracking-[-0.04em] mb-4">
            Frequently Asked Questions
          </h1>
          <p className="font-sans text-lg text-wandor-muted max-w-[600px] mx-auto leading-relaxed">
            Everything you need to know about Wandor trip planning, AI itineraries, and managing your account history.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full font-sans text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-wandor-dark text-white shadow-md'
                  : 'bg-white/80 backdrop-blur-md border border-white text-wandor-dark hover:bg-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Liquid Glass FAQ Accordion Container */}
        <div className="bg-white/80 border-[3px] border-white rounded-[44px] shadow-[0_0_4px_0_rgba(0,0,0,0.15)] backdrop-blur-xl p-8 max-md:p-5 space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-[28px] transition-all duration-300 overflow-hidden border ${
                  isOpen 
                    ? 'bg-white border-black/10 shadow-lg' 
                    : 'bg-white/50 border-white/60 hover:bg-white/80'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer outline-none gap-4"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-wandor-prompt/60 bg-wandor-prompt/10 px-2.5 py-1 rounded-full shrink-0">
                      {faq.category}
                    </span>
                    <h3 className="font-sans text-lg font-bold text-wandor-dark">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-wandor-dark shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-wandor-muted font-sans text-base leading-relaxed border-t border-gray-100/80 mt-1 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Card */}
        <div className="mt-12 bg-white/70 border-[3px] border-white rounded-[36px] p-8 text-center backdrop-blur-xl shadow-sm flex flex-col items-center">
          <Sparkles className="w-8 h-8 text-amber-500 mb-3" />
          <h3 className="font-sans text-2xl font-bold text-wandor-dark mb-2">Have a specific trip in mind?</h3>
          <p className="font-sans text-wandor-muted text-base max-w-[480px] mb-6">
            Let our AI generate a custom itinerary for you right now in seconds.
          </p>
          <Link
            to="/ai-generator"
            className="bg-wandor-dark text-white px-7 py-3.5 rounded-full font-sans text-sm font-semibold uppercase tracking-wider hover:bg-black transition-all shadow-md no-underline"
          >
            Create AI Itinerary Now
          </Link>
        </div>

      </div>
    </div>
  );
}
