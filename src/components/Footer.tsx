import React from 'react';
import { Sparkles, Phone, MapPin, Star, ArrowUpRight } from 'lucide-react';
import { BUSINESS, NAV_ITEMS, PageId } from '../data/business';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      {/* Upper Footer section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xl font-bold text-white tracking-tight">
                  {BUSINESS.name}
                </span>
                <span className="block text-xs font-medium text-sky-400 tracking-wider uppercase">
                  {BUSINESS.category} • Lille
                </span>
              </div>
            </div>
            
            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              {BUSINESS.about}
            </p>

            {/* Google Rating Fact */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs">
              <div className="flex items-center text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
              </div>
              <span className="text-white font-semibold">{BUSINESS.rating}/5</span>
              <span className="text-slate-400">({BUSINESS.reviewCount} Google Reviews)</span>
            </div>
          </div>

          {/* Quick Navigation Col */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    id={`footer-nav-${item.id}`}
                    onClick={() => {
                      onNavigate(item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-slate-300 hover:text-sky-300 transition-colors inline-flex items-center gap-1 text-left"
                  >
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links Col */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  id="footer-service-window-cleaning"
                  onClick={() => {
                    onNavigate('window-cleaning');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-300 hover:text-sky-300 transition-colors text-left"
                >
                  Window Cleaning
                </button>
              </li>
              <li>
                <button
                  id="footer-service-residential"
                  onClick={() => {
                    onNavigate('residential');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-300 hover:text-sky-300 transition-colors text-left"
                >
                  Residential Services
                </button>
              </li>
              <li>
                <button
                  id="footer-service-commercial"
                  onClick={() => {
                    onNavigate('commercial');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-300 hover:text-sky-300 transition-colors text-left"
                >
                  Commercial Services
                </button>
              </li>
            </ul>
          </div>

          {/* Local Contact Facts Col */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contact & Location
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  {BUSINESS.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  id="footer-phone-link"
                  href={BUSINESS.phoneTel}
                  className="text-white hover:text-sky-300 font-medium transition-colors inline-flex items-center gap-1"
                >
                  <span>{BUSINESS.phone}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <p className="text-xs text-slate-400 pt-1">
                Lille, France
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="border-t border-slate-800 bg-slate-950 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center sm:text-left">
          <p>
            © 2026 {BUSINESS.name}. All rights reserved. Professional window cleaning in Lille, France.
          </p>
          <p className="text-slate-400">
            {BUSINESS.address} • Phone: {BUSINESS.phone}
          </p>
        </div>
      </div>
    </footer>
  );
};
