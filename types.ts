
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

export interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription?: string;
  category: 'Enterprise' | 'Development' | 'Security' | 'Blockchain';
  imageUrl: string;
  features: string[];
}

// Fix: Added missing Product interface as referenced in components
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  description: string;
  longDescription?: string;
  features: string[];
}

export interface JournalArticle {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export type ViewState = 
  | { type: 'home' }
  | { type: 'service', service: Service }
  | { type: 'journal', article: JournalArticle }
  | { type: 'inquiry' };
