/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Service, JournalArticle, Language, Product } from './types';

export const TRANSLATIONS: Record<Language, any> = {
  en: {
    nav: { solutions: 'Solutions', strategy: 'Strategy', insights: 'Insights', brief: 'Project Brief' },
    hero: { tagline: 'Systems Innovation 2025', title: 'Engineered for', accent: 'Performance.', sub: 'Syscomatics crafts high-performance digital infrastructure for the global intelligent enterprise. We solve complexity through precision.', cta1: 'Our Solutions', cta2: 'The Strategy' },
    about: { 
      badge: 'Strategic Framework', 
      title: 'Our Methodical', 
      accent: 'Execution.', 
      sub: 'We apply a rigorous engineering cycle to every enterprise transformation. Precision is not a goal—it is our baseline.',
      phases: {
        p1: 'Diagnostic', p1d: 'Dependency mapping & technical audit.',
        p2: 'Engineering', p2d: 'Agile development & architectural builds.',
        p3: 'Validation', p3d: 'Stress testing & security hardening.',
        p4: 'Governance', p4d: 'Continuous monitoring & scaling.'
      },
      hub: 'Damascus Hub', 
      ops: 'Operations Center', 
      uptime: 'SLA Guaranteed', 
      uptimed: 'Redundant cloud orchestration ensuring zero-latency regional routes.' 
    },
    services: { 
      header: 'Expert Solutions Portfolio', 
      sub: 'Explore implementation pillars of the global enterprise.', 
      back: 'Back to Solutions', 
      spec: 'Specialization', 
      topics: 'Implementation Topics', 
      domains: 'Operational Domains', 
      caseStudies: 'Case Studies', 
      briefAdd: 'Add to Project Brief', 
      avail: 'Ready to Deploy', 
      consult: '24h Response', 
      case: 'Case', 
      outcome: 'Outcome',
      pillars: 'Architectural Pillars',
      roadmap: 'Deployment Roadmap',
      tech: 'Technical Stack',
      thesis: 'Strategic Thesis'
    },
    journal: { 
      header: 'Technical Insights', 
      sub: 'Editorial Board', 
      back: 'Back to Insights', 
      featured: 'Featured Brief', 
      tactical: 'Tactical Reports',
      readTime: 'min read'
    },
    inquiry: { title: 'Project Brief', sub: 'Strategic Selection', empty: 'Your brief is empty.', remove: 'Remove', initiate: 'Initiate Review', assessment: 'Expert assessment in 24h', contact: 'Lead Contact', name: 'Full Name', email: 'Email', org: 'Organization', context: 'Context', submit: 'Submit Brief', back: 'Back', success: 'Brief Received.', successSub: 'Our Architect is reviewing your requirements.', scopes: 'Selected Scopes' },
    footer: { sub: 'Architecting digital infrastructure for absolute performance.', nav: 'Navigation', exp: 'Expertise', newsletter: 'Architectural Report', newsd: 'Technical analysis for executives.', reg: 'Register', operational: 'All Systems Operational' }
  },
  ar: {
    nav: { solutions: 'الحلول', strategy: 'الاستراتيجية', insights: 'رؤى', brief: 'ملخص المشروع' },
    hero: { tagline: 'ابتكار الأنظمة ٢٠٢٥', title: 'هندسة من أجل', accent: 'الأداء.', sub: 'تقوم سيسكوماتيكس ببناء بنية تحتية رقمية عالية الأداء للمؤسسات الذكية العالمية.', cta1: 'حلولنا', cta2: 'الاستراتيجية' },
    about: { 
      badge: 'الإطار الاستراتيجي', 
      title: 'تنفيذنا', 
      accent: 'المنهجي.', 
      sub: 'نطبق دورة هندسية صارمة على كل تحول مؤسسي. الدقة هي أساس عملنا.',
      phases: {
        p1: 'التشخيص', p1d: 'رسم خرائط التبعية والتدقيق الفني.',
        p2: 'الهندسة', p2d: 'التطوير المرن والبناء المعماري.',
        p3: 'التحقق', p3d: 'اختبار الإجهاد وتحصين الأمن.',
        p4: 'الحوكمة', p4d: 'المراقبة المستمرة والتوسع.'
      },
      hub: 'مركز دمشق', 
      ops: 'مركز العمليات', 
      uptime: 'ضمان الخدمة', 
      uptimed: 'تنسيق سحابي يضمن مسارات إقليمية بزمن انتقال صفري.' 
    },
    services: { 
      header: 'محفظة الحلول الخبيرة', 
      sub: 'استكشف ركائز التنفيذ للمؤسسات العالمية.', 
      back: 'العودة للحلول', 
      spec: 'تخصص', 
      topics: 'مواضيع التنفيذ', 
      domains: 'المجالات التشغيلية', 
      caseStudies: 'دراسات الحالة', 
      briefAdd: 'إضافة إلى ملخص المشروع', 
      avail: 'جاهز للنشر', 
      consult: 'استجابة خلال ٢٤ ساعة', 
      case: 'حالة', 
      outcome: 'النتيجة',
      pillars: 'الركائز المعمارية',
      roadmap: 'خارطة الطريق',
      tech: 'المجموعة التقنية',
      thesis: 'الأطروحة الاستراتيجية'
    },
    journal: { 
      header: 'رؤى تقنية', 
      sub: 'هيئة التحرير', 
      back: 'العودة إلى الرؤى', 
      featured: 'موجز مميز', 
      tactical: 'تقارير تكتيكية',
      readTime: 'دقائق قراءة'
    },
    inquiry: { title: 'ملخص المشروع', sub: 'الاختيار الاستراتيجي', empty: 'ملخصك فارغ.', remove: 'إزالة', initiate: 'بدء المراجعة', assessment: 'تقييم خلال ٢٤ ساعة', contact: 'الاتصال', name: 'الاسم', email: 'البريد', org: 'المؤسسة', context: 'السياق', submit: 'إرسال', back: 'عودة', success: 'تم الاستلام.', successSub: 'مهندس الحلول يراجع متطلباتك.', scopes: 'النطاقات' },
    footer: { sub: 'تصميم البنية التحتية للأداء المطلق.', nav: 'التنقل', exp: 'الخبرة', newsletter: 'التقرير المعماري', newsd: 'تحليل فني للمديرين.', reg: 'تسجيل', operational: 'جميع الأنظمة تعمل' }
  },
  // Add Kurdish (ku) translations to fix missing property error
  ku: {
    nav: { solutions: 'Çareserî', strategy: 'Stratejî', insights: 'Nêrîn', brief: 'Kurteya Projeyê' },
    hero: { tagline: 'Nûvekirina Sîsteman 2025', title: 'Ji bo hatî endezyarkirin', accent: 'Performans.', sub: 'Syscomatics binesaziya dîjîtal a performansa bilind ji bo karsaziya aqilmend a gerdûnî çêdike.', cta1: 'Çareseriyên Me', cta2: 'Stratejî' },
    about: { 
      badge: 'Çarçoveya Stratejîk', 
      title: 'Birêvebirina Me ya', 
      accent: 'Metodîk.', 
      sub: 'Em di her veguherîna karsaziyê de çerxek endezyariyê ya hişk pêk tînin. Rastbûn ne armanc e - ew bingeha me ye.',
      phases: {
        p1: 'Teşhîs', p1d: 'Nexşeya girêdayîbûnê û kontrola teknîkî.',
        p2: 'Endezyarî', p2d: 'Pêşveçûna bilez û avahiyên mîmarî.',
        p3: 'Pejirandin', p3d: 'Testkirina stresê û hişkbûna ewlehiyê.',
        p4: 'Rêvebirî', p4d: 'Şopandina berdewam û mezinbûn.'
      },
      hub: 'Navenda Şamê', 
      ops: 'Navenda Operasyonan', 
      uptime: 'Garantiya SLA', 
      uptimed: 'Orkestrasyona ewr a zêde ya ku rêyên herêmî yên derengiya sifir misoger dike.' 
    },
    services: { 
      header: 'Portfoliyona Çareseriyên Pispor', 
      sub: 'Stûnên bicîhanîna karsaziya gerdûnî bigerin.', 
      back: 'Vegere Çareseriyan', 
      spec: 'Pisporî', 
      topics: 'Mijarên Bicîhanînê', 
      domains: 'Domên Operasyonel', 
      caseStudies: 'Lêkolînên Dozê', 
      briefAdd: 'Li Kurteya Projeyê Zêde Bike', 
      avail: 'Amade ye ji bo Bicîhkirinê', 
      consult: 'Bersiva 24h', 
      case: 'Doz', 
      outcome: 'Encam',
      pillars: 'Stûnên Mîmarî',
      roadmap: 'Nexşeya Rêya Bicîhkirinê',
      tech: 'Stack Teknolojiya',
      thesis: 'Teza Stratejîk'
    },
    journal: { 
      header: 'Nêrînên Teknîkî', 
      sub: 'Lijneya Edîtoran', 
      back: 'Vegere Nêrînan', 
      featured: 'Kurteya Taybet', 
      tactical: 'Raporên Taktîkî',
      readTime: 'dq xwendin'
    },
    inquiry: { title: 'Kurteya Projeyê', sub: 'Hilbijartina Stratejîk', empty: 'Kurteya we vala ye.', remove: 'Rake', initiate: 'Nirxandinê Destpê Bike', assessment: 'Nirxandina pispor di 24 saetan de', contact: 'Têkiliya Serekî', name: 'Navê Tevde', email: 'E-post', org: 'Rêxistin', context: 'Çarçove', submit: 'Kurteyê Bişîne', back: 'Vegere', success: 'Kurte Hat Standin.', successSub: 'Mîmarê me daxwazên we dinirxîne.', scopes: 'Qadên Hilbijartî' },
    footer: { sub: 'Mîmarkirina binesaziya dîjîtal ji bo performansa mutleq.', nav: 'Navîgasyon', exp: 'Pisporî', newsletter: 'Rapora Mîmarî', newsd: 'Analîza teknîkî ji bo rêveberan.', reg: 'Tombarkirin', operational: 'Hemî Sîstem Operasyonel in' }
  }
};

