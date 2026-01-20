
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
    nav: { solutions: 'Solutions', strategy: 'Strategy', insights: 'Projects', brief: 'Project Brief' },
    hero: { 
      tagline: 'Architecting Digital Sovereignty', 
      title: 'Engineered for', 
      accent: 'Performance.', 
      sub: 'Empowering global organizations with high-performance systems designed for absolute stability and limitless scale.', 
      cta1: 'Our Solutions', 
      cta2: 'The Strategy' 
    },
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
    journal: { header: 'Featured Projects', sub: 'Proven Impact', back: 'Back', featured: 'Strategic Milestone', tactical: 'Case Studies', readTime: 'min read', exploreAll: 'Explore Project Archive' },
    inquiry: { title: 'Your Project', sub: 'Selection', empty: 'List is empty.', remove: 'Remove', initiate: 'Start Review', assessment: 'Expert reply in 24h', contact: 'Contact Info', name: 'Your Name', email: 'Email', org: 'Company', context: 'Details', submit: 'Send Request', back: 'Back', success: 'Thank You.', successSub: 'We will contact you soon.', scopes: 'Selected Services' },
    footer: { sub: 'Architecting sovereign digital futures.', nav: 'Navigation', exp: 'Expertise', newsletter: 'Subscribe', newsd: 'Get updates.', reg: 'Join Us', contact: 'Connect', address: 'Damascus, Syria', email: 'info@syscomatics.com', phone: '+963 932 255 512' },
    cookie: { title: 'Systems Protocol', desc: 'We utilize localized caching to ensure your Project Brief and language preferences persist across sessions.', accept: 'Accept Protocol', reject: 'Decline' }
  },
  ar: {
    nav: { solutions: 'الحلول', strategy: 'الاستراتيجية', insights: 'المشاريع', brief: 'ملخص المشروع' },
    hero: { 
      tagline: 'معمارية السيادة الرقمية', 
      title: 'هندسة من أجل', 
      accent: 'الأداء.', 
      sub: 'تمكين المؤسسات العالمية بأنظمة عالية الأداء مصممة للاستقرار المطلق والتوسع بلا حدود.', 
      cta1: 'حلولنا', 
      cta2: 'الاستراتيجية' 
    },
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
    journal: { header: 'أبرز المشاريع', sub: 'تأثير ملموس', back: 'العودة', featured: 'إنجاز استراتيجي', tactical: 'دراسات الحالة', readTime: 'دقائق', exploreAll: 'استكشف أرشيف المشاريع' },
    inquiry: { title: 'مشروعك', sub: 'الاختيار', empty: 'القائمة فارغة.', remove: 'إزالة', initiate: 'بدء المراجعة', assessment: 'رد خلال ٢٤ ساعة', contact: 'الاتصال', name: 'الاسم', email: 'البريد', org: 'الشركة', context: 'التفاصيل', submit: 'إرسال', back: 'العودة', success: 'شكراً لك.', successSub: 'سنتواصل معك قريباً.', scopes: 'الخدمات المختارة' },
    footer: { sub: 'بناء مستقبل رقمي سيادي.', nav: 'التنقل', exp: 'الخبرة', newsletter: 'اشترك', newsd: 'احصل على التحديثات.', reg: 'انضم إلينا', contact: 'تواصل', address: 'دمشق، سوريا', email: 'info@syscomatics.com', phone: '+963 932 255 512' },
    cookie: { title: 'بروتوكول الأنظمة', desc: 'نحن نستخدم التخزين المحلي لضمان استمرار ملخص مشروعك وتفضيلات اللغة الخاصة بك عبر الجلسات.', accept: 'قبول البروتوكول', reject: 'رفض' }
  },
  ku: {
    nav: { solutions: 'Çareserî', strategy: 'Stratejî', insights: 'Projeyên', brief: 'Kurteya Projeyê' },
    hero: { 
      tagline: 'Mîmariya Serweriya Dîjîtal', 
      title: 'Ji bo performansa', 
      accent: 'Hatiye Endezyarkirin.', 
      sub: 'Bihêzkirina rêxistinên global bi pergalên performansa bilind ên ku ji bo aramiya mutleq û pîvana bêsînor hatine sêwirandin.', 
      cta1: 'Çareseriyên Me', 
      cta2: 'Stratejî' 
    },
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
    services: { header: 'Çareserîyên Me', sub: 'Amûrên aqilmend ên ji bo pargîdanîyên nûjen hatine sêwirandin.', back: 'Vegere', spec: 'Pisporî di', pillars: 'Çima Ev Girîng e', roadmap: 'Nexşerêya Stratejîk', thesis: 'Teza Mîmarî', value: 'Nirxa Karsaziya Stratejîk', briefAdd: 'Li Kurteyê Zêde Bike', explore: 'Lêkolîn Bike' },
    journal: { header: 'Projeyên Taybet', sub: 'Bandora îsbatkirî', back: 'Vegere', featured: 'Nîşana Stratejîk', tactical: 'Nimûneyên Serkeftinê', readTime: 'deqe xwendin', exploreAll: 'Arşîva Projeyan Bibîne' },
    inquiry: { title: 'Projeya We', sub: 'Bijartin', empty: 'Lîste vala ye.', remove: 'Rake', initiate: 'Nirxandinê Destpê Bike', assessment: 'Bersiva pispor di 24 demjimêran de', contact: 'Agahdariya Têkiliyê', name: 'Navê We', email: 'E-peyam', org: 'Pargîdanî', context: 'Kitekit', submit: 'Daxwazê Bişîne', back: 'Vegere', success: 'Spas.', successSub: 'Em ê di nêzîk de bi we re têkilî deynin.', scopes: 'Xizmetên Bijartî' },
    footer: { sub: 'Avakirina paşerojên dîjîtal ên serwer.', nav: 'Navîgasyon', exp: 'Pisporî', newsletter: 'Abone Bibe', newsd: 'Nûçeyan bistînin.', reg: 'Tevlî Me Bibe', contact: 'Têkilî', address: 'Şam, Sûriye', email: 'info@syscomatics.com', phone: '+963 932 255 512' },
    cookie: { title: 'Protokola Sîsteman', desc: 'Em cachkirina herêmî bikar tînin da ku Kurteya Projeya we û tercîhên zimanê we di her rûniştinê de bimînin.', accept: 'Protokolê Pejirîne', reject: 'Red Bike' }
  }
};

