import React from 'react';
import {
  Sparkles,
  MapPin,
  Phone,
  CheckCircle2,
  Building,
  Home,
  Store,
  Star,
  ArrowRight,
  ShieldCheck,
  MessageSquare,
} from 'lucide-react';
import { BUSINESS, IMAGES, PageId } from '../data/business';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-sky-50 via-white to-[#f8fbfe] pt-12 sm:pt-16 pb-12 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 tracking-wide uppercase">
              About Vitres Pro Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Local Professional Window Cleaning in Lille
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Dedicated to delivering clean, clear results and dependable communication for homes, offices, and small commercial properties across Lille.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Core Identity Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              A Dedicated Local Window-Cleaning Service
            </h2>
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                Vitres Pro Services is a local professional window-cleaning business situated at 29 Rue Nationale in 59000 Lille, France. Our work centers on a simple, essential purpose: providing clear, streak-free glass surfaces so that properties receive maximum natural light and present a well-kept, spotless exterior.
              </p>
              <p>
                We serve three primary client categories within Lille:
              </p>
              <ul className="space-y-2 text-sm text-slate-800 font-medium pl-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                  <strong>Residential Homes:</strong> Apartments, family residences, and private houses.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                  <strong>Offices:</strong> Corporate work environments, consulting rooms, and professional suites.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                  <strong>Small Commercial Properties:</strong> Retail boutiques, shopfronts, and local streetfront businesses.
                </li>
              </ul>
              <p>
                Rated 4.8/5 across 32 Google Reviews, we prioritize clean and clear results, respectful service at your property, and reliable communication at every stage of an enquiry.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            {/* Fact Box Card */}
            <div className="bg-white rounded-2xl border border-sky-100 shadow-xl p-6 sm:p-8 space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">Business Profile</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">{BUSINESS.name}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{BUSINESS.category}</p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">Address</span>
                    <span className="font-semibold text-slate-800">{BUSINESS.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">Direct Telephone</span>
                    <a href={BUSINESS.phoneTel} className="font-semibold text-sky-700 hover:underline">
                      {BUSINESS.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">Google Rating</span>
                    <span className="font-semibold text-slate-800">{BUSINESS.rating}/5 — {BUSINESS.reviewCount} Reviews</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  id="about-contact-card-btn"
                  onClick={() => onNavigate('contact')}
                  className="w-full py-3 px-4 rounded-xl font-semibold text-white bg-sky-600 hover:bg-sky-700 transition-colors text-center text-sm shadow-xs"
                >
                  Contact Vitres Pro Services
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Core Principles (Strictly grounded in supplied facts) */}
        <section className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200/80 space-y-8">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Our Professional Service Focus
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              The fundamental standards that guide how we operate for every client in Lille.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Professional Service */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5 text-sky-700" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Professional Service
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Courteous, orderly, and thorough execution from arrival to departure at your property.
              </p>
            </div>

            {/* 2. Local Presence */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center font-bold">
                <MapPin className="w-5 h-5 text-sky-700" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Local Presence
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Based right on Rue Nationale in Lille, ensuring accessibility and local accountability.
              </p>
            </div>

            {/* 3. Clean & Clear Results */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5 text-sky-700" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Clean & Clear Results
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Spotless glass finishes that let daylight flow freely through every window pane.
              </p>
            </div>

            {/* 4. Reliable Communication */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center font-bold">
                <MessageSquare className="w-5 h-5 text-sky-700" />
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Reliable Communication
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Direct phone responses on +33 3 20 48 17 65 with clear, straightforward enquiry handling.
              </p>
            </div>

          </div>
        </section>

        {/* CTA banner */}
        <section className="bg-sky-600 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold">
              Looking for reliable window cleaning in Lille?
            </h3>
            <p className="text-sky-100 text-sm max-w-xl">
              Get in touch with Vitres Pro Services today. We will be happy to assist with your residential or commercial window cleaning enquiry.
            </p>
          </div>
          <button
            id="about-bottom-cta-btn"
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 rounded-xl font-bold text-slate-900 bg-white hover:bg-sky-50 transition-colors shadow-sm shrink-0"
          >
            Get a Cleaning Enquiry
          </button>
        </section>

      </div>
    </div>
  );
};
