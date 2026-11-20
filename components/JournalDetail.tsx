/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { JournalArticle, Language } from '../types';
import { TRANSLATIONS } from '../translations';
import SafeImage from './SafeImage';

interface JournalDetailProps {
  article: JournalArticle;
  onBack: () => void;
  language: Language;
}

const JournalDetail: React.FC<JournalDetailProps> = ({ article, onBack, language }) => {
  const t = TRANSLATIONS[language]?.journal || TRANSLATIONS.en.journal;
  const isRtl = language === 'ar';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [article.id]);

  return (
    <article className="min-h-screen bg-white pt-24 md:pt-32 pb-24 px-6 md:px-12 animate-fade-in-up text-start">
      <div className="max-w-4xl mx-auto">
        {/* Back Button & Metadata Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#525866] hover:text-[#0037F3] transition-colors"
          >
            <svg
              className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            <span>{t.back}</span>
          </button>

          <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-[#525866]">
            {article.sector && <span className="font-medium text-[#0A0B0D]">{article.sector}</span>}
            {article.location && (
              <>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>{article.location}</span>
              </>
            )}
            {article.date && (
              <>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="font-mono tabular-nums">{article.date}</span>
              </>
            )}
          </div>
        </div>

        {/* Title & Excerpt */}
        <header className="mb-10">
          <h1
            className="font-heading font-bold text-[#0A0B0D] tracking-tight leading-[1.12] mb-5"
            style={{ fontSize: 'clamp(2rem, 3.6vw, 3.25rem)' }}
          >
            {article.title}
          </h1>
          <p className="text-lg md:text-xl text-[#525866] leading-relaxed max-w-3xl">
            {article.excerpt}
          </p>
        </header>

        {/* Featured Visual */}
        <div className="aspect-[16/9] rounded-xl overflow-hidden border border-slate-200 bg-[#0F131C] mb-10">
          <SafeImage
            src={article.image}
            alt={article.title}
            loading="eager"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Quantified Outcome Callout */}
        {article.outcome && (
          <div className="p-6 md:p-8 rounded-xl bg-[#F8F9FB] border border-slate-200 mb-10">
            <div className="text-xs font-medium text-[#0037F3] mb-2">{t.outcomeLabel}</div>
            <p className="text-base md:text-lg font-heading font-semibold text-[#0A0B0D]">
              {article.outcome}
            </p>
          </div>
        )}

        {/* Body Content */}
        <div className="text-base md:text-lg text-[#374151] leading-[1.8] max-w-3xl space-y-6">
          <p>{article.content}</p>
        </div>
      </div>
    </article>
  );
};

export default JournalDetail;
