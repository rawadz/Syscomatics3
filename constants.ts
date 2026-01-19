
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { Service, JournalArticle, Language, Product } from './types';

/**
 * KNOWLEDGE_BASE
 * This is the source of truth for your AI assistant. 
 * Update these strings to "train" the assistant on your specific business logic.
 */
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
    services: { header: 'Our Solutions', sub: 'Smart tools designed for modern companies.', back: 'Back', spec: 'Expertise in', pillars: 'Why This Matters', roadmap: 'Strategy', thesis: 'Overview', value: 'Business Value', briefAdd: 'Add to Brief', explore: 'Explore' },
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
    services: { header: 'حلولنا', sub: 'أدوات ذكية للشركات.', back: 'العودة', spec: 'الخبرة في', pillars: 'الأهمية', roadmap: 'الاستراتيجية', thesis: 'نظرة عامة', value: 'القيمة', briefAdd: 'إضافة للملخص', explore: 'اكتشف' },
    journal: { header: 'قصص النجاح', sub: 'التحولات', back: 'العودة', featured: 'أحدث الإنجازات', tactical: 'النتائج', readTime: 'دقائق' },
    inquiry: { title: 'مشروعك', sub: 'الاختيار', empty: 'القائمة فارغة.', remove: 'إزالة', initiate: 'بدء المراجعة', assessment: 'رد خلال ٢٤ ساعة', contact: 'الاتصال', name: 'الاسم', email: 'البريد', org: 'الشركة', context: 'التفاصيل', submit: 'إرسال', back: 'العودة', success: 'شكراً لك.', successSub: 'سنتواصل معك قريباً.', scopes: 'الخدمات المختارة' },
    footer: { sub: 'بناء مستقبل رقمي سيادي.', nav: 'التنقل', exp: 'الخبرة', newsletter: 'اشترك', newsd: 'احصل على التحديثات.', reg: 'انضم إلينا', contact: 'تواصل', address: 'دمشق، سوريا', email: 'info@syscomatics.com', phone: '+963 932 255 512' }
  },
  ku: {
    nav: { solutions: 'Çareserî', strategy: 'Stratejî', insights: 'Çîrok', brief: 'Kurteya Projeyê' },
    hero: { tagline: 'Nûvekirina Sîsteman 2025', title: 'Endezyarî ji bo', accent: 'Performansê.', sub: 'Sîstemên jêhatî ji bo rêxistinên nûjen.', cta1: 'Çareserî', cta2: 'Stratejî' },
    about: { 
      badge: 'Rêwîtî', 
      title: 'Hêsan. Rasterast.', 
      accent: 'Bibandor.', 
      sub: 'Sê gav ji bo geşbûna karsaziya we.',
      steps: [
        { title: 'Guhdarî', desc: 'Em armancên we fêm dikin.', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000' },
        { title: 'Avakirin', desc: 'Em mîmariya we ava dikin.', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000' },
        { title: 'Fermande', desc: 'Hûn kontrol dikin.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000' }
      ],
      uptime: 'Her dem Vekirî', 
      uptimed: 'Sîstemên bilez û ewle.' 
    },
    services: { header: 'Çareserî', sub: 'Amûrên aqilmend.', back: 'Vegere', spec: 'Pisporî', pillars: 'Girîngî', roadmap: 'Stratejî', thesis: 'Nêrîn', value: 'Feyde', briefAdd: 'Zêde Bike', explore: 'Keşf Bike' },
    journal: { header: 'Çîrok', sub: 'Veguherîn', back: 'Vegere', featured: 'Nû', tactical: 'Encam', readTime: 'dq' },
    inquiry: { title: 'Projeya We', sub: 'Hilbijartin', empty: 'Vala ye.', remove: 'Rake', initiate: 'Destpê Bike', assessment: 'Bersiv di 24 saetan de', contact: 'Têkilî', name: 'Nav', email: 'E-post', org: 'Pargîdanî', context: 'Hûrgulî', submit: 'Bişîne', back: 'Vegere', success: 'Spas.', successSub: 'Em ê têkevin têkiliyê.', scopes: 'Xizmet' },
    footer: { sub: 'Mîmariya dîjîtal a serwer.', nav: 'Navîgasyon', exp: 'Pisporî', newsletter: 'Abone', newsd: 'Nûçe bistînin.', reg: 'Tevlî Me Bibe', contact: 'Têkilî', address: 'Şam, Sûriye', email: 'info@syscomatics.com', phone: '+963 932 255 512' }
  }
};

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Neural Hub Alpha',
    category: 'Hardware',
    price: 899,
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
    description: 'High-performance processing unit for smart offices.',
    features: ['Fast AI Support', 'Low Energy Use', 'Durable Build']
  }
];