const SERVICES_DATA: Record<Language, Service[]> = {
  en: [
    {
      id: 's1',
      name: 'Enterprise ERP',
      tagline: 'The Operating System for Modern Industry.',
      description: 'Bespoke ERP systems designed to harmonize complex global operations.',
      longDescription: 'Our ERP methodology moves beyond basic record-keeping. We build "Autonomous Enterprise" engines that integrate disparate data streams into a single source of truth.',
      category: 'Enterprise',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
      features: ['Real-time Data Intelligence', 'Cloud-Native Architecture', 'API Orchestration'],
      topics: ['Supply Chain Automation', 'Financial Consolidation', 'Procurement Logic'],
      domains: [
        { name: 'Manufacturing', description: 'Production line optimization.' },
        { name: 'Logistics', description: 'Global distribution tracking.' }
      ],
      examples: [
        { title: 'Global Agri-Tech Sync', description: 'Implemented a multi-region ERP.', results: '30% reduction in waste.' }
      ],
      pillars: [
        { title: 'Unified Ledger', description: 'Zero-discrepancy financial routing across branches.' },
        { title: 'Predictive Ops', description: 'AI-driven forecasting for inventory risks.' }
      ],
      roadmap: [
        { label: 'Strategic Audit', duration: 'Wk 1-2', detail: 'Mapping dependencies.' },
        { label: 'Implementation', duration: 'Wk 3-10', detail: 'Architectural build.' }
      ],
      benchmarks: [
        { label: 'Procurement speed', value: '+45%' },
        { label: 'Data Accuracy', value: '99.9%' }
      ],
      techStack: ['PostgreSQL', 'Python Core', 'Kubernetes', 'Redis']
    },
    {
      id: 's2',
      name: 'Cyber Resilience',
      tagline: 'Defense-in-Depth for Modern Threats.',
      description: 'Advanced cybersecurity auditing and zero-trust implementation.',
      longDescription: 'Identity is the new perimeter. We implement Zero-Trust frameworks that ensure absolute data sovereignty.',
      category: 'Security',
      imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
      features: ['Zero-Trust Protocols', 'AI Threat Hunting'],
      topics: ['Identity Management', 'Encryption'],
      domains: [{ name: 'FinTech', description: 'Secure transaction processing.' }],
      examples: [{ title: 'Regional Banking Shield', description: 'End-to-end security audit.', results: 'Zero intrusions.' }],
      pillars: [
        { title: 'Identity First', description: 'Moving security to the user level.' },
        { title: 'Encryption Tunnels', description: 'Military-grade data protection.' }
      ],
      roadmap: [
        { label: 'Audit', duration: 'Wk 1', detail: 'Threat analysis.' },
        { label: 'Hardening', duration: 'Wk 2-4', detail: 'Applying patches.' }
      ],
      benchmarks: [
        { label: 'Detection Speed', value: 'Instant' },
        { label: 'Risk factor', value: '-90%' }
      ],
      techStack: ['Rust', 'Kali Linux', 'Cloudflare', 'Splunk']
    }
  ],
  ar: [
    {
      id: 's1',
      name: 'ERP المؤسسات',
      tagline: 'نظام التشغيل للصناعة الحديثة.',
      description: 'أنظمة تخطيط موارد المؤسسات المصممة لتنسيق العمليات المعقدة.',
      longDescription: 'تتجاوز منهجية ERP الخاصة بنا مجرد حفظ السجلات. نحن نبني محركات تدمج تدفقات البيانات.',
      category: 'Enterprise',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
      features: ['ذكاء البيانات', 'بنية سحابية'],
      topics: ['أتمتة التوريد', 'التوحيد المالي'],
      domains: [{ name: 'التصنيع', description: 'تحسين خطوط الإنتاج.' }],
      examples: [{ title: 'مزامنة الزراعة', description: 'نظام ERP لمصدر إقليمي.', results: 'خفض النفايات ٣٠٪.' }],
      pillars: [
          { title: 'السجل الموحد', description: 'توجيه مالي بدون فروقات عبر الفروع.' }
      ],
      roadmap: [
          { label: 'التدقيق', duration: '١-٢ أسبوع', detail: 'رسم خرائط التبعية.' }
      ],
      benchmarks: [
          { label: 'سرعة المشتريات', value: '+٤٥٪' }
      ],
      techStack: ['PostgreSQL', 'Python', 'Kubernetes']
    }
  ],
  ku: []
};

export const getServices = (lang: Language): Service[] => SERVICES_DATA[lang] || SERVICES_DATA.en;

export const JOURNAL_ARTICLES: Record<Language, JournalArticle[]> = {
    en: [
        {
            id: 1,
            title: "The Zero-Trust Mandate",
            date: "June 12, 2025",
            excerpt: "Why modern enterprises must shift from 'perimeter' to 'identity' based security models.",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
            content: React.createElement("p", null, "The traditional security model is obsolete. Identity is the only valid perimeter.")
        }
    ],
    ar: [],
    ku: []
};

export const BRAND_NAME = 'Syscomatics';
export const PRIMARY_COLOR = '#0037f3'; 
export const DARK_COLOR = '#0a0b0d';
export const PRODUCTS: Product[] = [];