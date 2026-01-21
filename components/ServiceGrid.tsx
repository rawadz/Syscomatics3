
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
  language: Language;
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ onServiceClick, language }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Safe translation access
  const t = (TRANSLATIONS[language]?.services) || TRANSLATIONS.en.services;
  
  const categories = ['All', 'Enterprise', 'Development', 'Security', 'Design', 'Consulting', 'Cloud', 'Blockchain'];
  const localizedServices = getServices(language);

  const filteredServices = useMemo(() => {
    if (activeCategory === 'All') return localizedServices;
    return localizedServices.filter(s => s.category === activeCategory);
  }, [activeCategory, localizedServices]);

  const allLabelMap: Record<Language, string> = {
    en: 'All',
    ar: 'الكل',
    ku: 'Hemî'
  };

  return (
    <section id="services" className="py-20 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-24 gap-8 md:gap-12 text-start">
          <div className="max-w-2xl">
            <div className="h-1 w-12 md:w-16 bg-[#0037f3] mb-6 md:mb-8"></div>
            <h2 className="text-3xl md:text-7xl font-heading font-extrabold text-[#0a0b0d] tracking-tighter mb-4 md:mb-6">
                {t.header}
            </h2>
            <p className="text-lg md:text-xl text-gray-400 font-medium">{t.sub}</p>
          </div>
          
          <div className="flex flex-wrap gap-2 md:gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 md:px-6 md:py-3 text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all duration-300 border-2 ${
                  activeCategory === cat 
                    ? 'bg-[#0a0b0d] border-[#0a0b0d] text-white shadow-xl' 
                    : 'bg-white border-gray-100 text-gray-400 hover:border-[#0037f3] hover:text-[#0037f3]'
                }`}
              >
                {cat === 'All' ? allLabelMap[language] : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredServices.map(service => (
            <ServiceCard key={service.id} service={service} onClick={onServiceClick} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;