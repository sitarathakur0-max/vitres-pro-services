import React, { useState } from 'react';
import { Sparkles, Phone, Menu, X, Star, MapPin } from 'lucide-react';
import { BUSINESS, NAV_ITEMS, PageId } from '../data/business';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Top Notification / Trust Bar */}
      <div className="bg-slate-900 text-slate-200 border-b border-slate-800 text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-xs sm:text-sm">
            <span className="inline-flex items-center gap-1.5 text-sky-300 font-medium">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              {BUSINESS.address}
            </span>
            <span className="hidden md:inline-flex items-center gap-1 text-amber-300 font-medium">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              {BUSINESS.rating}/5 — {BUSINESS.reviewCount} Google Reviews
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              id="top-phone-cta"
              href={BUSINESS.phoneTel}
              className="inline-flex items-center gap-1.5 text-white hover:text-sky-300 font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-sky-400 rounded-sm"
              aria-label={`Call Vitres Pro Services at ${BUSINESS.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>{BUSINESS.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <nav
        className="w-full bg-white/90 backdrop-blur-md border-b border-sky-100 shadow-xs"
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              id="logo-brand-btn"
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 text-left group focus-visible:outline-2 focus-visible:outline-sky-500 rounded-md"
              aria-label="Vitres Pro Services Home"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-500 to-sky-700 p-0.5 shadow-md flex items-center justify-center text-white relative overflow-hidden group-hover:scale-105 transition-transform duration-200">
                <div className="absolute inset-0 bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="block text-xl font-bold text-slate-900 tracking-tight leading-none group-hover:text-sky-700 transition-colors">
                  {BUSINESS.name}
                </span>
                <span className="block text-xs font-medium text-slate-500 tracking-wider uppercase mt-1">
                  Window Cleaning • Lille
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-link-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-150 relative ${
                      isActive
                        ? 'text-sky-700 bg-sky-50/80 font-semibold shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-sky-600 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                id="nav-enquiry-cta"
                onClick={() => handleNavClick('contact')}
                className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-sm hover:shadow transition-all duration-150 focus-visible:outline-2 focus-visible:outline-sky-500"
              >
                Get a Cleaning Enquiry
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                id="mobile-phone-quick-btn"
                href={BUSINESS.phoneTel}
                className="p-2 text-sky-700 bg-sky-50 rounded-lg hover:bg-sky-100"
                aria-label={`Call ${BUSINESS.phone}`}
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-sky-500"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu-panel"
            className="lg:hidden bg-white border-b border-sky-100 shadow-xl px-4 pt-3 pb-6 space-y-1 animate-in slide-in-from-top-2 duration-150"
          >
            <div className="p-2 mb-2 bg-sky-50/60 rounded-lg flex items-center justify-between text-xs text-slate-700">
              <span className="font-semibold text-sky-900">Google Rating: {BUSINESS.rating}/5</span>
              <span className="text-slate-500">{BUSINESS.reviewCount} Reviews</span>
            </div>
            {NAV_ITEMS.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-sky-50 text-sky-700 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-sky-600" />}
                </button>
              );
            })}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                id="mobile-enquiry-cta"
                onClick={() => handleNavClick('contact')}
                className="w-full py-3 px-4 text-center font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-sm"
              >
                Get a Cleaning Enquiry
              </button>
              <a
                id="mobile-call-cta"
                href={BUSINESS.phoneTel}
                className="w-full py-3 px-4 text-center font-semibold text-sky-800 bg-sky-50 hover:bg-sky-100 rounded-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Call {BUSINESS.phone}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
