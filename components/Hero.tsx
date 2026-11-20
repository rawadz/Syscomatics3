/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TRANSLATIONS } from '../translations';
import { Language } from '../types';
import { MEDIA_ASSETS } from '../mediaAssets';
import SafeImage from './SafeImage';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = TRANSLATIONS[language]?.hero || TRANSLATIONS.en.hero;
  const isRtl = language === 'ar';

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full bg-[#090B10] text-white pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-arch-grid">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Two-Column Stretched Architectural Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch pb-14 md:pb-20 border-b border-white/10">
          {/* Left Column: Core Proposition */}
          <div className="lg:col-span-6 flex flex-col justify-center text-start">
            <p className="text-xs md:text-sm font-medium text-slate-400 tracking-wide mb-5">
              {t.kicker}
            </p>

            <h1
              className="font-heading font-bold text-white tracking-tight leading-[1.08] mb-6"
              style={{ fontSize: 'clamp(2.35rem, 4.2vw, 4rem)' }}
            >
              {t.title}{' '}
              <span className="text-[#4F7BFF]">{t.accent}</span>
            </h1>

            <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-xl mb-10">
              {t.sub}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, 'services')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#0037F3] hover:bg-[#002BC4] text-white text-sm font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                <span>{t.cta1}</span>
                <svg
                  className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="inline-flex items-center justify-center px-5 py-3.5 text-sm font-medium text-slate-200 hover:text-white border border-white/15 hover:border-white/35 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                {t.cta2}
              </a>
            </div>
          </div>

          {/* Right Column: Bespoke Architectural Focal Visual */}
          <div className="lg:col-span-6 flex">
            <div className="relative w-full min-h-[300px] lg:min-h-[460px] lg:h-full rounded-2xl overflow-hidden border border-white/10 bg-[#11141D]">
              <SafeImage
                src={MEDIA_ASSETS.heroArchitecture}
                alt="Syscomatics architectural systems engineering headquarters"
                loading="eager"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090B10]/85 via-[#090B10]/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 inset-x-0 p-6 md:p-8 text-start">
                <p className="text-xs md:text-sm text-slate-200 max-w-md leading-relaxed">
                  {t.imageCaption}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Engineering Proof Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6 pt-10 md:pt-12 text-start">
          {t.metrics?.map((metric: { value: string; label: string }, index: number) => (
            <div
              key={index}
              className="lg:border-s lg:first:border-s-0 lg:border-white/10 lg:ps-8 lg:first:ps-0"
            >
              <div className="font-mono tabular-nums text-2xl md:text-3xl font-semibold text-white tracking-tight mb-1.5">
                {metric.value}
              </div>
              <div className="text-xs md:text-sm text-slate-400 leading-snug">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;