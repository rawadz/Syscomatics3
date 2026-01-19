
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { Service, Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface CheckoutProps {
  items: Service[];
  onBack: () => void;
  language: Language;
}

const Checkout: React.FC<CheckoutProps> = ({ items, onBack, language }) => {
  const [submitted, setSubmitted] = useState(false);
  const t = TRANSLATIONS[language].inquiry;

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F2EB] p-6 text-center">
        <div className="max-w-md animate-fade-in-up">
          <h1 className="text-4xl font-heading font-extrabold text-[#2C2A26] mb-6">{t.success}</h1>
          <p className="text-[#5D5A53] mb-12">{t.successSub}</p>
          <button onClick={onBack} className="text-sm font-black uppercase tracking-widest underline underline-offset-8">{language === 'ar' ? 'العودة للرئيسية' : 'Return Home'}</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-24 px-6 bg-[#F5F2EB] animate-fade-in-up text-start">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#A8A29E] hover:text-[#2C2A26] transition-colors mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-4 h-4 transition-transform ${language === 'ar' ? 'rotate-180' : 'group-hover:-translate-x-1'}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          {t.back}
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h1 className="text-4xl font-heading font-extrabold text-[#2C2A26] mb-4">{t.title}</h1>
            <p className="text-sm text-[#5D5A53] mb-12">{language === 'ar' ? 'أرسل متطلباتك لتقييم احترافي.' : (language === 'ku' ? 'Daxwazên xwe ji bo nirxandina pispor bişînin.' : 'Submit your requirements for professional assessment.')}</p>
            
            <div className="space-y-12">
              <div>
                <h2 className="text-xl font-heading font-bold text-[#2C2A26] mb-6">{t.contact}</h2>
                <div className="space-y-4">
                   <input type="text" placeholder={t.name} className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] outline-none focus:border-[#0037f3]" />
                   <input type="email" placeholder={t.email} className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] outline-none focus:border-[#0037f3]" />
                   <input type="text" placeholder={t.org} className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] outline-none focus:border-[#0037f3]" />
                </div>
              </div>

              <div>
                <h2 className="text-xl font-heading font-bold text-[#2C2A26] mb-6">{language === 'ar' ? 'سياق المشروع' : (language === 'ku' ? 'Çarçoveya Projeyê' : 'Project Context')}</h2>
                <textarea 
                  placeholder={t.contextSub} 
                  rows={4}
                  className="w-full bg-transparent border-b border-[#D6D1C7] py-3 text-[#2C2A26] outline-none focus:border-[#0037f3] resize-none"
                />
              </div>

              <div>
                <button 
                    onClick={() => setSubmitted(true)}
                    className="w-full py-5 bg-[#0037f3] text-white uppercase tracking-widest text-sm font-black hover:bg-[#0a0b0d] transition-all"
                >
                    {t.submit}
                </button>
              </div>
            </div>
          </div>

          <div className="lg:ps-12 lg:border-inline-start border-[#D6D1C7]">
            <h2 className="text-xl font-heading font-bold text-[#2C2A26] mb-8">{t.scopes}</h2>
            <div className="space-y-6">
               {items.map((item, idx) => (
                 <div key={idx} className="flex gap-4">
                    <div className="w-16 h-16 bg-gray-200">
                       <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover grayscale" />
                    </div>
                    <div>
                       <h3 className="font-heading font-bold text-[#2C2A26] text-base">{item.name}</h3>
                       <p className="text-xs text-[#A8A29E] uppercase tracking-widest">{item.category}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
