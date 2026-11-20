/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TRANSLATIONS } from '../translations';
import { Language } from '../types';
import BrandLogo from './BrandLogo';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  inquiryCount: number;
  onOpenInquiry: () => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  forceLightSurface?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  onNavClick,
  inquiryCount,
  onOpenInquiry,
  language,
  onLanguageChange,
  forceLightSurface = false,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = TRANSLATIONS[language]?.nav || TRANSLATIONS.en.nav;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMobileMenuOpen(false);
    onNavClick(e, targetId);
  };

  const isLightMode = scrolled || mobileMenuOpen || forceLightSurface;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
          isLightMode
            ? 'bg-white/95 backdrop-blur-md text-[#0A0B0D] border-b border-slate-200/80'
            : 'bg-[#090B10]/70 backdrop-blur-md text-white border-b border-white/10'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-16 md:h-[72px] flex items-center justify-between gap-8">
          {/* Zone 1: Single-element Brand Wordmark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
              onNavClick(e, '');
            }}
            className="whitespace-nowrap shrink-0 focus-visible:outline-2 rounded-sm"
            aria-label="Syscomatics Home"
          >
            <BrandLogo variant={isLightMode ? 'dark' : 'light'} />
          </a>

          {/* Zone 2: Clean Single-Line Navigation Links */}
          <nav
            aria-label="Primary"
            className="hidden lg:flex items-center gap-8 text-sm font-medium"
          >
            {[
              { id: 'services', label: t.solutions },
              { id: 'about', label: t.strategy },
              { id: 'journal', label: t.insights },
              { id: 'contact', label: t.contact },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                className={`whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent transition-colors duration-150 ${
                  isLightMode
                    ? 'text-slate-600 hover:text-[#0A0B0D] hover:border-[#0037F3]'
                    : 'text-slate-300 hover:text-white hover:border-[#0037F3]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Language Switch & Primary Action */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={() => onLanguageChange(language === 'en' ? 'ar' : 'en')}
              className={`h-9 px-2.5 text-xs font-medium tracking-wide rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 ${
                isLightMode
                  ? 'text-slate-600 hover:text-[#0A0B0D] hover:bg-slate-100'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
              aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
            >
              {language === 'en' ? 'العربية' : 'EN'}
            </button>

            <button
              type="button"
              onClick={onOpenInquiry}
              className="hidden sm:inline-flex items-center gap-2.5 h-10 px-4 bg-[#0037F3] hover:bg-[#002BC4] text-white text-sm font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              <span>{t.brief}</span>
              {inquiryCount > 0 && (
                <span className="font-mono tabular-nums text-xs bg-white/20 px-1.5 py-0.5 rounded">
                  {inquiryCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
                isLightMode ? 'text-[#0A0B0D] hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Sheet */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-white lg:hidden flex flex-col justify-between p-6 border-t border-slate-200 animate-fade-in-up">
          <nav aria-label="Mobile" className="flex flex-col divide-y divide-slate-100">
            {[
              { id: 'services', label: t.solutions },
              { id: 'about', label: t.strategy },
              { id: 'journal', label: t.insights },
              { id: 'contact', label: t.contact },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                className="py-4 text-lg font-heading font-semibold text-[#0A0B0D] hover:text-[#0037F3] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-slate-200">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3.5 px-5 bg-[#0037F3] hover:bg-[#002BC4] text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>{t.brief}</span>
              <span className="font-mono tabular-nums text-xs bg-white/20 px-1.5 py-0.5 rounded">
                {inquiryCount}
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;