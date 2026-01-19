
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
    // Reset or initialize greeting based on language
    const greetings: Record<Language, string> = {
        en: 'Strategic analysis initiated. I am the Syscomatics Solution Architect. How can I help you transform your digital infrastructure?',
        ar: 'بدأ التحليل الاستراتيجي. أنا مهندس الحلول في سيسكوماتيكس. كيف يمكنني مساعدتك في تحويل بنية تحتية رقمية الخاصة بك؟',
        ku: 'Analîza stratejîk dest pê kir. Ez mîmarê çareseriyê yê Syscomatics im. Ez çawa dikarim ji we re bibim alîkar ku hûn binesaziya xweya dîjîtal veguherînin?'
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

  return (
    <div className={`fixed bottom-6 ${document.documentElement.dir === 'rtl' ? 'left-6' : 'right-6'} z-50 flex flex-col items-end`}>
      {isOpen && (
        <div className="bg-white rounded-3xl shadow-2xl w-[90vw] sm:w-[400px] h-[600px] mb-6 flex flex-col overflow-hidden border border-gray-100 animate-slide-up-fade text-start">
          <div className="bg-[#0037f3] p-6 flex justify-between items-center text-white">
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center font-heading font-black">Sc</div>
                <div>
                    <h3 className="font-heading font-extrabold text-sm tracking-wide">Solution Architect</h3>
                    <div className="flex items-center gap-1.5 opacity-70">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        <span className="text-[10px] uppercase font-bold tracking-widest">Active System</span>
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
                <div 
                  className={`max-w-[85%] p-4 text-sm font-medium leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-[#0037f3] text-white rounded-2xl shadow-lg shadow-[#0037f3]/20' 
                      : 'bg-white border border-gray-100 text-[#0a0b0d] rounded-2xl shadow-sm'
                  }`}
                >
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
                placeholder="Query system..." 
                className="flex-1 bg-transparent px-3 py-2 text-sm outline-none font-medium placeholder-gray-400"
              />
              <button 
                onClick={handleSend}
                disabled={!inputValue.trim() || isThinking}
                className="bg-[#0037f3] text-white w-10 h-10 flex items-center justify-center rounded-xl hover:scale-105 transition-all disabled:opacity-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={`w-4 h-4 ${document.documentElement.dir === 'rtl' ? 'rotate-180' : ''}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#0037f3] text-white w-16 h-16 flex items-center justify-center rounded-2xl shadow-2xl shadow-[#0037f3]/30 hover:scale-110 transition-all duration-500 z-50 group overflow-hidden"
      >
        <div className="relative z-10 font-heading font-black text-lg tracking-tighter">
            {isOpen ? '×' : 'Sc'}
        </div>
      </button>
    </div>
  );
};

export default Assistant;
