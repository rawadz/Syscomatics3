/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { TRANSLATIONS } from '../translations';
import { getServices } from '../servicesData';
import { Service, Language } from '../types';
import ServiceCard from './ServiceCard';

interface ServiceGridProps {
  onServiceClick: (service: Service) => void;
  onToggleBrief: (service: Service) => void;
  briefServiceIds: string[];
  language: Language;
}

const ServiceGrid: React.FC<ServiceGridProps> = ({
  onServiceClick,
  onToggleBrief,
  briefServiceIds,
  language,
}) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const t = TRANSLATIONS[language]?.services || TRANSLATIONS.en.services;
  const categories = ['All', 'Enterprise', 'Development', 'Security', 'Cloud', 'AI', 'Blockchain', 'Design', 'Consulting'];
  const localizedServices = getServices(language);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: localizedServices.length };
    localizedServices.forEach((s) => {
      counts[s.category] = (counts[s.category] || 0) + 1;
    });
    return counts;
  }, [localizedServices]);

  const filteredServices = useMemo(() => {
    if (activeCategory === 'All') return localizedServices;
    return localizedServices.filter((s) => s.category === activeCategory);
  }, [activeCategory, localizedServices]);

  return (
    <section id="services" className="py-20 md:py-28 px-6 md:px-12 bg-white text-start">
      <div className="max-w-[1440px] mx-auto">
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12 md:mb-14">
          <div className="lg:col-span-7">
            <p className="text-sm font-medium text-[#0037F3] mb-3">{t.kicker}</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0A0B0D] tracking-tight leading-[1.1]">
              {t.header}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base md:text-lg text-[#525866] leading-relaxed">
              {t.sub}
            </p>
          </div>
        </div>

        {/* Interactive Segmented Category Filter */}
        <div className="mb-10 border-b border-slate-200 pb-4">
          <div
            role="tablist"
            aria-label={t.header}
            className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              const count = categoryCounts[cat] || 0;
              const label = t.categoryLabels?.[cat] || cat;

              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#0A0B0D] text-white'
                      : 'text-[#525866] hover:text-[#0A0B0D] hover:bg-slate-100'
                  }`}
                >
                  <span>{label}</span>
                  <span
                    className={`font-mono tabular-nums text-xs ${
                      isActive ? 'text-slate-300' : 'text-slate-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetric Architectural Bento Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, idx) => {
              const isFeaturedWide =
                activeCategory === 'All' && (service.id === 'erp' || service.id === 'cloud');
              const isInBrief = briefServiceIds.includes(service.id);

              return (
                <div
                  key={service.id}
                  className={isFeaturedWide ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'}
                >
                  <ServiceCard
                    service={service}
                    index={idx}
                    featured={isFeaturedWide}
                    isInBrief={isInBrief}
                    onClick={onServiceClick}
                    onToggleBrief={onToggleBrief}
                    language={language}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-16 text-center rounded-xl border border-slate-200 bg-[#F7F8FA]">
            <p className="text-sm text-[#525866]">{t.emptyState}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceGrid;
