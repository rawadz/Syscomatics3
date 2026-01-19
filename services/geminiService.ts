
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI } from "@google/genai";
// Changed import from SERVICES to getServices to fix compilation error and handle localization
import { getServices } from '../constants';
import { Language } from '../types';

const getSystemInstruction = (language: Language) => {
  // Retrieve services based on language for better architectural context
  const services = getServices(language);
  const serviceContext = services.map(s => 
    `- ${s.name}: ${s.tagline}. Domains: ${s.domains.map(d => d.name).join(', ')}. Key Topics: ${s.topics.join(', ')}.`
  ).join('\n');

  const languageNote = {
    en: 'Respond in English.',
    ar: 'أجب باللغة العربية بلهجة مهنية محترمة (RTL).',
    ku: 'Bersivê bi Kurdiya Kurmancî (bi tîpên Latînî) bide. (LTR).'
  };

  return `You are the Lead Solutions Architect for "Syscomatics", a high-end IT consulting firm headquartered in Damascus, Syria.
  Your tone is expert, strategic, and reassuring. You specialize in Enterprise ERP, Cyber Resilience, Custom CRM, Blockchain, and Full-Stack Labs.
  
  Operational Context:
  ${serviceContext}
  
  Language Preference: ${languageNote[language]}
  
  When users ask about their business problems, offer strategic architectural advice. Mention specific Syscomatics domains or implementation examples where relevant.
  Keep answers under 4 sentences. Focus on "Architectural Integrity", "Operational Efficiency", and "Sovereign Infrastructure".`;
};

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string, language: Language = 'en'): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
      return "The Syscomatics portal is currently in maintenance.";
    }

    // Initialize the Gemini API client correctly with process.env.API_KEY
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Create a chat session with the appropriate system instructions and model
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: getSystemInstruction(language),
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    // Send the message and access text property directly as per guidelines
    const response = await chat.sendMessage({ message: newMessage });
    return response.text || "Connection interrupted.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The Damascus Hub is currently handling high request volumes.";
  }
};
