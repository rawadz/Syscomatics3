
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI } from "@google/genai";
import { SERVICES } from '../constants';

const getSystemInstruction = () => {
  const serviceContext = SERVICES.map(s => 
    `- ${s.name}: ${s.description}. Features: ${s.features.join(', ')}`
  ).join('\n');

  return `You are the Lead Solutions Architect for "Syscomatics", a high-end IT consulting and software development firm.
  Your tone is expert, strategic, professional, and reassuring. You specialize in ERP, CRM, Blockchain, and Cybersecurity.
  
  Our expertise:
  ${serviceContext}
  
  When users ask about their business problems, offer strategic high-level advice and mention how Syscomatics can help.
  Keep answers concise (under 4 sentences). If they ask about costs, suggest they add the service to their "Project Brief" or request a formal consultation.
  Speak about "Scalability", "Infrastructure", "Security", and "Efficiency".`;
};

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    // Check if API key is available in environment directly
    if (!process.env.API_KEY) {
      return "The Syscomatics portal is currently in maintenance. Please contact support@syscomatics.com.";
    }

    // Always use new GoogleGenAI({ apiKey: process.env.API_KEY })
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Create chat session with specified model and instruction
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: getSystemInstruction(),
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    // Send message and await response
    const response = await chat.sendMessage({ message: newMessage });
    
    // Access .text property directly (not a method)
    return response.text || "Our systems are experiencing a momentary lapse. Please restate your query.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our systems are experiencing high load. Please try again or reach out directly via email.";
  }
};
