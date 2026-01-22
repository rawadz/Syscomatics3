
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage, Language } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

interface AssistantProps {
  language: Language;
}

const Assistant: React.FC<AssistantProps> = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const greetings: Record<Language, string> = {
        en: 'Strategic analysis initiated. I am the Syscomatics Solution Architect. How can I help you transform your infrastructure?',
        ar: 'بدأ التحليل الاستراتيجي. أنا مهندس الحلول في سيسكوماتيكس. كيف يمكنني مساعدتك في تطوير بنيتك التحتية؟',
        ku: 'Analîza stratejîk dest pê kir. Ez mîmarê çareseriyê yê Syscomatics im. Ez çawa dikarim alîkar bim?'
    };
    setMessages([{ role: 'model', text: greetings[language], timestamp: Date.now() }]);
  }, [language]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsThinking(true);

    try {
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      const responseText = await sendMessageToGemini(history, userMsg.text, language);
      const aiMsg: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error("Chat error:", error);
    } finally {
      setIsThinking(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const SparkleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-full h-full">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  );

  return (
    <div className={`fixed bottom-6 ${language === 'ar' ? 'left-6' : 'right-6'} z-50 flex flex-col items-end`}>
      {isOpen && (
        <div className="bg-white rounded-3xl shadow-2xl w-[90vw] sm:w-[400px] h-[600px] mb-6 flex flex-col overflow-hidden border border-gray-100 animate-slide-up-fade text-start">
          <div className="bg-[#0037f3] p-6 flex justify-between items-center text-white">
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center p-2 shadow-sm text-white">
                   <SparkleIcon />
                </div>
                <div>
                    <h3 className="font-heading font-extrabold text-sm tracking-wide">
                        {language === 'ar' ? 'مهندس الحلول' : 'Solution Architect'}
                    </h3>
                    <div className="flex items-center gap-1.5 opacity-70">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-[10px] uppercase font-bold tracking-widest">
                            {language === 'ar' ? 'ذكاء متصل' : 'Grounded Intelligence'}
                        </span>
                    </div>
                </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/50" ref={scrollRef}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 text-sm font-medium leading-relaxed shadow-sm ${
                    msg.role === 'user' ? 'bg-[#0037f3] text-white rounded-2xl' : 'bg-white border border-gray-100 text-[#0a0b0d] rounded-2xl'
                  }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isThinking && (
               <div className="flex justify-start">
                 <div className="bg-white border border-gray-100 p-4 rounded-2xl flex gap-1 items-center shadow-sm">
                   <div className="w-1.5 h-1.5 bg-[#0037f3] rounded-full animate-bounce"></div>
                   <div className="w-1.5 h-1.5 bg-[#0037f3] rounded-full animate-bounce delay-75"></div>
                   <div className="w-1.5 h-1.5 bg-[#0037f3] rounded-full animate-bounce delay-150"></div>
                 </div>
               </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex gap-2 bg-gray-100 p-2 rounded-2xl">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder={language === 'ar' ? 'اسأل مهندس المعمارية...' : "Query architectural engine..."} 
                className="flex-1 bg-transparent px-3 py-2 text-sm outline-none font-medium placeholder-gray-400"
              />
              <button 
                onClick={handleSend}
                disabled={!inputValue.trim() || isThinking}
                className="bg-[#0037f3] text-white w-10 h-10 flex items-center justify-center rounded-xl hover:scale-105 transition-all disabled:opacity-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#0037f3] text-white w-16 h-16 flex items-center justify-center rounded-2xl shadow-2xl shadow-[#0037f3]/40 hover:scale-110 transition-all duration-300 z-50 overflow-hidden"
      >
        {isOpen ? <span className="text-2xl font-bold">×</span> : <div className="w-8 h-8"><SparkleIcon /></div>}
      </button>
    </div>
  );
};

export default Assistant;