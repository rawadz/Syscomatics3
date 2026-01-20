
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { JOURNAL_ARTICLES, TRANSLATIONS } from '../constants';
import { JournalArticle, Language } from '../types';

interface JournalProps {
  onArticleClick: (article: JournalArticle) => void;
  onExploreAll: () => void;
  language: Language;
}

const Journal: React.FC<JournalProps> = ({ onArticleClick, onExploreAll, language }) => {
  // Safe translation access with fallback
  const t = (TRANSLATIONS[language]?.journal) || TRANSLATIONS.en.journal;
  const allArticles = JOURNAL_ARTICLES[language] || JOURNAL_ARTICLES.en;
  
  if (allArticles.length === 0) return null;

  // Show only top 3 on home page
  const displayed = allArticles.slice(0, 3);
  const featured = displayed[0];
  const others = displayed.slice(1);

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
                // CORE_ARCHIVE // V.2025
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24">
          <div className="lg:col-span-7">
            <div className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-[#0037f3] mb-6 md:mb-8">{t.featured}</div>
            <div className="group cursor-pointer" onClick={() => onArticleClick(featured)}>
              <div className="relative aspect-[16/9] bg-gray-100 overflow-hidden mb-8 md:mb-12 rounded-[2rem] md:rounded-[3rem] shadow-2xl">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute top-6 left-6 md:top-8 md:left-8">
                    <div className="px-3 py-1.5 md:px-4 md:py-2 bg-[#0037f3]/90 backdrop-blur-md text-white text-[8px] md:text-[9px] font-black uppercase tracking-widest rounded-lg">
                       TRANSFORMATION_RECORD
                    </div>
                </div>
              </div>
              <div className="max-w-2xl">
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
            <div className="space-y-12 md:space-y-16 mb-12">
              {others.map((article) => (
                <div key={article.id} className="group cursor-pointer flex gap-6 md:gap-8 items-start pb-10 md:pb-12 border-b border-gray-100 last:border-0" onClick={() => onArticleClick(article)}>
                  <div className="flex-1">
                    <h4 className="text-lg md:text-2xl font-heading font-extrabold text-[#0a0b0d] group-hover:text-[#0037f3] transition-colors leading-tight mb-2 md:mb-4">
                      {article.title}
                    </h4>
                    <p className="text-gray-500 text-xs md:text-sm font-medium line-clamp-2">{article.excerpt}</p>
                  </div>
                  <div className="w-20 h-20 md:w-28 md:h-28 bg-gray-50 flex-shrink-0 overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-gray-100">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation to Full Archive */}
            <div className="pt-8">
                <button 
                    onClick={onExploreAll}
                    className="w-full group flex items-center justify-between p-8 bg-gray-50 border border-gray-100 rounded-[2.5rem] hover:bg-[#0a0b0d] hover:text-white transition-all duration-500"
                >
                    <div className="text-start">
                        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0037f3] mb-2">{language === 'ar' ? 'الأرشيف الكامل' : 'Full Archive'}</div>
                        <h4 className="text-xl md:text-2xl font-heading font-extrabold tracking-tight">{t.exploreAll}</h4>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-[#0037f3] text-white flex items-center justify-center group-hover:translate-x-2 transition-transform">
                        <svg className={`w-5 h-5 ${language === 'ar' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </div>
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journal;
