/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useMemo } from 'react';
import { TRANSLATIONS } from '../translations';
import { JOURNAL_ARTICLES } from '../journalArticles';
import { JournalArticle, Language } from '../types';
import { MEDIA_ASSETS } from '../mediaAssets';
import SafeImage from './SafeImage';

interface ProjectsArchiveProps {
  onArticleClick: (article: JournalArticle) => void;
  onBack: () => void;
  language: Language;
}

const ProjectsArchive: React.FC<ProjectsArchiveProps> = ({
  onArticleClick,
  onBack,
  language,
}) => {
  const t = TRANSLATIONS[language]?.journal || TRANSLATIONS.en.journal;
  const backLabel = TRANSLATIONS[language]?.services?.back || TRANSLATIONS.en.services.back;
  const articles = JOURNAL_ARTICLES[language] || JOURNAL_ARTICLES.en;
  const isRtl = language === 'ar';

  const [selectedSector, setSelectedSector] = useState<string>('ALL');

  const sectors = useMemo(() => {
    const unique = Array.from(
      new Set(articles.map((a) => a.sector).filter((s): s is string => Boolean(s)))
    );
    return unique;
  }, [articles]);

  const filteredArticles = useMemo(() => {
    if (selectedSector === 'ALL') return articles;
    return articles.filter((a) => a.sector === selectedSector);
  }, [articles, selectedSector]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setSelectedSector('ALL');
  }, [language]);

  return (
    <div className="min-h-screen bg-white pt-16 md:pt-[72px] animate-fade-in-up text-start">
      {/* Dark Architectural Header */}
      <section className="relative bg-[#090B10] text-white border-b border-white/10 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-14 md:py-20">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors mb-8"
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
            <span>{backLabel}</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <p className="text-sm font-medium text-[#4F7BFF] mb-3">{t.kicker}</p>
              <h1
                className="font-heading font-bold text-white tracking-tight leading-[1.08] mb-5"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}
              >
                {t.archiveHeader}{' '}
                <span className="text-slate-400">{t.archiveAccent}</span>
              </h1>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl">
                {t.archiveSub}
              </p>
            </div>

            <div className="lg:col-span-5 flex">
              <div className="w-full min-h-[220px] lg:h-full rounded-xl overflow-hidden border border-white/10 bg-[#11141D]">
                <SafeImage
                  src={MEDIA_ASSETS.engineeringStudioHall}
                  alt="Syscomatics Engineering Archive"
                  loading="eager"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filterable Archive Grid */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-14 md:py-20">
        {/* Sector Filter Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-4 mb-10 border-b border-slate-200">
          <button
            type="button"
            onClick={() => setSelectedSector('ALL')}
            className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
              selectedSector === 'ALL'
                ? 'bg-[#0A0B0D] text-white'
                : 'text-[#525866] hover:text-[#0A0B0D] hover:bg-slate-100'
            }`}
          >
            {t.allSectors} ({articles.length})
          </button>

          {sectors.map((sector) => (
            <button
              key={sector}
              type="button"
              onClick={() => setSelectedSector(sector)}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                selectedSector === sector
                  ? 'bg-[#0A0B0D] text-white'
                  : 'text-[#525866] hover:text-[#0A0B0D] hover:bg-slate-100'
              }`}
            >
              {sector}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => onArticleClick(article)}
              className="group cursor-pointer bg-[#F8F9FB] hover:bg-white border border-slate-200/90 hover:border-slate-300 rounded-xl overflow-hidden transition-colors duration-200 flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#0F131C]">
                <SafeImage
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between gap-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#525866] mb-3">
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

                  <h2 className="text-xl font-heading font-bold text-[#0A0B0D] group-hover:text-[#0037F3] transition-colors leading-snug mb-2.5">
                    {article.title}
                  </h2>

                  <p className="text-sm text-[#525866] leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between gap-3">
                  <span className="text-xs font-medium text-[#0A0B0D] truncate">
                    {article.outcome || t.logLabel}
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsArchive;
