
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
  const backLabel = TRANSLATIONS[language]?.services?.back || TRANSLATIONS.en.services.back;
  const articles = JOURNAL_ARTICLES[language] || JOURNAL_ARTICLES.en;
  
  // Updated image as per user request
  const HERO_IMAGE = "https://images.unsplash.com/photo-1609889054074-89bff8afb8ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white animate-fade-in-up text-start selection:bg-[#0037f3] selection:text-white">
      
      {/* Cinematic Hero Section - Matches Service Detail Style */}
      <div className="relative w-full h-[65vh] md:h-[85vh] min-h-[550px] overflow-hidden bg-[#0a0b0d]">
        <img 
          src={HERO_IMAGE} 
          alt="Technical Archive Hero" 
          className="w-full h-full object-cover scale-105 animate-[subtle-zoom_30s_infinite_alternate] opacity-70 md:opacity-90 transition-opacity duration-1000"
        />
        {/* Adjusted Gradient: High contrast for white text, transitioning to white content */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-[#0a0b0d]/90 to-[#0a0b0d]/60"></div>
        
        {/* Hero Content Overlay - Added pt-24/pt-32 to account for fixed navbar */}
        <div className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-32 pt-24 md:pt-32 px-6 md:px-12">
            <div className="max-w-[1440px] mx-auto w-full">
                
                <button 
                  onClick={onBack}
                  className="group inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-black uppercase tracking-widest text-white hover:bg-white hover:text-[#0a0b0d] transition-all mb-8 md:mb-12 rounded-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={`w-3.5 h-3.5 transition-transform ${language === 'ar' ? 'rotate-180' : 'group-hover:-translate-x-1'}`}>
                     <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                  {backLabel}
                </button>

                <div className="flex items-center gap-4 mb-6">
                   <div className="w-12 md:w-20 h-1 bg-[#0037f3]"></div>
                   <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-white/80 drop-shadow-md">{t.sub}</span>
                </div>
                
                <h1 className="text-5xl md:text-8xl lg:text-9xl font-heading font-extrabold text-white tracking-tighter leading-[1] md:leading-[0.85] mb-6 drop-shadow-2xl">
                  {t.archiveHeader} <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0037f3] to-[#4e79ff]">{t.archiveAccent}</span>
                </h1>
                
                <p className="text-lg md:text-2xl text-white/70 font-medium max-w-2xl leading-relaxed drop-shadow-md">
                  {t.archiveSub}
                </p>
            </div>
        </div>
      </div>

      {/* Project Grid Section - Matches clean grid aesthetic */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {articles.map((article) => (
            <div 
              key={article.id} 
              className="group cursor-pointer bg-white border border-gray-100 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden hover:border-[#0037f3]/20 transition-all duration-700 flex flex-col transform-gpu hover:-translate-y-2 shadow-sm hover:shadow-4xl"
              onClick={() => onArticleClick(article)}
            >
              <div className="aspect-[4/3] overflow-hidden relative bg-gray-50">
                 <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-8 md:p-12 flex-1 flex flex-col">
                <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-[#0a0b0d] group-hover:text-[#0037f3] transition-colors tracking-tight mb-4 leading-tight">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed line-clamp-3 mb-10 group-hover:text-gray-600 transition-colors">
                  {article.excerpt}
                </p>
                
                <div className="mt-auto pt-8 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-300 group-hover:text-[#0037f3]/50 transition-colors">{t.logLabel}</span>
                    <div className="w-10 h-10 rounded-xl bg-gray-50 text-gray-300 flex items-center justify-center group-hover:bg-[#0037f3] group-hover:text-white transition-all duration-500">
                        <svg className={`w-5 h-5 transition-transform duration-500 group-hover:translate-x-1 ${language === 'ar' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes subtle-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .shadow-4xl {
          box-shadow: 0 40px 100px -20px rgba(0, 55, 243, 0.1);
        }
      `}</style>
    </div>
  );
};

export default ProjectsArchive;
