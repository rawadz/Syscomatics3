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
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = '; expires=' + date.toUTCString();
    document.cookie = `${name}=${value || ''}${expires}; path=/; SameSite=Lax`;
  };

  const getCookie = (name: string) => {
    const nameEQ = name + '=';
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
      const timer = setTimeout(() => setIsVisible(true), 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAction = (choice: 'accept' | 'reject') => {
    setCookie('sys_cookie_consent_standard', choice, 30);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const t = TRANSLATIONS[language]?.cookie || TRANSLATIONS.en.cookie;
  const isRtl = language === 'ar';

  return (
    <div className={`fixed bottom-5 ${isRtl ? 'right-5' : 'left-5'} z-[60] max-w-sm w-[calc(100vw-2.5rem)]`}>
      <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-lg animate-fade-in-up text-start">
        <h4 className="text-sm font-heading font-semibold text-[#0A0B0D] mb-1.5">
          {t.title}
        </h4>
        <p className="text-xs text-[#525866] leading-relaxed mb-4">
          {t.desc}
        </p>
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => handleAction('accept')}
            className="px-4 py-2 bg-[#0A0B0D] hover:bg-[#0037F3] text-white text-xs font-medium rounded-lg transition-colors"
          >
            {t.accept}
          </button>
          <button
            type="button"
            onClick={() => handleAction('reject')}
            className="px-4 py-2 text-xs font-medium text-[#525866] hover:text-[#0A0B0D] border border-slate-200 rounded-lg transition-colors"
          >
            {t.reject}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
