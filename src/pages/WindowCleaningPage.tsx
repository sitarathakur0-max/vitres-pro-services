import React from 'react';
import {
  Sparkles,
  Sun,
  Home,
  Building2,
  Store,
  ArrowRight,
  CheckCircle2,
  Eye,
  Shield,
  Phone,
} from 'lucide-react';
import { BUSINESS, IMAGES, PageId } from '../data/business';

interface WindowCleaningPageProps {
  onNavigate: (page: PageId) => void;
}

export const WindowCleaningPage: React.FC<WindowCleaningPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-sky-50 via-white to-[#f8fbfe] pt-12 sm:pt-16 pb-12 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 tracking-wide uppercase">
              Service Overview
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Professional Window Cleaning Services in Lille
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Delivering clearer windows and cleaner-looking spaces for homes, offices, and small commercial properties throughout Lille.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. Clearer Windows & Cleaner-Looking Spaces */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Clearer Windows for a Bright, Spotless Outlook
            </h2>
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                Windows play an essential role in how any interior feels. When glass becomes coated in urban residue, dust, water droplets, and airborne particles, it creates a subtle haze that filters out natural light and impairs visibility.
              </p>
              <p>
                Vitres Pro Services focuses on achieving true optical clarity. By thoroughly cleaning glass surfaces, we help restore the transparent brilliance of your windows, allowing maximum natural daylight to enter and providing an unobstructed view of your surroundings in Lille.
              </p>
              <p>
                Whether you live in a residential flat, manage a busy office, or run a small storefront, spotless glass enhances the overall cleanliness and appeal of the entire building.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="p-4 rounded-xl bg-white border border-sky-100 shadow-xs space-y-1.5">
                <div className="flex items-center gap-2 text-sky-700 font-bold text-sm">
                  <Eye className="w-4 h-4" />
                  <span>Unrestricted Clarity</span>
                </div>
                <p className="text-xs text-slate-600">
                  Removal of surface grime, smudges, and dirt marks for clean, transparent glass panes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-sky-100 shadow-xs space-y-1.5">
                <div className="flex items-center gap-2 text-sky-700 font-bold text-sm">
                  <Sun className="w-4 h-4" />
                  <span>Brighter Natural Light</span>
                </div>
                <p className="text-xs text-slate-600">
                  Allow natural daylight to fill your rooms and enhance the warmth and atmosphere of your space.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-sky-100 shadow-lg bg-white p-2">
              <img
                src={IMAGES.hero}
                alt="Professional window cleaning delivering clear spotless architectural glass"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* 2. Cleaner-Looking Spaces */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-sm space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              How Clean Windows Transform Interior Spaces
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Even in an otherwise tidy room, smeared or foggy window glass draws the eye and diminishes the sense of order. Clean windows act as an invisible frame, elevating the interior aesthetic and creating an immediate impression of freshness and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="space-y-2 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 font-bold text-sm flex items-center justify-center">
                01
              </span>
              <h3 className="text-lg font-bold text-slate-900">Enhanced Room Brightness</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Spotless glass allows ambient light to bounce evenly off interior walls, floors, and furniture.
              </p>
            </div>

            <div className="space-y-2 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 font-bold text-sm flex items-center justify-center">
                02
              </span>
              <h3 className="text-lg font-bold text-slate-900">Immediate Visual Freshness</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Visitors, clients, and family members immediately perceive spaces as crisper and more inviting.
              </p>
            </div>

            <div className="space-y-2 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 font-bold text-sm flex items-center justify-center">
                03
              </span>
              <h3 className="text-lg font-bold text-slate-900">Exterior Curb Appeal</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                From the street, sparkling glass reflects the surrounding architecture cleanly without dull streaks.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Three Specific Service Categories */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Specialized Service for Every Property Type
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Vitres Pro Services caters directly to homes, offices, and small commercial spaces across Lille.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Residential */}
            <div className="bg-white rounded-2xl border border-sky-100 p-7 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center">
                  <Home className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Residential Cleaning</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Tailored for houses, apartments, and private dwellings. We respect your home environment while methodically bringing clarity and light to every window pane.
                </p>
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600" />
                    <span>Living rooms, bedrooms, and kitchens</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600" />
                    <span>Careful attention to window surroundings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600" />
                    <span>Personalized, courteous service</span>
                  </div>
                </div>
              </div>
              <button
                id="service-to-residential-btn"
                onClick={() => onNavigate('residential')}
                className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 transition-colors text-center inline-flex items-center justify-center gap-1.5"
              >
                <span>View Residential Page</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Office */}
            <div className="bg-white rounded-2xl border border-sky-100 p-7 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Office Cleaning</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Designed for corporate workspaces, consulting rooms, and professional offices in Lille. Clean windows foster a productive and impressive work environment.
                </p>
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600" />
                    <span>Meeting rooms and workstation windows</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600" />
                    <span>Professional, reliable attendance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600" />
                    <span>Presentable atmosphere for visitors</span>
                  </div>
                </div>
              </div>
              <button
                id="service-to-commercial-btn"
                onClick={() => onNavigate('commercial')}
                className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-teal-700 bg-teal-50 hover:bg-teal-100 transition-colors text-center inline-flex items-center justify-center gap-1.5"
              >
                <span>View Commercial Page</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Small Commercial */}
            <div className="bg-white rounded-2xl border border-sky-100 p-7 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center">
                  <Store className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Small Commercial Properties</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Ideal for boutiques, local shops, and customer-facing premises. Crystal-clear showcase windows draw customer attention into your retail display.
                </p>
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-slate-800" />
                    <span>Shopfront display windows and entrance glass</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-slate-800" />
                    <span>Enhanced street visibility along Lille avenues</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-slate-800" />
                    <span>Local business-to-business reliability</span>
                  </div>
                </div>
              </div>
              <button
                id="service-to-small-comm-btn"
                onClick={() => onNavigate('commercial')}
                className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors text-center inline-flex items-center justify-center gap-1.5"
              >
                <span>Explore Storefront Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-sky-50/80 border border-sky-200 rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl font-bold text-slate-900">
              Ready to discuss your window cleaning needs?
            </h3>
            <p className="text-slate-600 text-sm max-w-xl">
              Contact Vitres Pro Services at 29 Rue Nationale, Lille, or give us a direct call at {BUSINESS.phone}.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              id="services-bottom-enquiry-btn"
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-xl font-semibold text-white bg-sky-600 hover:bg-sky-700 transition-colors shadow-sm"
            >
              Get a Cleaning Enquiry
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
