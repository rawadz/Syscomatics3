
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick, language }) => {
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [email, setEmail] = useState('');
  const t = TRANSLATIONS[language].footer;

  const handleSubscribe = () => {
    if (!email) return;
    setSubscribeStatus('loading');
    setTimeout(() => {
      setSubscribeStatus('success');
      setEmail('');
      setTimeout(() => setSubscribeStatus('idle'), 3000);
    }, 1500);
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.012-3.584.07-4.849c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.28-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#0a0b0d] text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24 text-start">
          
          {/* Brand Identity Section */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-1 mb-10 group cursor-default">
              <span className="font-heading text-4xl font-extrabold tracking-tighter">
                Sy<span className="text-[#0037f3]">/</span>scomatics
              </span>
            </div>
            <p className="text-white/50 text-xl font-medium leading-relaxed max-w-md mb-12">
              {t.sub}
            </p>
            <div className="flex items-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 hover:text-[#0037f3] hover:bg-white/10 hover:scale-110 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#0037f3] mb-8">{t.nav}</h4>
              <ul className="space-y-5">
                <li><a href="#services" onClick={(e) => onLinkClick(e, 'services')} className="text-sm font-bold text-white/60 hover:text-white transition-colors">Solutions</a></li>
                <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="text-sm font-bold text-white/60 hover:text-white transition-colors">Strategy</a></li>
                <li><a href="#journal" onClick={(e) => onLinkClick(e, 'journal')} className="text-sm font-bold text-white/60 hover:text-white transition-colors">Insights</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#0037f3] mb-8">{t.exp}</h4>
              <ul className="space-y-5">
                <li><span className="text-sm font-bold text-white/60">ERP Ops</span></li>
                <li><span className="text-sm font-bold text-white/60">Custom CRM</span></li>
                <li><span className="text-sm font-bold text-white/60">Cyber Resilience</span></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-4 bg-[#111215] p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="text-xl font-heading font-extrabold mb-4 tracking-tight">{t.newsletter}</h4>
              <p className="text-sm text-white/40 font-medium leading-relaxed mb-8">
                {t.newsd}
              </p>
              
              <div className="flex flex-col gap-3">
                <div className="relative group">
                  <input 
                    type="email" 
                    placeholder="corporate@email.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={subscribeStatus === 'loading' || subscribeStatus === 'success'}
                    className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl outline-none text-white font-medium focus:border-[#0037f3]/50 transition-all disabled:opacity-50" 
                  />
                </div>
                
                <button 
                  onClick={handleSubscribe}
                  disabled={subscribeStatus !== 'idle' || !email}
                  className={`w-full py-4 rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-500 flex items-center justify-center gap-3 ${
                    subscribeStatus === 'success' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-[#0037f3] text-white hover:bg-white hover:text-[#0a0b0d]'
                  }`}
                >
                  {subscribeStatus === 'idle' && t.reg}
                  {subscribeStatus === 'loading' && '...'}
                  {subscribeStatus === 'success' && 'OK'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">{t.operational} // v2.4.0</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">&copy; 2025 Syscomatics Global.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
