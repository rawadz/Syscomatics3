
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
      
      {/* Cinematic Hero Section - COLORED IMAGE */}
      <div className="relative w-full h-[60vh] md:h-[70vh] min-h-[450px] md:min-h-[550px] overflow-hidden bg-[#0a0b0d]">
        <img 
          src={service.imageUrl} 
          alt={service.name} 
          className="w-full h-full object-cover transition-all duration-1000 scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-black/10 to-black/60"></div>
        
        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end pb-12 md:pb-24 px-6 md:px-12">
            <div className="max-w-[1440px] mx-auto w-full">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-6 md:mb-8 rounded-full">
                    <span className="opacity-90">{t.spec}</span>
                    <span className="font-black">{service.category}</span>
                </div>
                <h1 className="text-4xl md:text-8xl font-heading font-extrabold text-white mb-4 md:mb-6 tracking-tighter leading-[0.9] md:leading-[0.85] drop-shadow-2xl">
                    {service.name}
                </h1>
                <p className="text-lg md:text-3xl font-medium text-white max-w-3xl leading-tight drop-shadow-lg">
                    {service.tagline}
                </p>
            </div>
        </div>
      </div>

      {/* Sticky Action Bar */}
      <div className="sticky top-0 z-[40] bg-white/80 backdrop-blur-2xl border-b border-gray-100 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
            <button onClick={onBack} className="group flex items-center gap-2 md:gap-3 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-[#0037f3] transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={`w-3.5 h-3.5 transition-transform ${language === 'ar' ? 'rotate-180' : 'group-hover:-translate-x-1'}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
               </svg>
               {t.back}
            </button>
            
            <button 
                onClick={() => onAddToBrief(service)} 
                className="px-6 py-3 md:px-8 md:py-4 bg-[#0037f3] text-white text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:bg-[#0a0b0d] transition-all rounded-lg md:rounded-xl shadow-xl shadow-[#0037f3]/20 hover:-translate-y-0.5"
            >
                {t.briefAdd}
            </button>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-32">
        
        {/* SECTION 1: Strategic Brief */}
        <section className="flex justify-center mb-24 md:mb-48">
            <div className="max-w-4xl w-full">
                <div className="p-8 md:p-20 bg-gray-50 rounded-[2.5rem] md:rounded-[4rem] border-l-4 md:border-l-8 border-[#0037f3] shadow-inner">
                    <div className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-[#0037f3] mb-6 md:mb-10">{t.thesis}</div>
                    <p className="text-lg md:text-3xl text-gray-800 font-medium leading-relaxed font-heading">
                        {service.longDescription}
                    </p>
                </div>
            </div>
        </section>

        {/* SECTION 2: Pillars Grid */}
        <section className="mb-24 md:mb-48">
            <div className="max-w-2xl mb-12 md:mb-24">
                <div className="h-1 w-12 md:w-16 bg-[#0037f3] mb-6 md:mb-8"></div>
                <h2 className="text-3xl md:text-6xl font-heading font-extrabold text-[#0a0b0d] tracking-tighter mb-4 md:mb-8">{t.pillars}</h2>
                <p className="text-gray-400 text-base md:text-lg font-medium">Engineered foundations ensuring scalability, security, and operational excellence.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {service.pillars?.map((pillar, idx) => (
                    <div key={idx} className="p-8 md:p-12 bg-white border border-gray-100 rounded-[2rem] md:rounded-[3rem] hover:shadow-4xl hover:border-[#0037f3]/40 transition-all group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 md:p-8 text-3xl md:text-4xl font-heading font-black text-gray-50 group-hover:text-[#0037f3]/10 transition-colors">0{idx + 1}</div>
                        <h3 className="text-xl md:text-3xl font-heading font-extrabold text-[#0a0b0d] mb-4 md:mb-6 tracking-tight group-hover:text-[#0037f3] transition-colors">{pillar.title}</h3>
                        <p className="text-base md:text-lg text-gray-500 font-medium leading-relaxed">{pillar.description}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* SECTION 3: Business Value & Roadmap */}
        <section className="mb-24 md:mb-48 p-8 md:p-24 bg-[#0a0b0d] rounded-[3rem] md:rounded-[5rem] text-white relative overflow-hidden group shadow-3xl">
            <div className="absolute top-0 right-0 w-full h-full opacity-40">
                <img src={service.imageUrl} className="w-full h-full object-cover blur-sm" alt="Background" />
            </div>
            <div className="absolute inset-0 bg-[#0a0b0d]/90"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0037f3]/20 border border-[#0037f3]/30 text-[#0037f3] text-[8px] md:text-[9px] font-black uppercase tracking-widest mb-6 md:mb-10 rounded-full">
                        ROI & Strategic Outcomes
                    </div>
                    <h2 className="text-3xl md:text-7xl font-heading font-extrabold tracking-tighter mb-8 md:mb-12">{t.value}</h2>
                    <p className="text-lg md:text-2xl text-white/70 font-medium leading-relaxed">
                        {service.businessValue}
                    </p>
                </div>
                <div className="space-y-10 md:space-y-16">
                    <h3 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-[#0037f3]">{t.roadmap}</h3>
                    <div className="space-y-8 md:space-y-10">
                        {service.roadmap?.map((step, idx) => (
                            <div key={idx} className="flex gap-4 md:gap-8 items-start group/step">
                                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-lg md:text-xl font-mono text-[#0037f3] font-bold group-hover/step:bg-[#0037f3] group-hover/step:text-white transition-all">
                                    {idx + 1}
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-1 md:mb-2">
                                        <h4 className="text-lg md:text-xl font-heading font-extrabold group-hover/step:text-[#0037f3] transition-colors">{step.label}</h4>
                                    </div>
                                    <p className="text-xs md:text-sm text-white/50 font-medium leading-relaxed">{step.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Final CTA */}
        <section className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 pt-16 md:pt-24 border-t border-gray-100">
            <div className="text-center md:text-start max-w-md">
                <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-[#0a0b0d] mb-3 md:mb-4">Ready for Engineering?</h3>
                <p className="text-sm md:text-base text-gray-400 font-medium">Add this solution to your project brief for a technical architecture review within 24 hours.</p>
            </div>
            <button 
                onClick={() => onAddToBrief(service)}
                className="w-full md:w-auto px-10 py-6 md:px-16 md:py-8 bg-[#0037f3] text-white text-[11px] md:text-sm font-black uppercase tracking-widest rounded-2xl md:rounded-[2.5rem] hover:bg-[#0a0b0d] hover:-translate-y-2 transition-all shadow-3xl shadow-[#0037f3]/40"
            >
                {t.briefAdd}
            </button>
        </section>

      </div>

      <style>{`
        @keyframes subtle-zoom {
          0% { transform: scale(1.05); }
          100% { transform: scale(1.15); }
        }
      `}</style>
    </div>
  );
};

export default ServiceDetail;
