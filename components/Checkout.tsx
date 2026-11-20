
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { Service, Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface CheckoutProps {
  items: Service[];
  onBack: () => void;
  language: Language;
  onSuccess: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ items, onBack, language, onSuccess }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    details: ''
  });

  const SUBMISSION_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyfqG8zbjwwgY3uuvDRyGB_HwhFkXIRtqElDvWmpQNGhgWi-amhKjgBT2o8hntml-lh/exec'; 

  const t = (TRANSLATIONS[language]?.inquiry) || TRANSLATIONS.en.inquiry;
  const st = (TRANSLATIONS[language]?.services) || TRANSLATIONS.en.services;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const payload = {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      details: formData.details,
      services: items.map(i => i.name).join(', '),
      submittedAt: new Date().toLocaleString(),
      lang: language
    };

    try {
      if (!SUBMISSION_ENDPOINT || SUBMISSION_ENDPOINT.includes('YOUR_')) {
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitted(true);
        onSuccess();
      } else {
        await fetch(SUBMISSION_ENDPOINT, {
          method: 'POST',
          mode: 'no-cors',
          cache: 'no-cache',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSubmitted(true);
        onSuccess();
      }
    } catch (err) {
      setError(language === 'ar' ? 'حدث خطأ في الاتصال بالمخدم.' : 'Connection failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fcfbf9] p-6 text-center">
        <div className="max-w-md animate-fade-in-up">
          <div className="w-20 h-20 bg-[#0037f3] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-[#0037f3]/20">
             <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
             </svg>
          </div>
          <h1 className="text-3xl font-heading font-extrabold text-[#0a0b0d] mb-4 tracking-tighter">{t.success}</h1>
          <p className="text-gray-500 mb-10 text-base leading-relaxed">{t.successSub}</p>
          <button onClick={onBack} className="px-10 py-4 bg-[#0a0b0d] text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#0037f3] transition-all rounded-xl">
              {t.returnHome}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 pb-16 px-6 bg-[#fcfbf9] animate-fade-in-up text-start">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-[#0037f3] transition-colors mb-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`w-3.5 h-3.5 transition-transform ${language === 'ar' ? 'rotate-180' : 'group-hover:-translate-x-1'}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          {t.back}
        </button>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <header className="mb-10">
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0037f3] mb-3">Assessment Request</div>
                <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-[#0a0b0d] tracking-tighter leading-none">{t.title}</h1>
            </header>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 ml-1">{t.name}</label>
                    <input required name="name" type="text" value={formData.name} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-100 px-5 py-3.5 text-sm text-[#0a0b0d] rounded-xl outline-none focus:border-[#0037f3] focus:bg-white transition-all" />
                 </div>
                 <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 ml-1">{t.email}</label>
                    <input required name="email" type="email" value={formData.email} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-100 px-5 py-3.5 text-sm text-[#0a0b0d] rounded-xl outline-none focus:border-[#0037f3] focus:bg-white transition-all" />
                 </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 ml-1">{t.org}</label>
                <input name="company" type="text" value={formData.company} onChange={handleInputChange} className="w-full bg-gray-50 border border-gray-100 px-5 py-3.5 text-sm text-[#0a0b0d] rounded-xl outline-none focus:border-[#0037f3] focus:bg-white transition-all" />
              </div>

              <div className="space-y-1.5">
                <label className="text-[9px] font-black uppercase tracking-widest text-gray-400 ml-1">{t.scopeLabel}</label>
                <textarea 
                  required
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  placeholder={t.context} 
                  rows={4}
                  className="w-full bg-gray-50 border border-gray-100 px-5 py-3.5 text-sm text-[#0a0b0d] rounded-xl outline-none focus:border-[#0037f3] focus:bg-white resize-none transition-all"
                />
              </div>

              {error && <div className="p-3 bg-red-50 text-red-500 text-[10px] font-bold rounded-lg border border-red-100">{error}</div>}

              <div className="pt-4">
                <button 
                    type="submit"
                    disabled={isSubmitting || items.length === 0}
                    className="w-full py-5 bg-[#0037f3] text-white uppercase tracking-[0.2em] text-[11px] font-black hover:bg-[#0a0b0d] transition-all rounded-xl shadow-lg shadow-[#0037f3]/20 disabled:opacity-50 flex items-center justify-center gap-3"
                >
                    {isSubmitting ? t.processing : (
                      <>
                        {t.submit}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={`w-3.5 h-3.5 ${language === 'ar' ? 'rotate-180' : ''}`}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </>
                    )}
                </button>
                <p className="text-[9px] text-center text-gray-300 mt-4 font-bold tracking-widest uppercase">{t.assessment}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-sm flex flex-col h-full sticky top-24">
                <h2 className="text-xl font-heading font-extrabold text-[#0a0b0d] mb-6 tracking-tight">{t.scopes}</h2>
                <div className="space-y-4 flex-1 overflow-y-auto max-h-[400px] pr-2 custom-scrollbar">
                   {items.map((item, idx) => {
                     const categoryLabel = st.categoryLabels?.[item.category] || item.category;
                     return (
                       <div key={idx} className="flex gap-4 p-3.5 bg-gray-50/50 rounded-2xl border border-transparent hover:border-[#0037f3]/20 transition-all">
                          <div className="w-12 h-12 bg-gray-100 rounded-xl overflow-hidden shrink-0">
                             <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover grayscale opacity-70" />
                          </div>
                          <div className="flex flex-col justify-center">
                             <h3 className="font-heading font-bold text-[#0a0b0d] text-[12px] leading-tight">{item.name}</h3>
                             <p className="text-[8px] text-[#0037f3] font-black uppercase tracking-widest mt-1">{categoryLabel}</p>
                          </div>
                       </div>
                     );
                   })}
                   {items.length === 0 && <p className="text-gray-400 italic text-xs text-center py-10">{t.empty}</p>}
                </div>
                
                <div className="mt-8 p-6 bg-[#0a0b0d] rounded-2xl text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#0037f3]/20 rounded-full translate-x-12 -translate-y-12"></div>
                    <div className="relative z-10">
                        <div className="text-[8px] font-black uppercase tracking-[0.3em] text-[#0037f3] mb-2">
                            {language === 'ar' ? 'قناة آمنة' : 'Secure Channel'}
                        </div>
                        <p className="text-[10px] text-white/50 leading-relaxed font-medium">
                            {language === 'ar' 
                                ? 'البيانات محمية ببروتوكولات تشفير مركز دمشق. يبدأ التحقق الفني فور الإرسال.' 
                                : 'Data is protected by Damascus Hub encryption protocols. Technical verification starts upon submission.'}
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </form>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #eee; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default Checkout;