export const SERVICES_DATA: Record<Language, Service[]> = {
  en: [
    {
      id: 'erp',
      name: 'The Company Brain (ERP)',
      tagline: 'One center for all your company data.',
      description: 'A shared system where money, stock, and staff info work together.',
      longDescription: 'An ERP is like a central nervous system for your business. Instead of having separate files for sales and accounting, everything is in one place. Everyone sees the same facts, leading to fewer mistakes and faster decisions.',
      category: 'Enterprise',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
      features: ['Real-time Inventory Management', 'Automated Multi-currency Accounting', 'Self-service Employee Portals', 'Advanced Operational Reporting'],
      domains: [{ name: 'Operations', description: 'Smoothing daily workflows.' }, { name: 'Finance', description: 'Monetary stability.' }, { name: 'Human Resources', description: 'People management.' }, { name: 'Data Intelligence', description: 'Analytic insights.' }],
      pillars: [
        { title: 'Single Source of Truth', description: 'Every department looks at the same synchronized data.' },
        { title: 'Operational Efficiency', description: 'Remove manual copying between different files.' },
        { title: 'Regulatory Compliance', description: 'Built-in checks for local and international standards.' },
        { title: 'Scalable Architecture', description: 'Systems that grow alongside your business complexity.' }
      ],
      roadmap: [
        { label: 'Discovery Audit', duration: 'Week 1-2', detail: 'Mapping all existing business processes and pain points.' },
        { label: 'Architecture Blueprint', duration: 'Week 3-4', detail: 'Designing the custom ERP schema for your specific industry.' },
        { label: 'Data Migration', duration: 'Week 5-8', detail: 'Safely moving existing records into the unified system.' },
        { label: 'Operational Command', duration: 'Week 9+', detail: 'Final staff training and full system deployment.' }
      ],
      benchmarks: [],
      techStack: ['Node.js', 'PostgreSQL', 'SAP Integration'],
      businessValue: 'Stop losing money to double-entry errors and slow paperwork.'
    },
    {
      id: 'ecommerce',
      name: 'Digital Storefront (Ecommerce)',
      tagline: 'A store that sells while you sleep.',
      description: 'A powerful website that handles payments and tracks deliveries globally.',
      longDescription: 'Ecommerce is more than a website; it is a selling machine. It connects your products to customers anywhere in the world, processes their payments securely, and helps you manage shipping without the headache of manual tracking.',
      category: 'Development',
      imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000',
      features: ['Secure Global Payment Processing', 'Mobile-Responsive Shopping UX', 'Automated Logistics & Shipping Sync', 'Integrated Marketing & SEO Tools'],
      domains: [{ name: 'Retail', description: 'Scaling digital sales.' }, { name: 'Logistics', description: 'Delivery tracking.' }, { name: 'Marketing', description: 'Customer reach.' }, { name: 'Customer Service', description: 'Post-purchase support.' }],
      pillars: [
        { title: 'Consumer Trust', description: 'Safe payment gateways that protect sensitive buyer data.' },
        { title: 'Performance at Scale', description: 'High-speed page loads to maximize conversion rates.' },
        { title: 'Omnichannel Ready', description: 'Synchronize sales across web, mobile, and social media.' },
        { title: 'Conversion Focus', description: 'UI designs engineered to minimize cart abandonment.' }
      ],
      roadmap: [
        { label: 'UX Strategy', duration: 'Week 1', detail: 'Defining the optimal customer purchasing journey.' },
        { label: 'Platform Engineering', duration: 'Week 2-4', detail: 'Building the core storefront and catalog logic.' },
        { label: 'Payment Integration', duration: 'Week 5', detail: 'Setting up secure gateways and regional logistics.' },
        { label: 'Performance Audit', duration: 'Week 6', detail: 'Stress testing and SEO optimization for launch.' }
      ],
      benchmarks: [],
      techStack: ['Next.js', 'Stripe', 'Headless CMS'],
      businessValue: 'Reach customers 24/7 beyond your physical location.'
    },
    {
      id: 'crm',
      name: 'Customer Memory (CRM)',
      tagline: 'Never forget a customer or an opportunity.',
      description: 'A system to track every lead and conversation for your sales team.',
      longDescription: 'A CRM is like a professional memory. It stores every email, phone call, and meeting you have with a client. This helps your sales team know exactly when to call someone back and what they need, turning "maybe" into "yes."',
      category: 'Enterprise',
      imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000',
      features: ['Dynamic Sales Pipeline Tracking', 'Centralized Communication History', 'Automated Follow-up Reminders', 'AI-Driven Lead Scoring'],
      domains: [{ name: 'Sales', description: 'Optimizing the funnel.' }, { name: 'Marketing', description: 'Campaign targeting.' }, { name: 'Support', description: 'Relationship health.' }, { name: 'Analytics', description: 'Revenue forecasting.' }],
      pillars: [
        { title: 'Lead Intelligence', description: 'Convert data into actionable sales strategies.' },
        { title: 'Team Collaboration', description: 'Shared insights across sales and support departments.' },
        { title: 'Client Retention', description: 'Proactive tools to keep long-term customers engaged.' },
        { title: 'Process Automation', description: 'Reduce administrative overhead for your sales staff.' }
      ],
      roadmap: [
        { label: 'CRM Assessment', duration: 'Week 1', detail: 'Analyzing current sales cycles and contact methods.' },
        { label: 'System Configuration', duration: 'Week 2-3', detail: 'Customizing fields and pipelines for your workflow.' },
        { label: 'Data Onboarding', duration: 'Week 4', detail: 'Importing historical client data and email sync.' },
        { label: 'Sales Optimization', duration: 'Week 5+', detail: 'Automating repetitive outreach and reporting.' }
      ],
      benchmarks: [],
      techStack: ['Salesforce', 'HubSpot API', 'Python'],
      businessValue: 'Increase sales by following up on every lead at the perfect time.'
    },
    {
      id: 'uiux',
      name: 'Digital Architecture (UI/UX)',
      tagline: 'Making software easy and beautiful to use.',
      description: 'Strategic design that guides users to take the right action.',
      longDescription: 'UI/UX is the difference between a tool that is frustrating and one that is a joy to use. We design the "look" (UI) and the "feel" (UX) so that your users never get confused and always find what they are looking for quickly.',
      category: 'Design',
      imageUrl: 'https://images.unsplash.com/photo-1576595580361-90a855b84b20?q=80&w=1974&auto=format&fit=crop',
      features: ['In-depth User Research & Testing', 'Modern Visual Identity Design', 'Interactive High-Fidelity Prototypes', 'Full Design System Documentation'],
      domains: [{ name: 'Identity', description: 'Premium digital presence.' }, { name: 'Product', description: 'Software usability.' }, { name: 'Brand', description: 'Visual storytelling.' }, { name: 'Accessibility', description: 'Inclusive design.' }],
      pillars: [
        { title: 'Cognitive Clarity', description: 'Simple layouts that require zero training to understand.' },
        { title: 'Brand Loyalty', description: 'Design that creates emotional connections with users.' },
        { title: 'Accessibility First', description: 'Ensuring your digital product works for everyone.' },
        { title: 'Continuous Iteration', description: 'Using data to constantly improve the user experience.' }
      ],
      roadmap: [
        { label: 'Discovery Phase', duration: 'Week 1', detail: 'Defining user personas and business objectives.' },
        { label: 'Wireframe Blueprints', duration: 'Week 2-3', detail: 'Building the structural skeleton of the application.' },
        { label: 'Visual Design', duration: 'Week 4-5', detail: 'Applying colors, typography, and brand aesthetics.' },
        { label: 'Design Handoff', duration: 'Week 6', detail: 'Final assets and system documentation for developers.' }
      ],
      benchmarks: [],
      techStack: ['Figma', 'Adobe Creative Suite', 'Principle'],
      businessValue: 'Reduce user support calls by making the software obvious to use.'
    },
    {
      id: 'seo',
      name: 'Digital Signage (SEO)',
      tagline: 'Be the first thing people see on Google.',
      description: 'Technical and content work to put your brand at the top of search.',
      longDescription: 'SEO is like making sure your shop is on the busiest street in the world. We optimize your website code and content so that when people search for what you do, your name appears first. It is the best way to get free, high-quality traffic.',
      category: 'Consulting',
      imageUrl: 'https://images.unsplash.com/photo-1709281847802-9aef10b6d4bf?q=80&w=1932&auto=format&fit=crop',
      features: ['Content & Keyword Strategy', 'Technical Speed Optimization', 'Authority Backlink Building', 'Local Search Dominance'],
      domains: [{ name: 'Growth', description: 'Increasing organic reach.' }, { name: 'Technical', description: 'Core web vitals.' }, { name: 'Content', description: 'Relevant authority.' }, { name: 'Local', description: 'Regional visibility.' }],
      pillars: [
        { title: 'Digital Authority', description: 'Making your site a trusted leader in your industry.' },
        { title: 'Long-term Equity', description: 'Build traffic that stays even when ads stop running.' },
        { title: 'Strategic Ranking', description: 'Targeting keywords that actually lead to sales.' },
        { title: 'Semantic Context', description: 'Optimization for intent, not just keyword density.' }
      ],
      roadmap: [
        { label: 'Technical Audit', duration: 'Week 1', detail: 'Finding and fixing backend issues slowing you down.' },
        { label: 'Keyword Research', duration: 'Week 2', detail: 'Identifying high-value search terms for your niche.' },
        { label: 'On-page Execution', duration: 'Week 3-4', detail: 'Optimizing titles, meta tags, and high-impact content.' },
        { label: 'Growth Monitoring', duration: 'Ongoing', detail: 'Monthly reporting and adaptive strategy updates.' }
      ],
      benchmarks: [],
      techStack: ['Semrush', 'Ahrefs', 'Search Console'],
      businessValue: 'Save thousands on ads by getting organic traffic instead.'
    },
    {
      id: 'cyber',
      name: 'The Digital Fortress (Cyber)',
      tagline: 'Lock your data away from hackers.',
      description: 'Modern security to protect your company\'s secrets and money.',
      longDescription: 'Cybersecurity is the wall around your digital business. We set up systems that monitor for "intruders" and encrypt your sensitive data. It ensures that your private company info stays private and your systems never get locked by ransoms.',
      category: 'Security',
      imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
      features: ['Proactive Threat Monitoring', 'Military-Grade Data Encryption', 'Zero-Trust Access Architecture', 'Incident Response Planning'],
      domains: [{ name: 'Defense', description: 'Proactive protection.' }, { name: 'Privacy', description: 'Data protection.' }, { name: 'Compliance', description: 'Legal safety.' }, { name: 'Recovery', description: 'Resilience.' }],
      pillars: [
        { title: 'Preventative Shielding', description: 'Stopping cyber attacks before they infiltrate your network.' },
        { title: 'Business Resilience', description: 'Ensuring operations continue even during an incident.' },
        { title: 'Data Sovereignty', description: 'Full control over where and how your data is stored.' },
        { title: 'Security Awareness', description: 'Empowering your staff to be the first line of defense.' }
      ],
      roadmap: [
        { label: 'Vulnerability Scan', duration: 'Week 1', detail: 'Testing every digital entrance for weaknesses.' },
        { label: 'Network Fortification', duration: 'Week 2-3', detail: 'Installing firewalls, VPNs, and advanced encryption.' },
        { label: 'Access Controls', duration: 'Week 4', detail: 'Implementing multi-factor auth and role-based permissions.' },
        { label: 'Security Handover', duration: 'Week 5+', detail: 'Final protocol training and 24/7 monitoring setup.' }
      ],
      benchmarks: [],
      techStack: ['IDS/IPS', 'AES-256', 'SIEM Platforms'],
      businessValue: 'Avoid massive lawsuits and brand damage from data leaks.'
    },
    {
      id: 'api',
      name: 'The Software Bridge (API)',
      tagline: 'Make your apps talk to each other.',
      description: 'Connect different software so data flows automatically.',
      longDescription: 'APIs are like bridges between islands of software. If you have an ERP and a website, we build the bridge so that when someone buys a product, your stock level updates automatically. No more manual copying and pasting between apps.',
      category: 'Development',
      imageUrl: 'https://images.unsplash.com/photo-1763568258208-a5af30d5a31b?q=80&w=2070&auto=format&fit=crop',
      features: ['Real-time Data Synchronization', 'Multi-app Integration Hubs', 'Encrypted Data Transfer', 'High-Performance API Gateways'],
      domains: [{ name: 'Connectivity', description: 'Eliminating manual sync.' }, { name: 'Automation', description: 'Seamless flows.' }, { name: 'Systems', description: 'Interoperability.' }, { name: 'Scalability', description: 'Message queuing.' }],
      pillars: [
        { title: 'Total Automation', description: 'Systems that update each other without human intervention.' },
        { title: 'Data Integrity', description: 'Ensuring information remains consistent across all apps.' },
        { title: 'Extensibility', description: 'Easy connection of new software as your business grows.' },
        { title: 'Endpoint Security', description: 'Protecting the "gates" where your software talks.' }
      ],
      roadmap: [
        { label: 'Context Mapping', duration: 'Week 1', detail: 'Identifying exactly what data needs to move and when.' },
        { label: 'Logic Development', duration: 'Week 2-4', detail: 'Building the specific transformation and sync rules.' },
        { label: 'Stress Testing', duration: 'Week 5', detail: 'Ensuring the bridge stays up during high traffic.' },
        { label: 'Live Connection', duration: 'Week 6+', detail: 'Switching on the automated bridge for production.' }
      ],
      benchmarks: [],
      techStack: ['Go', 'gRPC', 'RabbitMQ'],
      businessValue: 'Eliminate 90% of manual data entry work.'
    },
    {
      id: 'infra-audit',
      name: 'System Doctor (Audit)',
      tagline: 'Is your tech healthy or just expensive?',
      description: 'A check-up for your IT setup to find waste and risks.',
      longDescription: 'Just like a physical exam, a system audit looks for hidden problems. We check your servers and software to find what is slow, what is insecure, and what you are paying for but not using. We give you a plan to fix it all.',
      category: 'Consulting',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000',
      features: ['Deep Cost-Benefit Analysis', 'Comprehensive Safety Checks', 'Performance & Load Testing', 'IT Resource Lifecycle Review'],
      domains: [{ name: 'Efficiency', description: 'IT resource optimization.' }, { name: 'Budget', description: 'Cost reduction.' }, { name: 'Security', description: 'Risk mitigation.' }, { name: 'Future', description: 'Upgrade roadmap.' }],
      pillars: [
        { title: 'Lean Optimization', description: 'Achieving maximum performance with minimum waste.' },
        { title: 'Hidden Risk Discovery', description: 'Finding threats before they become costly crises.' },
        { title: 'Financial Strategy', description: 'Turning IT from a cost center into a value driver.' },
        { title: 'Sovereign Control', description: 'Removing dependence on unnecessary expensive vendors.' }
      ],
      roadmap: [
        { label: 'Systems Inventory', duration: 'Week 1', detail: 'Cataloging every server, license, and line of code.' },
        { label: 'Analysis Phase', duration: 'Week 2', detail: 'Running performance tests and cost reviews.' },
        { label: 'Strategic Prescription', duration: 'Week 3', detail: 'A detailed list of critical fixes and savings.' },
        { label: 'Execution Support', duration: 'Ongoing', detail: 'Guiding your team through the cleanup process.' }
      ],
      benchmarks: [],
      techStack: ['Infrastructure as Code', 'Trivy', 'Cost Optimization'],
      businessValue: 'Usually finds 20% savings in monthly IT bills.'
    },
    {
      id: 'mobile-eng',
      name: 'Business in Hand (Mobile)',
      tagline: 'Put your company in your customer\'s pocket.',
      description: 'Fast, easy-to-use apps for iPhone and Android.',
      longDescription: 'Mobile apps are about being close to your customer. We build apps that allow your clients to buy, book, or chat with you from anywhere. They are designed to work smoothly even on slower connections and feel fast and natural.',
      category: 'Development',
      imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000',
      features: ['Offline-Ready Capabilities', 'Custom Push Notifications', 'Biometric Security Sync', 'Cross-Platform Performance'],
      domains: [{ name: 'Mobile', description: 'Direct engagement.' }, { name: 'Product', description: 'User retention.' }, { name: 'Sales', description: 'Anywhere access.' }, { name: 'Support', description: 'In-app chat.' }],
      pillars: [
        { title: 'Hyper-Engagement', description: 'Stay top-of-mind with a permanent home screen icon.' },
        { title: 'Frictionless UX', description: 'Interfaces designed for one-handed operation and speed.' },
        { title: 'System Reliability', description: 'Apps that work perfectly even on weak network signals.' },
        { title: 'Secure Environment', description: 'Protecting mobile transactions with native security.' }
      ],
      roadmap: [
        { label: 'Mobile Architecture', duration: 'Week 1', detail: 'Designing the app logic and data requirements.' },
        { label: 'Core Engineering', duration: 'Week 2-6', detail: 'Coding the native or cross-platform features.' },
        { label: 'User Beta Test', duration: 'Week 7', detail: 'Testing with real users for final UX refinements.' },
        { label: 'Store Deployment', duration: 'Week 8', detail: 'Navigating Apple and Google submission processes.' }
      ],
      benchmarks: [],
      techStack: ['Flutter', 'Firebase', 'GraphQL'],
      businessValue: 'Make it 10x easier for customers to interact with you.'
    },
    {
      id: 'blockchain',
      name: 'Unchangeable Records (Blockchain)',
      tagline: 'Trust that cannot be faked.',
      description: 'A digital ledger where records are permanent and transparent.',
      longDescription: 'Blockchain is a way to record info so it can never be deleted or changed. This is perfect for contracts, supply chains, or tracking valuable items. It creates total trust between parties because the "book" cannot be lied to.',
      category: 'Blockchain',
      imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000',
      features: ['Automated Smart Contracts', 'Transparent Supply Chain Tracking', 'Sovereign Digital Identity', 'Verifiable Asset Records'],
      domains: [{ name: 'Trust', description: 'Verifiable records.' }, { name: 'Finance', description: 'DeFi protocols.' }, { name: 'Ops', description: 'Traceability.' }, { name: 'Legal', description: 'Immutable contracts.' }],
      pillars: [
        { title: 'Absolute Immutability', description: 'What is written is written forever and cannot be forged.' },
        { title: 'Radical Transparency', description: 'Every party can verify the history without middle-men.' },
        { title: 'Efficiency of Trust', description: 'Remove the need for expensive third-party verification.' },
        { title: 'Decentralized Resilience', description: 'No single point of failure for your critical data.' }
      ],
      roadmap: [
        { label: 'Protocol Strategy', duration: 'Week 1-2', detail: 'Identifying the optimal blockchain for your use case.' },
        { label: 'Contract Dev', duration: 'Week 3-5', detail: 'Coding the logic that automates your agreements.' },
        { label: 'Security Audit', duration: 'Week 6-7', detail: 'Mathematical verification of contract safety.' },
        { label: 'Node Setup', duration: 'Week 8+', detail: 'Deploying the ledger to the secure network.' }
      ],
      benchmarks: [],
      techStack: ['Solidity', 'Hyperledger Fabric', 'Rust'],
      businessValue: 'Eliminate the cost of middle-men and verification lawyers.'
    },
    {
      id: 'cloud',
      name: 'The Scalable Sky (Cloud)',
      tagline: 'Rent power instead of buying hardware.',
      description: 'Hosting your software on global servers that grow with you.',
      longDescription: 'Cloud computing means your business lives on the internet. Instead of buying expensive servers that get old, you use powerful global networks. If your business grows tomorrow, your servers grow with you instantly without buying anything new.',
      category: 'Cloud',
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
      features: ['Auto-Scaling Computing Power', 'Global Content Distribution', 'Disaster Recovery Backups', 'Infrastructure as Code (IaC)'],
      domains: [{ name: 'Infrastructure', description: 'Reliable foundations.' }, { name: 'Operations', description: 'Maintenance-free.' }, { name: 'Growth', description: 'Limitless scale.' }, { name: 'Stability', description: 'High availability.' }],
      pillars: [
        { title: 'Limitless Elasticity', description: 'Pay for what you use, scale up for thousands instantly.' },
        { title: 'Mission Resilience', description: 'If one data center fails, another takes over in seconds.' },
        { title: 'Zero Maintenance', description: 'Focus on your business while we manage the hardware.' },
        { title: 'Universal Speed', description: 'Fast access for users anywhere in the world.' }
      ],
      roadmap: [
        { label: 'Cloud Assessment', duration: 'Week 1', detail: 'Evaluating current hardware and server needs.' },
        { label: 'Migration Strategy', duration: 'Week 2', detail: 'Designing the move with zero downtime.' },
        { label: 'Environment Build', duration: 'Week 3-4', detail: 'Provisioning the high-performance global network.' },
        { label: 'Traffic Switch', duration: 'Week 5', detail: 'Live cutover to the scalable cloud infrastructure.' }
      ],
      benchmarks: [],
      techStack: ['Terraform', 'Docker', 'AWS Lambda'],
      businessValue: 'Save thousands on hardware and never worry about crashes.'
    }
  ],
  ar: [
    {
        id: 'erp',
        name: 'دماغ الشركة (ERP)',
        tagline: 'مركز واحد لكل بيانات شركتك.',
        description: 'نظام مشترك يربط المال، المخزون، والموظفين معاً.',
        longDescription: 'نظام ERP هو بمثابة الجهاز العصبي المركزي لعملك. بدلاً من وجود ملفات منفصلة للمبيعات والمحاسبة، يكون كل شيء في مكان واحد. يرى الجميع نفس الحقائق، مما يؤدي إلى أخطاء أقل وقرارات أسرع.',
        category: 'Enterprise',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
        features: ['إدارة المخزون لحظياً', 'محاسبة آلية متعددة العملات', 'بوابات الخدمة الذاتية للموظفين', 'تقارير تشغيلية متقدمة'],
        domains: [{ name: 'العمليات', description: 'تسهيل سير العمل.' }, { name: 'المالية', description: 'الاستقرار المالي.' }, { name: 'الموارد البشرية', description: 'إدارة الكوادر.' }, { name: 'ذكاء البيانات', description: 'الرؤى التحليلية.' }],
        pillars: [
          { title: 'مصدر وحيد للحقيقة', description: 'كل الأقسام ترى نفس البيانات المتزامنة.' },
          { title: 'الكفاءة التشغيلية', description: 'إلغاء النسخ اليدوي بين الملفات المختلفة.' },
          { title: 'الامتثال التنظيمي', description: 'فحوصات مدمجة للمعايير المحلية والدولية.' },
          { title: 'معمارية قابلة للتوسع', description: 'أنظمة تنمو مع تزايد تعقيد أعمالك.' }
        ],
        roadmap: [
          { label: 'تدقيق الاكتشاف', duration: 'أسبوع ١-٢', detail: 'رسم خرائط جميع العمليات الحالية ونقاط الألم.' },
          { label: 'مخطط المعمارية', duration: 'أسبوع ٣-٤', detail: 'تصميم نظام ERP مخصص لصناعتك المحددة.' },
          { label: 'ترحيل البيانات', duration: 'أسبوع ٥-٨', detail: 'نقل السجلات الحالية بأمان إلى النظام الموحد.' },
          { label: 'القيادة التشغيلية', duration: 'أسبوع ٩+', detail: 'التدريب النهائي للموظفين والنشر الكامل للنظام.' }
        ],
        benchmarks: [],
        techStack: ['Node.js', 'PostgreSQL', 'SAP Integration'],
        businessValue: 'توقف عن خسارة المال بسبب أخطاء الإدخال المكرر والورقيات البطيئة.'
    },
    {
        id: 'ecommerce',
        name: 'المتجر الرقمي (Ecommerce)',
        tagline: 'متجر يبيع بينما أنت نائم.',
        description: 'موقع قوي يتعامل مع المدفوعات ويتتبع الشحن عالمياً.',
        longDescription: 'التجارة الإلكترونية هي أكثر من مجرد موقع؛ إنها آلة بيع. تربط منتجاتك بالعملاء في أي مكان في العالم، وتعالج مدفوعاتهم بأمان، وتساعدك على إدارة الشحن دون صداع التتبع اليدوي.',
        category: 'Development',
        imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000',
        features: ['معالجة المدفوعات العالمية الآمنة', 'تجربة تسوق متوافقة مع الموبايل', 'ربط الشحن والخدمات اللوجستية آلياً', 'أدوات تسويق وتحسين محركات البحث مدمجة'],
        domains: [{ name: 'التجزئة', description: 'توسيع المبيعات الرقمية.' }, { name: 'اللوجستيات', description: 'تتبع الشحن.' }, { name: 'التسويق', description: 'الوصول للعملاء.' }, { name: 'خدمة العملاء', description: 'دعم ما بعد البيع.' }],
        pillars: [
          { title: 'ثقة المستهلك', description: 'بوابات دفع آمنة تحمي بيانات المشتري الحساسة.' },
          { title: 'الأداء عند التوسع', description: 'سرعة تحميل عالية لزيادة معدلات التحويل.' },
          { title: 'جاهزية القنوات المتعددة', description: 'مزامنة المبيعات عبر الويب والموبايل والتواصل.' },
          { title: 'التركيز على التحويل', description: 'واجهات مصممة لتقليل التخلي عن السلة.' }
        ],
        roadmap: [
          { label: 'استراتيجية UX', duration: 'أسبوع ١', detail: 'تحديد رحلة شراء العميل المثلى.' },
          { label: 'هندسة المنصة', duration: 'أسبوع ٢-٤', detail: 'بناء منطق المتجر والكتالوج الأساسي.' },
          { label: 'ربط المدفوعات', duration: 'أسبوع ٥', detail: 'إعداد بوابات آمنة والخدمات اللوجستية.' },
          { label: 'تدقيق الأداء', duration: 'أسبوع ٦', detail: 'اختبار الجهد وتحسين SEO للإطلاق.' }
        ],
        benchmarks: [],
        techStack: ['Next.js', 'Stripe', 'Headless CMS'],
        businessValue: 'الوصول للعملاء ٢٤/٧ خارج حدود موقعك الجغرافي.'
    },
    {
        id: 'crm',
        name: 'ذاكرة العملاء (CRM)',
        tagline: 'لا تنسَ عميلاً أو فرصة بيع أبداً.',
        description: 'نظام لتتبع كل محادثة وفرصة لفريق المبيعات.',
        longDescription: 'نظام CRM هو بمثابة ذاكرة احترافية. يخزن كل بريد إلكتروني، مكالمة هاتفية، واجتماع مع العميل. يساعد هذا فريقك على معرفة متى يتصلون بالعميل وماذا يحتاج بالضبط، مما يحول "ربما" إلى "نعم".',
        category: 'Enterprise',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000',
        features: ['تتبع ديناميكي لقمع المبيعات', 'تاريخ مراسلات مركزي وموحد', 'تنبيهات متابعة آلية وذكية', 'تقييم العملاء المحتملين بالذكاء الاصطناعي'],
        domains: [{ name: 'المبيعات', description: 'تحسين القمع.' }, { name: 'التسويق', description: 'استهداف الحملات.' }, { name: 'الدعم', description: 'صحة العلاقات.' }, { name: 'التحليلات', description: 'توقع الإيرادات.' }],
        pillars: [
          { title: 'ذكاء العملاء', description: 'تحويل البيانات إلى استراتيجيات مبيعات فعالة.' },
          { title: 'تعاون الفريق', description: 'رؤى مشتركة بين أقسام المبيعات والدعم.' },
          { title: 'الاحتفاظ بالعملاء', description: 'أدوات استباقية لإبقاء العملاء منخرطين.' },
          { title: 'أتمتة العمليات', description: 'تقليل الأعباء الإدارية عن كاهل فريق المبيعات.' }
        ],
        roadmap: [
          { label: 'تقييم CRM', duration: 'أسبوع ١', detail: 'تحليل دورات المبيعات وطرق الاتصال الحالية.' },
          { label: 'ضبط النظام', duration: 'أسبوع ٢-٣', detail: 'تخصيص الحقول والمسارات لسير عملك.' },
          { label: 'إدراج البيانات', duration: 'أسبوع ٤', detail: 'استيراد بيانات العملاء التاريخية ومزامنة البريد.' },
          { label: 'تحسين المبيعات', duration: 'أسبوع ٥+', detail: 'أتمتة المتابعة المتكررة والتقارير.' }
        ],
        benchmarks: [],
        techStack: ['Salesforce', 'HubSpot API', 'Python'],
        businessValue: 'زيادة المبيعات عبر متابعة كل فرصة في الوقت المثالي.'
    },
    {
        id: 'uiux',
        name: 'المعمارية الرقمية (UI/UX)',
        tagline: 'جعل البرمجيات سهلة وجميلة في الاستخدام.',
        description: 'تصميم استراتيجي يوجه المستخدم لاتخاذ الإجراء الصحيح.',
        longDescription: 'تصميم UI/UX هو الفرق بين أداة محبطة وأداة ممتعة. نصمم "الشكل" (UI) و"الإحساس" (UX) بحيث لا يرتبك المستخدمون أبداً ويجدون ما يبحثون عنه بسرعة وسهولة.',
        category: 'Design',
        imageUrl: 'https://images.unsplash.com/photo-1576595580361-90a855b84b20?q=80&w=1974&auto=format&fit=crop',
        features: ['أبحاث واختبارات مستخدمين معمقة', 'تصميم هوية بصرية عصرية', 'نماذج أولية تفاعلية عالية الدقة', 'توثيق كامل لأنظمة التصميم'],
        domains: [{ name: 'الهوية', description: 'حضور رقمي متميز.' }, { name: 'المنتج', description: 'سهولة استخدام البرامج.' }, { name: 'العلامة', description: 'السرد البصري.' }, { name: 'سهولة الوصول', description: 'التصميم الشامل.' }],
        pillars: [
          { title: 'الوضوح المعرفي', description: 'واجهات بسيطة لا تحتاج لأي تدريب لفهمها.' },
          { title: 'الولاء للعلامة', description: 'تصميم يخلق روابط عاطفية مع المستخدمين.' },
          { title: 'الوصول أولاً', description: 'ضمان أن منتجك الرقمي يعمل للجميع.' },
          { title: 'التكرار المستمر', description: 'استخدام البيانات لتحسين التجربة باستمرار.' }
        ],
        roadmap: [
          { label: 'مرحلة الاكتشاف', duration: 'أسبوع ١', detail: 'تحديد شخصيات المستخدمين وأهداف العمل.' },
          { label: 'مخططات الهيكل', duration: 'أسبوع ٢-٣', detail: 'بناء الهيكل العظمي للتطبيق.' },
          { label: 'التصميم البصري', duration: 'أسبوع ٤-٥', detail: 'تطبيق الألوان والخطوط وجماليات العلامة.' },
          { label: 'تسليم التصميم', duration: 'أسبوع ٦', detail: 'الأصول النهائية والتوثيق للمطورين.' }
        ],
        benchmarks: [],
        techStack: ['Figma', 'Adobe Creative Suite', 'Principle'],
        businessValue: 'تقليل مكالمات الدعم الفني عبر جعل البرنامج بديهي الاستخدام.'
    },
    {
        id: 'seo',
        name: 'اللافتة الرقمية (SEO)',
        tagline: 'كن أول ما يراه الناس على جوجل.',
        description: 'عمل تقني وبصري لوضع علامتك التجارية في مقدمة البحث.',
        longDescription: 'تحسين محركات البحث يشبه التأكد من أن متجرك يقع في أكثر الشوارع ازدحاماً في العالم. نحسن كود موقعك ومحتواه بحيث عندما يبحث الناس عما تفعله، يظهر اسمك أولاً. إنها أفضل طريقة للحصول على زوار مهتمين مجاناً.',
        category: 'Consulting',
        imageUrl: 'https://images.unsplash.com/photo-1709281847802-9aef10b6d4bf?q=80&w=1932&auto=format&fit=crop',
        features: ['استراتيجية المحتوى والكلمات المفتاحية', 'تحسين السرعة التقنية للموقع', 'بناء الروابط الخلفية القوية', 'الهيمنة على نتائج البحث المحلية'],
        domains: [{ name: 'النمو', description: 'توسيع الوصول المجاني.' }, { name: 'التقني', description: 'أساسيات الويب.' }, { name: 'المحتوى', description: 'السلطة المعرفية.' }, { name: 'المحلي', description: 'الظهور الإقليمي.' }],
        pillars: [
          { title: 'السلطة الرقمية', description: 'جعل موقعك رائدًا وموثوقًا في مجالك.' },
          { title: 'الأصول طويلة الأمد', description: 'بناء زوار يبقون حتى بعد توقف الإعلانات.' },
          { title: 'الترتيب الاستراتيجي', description: 'استهداف الكلمات التي تؤدي فعلًا للمبيعات.' },
          { title: 'السياق الدلالي', description: 'التحسين للقصد من البحث وليس فقط تكرار الكلمات.' }
        ],
        roadmap: [
          { label: 'التدقيق التقني', duration: 'أسبوع ١', detail: 'إصلاح المشاكل التي تبطئ ظهورك.' },
          { label: 'بحث الكلمات', duration: 'أسبوع ٢', detail: 'تحديد الكلمات عالية القيمة لمجالك.' },
          { label: 'التنفيذ الداخلي', duration: 'أسبوع ٣-٤', detail: 'تحسين العناوين والمحتوى عالي التأثير.' },
          { label: 'مراقبة النمو', duration: 'مستمر', detail: 'تقارير شهرية وتحديثات استراتيجية.' }
        ],
        benchmarks: [],
        techStack: ['Semrush', 'Ahrefs', 'Search Console'],
        businessValue: 'وفر الآلاف من ميزانية الإعلانات عبر الحصول على زوار مجاناً.'
    },
    {
        id: 'cyber',
        name: 'الحصن الرقمي (Cyber)',
        tagline: 'اقفل على بياناتك بعيداً عن المخترقين.',
        description: 'أمن حديث لحماية أسرار شركتك وأموالها.',
        longDescription: 'الأمن السيبراني هو الجدار حول عملك الرقمي. نقوم بإعداد أنظمة تراقب "المتسللين" وتشفر بياناتك الحساسة. يضمن ذلك بقاء معلومات شركتك الخاصة خاصة، وأن أنظمتك لن تُغلق أبداً بطلبات فدية.',
        category: 'Security',
        imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
        features: ['مراقبة استباقية للتهديدات', 'تشفير بيانات بمعايير عسكرية', 'معمارية الوصول "صفر ثقة"', 'خطط استجابة للحوادث'],
        domains: [{ name: 'الدفاع', description: 'حماية استباقية.' }, { name: 'الخصوصية', description: 'حماية البيانات.' }, { name: 'الامتثال', description: 'السلامة القانونية.' }, { name: 'التعافي', description: 'المرونة.' }],
        pillars: [
          { title: 'الحماية الوقائية', description: 'إيقاف الهجمات السيبرانية قبل اختراق الشبكة.' },
          { title: 'مرونة الأعمال', description: 'ضمان استمرار العمل حتى أثناء الحوادث.' },
          { title: 'السيادة على البيانات', description: 'تحكم كامل في مكان وكيفية تخزين بياناتك.' },
          { title: 'الوعي الأمني', description: 'تمكين موظفيك ليكونوا خط الدفاع الأول.' }
        ],
        roadmap: [
          { label: 'مسح الثغرات', duration: 'أسبوع ١', detail: 'اختبار كل مداخلك الرقمية بحثاً عن ضعف.' },
          { label: 'تحصين الشبكة', duration: 'أسبوع ٢-٣', detail: 'تركيب الجدران النارية والتشفير المتقدم.' },
          { label: 'ضوابط الوصول', duration: 'أسبوع ٤', detail: 'تطبيق المصادقة الثنائية والأذونات المحددة.' },
          { label: 'تسليم الأمن', duration: 'أسبوع ٥+', detail: 'تدريب نهائي وإعداد المراقبة ٢٤/٧.' }
        ],
        benchmarks: [],
        techStack: ['IDS/IPS', 'AES-256', 'SIEM Platforms'],
        businessValue: 'تجنب الدعاوى القضائية الضخمة وتضرر العلامة التجارية بسبب تسريب البيانات.'
    },
    {
        id: 'api',
        name: 'جسر البرمجيات (API)',
        tagline: 'اجعل تطبيقاتك تتحدث مع بعضها البعض.',
        description: 'ربط البرمجيات المختلفة لتدفق البيانات تلقائياً.',
        longDescription: 'الـ APIs هي مثل الجسور بين جزر البرمجيات. إذا كان لديك نظام ERP وموقع إلكتروني، فنحن نبني الجسر بحيث عندما يشتري شخص ما منتجاً، يتم تحديث مستوى المخزون تلقائياً. لا مزيد من النسخ واللصق اليدوي بين التطبيقات.',
        category: 'Development',
        imageUrl: 'https://images.unsplash.com/photo-1763568258208-a5af30d5a31b?q=80&w=2070&auto=format&fit=crop',
        features: ['مزامنة البيانات لحظياً', 'مراكز ربط التطبيقات المتعددة', 'نقل بيانات مشفر وآمن', 'بوابات API عالية الأداء'],
        domains: [{ name: 'الربط', description: 'إلغاء المزامنة اليدوية.' }, { name: 'الأتمتة', description: 'تدفقات سلسة.' }, { name: 'الأنظمة', description: 'التوافق التشغيلي.' }, { name: 'التوسع', description: 'إدارة الرسائل.' }],
        pillars: [
          { title: 'الأتمتة الكاملة', description: 'أنظمة تحدث بعضها البعض دون تدخل بشري.' },
          { title: 'سلامة البيانات', description: 'ضمان بقاء المعلومات متسقة عبر كل التطبيقات.' },
          { title: 'القابلية للتوسع', description: 'ربط برمجيات جديدة بسهولة مع نمو عملك.' },
          { title: 'أمن نقاط النهاية', description: 'حماية "البوابات" التي تتواصل عبرها برامجك.' }
        ],
        roadmap: [
          { label: 'رسم السياق', duration: 'أسبوع ١', detail: 'تحديد البيانات التي تحتاج للانتقال بدقة.' },
          { label: 'تطوير المنطق', duration: 'أسبوع ٢-٤', detail: 'بناء قواعد التحويل والمزامنة.' },
          { label: 'اختبار الجهد', duration: 'أسبوع ٥', detail: 'ضمان بقاء الجسر فعالًا وقت الزحمة.' },
          { label: 'الاتصال المباشر', duration: 'أسبوع ٦+', detail: 'تشغيل الجسر الآلي للإنتاج.' }
        ],
        benchmarks: [],
        techStack: ['Go', 'gRPC', 'RabbitMQ'],
        businessValue: 'إلغاء ٩٠٪ من عمل إدخال البيانات اليدوي.'
    },
    {
        id: 'infra-audit',
        name: 'طبيب الأنظمة (Audit)',
        tagline: 'هل تقنياتك صحية أم مكلفة فقط؟',
        description: 'فحص لإعدادات تكنولوجيا المعلومات لكشف الهدر والمخاطر.',
        longDescription: 'تماماً مثل الفحص الطبي، يبحث تدقيق النظام عن المشاكل المخفية. نفحص خوادمك وبرمجياتك لنجد ما هو بطيء، ما هو غير آمن، وما تدفع ثمنه دون استخدامه. نقدم لك خطة لإصلاح كل ذلك.',
        category: 'Consulting',
        imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000',
        features: ['تحليل التكلفة والفائدة بعمق', 'فحوصات سلامة شاملة', 'اختبارات الأداء والجهد', 'مراجعة دورة حياة الموارد'],
        domains: [{ name: 'الكفاءة', description: 'تحسين الموارد.' }, { name: 'الميزانية', description: 'تقليل التكاليف.' }, { name: 'الأمن', description: 'تخفيف المخاطر.' }, { name: 'المستقبل', description: 'خارطة الطريق.' }],
        pillars: [
          { title: 'تحسين رشيق', description: 'تحقيق أقصى أداء بأقل قدر من الهدر.' },
          { title: 'اكتشاف المخاطر', description: 'إيجاد التهديدات قبل أن تصبح أزمات مكلفة.' },
          { title: 'استراتيجية مالية', description: 'تحويل IT من مركز تكلفة إلى محرك قيمة.' },
          { title: 'تحكم سيادي', description: 'إزالة الاعتماد على موردين مكلفين غير ضروريين.' }
        ],
        roadmap: [
          { label: 'حصر الأنظمة', duration: 'أسبوع ١', detail: 'فهرسة كل خادم وترخيص وكود.' },
          { label: 'مرحلة التحليل', duration: 'أسبوع ٢', detail: 'إجراء اختبارات الأداء ومراجعات التكلفة.' },
          { label: 'الوصفة الاستراتيجية', duration: 'أسبوع ٣', detail: 'قائمة مفصلة بالإصلاحات والتوفير.' },
          { label: 'دعم التنفيذ', duration: 'مستمر', detail: 'توجيه فريقك خلال عملية التنظيف.' }
        ],
        benchmarks: [],
        techStack: ['Infrastructure as Code', 'Trivy', 'Cost Optimization'],
        businessValue: 'غالباً ما يجد التدقيق توفيراً بنسبة ٢٠٪ في الفواتير الشهرية.'
    },
    {
        id: 'mobile-eng',
        name: 'عملك في جيبك (Mobile)',
        tagline: 'ضع شركتك في جيب عميلك.',
        description: 'تطبيقات سريعة وسهلة الاستخدام للآيفون والأندرويد.',
        longDescription: 'تطبيقات الموبايل هي الوسيلة لتكون قريباً من عميلك. نبني تطبيقات تسمح لعملائك بالشراء، الحجز، أو الدردشة معك من أي مكان. نبنيها لتعمل بسلاسة حتى في الاتصالات الضعيفة وبإحساس سريع وطبيعي.',
        category: 'Development',
        imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000',
        features: ['قدرات العمل دون إنترنت', 'إشعارات مخصصة وفورية', 'مزامنة الأمن البيومتري', 'أداء عالٍ عبر المنصات'],
        domains: [{ name: 'الموبايل', description: 'تفاعل مباشر.' }, { name: 'المنتج', description: 'الاحتفاظ بالمستخدم.' }, { name: 'المبيعات', description: 'وصول من أي مكان.' }, { name: 'الدعم', description: 'دردشة مدمجة.' }],
        pillars: [
          { title: 'تفاعل فائق', description: 'ابقَ في ذهن العميل عبر أيقونة دائمة.' },
          { title: 'تجربة دون عوائق', description: 'واجهات مصممة للعمل بيد واحدة وبسرعة.' },
          { title: 'اعتمادية النظام', description: 'تطبيقات تعمل بامتياز حتى في الشبكات الضعيفة.' },
          { title: 'بيئة آمنة', description: 'حماية المعاملات بأمن الموبايل الأصلي.' }
        ],
        roadmap: [
          { label: 'معمارية الموبايل', duration: 'أسبوع ١', detail: 'تصميم منطق التطبيق ومتطلبات البيانات.' },
          { label: 'التطوير الأساسي', duration: 'أسبوع ٢-٦', detail: 'برمجة الميزات للمنصات المختلفة.' },
          { label: 'اختبار التجريبي', duration: 'أسبوع ٧', detail: 'اختبار مع مستخدمين حقيقيين للتحسين.' },
          { label: 'النشر في المتاجر', duration: 'أسبوع ٨', detail: 'تجاوز عمليات التقديم لآبل وجوجل.' }
        ],
        benchmarks: [],
        techStack: ['Flutter', 'Firebase', 'GraphQL'],
        businessValue: 'اجعل تفاعل العملاء معك أسهل بعشر مرات.'
    },
    {
        id: 'blockchain',
        name: 'سجلات لا تتغير (Blockchain)',
        tagline: 'ثقة لا يمكن تزييفها.',
        description: 'سجل رقمي حيث البيانات دائمة وشفافة.',
        longDescription: 'البلوكشين هو وسيلة لتسجيل المعلومات بحيث لا يمكن حذفها أو تغييرها أبداً. هذا مثالي للعقود، سلاسل التوريد، أو تتبع الأشياء الثمينة. يخلق ثقة كاملة بين الأطراف لأن "الكتاب" لا يمكن الكذب عليه.',
        category: 'Blockchain',
        imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000',
        features: ['عقود ذكية مؤتمتة', 'تتبع شفاف لسلسلة التوريد', 'هوية رقمية سيادية', 'سجلات أصول قابلة للتحقق'],
        domains: [{ name: 'الثقة', description: 'سجلات موثقة.' }, { name: 'المالية', description: 'بروتوكولات DeFi.' }, { name: 'العمليات', description: 'التتبع.' }, { name: 'القانوني', description: 'عقود غير قابلة للتغيير.' }],
        pillars: [
          { title: 'عدم التغيير المطلق', description: 'ما كُتب يبقى مكتوباً للأبد ولا يمكن تزويره.' },
          { title: 'شفافية جذرية', description: 'يمكن لكل طرف التحقق من التاريخ دون وسطاء.' },
          { title: 'كفاءة الثقة', description: 'إزالة الحاجة لجهات التحقق الخارجية المكلفة.' },
          { title: 'مرونة لامركزية', description: 'لا توجد نقطة فشل واحدة لبياناتك الحرجة.' }
        ],
        roadmap: [
          { label: 'استراتيجية البروتوكول', duration: 'أسبوع ١-٢', detail: 'تحديد البلوكشين الأمثل لحالتك.' },
          { label: 'تطوير العقود', duration: 'أسبوع ٣-٥', detail: 'برمجة المنطق الذي يؤتمت اتفاقياتك.' },
          { label: 'تدقيق الأمن', duration: 'أسبوع ٦-٧', detail: 'التحقق الرياضي من سلامة العقود.' },
          { label: 'إعداد العقد', duration: 'أسبوع ٨+', detail: 'نشر السجل على الشبكة الآمنة.' }
        ],
        benchmarks: [],
        techStack: ['Solidity', 'Hyperledger Fabric', 'Rust'],
        businessValue: 'إلغاء تكاليف الوسطاء ومحامي التحقق.'
    },
    {
        id: 'cloud',
        name: 'السماء المرنة (Cloud)',
        tagline: 'استأجر القوة بدلاً من شراء العتاد.',
        description: 'استضافة برامجك على خوادم عالمية تنمو معك.',
        longDescription: 'الحوسبة السحابية تعني أن عملك يعيش على الإنترنت. بدلاً من شراء خوادم مكلفة تتقادم، تستخدم شبكات عالمية قوية. إذا نما عملك غداً، تنمو خوادمك معك فوراً دون الحاجة لشراء أي شيء جديد.',
        category: 'Cloud',
        imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
        features: ['قوة حوسبة تتوسع آلياً', 'توزيع محتوى عالمي', 'نسخ احتياطي للتعافي من الكوارث', 'البنية التحتية ككود (IaC)'],
        domains: [{ name: 'الأساسات', description: 'بنية تحتية موثوقة.' }, { name: 'العمليات', description: 'خالٍ من الصيانة.' }, { name: 'النمو', description: 'توسع بلا حدود.' }, { name: 'الاستقرار', description: 'توافر عالٍ.' }],
        pillars: [
          { title: 'مرونة غير محدودة', description: 'ادفع ثمن ما تستخدمه، وتوسع للآلاف فوراً.' },
          { title: 'مرونة المهمة', description: 'إذا فشل مركز بيانات، يستلم آخر في ثوانٍ.' },
          { title: 'صيانة صفرية', description: 'ركز على عملك بينما ندير نحن العتاد.' },
          { title: 'سرعة عالمية', description: 'وصول سريع للمستخدمين في أي مكان.' }
        ],
        roadmap: [
          { label: 'تقييم السحابة', duration: 'أسبوع ١', detail: 'تقييم العتاد الحالي واحتياجات الخادم.' },
          { label: 'استراتيجية الهجرة', duration: 'أسبوع ٢', detail: 'تصميم النقل دون أي توقف للخدمة.' },
          { label: 'بناء البيئة', duration: 'أسبوع ٣-٤', detail: 'تجهيز الشبكة العالمية عالية الأداء.' },
          { label: 'تبديل الحركة', duration: 'أسبوع ٥', detail: 'التحويل المباشر إلى السحابة القابلة للتوسع.' }
        ],
        benchmarks: [],
        techStack: ['Terraform', 'Docker', 'AWS Lambda'],
        businessValue: 'وفر الآلاف من تكاليف العتاد ولا تقلق من توقف النظام أبداً.'
    }
  ],
  ku: [
    {
        id: 'erp',
        name: 'Mejiyê Pargîdaniyê (ERP)',
        tagline: 'Navendek ji bo hemî daneyên pargîdaniya we.',
        description: 'Pergalek hevpar ku tê de drav, envanter û karmend bi hev re dixebitin.',
        longDescription: 'ERP mîna pergalek demarî ya navendî ye ji bo karsaziya we. Li şûna pelên cihêreng ji bo firotan û hesabvaniyê, her tişt li yek cîhek e. Her kes heman rastiyan dibîne, ku dibe sedema kêmbûna çewtiyan û biryarên bileztir.',
        category: 'Enterprise',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
        features: ['Rêveberiya Envantera Rastî', 'Hesabvaniya Pir-pereyî ya Otomatîk', 'Portalên Karmendan ة Xweser', 'Raporên Operasyonel ên Pêşketî'],
        domains: [{ name: 'Operasyon', description: 'Hêsankirina karên rojane.' }, { name: 'Fînanse', description: 'Îstîqrara dravî.' }, { name: 'Çavkaniyên Mirovî', description: 'Rêveberiya mirovan.' }, { name: 'Zîrekiya Daneyan', description: 'Analîzên kûr.' }],
        pillars: [
          { title: 'Çavkaniya Rastiyê', description: 'Her beş li heman daneyên hevdengkirî dinêre.' },
          { title: 'Kêrhatina Operasyonel', description: 'Rakirina kopîkirina manuwel a di navbera pelan de.' },
          { title: 'Lihevhatina Yasayî', description: 'Kontrolên ji bo standardên herêmî û navneteweyî.' },
          { title: 'Mîmariya Mezinbûyî', description: 'Sîstemên ku bi karsaziya we re mezin bihayên.' }
        ],
        roadmap: [
          { label: 'Audit-a Tespîtê', duration: 'Hefte 1-2', detail: 'Nexşekirina hemî pêvajoyên karsaziya niha.' },
          { label: 'Nexşeya Mîmarî', duration: 'Hefte 3-4', detail: 'Sêwirana ERP-ya xwerû ji bo sektora we.' },
          { label: 'Veguhestina Daneyan', duration: 'Hefte 5-8', detail: 'Barkirina tomarkirinên kevn bo pergala nû.' },
          { label: 'Fermandariya Operasyonel', duration: 'Hefte 9+', detail: 'Perwerdehiya karmendan û destpêkirina tam.' }
        ],
        benchmarks: [],
        techStack: ['Node.js', 'PostgreSQL', 'SAP Integration'],
        businessValue: 'Ji ber çewtiyên îdarî û kaxezên hêdî drav winda nekin.'
    },
    {
        id: 'ecommerce',
        name: 'Dikana Dîjîtal (Ecommerce)',
        tagline: 'Dikanek ku dema hûn radizên jî difiroşe.',
        description: 'Malperek bi hêz ku dravdanê digire û barkirinê dişopîne.',
        longDescription: 'Ecommerce ji malperekê zêdetir e; ew motorek firotanê ye. Berhemên we bi mişteriyên li her derê cîhanê ve girê dide, dravdana wan bi ewlehî pêk tîne, û ji we re dibe alîkar ku hûn barkirinê bêyî pirsgirêkên şopandina manuwel birêve bibin.',
        category: 'Development',
        imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000',
        features: ['Dravdana Global a Ewle', 'Sêwirana Mobile-Responsive', 'Synca Lojîstîk û Barkirinê', 'Amûrên Marketing û SEO-yê'],
        domains: [{ name: 'Retail', description: 'Mezinkirina firotanên dîjîtal.' }, { name: 'Lojîstîk', description: 'Şopandina barkirinê.' }, { name: 'Marketing', description: 'Gihîştina mişteriyan.' }, { name: 'Xizmeta Mişteriyan', description: 'Piştgiriya piştî kirînê.' }],
        pillars: [
          { title: 'Baweriya Mişterî', description: 'Dergehên dravdanê yn ewle ji bo parastina daneyan.' },
          { title: 'Performansa Bilind', description: 'Barkirina rûpelê ya bilez ji bo firotanê.' },
          { title: 'Amadehiya Omnichannel', description: 'Synca firotanê li ser web û mobîlê.' },
          { title: 'Fokusa Vegerandinê', description: 'Sêwirana UI ji bo kêmkirina berdana kartê.' }
        ],
        roadmap: [
          { label: 'Stratejiya UX', duration: 'Hefte 1', detail: 'Diyarkirina rêwîtiya kirînê ya mişterî.' },
          { label: 'Endezyariya Platformê', duration: 'Hefte 2-4', detail: 'Avakirina bingeha dikanê û katalogê.' },
          { label: 'Girêdana Dravdanê', duration: 'Hefte 5', detail: 'Sazkirina dergehên ewle û lojîstîkê.' },
          { label: 'Audit-a Performansê', duration: 'Hefte 6', detail: 'Testkirin û optimîzasyona SEO-yê.' }
        ],
        benchmarks: [],
        techStack: ['Next.js', 'Stripe', 'Headless CMS'],
        businessValue: '24/7 bigihîjin mişteriyan ji derveyî sînorên dikanên fîzîkî.'
    },
    {
        id: 'crm',
        name: 'Bîra Mişteriyan (CRM)',
        tagline: 'Qet mişterîyek an fersendekê ji bîr nekin.',
        description: 'Pergalek ji bo şopandina her axaftin û fersendê ji bo tîmê firotanê.',
        longDescription: 'CRM mîna bîra profesyonel e. Her e-peyam, bang û civîna we ya bi mişterî re tomar dike. Ev alîkariya tîmê we dike ku bizanibin kîjan demê divê bang bikin û mişterî çi dixwaze, da ku "belkî" bibe "erê."',
        category: 'Enterprise',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000',
        features: ['Şopandina Pipeline-a Firotanê', 'Dîroka Peywendiyê ya Navendî', 'Bîranînên Şopandinê yên Otomatîk', 'Lead Scoring bi AI'],
        domains: [{ name: 'Firotan', description: 'Optimîzekirina funnel.' }, { name: 'Marketing', description: 'Kampanyayên taybet.' }, { name: 'Piştgirî', description: 'Têkiliyên saxlem.' }, { name: 'Analîtîk', description: 'Texmîna dahatê.' }],
        pillars: [
          { title: 'Zîrekiya Lead-an', description: 'Veguhestina daneyan bo stratejiyên firotanê.' },
          { title: 'Hevkariya Tîmê', description: 'Agahiyên hevpar di navbera firotan û piştgiriyê de.' },
          { title: 'Parastina Mişterî', description: 'Amûrên proaktîf ji bo mişteriyên mayînde.' },
          { title: 'Otomasyona Pêvajoyê', description: 'Kêmkirina barê îdarî yê tîmê firotanê.' }
        ],
        roadmap: [
          { label: 'Nirxandina CRM', duration: 'Hefte 1', detail: 'Analîzkirina daxwaz û pêvajoyên niha.' },
          { label: 'Sazkirina Sîstemê', duration: 'Hefte 2-3', detail: 'Xwerûkirina qadan û pipeline-an.' },
          { label: 'Barkirina Daneyan', duration: 'Hefte 4', detail: 'Veguhestina daneyên kevn û synca e-peyamê.' },
          { label: 'Optimîzasyona Firotanê', duration: 'Hefte 5+', detail: 'Otomatîkkirina rapor û bîranînan.' }
        ],
        benchmarks: [],
        techStack: ['Salesforce', 'HubSpot API', 'Python'],
        businessValue: 'Bi şopandina fersendan di dema kamil de firotanê zêde bikin.'
    },
    {
        id: 'uiux',
        name: 'Mîmariya Dîjîtal (UI/UX)',
        tagline: 'Bikaranîنا nermalavê hêsan û xweşik bikin.',
        description: 'Sêwirana stratejîk ku bikarhêner ber bi çalakiya rast ve dibe.',
        longDescription: 'UI/UX cudahiya di navbera amûrek tevlihev û amûrek xweş de ye. Em "xuyabûn" (UI) û "hest" (UX) sêwirînin da ku bikarhêner qet neyên şaş kirin û her dem tiştê ku lê digerin bi hêsanî bibîنين.',
        category: 'Design',
        imageUrl: 'https://images.unsplash.com/photo-1576595580361-90a855b84b20?q=80&w=1974&auto=format&fit=crop',
        features: ['Lêkolîn û Testkirina Bikarhêner', 'Sêwirana Nasnameya Vîzyonel', 'Prototîpên Têkilîdar ên Bilind', 'Dokumanasyona Pergala Sêwirandinê'],
        domains: [{ name: 'Nasname', description: 'Hebûna dîjîtal a premium.' }, { name: 'Berhem', description: 'Bikaranîna nermalavê.' }, { name: 'Brand', description: 'Sêwirana vîzyonel.' }, { name: 'Gihîştin', description: 'Sêwirana giştî.' }],
        pillars: [
          { title: 'Zelaliya Mejî', description: 'Sêwirandinên hêsan ku hewceyê perwerdehiyê nîne.' },
          { title: 'Baweriya Brandê', description: 'Sêwirana ku girêdanên hestiyar ava dike.' },
          { title: 'Gihîştina Giştî', description: 'Piştrastkirina ku sîstem ji bo her kesî dixebite.' },
          { title: 'Pêşketina Berdewam', description: 'Bikaranîna daneyan ji bo baştirkirina ezmûnê.' }
        ],
        roadmap: [
          { label: 'Qonaxa Tespîtê', duration: 'Hefte 1', detail: 'Diyarkirina armanc û bikarhêneran.' },
          { label: 'Wireframe-ên Avahiyê', duration: 'Hefte 2-3', detail: 'Avakirina îskeleta sîstema we.' },
          { label: 'Sêwirana Vîzyonel', duration: 'Hefte 4-5', detail: 'Zêdekirina reng, tîp û estetîka brandê.' },
          { label: 'Radestkirin', duration: 'Hefte 6', detail: 'Amadekirina dokumanan ji bo developeran.' }
        ],
        benchmarks: [],
        techStack: ['Figma', 'Adobe Creative Suite', 'Principle'],
        businessValue: 'Bi hêsankirina bikaranîna nermalavê bangên daxwaza alîكariyê kêm bikin.'
    },
    {
        id: 'seo',
        name: 'Nîşانا Dîjîtal (SEO)',
        tagline: 'Bibin tiştê yekem ku mirov li ser Google dibînin.',
        description: 'Xebata teknîكî û naverokî da ku branda we derkeve serê lêgerînê.',
        longDescription: 'SEO mîna wê ye ku dikanek we li kolana herî qerebalix a cîhanê hebe. Em kod û naveroka malpera we optimîze dikin da ku dema mirov lêgerînê dikin, navê we yekem derkeve. Ev riya herî baş e ji bo girtina trafîka organîك a belaş.',
        category: 'Consulting',
        imageUrl: 'https://images.unsplash.com/photo-1709281847802-9aef10b6d4bf?q=80&w=1932&auto=format&fit=crop',
        features: ['Stratejiya Naverok û Keyword-an', 'Optimîzasyona Teknîkî ya Lezê', 'Avakirina Otorîteya Backlink', 'Serkeftina Lêgerîna Herêmî'],
        domains: [{ name: 'Mezinbûn', description: 'Gihîştina organîk.' }, { name: 'Teknîkî', description: 'Hîmên malperê.' }, { name: 'Naverok', description: 'Sernavên girîng.' }, { name: 'Herêmî', description: 'Xuyabûna herêmî.' }],
        pillars: [
          { title: 'Otorîteya Dîjîtal', description: 'Kirina malpera we bibe lîder di sektora we de.' },
          { title: 'Sermayeya Mayînde', description: 'Avakirina trafîka ku her dem berdewam dike.' },
          { title: 'Rêzkirina Stratejîk', description: 'Fokusa li ser peyvên ku firotanê tînin.' },
          { title: 'Siyak û Mantiq', description: 'Optimîzasyona li gorî mebesta lêgerînê.' }
        ],
        roadmap: [
          { label: 'Audit-a Teknîkî', duration: 'Hefte 1', detail: 'Tespîtkirina pirsgirêkên ku lezê kêm dikin.' },
          { label: 'Lêkolîna Keyword-an', duration: 'Hefte 2', detail: 'Tespîtkirina peyvên herî biha ji bo we.' },
          { label: 'Cîbicîkirina Rûpelê', duration: 'Hefte 3-4', detail: 'Optimîzekirina sernav û naveroka malperê.' },
          { label: 'Şopandina Mezinbûnê', duration: 'Berdewam', detail: 'Raporên mehane û nûkirina stratejiyê.' }
        ],
        benchmarks: [],
        techStack: ['Semrush', 'Ahrefs', 'Search Console'],
        businessValue: 'Bi trafîka organîk budceya reklamê kêm bikin.'
    },
    {
        id: 'cyber',
        name: 'Keleha Dîjîtal (Cyber)',
        tagline: 'Daneyên xwe ji hackran dûر bigirin.',
        description: 'Ewlehiya nûjen ji bo parastina raz û dravê pargîdaniyê.',
        longDescription: 'Ewlehiya sîber dîwarê dora karsaziya weya dîjîtal e. Em pergalên ku "nederbasbûyîyan" dişopînin û daneyên weyên krîtîك dipارزێن saz dikin. Ev piştrast dike ku agahdariya pargîdaniya we taybet bimîne û sîstemên we neyên hackkirin.',
        category: 'Security',
        imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
        features: ['Şopandina Gefan a Proaktîf', 'Encryption-a Daneyan a Bilind', 'Mîmariya Zero-Trust', 'Plana Bersivdana Hîsan'],
        domains: [{ name: 'Parastin', description: 'Sîstemên proaktîf.' }, { name: 'Taybetî', description: 'Parastina daneyan.' }, { name: 'Qanûnî', description: 'Ewlehiya yasayî.' }, { name: 'Recovery', description: 'Berdewamî.' }],
        pillars: [
          { title: 'Parastina Pêşîgir', description: 'Rawestandina êrîşan berî ku têkevin hundir.' },
          { title: 'Berdewamiya Karsaziyê', description: 'Piştrastkirina operasyonan di her rewşê de.' },
          { title: 'Serweriya Daneyan', description: 'Kontrola tam li ser cihê daneyên we.' },
          { title: 'Zanîna Ewlehiyê', description: 'Perwerdekirina karmendan wekî dîwarê yekem.' }
        ],
        roadmap: [
          { label: 'Scana Lawaziyan', duration: 'Hefte 1', detail: 'Testkirina xalên lawaz ên dîjîtal.' },
          { label: 'Fortification', duration: 'Hefte 2-3', detail: 'Sazkirina firewall û encryption-a pêşketî.' },
          { label: 'Kontrola Gihîştinê', duration: 'Hefte 4', detail: 'Sazkirina MFA û îzinên taybet.' },
          { label: 'Radestkirin', duration: 'Hefte 5+', detail: 'Perwerdehî û sazkirina şopandina 24/7.' }
        ],
        benchmarks: [],
        techStack: ['IDS/IPS', 'AES-256', 'SIEM Platforms'],
        businessValue: 'Ji dozên yasayî û zirara brandê ya ji ber daxuyaniya daneyان dûر bikevin.'
    },
    {
        id: 'api',
        name: 'Pira Nermalavê (API)',
        tagline: 'Bila app-ên we bi hev re bipeyivin.',
        description: 'Girêdana nermalavên cihêreng da ku dane bixweber herikin.',
        longDescription: 'API mîna pirên di navbera giravên nermalavê de ne. Heke ERP û malperek we hebe, em pirê ava dikin da ku dema kesek tiشtek dikire, envantera we bixweber nû bibe. Êdî kopîkirina manuwel di navbera appan de nîne.',
        category: 'Development',
        imageUrl: 'https://images.unsplash.com/photo-1763568258208-a5af30d5a31b?q=80&w=2070&auto=format&fit=crop',
        features: ['Synca Daneyan a Rastî', 'Hub-ên Girêdana Pir-app', 'Veguhestina Daneyan a Ewle', 'Gateway-ên API-yê yên Bilez'],
        domains: [{ name: 'Girêdan', description: 'Rakirina karê manuwel.' }, { name: 'Otomasyon', description: 'Herikîna bêsînor.' }, { name: 'Sîstem', description: 'Lihevhatina sîsteman.' }, { name: 'Mezinbûn', description: 'Gihandina peyaman.' }],
        pillars: [
          { title: 'Otomasyona Tam', description: 'Sîstemên ku bêyî mirovan kar dikin.' },
          { title: 'Yekpareyiya Daneyan', description: 'Parastina heman agahiyan di her appê de.' },
          { title: 'Berfirehbûn', description: 'Zêdekirina app-ên nû bi hêsanî.' },
          { title: 'Ewlehiya Endpoint-an', description: 'Parastina "dergehên" peywendiya app-an.' }
        ],
        roadmap: [
          { label: 'Nexşeya Siyakê', duration: 'Hefte 1', detail: 'Tespîtkirina kîjan dane divê herikin.' },
          { label: 'Pêşxistina Mantiqê', duration: 'Hefte 2-4', detail: 'Avakirina qaîdeyên veguhertin û syncê.' },
          { label: 'Testkirina Zextê', duration: 'Hefte 5', detail: 'Piştrastkirina pîrê di dema qerebalixiyê de.' },
          { label: 'Girêdana Zindî', duration: 'Hefte 6+', detail: 'Vekirina pira otomatîك ji bo karsaziyê.' }
        ],
        benchmarks: [],
        techStack: ['Go', 'gRPC', 'RabbitMQ'],
        businessValue: '90% karê manuwel ê têketina daneyan ji holê rakin.'
    },
    {
        id: 'infra-audit',
        name: 'Bijîشكê Sîstemê (Audit)',
        tagline: 'Teknolojiya we saxlem e an tenê biha ye?',
        description: 'Kontrolek ji bo sazûmana IT-ê da ku wendahî û rîskan bibîne.',
        longDescription: 'Mîna kontrolek bijîشكî, audita sîstemê li pirsgirêkên veشartî digere. Em server û nermalavên we kontrol dikin da ku bibînin çi hêdî ye, çi ne ewle ye, û hûn ji bo çi drav didin lê bikar nayînin.',
        category: 'Consulting',
        imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000',
        features: ['Analîza Lêçûn-Karîgerî', 'Kontrolên Ewlehiyê yên Giştî', 'Testkirina Performans û Zextê', 'Nirxandina Dewra Çavkaniyan'],
        domains: [{ name: 'Kêrhatí', description: 'Optimîzekirina IT-yê.' }, { name: 'Budce', description: 'Kêmkirina lêçûnan.' }, { name: 'Ewlehî', description: 'Kêmkirina rîskan.' }, { name: 'Paşeroj', description: 'Nexşeya nûkirinê.' }],
        pillars: [
          { title: 'Optimîzasyona Sivik', description: 'Performansa herî bilind bi kêmtirîn windahî.' },
          { title: 'Tespîtkirina Rîskan', description: 'Dîtina gefan berî ku bibin krîzên biha.' },
          { title: 'Stratejiya Fînanse', description: 'Guhertina IT-ê bo motora nirxê.' },
          { title: 'Kontrola Serwer', description: 'Rakirina girêdana bi firoشkarên biha.' }
        ],
        roadmap: [
          { label: 'Envantera Sîsteman', duration: 'Hefte 1', detail: 'Lîstekirina her server, lîsans û kodê.' },
          { label: 'Qonaxa Analîzê', duration: 'Hefte 2', detail: 'Cîbicîkirina testên performansê.' },
          { label: 'Reçeteya Stratejîk', duration: 'Hefte 3', detail: 'Lîsteya tiشtên ku divê werin sererastkirin.' },
          { label: 'Piştgiriya Cîbicîkirinê', duration: 'Berdewam', detail: 'Rênîشandana tîmê we di paqijkirinê de.' }
        ],
        benchmarks: [],
        techStack: ['Infrastructure as Code', 'Trivy', 'Cost Optimization'],
        businessValue: 'Bi gelemperî 20% lêçûnên IT-ê yên mehane kêm dike.'
    },
    {
        id: 'mobile-eng',
        name: 'Karsazî di Dest de (Mobile)',
        tagline: 'Pargîdaniya xwe bixin berîka mişteriyê xwe.',
        description: 'App-ên bilez û hêsan ji bo iPhone û Android.',
        longDescription: 'Mobile apps are about being close to your customer. We build apps that allow your clients to buy, book, or chat with you from anywhere. نبنيها لتعمل بسلاسة حتى في الاتصالات الضعيفة وبإحساس سريع وطبيعي.',
        category: 'Development',
        imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000',
        features: ['Şiyana Karê Offline', 'Notîfîkasyonên Xwerû', 'Synca Ewlehiya Biometrîk', 'Performansa Cross-Platform'],
        domains: [{ name: 'Mobile', description: 'Tevlêbûna rasterast.' }, { name: 'Berhem', description: 'Parastina mişterî.' }, { name: 'Firotan', description: 'Gihîştina her derê.' }, { name: 'Piştgirî', description: 'Chat-a hundurîn.' }],
        pillars: [
          { title: 'Tevlêbûna Zêde', description: 'Bi îkona li ser ekranê her dem li ber çavan bin.' },
          { title: 'UX-a Bêkêmasî', description: 'Sêwirana ji bo bikaranîna bi yek destî û lezê.' },
          { title: 'Pêbaweriya Sîstemê', description: 'App-ên ku di înterneta lawaz de jî dixebitin.' },
          { title: 'Jîngeha Ewle', description: 'Parastina kirînan bi ewlehiya mobîl.' }
        ],
        roadmap: [
          { label: 'Mîmariya Mobîl', duration: 'Hefte 1', detail: 'Sêwirana mantiq û daneyên appê.' },
          { label: 'Endezyariya Bingeha', duration: 'Hefte 2-6', detail: 'Kodkirina taybetmendiyên appê.' },
          { label: 'Testa Bikarhêneran', duration: 'Hefte 7', detail: 'Ceribandina bi bikarhênerên rastîn.' },
          { label: 'Barkirina Storan', duration: 'Hefte 8', detail: 'Cîbicîkirina pêvajoyên Apple û Google.' }
        ],
        benchmarks: [],
        techStack: ['Flutter', 'Firebase', 'GraphQL'],
        businessValue: 'Make it 10x easier for customers to interact with you.'
    },
    {
        id: 'blockchain',
        name: 'Tomarên Neguherbar (Blockchain)',
        tagline: 'Trust that cannot be faked.',
        description: 'A digital ledger where records are permanent and transparent.',
        longDescription: 'Blockchain is a way to record info so it can never be deleted or changed. This is perfect for contracts, supply chains, or tracking valuable items. It creates total trust between parties because the "book" cannot be lied to.',
        category: 'Blockchain',
        imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000',
        features: ['عقود ذكية مؤتمتة', 'تتبع شفاف لسلسلة التوريد', 'هوية رقمية سيادية', 'سجلات أصول قابلة للتحقق'],
        domains: [{ name: 'Bawerî', description: 'Tomarên verastkirî.' }, { name: 'Fînanse', description: 'Protokolên DeFi.' }, { name: 'Operasyon', description: 'Şopandin.' }, { name: 'Yasayî', description: 'Peymanên mayînde.' }],
        pillars: [
          { title: 'Neguherbarî', description: 'Tiştê ku hatiye nivîساندن qet nayê guhertن.' },
          { title: 'Zelaliya Radîkal', description: 'Her kes dikare dîrokê verast bike.' },
          { title: 'Kêrhatina Baweriyê', description: 'Rakirina hewcedariya verastkirina biha.' },
          { title: 'Resilience-a Lamend', description: 'Xala têكçûnê ji bo daneyan tune ye.' }
        ],
        roadmap: [
          { label: 'Stratejiya Protokolê', duration: 'Hefte 1-2', detail: 'Tespîtkirina blockchain-a herî baş.' },
          { label: 'Pêşxistina Peymanan', duration: 'Hefte 3-5', detail: 'Kodkirina mantiqê peymanên we.' },
          { label: 'Audita Ewlehiyê', duration: 'Hefte 6-7', detail: 'Verastkirina matematîكî ya peymanan.' },
          { label: 'Sazkirina Node-an', duration: 'Hefte 8+', detail: 'Barkirina ledgerê bo tora ewle.' }
        ],
        benchmarks: [],
        techStack: ['Solidity', 'Hyperledger Fabric', 'Rust'],
        businessValue: 'Eliminate the cost of middle-men and verification lawyers.'
    },
    {
        id: 'cloud',
        name: 'Ezmanê Mezinbûyî (Cloud)',
        tagline: 'Li şûna kirîna hardware, hêzê bi kirê bigirin.',
        description: 'Hosting your software on global servers that grow with you.',
        longDescription: 'Cloud computing means your business lives on the internet. Instead of buying expensive servers that get old, you use powerful global networks. If your business grows tomorrow, your servers grow with you instantly without buying anything new.',
        category: 'Cloud',
        imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
        features: ['قوة حوسبة تتوسع آلياً', 'توزيع محتوى عالمي', 'نسخ احتياطي للتعافي من الكوارث', 'البنية التحتية ككود (IaC)'],
        domains: [{ name: 'Binesazî', description: 'Hîmên pêbawer.' }, { name: 'Operasyon', description: 'Bê sînor.' }, { name: 'Mezinbûn', description: 'Pîvana bêsînor.' }, { name: 'Îstîqrar', description: 'Gihîştina bilind.' }],
        pillars: [
          { title: 'Elastîkbûna Bêsînor', description: 'Tenê ji bo tiştê bikar tînin drav bidin.' },
          { title: 'Resilience-a Karî', description: 'Heke serverek bikeve, yekî din cîh digire.' },
          { title: 'Sînorê Sîsteman', description: 'Berdewamiya kar bêyî hardware-a fîzîكî.' },
          { title: 'Leza Gerdûnî', description: 'Gihîştina bilez ji bo her kesî.' }
        ],
        roadmap: [
          { label: 'Nirxandina Cloud', duration: 'Hefte 1', detail: 'Nirxandina hardware û serverên niha.' },
          { label: 'Stratejiya Migrationê', duration: 'Hefte 2', detail: 'Sêwirana barkirinê bêyî rawestan.' },
          { label: 'Avakirina Jîngehê', duration: 'Hefte 3-4', detail: 'Amadekirina tora global a bilez.' },
          { label: 'Vekirina Trafîkê', duration: 'Hefte 5', detail: 'Barkirina tam bo binesaziya ewrî.' }
        ],
        benchmarks: [],
        techStack: ['Terraform', 'Docker', 'AWS Lambda'],
        businessValue: 'وفر الآلاف من تكاليف العتاد ولا تقلق من توقف النظام أبداً.'
    }
  ]
};

