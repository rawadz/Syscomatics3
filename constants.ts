
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Service, JournalArticle, Product } from './types';

export const SERVICES: Service[] = [
  {
    id: 's1',
    name: 'Enterprise ERP',
    tagline: 'Scale without friction.',
    description: 'Bespoke Enterprise Resource Planning systems designed to harmonize complex global operations.',
    longDescription: 'Our ERP solutions are not "off-the-shelf." We architect modular systems that scale with your complexity. From supply chain automation to real-time financial reporting, we ensure every department speaks the same language. Built on high-performance infrastructure with seamless legacy integration.',
    category: 'Enterprise',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    features: ['Real-time Data Intelligence', 'Cloud-Native Architecture', 'Seamless API Orchestration']
  },
  {
    id: 's2',
    name: 'Cyber Resilience',
    tagline: 'Absolute Digital Safety.',
    description: 'Advanced cybersecurity auditing and zero-trust architecture implementation.',
    longDescription: 'In an era of sophisticated threats, perimeter defense is not enough. We implement Zero-Trust models and AI-driven threat detection systems. Our security team performs rigorous penetration testing and architecture reviews to ensure your digital assets are immutable.',
    category: 'Security',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
    features: ['Zero-Trust Protocols', 'AI Threat Hunting', 'Regulatory Compliance']
  },
  {
    id: 's3',
    name: 'Custom CRM',
    tagline: 'Deep Client Insights.',
    description: 'High-performance Customer Relationship Management platforms with predictive AI modeling.',
    longDescription: 'We build the tools that empower your sales and support teams. Our custom CRMs leverage machine learning to predict customer churn, identify cross-sell opportunities, and automate high-touch engagement. Data sovereignty and speed are at the core of our development.',
    category: 'Development',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000',
    features: ['Predictive Analytics', 'Omni-channel Sync', 'Automated Sales Funnels']
  },
  {
    id: 's4',
    name: 'Blockchain Ledger',
    tagline: 'Unalterable Trust.',
    description: 'Decentralized solutions for supply chain, finance, and digital identity.',
    longDescription: 'Syscomatics architects private and public blockchain solutions that redefine trust. Whether it is a smart contract for automated settlements or a decentralized identity protocol, we provide the cryptographic expertise to build secure, transparent ecosystems.',
    category: 'Blockchain',
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000',
    features: ['Smart Contract Security', 'DeFi Infrastructure', 'Distributed Ledgers']
  },
  {
    id: 's5',
    name: 'Full-Stack Labs',
    tagline: 'Innovation Delivered.',
    description: 'Rapid prototyping and full-scale product development for ambitious enterprises.',
    longDescription: 'Our labs turn complex problems into elegant software. We handle the entire lifecycle—from UI/UX strategy to backend architecture and DevOps. We build web and mobile applications that are not just functional, but performant and delightful to use.',
    category: 'Development',
    imageUrl: 'https://images.unsplash.com/photo-1581291518655-9e269217281a?auto=format&fit=crop&q=80&w=1000',
    features: ['Native Performance', 'React & Node Expertise', 'Strategic UX Design']
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Aura One',
    category: 'Audio',
    price: 299,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000',
    description: 'Minimalist sound experience.',
    longDescription: 'The Aura One is our flagship audio device, designed for those who value sonic purity and architectural form. Crafted from precision-milled aluminum and tactile sandstone.',
    features: ['High-fidelity audio', 'Sandstone finish', '12-hour battery']
  },
  {
    id: 'p2',
    name: 'Tactile Watch',
    category: 'Wearable',
    price: 199,
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000',
    description: 'Time as a feeling.',
    longDescription: 'A wearable that respects your focus. No screen, just haptics that communicate time and urgency through gentle vibration and texture.',
    features: ['Haptic feedback', 'Organic strap', 'Water resistant']
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
    {
        id: 1,
        title: "The Zero-Trust Mandate",
        date: "June 12, 2025",
        excerpt: "Why modern enterprises must shift from 'perimeter' to 'identity' based security models.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-lg" },
                "The old castle-and-moat security model is dead. In a world of remote work and cloud-native services, the user's identity is the new perimeter. At Syscomatics, we treat every request as if it originates from an untrusted source until proven otherwise."
            ),
            React.createElement("blockquote", { className: "border-l-4 border-[#0037f3] pl-6 italic text-2xl text-[#0a0b0d] my-10 font-heading font-semibold" },
                "\"Security is not a feature; it is the foundation upon which trust is built.\""
            )
        )
    },
    {
        id: 2,
        title: "The ROI of Custom ERP",
        date: "May 28, 2025",
        excerpt: "How bespoke operational software pays for itself in efficiency gains within 18 months.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6" },
                "Efficiency isn't just about doing things faster; it's about eliminating the friction between data and decision. Custom ERP systems provide that clarity. By integrating logistics, finance, and human resources into a single pane of glass, enterprises can react to market shifts in real-time."
            )
        )
    }
];

export const BRAND_NAME = 'Syscomatics';
export const PRIMARY_COLOR = '#0037f3'; 
export const DARK_COLOR = '#0a0b0d';
