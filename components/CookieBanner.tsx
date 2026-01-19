
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface CookieBannerProps {
  language: Language;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ language }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('sys_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAction = (choice: 'accept' | 'reject') => {
    localStorage.setItem('sys_cookie_consent', choice);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const t = TRANSLATIONS[language]?.cookie || TRANSLATIONS.en.cookie;

  return (
    <div className={`fixed bottom-8 ${language === 'ar' ? 'left-8' : 'right-8'} z-[100] max-w-sm w-[calc(100vw-4rem)] animate-fade-in-up`}>
      <div className="bg-[#0a0b0d]/90 backdrop-blur-2xl border border-white/10 p-8 rounded-[2rem] shadow-2xl text-start">
        <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-[#0037f3] rounded-full animate-pulse"></div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0037f3]">
                {t.title}
            </h4>
        </div>
        
        <p className="text-white/60 text-xs font-medium leading-relaxed mb-8">
            {t.desc}
        </p>

        <div className="flex gap-4">
            <button 
                onClick={() => handleAction('accept')}
                className="flex-1 py-3 bg-[#0037f3] text-white text-[9px] font-black uppercase tracking-widest rounded-xl hover:bg-white hover:text-[#0a0b0d] transition-all"
            >
                {t.accept}
            </button>
            <button 
                onClick={() => handleAction('reject')}
                className="px-6 py-3 border border-white/10 text-white/40 text-[9px] font-black uppercase tracking-widest rounded-xl hover:text-white transition-all"
            >
                {t.reject}
            </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
