import React from 'react';
import {
  Home,
  Sun,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Phone,
  ShieldCheck,
  Eye,
  Heart,
} from 'lucide-react';
import { BUSINESS, IMAGES, PageId } from '../data/business';

interface ResidentialPageProps {
  onNavigate: (page: PageId) => void;
}

export const ResidentialPage: React.FC<ResidentialPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-sky-50 via-white to-[#f8fbfe] pt-12 sm:pt-16 pb-12 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 tracking-wide uppercase">
              Residential Window Cleaning
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Spotless Window Cleaning for Homes in Lille
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Bringing clear glass and abundant natural daylight into houses and apartments across Lille with thoughtful, professional local service.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Visual + Overview */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              The Importance of Clean Windows in Residential Spaces
            </h2>
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                Your home is your sanctuary, and the windows are its lenses to the world outside. When glass surfaces are clear and spotless, rooms instantly feel more open, vibrant, and filled with uplifting natural daylight.
              </p>
              <p>
                Everyday living, seasonal weather, rain, and city dust inevitably leave layers of film on residential glass. Routine professional window cleaning eliminates these visual obstructions, elevating the comfort of your living spaces and restoring true exterior views.
              </p>
              <p>
                Vitres Pro Services provides dependable, local window cleaning tailored to homes and apartments in Lille. We take genuine pride in treating your residential environment with the utmost care, ensuring pristine, streak-free clarity.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center mt-0.5 shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <p className="text-sm text-slate-700">
                  <strong>Brighter Living Areas:</strong> Maximizes the flow of sunlight across lounge spaces, bedrooms, and dining areas.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center mt-0.5 shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <p className="text-sm text-slate-700">
                  <strong>Clear Outdoor Perspective:</strong> Uninterrupted views of your garden, street, or Lille architectural vistas.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center mt-0.5 shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <p className="text-sm text-slate-700">
                  <strong>Local Trust & Reliability:</strong> Direct, courteous communication from a Lille-based service provider.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-sky-100 shadow-xl bg-white p-2">
              <img
                src={IMAGES.residential}
                alt="Bright sunlit living space with crystal clear spotless residential windows"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover rounded-xl"
                loading="eager"
              />
              <div className="p-4 bg-white/90 backdrop-blur-md rounded-xl mt-2 flex items-center justify-between">
                <div>
                  <span className="text-xs text-sky-700 font-semibold uppercase tracking-wider">Home Window Care</span>
                  <span className="block text-sm font-bold text-slate-900">Serving Homes in Lille, France</span>
                </div>
                <span className="text-xs font-medium text-slate-500">Rated 4.8/5 on Google</span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits for Homeowners and Residents */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-sm space-y-8">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Why Homeowners Choose Vitres Pro Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Dedicated attention to glass surfaces, delivering spotless results you can enjoy every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-sky-50/50 border border-sky-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center">
                <Sun className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Elevated Ambiance</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Clean glass transforms interior lighting. Natural light reflects off walls and flooring cleanly, fostering a warmer, more uplifting home environment.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-sky-50/50 border border-sky-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Careful & Respectful</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We understand that your residence is a private personal space. We operate with discretion, cleanliness, and thorough attention to glass finishes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-sky-50/50 border border-sky-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Local Accountability</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Located right in Lille at 29 Rue Nationale, we are readily available by phone for questions, discussions, and scheduling your residential enquiry.
              </p>
            </div>
          </div>
        </section>

        {/* Strong CTA leading to Contact */}
        <section className="bg-gradient-to-r from-sky-600 to-sky-800 text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Ready for Spotless Windows in Your Home?
            </h2>
            <p className="text-sky-100 text-sm sm:text-base leading-relaxed">
              Submit an enquiry with your property details, or call Vitres Pro Services directly on {BUSINESS.phone} to discuss your home in Lille.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              id="residential-enquiry-cta-btn"
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-slate-900 bg-white hover:bg-sky-50 shadow-md transition-colors text-sm"
            >
              Get a Residential Enquiry
            </button>
            <a
              id="residential-phone-cta-btn"
              href={BUSINESS.phoneTel}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-white bg-sky-700/60 hover:bg-sky-700 border border-sky-400/40 transition-colors text-sm inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us Directly</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};
