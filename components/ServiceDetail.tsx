
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
      <div className="relative w-full h-[70vh] min-h-[550px] overflow-hidden bg-[#0a0b0d]">
        <img 
          src={service.imageUrl} 
          alt={service.name} 
          className="w-full h-full object-cover opacity-80 transition-all duration-1000 scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
        />
        {/* Adjusted gradient for color visibility while keeping text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-black/20 to-black/60"></div>
        
        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end pb-24 px-6 md:px-12">
            <div className="max-w-[1440px] mx-auto w-full">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold uppercase tracking-widest mb-8 rounded-full">
                    <span className="opacity-70">{t.spec}</span>
                    <span className="font-black">{service.category}</span>
                </div>
                <h1 className="text-5xl md:text-8xl font-heading font-extrabold text-white mb-6 tracking-tighter leading-[0.85] drop-shadow-2xl">
                    {service.name}
                </h1>
                <p className="text-xl md:text-3xl font-medium text-white/90 max-w-3xl leading-tight drop-shadow-lg">
                    {service.tagline}
                </p>
            </div>
        </div>
      </div>

      {/* Sticky Action Bar */}
      <div className="sticky top-0 z-[40] bg-white/80 backdrop-blur-2xl border-b border-gray-100 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between h-20">
            <button onClick={onBack} className="group flex items-center gap-3 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-[#0037f3] transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={`w-4 h-4 transition-transform ${language === 'ar' ? 'rotate-180' : 'group-hover:-translate-x-1'}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
               </svg>
               {t.back}
            </button>
            
            {/* "Strategic Review Active" status removed as per request */}
            <div className="hidden md:block"></div>

            <button 
                onClick={() => onAddToBrief(service)} 
                className="px-8 py-4 bg-[#0037f3] text-white text-[10px] font-black uppercase tracking-widest hover:bg-[#0a0b0d] transition-all rounded-xl shadow-xl shadow-[#0037f3]/20 hover:-translate-y-0.5"
            >
                {t.briefAdd}
            </button>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-32">
        
        {/* SECTION 1: Strategic Brief */}
        <section className="flex justify-center mb-48">
            <div className="max-w-4xl w-full">
                <div className="p-12 md:p-20 bg-gray-50 rounded-[4rem] border-l-8 border-[#0037f3] shadow-inner">
                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0037f3] mb-10">{t.thesis}</div>
                    <p className="text-2xl md:text-3xl text-gray-800 font-medium leading-relaxed font-heading">
                        {service.longDescription}
                    </p>
                </div>
            </div>
        </section>

        {/* SECTION 2: Pillars Grid */}
        <section className="mb-48">
            <div className="max-w-2xl mb-24">
                <div className="h-1 w-16 bg-[#0037f3] mb-8"></div>
                <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-[#0a0b0d] tracking-tighter mb-8">{t.pillars}</h2>
                <p className="text-gray-400 text-lg font-medium">Engineered foundations ensuring scalability, security, and operational excellence.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.pillars?.map((pillar, idx) => (
                    <div key={idx} className="p-12 bg-white border border-gray-100 rounded-[3rem] hover:shadow-4xl hover:border-[#0037f3]/40 transition-all group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 text-4xl font-heading font-black text-gray-50 group-hover:text-[#0037f3]/10 transition-colors">0{idx + 1}</div>
                        <div className="text-[10px] font-mono text-gray-300 mb-10 group-hover:text-[#0037f3] transition-colors tracking-[0.3em]">CORE_PILLAR_0{idx + 1}</div>
                        <h3 className="text-3xl font-heading font-extrabold text-[#0a0b0d] mb-6 tracking-tight">{pillar.title}</h3>
                        <p className="text-lg text-gray-500 font-medium leading-relaxed">{pillar.description}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* SECTION 3: Business Value & Roadmap */}
        <section className="mb-48 p-12 md:p-24 bg-[#0a0b0d] rounded-[5rem] text-white relative overflow-hidden group shadow-3xl">
            <div className="absolute top-0 right-0 w-full h-full opacity-30">
                {/* Background image in color but dimmed */}
                <img src={service.imageUrl} className="w-full h-full object-cover blur-sm" alt="Background" />
            </div>
            <div className="absolute inset-0 bg-[#0a0b0d]/90"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0037f3]/20 border border-[#0037f3]/30 text-[#0037f3] text-[9px] font-black uppercase tracking-widest mb-10 rounded-full">
                        ROI & Outcomes
                    </div>
                    <h2 className="text-4xl md:text-7xl font-heading font-extrabold tracking-tighter mb-12">{t.value}</h2>
                    <p className="text-xl md:text-2xl text-white/50 font-medium leading-relaxed">
                        {service.businessValue}
                    </p>
                </div>
                <div className="space-y-16">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0037f3]">{t.roadmap}</h3>
                    <div className="space-y-10">
                        {service.roadmap?.map((step, idx) => (
                            <div key={idx} className="flex gap-8 items-start group/step">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl font-mono text-[#0037f3] font-bold group-hover/step:bg-[#0037f3] group-hover/step:text-white transition-all">
                                    {idx + 1}
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h4 className="text-xl font-heading font-extrabold group-hover/step:text-[#0037f3] transition-colors">{step.label}</h4>
                                        <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">{step.duration}</span>
                                    </div>
                                    <p className="text-sm text-white/40 font-medium leading-relaxed">{step.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* SECTION 4: Performance Benchmarks REMOVED as per request */}

        {/* Final CTA */}
        <section className="flex flex-col md:flex-row justify-center items-center gap-12 pt-24 border-t border-gray-100">
            <div className="text-center md:text-start max-w-md">
                <h3 className="text-3xl font-heading font-extrabold text-[#0a0b0d] mb-4">Ready for Engineering?</h3>
                <p className="text-gray-400 font-medium">Add this solution to your project brief for a technical architecture review within 24 hours.</p>
            </div>
            <button 
                onClick={() => onAddToBrief(service)}
                className="w-full md:w-auto px-16 py-8 bg-[#0037f3] text-white text-sm font-black uppercase tracking-widest rounded-[2.5rem] hover:bg-[#0a0b0d] hover:-translate-y-2 transition-all shadow-3xl shadow-[#0037f3]/40"
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
