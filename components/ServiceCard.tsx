
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  onClick: (service: Service) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  return (
    <div 
      className="group relative flex flex-col p-8 bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
      onClick={() => onClick(service)}
    >
      {/* Decorative Background Accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#0037f3]/5 rounded-bl-full translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500"></div>
      
      <div className="relative mb-8 h-1 w-12 bg-gray-200 group-hover:bg-[#0037f3] group-hover:w-full transition-all duration-500"></div>
      
      <div className="mb-10 text-gray-400 group-hover:text-[#0037f3] transition-colors duration-300">
        <span className="text-xs font-bold uppercase tracking-[0.2em]">{service.category}</span>
      </div>
      
      <h3 className="text-3xl font-heading font-extrabold text-[#0a0b0d] mb-4 tracking-tight group-hover:text-[#0037f3] transition-colors">
        {service.name}
      </h3>
      
      <p className="text-[#5D5A53] font-medium leading-relaxed mb-8 flex-1">
        {service.description}
      </p>
      
      <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-[#0a0b0d] group-hover:gap-5 transition-all">
        Explore Solution
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-[#0037f3]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
      
      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0037f3] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
    </div>
  );
};

export default ServiceCard;
