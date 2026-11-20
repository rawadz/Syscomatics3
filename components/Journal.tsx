/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TRANSLATIONS } from '../translations';
import { JOURNAL_ARTICLES } from '../journalArticles';
import { JournalArticle, Language } from '../types';
import SafeImage from './SafeImage';

interface JournalProps {
  onArticleClick: (article: JournalArticle) => void;
  onExploreAll: () => void;
  language: Language;
}

const Journal: React.FC<JournalProps> = ({ onArticleClick, onExploreAll, language }) => {
  const t = TRANSLATIONS[language]?.journal || TRANSLATIONS.en.journal;
  const allArticles = JOURNAL_ARTICLES[language] || JOURNAL_ARTICLES.en;
  const isRtl = language === 'ar';

  if (allArticles.length === 0) return null;

  const displayed = allArticles.slice(0, 3);
  const featured = displayed[0];
  const others = displayed.slice(1);

  return (
    <section id="journal" className="bg-[#F7F8FA] py-20 md:py-28 px-6 md:px-12 text-start border-t border-slate-200/80">
      <div className="max-w-[1440px] mx-auto">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#0037F3] mb-3">{t.kicker}</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#0A0B0D] tracking-tight leading-[1.1] mb-4">
              {t.header}
            </h2>
            <p className="text-base md:text-lg text-[#525866] leading-relaxed">
              {t.sub}
            </p>
          </div>

          <button
            type="button"
            onClick={onExploreAll}
            className="inline-flex items-center gap-2.5 px-5 py-3 bg-white border border-slate-200 hover:border-[#0037F3] text-sm font-medium text-[#0A0B0D] hover:text-[#0037F3] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            <span>{t.exploreAll}</span>
            <span className="font-mono tabular-nums text-xs text-slate-400">
              ({allArticles.length})
            </span>
          </button>
        </div>

        {/* Asymmetric 12-Column Case Study Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Featured Case Study */}
          <article
            onClick={() => onArticleClick(featured)}
            className="lg:col-span-7 group bg-white border border-slate-200/90 hover:border-slate-300 rounded-xl overflow-hidden cursor-pointer transition-colors duration-200 flex flex-col"
          >
            <div className="aspect-[16/9] bg-[#0F131C] overflow-hidden relative">
              <SafeImage
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>

            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#525866] mb-3">
                  <span className="font-medium text-[#0037F3]">{t.featured}</span>
                  {featured.sector && (
                    <>
                      <span aria-hidden="true" className="text-slate-300">·</span>
                      <span>{featured.sector}</span>
                    </>
                  )}
                  {featured.location && (
                    <>
                      <span aria-hidden="true" className="text-slate-300">·</span>
                      <span>{featured.location}</span>
                    </>
                  )}
                </div>

                <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#0A0B0D] group-hover:text-[#0037F3] transition-colors tracking-tight leading-snug mb-3">
                  {featured.title}
                </h3>

                <p className="text-sm md:text-base text-[#525866] leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
              </div>

              <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                {featured.outcome && (
                  <p className="text-xs md:text-sm font-medium text-[#0A0B0D]">
                    {featured.outcome}
                  </p>
                )}
                <span className="inline-flex items-center gap-2 text-sm font-medium text-[#0037F3] whitespace-nowrap shrink-0">
                  <span>{t.readCase}</span>
                  <svg
                    className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </div>
          </article>

          {/* Secondary Case Studies Stack */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {others.map((article) => (
              <article
                key={article.id}
                onClick={() => onArticleClick(article)}
                className="group flex-1 bg-white border border-slate-200/90 hover:border-slate-300 rounded-xl p-6 cursor-pointer transition-colors duration-200 flex flex-col justify-between gap-5"
              >
                <div className="flex gap-5 items-start">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#525866] mb-2">
                      {article.sector && (
                        <span className="font-medium text-[#0A0B0D]">{article.sector}</span>
                      )}
                      {article.location && (
                        <>
                          <span aria-hidden="true" className="text-slate-300">·</span>
                          <span>{article.location}</span>
                        </>
                      )}
                    </div>

                    <h3 className="text-lg md:text-xl font-heading font-bold text-[#0A0B0D] group-hover:text-[#0037F3] transition-colors leading-snug mb-2">
                      {article.title}
                    </h3>

                    <p className="text-sm text-[#525866] leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="w-24 h-24 rounded-lg overflow-hidden bg-[#0F131C] shrink-0 border border-slate-100">
                    <SafeImage
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <span className="text-xs text-[#525866] truncate">
                    {article.outcome || article.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0037F3] whitespace-nowrap shrink-0">
                    <span>{t.readCase}</span>
                    <svg
                      className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journal;
