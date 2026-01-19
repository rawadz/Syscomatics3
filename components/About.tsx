
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface AboutProps {
  language: Language;
}

const About: React.FC<AboutProps> = ({ language }) => {
  // Safe translation access with fallback
  const t = (TRANSLATIONS[language]?.about) || TRANSLATIONS.en.about;

  return (
    <section id="about" className="bg-[#0a0b0d] py-32 md:py-56 relative overflow-hidden text-start">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#0037f3]/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#4e79ff]/5 blur-[120px] rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-32">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#0037f3]/10 border border-[#0037f3]/20 text-[#0037f3] text-[10px] font-black uppercase tracking-[0.4em] mb-10">
             <span className="w-1.5 h-1.5 rounded-full bg-[#0037f3]"></span>
             {t.badge}
          </div>
          <h2 className="text-6xl md:text-8xl font-heading font-extrabold text-white leading-[0.85] tracking-tighter mb-10">
              {t.title} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0037f3] to-[#4e79ff]">{t.accent}</span>
          </h2>
          <p className="text-white/40 text-xl md:text-2xl font-medium leading-tight">
              {t.sub}
          </p>
        </div>

        {/* The 3-Step Journey Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {t.steps?.map((step: any, idx: number) => (
            <div key={idx} className="group relative">
               {/* Big Number Label */}
               <div className="absolute -top-12 left-6 text-7xl font-heading font-black text-white/5 group-hover:text-[#0037f3]/20 transition-colors duration-700 z-0">
                  0{idx + 1}
               </div>

               {/* Card Container */}
               <div className="relative z-10 bg-[#111215] border border-white/5 rounded-[3rem] overflow-hidden hover:border-[#0037f3]/50 transition-all duration-700 hover:-translate-y-4 shadow-2xl">
                  {/* Image Block */}
                  <div className="aspect-[4/5] overflow-hidden relative">
                     <img 
                        src={step.img} 
                        alt={step.title} 
                        className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d] via-transparent to-transparent opacity-80"></div>
                     
                     {/* Text Overlay */}
                     <div className="absolute bottom-10 left-10 right-10">
                        <h3 className="text-3xl font-heading font-extrabold text-white mb-4 tracking-tight group-hover:text-[#0037f3] transition-colors">
                           {step.title}
                        </h3>
                        <p className="text-white/40 text-sm font-medium leading-relaxed group-hover:text-white/70 transition-colors">
                           {step.desc}
                        </p>
                     </div>
                  </div>
               </div>
            </div>
          ))}
        </div>

        {/* Trust/Uptime Banner */}
        <div className="mt-48 p-12 bg-white/5 rounded-[4rem] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-12 group hover:bg-white/[0.07] transition-all">
           <div className="flex items-center gap-8">
              <div className="w-24 h-24 bg-[#0037f3] rounded-3xl flex items-center justify-center shadow-[0_0_50px_rgba(0,55,243,0.4)] rotate-3 group-hover:rotate-0 transition-transform">
                 <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                 </svg>
              </div>
              <div>
                 <div className="text-4xl font-heading font-black text-white mb-2 tracking-tight">99.9% Uptime</div>
                 <div className="text-sm font-black text-[#0037f3] uppercase tracking-[0.4em]">{t.uptime}</div>
              </div>
           </div>
           <p className="text-white/30 text-lg font-medium max-w-sm text-center md:text-start">
              {t.uptimed}
           </p>
        </div>

      </div>
    </section>
  );
};

export default About;