export const JOURNAL_ARTICLES: Record<Language, JournalArticle[]> = {
  en: [
    {
      id: 5,
      title: 'E-Commerce Platform for Online Businesses (Syria)',
      date: '',
      excerpt: 'A ready-to-launch automated sales platform tailored for Syrian businesses and Instagram sellers.',
      image: 'https://images.unsplash.com/photo-1665686310429-ee43624978fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'Developed a ready-to-launch e-commerce website tailored for Syrian online businesses, especially Instagram-based sellers seeking a more professional and automated sales process. The platform supports product management, automated order handling, and structured customer data, reducing manual work and improving order accuracy. AI tools were used to enhance and standardize product images for web presentation, helping businesses maintain a consistent and professional brand identity.'
    },
    {
      id: 6,
      title: 'Unified Clinical Operating System',
      date: '',
      excerpt: 'Comprehensive clinic management centralizing medical records, scheduling, and billing for multi-specialty practices.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'Designed a comprehensive clinic management system suitable for medical clinics of all specialties. The platform centralizes patient management, appointment scheduling, medical records, procedures, billing, and reporting in a single, easy-to-use system. It supports detailed patient profiles, smart scheduling to avoid overlaps, procedure tracking with notes and images, flexible billing with partial or full payments, and real-time operational reports. The system includes multi-user role management for doctors, nurses, receptionists, and accountants, and is fully mobile-friendly, enabling clinics to reduce paperwork, minimize errors, and deliver a more professional patient experience.'
    },
    {
      id: 1,
      title: 'Goldsmith Management System',
      date: '',
      excerpt: 'Comprehensive Frappe-based ERP designed for jewelry workshops to manage daily transactions and business workflows.',
      image: 'https://images.unsplash.com/photo-1609619741907-dcc81add10f7?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'Designed and deployed a comprehensive Frappe-based ERP system for jewelry workshops to manage transactions, balances, daily operations, and business workflows. Implemented mobile-friendly interfaces, structured data handling, and system reliability features, contributing to improved operational efficiency and better decision-making.'
    },
    {
      id: 2,
      title: 'ERPNext Implementation – Cheese Manufacturing (Lebanon)',
      date: '',
      excerpt: 'Digitalizing operations for a major cheese producer in Lebanon, improving workflow efficiency and reliable system adoption.',
      image: 'https://images.unsplash.com/photo-1610037275499-00c6b17c8ddd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'Implemented and customized ERPNext for a cheese manufacturing company in Lebanon, digitalizing operations and improving workflow efficiency. Configured key modules, managed data migration, set user roles and permissions, and trained staff to ensure smooth adoption and reliable system use.'
    },
    {
      id: 3,
      title: 'Blockchain Degree Verification',
      date: '',
      excerpt: 'Developed a private Ethereum verification system with Solidity smart contracts and secure QR-code scanning.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000',
      content: 'Developed a blockchain-based verification system using a private Ethereum network with multiple nodes. Implemented Solidity smart contracts and a web interface enabling institutions and users to verify educational certificates via secure QR-code scanning, enhancing credibility and preventing document fraud.'
    },
    {
      id: 4,
      title: 'CRM System for AVIS Car Rental Erbil',
      date: '',
      excerpt: 'Transitioning manual Excel processes to a structured CRM system for AVIS Erbil, enhancing reporting accuracy.',
      image: 'https://images.unsplash.com/photo-1765446925577-59a34c05f778?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'Supported the transition from manual processes and Excel files to a structured CRM system for AVIS Erbil. Enhanced customer management, reservations handling, and reporting accuracy. Improved workflow efficiency and provided guidance to staff to ensure effective system utilization and continuity of operations.'
    }
  ],
  ar: [
    {
      id: 5,
      title: 'منصة تجارة إلكترونية للأعمال السورية',
      date: '',
      excerpt: 'منصة مبيعات مؤتمتة جاهزة للإطلاق مخصصة للشركات السورية وبائعي الإنستغرام.',
      image: 'https://images.unsplash.com/photo-1665686310429-ee43624978fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'تطوير موقع تجارة إلكترونية جاهز للإطلاق مخصص للأعمال السورية عبر الإنترنت، وخاصة بائعي الإنستغرام الذين يسعون لعملية مبيعات أكثر احترافية وأتمتة. تدعم المنصة إدارة المنتجات، والتعامل الآلي مع الطلبات، وبيانات العملاء المنظمة، مما يقلل العمل اليدوي ويحسن دقة الطلبات. تم استخدام أدوات الذكاء الاصطناعي لتحسين وتوحيد صور المنتجات للعرض على الويب، مما يساعد الشركات على الحفاظ على هوية علامة تجارية متسقة واحترافية.'
    },
    {
      id: 6,
      title: 'نظام التشغيل العيادي الموحد',
      date: '',
      excerpt: 'إدارة شاملة للعيادات تدمج السجلات الطبية والجدولة والفوترة للممارسات متعددة التخصصات.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'تصميم نظام شامل لإدارة العيادات مناسب للعيادات الطبية من جميع التخصصات. تقوم المنصة بمركزية إدارة المرضى، وجدولة المواعيد، والسجلات الطبية، والإجراءات، والفوترة، والتقارير في نظام واحد سهل الاستخدام. يدعم النظام ملفات المرضى المفصلة، والجدولة الذكية لتجنب التداخلات، وتتبع الإجراءات مع الملاحظات والصور، والفوترة المرنة مع مدفوعات جزئية أو كاملة، وتقارير تشغيلية فورية. يتضمن النظام إدارة أدوار متعددة للمستخدمين للأطباء والممرضات وموظفي الاستقبال والمحاسبين، وهو متوافق تماماً مع الهواتف المحمولة، مما يمكن العيادات من تقليل المعاملات الورقية، وتقليل الأخطاء، وتقديم تجربة مريض أكثر احترافية.'
    },
    {
      id: 1,
      title: 'نظام إدارة محلات الصياغة',
      date: '',
      excerpt: 'نظام ERP شامل مبني على Frappe مصمم لورش المجوهرات لإدارة المعاملات اليومية وسير العمل.',
      image: 'https://images.unsplash.com/photo-1609619741907-dcc81add10f7?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'تصميم ونشر نظام ERP شامل مبني على Frappe لورش المجوهرات لإدارة المعاملات والأرصدة والعمليات اليومية وسير العمل. تنفيذ واجهات متوافقة مع الموبايل، ومعالجة منظمة للبيانات، وميزات موثوقية النظام، مما ساهم في تحسين الكفاءة التشغيلية واتخاذ قرارات أفضل.'
    },
    {
      id: 2,
      title: 'تنفيذ ERPNext – شركة تصنيع أجبان (لبنان)',
      date: '',
      excerpt: 'رقمنة العمليات لمنتج رئيسي للأجبان في لبنان، لتحسين كفاءة سير العمل واعتماد النظام بشكل موثوق.',
      image: 'https://images.unsplash.com/photo-1610037275499-00c6b17c8ddd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'تنفيذ وتخصيص ERPNext لشركة تصنيع أجبان في لبنان، ورقمنة العمليات وتحسين كفاءة سير العمل. تهيئة الوحدات الرئيسية، وإدارة ترحيل البيانات، وتحديد أدوار المستخدمين والأذونات، وتدريب الموظفين لضمان التبني السلس والاستخدام الموثوق للنظام.'
    },
    {
      id: 3,
      title: 'التحقق من الشهادات بالبلوكشين',
      date: '',
      excerpt: 'تطوير نظام تحقق قائم على البلوكشين باستخدام عقود Solidity الذكية ومسح كود QR آمن.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000',
      content: 'تطوير نظام تحقق قائم على البلوكشين باستخدام شبكة إيثيريوم خاصة ذات عقد متعددة. تنفيذ عقود Solidity الذكية وواجهة ويب تمكن المؤسسات والمستخدمين من التحقق من الشهادات التعليمية عبر مسح كود QR آمن، مما يعزز المصداقية ويمنع تزوير الوثائق.'
    },
    {
      id: 4,
      title: 'نظام CRM لشركة AVIS لتأجير السيارات (أربيل)',
      date: '',
      excerpt: 'الانتقال من العمليات اليدوية لفرع AVIS في أربيل إلى نظام CRM منظم، مما عزز دقة التقارير.',
      image: 'https://images.unsplash.com/photo-1765446925577-59a34c05f778?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'دعم الانتقال من العمليات اليدوية وملفات إكسل إلى نظام CRM منظم لشركة AVIS في أربيل. تحسين إدارة العملاء، والتعامل مع الحجوزات، ودقة التقارير. تحسين كفاءة سير العمل وتقديم الإرشادات للموظفين لضمان الاستخدام الفعال للنظام واستمرارية العمليات.'
    }
  ],
  ku: [
    {
      id: 5,
      title: 'Platforma E-Bazirganiyê ji bo Karên Sûriyê',
      date: '',
      excerpt: 'Platformek firotanê ya otomatîk ji bo karsaziyên Sûriyê û firoşkarên Instagramê.',
      image: 'https://images.unsplash.com/photo-1665686310429-ee43624978fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'Malperek e-bazirganiyê ya amade ji bo karsaziyên serhêl ên Sûriyê, bi taybetî ji bo firoşkarên Instagramê yên ku li pêvajoyek firotanê ya profesyoneltir û otomatîktir digerin, hatî pêşve xistin. Platform piştgiriya rêveberiya hilberan, birêvebirina otomatîk a fermanan û daneyên xerîdar ên birêkûpêk dike.'
    },
    {
      id: 6,
      title: 'Sîstema Operasyona Klînîkî ya Yekbûyî',
      date: '',
      excerpt: 'Rêvebiriya klînîkî ya berfireh ku tomarên bijîjkî, bernamekirin û faturekirinê navendî dike.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'Sîstemek rêveberiya klînîkî ya berfireh ku ji bo klînîkên bijîjkî yên hemî taybetmendiyan guncan e hatî sêwirandin. Platform rêveberiya nexweşan, bernamekirina randevûyan, tomarên bijîjkî, pêvajoyan, faturekirin û raporkirinê di pergalek yekane de navendî dike. Sîstem bi tevahî mobîl-dostane ye.'
    },
    {
      id: 1,
      title: 'Sîstema Rêveberiya Zêrkeran',
      date: '',
      excerpt: 'ERP li ser bingeha Frappe ji bo kargehên zêrgeran hatiye sêwirandin da ku karên rojane birêve bibin.',
      image: 'https://images.unsplash.com/photo-1609619741907-dcc81add10f7?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'Sêwirandin û bicihkirina sîstema ERP li ser bingeha Frappe ji bo kargehên zêrgeran da ku danûstandin, bîlanço, operasyonên rojane û herikîna kar birêve bibin. Navberên guncan ji bo mobîlê hatine çêkirin.'
    },
    {
      id: 2,
      title: 'ERPNext – Cheese Manufacturing (Libnan)',
      date: '',
      excerpt: 'Dîjîtalîzekirina operasyonan ji bo hilberînerê penîr li Libnanê û baştirkirina karîgeriya herikîna kar.',
      image: 'https://images.unsplash.com/photo-1610037275499-00c6b17c8ddd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'Bicihkirina ERPNext ji bo kompanyayeke penîr li Libnanê, dîjîtalîzekirina operasyonan û baştirkirina karîgeriya herikîna kar. Perwerdekirina karmendan ji bo bikaranîna sîstemê hat encamdan.'
    },
    {
      id: 3,
      title: 'Verastkirina Dîplomayan bi Blockchain',
      date: '',
      excerpt: 'Pêşxistina sîstema verastkirinê ya li ser bingeha blockchain bi karanîna tora Ethereum.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000',
      content: 'Pêşxistina sîstema verastkirinê ya li ser bingeha blockchain bi karanîna tora taybet a Ethereum. Peymanên biaqil ên Solidity hatine bikaranîn da ku pêşî li sextekariya belgeyan were girtin.'
    },
    {
      id: 4,
      title: 'AVIS Erbil CRM Transformation',
      date: '',
      excerpt: 'Veguherîna ji pêvajoyên Excel bo sîstema CRM ji bo AVIS li Hewlêrê.',
      image: 'https://images.unsplash.com/photo-1765446925577-59a34c05f778?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'Piştgirîkirina veguherîna ji Excel bo sîstema CRM ji bo AVIS Hewlêr. Baştirkirina rêveberiya mişteriyan, rezervasyon û daxuyaniyên raporan. Karîgeriya herikîna kar hatiye zêdekirin.'
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
