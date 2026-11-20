/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Service, Language } from '../types';
import { TRANSLATIONS } from '../translations';
import SafeImage from './SafeImage';

interface InquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: Service[];
  onRemoveItem: (index: number) => void;
  onStartConsultation: () => void;
  language: Language;
}

const InquiryDrawer: React.FC<InquiryDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onStartConsultation,
  language,
}) => {
  const t = TRANSLATIONS[language]?.inquiry || TRANSLATIONS.en.inquiry;
  const st = TRANSLATIONS[language]?.services || TRANSLATIONS.en.services;
  const isRtl = language === 'ar';

  return (
    <>
      <div
        className={`fixed inset-0 bg-[#090B10]/55 backdrop-blur-xs z-[60] transition-opacity duration-200 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        aria-label={t.title}
        className={`fixed inset-y-0 ${isRtl ? 'left-0' : 'right-0'} w-full sm:w-[440px] bg-white z-[70] border-s border-slate-200 shadow-2xl transform transition-transform duration-200 ease-out flex flex-col ${
          isOpen ? 'translate-x-0' : isRtl ? '-translate-x-full' : 'translate-x-full'
        }`}
      >
        <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between text-start">
          <div>
            <h2 className="text-lg font-heading font-bold text-[#0A0B0D] tracking-tight">
              {t.title}
            </h2>
            <p className="text-xs text-[#525866] mt-0.5">{t.sub}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-lg border border-slate-200 text-slate-600 hover:text-[#0A0B0D] hover:bg-slate-50 flex items-center justify-center transition-colors"
            aria-label="Close project brief"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 text-start">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center px-6">
              <p className="text-sm text-[#525866] leading-relaxed mb-5">{t.empty}</p>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 text-sm font-medium text-[#0037F3] border border-slate-200 hover:border-[#0037F3] rounded-lg transition-colors"
              >
                {t.browseCta}
              </button>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {items.map((item, idx) => {
                const categoryLabel = st.categoryLabels?.[item.category] || item.category;
                return (
                  <div key={`${item.id}-${idx}`} className="flex gap-4 py-4 first:pt-0">
                    <div className="w-16 h-16 rounded-lg bg-[#0F131C] overflow-hidden shrink-0 border border-slate-200">
                      <SafeImage
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <h3 className="text-sm font-heading font-semibold text-[#0A0B0D] leading-snug">
                          {item.name}
                        </h3>
                        <p className="text-xs text-[#525866] mt-0.5">{categoryLabel}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => onRemoveItem(idx)}
                        className="text-xs font-medium text-slate-500 hover:text-red-600 transition-colors self-start mt-2"
                      >
                        {t.remove}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="p-6 bg-[#F8F9FB] border-t border-slate-200">
          <button
            type="button"
            onClick={onStartConsultation}
            disabled={items.length === 0}
            className="w-full py-3.5 px-5 bg-[#0037F3] hover:bg-[#002BC4] disabled:opacity-40 text-white text-sm font-medium rounded-lg transition-colors duration-150"
          >
            {t.initiate}
          </button>
          <p className="text-xs text-center text-[#525866] mt-3">{t.assessment}</p>
        </div>
      </aside>
    </>
  );
};

export default InquiryDrawer;
