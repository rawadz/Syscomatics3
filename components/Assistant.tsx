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
  const isRtl = language === 'ar';

  const quickPrompts =
    language === 'ar'
      ? [
          'ما هو أفضل نظام ERP لشركة تصنيع؟',
          'كيف تعمل السحابة السيادية لديكم؟',
          'كم يستغرق تنفيذ نظام CRM مخصص؟',
        ]
      : [
          'Which ERP fits manufacturing operations?',
          'How does Sovereign Cloud residency work?',
          'Typical timeline for a custom CRM rollout?',
        ];

  useEffect(() => {
    const greetings: Record<Language, string> = {
      en: 'Hello. I am the Syscomatics Solutions Architect. Describe your operational goal or infrastructure challenge, and I will outline the right technical approach.',
      ar: 'أهلاً بك. أنا مهندس الحلول في سيسكوماتيكس. شاركني التحدي التشغيلي أو البنية التي تسعى لتطويرها وسأقترح عليك المسار المعماري الأنسب.',
    };
    setMessages([{ role: 'model', text: greetings[language], timestamp: Date.now() }]);
  }, [language]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isThinking) return;

    const userMsg: ChatMessage = { role: 'user', text: trimmed, timestamp: Date.now() };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsThinking(true);

    try {
      const history = messages.map((m) => ({ role: m.role, text: m.text }));
      const responseText = await sendMessageToGemini(history, trimmed, language);
      const aiMsg: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      console.error('Chat error:', error);
    } finally {
      setIsThinking(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue);
    }
  };

  const ArchitectIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h8M8 14h5m-9 6l2.5-3.5H19a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12.5a.5.5 0 00.9.3L4 20z" />
    </svg>
  );

  return (
    <div className={`fixed bottom-5 ${isRtl ? 'left-5' : 'right-5'} z-50 flex flex-col items-end`}>
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-[92vw] sm:w-[390px] h-[540px] mb-3 flex flex-col overflow-hidden border border-slate-200 animate-fade-in-up text-start">
          {/* Header */}
          <div className="bg-[#090B10] px-5 py-4 flex justify-between items-center text-white border-b border-white/10">
            <div>
              <h3 className="font-heading font-semibold text-sm tracking-tight">
                {language === 'ar' ? 'مهندس الحلول' : 'Solutions Architect'}
              </h3>
              <p className="text-xs text-slate-400">
                {language === 'ar' ? 'استشارة معمارية فورية' : 'Syscomatics Technical Desk'}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors"
              aria-label="Close assistant"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-[#F8F9FB]" ref={scrollRef}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed rounded-xl ${
                    msg.role === 'user'
                      ? 'bg-[#0037F3] text-white'
                      : 'bg-white border border-slate-200 text-[#0A0B0D]'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {messages.length === 1 && !isThinking && (
              <div className="pt-2 space-y-2">
                {quickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => sendMessage(prompt)}
                    className="block w-full text-start px-3.5 py-2.5 text-xs font-medium text-[#0A0B0D] bg-white border border-slate-200 hover:border-[#0037F3] hover:text-[#0037F3] rounded-lg transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {isThinking && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 px-4 py-3 rounded-xl text-xs text-[#525866]">
                  {language === 'ar' ? 'جاري تحليل المتطلبات...' : 'Analyzing architecture...'}
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3.5 bg-white border-t border-slate-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={
                  language === 'ar' ? 'اطرح سؤالك التقني...' : 'Ask an architectural question...'
                }
                className="flex-1 h-10 px-3.5 text-sm bg-[#F8F9FB] border border-slate-200 rounded-lg text-[#0A0B0D] placeholder:text-slate-400 focus:bg-white focus:border-[#0037F3] transition-colors"
              />
              <button
                type="button"
                onClick={() => sendMessage(inputValue)}
                disabled={!inputValue.trim() || isThinking}
                aria-label="Send message"
                className="bg-[#0037F3] hover:bg-[#002BC4] disabled:opacity-40 text-white w-10 h-10 flex items-center justify-center rounded-lg transition-colors shrink-0"
              >
                <svg
                  className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close Solutions Architect chat' : 'Open Solutions Architect chat'}
        className="bg-[#090B10] hover:bg-[#0037F3] text-white h-12 px-4 flex items-center gap-2.5 rounded-xl border border-white/15 shadow-lg transition-colors duration-150"
      >
        <ArchitectIcon />
        <span className="text-sm font-medium hidden sm:inline">
          {language === 'ar' ? 'مهندس الحلول' : 'Architect'}
        </span>
      </button>
    </div>
  );
};

export default Assistant;