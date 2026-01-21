
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { TRANSLATIONS } from '../translations';
import { Language } from '../types';

interface CookieBannerProps {
  language: Language;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ language }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Helper to set cookie with expiration in minutes
  const setCookie = (name: string, value: string, minutes: number) => {
    const date = new Date();
    date.setTime(date.getTime() + (minutes * 60 * 1000));
    const expires = "; expires=" + date.toUTCString();
    document.cookie = `${name}=${value || ""}${expires}; path=/; SameSite=Lax`;
  };

  // Helper to get cookie value by name
  const getCookie = (name: string) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  useEffect(() => {
    const consent = getCookie('sys_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAction = (choice: 'accept' | 'reject') => {
    // Set cookie to expire in 30 minutes (1800 seconds)
    setCookie('sys_cookie_consent', choice, 30);
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
