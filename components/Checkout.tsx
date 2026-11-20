/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Service, Language } from '../types';
import { TRANSLATIONS } from '../translations';
import SafeImage from './SafeImage';
import BrandLogo from './BrandLogo';

interface CheckoutProps {
  items: Service[];
  onBack: () => void;
  language: Language;
  onSuccess: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ items, onBack, language, onSuccess }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    details: '',
  });

  const SUBMISSION_ENDPOINT =
    'https://script.google.com/macros/s/AKfycbyfqG8zbjwwgY3uuvDRyGB_HwhFkXIRtqElDvWmpQNGhgWi-amhKjgBT2o8hntml-lh/exec';

  const t = TRANSLATIONS[language]?.inquiry || TRANSLATIONS.en.inquiry;
  const st = TRANSLATIONS[language]?.services || TRANSLATIONS.en.services;
  const isRtl = language === 'ar';

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!emailRegex.test(formData.email.trim())) {
      setError(
        language === 'ar'
          ? 'يرجى إدخال بريد إلكتروني صحيح.'
          : 'Please enter a valid work email address.'
      );
      return;
    }

    setIsSubmitting(true);

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      company: formData.company.trim(),
      details: formData.details.trim(),
      services: items.map((i) => i.name).join(', '),
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
      await new Promise((resolve) => setTimeout(resolve, 600));
      setSubmitted(true);
      onSuccess();
    } catch {
      setError(
        language === 'ar'
          ? 'حدث خطأ في الاتصال بالمخدم. يرجى المحاولة مرة أخرى.'
          : 'Connection failed. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F7F8FA] p-6 text-center">
        <div className="max-w-md w-full bg-white border border-slate-200 rounded-2xl p-8 md:p-10 animate-fade-in-up">
          <div className="w-12 h-12 bg-[#0037F3] rounded-xl flex items-center justify-center mx-auto mb-6 text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-heading font-bold text-[#0A0B0D] mb-3 tracking-tight">
            {t.success}
          </h1>
          <p className="text-sm md:text-base text-[#525866] mb-8 leading-relaxed">{t.successSub}</p>
          <button
            type="button"
            onClick={onBack}
            className="w-full py-3.5 px-6 bg-[#0A0B0D] hover:bg-[#0037F3] text-white text-sm font-medium rounded-lg transition-colors"
          >
            {t.returnHome}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F8FA] py-10 md:py-16 px-6 md:px-12 animate-fade-in-up text-start">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10 pb-6 border-b border-slate-200">
          <BrandLogo variant="dark" />
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#525866] hover:text-[#0037F3] transition-colors"
          >
            <svg
              className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            <span>{t.back}</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-white p-6 md:p-10 rounded-xl border border-slate-200">
            <header className="mb-8">
              <p className="text-sm font-medium text-[#0037F3] mb-2">{t.contact}</p>
              <h1 className="text-2xl md:text-3xl font-heading font-bold text-[#0A0B0D] tracking-tight">
                {t.title}
              </h1>
            </header>

            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="brief-name" className="block text-xs font-medium text-[#0A0B0D] mb-1.5">
                    {t.name}
                  </label>
                  <input
                    id="brief-name"
                    required
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full h-11 px-3.5 text-sm bg-[#F8F9FB] border border-slate-200 rounded-lg text-[#0A0B0D] focus:bg-white focus:border-[#0037F3] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="brief-email" className="block text-xs font-medium text-[#0A0B0D] mb-1.5">
                    {t.email}
                  </label>
                  <input
                    id="brief-email"
                    required
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full h-11 px-3.5 text-sm bg-[#F8F9FB] border border-slate-200 rounded-lg text-[#0A0B0D] focus:bg-white focus:border-[#0037F3] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="brief-org" className="block text-xs font-medium text-[#0A0B0D] mb-1.5">
                  {t.org}
                </label>
                <input
                  id="brief-org"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full h-11 px-3.5 text-sm bg-[#F8F9FB] border border-slate-200 rounded-lg text-[#0A0B0D] focus:bg-white focus:border-[#0037F3] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="brief-details" className="block text-xs font-medium text-[#0A0B0D] mb-1.5">
                  {t.scopeLabel}
                </label>
                <textarea
                  id="brief-details"
                  required
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  placeholder={t.context}
                  rows={4}
                  className="w-full p-3.5 text-sm bg-[#F8F9FB] border border-slate-200 rounded-lg text-[#0A0B0D] placeholder:text-slate-400 focus:bg-white focus:border-[#0037F3] resize-none transition-colors"
                />
              </div>

              {error && (
                <div role="alert" className="px-4 py-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-200">
                  {error}
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting || items.length === 0}
                  className="w-full py-3.5 px-6 bg-[#0037F3] hover:bg-[#002BC4] disabled:opacity-50 text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <span>{isSubmitting ? t.processing : t.submit}</span>
                  {!isSubmitting && (
                    <svg
                      className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  )}
                </button>
                <p className="text-xs text-center text-[#525866] mt-3">{t.assessment}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 sticky top-8">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-base font-heading font-bold text-[#0A0B0D]">{t.scopes}</h2>
                <span className="font-mono tabular-nums text-xs text-[#525866]">
                  {items.length}
                </span>
              </div>

              <div className="divide-y divide-slate-100 max-h-[380px] overflow-y-auto">
                {items.map((item, idx) => {
                  const categoryLabel = st.categoryLabels?.[item.category] || item.category;
                  return (
                    <div key={idx} className="flex gap-3.5 py-3.5 first:pt-0">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#0F131C] shrink-0">
                        <SafeImage src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col justify-center min-w-0">
                        <h3 className="text-sm font-heading font-semibold text-[#0A0B0D] truncate">
                          {item.name}
                        </h3>
                        <p className="text-xs text-[#525866]">{categoryLabel}</p>
                      </div>
                    </div>
                  );
                })}
                {items.length === 0 && (
                  <p className="text-sm text-[#525866] text-center py-8">{t.empty}</p>
                )}
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200">
                <p className="text-xs font-medium text-[#0A0B0D] mb-1">
                  {language === 'ar' ? 'الخصوصية والسرية الهندسية' : 'Confidential Technical Review'}
                </p>
                <p className="text-xs text-[#525866] leading-relaxed">
                  {language === 'ar'
                    ? 'تتم مراجعة جميع البيانات بسرية تامة في مركز الهندسة بدمشق فور استلام الطلب.'
                    : 'All architectural requirements are handled confidentially by our Damascus engineering desk upon submission.'}
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
