
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

  // URL verified for deployment compatibility
  const SUBMISSION_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyfqG8zbjwwgY3uuvDRyGB_HwhFkXIRtqElDvWmpQNGhgWi-amhKjgBT2o8hntml-lh/exec'; 

  const t = (TRANSLATIONS[language]?.inquiry) || TRANSLATIONS.en.inquiry;

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
        console.log('DEV_MODE: No endpoint configured. Payload:', payload);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitted(true);
        onSuccess();
      } else {
        // We use fetch with 'no-cors' for Google Apps Script
        await fetch(SUBMISSION_ENDPOINT, {
          method: 'POST',
          mode: 'no-cors',
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        });
        
        // Artificial delay for UX
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSubmitted(true);
        onSuccess();
      }
    } catch (err) {
      console.error('Submission technical error:', err);
      setError(language === 'ar' ? 'حدث خطأ في الاتصال بالمخدم.' : 'Connection to Damascus Hub failed. Please try again.');
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
      <div className="min-h-screen flex items-center justify-center bg-[#F5F2EB] p-6 text-center">
        <div className="max-w-md animate-fade-in-up">
          <div className="w-24 h-24 bg-[#0037f3] rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-[#0037f3]/40 rotate-3">
             <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
             </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-[#2C2A26] mb-6 tracking-tighter">{t.success}</h1>
          <p className="text-[#5D5A53] mb-12 text-lg leading-relaxed">{t.successSub}</p>
          <button onClick={onBack} className="px-12 py-5 bg-[#2C2A26] text-white text-xs font-black uppercase tracking-[0.2em] hover:bg-[#0037f3] transition-all rounded-2xl shadow-xl">
              {language === 'ar' ? 'العودة للرئيسية' : (language === 'ku' ? 'Vegere Malê' : 'Return Home')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-24 px-6 bg-[#F5F2EB] animate-fade-in-up text-start">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#A8A29E] hover:text-[#2C2A26] transition-colors mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-4 h-4 transition-transform ${language === 'ar' ? 'rotate-180' : 'group-hover:-translate-x-1'}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          {t.back}
        </button>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-7">
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-[#2C2A26] mb-6 tracking-tighter leading-[0.85]">{t.title}</h1>
            <p className="text-lg text-[#5D5A53] mb-16 leading-relaxed max-w-xl">{language === 'ar' ? 'أرسل متطلبات مشروعك لتقييم فني وهندسي شامل من فريقنا في دمشق.' : (language === 'ku' ? 'Daxwazên projeya xwe ji bo nirxandina teknîkî û endezyariyê ji tîmê me re bişînin.' : 'Submit your project requirements for a comprehensive technical and engineering assessment from our team.')}</p>
            
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#A8A29E] ml-1">{t.name}</label>
                    <input required name="name" type="text" value={formData.name} onChange={handleInputChange} className="w-full bg-white border border-[#D6D1C7] px-6 py-4 text-[#2C2A26] rounded-2xl outline-none focus:border-[#0037f3] transition-colors" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#A8A29E] ml-1">{t.email}</label>
                    <input required name="email" type="email" value={formData.email} onChange={handleInputChange} className="w-full bg-white border border-[#D6D1C7] px-6 py-4 text-[#2C2A26] rounded-2xl outline-none focus:border-[#0037f3] transition-colors" />
                 </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#A8A29E] ml-1">{t.org}</label>
                <input name="company" type="text" value={formData.company} onChange={handleInputChange} className="w-full bg-white border border-[#D6D1C7] px-6 py-4 text-[#2C2A26] rounded-2xl outline-none focus:border-[#0037f3] transition-colors" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#A8A29E] ml-1">{language === 'ar' ? 'سياق المشروع' : 'Project Scope'}</label>
                <textarea 
                  required
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  placeholder={t.context} 
                  rows={5}
                  className="w-full bg-white border border-[#D6D1C7] px-6 py-4 text-[#2C2A26] rounded-2xl outline-none focus:border-[#0037f3] resize-none transition-colors"
                />
              </div>

              {error && <div className="p-4 bg-red-50 text-red-500 text-xs font-bold rounded-2xl border border-red-100">{error}</div>}

              <div className="pt-6">
                <button 
                    type="submit"
                    disabled={isSubmitting || items.length === 0}
                    className="w-full py-6 bg-[#0037f3] text-white uppercase tracking-[0.3em] text-xs font-black hover:bg-[#0a0b0d] transition-all rounded-2xl shadow-2xl shadow-[#0037f3]/30 disabled:opacity-50 group flex items-center justify-center gap-4"
                >
                    {isSubmitting ? (language === 'ar' ? 'جاري المعالجة...' : 'Processing...') : (
                      <>
                        {t.submit}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${language === 'ar' ? 'rotate-180' : ''}`}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </>
                    )}
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-white/50 backdrop-blur-xl rounded-[3rem] p-10 border border-white flex-1 flex flex-col shadow-xl">
                <h2 className="text-2xl font-heading font-extrabold text-[#2C2A26] mb-8 tracking-tight">{t.scopes}</h2>
                <div className="space-y-6 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                   {items.map((item, idx) => (
                     <div key={idx} className="flex gap-5 p-5 bg-white rounded-3xl border border-gray-50 hover:border-[#0037f3]/20 hover:shadow-lg transition-all group">
                        <div className="w-16 h-16 bg-gray-100 rounded-2xl overflow-hidden shrink-0">
                           <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <div className="flex flex-col justify-center">
                           <h3 className="font-heading font-bold text-[#2C2A26] text-sm leading-tight group-hover:text-[#0037f3] transition-colors">{item.name}</h3>
                           <p className="text-[9px] text-[#A8A29E] font-black uppercase tracking-widest mt-1">{item.category}</p>
                        </div>
                     </div>
                   ))}
                   {items.length === 0 && <p className="text-[#A8A29E] italic text-sm text-center py-10">{t.empty}</p>}
                </div>
                
                <div className="mt-10 p-8 bg-[#0a0b0d] rounded-3xl text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#0037f3]/20 rounded-full translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-700"></div>
                    <div className="relative z-10">
                        <div className="text-[9px] font-black uppercase tracking-[0.3em] text-[#0037f3] mb-4">Sovereign Protocol</div>
                        <p className="text-[11px] text-white/50 leading-relaxed font-medium">Your architectural brief is transmitted via SSL encryption to our central systems lab. Expect a technical review within one business day.</p>
                    </div>
                </div>
            </div>
          </div>
        </form>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #D6D1C7; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default Checkout;
