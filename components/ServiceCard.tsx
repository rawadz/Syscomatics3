
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Service, Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface ServiceCardProps {
  service: Service;
  onClick: (service: Service) => void;
  language: Language;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick, language }) => {
  const t = TRANSLATIONS[language].services;

  return (
    <div 
      className="group relative h-full flex flex-col p-8 md:p-12 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-4xl transition-all duration-700 cursor-pointer overflow-hidden text-start"
      onClick={() => onClick(service)}
    >
      {/* Dynamic Background Gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#0037f3]/5 rounded-bl-[100px] translate-x-12 -translate-y-12 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-700"></div>
      
      {/* Animated Top Bar */}
      <div className="relative mb-10 h-1.5 w-12 bg-gray-100 rounded-full group-hover:bg-[#0037f3] group-hover:w-full transition-all duration-700 ease-in-out"></div>
      
      <div className="mb-12 flex justify-between items-start">
        <div className="px-3 py-1.5 bg-gray-50 border border-gray-100 text-[#0037f3] rounded-lg">
          <span className="text-[9px] font-black uppercase tracking-[0.2em]">{service.category}</span>
        </div>
        <div className="w-10 h-10 rounded-xl bg-[#0037f3]/5 text-[#0037f3] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
           </svg>
        </div>
      </div>
      
      <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-[#0a0b0d] mb-6 tracking-tighter group-hover:text-[#0037f3] transition-colors leading-[1.1]">
        {service.name}
      </h3>
      
      <p className="text-gray-500 text-base md:text-lg font-medium leading-relaxed mb-10 flex-1 line-clamp-4">
        {service.description}
      </p>
      
      <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
        <div className="flex items-center gap-3 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#0a0b0d] transition-all">
          <span className="group-hover:text-[#0037f3] transition-colors">{t.explore}</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={`w-4 h-4 text-[#0037f3] transition-transform duration-500 group-hover:translate-x-2 ${language === 'ar' ? 'rotate-180' : ''}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>
      
      {/* Subtle hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0037f3]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
    </div>
  );
};

export default ServiceCard;
