/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect } from 'react';
import { Service, Language } from '../types';
import { TRANSLATIONS } from '../constants';

const TechVisual: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <div className="relative w-full aspect-video bg-[#0a0b0d] rounded-[2.5rem] overflow-hidden group shadow-2xl border border-white/5">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#0037f3_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
                <div className="w-32 h-32 md:w-48 md:h-48 border-2 border-[#0037f3]/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#0037f3] rounded-2xl flex items-center justify-center shadow-[0_0_50px_rgba(0,55,243,0.5)] border border-white/20">
                         <span className="text-white font-heading font-black text-xl">Sc</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
            <div className="text-[10px] font-mono text-white/40 tracking-[0.2em]">SYS//ARC_V.2.5</div>
        </div>
    </div>
  );
};

interface ServiceDetailProps {
  service: Service;
  onBack: () => void;
  onAddToBrief: (service: Service) => void;
  language: Language;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack, onAddToBrief, language }) => {
  const t = TRANSLATIONS[language].services;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white animate-fade-in-up selection:bg-[#0037f3] selection:text-white text-start">
      <div className="sticky top-0 z-[40] bg-white/80 backdrop-blur-xl border-b border-gray-100 hidden md:block">
        <div className="max-w-[1440px] mx-auto px-12 flex items-center justify-between h-20">
            <button onClick={onBack} className="p-3 hover:bg-gray-50 rounded-full transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
               </svg>
            </button>
            <button onClick={() => onAddToBrief(service)} className="px-6 py-2.5 bg-[#0a0b0d] text-white text-[10px] font-black uppercase tracking-widest hover:bg-[#0037f3] transition-colors rounded-lg">
                {t.briefAdd}
            </button>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-24 pb-48">
        <section id="overview" className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-48">
            <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-3 px-5 py-2 bg-gray-50 border border-gray-100 text-[#0037f3] text-[9px] font-black uppercase tracking-[0.4em] mb-12 rounded-full">
                    {t.spec} // {service.category}
                </div>
                <h1 className="text-6xl md:text-9xl font-heading font-extrabold text-[#0a0b0d] mb-12 tracking-tighter leading-[0.85]">
                    {service.name}
                </h1>
                <p className="text-2xl md:text-4xl font-medium text-gray-400 mb-14 leading-tight">
                    {service.tagline}
                </p>
                <div className="p-10 bg-gray-50 rounded-[2.5rem] border-inline-start-4 border-[#0037f3]">
                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0037f3] mb-6">{t.thesis}</div>
                    <p className="text-xl text-gray-600 font-medium leading-relaxed">
                        {service.longDescription || service.description}
                    </p>
                </div>
            </div>
            <div className="lg:col-span-5">
                <div className="sticky top-32">
                   <TechVisual service={service} />
                   <div className="mt-12 grid grid-cols-2 gap-8 px-4">
                      {service.benchmarks.map((b, idx) => (
                        <div key={idx}>
                            <div className="text-4xl font-heading font-black text-[#0037f3] tracking-tighter">{b.value}</div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-2">{b.label}</div>
                        </div>
                      ))}
                   </div>
                </div>
            </div>
        </section>

        <section id="pillars" className="mb-48">
            <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-[#0a0b0d] tracking-tighter mb-20">{t.pillars}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.pillars.map((pillar, idx) => (
                    <div key={idx} className="p-12 bg-white border border-gray-100 rounded-[3rem] hover:shadow-3xl transition-all group">
                        <div className="text-sm font-mono text-gray-300 mb-10 group-hover:text-[#0037f3] transition-colors">_PILLAR_{idx + 1}</div>
                        <h3 className="text-3xl font-heading font-extrabold text-[#0a0b0d] mb-6 tracking-tight">{pillar.title}</h3>
                        <p className="text-lg text-gray-500 font-medium leading-relaxed">{pillar.description}</p>
                    </div>
                ))}
            </div>
        </section>

        <section id="roadmap" className="mb-48 bg-[#0a0b0d] rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden">
            <div className="relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-24">
                    <h2 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tighter mb-8">{t.roadmap}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {service.roadmap.map((step, idx) => (
                        <div key={idx} className="group">
                            <div className="text-2xl font-mono text-[#0037f3] font-bold mb-8">{step.duration}</div>
                            <h3 className="text-xl font-heading font-extrabold mb-4">{step.label}</h3>
                            <p className="text-white/30 text-sm font-medium">{step.detail}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section id="outcomes" className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-8">
                <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-[#0a0b0d] tracking-tighter mb-16">{t.caseStudies}</h2>
                <div className="space-y-12">
                    {service.examples.map((example, idx) => (
                        <div key={idx} className="p-12 bg-gray-50 rounded-[3rem] border border-transparent hover:border-gray-200 transition-all">
                            <div className="text-[10px] font-black uppercase tracking-widest text-[#0037f3] mb-10">{t.case} // 0{idx+1}</div>
                            <h3 className="text-3xl font-heading font-extrabold text-[#0a0b0d] mb-6">{example.title}</h3>
                            <p className="text-lg text-gray-500 font-medium leading-relaxed mb-10">{example.description}</p>
                            <div className="flex items-center gap-4">
                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">{t.outcome}:</span>
                                <span className="text-xl font-heading font-black text-[#0037f3]">{example.results}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="lg:col-span-4">
                <div className="p-12 bg-gray-50 rounded-[3rem] sticky top-32">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-12">{t.tech}</h3>
                    <div className="flex flex-wrap gap-3">
                        {service.techStack.map((tech, idx) => (
                            <div key={idx} className="px-5 py-3 bg-white border border-gray-100 rounded-xl text-[10px] font-mono font-bold text-gray-600 shadow-sm">
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetail;