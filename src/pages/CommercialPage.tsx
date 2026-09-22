import React from 'react';
import {
  Building2,
  Store,
  Briefcase,
  Sparkles,
  ArrowRight,
  Phone,
  CheckCircle2,
  MapPin,
  Eye,
  Users,
} from 'lucide-react';
import { BUSINESS, IMAGES, PageId } from '../data/business';

interface CommercialPageProps {
  onNavigate: (page: PageId) => void;
}

export const CommercialPage: React.FC<CommercialPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-sky-50 via-white to-[#f8fbfe] pt-12 sm:pt-16 pb-12 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 tracking-wide uppercase">
              Offices & Small Commercial Properties
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Commercial Window Cleaning in Lille
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Enhance the professional appearance of your workplace, shopfront, or office space with dependable, spotless window cleaning from Vitres Pro Services.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Overview: The Impact of Clean Windows on Business Presentation */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              A Cleaner, More Presentable Business Environment
            </h2>
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                First impressions matter significantly in business. When clients, partners, or shoppers approach your premises, the condition of your exterior glass and entrance windows sends an immediate signal about your standards and attention to detail.
              </p>
              <p>
                Smudged, dust-laden, or weather-marked windows reduce interior brightness and create a tired exterior aesthetic. Professionally cleaned windows allow natural daylight to energize office interiors while giving your shopfront or commercial premises a crisp, modern, and trustworthy appearance.
              </p>
              <p>
                Vitres Pro Services supports local offices and small commercial premises across Lille with reliable window cleaning that keeps your glass surfaces looking consistently presentable.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1.5">
                <div className="flex items-center gap-2 text-sky-700 font-bold text-sm">
                  <Briefcase className="w-4 h-4" />
                  <span>Corporate Image</span>
                </div>
                <p className="text-xs text-slate-600">
                  Reflecting high professional standards to clients, visitors, and passers-by in Lille.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1.5">
                <div className="flex items-center gap-2 text-teal-700 font-bold text-sm">
                  <Users className="w-4 h-4" />
                  <span>Productive Light</span>
                </div>
                <p className="text-xs text-slate-600">
                  Unobstructed natural daylight creates a more pleasant, bright, and motivating work atmosphere.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-sky-100 shadow-xl bg-white p-2">
              <img
                src={IMAGES.detail}
                alt="Precision window cleaning craftsmanship for clean commercial and office glass"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover rounded-xl"
                loading="eager"
              />
              <div className="p-4 bg-white/90 backdrop-blur-md rounded-xl mt-2 flex items-center justify-between">
                <div>
                  <span className="text-xs text-sky-700 font-semibold uppercase tracking-wider">Commercial Care</span>
                  <span className="block text-sm font-bold text-slate-900">Offices & Small Commercial in Lille</span>
                </div>
                <span className="text-xs font-semibold text-slate-600">Vitres Pro Services</span>
              </div>
            </div>
          </div>
        </section>

        {/* Two Pillars: Offices vs Small Commercial Properties */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Pillar 1: Offices */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Office Window Cleaning
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Modern offices thrive when workspace areas are bathed in natural daylight. Clean windows brighten desk clusters, conference rooms, and reception areas, fostering an open, professional feel.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>Pleasant daylit work environments for employees and visiting clients.</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>Clean outlook on urban Lille cityscapes and courtyards.</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>Dependable, respectful service adapted to professional premises.</span>
              </div>
            </div>
          </div>

          {/* Pillar 2: Small Commercial Properties */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center">
              <Store className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Small Commercial Properties & Storefronts
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Street-level visibility is crucial for local businesses, boutiques, and agencies in Lille. Clear display glass allows your products and customer-facing premises to stand out prominently.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0 mt-0.5" />
                <span>Inviting streetfront presentation along pedestrian and vehicular routes.</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0 mt-0.5" />
                <span>Spotless display glazing that highlights your merchandise or interior setup.</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0 mt-0.5" />
                <span>Prompt communication and direct contact with our Lille base at 29 Rue Nationale.</span>
              </div>
            </div>
          </div>

        </section>

        {/* Factual local advantage banner */}
        <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold text-sky-800 uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-sky-600" />
              <span>Centrally Located in Lille</span>
            </div>
            <p className="text-base font-bold text-slate-900">
              Vitres Pro Services • 29 Rue Nationale, 59000 Lille
            </p>
            <p className="text-xs text-slate-500">
              Direct telephone contact at {BUSINESS.phone} — no automated call centres.
            </p>
          </div>
          <a
            href={BUSINESS.phoneTel}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sky-800 bg-white border border-sky-200 hover:bg-sky-50 text-sm shadow-xs shrink-0"
          >
            <Phone className="w-4 h-4 text-sky-600" />
            <span>Call {BUSINESS.phone}</span>
          </a>
        </section>

        {/* Strong Enquiry CTA */}
        <section className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Request a Commercial Cleaning Enquiry
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you oversee an office space or manage a small commercial property in Lille, let us know your requirements. We will be pleased to discuss your window cleaning enquiry.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              id="commercial-enquiry-cta-btn"
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-slate-900 bg-sky-300 hover:bg-sky-200 shadow-md transition-colors text-sm"
            >
              Get a Cleaning Enquiry
            </button>
            <button
              id="commercial-home-cta-btn"
              onClick={() => onNavigate('home')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-colors text-sm"
            >
              Back to Home
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
