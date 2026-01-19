
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useMemo } from 'react';
import { getServices, TRANSLATIONS } from '../constants';
import { Service, Language } from '../types';
import ServiceCard from './ServiceCard';

interface ServiceGridProps {
  onServiceClick: (service: Service) => void;
  language: Language;
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ onServiceClick, language }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const t = TRANSLATIONS[language].services;
  
  // Expanded categories to match the new service list
  const categories = ['All', 'Enterprise', 'Development', 'Security', 'Blockchain', 'Design', 'Consulting', 'Cloud'];
  const localizedServices = getServices(language);

  const filteredServices = useMemo(() => {
    if (activeCategory === 'All') return localizedServices;
    return localizedServices.filter(s => s.category === activeCategory);
  }, [activeCategory, localizedServices]);

  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-gray-50/50">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl text-start">
            <div className="h-1 w-16 bg-[#0037f3] mb-8"></div>
            <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-[#0a0b0d] tracking-tighter mb-6">
                {t.header}
            </h2>
            <p className="text-lg text-gray-500 font-medium">{t.sub}</p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 text-[11px] font-black uppercase tracking-widest transition-all duration-300 border-2 ${
                  activeCategory === cat 
                    ? 'bg-[#0037f3] border-[#0037f3] text-white shadow-xl shadow-[#0037f3]/20' 
                    : 'bg-white border-gray-100 text-gray-400 hover:border-[#0037f3]/30 hover:text-[#0037f3]'
                }`}
              >
                {cat === 'All' ? (language === 'ar' ? 'الكل' : (language === 'ku' ? 'Hemî' : 'All')) : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(service => (
            <ServiceCard key={service.id} service={service} onClick={onServiceClick} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
