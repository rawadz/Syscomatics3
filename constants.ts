
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { Service, JournalArticle, Language, Product } from './types';

export const KNOWLEDGE_BASE: Record<Language, any> = {
  en: {
    company: {
      philosophy: "Syscomatics prioritizes sovereign digital infrastructure and long-term stability over disposable fixes.",
      history: "Founded by Rawad Zaitoun in Damascus, serving the regional market since 2024.",
      location_advantage: "Strategic hub in Damascus, understanding regional operational challenges."
    },
    faq: [
      { q: "What is your project process?", a: "We follow a 3-stage 'Listen, Build, Command' framework: strategic discovery, architecture, and direct system handoff." },
      { q: "How much do services cost?", a: "Pricing is calculated based on complexity. Quotes are provided within 24 hours of a project brief submission." },
      { q: "Do you offer custom integrations?", a: "Yes, we specialize in high-performance middleware and custom APIs for ERP/CRM systems." }
    ],
    guardrails: [
      "Always guide the user to add services to their 'Project Brief'.",
      "Do not provide exact pricing without a formal assessment.",
      "Focus on architectural integrity."
    ]
  },
  ar: {
    company: {
      philosophy: "سيسكوماتيكس تولي الأولوية للبنية التحتية الرقمية السيادية واستقرار الأنظمة على المدى الطويل.",
      history: "تأسست من قبل رواد زيتون في دمشق عام ٢٠٢٤.",
      location_advantage: "مركز استراتيجي في دمشق يفهم التحديات التشغيلية الإقليمية."
    },
    faq: [
      { q: "ما هي عملية التنفيذ؟", a: "نتبع إطار 'نسمع، نبني، تقود': اكتشاف استراتيجي، ثم بناء المعمارية، ثم التسليم." },
      { q: "كم تبلغ التكلفة؟", a: "تعتمد التكلفة على تعقيد المشروع. نقدم عروض الأسعار خلال ٢٤ ساعة من تقديم الملخص." }
    ],
    guardrails: [
      "وجه المستخدم دائما لإضافة الخدمات إلى ملخص المشروع.",
      "لا تقدم أسعاراً دقيقة دون تقييم فني."
    ]
  },
  ku: {
    company: {
      philosophy: "Syscomatics pêşîniyê dide binesaziya dîjîtal a serwer û îstîqrara sîstemê.",
      history: "Ji hêla Rawad Zaitoun ve li Şamê hatiye damezrandin.",
      location_advantage: "Navenda stratejîk li Şamê."
    },
    faq: [
      { q: "Pêvajoya projeyê çawa ye?", a: "Em çarçoveyek 3-qonaxî dişopînin: Guhdarî, Avakirin, Fermande." }
    ],
    guardrails: [
      "Bikarhêner her dem ber bi Kurteya Projeyê ve bibe."
    ]
  }
};

