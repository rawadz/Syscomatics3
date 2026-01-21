
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { TRANSLATIONS } from '../translations';
import { Language } from '../types';

interface AboutProps {
  language: Language;
}

const About: React.FC<AboutProps> = ({ language }) => {
  // Safe translation access with fallback
  const t = (TRANSLATIONS[language]?.about) || TRANSLATIONS.en.about;

  return (
    <section id="about" className="bg-[#0a0b0d] py-24 md:py-56 relative overflow-hidden text-start">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#0037f3]/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#4e79ff]/5 blur-[120px] rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 md:mb-32">
          <div className="inline-flex items-center gap-3 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-[#0037f3]/10 border border-[#0037f3]/20 text-[#0037f3] text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-6 md:mb-10">
             <span className="w-1.5 h-1.5 rounded-full bg-[#0037f3]"></span>
             {t.badge}
          </div>
          <h2 className="text-4xl md:text-8xl lg:text-9xl font-heading font-extrabold text-white leading-[1.1] tracking-tighter mb-6 md:mb-10">
              {t.title} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0037f3] to-[#4e79ff]">{t.accent}</span>
          </h2>
          <p className="text-white/40 text-lg md:text-2xl font-medium max-w-xl leading-relaxed">
              {t.sub}
          </p>
        </div>

        {/* The 3-Step Journey Grid / Sticky Stacking Mobile */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8 items-start">
            {t.steps?.map((step: any, idx: number) => (
              <div 
                key={idx} 
                className={`group relative md:block sticky top-[100px] mb-8 md:mb-0`}
                style={{ 
                  zIndex: idx + 1,
                  // On mobile, we add a slight offset for each card in the stack
                  top: `calc(100px + ${idx * 16}px)` 
                }}
              >
                 {/* Card Container */}
                 <div className="relative z-10 bg-[#111215] border border-white/5 rounded-[2rem] md:rounded-[3rem] overflow-hidden hover:border-[#0037f3]/30 transition-all duration-700 md:hover:-translate-y-4 shadow-3xl flex flex-col h-full transform-gpu">
                    {/* Image Block */}
                    <div className="aspect-[16/9] md:aspect-[4/5] overflow-hidden relative">
                       <img 
                          src={step.img} 
                          alt={step.title} 
                          className="w-full h-full object-cover grayscale brightness-[0.6] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-[#111215] via-[#111215]/20 to-transparent"></div>
                       
                       {/* Floating Badge (Replacement for bulky numbers) */}
                       <div className="absolute top-6 left-6 md:top-8 md:left-8">
                          <div className="flex items-center gap-2 px-3 py-1 bg-[#0037f3]/90 backdrop-blur-md rounded-lg shadow-xl">
                             <span className="text-[10px] font-black text-white/50 tracking-tighter">0{idx + 1}</span>
                             <div className="w-px h-3 bg-white/20"></div>
                             <span className="text-[8px] font-black text-white uppercase tracking-widest">{step.title}</span>
                          </div>
                       </div>
                    </div>

                    {/* Content Block */}
                    <div className="p-8 md:p-10 flex-1 bg-[#111215]">
                       <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-white mb-3 tracking-tight group-hover:text-[#0037f3] transition-colors leading-[1.2]">
                          {step.title}
                       </h3>
                       <p className="text-white/40 text-sm md:text-sm font-medium leading-relaxed group-hover:text-white/60 transition-colors">
                          {step.desc}
                       </p>
                    </div>

                    {/* Subtle Progress Bar */}
                    <div className="absolute bottom-0 left-0 h-1 bg-[#0037f3] transition-all duration-700 w-0 group-hover:w-full"></div>
                 </div>
                 
                 {/* Mobile shadow depth to enhance stacking */}
                 <div className="absolute inset-x-4 -bottom-4 h-8 bg-black/40 blur-2xl rounded-full opacity-0 group-sticky:opacity-100 transition-opacity md:hidden pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust/Uptime Banner */}
        <div className="mt-24 md:mt-48 p-8 md:p-16 bg-[#111215] rounded-[2.5rem] md:rounded-[4rem] border border-white/5 flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16 group hover:bg-white/[0.04] transition-all duration-700">
           <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 text-center md:text-start">
              <div className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-[#0037f3] to-[#4e79ff] rounded-3xl flex items-center justify-center shadow-[0_0_50px_rgba(0,55,243,0.3)] rotate-3 group-hover:rotate-0 transition-all duration-500 shrink-0">
                 <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                 </svg>
              </div>
              <div>
                 <div className="text-2xl md:text-5xl font-heading font-black text-white mb-2 tracking-tight">
                    {t.uptimeLabel}
                 </div>
                 <div className="text-[10px] md:text-xs font-black text-[#0037f3] uppercase tracking-[0.4em]">
                    {t.uptime}
                 </div>
              </div>
           </div>
           <p className="text-white/30 text-lg md:text-xl font-medium max-w-sm text-center lg:text-start leading-relaxed">
              {t.uptimed}
           </p>
        </div>

      </div>
      
      <style>{`
        @media (max-width: 768px) {
          /* Add some bottom margin to the last card to allow scrolling past the stack */
          #about .grid > div:last-child {
            margin-bottom: 80px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
