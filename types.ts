/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

export type Language = 'en' | 'ar' | 'ku';

export interface Pillar {
  title: string;
  description: string;
}

export interface RoadmapStep {
  label: string;
  duration: string;
  detail: string;
}

export interface Benchmark {
  label: string;
  value: string;
}

export interface ServiceDomain {
  name: string;
  description: string;
  icon?: string;
}

export interface ServiceExample {
  title: string;
  description: string;
  results: string;
}

export interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription?: string;
  category: 'Enterprise' | 'Development' | 'Security' | 'Blockchain' | 'Design' | 'Consulting' | 'Cloud';
  imageUrl: string;
  features: string[];
  domains: ServiceDomain[];
  topics: string[];
  examples: ServiceExample[];
  pillars: Pillar[];
  roadmap: RoadmapStep[];
  benchmarks: Benchmark[];
  techStack: string[];
}

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
