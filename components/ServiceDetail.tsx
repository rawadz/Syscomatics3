
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect } from 'react';
import { Service, Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface ServiceDetailProps {
  service: Service;
  onBack: () => void;
  onAddToBrief: (service: Service) => void;
  language: Language;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack, onAddToBrief, language }) => {
  // Safe access to translations with fallback to English
  const t = (TRANSLATIONS[language]?.services) || TRANSLATIONS.en.services;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!service) return null;

  return (
    <div className="min-h-screen bg-white animate-fade-in-up selection:bg-[#0037f3] selection:text-white text-start">
      
      {/* Sub-Nav / Action Bar */}
      <div className="sticky top-0 z-[40] bg-white/90 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between h-20">
            <button onClick={onBack} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-[#0037f3] transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
               </svg>
               {t.back}
            </button>
            <button 
                onClick={() => onAddToBrief(service)} 
                className="px-6 py-3 bg-[#0a0b0d] text-white text-[10px] font-black uppercase tracking-widest hover:bg-[#0037f3] transition-colors rounded-xl shadow-xl shadow-black/10"
            >
                {t.briefAdd}
            </button>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-24 pb-48">
        
        {/* SECTION 1: Strategic Brief */}
        <section className="flex justify-center mb-48">
            <div className="max-w-4xl w-full">
                <div className="inline-flex items-center gap-2 px-5 py-2 bg-gray-50 border border-gray-100 text-[#0037f3] text-[10px] font-bold uppercase tracking-widest mb-12 rounded-full">
                    <span className="opacity-50">{t.spec}</span>
                    <span className="font-black text-[#0a0b0d]">{service.category}</span>
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold text-[#0a0b0d] mb-12 tracking-tighter leading-[0.9]">
                    {service.name}
                </h1>
                <p className="text-2xl md:text-4xl font-medium text-gray-400 mb-14 leading-tight">
                    {service.tagline}
                </p>
                <div className="p-12 bg-gray-50 rounded-[3rem] border-inline-start-8 border-[#0037f3]">
                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0037f3] mb-8">{t.thesis}</div>
                    <p className="text-xl text-gray-700 font-medium leading-relaxed">
                        {service.longDescription}
                    </p>
                </div>
            </div>
        </section>

        {/* SECTION 2: Pillars */}
        <section className="mb-48">
            <div className="max-w-2xl mb-24">
                <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-[#0a0b0d] tracking-tighter mb-8">{t.pillars}</h2>
                <p className="text-gray-400 text-lg font-medium">How we ensure the success and stability of your system.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.pillars?.map((pillar, idx) => (
                    <div key={idx} className="p-12 bg-white border border-gray-100 rounded-[3rem] hover:shadow-4xl hover:border-[#0037f3]/30 transition-all group">
                        <div className="text-[10px] font-mono text-gray-300 mb-10 group-hover:text-[#0037f3] transition-colors tracking-[0.3em]">REASON_0{idx + 1}</div>
                        <h3 className="text-3xl font-heading font-extrabold text-[#0a0b0d] mb-6 tracking-tight">{pillar.title}</h3>
                        <p className="text-lg text-gray-500 font-medium leading-relaxed">{pillar.description}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* SECTION 3: Business Value & Implementation Strategy */}
        <section className="mb-48 p-12 md:p-24 bg-[#0a0b0d] rounded-[4rem] text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0037f3]/20 blur-[150px] rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div>
                    <h2 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tighter mb-12">{t.value}</h2>
                    <p className="text-xl md:text-2xl text-white/50 font-medium leading-relaxed">
                        {service.businessValue}
                    </p>
                </div>
                <div className="space-y-12">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0037f3]">{t.roadmap}</h3>
                    <div className="space-y-8">
                        {service.roadmap?.map((step, idx) => (
                            <div key={idx} className="flex gap-8 items-start group/step">
                                <div className="text-2xl font-mono text-[#0037f3] font-bold mt-1">0{idx+1}</div>
                                <div>
                                    <h4 className="text-xl font-heading font-extrabold mb-2 group-hover/step:text-[#0037f3] transition-colors">{step.label}</h4>
                                    <p className="text-sm text-white/40 font-medium leading-relaxed">{step.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        <section className="flex flex-col md:flex-row justify-center items-center gap-12 pt-24 border-t border-gray-100">
            <button 
                onClick={() => onAddToBrief(service)}
                className="w-full md:w-auto px-16 py-8 bg-[#0037f3] text-white text-sm font-black uppercase tracking-widest rounded-[2.5rem] hover:bg-[#0a0b0d] hover:-translate-y-1 transition-all shadow-2xl shadow-[#0037f3]/30"
            >
                {t.briefAdd}
            </button>
        </section>

      </div>
    </div>
  );
};

export default ServiceDetail;
