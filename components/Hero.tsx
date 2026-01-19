
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  // Safe translation access with fallback
  const t = (TRANSLATIONS[language]?.hero) || TRANSLATIONS.en.hero;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-[95vh] min-h-[700px] overflow-hidden bg-[#0a0b0d] flex items-center">
      {/* Background Graphic Element */}
      <div className="absolute top-0 right-0 w-2/3 h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[-20%] right-[-10%] w-[100%] h-[140%] border-[1px] border-[#0037f3]/30 rounded-full animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[100%] h-[120%] border-[1px] border-[#0037f3]/20 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="max-w-4xl animate-fade-in-up">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-0.5 w-12 bg-[#0037f3]"></span>
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-[#0037f3]">
              {t.tagline}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-heading font-extrabold text-white leading-[0.9] tracking-tighter mb-10">
            {t.title} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0037f3] to-[#4e79ff]">{t.accent}</span>
          </h1>
          
          <p className="max-w-xl text-lg md:text-xl text-white/60 font-medium leading-relaxed mb-12">
            {t.sub}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, 'services')}
              className="px-12 py-5 bg-[#0037f3] text-white text-sm font-extrabold uppercase tracking-widest hover:bg-white hover:text-[#0a0b0d] transition-all duration-300 text-center"
            >
              {t.cta1}
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')}
              className="px-12 py-5 border border-white/20 text-white text-sm font-extrabold uppercase tracking-widest hover:border-white transition-all duration-300 text-center"
            >
              {t.cta2}
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements - Damascus, Syria */}
      <div className="absolute bottom-12 right-12 left-12 md:left-auto flex flex-col items-end gap-2 text-white/40 font-mono text-[10px] uppercase tracking-widest">
        <span>LAT: 33.5138 N</span>
        <span>LNG: 36.2765 E</span>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-[#0037f3]">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
