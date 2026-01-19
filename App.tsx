
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceGrid from './components/ServiceGrid';
import About from './components/About';
import Journal from './components/Journal';
import Assistant from './components/Assistant';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
import JournalDetail from './components/JournalDetail';
import InquiryDrawer from './components/InquiryDrawer';
import Checkout from './components/Checkout';
import CookieBanner from './components/CookieBanner';
import { Service, ViewState, Language } from './types';

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
      setTimeout(() => scrollToSection(targetId), 0);
    } else {
      scrollToSection(targetId);
    }
  };

  const scrollToSection = (targetId: string) => {
    if (!targetId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
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
                      setView({ type: 'service', service: s });
                  }} 
                  language={language}
                />
            </div>
            <About language={language} />
            <Journal 
                onArticleClick={(a) => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setView({ type: 'journal', article: a });
                }} 
                language={language}
            />
          </>
        )}

        {view.type === 'service' && (
          <ServiceDetail 
            service={view.service} 
            language={language}
            onBack={() => {
              setView({ type: 'home' });
              setTimeout(() => scrollToSection('services'), 50);
            }}
            onAddToBrief={addToBrief}
          />
        )}

        {view.type === 'journal' && (
          <JournalDetail 
            article={view.article} 
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
