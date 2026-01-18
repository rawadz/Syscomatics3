
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
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
import InteractiveLabs from './components/InteractiveLabs';
import { Service, ViewState } from './types';

function App() {
  const [view, setView] = useState<ViewState>({ type: 'home' });
  const [inquiryList, setInquiryList] = useState<Service[]>([]);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-white font-sans text-[#0a0b0d] selection:bg-[#0037f3] selection:text-white">
      {view.type !== 'inquiry' && (
        <Navbar 
            onNavClick={handleNavClick} 
            inquiryCount={inquiryList.length}
            onOpenInquiry={() => setIsInquiryOpen(true)}
        />
      )}
      
      <main>
        {view.type === 'home' && (
          <>
            <Hero />
            <InteractiveLabs />
            <ServiceGrid onServiceClick={(s) => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setView({ type: 'service', service: s });
            }} />
            <About />
            <Journal onArticleClick={(a) => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setView({ type: 'journal', article: a });
            }} />
          </>
        )}

        {view.type === 'service' && (
          <ServiceDetail 
            service={view.service} 
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
            onBack={() => setView({ type: 'home' })}
          />
        )}

        {view.type === 'inquiry' && (
            <Checkout 
                items={inquiryList}
                onBack={() => setView({ type: 'home' })}
            />
        )}
      </main>

      {view.type !== 'inquiry' && <Footer onLinkClick={handleNavClick} />}
      
      <Assistant />
      
      <InquiryDrawer 
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        items={inquiryList}
        onRemoveItem={removeFromBrief}
        onStartConsultation={() => {
            setIsInquiryOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setView({ type: 'inquiry' });
        }}
      />
    </div>
  );
}

export default App;
