
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI } from "@google/genai";
import { getServices } from '../servicesData';
import { KNOWLEDGE_BASE } from '../translations';
import { Language } from '../types';

const getSystemInstruction = (language: Language) => {
  const services = getServices(language);
  const kb = KNOWLEDGE_BASE[language] || KNOWLEDGE_BASE.en;
  
  const serviceContext = services.map(s => 
    `- ${s.name}: ${s.tagline}. Key Features: ${s.features.join(', ')}.`
  ).join('\n');

  const faqContext = kb.faq?.map((f: any) => `Q: ${f.q}\nA: ${f.a}`).join('\n\n');
  const guardrailContext = kb.guardrails?.join('\n');

  const languageNote = {
    en: 'Respond in English.',
    ar: 'أجب باللغة العربية بلهجة مهنية محترمة (RTL).',
    ku: 'Bersivê bi Kurdiya Kurmancî (bi tîpên Latînî) bide. (LTR).'
  };

  return `You are the Lead Solutions Architect for "Syscomatics", a high-end IT consulting firm in Damascus, Syria.
  Your goal is to provide strategic architectural advice and guide potential clients through our digital solutions.

  CORE PHILOSOPHY:
  ${kb.company?.philosophy}

  OUR SERVICES & DOMAINS:
  ${serviceContext}
  
  KNOWLEDGE & FAQ:
  ${faqContext}
  
  OPERATIONAL RULES:
  ${guardrailContext}
  
  LANGUAGE PREFERENCE: ${languageNote[language]}
  
  GUIDELINES:
  1. Be professional, direct, and reassuring.
  2. If a user describes a business problem, link it to one of our core services.
  3. When appropriate, tell them to add the service to their "Project Brief" for a formal assessment.
  4. Keep responses under 3-4 sentences. Focus on high-level architecture.`;
};

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string, language: Language = 'en'): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
      return "The Syscomatics portal is currently in maintenance.";
    }

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({
          role: h.role,
          parts: [{ text: h.text }]
        })),
        { role: 'user', parts: [{ text: newMessage }] }
      ],
      config: {
        systemInstruction: getSystemInstruction(language),
        temperature: 0.7, // Balances creativity with factual consistency
      },
    });

    return response.text || "Connection interrupted.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The Damascus Hub is currently handling high request volumes.";
  }
};