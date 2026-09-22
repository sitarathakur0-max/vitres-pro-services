import React, { useState } from 'react';
import {
  HelpCircle,
  ChevronDown,
  Phone,
  ArrowRight,
  Sparkles,
  MapPin,
  Home,
  Building2,
  Store,
} from 'lucide-react';
import { BUSINESS, PageId } from '../data/business';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
}

interface FaqItem {
  category: 'residential' | 'office' | 'commercial' | 'enquiry' | 'contact';
  question: string;
  answer: string;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqs: FaqItem[] = [
    {
      category: 'residential',
      question: 'What types of residential properties do you clean windows for?',
      answer:
        'Vitres Pro Services cleans windows for residential homes, private apartments, and townhouses located across Lille. Whether you require window cleaning for your main living areas, bedrooms, or balcony glass, please reach out to discuss your residence.',
    },
    {
      category: 'residential',
      question: 'How often should residential windows be cleaned?',
      answer:
        'Window cleaning frequency depends on your location, weather exposure, and personal preference. Because every home in Lille is unique, we encourage you to contact us directly to discuss your specific property and determine the best approach for your space.',
    },
    {
      category: 'office',
      question: 'Do you clean windows for office spaces and workplace buildings?',
      answer:
        'Yes. Vitres Pro Services provides professional window cleaning for offices in Lille. Clean glazing helps provide bright natural daylight and creates a professional, presentable environment for staff and visiting clients.',
    },
    {
      category: 'office',
      question: 'How can office window cleaning be scheduled for minimal disruption?',
      answer:
        'We understand that workspaces operate on specific business routines. Please contact Vitres Pro Services directly on +33 3 20 48 17 65 or submit an enquiry form so we can discuss the requirements and timing for your office in Lille.',
    },
    {
      category: 'commercial',
      question: 'What small commercial properties do you serve?',
      answer:
        'We serve small commercial properties including local retail shops, boutiques, display storefronts, and street-level customer-facing businesses throughout Lille.',
    },
    {
      category: 'commercial',
      question: 'Why is clean glass essential for storefronts and retail spaces?',
      answer:
        'Spotless display glass allows pedestrians and potential customers to clearly see your products, promotions, and interior decor without distracting smudges or street grime, enhancing your storefront’s overall appeal.',
    },
    {
      category: 'enquiry',
      question: 'How do I request a cleaning enquiry or quote?',
      answer:
        'You can submit a cleaning enquiry right on our website via our Contact page, or phone us directly at +33 3 20 48 17 65. Let us know whether your property is residential, an office, or a small commercial space, along with any specific questions you may have.',
    },
    {
      category: 'enquiry',
      question: 'Where can I find specific prices or package rates?',
      answer:
        'Because window sizes, configurations, and property specifications vary, we do not publish fixed rate packages. Please contact Vitres Pro Services directly with details of your property in Lille so we can discuss your enquiry factually and accurately.',
    },
    {
      category: 'contact',
      question: 'Where is Vitres Pro Services located in Lille?',
      answer:
        'Vitres Pro Services is located at 29 Rue Nationale, 59000 Lille, France. We serve residential, office, and small commercial clients in the local Lille area.',
    },
    {
      category: 'contact',
      question: 'What is the best way to contact the business?',
      answer:
        'You can call us directly on +33 3 20 48 17 65, visit our contact page to send an enquiry form, or stop by our location at 29 Rue Nationale, 59000 Lille, France.',
    },
  ];

  const filteredFaqs =
    activeCategory === 'all'
      ? faqs
      : faqs.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-sky-50 via-white to-[#f8fbfe] pt-12 sm:pt-16 pb-12 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 tracking-wide uppercase">
              Frequently Asked Questions
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Window Cleaning Questions & Answers
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Clear answers regarding our residential, office, and small commercial window cleaning services in Lille.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: 'All Questions' },
            { id: 'residential', label: 'Residential' },
            { id: 'office', label: 'Offices' },
            { id: 'commercial', label: 'Small Commercial' },
            { id: 'enquiry', label: 'Enquiries' },
            { id: 'contact', label: 'Contact & Location' },
          ].map((cat) => (
            <button
              key={cat.id}
              id={`faq-filter-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-sky-100 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  id={`faq-toggle-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus-visible:outline-2 focus-visible:outline-sky-500"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <span
                    className={`p-2 rounded-full bg-sky-50 text-sky-700 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 bg-sky-100' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-6 sm:px-7 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-50 pt-3 animate-in fade-in duration-200"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Unanswered questions notice box (Strict requirement: For unsupplied information, tell visitors to contact the business) */}
        <div className="bg-sky-50/80 rounded-2xl p-6 sm:p-8 border border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-lg font-bold text-slate-900">
              Have a specific question about your windows?
            </h3>
            <p className="text-sm text-slate-600 max-w-xl">
              For any details, specific property questions, or scheduling inquiries not answered above, please contact Vitres Pro Services directly.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              id="faq-phone-link"
              href={BUSINESS.phoneTel}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sky-800 bg-white border border-sky-200 hover:bg-sky-50 text-sm shadow-xs"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              <span>{BUSINESS.phone}</span>
            </a>
            <button
              id="faq-enquiry-link"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white bg-sky-600 hover:bg-sky-700 text-sm shadow-xs"
            >
              <span>Contact Page</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
