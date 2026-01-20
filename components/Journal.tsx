
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { JOURNAL_ARTICLES, TRANSLATIONS } from '../constants';
import { JournalArticle, Language } from '../types';

interface JournalProps {
  onArticleClick: (article: JournalArticle) => void;
  language: Language;
}

const Journal: React.FC<JournalProps> = ({ onArticleClick, language }) => {
  // Safe translation access with fallback
  const t = (TRANSLATIONS[language]?.journal) || TRANSLATIONS.en.journal;
  const articles = JOURNAL_ARTICLES[language] || JOURNAL_ARTICLES.en;
  
  if (articles.length === 0) return null;

  const featured = articles[0];
  const others = articles.slice(1);

  return (
    <section id="journal" className="bg-white py-20 md:py-48 px-6 md:px-12 text-start">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 md:gap-12 mb-16 md:mb-24">
            <div className="max-w-2xl">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <span className="w-10 md:w-12 h-px bg-[#0037f3]"></span>
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-gray-300">{t.sub}</span>
                </div>
                <h2 className="text-3xl md:text-7xl font-heading font-extrabold text-[#0a0b0d] tracking-tighter leading-[1] md:leading-[0.9]">
                    {t.header}
                </h2>
            </div>
            <div className="text-gray-400 font-mono text-[9px] md:text-[10px] uppercase tracking-widest hidden lg:block">
                // ARCHIVE_READY // V.2025
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24">
          <div className="lg:col-span-7">
            <div className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-[#0037f3] mb-6 md:mb-8">{t.featured}</div>
            <div className="group cursor-pointer" onClick={() => onArticleClick(featured)}>
              <div className="relative aspect-[16/9] bg-gray-100 overflow-hidden mb-8 md:mb-12 rounded-[2rem] md:rounded-[2.5rem]">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" />
                <div className="absolute top-6 left-6 md:top-8 md:left-8">
                    <div className="px-3 py-1.5 md:px-4 md:py-2 bg-[#0a0b0d]/80 backdrop-blur-md text-white text-[8px] md:text-[9px] font-black uppercase tracking-widest rounded-lg">
                       6 {t.readTime}
                    </div>
                </div>
              </div>
              <div className="max-w-2xl">
                <div className="text-[9px] md:text-[10px] font-black text-gray-300 uppercase tracking-widest mb-3 md:mb-4">{featured.date}</div>
                <h3 className="text-2xl md:text-5xl font-heading font-extrabold text-[#0a0b0d] group-hover:text-[#0037f3] transition-colors tracking-tighter mb-4 md:mb-6">
                  {featured.title}
                </h3>
                <p className="text-gray-500 text-base md:text-lg font-medium leading-relaxed line-clamp-3">
                  {featured.excerpt}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-[#0037f3] mb-8 md:mb-12">{t.tactical}</div>
            <div className="space-y-12 md:space-y-16">
              {others.map((article) => (
                <div key={article.id} className="group cursor-pointer flex gap-6 md:gap-8 items-start pb-10 md:pb-12 border-b border-gray-100 last:border-0" onClick={() => onArticleClick(article)}>
                  <div className="flex-1">
                    <div className="text-[8px] md:text-[9px] font-black text-gray-300 uppercase tracking-widest mb-2 md:mb-3">{article.date}</div>
                    <h4 className="text-lg md:text-2xl font-heading font-extrabold text-[#0a0b0d] group-hover:text-[#0037f3] transition-colors leading-tight mb-2 md:mb-4">
                      {article.title}
                    </h4>
                    <p className="text-gray-500 text-xs md:text-sm font-medium line-clamp-2">{article.excerpt}</p>
                  </div>
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-50 flex-shrink-0 overflow-hidden rounded-xl md:rounded-2xl">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 md:mt-12 p-8 md:p-10 bg-[#0a0b0d] rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden group">
                <div className="relative z-10">
                    <h4 className="text-white text-lg md:text-xl font-heading font-extrabold mb-3 md:mb-4">Request Archival Report</h4>
                    <p className="text-white/40 text-xs md:text-sm font-medium mb-6 md:mb-8">Download our complete 2024 Strategic Infrastructure Review.</p>
                    <button className="w-full py-4 border border-white/20 text-white text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] rounded-xl hover:bg-white hover:text-[#0a0b0d] transition-all">
                        Request PDF Access
                    </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journal;
