
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect } from 'react';
import { TRANSLATIONS } from '../translations';
import { JOURNAL_ARTICLES } from '../journalArticles';
import { JournalArticle, Language } from '../types';

interface ProjectsArchiveProps {
  onArticleClick: (article: JournalArticle) => void;
  onBack: () => void;
  language: Language;
}

const ProjectsArchive: React.FC<ProjectsArchiveProps> = ({ onArticleClick, onBack, language }) => {
  const t = (TRANSLATIONS[language]?.journal) || TRANSLATIONS.en.journal;
  const articles = JOURNAL_ARTICLES[language] || JOURNAL_ARTICLES.en;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#fcfbf9] pt-24 pb-32 animate-fade-in-up text-start">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <header className="mb-20 md:mb-32 max-w-4xl">
          <button 
            onClick={onBack}
            className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-[#0037f3] transition-colors mb-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={`w-3.5 h-3.5 transition-transform ${language === 'ar' ? 'rotate-180' : 'group-hover:-translate-x-1'}`}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            {TRANSLATIONS[language].services.back}
          </button>
          
          <div className="flex items-center gap-4 mb-6">
             <div className="w-10 md:w-16 h-px bg-[#0037f3]"></div>
             <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-[#0037f3]">{t.sub}</span>
          </div>
          <h1 className="text-4xl md:text-8xl font-heading font-extrabold text-[#0a0b0d] tracking-tighter leading-[1] md:leading-[0.85] mb-8">
            {t.archiveHeader} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0037f3] to-[#4e79ff]">{t.archiveAccent}</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 font-medium max-w-2xl leading-relaxed">
            {t.archiveSub}
          </p>
        </header>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {articles.map((article, idx) => (
            <div 
              key={article.id} 
              className="group cursor-pointer bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden hover:shadow-4xl transition-all duration-700 flex flex-col"
              onClick={() => onArticleClick(article)}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                 <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                 />
                 <div className="absolute top-6 left-6">
                    <div className="px-3 py-1.5 bg-[#0a0b0d]/80 backdrop-blur text-white text-[8px] font-black uppercase tracking-widest rounded-lg">
                        REF_{article.id.toString().padStart(3, '0')}
                    </div>
                 </div>
              </div>
              <div className="p-8 md:p-10 flex-1 flex flex-col">
                <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-[#0a0b0d] group-hover:text-[#0037f3] transition-colors tracking-tight mb-4 leading-tight">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed line-clamp-3 mb-8">
                  {article.excerpt}
                </p>
                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-[9px] font-black uppercase tracking-widest text-gray-300">{t.logLabel}</span>
                    <svg className={`w-5 h-5 text-[#0037f3] opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all ${language === 'ar' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsArchive;
