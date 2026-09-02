import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, History, ChevronDown, Sparkles, Menu, X, Home as HomeIcon, Compass, Tag, HelpCircle } from 'lucide-react';

const NavButton = ({ children, to }: { children: React.ReactNode; to?: string }) => {
  const className = "bg-transparent border-none cursor-pointer font-sans text-[15px] font-medium uppercase tracking-[0.04em] transition-opacity hover:opacity-55 no-underline text-inherit";

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className}>
      {children}
    </button>
  );
};

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className={`w-full z-50 ${isHome ? 'absolute top-0 left-0 bg-transparent' : 'sticky top-0 bg-white/70 backdrop-blur-xl border-b border-black/5'}`}>
      <nav className={`max-w-[1360px] mx-auto flex items-center justify-between px-6 md:px-20 pt-5 pb-4 ${isHome ? 'text-wandor-text' : 'text-wandor-dark'}`}>

        {/* Left: Wordmark */}
        <Link to="/" className="font-display text-[36px] md:text-[40px] text-black leading-none select-none no-underline">
          wandor
        </Link>

        {/* Center: Desktop Links */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-8 items-center">
          <NavButton to="/">Home</NavButton>
          <NavButton to="/discover">Discover</NavButton>
          <NavButton to="/pricing">Pricing</NavButton>
          <NavButton to="/faq">FAQs</NavButton>
        </div>

        {/* Right: Actions & User Profile & Mobile Toggle */}
        <div className="flex items-center gap-3 md:gap-6">
          {user ? (
            /* Logged In User Profile Avatar & Dropdown */
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 bg-white/90 border border-black/10 backdrop-blur-md p-1 md:py-1.5 md:px-3 rounded-full shadow-sm hover:shadow transition-all cursor-pointer outline-none"
                aria-expanded={dropdownOpen}
                aria-label="User menu"
              >
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 md:w-7 md:h-7 rounded-full object-cover border border-white"
                />
                <span className="font-sans text-sm font-semibold text-wandor-dark hidden md:inline-block">
                  {user.name.split(' ')[0]}
                </span>
                <ChevronDown className={`w-4 h-4 text-wandor-muted transition-transform duration-200 hidden md:block ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white/95 backdrop-blur-2xl border border-black/10 rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-4 py-3 border-b border-gray-100 mb-1">
                    <p className="font-sans text-sm font-bold text-wandor-dark truncate">{user.name}</p>
                    <p className="font-sans text-xs text-wandor-muted truncate">{user.email}</p>
                  </div>

                  <div className="space-y-0.5">
                    <button
                      onClick={() => { setDropdownOpen(false); navigate('/history'); }}
                      className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-sm font-medium text-wandor-dark hover:bg-gray-100 transition-colors"
                    >
                      <History className="w-4 h-4 text-wandor-muted" />
                      <span>My History</span>
                    </button>

                    <button
                      onClick={() => { setDropdownOpen(false); navigate('/ai-generator'); }}
                      className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-sm font-medium text-wandor-dark hover:bg-gray-100 transition-colors"
                    >
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      <span>AI Trip Generator</span>
                    </button>
                  </div>

                  <div className="my-1 border-t border-gray-100" />

                  <button
                    onClick={() => {
                      logout();
                      setDropdownOpen(false);
                      navigate('/');
                    }}
                    className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-left text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <LogOut className="w-4 h-4 text-red-600" />
                    <span>Log Out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Logged Out State: Desktop Login Link */
            <Link
              to="/login"
              className="hidden md:inline-block bg-transparent border-none cursor-pointer font-sans text-[15px] font-semibold uppercase tracking-[0.04em] text-wandor-dark transition-opacity hover:opacity-55 no-underline"
            >
              Login
            </Link>
          )}

          {/* Plan My Trip Button (Hidden on Mobile Homepage) */}
          <Link
            to={user ? "/ai-generator" : "/#chatbox"}
            className={`${isHome ? 'hidden md:inline-block' : 'inline-block'} bg-wandor-dark text-[#fafafa] border-none cursor-pointer font-sans text-xs md:text-[15px] font-medium uppercase tracking-[0.04em] px-4 md:px-5 py-2.5 md:py-3 rounded-full transition-all hover:bg-[#333] active:scale-95 no-underline whitespace-nowrap shadow-sm`}
          >
            Plan My Trip
          </Link>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full bg-white/80 border border-black/10 backdrop-blur-md flex items-center justify-center text-wandor-dark cursor-pointer outline-none shadow-sm"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-black/10 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">

          <div className="grid grid-cols-2 gap-3 pb-4 border-b border-gray-100">
            <Link
              to="/"
              className="flex items-center gap-2.5 p-3 rounded-2xl bg-gray-50 text-wandor-dark font-sans text-sm font-semibold no-underline"
            >
              <HomeIcon className="w-4 h-4 text-wandor-prompt" /> Home
            </Link>

            <Link
              to="/discover"
              className="flex items-center gap-2.5 p-3 rounded-2xl bg-gray-50 text-wandor-dark font-sans text-sm font-semibold no-underline"
            >
              <Compass className="w-4 h-4 text-wandor-prompt" /> Discover
            </Link>

            <Link
              to="/pricing"
              className="flex items-center gap-2.5 p-3 rounded-2xl bg-gray-50 text-wandor-dark font-sans text-sm font-semibold no-underline"
            >
              <Tag className="w-4 h-4 text-wandor-prompt" /> Pricing
            </Link>

            <Link
              to="/faq"
              className="flex items-center gap-2.5 p-3 rounded-2xl bg-gray-50 text-wandor-dark font-sans text-sm font-semibold no-underline"
            >
              <HelpCircle className="w-4 h-4 text-wandor-prompt" /> FAQs
            </Link>
          </div>

          {user ? (
            <div className="space-y-2 pt-1">
              <div className="p-3 bg-amber-50/60 rounded-2xl border border-amber-200/50 flex items-center justify-between mb-2">
                <div>
                  <p className="font-sans text-xs font-bold text-wandor-dark">{user.name}</p>
                  <p className="font-sans text-[11px] text-wandor-muted truncate">{user.email}</p>
                </div>
                <Link to="/history" className="text-xs font-bold text-amber-700 uppercase no-underline">History</Link>
              </div>

              <Link
                to="/history"
                className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl bg-gray-100 font-sans text-sm font-semibold text-wandor-dark no-underline"
              >
                <History className="w-4 h-4 text-wandor-muted" /> My History
              </Link>

              <Link
                to="/ai-generator"
                className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl bg-wandor-dark text-white font-sans text-sm font-semibold no-underline"
              >
                <Sparkles className="w-4 h-4 text-amber-400" /> AI Trip Generator
              </Link>

              <button
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                  navigate('/');
                }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl bg-red-50 text-red-600 font-sans text-sm font-semibold cursor-pointer border border-red-100"
              >
                <LogOut className="w-4 h-4 text-red-600" /> Log Out
              </button>
            </div>
          ) : (
            <div className="pt-2 space-y-2">
              <Link
                to="/login"
                className="w-full block text-center py-3.5 rounded-full bg-wandor-dark text-white font-sans text-sm font-bold uppercase tracking-wider no-underline shadow-md"
              >
                Log In / Sign Up
              </Link>
            </div>
          )}

        </div>
      )}
    </div>
  );
}
