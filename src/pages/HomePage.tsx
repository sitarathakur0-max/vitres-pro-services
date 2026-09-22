import React from 'react';
import {
  Sparkles,
  CheckCircle2,
  Home,
  Building2,
  Store,
  Star,
  ArrowRight,
  ShieldCheck,
  SunMedium,
  MapPin,
  Phone,
  Eye,
  Layers,
} from 'lucide-react';
import { BUSINESS, IMAGES, PageId } from '../data/business';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section
        id="home-hero-section"
        className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-[#f7fafc] pt-10 sm:pt-16 pb-16 lg:pb-24 border-b border-sky-100"
      >
        {/* Subtle glass reflection decorative glow */}
        <div
          aria-hidden="true"
          className="absolute top-0 right-1/4 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-10 left-10 w-72 h-72 bg-teal-200/20 rounded-full blur-2xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Trust Tag with Google Reviews */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-sky-200/80 shadow-xs text-xs sm:text-sm text-slate-800">
                <div className="flex items-center text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <span className="font-bold text-slate-900">{BUSINESS.rating}/5</span>
                <span className="text-slate-300">|</span>
                <span className="text-slate-600 font-medium">
                  {BUSINESS.reviewCount} Google Reviews
                </span>
                <span className="text-slate-300">|</span>
                <span className="text-sky-700 font-medium flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-sky-600" />
                  Lille
                </span>
              </div>

              {/* Exact Requested Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Crystal-Clear Windows,{' '}
                <span className="bg-gradient-to-r from-sky-600 via-sky-700 to-teal-700 bg-clip-text text-transparent">
                  A Brighter Space
                </span>
              </h1>

              {/* Exact Requested Supporting Copy */}
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
                Professional window cleaning for homes, offices and small commercial properties in Lille.
              </p>

              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  id="hero-services-cta"
                  onClick={() => onNavigate('window-cleaning')}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-sky-600 hover:bg-sky-700 shadow-md shadow-sky-600/20 hover:shadow-lg transition-all focus-visible:outline-2 focus-visible:outline-sky-500 text-base"
                >
                  <span>Our Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  id="hero-enquiry-cta"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sky-800 bg-white hover:bg-sky-50/80 border border-sky-200 shadow-xs hover:border-sky-300 transition-all focus-visible:outline-2 focus-visible:outline-sky-500 text-base"
                >
                  <span>Get a Cleaning Enquiry</span>
                </button>
              </div>

              {/* Address Quick Badge */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 border-t border-slate-200/80">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>29 Rue Nationale, 59000 Lille</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-sky-600 shrink-0" />
                  <a href={BUSINESS.phoneTel} className="text-slate-700 hover:text-sky-600 font-medium">
                    {BUSINESS.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Hero Visual Card with Real Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-sky-100 shadow-2xl bg-white p-2.5">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src={IMAGES.hero}
                    alt="Professional window cleaner ensuring crystal-clear architectural glass"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  {/* Subtle glass reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-sky-900/30 via-transparent to-white/20 pointer-events-none" />

                  {/* Floating Glass Tag */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-3.5 border border-white/60 shadow-lg flex items-center justify-between">
                    <div>
                      <span className="block text-xs font-semibold text-sky-800 uppercase tracking-wider">
                        Vitres Pro Services
                      </span>
                      <span className="text-sm font-bold text-slate-900">
                        Pristine Glass Clarity in Lille
                      </span>
                    </div>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-50 text-sky-600">
                      <Sparkles className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THREE CORE SERVICE DOMAINS */}
      <section id="home-services-overview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 tracking-wide uppercase mb-3">
            Core Cleaning Areas
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Tailored Window Cleaning Across Lille
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Dedicated service for residential properties, corporate offices, and local commercial shopfronts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Residential */}
          <div className="glass-panel rounded-2xl p-7 flex flex-col justify-between border border-sky-100 shadow-sm glass-card-hover">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-500 text-white flex items-center justify-center shadow-md shadow-sky-500/20">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Residential Window Cleaning
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Clean and bright windows make all the difference inside a home. We provide thorough, attentive window cleaning for houses and apartments in Lille, brightening living areas with unhindered natural daylight.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Brightening home living spaces</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Careful and respectful service for residences</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Spotless clarity on interior and exterior glass</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100">
              <button
                id="home-residential-card-btn"
                onClick={() => onNavigate('residential')}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 hover:text-sky-900 group"
              >
                <span>Learn about residential cleaning</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 2: Office */}
          <div className="glass-panel rounded-2xl p-7 flex flex-col justify-between border border-sky-100 shadow-sm glass-card-hover">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-md shadow-teal-600/20">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Office Window Cleaning
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                A clean workplace environment supports focus, team wellbeing, and a presentable setting for visiting clients. We keep office glazing clear and well-maintained across Lille business locations.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Clean and presentable workspace atmosphere</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Maximizing natural daylight in office rooms</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Professional and dependable service</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100">
              <button
                id="home-office-card-btn"
                onClick={() => onNavigate('commercial')}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-900 group"
              >
                <span>View office cleaning details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 3: Small Commercial Properties */}
          <div className="glass-panel rounded-2xl p-7 flex flex-col justify-between border border-sky-100 shadow-sm glass-card-hover">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-slate-800 text-white flex items-center justify-center shadow-md shadow-slate-800/20">
                <Store className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Small Commercial Properties
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                For street-facing shops, boutiques, and small local commercial premises, clean display windows are the first visual touchpoint for passing pedestrians and arriving customers.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0" />
                  <span>Crisp streetfront visual presentation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0" />
                  <span>Welcoming storefront and display glass</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-slate-800 shrink-0" />
                  <span>Direct local service based in Lille</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100">
              <button
                id="home-commercial-card-btn"
                onClick={() => onNavigate('commercial')}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-800 hover:text-slate-950 group"
              >
                <span>Explore small commercial services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. THE VALUE OF CLEAN, CLEAR WINDOWS */}
      <section id="home-value-section" className="bg-white py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-100 tracking-wide uppercase">
                The Value of Clarity
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Why Clean Windows Make a Noticeable Difference
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Windows are the connection between an interior space and the outside world. Over time, atmospheric grime, dust, rain spots, and environmental film settle across glass panes, subtly diminishing daylight and dulling room ambiance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
                    <SunMedium className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Maximum Natural Light
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Spotless glass allows unobstructed sunlight to pour into rooms, naturally brightening homes and workplaces.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
                    <Eye className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Visual Presentation
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Pristine windows establish an immediate sense of care, cleanliness, and professionalism for visitors and passers-by.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Clearer Outlook
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Enjoy crisp views of Lille streets, gardens, or urban courtyards without distracting streaks or smudges.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Well-Maintained Appearance
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Routine professional cleaning helps keep glass surfaces looking consistently spotless and well cared for.
                  </p>
                </div>
              </div>
            </div>

            {/* Secondary Visual: Residential Window */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-sky-100 shadow-xl bg-slate-100">
                <img
                  src={IMAGES.residential}
                  alt="Bright sunlit living space with crystal clear spotless residential windows"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md text-white p-4 rounded-xl border border-white/10">
                  <p className="text-xs text-sky-300 font-semibold uppercase tracking-wider">
                    Spotless Results
                  </p>
                  <p className="text-sm font-medium mt-0.5">
                    "Clean glass changes how natural daylight feels across every room."
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. PROFESSIONAL SERVICE APPROACH & LOCAL ADVANTAGE */}
      <section id="home-approach-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* Left: Detail Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-sky-100 shadow-xl bg-white p-2">
              <img
                src={IMAGES.detail}
                alt="Close-up detail of professional glass cleaning revealing crystal clear reflection"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover rounded-xl"
                loading="lazy"
              />
              <div className="p-4 bg-white rounded-xl mt-2 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 font-medium">Located centrally in Lille</span>
                  <span className="block text-sm font-bold text-slate-900">29 Rue Nationale, 59000 Lille</span>
                </div>
                <a
                  href={BUSINESS.phoneTel}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 bg-sky-50 px-3 py-1.5 rounded-lg hover:bg-sky-100"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call directly</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Substantial Copy on Approach & Local Choice */}
          <div className="order-1 lg:order-2 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 tracking-wide uppercase">
              Local Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Why Choose a Local Window-Cleaning Service in Lille?
            </h2>
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Working with a local window-cleaning specialist means direct communication, responsiveness, and genuine familiarity with the properties and architecture of Lille. Whether it is a traditional apartment with tall sash windows, a modern residence, an office floor, or a commercial storefront along busy city streets, Vitres Pro Services approaches each job with methodical attention.
              </p>
              <p>
                Our 4.8/5 rating across 32 Google Reviews reflects our commitment to dependable service and clean, clear results. We believe in straightforward interactions: no confusing layers, no distant call centres, just professional local window cleaning right here in Lille.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center mt-0.5 shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Local Presence in Lille</h4>
                  <p className="text-xs text-slate-600">
                    Centrally located at 29 Rue Nationale, serving residential and small commercial clients nearby.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center mt-0.5 shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Direct Telephone Communication</h4>
                  <p className="text-xs text-slate-600">
                    Reach us directly on +33 3 20 48 17 65 to discuss your window cleaning requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center mt-0.5 shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Reliable & Clear Results</h4>
                  <p className="text-xs text-slate-600">
                    Focused exclusively on spotless, streak-free window cleaning for homes, offices, and storefronts.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                id="home-about-link-btn"
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 text-sm font-bold text-sky-700 hover:text-sky-900"
              >
                <span>Read more about Vitres Pro Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 5. STRONG FINAL ENQUIRY CTA SECTION */}
      <section id="home-enquiry-banner" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white p-8 sm:p-12 lg:p-14 overflow-hidden shadow-2xl border border-sky-800/40">
          {/* Background glass shimmer effect */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 -mb-10 -ml-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"
          />

          <div className="relative max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-sky-300" />
              <span>Ready for Cleaner, Brighter Windows?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Get in Touch with Vitres Pro Services in Lille
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Whether you need window cleaning for your home, office, or small commercial premises, our local team is here to assist. Contact us today for a straightforward cleaning enquiry.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                id="banner-enquiry-btn"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-slate-950 bg-sky-300 hover:bg-sky-200 transition-colors text-base shadow-lg shadow-sky-400/20"
              >
                <span>Get a Cleaning Enquiry</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <a
                id="banner-call-btn"
                href={BUSINESS.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-sm transition-colors text-base"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>Call {BUSINESS.phone}</span>
              </a>
            </div>

            <p className="text-xs text-slate-400 pt-2">
              Based at {BUSINESS.address} • Google Rating {BUSINESS.rating}/5 ({BUSINESS.reviewCount} Reviews)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
