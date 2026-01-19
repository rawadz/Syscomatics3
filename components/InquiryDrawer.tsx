
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Service, Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface InquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: Service[];
  onRemoveItem: (index: number) => void;
  onStartConsultation: () => void;
  language: Language;
}

const InquiryDrawer: React.FC<InquiryDrawerProps> = ({ isOpen, onClose, items, onRemoveItem, onStartConsultation, language }) => {
  // Safe translation access with fallback
  const t = (TRANSLATIONS[language]?.inquiry) || TRANSLATIONS.en.inquiry;

  return (
    <>
      <div 
        className={`fixed inset-0 bg-[#0a0b0d]/60 backdrop-blur-sm z-[60] transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      <div 
        className={`fixed inset-y-0 ${language === 'ar' ? 'left-0' : 'right-0'} w-full md:w-[480px] bg-white z-[70] shadow-2xl transform transition-transform duration-500 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : (language === 'ar' ? '-translate-x-full' : 'translate-x-full')
        }`}
      >
        <div className="bg-[#0a0b0d] p-8 text-white flex items-center justify-between text-start">
            <div>
                <h2 className="text-2xl font-heading font-extrabold tracking-tight">{t.title}</h2>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mt-1">{t.sub}</p>
            </div>
            <button onClick={onClose} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0037f3] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-8 text-start">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-10">
              <p className="font-medium text-gray-400">{t.empty}</p>
            </div>
          ) : (
            items.map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="flex gap-6 animate-fade-in-up border-b border-gray-100 pb-8 last:border-0">
                <div className="w-20 h-24 bg-gray-100 flex-shrink-0 relative overflow-hidden group">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-[#0a0b0d]">{item.name}</h3>
                    <p className="text-[10px] font-black text-[#0037f3] uppercase tracking-widest mt-1">{item.category}</p>
                  </div>
                  <button 
                    onClick={() => onRemoveItem(idx)}
                    className="text-[10px] font-black text-gray-300 hover:text-red-500 uppercase tracking-widest transition-colors self-start"
                  >
                    {t.remove}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-8 bg-gray-50 border-t border-gray-100">
          <button 
            onClick={onStartConsultation}
            disabled={items.length === 0}
            className="w-full py-5 bg-[#0037f3] text-white uppercase tracking-[0.2em] text-xs font-black hover:bg-[#0a0b0d] transition-all disabled:opacity-30"
          >
            {t.initiate}
          </button>
          <p className="text-[10px] text-center text-gray-400 mt-4 font-bold tracking-widest uppercase">{t.assessment}</p>
        </div>
      </div>
    </>
  );
};

export default InquiryDrawer;
