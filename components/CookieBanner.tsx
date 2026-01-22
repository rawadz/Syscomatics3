
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

  const setCookie = (name: string, value: string, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "; expires=" + date.toUTCString();
    document.cookie = `${name}=${value || ""}${expires}; path=/; SameSite=Lax`;
  };

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
    const consent = getCookie('sys_cookie_consent_standard');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAction = (choice: 'accept' | 'reject') => {
    setCookie('sys_cookie_consent_standard', choice, 30);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const t = TRANSLATIONS[language]?.cookie || TRANSLATIONS.en.cookie;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-8 pointer-events-none">
      <div className={`max-w-screen-2xl mx-auto flex ${language === 'ar' ? 'justify-start' : 'justify-end'}`}>
        <div className="pointer-events-auto bg-white border border-gray-100 p-6 md:p-10 rounded-[2rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] flex flex-col md:flex-row items-center gap-8 md:gap-16 animate-fade-in-up max-w-5xl text-start">
          
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#0037f3] rounded-full"></div>
                <h4 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-[#0037f3]">
                    {t.title}
                </h4>
            </div>
            <p className="text-gray-500 text-xs md:text-[15px] font-medium leading-relaxed">
                {t.desc}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
              <button 
                  onClick={() => handleAction('reject')}
                  className="w-full sm:w-auto px-8 py-3.5 text-gray-400 text-[10px] font-black uppercase tracking-widest hover:text-[#0a0b0d] hover:bg-gray-50 transition-all rounded-xl border border-transparent hover:border-gray-100"
              >
                  {t.reject}
              </button>
              <button 
                  onClick={() => handleAction('accept')}
                  className="w-full sm:w-auto px-12 py-4 bg-[#0a0b0d] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-[#0037f3] transition-all duration-500 shadow-xl shadow-black/10"
              >
                  {t.accept}
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
