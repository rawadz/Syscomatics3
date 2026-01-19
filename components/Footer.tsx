
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick, language }) => {
  // Safe translation access with fallback
  const t = (TRANSLATIONS[language]?.footer) || TRANSLATIONS.en.footer;

  const LOGO_WHITE = "https://images.unsplash.com/vector-1768853907602-d0fb4587ae8d?q=80&w=400&auto=format&fit=crop";

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/Syscomatics/',
      isPrimary: true,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/syscomatics',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/syscomatics',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.012-3.584.07-4.849c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.28-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0b0d] text-white pt-10 pb-8 relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Logo Section - High-end vector */}
          <div className="lg:col-span-3 flex items-start">
             <div className="h-8 md:h-10">
                <img 
                  src={LOGO_WHITE} 
                  alt="Syscomatics White Logo" 
                  className="h-full w-auto object-contain opacity-90"
                />
             </div>
          </div>

          {/* Contact Details - Compact Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-4">
                <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-[#0037f3]">{t.contact}</h4>
                <ul className="space-y-2">
                    <li className="flex flex-col">
                        <span className="text-[8px] font-black uppercase tracking-widest text-white/20">Operational Hub</span>
                        <span className="text-base font-heading font-extrabold text-white/90">{t.address}</span>
                    </li>
                    <li className="flex flex-col pt-2">
                        <span className="text-[8px] font-black uppercase tracking-widest text-white/20">Voice Link</span>
                        <a href={`tel:${t.phone.replace(/\s/g, '')}`} className="text-base font-heading font-extrabold text-white/90 hover:text-[#0037f3] transition-colors">{t.phone}</a>
                    </li>
                </ul>
            </div>
            <div className="space-y-4">
                <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-[#0037f3] opacity-0 sm:block hidden">.</h4>
                <ul className="space-y-2">
                    <li className="flex flex-col">
                        <span className="text-[8px] font-black uppercase tracking-widest text-white/20">Correspondence</span>
                        <a href={`mailto:${t.email}`} className="text-base font-heading font-extrabold text-white/90 hover:text-[#0037f3] transition-colors">{t.email}</a>
                    </li>
                    <li className="pt-4">
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social) => (
                                <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all duration-300 ${
                                    social.isPrimary 
                                    ? 'bg-[#0037f3] border-[#0037f3] text-white hover:bg-white hover:text-[#0a0b0d]' 
                                    : 'bg-white/5 border-white/5 text-white/30 hover:text-white hover:bg-[#0037f3]'
                                }`}
                                aria-label={social.name}
                                >
                                {social.icon}
                                </a>
                            ))}
                        </div>
                    </li>
                </ul>
            </div>
          </div>

          {/* Navigation - Compact */}
          <div className="lg:col-span-3 lg:text-right">
              <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-[#0037f3] mb-4">{t.nav}</h4>
              <ul className="space-y-2">
                <li><a href="#services" onClick={(e) => onLinkClick(e, 'services')} className="text-xs font-bold text-white/40 hover:text-white transition-all">Engineering Solutions</a></li>
                <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="text-xs font-bold text-white/40 hover:text-white transition-all">Strategy Roadmap</a></li>
                <li><a href="#journal" onClick={(e) => onLinkClick(e, 'journal')} className="text-xs font-bold text-white/40 hover:text-white transition-all">Transformation Stories</a></li>
              </ul>
          </div>
        </div>

        {/* Footer Bottom Bar - High Compression */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-start">
          <div className="flex flex-wrap justify-center sm:justify-start gap-x-8 gap-y-2">
            <p className="text-[8px] font-black uppercase tracking-[0.4em] text-white/10">&copy; {currentYear} Syscomatics Global Systems.</p>
            <p className="text-[8px] font-black uppercase tracking-[0.4em] text-white/10">Founded by Rawad Zaitoun</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-1 h-1 rounded-full bg-[#0037f3]/20"></div>
            <span className="text-[8px] font-black uppercase tracking-[0.5em] text-white/5">Damascus Hub | V.2.5.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
