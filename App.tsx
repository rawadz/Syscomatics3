
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceGrid from './components/ServiceGrid';
import About from './components/About';
import Journal from './components/Journal';
import Assistant from './components/Assistant';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
import JournalDetail from './components/JournalDetail';
import ProjectsArchive from './components/ProjectsArchive';
import InquiryDrawer from './components/InquiryDrawer';
import Checkout from './components/Checkout';
import CookieBanner from './components/CookieBanner';
import { Service, ViewState, Language, JournalArticle } from './types';
import { getServices } from './servicesData';
import { JOURNAL_ARTICLES } from './journalArticles';

function App() {
  // PERSISTENCE INIT
  const storedLang = localStorage.getItem('sys_lang') as Language;
  const initialLang: Language = storedLang || 'en';
  
  const [view, setView] = useState<ViewState>({ type: 'home' });
  const [inquiryList, setInquiryList] = useState<Service[]>(() => {
    try {
      const stored = localStorage.getItem('sys_inquiry_list');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [language, setLanguage] = useState<Language>(initialLang);

  // Derive current data based on view ID and current language
  const activeService = useMemo(() => {
    if (view.type === 'service') {
      return getServices(language).find(s => s.id === view.serviceId);
    }
    return null;
  }, [view, language]);

  const activeArticle = useMemo(() => {
    if (view.type === 'journal') {
      const articles = JOURNAL_ARTICLES[language] || JOURNAL_ARTICLES.en;
      return articles.find(a => a.id === view.articleId);
    }
    return null;
  }, [view, language]);

  // Sync Language and Direction
  useEffect(() => {
    const dir = (language === 'ar') ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
    localStorage.setItem('sys_lang', language);
  }, [language]);

  // Sync Inquiry List
  useEffect(() => {
    localStorage.setItem('sys_inquiry_list', JSON.stringify(inquiryList));
  }, [inquiryList]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (view.type !== 'home') {
      setView({ type: 'home' });
      if (targetId) {
        setTimeout(() => scrollToSection(targetId), 50);
      }
    } else {
      if (targetId) {
        scrollToSection(targetId);
      } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      try { window.history.pushState(null, '', `#${targetId}`); } catch (err) {}
    }
  };

  const addToBrief = (service: Service) => {
    if (!inquiryList.find(s => s.id === service.id)) {
      setInquiryList([...inquiryList, service]);
    }
    setIsInquiryOpen(true);
  };

  const removeFromBrief = (index: number) => {
    const newList = [...inquiryList];
    newList.splice(index, 1);
    setInquiryList(newList);
  };

  const clearBrief = () => {
    setInquiryList([]);
    localStorage.removeItem('sys_inquiry_list');
  };

  return (
    <div className={`min-h-screen bg-white font-sans text-[#0a0b0d] selection:bg-[#0037f3] selection:text-white ${language === 'ar' ? 'font-arabic' : ''}`}>
      {view.type !== 'inquiry' && (
        <Navbar 
            onNavClick={handleNavClick} 
            inquiryCount={inquiryList.length}
            onOpenInquiry={() => setIsInquiryOpen(true)}
            language={language}
            onLanguageChange={setLanguage}
        />
      )}
      
      <main>
        {view.type === 'home' && (
          <>
            <Hero language={language} />
            <div id="services">
                <ServiceGrid 
                  onServiceClick={(s) => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      setView({ type: 'service', serviceId: s.id });
                  }} 
                  language={language}
                />
            </div>
            <About language={language} />
            <Journal 
                onArticleClick={(a) => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setView({ type: 'journal', articleId: a.id });
                }} 
                onExploreAll={() => setView({ type: 'projects-archive' })}
                language={language}
            />
          </>
        )}

        {view.type === 'projects-archive' && (
          <ProjectsArchive 
            onArticleClick={(a) => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setView({ type: 'journal', articleId: a.id });
            }}
            onBack={() => setView({ type: 'home' })}
            language={language}
          />
        )}

        {view.type === 'service' && activeService && (
          <ServiceDetail 
            service={activeService} 
            language={language}
            onBack={() => {
              setView({ type: 'home' });
              setTimeout(() => scrollToSection('services'), 50);
            }}
            onAddToBrief={addToBrief}
          />
        )}

        {view.type === 'journal' && activeArticle && (
          <JournalDetail 
            article={activeArticle} 
            language={language}
            onBack={() => setView({ type: 'home' })}
          />
        )}

        {view.type === 'inquiry' && (
            <Checkout 
                items={inquiryList}
                language={language}
                onBack={() => setView({ type: 'home' })}
                onSuccess={clearBrief}
            />
        )}
      </main>

      {view.type !== 'inquiry' && <Footer onLinkClick={handleNavClick} language={language} />}
      
      <Assistant language={language} />
      
      <InquiryDrawer 
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        items={inquiryList}
        language={language}
        onRemoveItem={removeFromBrief}
        onStartConsultation={() => {
            setIsInquiryOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setView({ type: 'inquiry' });
        }}
      />

      <CookieBanner language={language} />
    </div>
  );
}

export default App;
