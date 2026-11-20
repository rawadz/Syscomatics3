
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
  const tickerItems = t.ticker || [];
  const isRtl = language === 'ar';

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
        <div className="relative mb-12 md:mb-20">
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
                          className="w-full h-full object-cover brightness-[0.85] group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-[#111215] via-[#111215]/20 to-transparent"></div>
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
      </div>

      {/* Tighter, perfectly slanted technical news ticker with translated sentences */}
      <div className="relative w-full overflow-visible py-4 md:py-8 group">
        <div className="bg-[#0037f3] transform -skew-y-2 md:-skew-y-1 transition-all duration-1000 ease-in-out group-hover:skew-y-0 shadow-[0_20px_80px_rgba(0,55,243,0.3)] py-1.5 md:py-3 border-y border-white/20">
            
            {/* Forced LTR container for consistent animation logic across all languages */}
            <div className="relative z-10 flex overflow-hidden py-1.5 md:py-2 select-none border-y border-white/10" dir="ltr">
              <div className={`flex ${isRtl ? 'animate-marquee-rtl' : 'animate-marquee-ltr'} whitespace-nowrap items-center`}>
                {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
                  <div key={idx} className="flex items-center mx-6 md:mx-12">
                    {/* Individual sentences maintain their specific language direction */}
                    <span className="text-white text-base md:text-2xl font-heading font-extrabold tracking-tight" dir={isRtl ? 'rtl' : 'ltr'}>
                      {item}
                    </span>
                    {/* Minimalist Visual Separator */}
                    <div className="mx-8 md:mx-16 flex items-center gap-1.5 md:gap-2">
                        <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-white rounded-full"></div>
                        <div className="w-6 md:w-12 h-px bg-white/30"></div>
                        <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-white rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Added "Circuit" overlay for technical feel */}
            <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
      </div>
      
      <style>{`
        /* Standard Right-to-Left movement for LTR languages */
        @keyframes marquee-ltr {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        
        /* Left-to-Right movement for Arabic as specifically requested */
        @keyframes marquee-rtl {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }

        .animate-marquee-ltr {
          animation: marquee-ltr 60s linear infinite;
        }

        .animate-marquee-rtl {
          animation: marquee-rtl 60s linear infinite;
        }

        @media (max-width: 768px) {
          #about .grid > div:last-child {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
