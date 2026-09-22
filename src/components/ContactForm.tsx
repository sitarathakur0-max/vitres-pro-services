import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, AlertCircle } from 'lucide-react';
import { BUSINESS } from '../data/business';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    propertyType: 'Residential (Home)',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide details about your window cleaning needs.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Simulate submission handling
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      propertyType: 'Residential (Home)',
      message: '',
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-sky-100 shadow-xl shadow-sky-900/5 p-6 sm:p-8 lg:p-10 relative overflow-hidden">
      {/* Decorative glass gradient accent at top */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-400 via-sky-500 to-teal-400" />

      {submitted ? (
        <div id="enquiry-success-message" className="py-8 text-center space-y-5 animate-in fade-in duration-300">
          <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-slate-900">
              Enquiry Received
            </h3>
            <p className="text-slate-600 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
              Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. Your cleaning enquiry for a <span className="font-semibold text-slate-800">{formData.propertyType}</span> property has been noted.
            </p>
          </div>

          <div className="p-4 bg-sky-50/80 border border-sky-100 rounded-xl max-w-md mx-auto text-left text-xs sm:text-sm text-slate-700 space-y-2">
            <p className="font-medium text-sky-950 flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-sky-600 shrink-0" />
              Need a direct response or have specific timing requirements?
            </p>
            <p className="text-slate-600">
              Call Vitres Pro Services directly in Lille at{' '}
              <a
                href={BUSINESS.phoneTel}
                className="font-bold text-sky-700 underline hover:text-sky-900"
              >
                {BUSINESS.phone}
              </a>.
            </p>
          </div>

          <button
            id="new-enquiry-btn"
            type="button"
            onClick={handleReset}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-sm font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-colors"
          >
            Submit Another Cleaning Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Request a Cleaning Enquiry
            </h3>
            <p className="text-slate-500 text-sm">
              Tell us about your property in Lille. For immediate enquiries, you can also call us directly at{' '}
              <a href={BUSINESS.phoneTel} className="text-sky-600 font-semibold hover:underline">
                {BUSINESS.phone}
              </a>.
            </p>
          </div>

          {/* Name Field */}
          <div>
            <label htmlFor="enquiry-name" className="block text-sm font-semibold text-slate-800 mb-1.5">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="enquiry-name"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Jean Dupont"
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'enquiry-name-error' : undefined}
              className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 transition-all bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 ${
                errors.name
                  ? 'border-rose-300 focus:ring-rose-200 bg-rose-50/30'
                  : 'border-slate-200 focus:border-sky-500 focus:ring-sky-100'
              }`}
            />
            {errors.name && (
              <p id="enquiry-name-error" className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="enquiry-email" className="block text-sm font-semibold text-slate-800 mb-1.5">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <input
              type="email"
              id="enquiry-email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@example.com"
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'enquiry-email-error' : undefined}
              className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 transition-all bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 ${
                errors.email
                  ? 'border-rose-300 focus:ring-rose-200 bg-rose-50/30'
                  : 'border-slate-200 focus:border-sky-500 focus:ring-sky-100'
              }`}
            />
            {errors.email && (
              <p id="enquiry-email-error" className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.email}
              </p>
            )}
          </div>

          {/* Property Type Dropdown */}
          <div>
            <label htmlFor="enquiry-property-type" className="block text-sm font-semibold text-slate-800 mb-1.5">
              Property Type <span className="text-rose-500">*</span>
            </label>
            <select
              id="enquiry-property-type"
              name="propertyType"
              value={formData.propertyType}
              onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-100 focus:border-sky-500 transition-all"
            >
              <option value="Residential (Home)">Residential (Home / Apartment)</option>
              <option value="Office">Office Space</option>
              <option value="Small Commercial Property">Small Commercial Property</option>
              <option value="Other Property in Lille">Other Property in Lille</option>
            </select>
            <p className="mt-1 text-xs text-slate-500">
              Vitres Pro Services serves homes, offices, and small commercial properties in Lille.
            </p>
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="enquiry-message" className="block text-sm font-semibold text-slate-800 mb-1.5">
              Message & Window Details <span className="text-rose-500">*</span>
            </label>
            <textarea
              id="enquiry-message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Please describe your property, number or type of windows, and any specific questions..."
              aria-required="true"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'enquiry-message-error' : undefined}
              className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 transition-all bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 ${
                errors.message
                  ? 'border-rose-300 focus:ring-rose-200 bg-rose-50/30'
                  : 'border-slate-200 focus:border-sky-500 focus:ring-sky-100'
              }`}
            />
            {errors.message && (
              <p id="enquiry-message-error" className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              id="enquiry-submit-btn"
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-sky-600 hover:bg-sky-700 shadow-md shadow-sky-600/20 hover:shadow-lg transition-all focus-visible:outline-2 focus-visible:outline-sky-500"
            >
              <Send className="w-4 h-4" />
              <span>Send Cleaning Enquiry</span>
            </button>
            <p className="mt-2.5 text-center text-xs text-slate-400">
              Located at {BUSINESS.address}. We respond promptly to all local enquiries.
            </p>
          </div>
        </form>
      )}
    </div>
  );
};
