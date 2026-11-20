
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { TRANSLATIONS } from '../translations';
import { getServices } from '../servicesData';
import { Service, Language } from '../types';
import ServiceCard from './ServiceCard';

interface ServiceGridProps {
  onServiceClick: (service: Service) => void;
  language: Language;
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ onServiceClick, language }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  const t = (TRANSLATIONS[language]?.services) || TRANSLATIONS.en.services;
  const categories = ['All', 'Enterprise', 'Development', 'Security', 'Design', 'Consulting', 'Cloud', 'Blockchain', 'AI'];
  const localizedServices = getServices(language);

  // Dynamic counting of services per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: localizedServices.length };
    localizedServices.forEach(s => {
      counts[s.category] = (counts[s.category] || 0) + 1;
    });
    return counts;
  }, [localizedServices]);

  const filteredServices = useMemo(() => {
    if (activeCategory === 'All') return localizedServices;
    return localizedServices.filter(s => s.category === activeCategory);
  }, [activeCategory, localizedServices]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const moveAmount = clientWidth * 0.8;
      const isRtl = language === 'ar';
      
      let scrollValue = direction === 'left' ? -moveAmount : moveAmount;
      if (isRtl) scrollValue = -scrollValue;

      scrollRef.current.scrollBy({ left: scrollValue, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    handleScroll();
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeCategory]);

  return (
    <section id="services" className="py-20 md:py-48 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col mb-16 md:mb-20 text-start">
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <span className="h-1 w-12 md:w-20 bg-[#0037f3]"></span>
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-[#0037f3]">Core Expertise</span>
          </div>
          <h2 className="text-4xl md:text-8xl font-heading font-extrabold text-[#0a0b0d] tracking-tighter mb-4 md:mb-6 leading-[0.9]">
              {t.header}
          </h2>
          <p className="text-lg md:text-2xl text-gray-400 font-medium max-w-xl">{t.sub}</p>
        </div>

        {/* Categories Navigation Bar */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar -mx-6 px-6 md:mx-0 md:px-0 md:flex-wrap">
            {categories.map(cat => {
              const isActive = activeCategory === cat;
              const count = categoryCounts[cat] || 0;
              const label = t.categoryLabels?.[cat] || cat;
              
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`group relative flex items-center gap-3 shrink-0 px-6 py-3.5 rounded-full border-2 transition-all duration-500 font-black uppercase tracking-[0.15em] text-[10px] md:text-[11px] ${
                    isActive 
                      ? 'bg-[#0a0b0d] border-[#0a0b0d] text-white shadow-xl shadow-[#0a0b0d]/10' 
                      : 'bg-white border-gray-100 text-gray-400 hover:border-[#0037f3] hover:text-[#0037f3]'
                  }`}
                >
                  {label}
                  
                  <span className={`flex items-center justify-center min-w-[24px] h-[24px] rounded-full text-[8px] transition-colors duration-500 ${
                    isActive 
                      ? 'bg-[#0037f3] text-white' 
                      : 'bg-gray-50 text-gray-400 group-hover:bg-[#0037f3]/10 group-hover:text-[#0037f3]'
                  }`}>
                    {count.toString().padStart(2, '0')}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel">
          {/* Navigation Arrows - Desktop Only */}
          <div className={`hidden lg:flex absolute top-1/2 -translate-y-1/2 z-20 w-full justify-between pointer-events-none transition-opacity duration-300 -mx-10 px-4 ${filteredServices.length < 4 ? 'lg:opacity-0' : ''}`}>
            <button 
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-14 h-14 bg-transparent border border-gray-200/20 rounded-full flex items-center justify-center pointer-events-auto transition-all hover:bg-gray-50/50 hover:border-[#0037f3]/30 active:scale-95 disabled:opacity-0 ${language === 'ar' ? 'rotate-180' : ''}`}
              aria-label="Scroll Left"
            >
              <svg className="w-6 h-6 text-gray-400/30 transition-colors group-hover:text-[#0037f3]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-14 h-14 bg-transparent border border-gray-200/20 rounded-full flex items-center justify-center pointer-events-auto transition-all hover:bg-gray-50/50 hover:border-[#0037f3]/30 active:scale-95 disabled:opacity-0 ${language === 'ar' ? 'rotate-180' : ''}`}
              aria-label="Scroll Right"
            >
              <svg className="w-6 h-6 text-gray-400/30 transition-colors group-hover:text-[#0037f3]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Scrolling Wrapper */}
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 md:gap-10 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-12 pt-4 -mx-6 px-6"
          >
            {filteredServices.map(service => (
              <div key={service.id} className="min-w-[85vw] md:min-w-[45vw] lg:min-w-[32%] snap-start">
                <ServiceCard service={service} onClick={onServiceClick} language={language} />
              </div>
            ))}
            
            {/* Empty State / Coming Soon */}
            {filteredServices.length === 0 && (
              <div className="w-full py-20 text-center bg-gray-50 rounded-[3rem] border border-dashed border-gray-200">
                <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Architectural Logic Pending for this Sector</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default ServiceGrid;
