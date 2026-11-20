/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Service, Language } from '../types';
import { TRANSLATIONS } from '../translations';
import SafeImage from './SafeImage';

interface ServiceDetailProps {
  service: Service;
  isInBrief: boolean;
  onBack: () => void;
  onAddToBrief: (service: Service) => void;
  language: Language;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({
  service,
  isInBrief,
  onBack,
  onAddToBrief,
  language,
}) => {
  const t = TRANSLATIONS[language]?.services || TRANSLATIONS.en.services;
  const categoryLabel = t.categoryLabels?.[service.category] || service.category;
  const isRtl = language === 'ar';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service.id]);

  if (!service) return null;

  return (
    <div className="min-h-screen bg-white pt-16 md:pt-[72px] animate-fade-in-up text-start">
      {/* Architectural Hero Split */}
      <section className="bg-[#090B10] text-white border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 md:py-16">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors mb-8"
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-slate-400 mb-4">
                <span className="text-[#4F7BFF] font-medium">{t.spec}</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-white font-medium">{categoryLabel}</span>
                {service.roadmap?.[service.roadmap.length - 1]?.duration && (
                  <>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="font-mono tabular-nums">
                      {service.roadmap[service.roadmap.length - 1].duration}
                    </span>
                  </>
                )}
              </div>

              <h1
                className="font-heading font-bold text-white tracking-tight leading-[1.08] mb-5"
                style={{ fontSize: 'clamp(2rem, 3.8vw, 3.5rem)' }}
              >
                {service.name}
              </h1>

              <p className="text-base md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
                {service.tagline}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onAddToBrief(service)}
                  className="px-6 py-3.5 bg-[#0037F3] hover:bg-[#002BC4] text-white text-sm font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0"
                >
                  {isInBrief ? t.briefAdded : t.briefAdd}
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex">
              <div className="w-full min-h-[260px] lg:h-full rounded-xl overflow-hidden border border-white/10 bg-[#11141D]">
                <SafeImage
                  src={service.imageUrl}
                  alt={service.name}
                  loading="eager"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Technical Specification Content */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24 space-y-20 md:space-y-24">
        {/* Section 1: Architectural Overview & Included Capabilities */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-7">
            <p className="text-sm font-medium text-[#0037F3] mb-3">{t.thesis}</p>
            <p className="text-xl md:text-2xl font-heading font-semibold text-[#0A0B0D] leading-relaxed mb-8">
              {service.longDescription}
            </p>

            {service.techStack?.length > 0 && (
              <div className="pt-6 border-t border-slate-200">
                <div className="text-xs font-medium text-[#525866] mb-2">{t.techStackLabel}</div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-mono text-[#0A0B0D]">
                  {service.techStack.map((tech, idx) => (
                    <React.Fragment key={tech}>
                      <span>{tech}</span>
                      {idx < service.techStack.length - 1 && (
                        <span aria-hidden="true" className="text-slate-300">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-5 bg-[#F8F9FB] border border-slate-200 rounded-xl p-6 md:p-8">
            <h2 className="text-sm font-medium text-[#0A0B0D] mb-5">{t.featuresLabel}</h2>
            <ul className="space-y-3.5">
              {service.features?.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm md:text-[15px] text-[#374151]">
                  <span className="font-mono tabular-nums text-xs text-[#0037F3] mt-1">
                    0{idx + 1}
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 2: Architectural Pillars */}
        <section className="pt-16 border-t border-slate-200">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-[#0A0B0D] tracking-tight mb-3">
              {t.pillars}
            </h2>
            <p className="text-base text-[#525866] leading-relaxed">{t.pillarsSub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.pillars?.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 bg-[#F8F9FB] border border-slate-200/90 rounded-xl"
              >
                <div className="font-mono tabular-nums text-xs font-medium text-[#0037F3] mb-3">
                  0{idx + 1}.
                </div>
                <h3 className="text-lg md:text-xl font-heading font-bold text-[#0A0B0D] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm md:text-base text-[#525866] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Business Outcome & Implementation Roadmap */}
        <section className="p-8 md:p-14 bg-[#090B10] text-white rounded-2xl border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <p className="text-sm font-medium text-[#4F7BFF] mb-3">{t.roiBadge}</p>
                <h2 className="text-2xl md:text-4xl font-heading font-bold tracking-tight mb-5">
                  {t.value}
                </h2>
                <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                  {service.businessValue}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <h3 className="text-sm font-medium text-slate-400 mb-6">{t.roadmap}</h3>
              <div className="divide-y divide-white/10 border-t border-white/10">
                {service.roadmap?.map((step, idx) => (
                  <div key={idx} className="py-5 flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex items-center gap-3 sm:w-44 shrink-0">
                      <span className="font-mono tabular-nums text-xs font-semibold text-[#4F7BFF]">
                        0{idx + 1}
                      </span>
                      <span className="font-mono tabular-nums text-xs text-slate-400">
                        {step.duration}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-heading font-semibold text-white mb-1">
                        {step.label}
                      </h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final Decision Block */}
        <section className="pt-12 border-t border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#0A0B0D] mb-2">
              {t.ctaHeader}
            </h3>
            <p className="text-sm md:text-base text-[#525866] leading-relaxed">{t.ctaSub}</p>
          </div>
          <button
            type="button"
            onClick={() => onAddToBrief(service)}
            className="px-7 py-4 bg-[#0037F3] hover:bg-[#002BC4] text-white text-sm font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            {isInBrief ? t.briefAdded : t.briefAdd}
          </button>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetail;
