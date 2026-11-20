/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TRANSLATIONS } from '../translations';
import { Language } from '../types';

interface ContactSectionProps {
  language: Language;
  inquiryCount: number;
  onOpenInquiry: () => void;
}

const SUBMISSION_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbyfqG8zbjwwgY3uuvDRyGB_HwhFkXIRtqElDvWmpQNGhgWi-amhKjgBT2o8hntml-lh/exec';

const ContactSection: React.FC<ContactSectionProps> = ({
  language,
  inquiryCount,
  onOpenInquiry,
}) => {
  const t = TRANSLATIONS[language]?.contact || TRANSLATIONS.en.contact;
  const footerT = TRANSLATIONS[language]?.footer || TRANSLATIONS.en.footer;
  const isRtl = language === 'ar';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [focus, setFocus] = useState(t.focusOptions?.[0] || '');
  const [details, setDetails] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim() || !details.trim()) {
      setError(t.missingFields);
      return;
    }

    if (!emailRegex.test(email.trim())) {
      setError(t.invalidEmail);
      return;
    }

    setIsSubmitting(true);

    const payload = {
      name: name.trim(),
      email: email.trim(),
      company: company.trim(),
      details: details.trim(),
      services: focus || t.focusOptions?.[0] || 'General Technical Review',
      submittedAt: new Date().toLocaleString(),
      lang: language,
    };

    try {
      await fetch(SUBMISSION_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      setSubmitted(true);
      setName('');
      setEmail('');
      setCompany('');
      setDetails('');
    } catch {
      setError(
        language === 'ar'
          ? 'تعذر إرسال الطلب حالياً. يرجى المحاولة مرة أخرى.'
          : 'Unable to submit right now. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-20 md:py-28 px-6 md:px-12 text-start border-t border-slate-200/80">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Consultation Context */}
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-[#0037F3] mb-3">{t.kicker}</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#0A0B0D] tracking-tight leading-[1.15] mb-4">
              {t.title}
            </h2>
            <p className="text-base text-[#525866] leading-relaxed mb-8">
              {t.sub}
            </p>

            <div className="border-t border-slate-200 pt-6 space-y-5">
              <div>
                <div className="text-xs font-medium text-[#525866] mb-1">{t.directLabel}</div>
                <div className="text-base font-medium text-[#0A0B0D]">{footerT.address}</div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="text-xs font-medium text-[#525866] mb-1">{footerT.emailLabel}</div>
                  <a
                    href={`mailto:${footerT.email}`}
                    className="text-sm font-medium text-[#0A0B0D] hover:text-[#0037F3] transition-colors"
                    dir="ltr"
                  >
                    {footerT.email}
                  </a>
                </div>

                <div>
                  <div className="text-xs font-medium text-[#525866] mb-1">{footerT.phoneLabel}</div>
                  <a
                    href={`tel:${footerT.phone.replace(/\s/g, '')}`}
                    className="text-sm font-medium text-[#0A0B0D] hover:text-[#0037F3] transition-colors font-mono tabular-nums"
                    dir="ltr"
                  >
                    {footerT.phone}
                  </a>
                </div>
              </div>

              <p className="text-xs text-[#525866] pt-2">
                {t.responseNote}
              </p>

              {inquiryCount > 0 && (
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={onOpenInquiry}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#0037F3] hover:text-[#002BC4] transition-colors"
                  >
                    <span>
                      {language === 'ar'
                        ? `مراجعة ملخص المشروع المختار (${inquiryCount})`
                        : `Review your selected Project Brief (${inquiryCount})`}
                    </span>
                    <svg
                      className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Validated Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#F8F9FB] border border-slate-200 rounded-xl p-6 md:p-10">
              {submitted ? (
                <div className="py-8 text-start">
                  <div className="w-11 h-11 rounded-lg bg-[#0037F3] text-white flex items-center justify-center mb-5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-[#0A0B0D] mb-2">
                    {t.successTitle}
                  </h3>
                  <p className="text-sm md:text-base text-[#525866] leading-relaxed mb-6 max-w-lg">
                    {t.successBody}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2.5 text-sm font-medium text-[#0A0B0D] bg-white border border-slate-200 hover:border-[#0037F3] hover:text-[#0037F3] rounded-lg transition-colors"
                  >
                    {t.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-medium text-[#0A0B0D] mb-1.5">
                        {t.nameLabel}
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t.namePlaceholder}
                        className="w-full h-11 px-3.5 text-sm bg-white border border-slate-200 rounded-lg text-[#0A0B0D] placeholder:text-slate-400 focus:border-[#0037F3] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-medium text-[#0A0B0D] mb-1.5">
                        {t.emailLabel}
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t.emailPlaceholder}
                        className="w-full h-11 px-3.5 text-sm bg-white border border-slate-200 rounded-lg text-[#0A0B0D] placeholder:text-slate-400 focus:border-[#0037F3] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-company" className="block text-xs font-medium text-[#0A0B0D] mb-1.5">
                        {t.companyLabel}
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder={t.companyPlaceholder}
                        className="w-full h-11 px-3.5 text-sm bg-white border border-slate-200 rounded-lg text-[#0A0B0D] placeholder:text-slate-400 focus:border-[#0037F3] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-focus" className="block text-xs font-medium text-[#0A0B0D] mb-1.5">
                        {t.focusLabel}
                      </label>
                      <select
                        id="contact-focus"
                        value={focus}
                        onChange={(e) => setFocus(e.target.value)}
                        className="w-full h-11 px-3.5 text-sm bg-white border border-slate-200 rounded-lg text-[#0A0B0D] focus:border-[#0037F3] transition-colors"
                      >
                        {t.focusOptions?.map((option: string) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-details" className="block text-xs font-medium text-[#0A0B0D] mb-1.5">
                      {t.detailsLabel}
                    </label>
                    <textarea
                      id="contact-details"
                      rows={4}
                      required
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder={t.detailsPlaceholder}
                      className="w-full p-3.5 text-sm bg-white border border-slate-200 rounded-lg text-[#0A0B0D] placeholder:text-slate-400 focus:border-[#0037F3] resize-none transition-colors"
                    />
                  </div>

                  {error && (
                    <div
                      role="alert"
                      className="px-4 py-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg"
                    >
                      {error}
                    </div>
                  )}

                  <div className="pt-1 flex items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3.5 bg-[#0037F3] hover:bg-[#002BC4] disabled:opacity-60 text-white text-sm font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0"
                    >
                      {isSubmitting ? t.submitting : t.submit}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
