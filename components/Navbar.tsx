
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { BRAND_NAME, PRIMARY_COLOR } from '../constants';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  inquiryCount: number;
  onOpenInquiry: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick, inquiryCount, onOpenInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navThemeClass = (scrolled || mobileMenuOpen) 
    ? 'bg-white/95 text-[#0a0b0d] shadow-lg py-3' 
    : 'bg-transparent text-white py-6';

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
            <div className="flex items-baseline font-heading text-2xl md:text-3xl font-extrabold tracking-tighter">
                <span className="relative">
                    Sy<span className="text-[#0037f3]">/</span>scomatics
                </span>
            </div>
          </a>
          
          <div className="hidden lg:flex items-center gap-10 text-[13px] font-bold uppercase tracking-[0.15em]">
            <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-[#0037f3] transition-colors">Solutions</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-[#0037f3] transition-colors">Strategy</a>
            <a href="#journal" onClick={(e) => handleLinkClick(e, 'journal')} className="hover:text-[#0037f3] transition-colors">Insights</a>
          </div>

          <div className="flex items-center gap-6 z-50 relative">
            <button 
              onClick={onOpenInquiry}
              className={`text-[12px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full border-2 transition-all duration-300 hidden sm:flex items-center gap-2 ${
                (scrolled || mobileMenuOpen) 
                  ? 'border-[#0037f3] text-[#0037f3] hover:bg-[#0037f3] hover:text-white' 
                  : 'border-white/30 text-white hover:border-white hover:bg-white/10'
              }`}
            >
              Project Brief 
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
            <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-[#0037f3] transition-colors">Solutions</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-[#0037f3] transition-colors">Strategy</a>
            <a href="#journal" onClick={(e) => handleLinkClick(e, 'journal')} className="hover:text-[#0037f3] transition-colors">Insights</a>
            <button 
                onClick={onOpenInquiry} 
                className="text-lg uppercase tracking-[0.2em] font-sans px-8 py-4 bg-[#0037f3] rounded-none hover:bg-white hover:text-[#0037f3] transition-all"
            >
                Inquiry Brief ({inquiryCount})
            </button>
          </div>
      </div>
    </>
  );
};

export default Navbar;
