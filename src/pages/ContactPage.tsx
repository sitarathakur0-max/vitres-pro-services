import React from 'react';
import {
  MapPin,
  Phone,
  Star,
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowRight,
  Shield,
} from 'lucide-react';
import { BUSINESS } from '../data/business';
import { ContactForm } from '../components/ContactForm';

export const ContactPage: React.FC = () => {
  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-sky-50 via-white to-[#f8fbfe] pt-12 sm:pt-16 pb-12 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 tracking-wide uppercase">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Contact Vitres Pro Services
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Serving homes, offices, and small commercial properties in Lille with professional window cleaning.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Prominently Displayed Business Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-sky-100 shadow-md space-y-6">
              
              <div className="border-b border-slate-100 pb-5">
                <span className="text-xs font-bold text-sky-700 tracking-wider uppercase">
                  Official Business Details
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                  {BUSINESS.name}
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  {BUSINESS.category} in Lille, France
                </p>
              </div>

              {/* Exact Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Address
                  </span>
                  <p className="text-base font-bold text-slate-900 mt-0.5">
                    {BUSINESS.address}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Located centrally in Lille, France
                  </p>
                </div>
              </div>

              {/* Clickable Phone Number */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Direct Phone Number
                  </span>
                  <a
                    id="contact-main-phone-link"
                    href={BUSINESS.phoneTel}
                    className="text-xl font-extrabold text-sky-700 hover:text-sky-900 hover:underline block mt-0.5"
                    aria-label={`Call ${BUSINESS.name} at ${BUSINESS.phone}`}
                  >
                    {BUSINESS.phone}
                  </a>
                  <span className="text-xs text-slate-500">
                    Click to dial directly from mobile or phone app
                  </span>
                </div>
              </div>

              {/* Google Reviews */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 fill-amber-400" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Google Review Rating
                  </span>
                  <p className="text-base font-bold text-slate-900 mt-0.5">
                    {BUSINESS.rating}/5 Rating
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Based on {BUSINESS.reviewCount} customer reviews
                  </p>
                </div>
              </div>

              {/* Scope */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                  Service Scope
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Residential Homes & Apartments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Workplace & Corporate Offices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>Small Commercial & Storefront Glazing</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Direct Call Highlight Card */}
            <div className="bg-sky-50/70 rounded-2xl p-6 border border-sky-200/80 space-y-3">
              <h3 className="text-base font-bold text-sky-950 flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Prefer to speak directly?</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Give us a call at <a href={BUSINESS.phoneTel} className="font-bold text-sky-800 underline">{BUSINESS.phone}</a>. We are pleased to answer your questions regarding window cleaning for your property in Lille.
              </p>
            </div>
          </div>

          {/* Right Column: Professional Enquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
};
