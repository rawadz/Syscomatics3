
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Service } from '../types';

interface ServiceDetailProps {
  service: Service;
  onBack: () => void;
  onAddToBrief: (service: Service) => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack, onAddToBrief }) => {
  return (
    <div className="pt-24 min-h-screen bg-white animate-fade-in-up">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pb-24">
        <button 
          onClick={onBack}
          className="group flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-[#0037f3] transition-colors mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Solutions Portfolio
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#0037f3]/5 rounded-3xl -z-10 transition-transform duration-700 group-hover:rotate-1"></div>
            <div className="w-full aspect-[4/5] bg-gray-100 overflow-hidden rounded-2xl shadow-2xl relative">
              <img 
                src={service.imageUrl} 
                alt={service.name} 
                className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 transition-all duration-1000"
              />
              {/* Overlay Schematic Layer */}
              <div className="absolute inset-0 bg-[#0037f3]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8">
                 <div className="text-[10px] font-mono text-white/80 uppercase tracking-widest mb-4">Architecture Layer v2.0</div>
                 <div className="space-y-2">
                   <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-white animate-[loading_2s_infinite]"></div>
                   </div>
                   <div className="h-1 w-2/3 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-white animate-[loading_3s_infinite]"></div>
                   </div>
                 </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
             <div className="flex items-center gap-4 mb-6">
               <span className="h-0.5 w-8 bg-[#0037f3]"></span>
               <span className="text-xs font-black text-[#0037f3] uppercase tracking-[0.3em]">{service.category}</span>
             </div>
             <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-[#0a0b0d] mb-6 tracking-tighter">{service.name}</h1>
             <p className="text-2xl font-medium text-gray-400 mb-10 leading-tight">{service.tagline}</p>
             
             <div className="prose prose-lg text-gray-500 font-medium leading-relaxed mb-12">
               {service.longDescription || service.description}
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {service.features.map((feature, idx) => (
                   <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 group hover:border-[#0037f3]/30 transition-colors">
                     <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-[#0037f3] font-bold text-xs group-hover:bg-[#0037f3] group-hover:text-white transition-colors">
                        {idx + 1}
                     </div>
                     <span className="text-sm font-bold text-[#0a0b0d] tracking-tight">{feature}</span>
                   </div>
                 ))}
             </div>

             <button 
               onClick={() => onAddToBrief(service)}
               className="group relative w-full py-6 bg-[#0037f3] text-white uppercase tracking-[0.2em] text-xs font-black overflow-hidden shadow-2xl shadow-[#0037f3]/30"
             >
               <span className="relative z-10">Add to Strategy Brief</span>
               <div className="absolute inset-0 bg-[#0a0b0d] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
             </button>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
};

export default ServiceDetail;
