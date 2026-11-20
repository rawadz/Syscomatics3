/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Service, Language } from '../types';
import { TRANSLATIONS } from '../translations';
import SafeImage from './SafeImage';

interface ServiceCardProps {
  service: Service;
  index: number;
  featured?: boolean;
  isInBrief: boolean;
  onClick: (service: Service) => void;
  onToggleBrief: (service: Service) => void;
  language: Language;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  index,
  featured = false,
  isInBrief,
  onClick,
  onToggleBrief,
  language,
}) => {
  const t = TRANSLATIONS[language]?.services || TRANSLATIONS.en.services;
  const categoryLabel = t.categoryLabels?.[service.category] || service.category;
  const isRtl = language === 'ar';
  const durationSummary = service.roadmap?.[service.roadmap.length - 1]?.duration;
  const numberLabel = String(index + 1).padStart(2, '0');

  return (
    <article
      className={`group h-full bg-[#F8F9FB] hover:bg-white border border-slate-200/90 hover:border-slate-300 rounded-xl transition-all duration-200 overflow-hidden text-start flex flex-col ${
        featured ? 'lg:flex-row' : ''
      }`}
    >
      {/* Featured Wide Card Architectural Media */}
      {featured && (
        <div
          onClick={() => onClick(service)}
          className="lg:w-[44%] min-h-[220px] lg:min-h-full relative overflow-hidden bg-[#0F131C] cursor-pointer shrink-0"
        >
          <SafeImage
            src={service.imageUrl}
            alt={service.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
      )}

      {/* Card Body */}
      <div className="p-6 md:p-8 flex-1 flex flex-col justify-between gap-6">
        <div>
          {/* Clean Unboxed Metadata Row */}
          <div className="flex items-center gap-2 text-xs text-[#525866] mb-4">
            <span className="font-mono tabular-nums font-medium text-[#0037F3]">{numberLabel}.</span>
            <span className="font-medium text-[#0A0B0D]">{categoryLabel}</span>
            {durationSummary && (
              <>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="font-mono tabular-nums">{durationSummary}</span>
              </>
            )}
          </div>

          <h3 className="text-xl md:text-2xl font-heading font-bold text-[#0A0B0D] tracking-tight leading-snug mb-3">
            <button
              type="button"
              onClick={() => onClick(service)}
              className="text-start hover:text-[#0037F3] transition-colors duration-150 focus-visible:outline-2 rounded-sm"
            >
              {service.name}
            </button>
          </h3>

          <p className="text-sm md:text-[15px] text-[#525866] leading-relaxed mb-5">
            {service.description}
          </p>

          {/* Key Tech/Capability Line for Featured Cards */}
          {featured && service.features?.length > 0 && (
            <ul className="space-y-1.5 text-sm text-[#374151] mb-2">
              {service.features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#0037F3] font-mono text-xs mt-0.5">—</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Action Row */}
        <div className="pt-5 border-t border-slate-200/80 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => onClick(service)}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#0A0B0D] hover:text-[#0037F3] transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            <span>{t.viewSpec}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-150 ${
                isRtl ? 'rotate-180 group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleBrief(service);
            }}
            className={`px-3.5 py-2 text-xs font-medium rounded-lg border transition-colors duration-150 whitespace-nowrap shrink-0 ${
              isInBrief
                ? 'bg-[#0037F3] border-[#0037F3] text-white hover:bg-[#002BC4]'
                : 'bg-white border-slate-200 text-[#0A0B0D] hover:border-[#0037F3] hover:text-[#0037F3]'
            }`}
          >
            {isInBrief ? t.briefAdded : t.briefAdd}
          </button>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