export const TRANSLATIONS: Record<Language, any> = {
  en: {
    nav: { solutions: 'Solutions', strategy: 'Strategy', insights: 'Stories', brief: 'Project Brief' },
    hero: { tagline: 'Systems Innovation 2025', title: 'Engineered for', accent: 'Performance.', sub: 'Precision-engineered systems for organizations that demand excellence.', cta1: 'Our Solutions', cta2: 'The Strategy' },
    about: { 
      badge: 'The Journey', 
      title: 'Simple. Direct.', 
      accent: 'Effective.', 
      sub: 'Three steps to power your business growth.',
      steps: [
        { title: 'Listen', desc: 'We understand your goals and business challenges first.', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000' },
        { title: 'Build', desc: 'Our engineers create your custom digital architecture.', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000' },
        { title: 'Command', desc: 'You take control of a powerful, scaling system.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000' }
      ],
      uptime: 'Always On', 
      uptimed: 'High-speed systems ensuring continuous operations.' 
    },
    services: { header: 'Our Solutions', sub: 'Smart tools designed for modern companies.', back: 'Back', spec: 'Expertise in', pillars: 'Why This Matters', roadmap: 'Strategic Roadmap', thesis: 'The Architectural Thesis', value: 'Strategic Business Value', briefAdd: 'Add to Brief', explore: 'Explore' },
    journal: { header: 'Success Stories', sub: 'Transformations', back: 'Back', featured: 'Latest Win', tactical: 'Client Outcomes', readTime: 'min read' },
    inquiry: { title: 'Your Project', sub: 'Selection', empty: 'List is empty.', remove: 'Remove', initiate: 'Start Review', assessment: 'Expert reply in 24h', contact: 'Contact Info', name: 'Your Name', email: 'Email', org: 'Company', context: 'Details', submit: 'Send Request', back: 'Back', success: 'Thank You.', successSub: 'We will contact you soon.', scopes: 'Selected Services' },
    footer: { sub: 'Architecting sovereign digital futures.', nav: 'Navigation', exp: 'Expertise', newsletter: 'Subscribe', newsd: 'Get updates.', reg: 'Join Us', contact: 'Connect', address: 'Damascus, Syria', email: 'info@syscomatics.com', phone: '+963 932 255 512' }
  },
  ar: {
    nav: { solutions: 'الحلول', strategy: 'الاستراتيجية', insights: 'قصص النجاح', brief: 'ملخص المشروع' },
    hero: { tagline: 'ابتكار الأنظمة ٢٠٢٥', title: 'هندسة من أجل', accent: 'الأداء.', sub: 'أنظمة هندسية دقيقة للمؤسسات التي تنشد التميز.', cta1: 'حلولنا', cta2: 'الاستراتيجية' },
    about: { 
      badge: 'الرحلة', 
      title: 'بساطة. وضوح.', 
      accent: 'فعالية.', 
      sub: 'ثلاث خطوات لتعزيز نمو عملك.',
      steps: [
        { title: 'نسمع', desc: 'نفهم أهدافك وتحديات عملك أولاً.', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000' },
        { title: 'نبني', desc: 'مهندسونا يبتكرون معماريتك الرقمية.', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000' },
        { title: 'تقود', desc: 'تتولى السيطرة على نظام قوي.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000' }
      ],
      uptime: 'متاح دائماً', 
      uptimed: 'أنظمة تضمن استمرارية أعمالك.' 
    },
    services: { header: 'حلولنا', sub: 'أدوات ذكية للشركات.', back: 'العودة', spec: 'الخبرة في', pillars: 'الأهمية الاستراتيجية', roadmap: 'خارطة الطريق', thesis: 'نظرة عامة هندسية', value: 'القيمة الاستراتيجية للأعمال', briefAdd: 'إضافة للملخص', explore: 'اكتشف' },
    journal: { header: 'قصص النجاح', sub: 'التحولات', back: 'العودة', featured: 'أحدث الإنجازات', tactical: 'النتائج', readTime: 'دقائق' },
    inquiry: { title: 'مشروعك', sub: 'الاختيار', empty: 'القائمة فارغة.', remove: 'إزالة', initiate: 'بدء المراجعة', assessment: 'رد خلال ٢٤ ساعة', contact: 'الاتصال', name: 'الاسم', email: 'البريد', org: 'الشركة', context: 'التفاصيل', submit: 'إرسال', back: 'العودة', success: 'شكراً لك.', successSub: 'سنتواصل معك قريباً.', scopes: 'الخدمات المختارة' },
    footer: { sub: 'بناء مستقبل رقمي سيادي.', nav: 'التنقل', exp: 'الخبرة', newsletter: 'اشترك', newsd: 'احصل على التحديثات.', reg: 'انضم إلينا', contact: 'تواصل', address: 'دمشق، سوريا', email: 'info@syscomatics.com', phone: '+963 932 255 512' }
  },
  ku: {
    nav: { solutions: 'Çareserî', strategy: 'Stratejî', insights: 'Çîrok', brief: 'Kurteya Projeyê' },
    hero: { tagline: 'Nûbûna Sîsteman 2025', title: 'Ji bo performansa', accent: 'Hatiye Endezyarkirin.', sub: 'Sîstemên endezyariya rast ji bo rêxistinên ku jêhatîbûnê dixwazin.', cta1: 'Çareseriyên Me', cta2: 'Stratejî' },
    about: { 
      badge: 'Rêwîtî', 
      title: 'Hêsan. Rasterast.', 
      accent: 'Bibandor.', 
      sub: 'Sê gav ji bo bihêzkirina mezinbûna karsaziya we.',
      steps: [
        { title: 'Guhdarî', desc: 'Em pêşî armanc û kêşeyên karsaziya we fam dikin.', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000' },
        { title: 'Avakirin', desc: 'Endezyarên me mîmariya weya dîjîtal a xwerû diafirînin.', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000' },
        { title: 'Fermande', desc: 'Hûn kontrola sîstemek bi hêz û mezin dibin.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000' }
      ],
      uptime: 'Her Dem Vekirî', 
      uptimed: 'Sîstemên leza bilind ku operasyonên berdewam garantî dikin.' 
    },
    services: { header: 'Çareseriyên Me', sub: 'Amûrên aqilmend ên ji bo pargîdaniyên nûjen hatine sêwirandin.', back: 'Vegere', spec: 'Pisporî di', pillars: 'Çima Ev Girîng e', roadmap: 'Nexşerêya Stratejîk', thesis: 'Teza Mîmarî', value: 'Nirxa Karsaziya Stratejîk', briefAdd: 'Li Kurteyê Zêde Bike', explore: 'Lêkolîn Bike' },
    journal: { header: 'Çîrokên Serkeftinê', sub: 'Veguherîn', back: 'Vegere', featured: 'Serkeftina Dawî', tactical: 'Encamên Mişterî', readTime: 'deqe xwendin' },
    inquiry: { title: 'Projeya We', sub: 'Bijartin', empty: 'Lîste vala ye.', remove: 'Rake', initiate: 'Nirxandinê Destpê Bike', assessment: 'Bersiva pispor di 24 demjimêran de', contact: 'Agahdariya Têkiliyê', name: 'Navê We', email: 'E-peyam', org: 'Pargîdanî', context: 'Kitekit', submit: 'Daxwazê Bişîne', back: 'Vegere', success: 'Spas.', successSub: 'Em ê di nêzîk de bi we re têkilî deynin.', scopes: 'Xizmetên Bijartî' },
    footer: { sub: 'Avakirina paşerojên dîjîtal ên serwer.', nav: 'Navîgasyon', exp: 'Pisporî', newsletter: 'Abone Bibe', newsd: 'Nûçeyan bistînin.', reg: 'Tevlî Me Bibe', contact: 'Têkilî', address: 'Şam, Sûriye', email: 'info@syscomatics.com', phone: '+963 932 255 512' }
  }
};

export const SERVICES_DATA: Record<Language, Service[]> = {
  en: [
    {
      id: 'erp',
      name: 'Business Management Systems (ERP)',
      tagline: 'Connect your entire company into one high-performance platform.',
      description: 'Centralize sales, inventory, and finance with military-grade precision.',
      longDescription: 'Our ERP systems unify all departmental workflows into a singular command center, ensuring absolute data integrity and operational elasticity.',
      category: 'Enterprise',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
      features: ['Real-time Stock Tracking', 'Auto Invoicing', 'Staff Management'],
      domains: [{ name: 'Operations', description: 'Smoothing daily workflows.' }],
      pillars: [
        { title: 'Operational Sovereignty', description: 'Full control over your internal logic without third-party vendor lock-in.' },
        { title: 'Infinite Scalability', description: 'Modular architecture designed to support a 1000% increase in transaction volume.' }
      ],
      roadmap: [
        { label: 'Discovery', duration: '', detail: 'Mapping organizational friction points.' },
        { label: 'Unit Engineering', duration: '', detail: 'Building modular components.' }
      ],
      benchmarks: [],
      techStack: ['Node.js', 'PostgreSQL'],
      businessValue: 'Reduce administrative overhead by up to 40%.'
    },
    {
        id: 'ecommerce',
        name: 'Global Ecommerce Engineering',
        tagline: 'High-conversion commerce systems engineered for the global stage.',
        description: 'Scalable shopfronts integrated with complex regional logistics and multi-currency gateways.',
        longDescription: 'We build commerce engines designed for extreme scale. From localized payment gateways in the Middle East to global shipping logistics, our architecture ensures a sub-second checkout experience.',
        category: 'Development',
        imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000',
        features: ['Multi-currency Gateway', 'Real-time Tax Logic', 'AI Product Recommendations'],
        domains: [{ name: 'Retail', description: 'Scaling digital sales.' }],
        pillars: [
          { title: 'Frictionless Checkout', description: 'Optimized 2-click paths designed for maximum conversion.' },
          { title: 'Regional Logistics', description: 'Deep integration with local shipping providers.' }
        ],
        roadmap: [
          { label: 'Market Analysis', duration: '', detail: 'Defining specific payment and logistics requirements.' },
          { label: 'Engine Development', duration: '', detail: 'Building core commerce logic.' }
        ],
        benchmarks: [],
        techStack: ['Next.js', 'Stripe'],
        businessValue: 'Typical conversion rate increases of 60%.'
    },
    {
      id: 'crm',
      name: 'Intelligence CRM Solutions',
      tagline: 'Deep customer insights engineered for revenue acceleration.',
      description: 'Predict customer behavior and automate sales cycles with data intelligence.',
      longDescription: 'Syscomatics Intelligence CRM is a revenue engine. We leverage behavioral analytics to ensure your sales team is always focused on high-probability conversions.',
      category: 'Enterprise',
      imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000',
      features: ['Lead Scoring', 'Automated Marketing', 'Client Lifecycle Tracking'],
      domains: [{ name: 'Sales', description: 'Optimizing the funnel.' }],
      pillars: [
        { title: 'Predictive Lead Scoring', description: 'Behavioral algorithms to rank leads.' },
        { title: 'Sales Velocity', description: 'Trigger-based automation.' }
      ],
      roadmap: [
        { label: 'Audit', duration: '', detail: 'Analyzing sales cycle duration.' },
        { label: 'Logic Integration', duration: '', detail: 'Customizing CRM logic.' }
      ],
      benchmarks: [],
      techStack: ['Node.js', 'PostgreSQL'],
      businessValue: '30% average increase in sales team productivity.'
    },
    {
      id: 'uiux',
      name: 'Architectural UI/UX Design',
      tagline: 'Scientific design engineered for the high-end digital web.',
      description: 'Design focused on conversion, user retention, and brand integrity.',
      longDescription: 'We treat design as an engineering discipline. Our UI/UX process is rooted in cognitive psychology and conversion optimization.',
      category: 'Design',
      imageUrl: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=1000',
      features: ['Behavioral Mapping', 'High-Fidelity Prototypes', 'Design Systems'],
      domains: [{ name: 'Identity', description: 'Premium digital presence.' }],
      pillars: [
        { title: 'Cognitive Optimization', description: 'Structuring information to guide user attention.' },
        { title: 'Performance UI', description: 'Ultra-lightweight assets.' }
      ],
      roadmap: [
        { label: 'UX Flow Logic', duration: '', detail: 'Mapping the skeletal structure.' },
        { label: 'Visual System', duration: '', detail: 'Developing scalable components.' }
      ],
      benchmarks: [],
      techStack: ['Figma', 'React'],
      businessValue: 'Clients see an average 50% increase in session duration.'
    },
    {
      id: 'seo',
      name: 'Visibility & SEO Engineering',
      tagline: 'Strategic search dominance through technical optimization.',
      description: 'Deep technical SEO to ensure your brand captures high-intent traffic.',
      longDescription: 'SEO is an architecture problem. We optimize from the server level up to ensure your platform dominates rankings.',
      category: 'Consulting',
      imageUrl: 'https://images.unsplash.com/photo-1562577353-f71e93b5a63c?auto=format&fit=crop&q=80&w=1000',
      features: ['Core Web Vitals', 'Semantic Indexing', 'Authority Building'],
      domains: [{ name: 'Growth', description: 'Increasing organic reach.' }],
      pillars: [
        { title: 'Technical Authority', description: 'Perfect code structure for bot clarity.' },
        { title: 'Semantic Intelligence', description: 'Targeting user intent clusters.' }
      ],
      roadmap: [
        { label: 'Infrastructure Audit', duration: '', detail: 'Scanning for crawl errors.' },
        { label: 'Authority Campaign', duration: '', detail: 'Executing backlink strategies.' }
      ],
      benchmarks: [],
      techStack: ['Next.js', 'Search Console'],
      businessValue: 'Target a 200% increase in organic leads.'
    },
    {
      id: 'cyber',
      name: 'Smart Security (Cyber)',
      tagline: 'Sovereign data protection for a zero-trust world.',
      description: 'Advanced threat protection for mission-critical assets.',
      longDescription: 'In an era of increasing threats, your security must be proactive. We implement Zero-Trust architectures.',
      category: 'Security',
      imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
      features: ['Zero-Trust Architecture', 'Endpoint Encryption', 'Disaster Recovery'],
      domains: [{ name: 'Defense', description: 'Proactive protection.' }],
      pillars: [
        { title: 'Zero-Trust Protocol', description: 'Verify every connection, every time.' },
        { title: 'Threat Neutralization', description: 'Behavioral isolation.' }
      ],
      roadmap: [
        { label: 'Shield Deployment', duration: '', detail: 'Deploying firewalls and EDR.' },
        { label: 'Continuous Monitoring', duration: '', detail: '24/7 logging.' }
      ],
      benchmarks: [],
      techStack: ['Cloudflare', 'Zero Trust'],
      businessValue: 'Ultimate insurance for your digital existence.'
    },
    {
      id: 'api',
      name: 'Custom API & Integration',
      tagline: 'The nervous system for your digital ecosystem.',
      description: 'High-performance middleware to bridge disparate systems.',
      longDescription: 'We build the connective tissue that allows your ERP, CRM, and web tools to share data instantly and accurately.',
      category: 'Development',
      imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1000',
      features: ['REST & GraphQL', 'Webhook Logic', 'OAuth Security'],
      domains: [{ name: 'Connectivity', description: 'Eliminating manual sync.' }],
      pillars: [
        { title: 'Sub-100ms Latency', description: 'Engineered for speed.' },
        { title: 'Auto-Healing Logic', description: 'Built-in retry mechanisms.' }
      ],
      roadmap: [
        { label: 'Endpoint Mapping', duration: '', detail: 'Defining travel points.' },
        { label: 'Middleware Build', duration: '', detail: 'Developing transformation logic.' }
      ],
      benchmarks: [],
      techStack: ['Node.js', 'Go'],
      businessValue: 'Saves thousands of man-hours per year.'
    },
    {
      id: 'infra-audit',
      name: 'Infrastructure Health Audit',
      tagline: 'Professional assessment for technical debt reduction.',
      description: 'Deep-dive forensic analysis of your hardware and software.',
      longDescription: 'Forensic audit of your IT setup to identify waste, risks, and performance bottlenecks.',
      category: 'Consulting',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000',
      features: ['Performance Benchmarking', 'Vulnerability Scanning', 'Cost Optimization'],
      domains: [{ name: 'Efficiency', description: 'IT resource optimization.' }],
      pillars: [
        { title: 'Waste Detection', description: 'Eliminating unused software licenses.' },
        { title: 'Sustainability', description: 'Modernization roadmap.' }
      ],
      roadmap: [
        { label: 'Discovery Scan', duration: '', detail: 'Mapping the app ecosystem.' },
        { label: 'Strategic Report', duration: '', detail: 'Fix priorities.' }
      ],
      benchmarks: [],
      techStack: [],
      businessValue: 'Identify 20-30% in yearly IT cost savings.'
    },
    {
      id: 'mobile-eng',
      name: 'Mobile App Engineering',
      tagline: 'High-performance mobile experiences for iOS and Android.',
      description: 'Native and cross-platform apps built with focus on speed.',
      longDescription: 'We build mobile experiences that are fast, offline-capable, and designed to drive habitual engagement.',
      category: 'Development',
      imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000',
      features: ['Native Performance', 'Offline Sync', 'Push Intelligence'],
      domains: [{ name: 'Mobile', description: 'Direct engagement.' }],
      pillars: [
        { title: 'Offline-First Logic', description: 'Ensuring functionality everywhere.' },
        { title: 'Behavioral Triggers', description: 'Guiding user habits.' }
      ],
      roadmap: [
        { label: 'Core Engineering', duration: '', detail: 'Backend integration.' },
        { label: 'Stress Testing', duration: '', detail: 'Testing on 20+ devices.' }
      ],
      benchmarks: [],
      techStack: ['React Native', 'Firebase'],
      businessValue: 'Increases customer lifetime value by up to 300%.'
    },
    {
      id: 'blockchain',
      name: 'Transparent Records (Blockchain)',
      tagline: 'Immutable ledger technology for absolute trust.',
      description: 'Secure, decentralized tracking for supply chain and contracts.',
      longDescription: 'Trust is built with code. We implement private and public ledgers to ensure records can never be manipulated.',
      category: 'Blockchain',
      imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000',
      features: ['Smart Contracts', 'Immutable Audits', 'Asset Tokenization'],
      domains: [{ name: 'Trust', description: 'Verifiable records.' }],
      pillars: [
        { title: 'Mathematical Honesty', description: 'Replacing trust with code.' },
        { title: 'Audit Trail', description: 'Permanent transaction history.' }
      ],
      roadmap: [
        { label: 'Feasibility Lab', duration: '', detail: 'Genuine value verification.' },
        { label: 'Ledger Architecture', duration: '', detail: 'Design hybrid models.' }
      ],
      benchmarks: [],
      techStack: ['Solidity', 'Ethereum'],
      businessValue: 'Eliminate fraud and reduce legal costs.'
    },
    {
      id: 'cloud',
      name: 'Modern Infrastructure (Cloud)',
      tagline: 'High-availability architectures for global scale.',
      description: 'Secure hosting and serverless logic for 24/7 reliability.',
      longDescription: 'The cloud is an engine for agility. We architect multi-region setups that grow automatically.',
      category: 'Cloud',
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
      features: ['Global Availability', 'Auto Backups', 'Elastic Scaling'],
      domains: [{ name: 'Infrastructure', description: 'Reliable foundations.' }],
      pillars: [
        { title: '99.99% Uptime', description: 'Redundant data hubs.' },
        { title: 'Elastic Cost Logic', description: 'Scaling for savings.' }
      ],
      roadmap: [
        { label: 'Migration Design', duration: '', detail: 'Zero-downtime moving.' },
        { label: 'Security Hardening', duration: '', detail: 'VPC isolation.' }
      ],
      benchmarks: [],
      techStack: ['AWS', 'Terraform'],
      businessValue: 'Replaces massive capital hardware expenses with operational agility.'
    }
  ],
  ar: [
    {
        id: 'erp',
        name: 'نظم إدارة الأعمال (ERP)',
        tagline: 'اربط شركتك بالكامل في منصة واحدة عالية الأداء.',
        description: 'مركزية المبيعات والمخزون والمالية بدقة متناهية.',
        longDescription: 'تقضي أنظمتنا على جزر البيانات المنعزلة وتوحد سير العمل في مركز قيادة واحد.',
        category: 'Enterprise',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
        features: ['تتبع المخزون', 'أتمتة الفواتير', 'إدارة الموظفين'],
        domains: [{ name: 'العمليات', description: 'تسهيل سير العمل.' }],
        pillars: [
          { title: 'السيادة التشغيلية', description: 'تحكم كامل في منطق العمل.' },
          { title: 'محاسبة دقيقة', description: 'ربط المخزون بالمالية.' }
        ],
        roadmap: [
          { label: 'الاكتشاف', duration: '', detail: 'رسم خرائط الاحتكاك التنظيمي.' },
          { label: 'الهندسة', duration: '', detail: 'بناء المكونات البرمجية.' }
        ],
        benchmarks: [],
        techStack: ['Node.js', 'Postgres'],
        businessValue: 'خفض التكاليف الإدارية بنسبة ٤٠٪.'
    },
    {
        id: 'ecommerce',
        name: 'هندسة التجارة الإلكترونية العالمية',
        tagline: 'أنظمة تجارة عالية التحويل للمستوى العالمي.',
        description: 'واجهات متجر قابلة للتوسع مع لوجستيات إقليمية معقدة.',
        longDescription: 'نبني محركات تجارة مصممة للنمو الفائق، متكاملة مع بوابات الدفع المحلية والعالمية.',
        category: 'Development',
        imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000',
        features: ['بوابات دفع متعددة العملات', 'منطق ضرائب فوري', 'توصيات ذكاء اصطناعي'],
        domains: [{ name: 'التجزئة', description: 'توسيع المبيعات الرقمية.' }],
        pillars: [
          { title: 'دفع سلس', description: 'تحسين مسارات الشراء.' },
          { title: 'لوجستيات إقليمية', description: 'ربط عميق مع شركات الشحن.' }
        ],
        roadmap: [
          { label: 'تحليل السوق', duration: '', detail: 'تحديد متطلبات الدفع.' },
          { label: 'بناء المنصة', duration: '', detail: 'تطوير المحرك وتأمينه.' }
        ],
        benchmarks: [],
        techStack: ['Next.js', 'Stripe'],
        businessValue: 'زيادة معدل التحويل بنسبة ٦٠٪.'
    },
    {
        id: 'crm',
        name: 'حلول ذكاء العملاء (CRM)',
        tagline: 'رؤى عملاء مصممة لتسريع الإيرادات.',
        description: 'تنبؤ بالسلوك وأتمتة دورات المبيعات.',
        longDescription: 'نظام CRM من سيسكوماتيكس هو محرك للإيرادات يعتمد على تحليل سلوك العملاء.',
        category: 'Enterprise',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000',
        features: ['تقييم العملاء', 'أتمتة التسويق', 'تتبع دورة الحياة'],
        domains: [{ name: 'المبيعات', description: 'تحسين القمع.' }],
        pillars: [
          { title: 'تقييم تنبؤي', description: 'خوارزميات لترتيب العملاء.' },
          { title: 'سرعة المبيعات', description: 'أتمتة بناءً على الإشارات.' }
        ],
        roadmap: [
          { label: 'التدقيق', duration: '', detail: 'تحليل دورة البيع.' },
          { label: 'الأتمتة', duration: '', detail: 'إعداد الحملات التلقائية.' }
        ],
        benchmarks: [],
        techStack: ['Node.js', 'Postgres'],
        businessValue: 'زيادة إنتاجية فريق المبيعات بنسبة ٣٠٪.'
    },
    {
        id: 'uiux',
        name: 'تصميم UI/UX المعماري',
        tagline: 'تصميم علمي لخدمة الويب الراقية.',
        description: 'تركيز على التحويل، الاحتفاظ بالعملاء، وسلامة العلامة التجارية.',
        longDescription: 'نتعامل مع التصميم كفرع هندسي يجمع بين علم النفس المعرفي وتحسين معدلات التحويل.',
        category: 'Design',
        imageUrl: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=1000',
        features: ['خرائط السلوك', 'نظم التصميم', 'واجهات سريعة'],
        domains: [{ name: 'الهوية', description: 'حضور رقمي متميز.' }],
        pillars: [
          { title: 'تحسين معرفي', description: 'سهولة استخدام فورية.' },
          { title: 'أداء عالي', description: 'واجهات خفيفة جداً.' }
        ],
        roadmap: [
          { label: 'منطق التدفق', duration: '', detail: 'رسم رحلة المستخدم.' },
          { label: 'النماذج التفاعلية', duration: '', detail: 'اختبارات الدقة العالية.' }
        ],
        benchmarks: [],
        techStack: ['Figma', 'React'],
        businessValue: 'زيادة متوسط وقت الجلسة بنسبة ٥٠٪.'
    },
    {
        id: 'seo',
        name: 'هندسة الظهور (SEO)',
        tagline: 'سيادة استراتيجية على نتائج البحث.',
        description: 'ضمان التقاط العملاء المحتملين ذوي النوايا العالية.',
        longDescription: 'تحسين محركات البحث هو مشكلة معمارية. نحن نحسن من مستوى الخادم لضمان السيادة.',
        category: 'Consulting',
        imageUrl: 'https://images.unsplash.com/photo-1562577353-f71e93b5a63c?auto=format&fit=crop&q=80&w=1000',
        features: ['مؤشرات الويب الأساسية', 'الفهرسة الدلالية', 'بناء السلطة'],
        domains: [{ name: 'النمو', description: 'توسيع الوصول المجاني.' }],
        pillars: [
          { title: 'سلطة تقنية', description: 'هيكلية برمجية مثالية.' },
          { title: 'ذكاء دلالي', description: 'استهداف نوايا المستخدم.' }
        ],
        roadmap: [
          { label: 'تدقيق البنية', duration: '', detail: 'فحص أخطاء الزحف.' },
          { label: 'حملة السلطة', duration: '', detail: 'تثبيت التصنيفات الطويلة.' }
        ],
        benchmarks: [],
        techStack: ['Next.js', 'Google Console'],
        businessValue: 'تقليل الاعتماد على الإعلانات المدفوعة بنسبة ٧٠٪.'
    },
    {
        id: 'cyber',
        name: 'الأمن الذكي (Cyber)',
        tagline: 'حماية بيانات سيادية لعالم "عدم الثقة".',
        description: 'حماية متقدمة للأصول الحساسة.',
        longDescription: 'أمن استباقي يحمي بياناتك عند الأطراف وأثناء النقل وعند التخزين.',
        category: 'Security',
        imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
        features: ['معمارية عدم الثقة', 'تشفير الأطراف', 'نسخ احتياطي أوفلاين'],
        domains: [{ name: 'الدفاع', description: 'أنظمة استباقية.' }],
        pillars: [
          { title: 'بروتوكول عدم الثقة', description: 'تحقق متعدد العوامل لكل اتصال.' },
          { title: 'تحييد التهديدات', description: 'عزل سلوكي في الوقت الفعلي.' }
        ],
        roadmap: [
          { label: 'تقييم الثغرات', duration: '', detail: 'اختبارات اختراق محكومة.' },
          { label: 'نشر الدرع', duration: '', detail: 'تحصين إدارة الهوية.' }
        ],
        benchmarks: [],
        techStack: ['Cloudflare', 'Zero-Trust'],
        businessValue: 'التأمين النهائي لوجودك الرقمي.'
    },
    {
        id: 'api',
        name: 'تطوير API والربط المخصص',
        tagline: 'الجهاز العصبي لنظامك الرقمي.',
        description: 'برمجيات وسيطة لربط الأنظمة المختلفة.',
        longDescription: 'نبني النسيج الرابط الذي يسمح لأنظمتك بمشاركة البيانات فوراً وبدقة.',
        category: 'Development',
        imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1000',
        features: ['REST/GraphQL', 'منطق الويب هوك', 'أمن OAuth'],
        domains: [{ name: 'الربط', description: 'إلغاء المزامنة اليدوية.' }],
        pillars: [
          { title: 'زمن استجابة فائق', description: 'مزامنة لحظية للبيانات.' },
          { title: 'معالجة ذاتية', description: 'آليات إعادة المحاولة للفشل.' }
        ],
        roadmap: [
          { label: 'رسم النقاط', duration: '', detail: 'تحديد مسارات السفر.' },
          { label: 'تنسيق المزامنة', duration: '', detail: 'نشر الجسور النهائية.' }
        ],
        benchmarks: [],
        techStack: ['Node.js', 'Go', 'GraphQL'],
        businessValue: 'يوفر آلاف الساعات من الإدخال اليدوي سنوياً.'
    },
    {
        id: 'infra-audit',
        name: 'تدقيق صحة البنية التحتية',
        tagline: 'تقييم احترافي لتقليل الديون التقنية.',
        description: 'تحليل لواقعك من العتاد والبرمجيات.',
        longDescription: 'تدقيق جنائي لإعدادات تكنولوجيا المعلومات لتحديد الهدر والمخاطر.',
        category: 'Consulting',
        imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000',
        features: ['مسح الثغرات', 'تحسين التكلفة', 'رسم الأصول'],
        domains: [{ name: 'الكفاءة', description: 'تحسين الموارد.' }],
        pillars: [
          { title: 'كشف الهدر', description: 'إلغاء التراخيص الوهمية.' },
          { title: 'خطة الاستقرار', description: 'خارطة تحديث لـ ٥ سنوات.' }
        ],
        roadmap: [
          { label: 'مسح الاكتشاف', duration: '', detail: 'رسم يدوي للنظام.' },
          { label: 'تقرير استراتيجي', duration: '', detail: 'قائمة أولويات الإصلاح.' }
        ],
        benchmarks: [],
        techStack: [],
        businessValue: 'يحدد التدقيق عادة ٢٠٪ من الهدر السنوي.'
    },
    {
        id: 'mobile-eng',
        name: 'هندسة تطبيقات الموبايل',
        tagline: 'تجارب موبايل عالية الأداء لنظامي iOS وأندرويد.',
        description: 'تطبيقات مبنية بتركيز على السرعة وتفاعل المستخدم.',
        longDescription: 'تجارب موبايل مصممة لتعزيز الولاء وتسهيل الوصول للخدمات.',
        category: 'Development',
        imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000',
        features: ['أداء 60FPS', 'مزامنة أوفلاين', 'إشعارات ذكية'],
        domains: [{ name: 'الموبايل', description: 'تفاعل مباشر.' }],
        pillars: [
          { title: 'أوفلاين أولاً', description: 'يعمل حتى بدون شبكة.' },
          { title: 'تصميم الشخصية', description: 'توجيه عادات المستخدم.' }
        ],
        roadmap: [
          { label: 'الهندسة الأساسية', duration: '', detail: 'بناء الكود المشترك.' },
          { label: 'اختبارات الضغط', duration: '', detail: 'تحسين استهلاك البطارية.' }
        ],
        benchmarks: [],
        techStack: ['React Native', 'Firebase'],
        businessValue: 'يزيد القيمة الدائمة للعميل بنسبة ٣٠٠٪.'
    },
    {
        id: 'blockchain',
        name: 'السجلات الشفافة (Blockchain)',
        tagline: 'تقنية السجلات غير القابلة للتغيير للثقة التشغيلية.',
        description: 'تتبع آمن ولامركزي لسلاسل التوريد.',
        longDescription: 'سجلات تضمن عدم إمكانية التلاعب أو إخفاء بياناتك الحساسة.',
        category: 'Blockchain',
        imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000',
        features: ['عقود ذكية', 'تدقيق غير قابل للتغيير', 'ترميز الأصول'],
        domains: [{ name: 'الثقة', description: 'سجلات قابلة للتحقق.' }],
        pillars: [
          { title: 'صدق رياضي', description: 'استبدال "الثقة" بـ "التحقق".' },
          { title: 'مسار تدقيق', description: 'سجل معاملات لا يحذف.' }
        ],
        roadmap: [
          { label: 'معمارية السجل', duration: '', detail: 'تصميم النماذج الهجينة.' },
          { label: 'تنسيق المزامنة', duration: '', detail: 'الربط بالأنظمة القديمة.' }
        ],
        benchmarks: [],
        techStack: ['Solidity', 'Web3.js'],
        businessValue: 'يلغي تكاليف التحقق القانوني ويمنع الاحتيال.'
    },
    {
        id: 'cloud',
        name: 'البنية التحتية الحديثة (Cloud)',
        tagline: 'معماريات سحابية عالية التوفر للمستوى العالمي.',
        description: 'استضافة آمنة ومنطق "سيرفر-ليس" لاعتمادية ٢٤/٧.',
        longDescription: 'إعدادات سحابية متعددة المناطق تنمو تلقائياً مع قاعدة مستخدميك.',
        category: 'Cloud',
        imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
        features: ['مراكز عالمية', 'توسع مرن', 'مركز الكوارث'],
        domains: [{ name: 'الأساسات', description: 'اعتمادية عند التوسع.' }],
        pillars: [
          { title: 'توفر ٩٩.٩٩٪', description: 'معماريات عالمية فائضة.' },
          { title: 'تكلفة مرنة', description: 'تقليص الموارد وقت الهدوء.' }
        ],
        roadmap: [
          { label: 'تصميم الهجرة', duration: '', detail: 'نقل البيانات بدون توقف.' },
          { label: 'التحسين', duration: '', detail: 'ضبط الأداء المستمر.' }
        ],
        benchmarks: [],
        techStack: ['AWS', 'Terraform', 'K8s'],
        businessValue: 'يستبدل النفقات الرأسمالية بمرونة تشغيلية.'
    }
  ],
  ku: [
    {
        id: 'erp',
        name: 'Sîstemên Rêvebiriya Karsaziyê (ERP)',
        tagline: 'Tevahiya pargîdaniya xwe di platformek yekane ya performansa bilind de girêbidin.',
        description: 'Firotan, envanter û darayî bi rastbûna asta leşkerî navendî bikin.',
        longDescription: 'Sîstemên me yên ERP tevahiya karên beşên pargîdaniyê di navendek fermandariyê de yek dikin.',
        category: 'Enterprise',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
        features: ['Şopandina Envanterê', 'Faturakirina Otomatîk', 'Rêvebiriya Karmendan'],
        domains: [{ name: 'Operasyon', description: 'Hêsankirina karên rojane.' }],
        pillars: [
          { title: 'Serweriya Operasyonel', description: 'Kontrola tevahî li ser mantiqê hundurîn.' },
          { title: 'Hesabkirina Bê-Çewtî', description: 'Hevdengkirina envanter û darayî.' }
        ],
        roadmap: [
          { label: 'Keşfkirin', duration: '', detail: 'Nexşekirina xalên kêşeyên rêxistinî.' },
          { label: 'Endezyariya Yekeyê', duration: '', detail: 'Avakirina pêkhateyên modular.' }
        ],
        benchmarks: [],
        techStack: ['Node.js', 'Postgres'],
        businessValue: 'Di sala yekem de lêçûnên îdarî heta 40% kêm bikin.'
    },
    {
        id: 'ecommerce',
        name: 'Endezyariya Ecommerce a Global',
        tagline: 'Sîstemên bazirganiyê yên veguherîna bilind ji bo qada global.',
        description: 'Dikanên mezinbûyî bi lojîstîka herêmî ya tevlihev re yekbûyî.',
        longDescription: 'Em motorên bazirganiyê yên ji bo mezinkirina zêde hatine sêwirandin ava dikin.',
        category: 'Development',
        imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000',
        features: ['Dergeha Pir-Pere', 'Mantiqê Bacê yê Rastî', 'Pêşniyarên AI'],
        domains: [{ name: 'Retail', description: 'Mezinkirina firotanên dîjîtal.' }],
        pillars: [
          { title: 'Checkout Bê-Kêşe', description: 'Rêyên sêwirandî ji bo veguherîna bilind.' },
          { title: 'Lojîstîka Herêmî', description: 'Yekbûna kûr bi peydakiroxên barkirinê re.' }
        ],
        roadmap: [
          { label: 'Analîza Bazarê', duration: '', detail: 'Tespîtkirina hewcedariyên dravdanê.' },
          { label: 'Avakirina Platformê', duration: '', detail: 'Pêşvebirina motor û ewlehiyê.' }
        ],
        benchmarks: [],
        techStack: ['Next.js', 'Stripe'],
        businessValue: 'Zêdebûna rêjeya veguherînê ya bi qasî 60%.'
    },
    {
        id: 'crm',
        name: 'Çareseriyên CRM ên Aqilmend',
        tagline: 'Rêyên kûr ên mişterî ji bo lezkirina dahatê.',
        description: 'Reftarê pêşbînî bikin û çerxên firotanê otomatîk bikin.',
        longDescription: 'CRM-a me motorek dahatê ye ku analîzên reftarî bikar tîne.',
        category: 'Enterprise',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000',
        features: ['Nirxandina Lead', 'Marketinga Otomatîk', 'Şopandina Jiyanê'],
        domains: [{ name: 'Firotan', description: 'Optimîzekirina funnel.' }],
        pillars: [
          { title: 'Nirxandina Pêşbînî', description: 'Algorîtmayên ji bo rêzkirina leadan.' },
          { title: 'Leza Firotanê', description: 'Otomasyona li ser bingeha sînyalan.' }
        ],
        roadmap: [
          { label: 'Audit', duration: '', detail: 'Analîzkirina dema çerxa firotanê.' },
          { label: 'Otomasyon', duration: '', detail: 'Sazkirina kampaniyan.' }
        ],
        benchmarks: [],
        techStack: ['Node.js', 'Postgres'],
        businessValue: '30% zêdebûna hilberîna tîmê firotanê.'
    },
    {
        id: 'uiux',
        name: 'Sêwirana UI/UX a Mîmarî',
        tagline: 'Sêwirana zanistî ji bo web-a dîjîtal a bilind.',
        description: 'Sêwirana baldar li ser veguherîn û entegrasyona brandê.',
        longDescription: 'Em sêwirana wekî dîsîplînek endezyariyê dibînin ku psîkolojiya zanistî bikar tîne.',
        category: 'Design',
        imageUrl: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=1000',
        features: ['Nexşekirina Reftarî', 'Sîstemên Sêwirandinê', 'UI-ya Performansê'],
        domains: [{ name: 'Nasname', description: 'Hebûna dîjîtal a premium.' }],
        pillars: [
          { title: 'Optimîzasyona Zanistî', description: 'Hînbûna sifir ji bo bikarhêner.' },
          { title: 'UI-ya Performansê', description: 'Navberên ultra-sivik.' }
        ],
        roadmap: [
          { label: 'Mantiqê UX', duration: '', detail: 'Nexşekirina rêwîtiyê.' },
          { label: 'Prototîpa Interaktîf', duration: '', detail: 'Valîdasyona High-fi.' }
        ],
        benchmarks: [],
        techStack: ['Figma', 'React'],
        businessValue: 'Mişterî zêdebûna 50% di dema rûniştinê de dibînin.'
    },
    {
        id: 'seo',
        name: 'Endezyariya SEO û Dîtinê',
        tagline: 'Serweriya stratejîk a lêgerînê bi optimîzasyona teknîkî.',
        description: 'Piştrast bikin ku branda we trafîka organîk a giran digire.',
        longDescription: 'Optimîzasyona lêgerînê pirsgirêkek mîmarî ye. Em ji asta serverê ve optimîze dikin.',
        category: 'Consulting',
        imageUrl: 'https://images.unsplash.com/photo-1562577353-f71e93b5a63c?auto=format&fit=crop&q=80&w=1000',
        features: ['Core Web Vitals', 'Indeksirina Semantîk', 'Avakirina Otorîteyê'],
        domains: [{ name: 'Mezinbûn', description: 'Berfirehkirina gihîştina organîk.' }],
        pillars: [
          { title: 'Otorîteya Teknîkî', description: 'Struktura koda kamil ji bo botên lêgerînê.' },
          { title: 'Zanyariya Semantîk', description: 'Armanckirina komên niyeta bikarhêner.' }
        ],
        roadmap: [
          { label: 'Audita Binesaziyê', duration: '', detail: 'Analîzkirina çewtiyên crawlkirinê.' },
          { label: 'Kampanyaya Otorîteyê', duration: '', detail: 'Bihêzkirina rêzkirinên demdirêj.' }
        ],
        benchmarks: [],
        techStack: ['Next.js', 'Google Console'],
        businessValue: 'Pêdiviya bi reklamên bi pere heta 70% kêm bikin.'
    },
    {
        id: 'cyber',
        name: 'Ewlehiya Aqilmend (Cyber)',
        tagline: 'Parastina daneyên serwer ji bo cîhanek "zero-trust".',
        description: 'Parastina gefan a pêşketî ji bo amûrên krîtîk.',
        longDescription: 'Ewlehiya proaktîf ku daneyên we li her derê diparêze.',
        category: 'Security',
        imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
        features: ['Mîmariya Zero-Trust', 'Encryption-a Endpoint', 'Backupa Offline'],
        domains: [{ name: 'Parastin', description: 'Sîstemên proaktîf.' }],
        pillars: [
          { title: 'Protokola Zero-Trust', description: 'Mantiqê MFA ji bo her girêdanê.' },
          { title: 'Neytralîzekirina Gefan', description: 'Îzolasyona reftarî ya rastî.' }
        ],
        roadmap: [
          { label: 'Nirxandina Vulnerability', duration: '', detail: 'Testên penetrasyonê yên kontrolkirî.' },
          { label: 'Sazkirina Parastinê', duration: '', detail: 'Bihêzkirina rêveberiya nasnameyê.' }
        ],
        benchmarks: [],
        techStack: ['Cloudflare', 'Zero-Trust'],
        businessValue: 'Ewlehiya dawî ji bo hebûna weya dîjîtal.'
    },
    {
        id: 'api',
        name: 'API-ya Xwerû û Yekbûn',
        tagline: 'Sîstema demarî ya ji bo ekosîstema weya dîjîtal.',
        description: 'Middleware ji bo girêdana sîstemên nermalavê yên cuda.',
        longDescription: 'Em tevna girêdanê ava dikin ku dihêle sîstemên we daneyan rast û bilez parve bikin.',
        category: 'Development',
        imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1000',
        features: ['REST/GraphQL', 'Mantiqê Webhook', 'Ewlehiya OAuth'],
        domains: [{ name: 'Girêdan', description: 'Rakirina hevdengkirina manuwel.' }],
        pillars: [
          { title: 'Latensiya Kêm', description: 'Ji bo hevdengkirina kêlîkî hatiye endezyarkirin.' },
          { title: 'Mantiqê Auto-Healing', description: 'Mekanîzmayên retry ji bo çewtiyên torê.' }
        ],
        roadmap: [
          { label: 'Nexşekirina Endpoint', duration: '', detail: 'Tespîtkirina xalên rêwîtiyê.' },
          { label: 'Orkestrasyona Sync', duration: '', detail: 'Sazkirina pira dawî.' }
        ],
        benchmarks: [],
        techStack: ['Node.js', 'Go', 'GraphQL'],
        businessValue: 'Her sal bi hezaran demjimêrên karê manuwel rizgar dike.'
    },
    {
        id: 'infra-audit',
        name: 'Audita Tenduristiya Binesaziyê',
        tagline: 'Nirxandina pispor ji bo kêmkirina deynê teknîkî.',
        description: 'Analîzkirina hardware û nermalava weya niha.',
        longDescription: 'Audita forensîk a binesaziya IT ji bo tespîtkirina wendahî û rîskan.',
        category: 'Consulting',
        imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000',
        features: ['Vuln-Scanning', 'Optimîzasyona Lêçûnê', 'Nexşekirina Amûran'],
        domains: [{ name: 'Kêrhatî', description: 'Optimîzekirina çavkaniyan.' }],
        pillars: [
          { title: 'Tespîtkirina Wendahiyê', description: 'Rakirina lîsansên vala.' },
          { title: 'Plana Îstîqrarê', description: 'Nexşerêya nûjenkirinê ya 5 salan.' }
        ],
        roadmap: [
          { label: 'Scana Keşfê', duration: '', detail: 'Nexşekirina ekosîstema manuwel.' },
          { label: 'Rapora Stratejîk', duration: '', detail: 'Lîsteya pêşîniyên çareseriyê.' }
        ],
        benchmarks: [],
        techStack: [],
        businessValue: 'Audit bi gelemperî 20% lêçûnên IT-ê rizgar dikin.'
    },
    {
        id: 'mobile-eng',
        name: 'Endezyariya Serîlêdana Mobile',
        tagline: 'Tecrubeyên mobile yên performansa bilind ji bo iOS û Android.',
        description: 'App-ên bi baldarî li ser lez û tevlêbûna UX-ê hatine çêkirin.',
        longDescription: 'Tecrubeyên mobile yên ji bo pêşvebirina dilsoziyê û hêsankirina gihîştinê hatine sêwirandin.',
        category: 'Development',
        imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000',
        features: ['Performansa 60FPS', 'Synca Offline', 'Push Intelligence'],
        domains: [{ name: 'Mobile', description: 'Tevlêbûna rasterast.' }],
        pillars: [
          { title: 'Pêşî Offline', description: 'Kêrhatî ye heta bêyî sînyalê jî.' },
          { title: 'Sêwirana Persona', description: 'Rêberiya adetên bikarhêner.' }
        ],
        roadmap: [
          { label: 'Endezyariya Core', duration: '', detail: 'Avakirina koda cross-platform.' },
          { label: 'Testên Stresê', duration: '', detail: 'Optimîzekirina pîl û daneyan.' }
        ],
        benchmarks: [],
        techStack: ['React Native', 'Firebase'],
        businessValue: 'Nirxa jiyanê ya mişterî heta 300% zêde dike.'
    },
    {
        id: 'blockchain',
        name: 'Tomarên Zelal (Blockchain)',
        tagline: 'Teknolojiya ledger-a neguherbar ji bo baweriya operasyonel.',
        description: 'Şopandina ewle û nenavendî ji bo zincîra dabînkirinê.',
        longDescription: 'Ledger ji bo piştrastkirina ku tomarên weyên krîtîk qet nayên guhertin.',
        category: 'Blockchain',
        imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000',
        features: ['Smart Contracts', 'Audit-ên Neguherbar', 'Tokenization'],
        domains: [{ name: 'Bawerî', description: 'Tomarên verastkirî.' }],
        pillars: [
          { title: 'Rastiya Matematîkî', description: 'Guhertina "bawerî" bi "verastkirinê".' },
          { title: 'Şopa Auditê', description: 'Dîroka barkirinê ya ku nayê jêbirin.' }
        ],
        roadmap: [
          { label: 'Ledger Arch', duration: '', detail: 'Sêwirana modelên hîbrîd.' },
          { label: 'Yekbûna Sync', duration: '', detail: 'Girêdana bi ERP-ên kevn re.' }
        ],
        benchmarks: [],
        techStack: ['Solidity', 'Web3.js'],
        businessValue: 'Lêçûnên verastkirina yasayî radike û pêşî li sextekariyê digire.'
    },
    {
        id: 'cloud',
        name: 'Binesaziya Nûjen (Cloud)',
        tagline: 'Mîmariyên cloud yên performansa bilind ji bo asta global.',
        description: 'Hosting-a ewle û mantiqê serverless ji bo pêbaweriya 24/7.',
        longDescription: 'Sazkirinên cloud yên pir-herêmî ku bi bikarhênerên we re mezin dibin.',
        category: 'Cloud',
        imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
        features: ['Hubên Global', 'Scalinga Elastîk', 'Navenda Karesatê'],
        domains: [{ name: 'Binesazî', description: 'Pêbawerî di mezinbûnê de.' }],
        pillars: [
          { title: '99.99% Uptime', description: 'Mîmariyên global yên zêdekirî.' },
          { title: 'Lêçûna Elastîk', description: 'Kêmkirina çavkaniyan di dema aram de.' }
        ],
        roadmap: [
          { label: 'Sêwirana Koçberiyê', duration: '', detail: 'Veguhestina daneyan bêyî sekinandin.' },
          { label: 'Optimîzasyon', duration: '', detail: 'Optimîzekirina performansa berdewam.' }
        ],
        benchmarks: [],
        techStack: ['AWS', 'Terraform', 'K8s'],
        businessValue: 'Lêçûnên hardware bi elastîkiyeta operasyonel diguherîne.'
    }
  ]
};

export const JOURNAL_ARTICLES: Record<Language, JournalArticle[]> = {
  en: [
    {
      id: 1,
      title: 'Digital Transformation in Damascus',
      date: 'Jan 15, 2025',
      excerpt: 'How we rebuilt the infrastructure for a leading regional bank.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
      content: 'Detailed content about rebuilding bank infrastructure in Damascus.'
    }
  ],
  ar: [
    {
      id: 1,
      title: 'التحول الرقمي في دمشق',
      date: '١٥ يناير ٢٠٢٥',
      excerpt: 'كيف أعدنا بناء البنية التحتية لأحد البنوك الإقليمية الرائدة.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
      content: 'محتوى مفصل حول إعادة بناء البنية التحتية لأحد البنوك الإقليمية الرائدة في دمشق.'
    }
  ],
  ku: [
    {
      id: 1,
      title: 'Veguherîna Dîjîtal li Şamê',
      date: '15 Rêbendan 2025',
      excerpt: 'Me çawa binesaziya bankek herêmî ya pêşeng ji nû ve ava kir.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
      content: 'Naveroka berfireh li ser çawaniya me ji nû ve avakirina binesaziya ji bo bankek herêmî ya pêşeng li Şamê.'
    }
  ]
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Neural Hub',
    category: 'Home',
    price: 299,
    imageUrl: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&q=80&w=1000',
    description: 'Centralized home intelligence system.',
    features: ['Real-time monitoring', 'Edge processing']
  }
];

export const getServices = (lang: Language): Service[] => {
  return SERVICES_DATA[lang] && SERVICES_DATA[lang].length > 0 ? SERVICES_DATA[lang] : SERVICES_DATA.en;
};

export const BRAND_NAME = 'Syscomatics';
export const PRIMARY_COLOR = '#0037f3'; 
export const DARK_COLOR = '#0a0b0d';
