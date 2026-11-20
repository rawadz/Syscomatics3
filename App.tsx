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
import ContactSection from './components/ContactSection';
import Assistant from './components/Assistant';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
import JournalDetail from './components/JournalDetail';
import ProjectsArchive from './components/ProjectsArchive';
import InquiryDrawer from './components/InquiryDrawer';
import Checkout from './components/Checkout';
import CookieBanner from './components/CookieBanner';
import { Service, ViewState, Language } from './types';
import { getServices } from './servicesData';
import { JOURNAL_ARTICLES } from './journalArticles';
import { logVisitorPing } from './services/analyticsService';

function App() {
  const storedLang = localStorage.getItem('sys_lang');
  const initialLang: Language = storedLang === 'en' || storedLang === 'ar' ? storedLang : 'en';

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

  // Sync inquiry list items with localized titles & local image assets when language changes
  const localizedInquiryList = useMemo(() => {
    const localized = getServices(language);
    return inquiryList.map((item) => localized.find((s) => s.id === item.id) || item);
  }, [inquiryList, language]);

  const briefServiceIds = useMemo(
    () => localizedInquiryList.map((s) => s.id),
    [localizedInquiryList]
  );

  const activeService = useMemo(() => {
    if (view.type === 'service') {
      return getServices(language).find((s) => s.id === view.serviceId);
    }
    return null;
  }, [view, language]);

  const activeArticle = useMemo(() => {
    if (view.type === 'journal') {
      const articles = JOURNAL_ARTICLES[language] || JOURNAL_ARTICLES.en;
      return articles.find((a) => a.id === view.articleId);
    }
    return null;
  }, [view, language]);

  useEffect(() => {
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
    localStorage.setItem('sys_lang', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('sys_inquiry_list', JSON.stringify(inquiryList));
  }, [inquiryList]);

  useEffect(() => {
    let viewPath: string = view.type;
    if (view.type === 'service') viewPath = `service/${view.serviceId}`;
    if (view.type === 'journal') viewPath = `journal/${view.articleId}`;

    logVisitorPing(viewPath, language);
  }, [view, language]);

  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      try {
        window.history.pushState(null, '', `#${targetId}`);
      } catch {
        // Ignore history pushState restrictions in embedded frames
      }
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (view.type !== 'home') {
      setView({ type: 'home' });
      if (targetId) {
        setTimeout(() => scrollToSection(targetId), 60);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (targetId) {
      scrollToSection(targetId);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const addToBrief = (service: Service) => {
    if (!inquiryList.find((s) => s.id === service.id)) {
      setInquiryList([...inquiryList, service]);
    }
    setIsInquiryOpen(true);
  };

  const toggleBrief = (service: Service) => {
    const exists = inquiryList.some((s) => s.id === service.id);
    if (exists) {
      setInquiryList(inquiryList.filter((s) => s.id !== service.id));
    } else {
      setInquiryList([...inquiryList, service]);
    }
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
    <div
      className={`min-h-screen bg-white font-sans text-[#0A0B0D] selection:bg-[#0037F3] selection:text-white ${
        language === 'ar' ? 'font-arabic' : ''
      }`}
    >
      {view.type !== 'inquiry' && (
        <Navbar
          onNavClick={handleNavClick}
          inquiryCount={localizedInquiryList.length}
          onOpenInquiry={() => setIsInquiryOpen(true)}
          language={language}
          onLanguageChange={setLanguage}
          forceLightSurface={view.type === 'journal'}
        />
      )}

      <main>
        {view.type === 'home' && (
          <>
            <Hero language={language} />
            <ServiceGrid
              onServiceClick={(s) => setView({ type: 'service', serviceId: s.id })}
              onToggleBrief={toggleBrief}
              briefServiceIds={briefServiceIds}
              language={language}
            />
            <About language={language} />
            <Journal
              onArticleClick={(a) =>
                setView({ type: 'journal', articleId: a.id, from: 'home' })
              }
              onExploreAll={() => setView({ type: 'projects-archive' })}
              language={language}
            />
            <ContactSection
              language={language}
              inquiryCount={localizedInquiryList.length}
              onOpenInquiry={() => setIsInquiryOpen(true)}
            />
          </>
        )}

        {view.type === 'projects-archive' && (
          <ProjectsArchive
            onArticleClick={(a) =>
              setView({ type: 'journal', articleId: a.id, from: 'projects-archive' })
            }
            onBack={() => setView({ type: 'home' })}
            language={language}
          />
        )}

        {view.type === 'service' && activeService && (
          <ServiceDetail
            service={activeService}
            isInBrief={briefServiceIds.includes(activeService.id)}
            language={language}
            onBack={() => {
              setView({ type: 'home' });
              setTimeout(() => scrollToSection('services'), 60);
            }}
            onAddToBrief={addToBrief}
          />
        )}

        {view.type === 'journal' && activeArticle && (
          <JournalDetail
            article={activeArticle}
            language={language}
            onBack={() => {
              if (view.type === 'journal' && view.from === 'projects-archive') {
                setView({ type: 'projects-archive' });
              } else {
                setView({ type: 'home' });
              }
            }}
          />
        )}

        {view.type === 'inquiry' && (
          <Checkout
            items={localizedInquiryList}
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
        items={localizedInquiryList}
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