export const JOURNAL_ARTICLES: Record<Language, JournalArticle[]> = {
  en: [
    { id: 1, title: 'Infrastructure Modernization', date: 'Jan 12, 2025', excerpt: 'Cloud transition for regional retailers.', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000', content: 'Detailed report on transformation.' }
  ],
  ar: [
    { id: 1, title: 'تحديث البنية التحتية', date: '١٢ يناير ٢٠٢٥', excerpt: 'التحول السحابي لتجار التجزئة.', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000', content: 'دراسة حالة حول التحول الرقمي.' }
  ],
  ku: [
    { id: 1, title: 'Modernîzekirina Binesaziyê', date: '12 Rêbendan 2025', excerpt: 'Veguherîna ewr a firotgehan.', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000', content: 'Rapora veguherînê.' }
  ]
};

export const SERVICES_DATA: Record<Language, Service[]> = {
  en: [
    {
      id: 'erp',
      name: 'Business Management Systems (ERP)',
      tagline: 'Connect your entire company into one platform.',
      description: 'Organize your sales, stock, and money in one easy place.',
      longDescription: 'A Business Management System (ERP) connects all the different parts of your company—like sales, inventory, and accounting—into one easy-to-use platform. We focus on "Operational Elasticity," ensuring your system scales as your volume grows without degrading performance.',
      category: 'Enterprise',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
      features: ['Real-time Stock Tracking', 'Auto Invoicing', 'Staff Management'],
      domains: [{ name: 'Operations', description: 'Smoothing out daily workflows.' }],
      pillars: [
        { title: 'Data Sovereignty', description: 'Total control over where your business data lives and who can see it.' },
        { title: 'Information Security', description: 'Keep your private business data safe and under your control with local encryption.' },
        { title: 'Operational Elasticity', description: 'Architecture designed to handle 10x growth without needing a redesign.' },
        { title: 'Integrated Intelligence', description: 'Cross-departmental data flows that eliminate silos.' }
      ],
      roadmap: [
        { label: 'Discovery Phase', duration: '2 weeks', detail: 'Deep-dive interviews with department heads to map actual workflows.' },
        { label: 'System Customization', duration: '4 weeks', detail: 'Tailoring modules for regional tax laws and specific operational quirks.' },
        { label: 'Data Migration', duration: '2 weeks', detail: 'Secure transfer of legacy data into the new unified ecosystem.' },
        { label: 'Command Launch', duration: '1 week', detail: 'Live training and system handoff for your internal teams.' }
      ],
      benchmarks: [],
      techStack: ['Node.js', 'PostgreSQL', 'Microservices'],
      businessValue: 'Managing your business becomes simple, stress-free, and highly predictable. You save up to 40% on operational waste within the first year by eliminating redundant processes and data entry errors.'
    },
    {
      id: 'crm',
      name: 'Intelligence CRM Solutions',
      tagline: 'Understand your customers, scale your revenue.',
      description: 'Advanced analytics and client management for data-driven teams.',
      longDescription: 'Our CRM solutions enable businesses to track every customer interaction, automate sales pipelines, and leverage data for high-conversion marketing strategies. We use "Behavioral Analytics" to predict customer needs before they arise.',
      category: 'Enterprise',
      imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000',
      features: ['Lead Scoring', 'Automated Marketing', 'Client Lifecycle Tracking'],
      domains: [{ name: 'Sales', description: 'Optimizing the revenue funnel.' }],
      pillars: [
        { title: 'Behavioral Insights', description: 'Understanding why customers buy, not just what they buy.' },
        { title: 'Automated Pipeline', description: 'Removing manual friction from the sales process to increase velocity.' },
        { title: 'Privacy-First Logic', description: 'Building trust by handling client data with extreme care and transparency.' },
        { title: 'Revenue Forecasting', description: 'Data-driven models to predict future income with high accuracy.' }
      ],
      roadmap: [
        { label: 'Funnel Audit', duration: '2 weeks', detail: 'Analyzing your current sales journey and identifying leak points.' },
        { label: 'Logic Integration', duration: '3 weeks', detail: 'Connecting CRM with your website and email tools for seamless lead capture.' },
        { label: 'Automation Setup', duration: '2 weeks', detail: 'Configuring drip campaigns and automated follow-ups.' },
        { label: 'Scale Review', duration: 'Ongoing', detail: 'Regular performance tuning based on real-world sales data.' }
      ],
      benchmarks: [],
      techStack: ['Custom Node.js', 'PostgreSQL', 'Cloud Infrastructure'],
      businessValue: 'Maximize the lifetime value of every customer through better understanding and engagement. Increase sales team efficiency by 30% by automating follow-ups and prioritizing high-intent leads.'
    },
    {
      id: 'uiux',
      name: 'Architectural UI/UX Design',
      tagline: 'Interface engineering for the high-end web.',
      description: 'Scientific design focused on conversion, retention, and brand integrity.',
      longDescription: 'We don\'t just design layouts; we engineer user journeys. Our process combines behavioral psychology with high-performance front-end engineering to create interfaces that feel natural and premium.',
      category: 'Design',
      imageUrl: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=1000',
      features: ['Behavioral Mapping', 'High-Fidelity Prototypes', 'Design Systems'],
      domains: [{ name: 'Visual Identity', description: 'Establishing a premium digital presence.' }],
      pillars: [
        { title: 'Cognitive Load Reduction', description: 'Designing interfaces that require zero learning curve for the end user.' },
        { title: 'Conversion Engineering', description: 'Every pixel is placed to guide users toward your business goals.' },
        { title: 'Brand Continuity', description: 'Scalable design systems that grow with your company across all platforms.' },
        { title: 'Performance First', description: 'Ultra-light interfaces that load in under 1 second on any device.' }
      ],
      roadmap: [
        { label: 'User Research', duration: '2 weeks', detail: 'Interviewing stakeholders and analyzing competitors to find unique edges.' },
        { label: 'Wireframe Logic', duration: '2 weeks', detail: 'Building the structural skeleton of the user experience.' },
        { label: 'High-Fi Prototyping', duration: '2 weeks', detail: 'Validating concepts with interactive models before writing code.' },
        { label: 'System Build', duration: '4 weeks', detail: 'Developing the full React/Tailwind design system for production.' }
      ],
      benchmarks: [],
      techStack: ['Figma', 'React', 'Tailwind CSS'],
      businessValue: 'A professional, intuitive interface builds trust and ensures your users stay longer and buy more. It reduces support costs by up to 50% by making systems self-explanatory.'
    },
    {
      id: 'seo',
      name: 'Visibility & SEO Engineering',
      tagline: 'Dominate search, maximize organic speed.',
      description: 'Deep technical optimization to ensure your brand is seen first by your customers.',
      longDescription: 'SEO is an engineering problem. We optimize your site speed, semantic structure, and content authority to climb search rankings and stay there sustainably.',
      category: 'Consulting',
      imageUrl: 'https://images.unsplash.com/photo-1562577353-f71e93b5a63c?auto=format&fit=crop&q=80&w=1000',
      features: ['Core Web Vitals Optimization', 'Semantic Indexing', 'Authority Building'],
      domains: [{ name: 'Growth', description: 'Increasing your reach without paid ads.' }],
      pillars: [
        { title: 'Technical Authority', description: 'Winning the trust of search engine algorithms through perfect code.' },
        { title: 'Semantic Indexing', description: 'Matching your expertise with user search intent through structured data.' },
        { title: 'Performance Speed', description: 'Fast sites rank higher. We aim for 95+ PageSpeed scores.' },
        { title: 'Sustainable Growth', description: 'Long-term organic strategies that survive algorithm changes.' }
      ],
      roadmap: [
        { label: 'Site Audit', duration: '1 week', detail: 'Deep dive into site performance, crawlability, and index status.' },
        { label: 'Content Mapping', duration: '3 weeks', detail: 'Establishing topical authority in your niche with a 6-month plan.' },
        { label: 'Backlink Engineering', duration: 'Ongoing', detail: 'Building high-quality, relevant authority signals from around the web.' },
        { label: 'Analytics Tuning', duration: 'Monthly', detail: 'Adjusting strategies based on keyword performance and traffic patterns.' }
      ],
      benchmarks: [],
      techStack: ['Next.js', 'Google Search Console', 'Ahrefs Intelligence'],
      businessValue: 'Reduce your reliance on paid advertising by building a sustainable source of organic leads. Our clients typically see a 3x increase in organic leads within the first 6-9 months.'
    },
    {
      id: 'cyber',
      name: 'Smart Security (Cyber)',
      tagline: 'Keep your business data safe and private.',
      description: 'Advanced protection against digital threats and data loss.',
      longDescription: 'Our security systems protect your company from hackers and data theft. We build a safety net around your business using a "Zero-Trust" architecture.',
      category: 'Security',
      imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
      features: ['Secure Login', 'Threat Detection', 'Data Protection'],
      domains: [{ name: 'Security', description: 'Protecting your digital assets.' }],
      pillars: [
        { title: 'Zero Trust Logic', description: 'Verify every request, every time. No exceptions.' },
        { title: 'Constant Monitoring', description: 'Your systems are monitored 24/7 for any suspicious activity or breaches.' },
        { title: 'Encryption at Rest', description: 'Your data is scrambled so it is useless to anyone who shouldn\'t have it.' },
        { title: 'Disaster Recovery', description: 'Guaranteed backups to bring your business back online in minutes.' }
      ],
      roadmap: [
        { label: 'Vuln-Audit', duration: '1 week', detail: 'Finding any weak spots in your current firewall and software.' },
        { label: 'Shield Implementation', duration: '2 weeks', detail: 'Installing modern security protocols and multi-factor auth.' },
        { label: 'Staff Training', duration: '1 week', detail: 'Teaching your team to spot phishing and social engineering attacks.' },
        { label: 'Live Drills', duration: 'Ongoing', detail: 'Simulating attacks to test and reinforce your defenses.' }
      ],
      benchmarks: [],
      techStack: ['Cloudflare', 'Zero Trust', 'Advanced Firewalls'],
      businessValue: 'Peace of mind knowing your company secrets are locked away. Prevents catastrophic financial loss from ransomware or data theft.'
    },
    {
      id: 'api',
      name: 'Custom API & Integration',
      tagline: 'The bridge between your digital assets.',
      description: 'Custom middleware and API development to synchronize your business operations.',
      longDescription: 'We build high-performance bridges between your existing software. Our custom APIs ensure data flows seamlessly between your ERP, CRM, and website, ensuring "Single Source of Truth" across your org.',
      category: 'Development',
      imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1000',
      features: ['REST & GraphQL', 'Third-party Integration', 'Real-time Webhooks'],
      domains: [{ name: 'Interconnectivity', description: 'Linking disparate data silos.' }],
      pillars: [
        { title: 'Low-Latency Sync', description: 'Data moves between your systems in milliseconds.' },
        { title: 'Scalable Logic', description: 'APIs that handle heavy traffic without breaking or slowing down.' },
        { title: 'Universal Connectivity', description: 'Linking even legacy software with modern web tools.' },
        { title: 'API Security', description: 'Hardened endpoints to prevent unauthorized data access.' }
      ],
      roadmap: [
        { label: 'Mapping Phase', duration: '1 week', detail: 'Defining how data should travel and what the single source of truth is.' },
        { label: 'Endpoint Dev', duration: '2 weeks', detail: 'Writing the code that lets systems "talk" to each other.' },
        { label: 'Integration Test', duration: '1 week', detail: 'Stress testing the connection with large data loads.' },
        { label: 'Launch & Sync', duration: 'Ongoing', detail: 'Monitoring for uptime and adjusting as software updates.' }
      ],
      benchmarks: [],
      techStack: ['Node.js', 'Go', 'Express'],
      businessValue: 'Automates data entry and eliminates human error across your company. Saves hundreds of man-hours spent on manual cross-platform updates.'
    },
    {
      id: 'infra-audit',
      name: 'Infrastructure Health Audit',
      tagline: 'Evaluate. Optimize. Secure.',
      description: 'Professional assessment of your current hardware and software health.',
      longDescription: 'We perform a deep dive into your current IT setup. We identify bottlenecks, security risks, and opportunities for cost savings. Our "Efficiency First" methodology ensures you maximize current resources.',
      category: 'Consulting',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000',
      features: ['Performance Benchmarking', 'Security Vulnerability Scanning', 'Cost Optimization Report'],
      domains: [{ name: 'Sustainability', description: 'Long-term IT viability.' }],
      pillars: [
        { title: 'Efficiency First', description: 'We find ways to get more performance from your current hardware before suggesting buy.' },
        { title: 'Obsolescence Plan', description: 'Identifying which systems will fail in the next 12 months.' },
        { title: 'Licensing Audit', description: 'Ensuring you aren\'t paying for software you don\'t use.' },
        { title: 'Safety Certification', description: 'Confirming your hardware setup meets international safety standards.' }
      ],
      roadmap: [
        { label: 'On-Site Scan', duration: '1 week', detail: 'Physical and digital review of servers, networks, and machines.' },
        { label: 'Logic Review', duration: '1 week', detail: 'Analyzing software licenses and data storage methods.' },
        { label: 'Impact Report', duration: '1 week', detail: 'Providing a clear roadmap of what to fix, keep, or replace.' }
      ],
      benchmarks: [],
      techStack: [],
      businessValue: 'Save money by only upgrading what you truly need. Our audits typically find 20-30% in yearly IT cost savings through optimization.'
    },
    {
      id: 'mobile-eng',
      name: 'Mobile App Engineering',
      tagline: 'Your business in the palms of their hands.',
      description: 'Native and cross-platform mobile apps built for performance and scale.',
      longDescription: 'We develop sleek, powerful mobile applications for iOS and Android. Our focus is on providing a "Native Performance" experience that keeps users engaged and drives loyalty.',
      category: 'Development',
      imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000',
      features: ['Native Performance', 'Offline Mode', 'Push Notifications'],
      domains: [{ name: 'Mobile Growth', description: 'Capturing the smartphone market.' }],
      pillars: [
        { title: 'Native Performance', description: 'Apps that feel smooth, fast, and responsive on any phone.' },
        { title: 'Offline-First Logic', description: 'Ensuring your app works even when your customers have no signal.' },
        { title: 'Responsive Design', description: 'Apps that look beautiful on every screen size, from phone to tablet.' },
        { title: 'Engagement Focus', description: 'Using psychological triggers to keep users coming back.' }
      ],
      roadmap: [
        { label: 'Concept Review', duration: '2 weeks', detail: 'Defining the core "Killer Feature" and user flow.' },
        { label: 'Engineering', duration: '6 weeks', detail: 'Full-stack development of the mobile and backend infrastructure.' },
        { label: 'Beta Testing', duration: '2 weeks', detail: 'Testing with real users to find and fix edge cases.' },
        { label: 'Store Launch', duration: '1 week', detail: 'Managing the submission process to Apple and Google stores.' }
      ],
      benchmarks: [],
      techStack: ['React Native', 'Swift', 'Kotlin'],
      businessValue: 'Increase customer loyalty and accessibility. Provides a direct marketing channel to your customers through their most personal device.'
    },
    {
      id: 'blockchain',
      name: 'Transparent Records (Blockchain)',
      tagline: 'Trust and honesty built into your systems.',
      description: 'Secure, unchangeable records for contracts and tracking.',
      longDescription: 'Blockchain is a way to record information so that it can never be changed or deleted. It creates a digital paper trail that everyone can trust but no one can manipulate. We use "Immutable Ledger" technology.',
      category: 'Blockchain',
      imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000',
      features: ['Proof of Origin', 'Secure Contracts', 'Fraud Prevention'],
      domains: [{ name: 'Logistics', description: 'Tracking items with total honesty.' }],
      pillars: [
        { title: 'Immutable Ledger', description: 'Records that cannot be hacked, changed, or hidden by anyone.' },
        { title: 'No Middlemen', description: 'Direct verification between you and your partners, reducing legal fees.' },
        { title: 'Smart Contracts', description: 'Self-executing agreements that only pay out when work is verified.' },
        { title: 'Total Transparency', description: 'Allowing your customers to see exactly where their products came from.' }
      ],
      roadmap: [
        { label: 'Feasibility Study', duration: '2 weeks', detail: 'Determining if blockchain actually adds value to your specific case.' },
        { label: 'Network Design', duration: '3 weeks', detail: 'Choosing the right ledger (Ethereum, Polygon, etc.) and building the logic.' },
        { label: 'Contract Dev', duration: '3 weeks', detail: 'Writing the smart contracts that automate your business trust.' }
      ],
      benchmarks: [],
      techStack: ['Ethereum', 'Solidity', 'Web3.js'],
      businessValue: 'Eliminate fraud and reduce legal costs. Builds immense trust with customers by proving your supply chain honesty.'
    },
    {
      id: 'cloud',
      name: 'Modern Infrastructure (Cloud)',
      tagline: 'Your business, online and reliable.',
      description: 'Secure hosting and digital storage for a modern company.',
      longDescription: 'We move your business to the cloud so you can access your work from anywhere. We aim for "Global High Availability," ensuring zero data loss and maximum uptime.',
      category: 'Cloud',
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
      features: ['Global Access', 'Auto Backups', 'High Reliability'],
      domains: [{ name: 'Infrastructure', description: 'Stable foundations for your apps.' }],
      pillars: [
        { title: 'High Availability', description: 'Your systems are available 24/7 with zero downtime across multiple global hubs.' },
        { title: 'Elastic Scaling', description: 'Your servers grow automatically during busy times and shrink when quiet to save money.' },
        { title: 'Zero Data Loss', description: 'Real-time backups ensuring your business can never lose its brain.' },
        { title: 'Edge Computing', description: 'Putting your data physically closer to your users for ultra-fast speeds.' }
      ],
      roadmap: [
        { label: 'Cloud Strategy', duration: '2 weeks', detail: 'Deciding between AWS, Google, or private local clouds based on your needs.' },
        { label: 'Migration', duration: '3 weeks', detail: 'Moving your existing data securely without stopping your daily operations.' },
        { label: 'Optimization', duration: 'Ongoing', detail: 'Monitoring costs and performance to ensure the best ROI.' }
      ],
      benchmarks: [],
      techStack: ['AWS', 'Google Cloud', 'Terraform'],
      businessValue: 'Lower hardware costs and empower your team to work globally. Replaces expensive on-site server maintenance with predictable monthly billing.'
    }
  ],
  ar: [
    {
      id: 'erp',
      name: 'نظم إدارة الأعمال (ERP)',
      tagline: 'اربط شركتك بالكامل في منصة واحدة.',
      description: 'نظم مبيعاتك ومخزونك وأموالك في مكان واحد سهل.',
      longDescription: 'يربط نظام إدارة الأعمال (ERP) جميع الأجزاء المختلفة لشركتك - مثل المبيعات والمخزون والمحاسبة - في منصة واحدة سهلة الاستخدام. نركز على "المرونة التشغيلية" لضمان نمو النظام مع نمو أعمالك.',
      category: 'Enterprise',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
      features: ['تتبع المخزون في الوقت الفعلي', 'الفواتير الآلية', 'إدارة الموظفين'],
      domains: [{ name: 'العمليات', description: 'تسهيل سير العمل اليومي.' }],
      pillars: [
        { title: 'سيادة البيانات', description: 'تحكم كامل في مكان تخزين بيانات عملك ومن يمكنه رؤيتها.' },
        { title: 'أمن المعلومات', description: 'حافظ على أمان بيانات عملك الخاصة بفضل التشفير المحلي.' },
        { title: 'المرونة التشغيلية', description: 'معمارية مصممة للتعامل مع نمو مضاعف دون الحاجة لإعادة تصميم.' },
        { title: 'الذكاء المتكامل', description: 'تدفقات بيانات بين الأقسام تلغي الجزر المنعزلة.' }
      ],
      roadmap: [
        { label: 'مرحلة الاكتشاف', duration: 'أسبوعان', detail: 'مقابلات معمقة مع رؤساء الأقسام لرسم خرائط سير العمل الفعلية.' },
        { label: 'تخصيص النظام', duration: '٤ أسابيع', detail: 'بناء النظام لاحتياجاتك المحددة والقوانين المحلية.' },
        { label: 'نقل البيانات', duration: 'أسبوعان', detail: 'نقل آمن للبيانات القديمة إلى النظام الموحد الجديد.' },
        { label: 'التدريب والإطلاق', duration: 'أسبوع واحد', detail: 'تدريب مباشر وتسليم النظام لفرقك الداخلية.' }
      ],
      benchmarks: [],
      techStack: ['Node.js', 'PostgreSQL'],
      businessValue: 'تصبح إدارة عملك بسيطة وخالية من التوتر. توفر ما يصل إلى ٤٠٪ من الهدر التشغيلي في السنة الأولى.'
    },
    {
        id: 'crm',
        name: 'حلول ذكاء العملاء (CRM)',
        tagline: 'افهم عملاءك، وضاعف أرباحك.',
        description: 'تحليلات متقدمة وإدارة العملاء للفرق الموجهة بالبيانات.',
        longDescription: 'تمكن حلول CRM الشركات من تتبع كل تفاعل مع العملاء، وأتمتة مسارات المبيعات، واستغلال البيانات لاستراتيجيات تسويق عالية التحويل. نستخدم تحليلات السلوك للتنبؤ باحتياجات عملائك.',
        category: 'Enterprise',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000',
        features: ['تقييم العملاء المحتملين', 'التسويق الآلي', 'تتبع دورة حياة العميل'],
        domains: [{ name: 'المبيعات', description: 'تحسين قمع الإيرادات.' }],
        pillars: [
          { title: 'رؤى سلوكية', description: 'فهم سبب شراء العملاء، وليس فقط ما يشترونه.' },
          { title: 'أتمتة المبيعات', description: 'إزالة العوائق اليدوية من عملية البيع لزيادة السرعة.' },
          { title: 'الخصوصية أولاً', description: 'بناء الثقة من خلال التعامل مع بيانات العملاء بعناية فائقة.' },
          { title: 'توقعات الإيرادات', description: 'نماذج موجهة بالبيانات للتنبؤ بالدخل المستقبلي بدقة عالية.' }
        ],
        roadmap: [
          { label: 'تدقيق المبيعات', duration: 'أسبوعان', detail: 'تحليل مسار المبيعات الحالي وتحديد نقاط التسرب.' },
          { label: 'ربط الأنظمة', duration: '٣ أسابيع', detail: 'ربط نظام CRM بموقعك وأدوات بريدك الإلكتروني.' },
          { label: 'إعداد الأتمتة', duration: 'أسبوعان', detail: 'تكوين الحملات التلقائية والمتابعات الآلية.' }
        ],
        benchmarks: [],
        techStack: [],
        businessValue: 'عظم القيمة طويلة الأمد لكل عميل من خلال فهم وتفاعل أفضل. تزيد كفاءة فريق المبيعات بنسبة ٣٠٪.'
      }
  ],
  ku: []
};

export const getServices = (lang: Language): Service[] => {
  return SERVICES_DATA[lang] && SERVICES_DATA[lang].length > 0 ? SERVICES_DATA[lang] : SERVICES_DATA.en;
};

export const BRAND_NAME = 'Syscomatics';
export const PRIMARY_COLOR = '#0037f3'; 
export const DARK_COLOR = '#0a0b0d';
