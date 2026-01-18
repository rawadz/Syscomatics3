
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useMemo } from 'react';
import { SERVICES } from '../constants';
import { Service } from '../types';
import ServiceCard from './ServiceCard';

const categories = ['All', 'Enterprise', 'Development', 'Security', 'Blockchain'];

interface ServiceGridProps {
  onServiceClick: (service: Service) => void;
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ onServiceClick }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredServices = useMemo(() => {
    if (activeCategory === 'All') return SERVICES;
    return SERVICES.filter(s => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-gray-50/50">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <div className="h-1 w-16 bg-[#0037f3] mb-8"></div>
            <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-[#0a0b0d] tracking-tighter mb-6">Expert Solutions Portfolio</h2>
            <p className="text-lg text-gray-500 font-medium">Selecting the right architecture is a strategic decision. Explore our core implementation pillars.</p>
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
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(service => (
            <ServiceCard key={service.id} service={service} onClick={onServiceClick} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
