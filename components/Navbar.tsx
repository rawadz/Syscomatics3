
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { TRANSLATIONS } from '../translations';
import { Language } from '../types';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  inquiryCount: number;
  onOpenInquiry: () => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick, inquiryCount, onOpenInquiry, language, onLanguageChange }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  // Safe translation access with fallback
  const t = (TRANSLATIONS[language]?.nav) || TRANSLATIONS.en.nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMobileMenuOpen(false);
    onNavClick(e, targetId);
  };

  const isLightMode = scrolled || mobileMenuOpen;
  
  const navThemeClass = isLightMode 
    ? 'bg-white/95 text-[#0a0b0d] shadow-lg py-3' 
    : 'bg-transparent text-white py-6';

  // Specific logo URLs provided by the user
  const LOGO_BLACK = "https://images.unsplash.com/vector-1768853907539-e980f0fde018?q=80&w=400&auto=format&fit=crop";
  const LOGO_WHITE = "https://images.unsplash.com/vector-1768853907602-d0fb4587ae8d?q=80&w=400&auto=format&fit=crop";

  const LOGO_SRC = isLightMode ? LOGO_BLACK : LOGO_WHITE;

  const languages = [
    { id: 'en', label: 'EN' },
    { id: 'ar', label: 'AR' },
    { id: 'ku', label: 'KU' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out backdrop-blur-sm ${navThemeClass}`}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <a 
            href="#" 
            onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                onNavClick(e, '');
            }}
            className="group flex items-center gap-1 z-50 relative"
          >
            <div className="flex items-center h-8 md:h-10">
               <img 
                 src={LOGO_SRC} 
                 alt="Syscomatics Logo" 
                 className="h-full w-auto object-contain transition-all duration-500"
               />
            </div>
          </a>
          
          <div className="hidden lg:flex items-center gap-10 text-[13px] font-bold uppercase tracking-[0.15em]">
            <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-[#0037f3] transition-colors">{t.solutions}</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-[#0037f3] transition-colors">{t.strategy}</a>
            <a href="#journal" onClick={(e) => handleLinkClick(e, 'journal')} className="hover:text-[#0037f3] transition-colors">{t.insights}</a>
          </div>

          <div className="flex items-center gap-4 md:gap-6 z-50 relative">
            <div className="relative">
                <button 
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className={`text-[11px] font-black tracking-widest px-3 py-1.5 rounded-lg border transition-all ${
                    (scrolled || mobileMenuOpen) ? 'border-gray-200 text-gray-500 hover:border-[#0037f3]' : 'border-white/20 text-white/70 hover:border-white'
                  }`}
                >
                  {language.toUpperCase()}
                </button>
                {langMenuOpen && (
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-2xl border border-gray-100 p-2 min-w-[80px] animate-fade-in-up">
                    {languages.map(lang => (
                      <button
                        key={lang.id}
                        onClick={() => {
                          onLanguageChange(lang.id as Language);
                          setLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 rounded-lg text-[10px] font-black tracking-widest transition-colors ${
                          language === lang.id ? 'bg-[#0037f3] text-white' : 'text-gray-500 hover:bg-gray-50'
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
            </div>

            <button 
              onClick={onOpenInquiry}
              className={`text-[12px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full border-2 transition-all duration-300 hidden sm:flex items-center gap-2 ${
                (scrolled || mobileMenuOpen) 
                  ? 'border-[#0037f3] text-[#0037f3] hover:bg-[#0037f3] hover:text-white' 
                  : 'border-white/30 text-white hover:border-white hover:bg-white/10'
              }`}
            >
              {t.brief} 
              <span className={`flex items-center justify-center w-5 h-5 rounded-full text-[10px] ${
                (scrolled || mobileMenuOpen) ? 'bg-[#0037f3] text-white' : 'bg-white text-[#0037f3]'
              }`}>
                {inquiryCount}
              </span>
            </button>
            
            <button 
              className="lg:hidden focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
               <div className="w-6 flex flex-col gap-1.5">
                  <span className={`h-0.5 w-full bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                  <span className={`h-0.5 w-full bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`h-0.5 w-full bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
               </div>
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-[#0a0b0d] z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      }`}>
          <div className="flex flex-col items-center space-y-10 text-3xl font-heading font-bold text-white tracking-tight">
            <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-[#0037f3] transition-colors">{t.solutions}</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-[#0037f3] transition-colors">{t.strategy}</a>
            <a href="#journal" onClick={(e) => handleLinkClick(e, 'journal')} className="hover:text-[#0037f3] transition-colors">{t.insights}</a>
            <button 
                onClick={onOpenInquiry} 
                className="text-lg uppercase tracking-[0.2em] font-sans px-8 py-4 bg-[#0037f3] rounded-none hover:bg-white hover:text-[#0037f3] transition-all"
            >
                {t.brief} ({inquiryCount})
            </button>
          </div>
      </div>
    </>
  );
};

export default Navbar;