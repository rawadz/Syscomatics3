
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
      philosophy: "Syscomatics prioritized sovereign digital infrastructure and long-term stability over disposable fixes.",
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
      longDescription: 'A Business Management System (ERP) connects all the different parts of your company—like sales, inventory, and accounting—into one easy-to-use platform.',
      category: 'Enterprise',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
      features: ['Real-time Stock Tracking', 'Auto Invoicing', 'Staff Management'],
      domains: [{ name: 'Operations', description: 'Smoothing out daily workflows.' }],
      pillars: [
        { title: 'Information Security', description: 'Keep your private business data safe and under your control.' },
        { title: 'Save Time', description: 'Automate repetitive tasks so your team can focus on growing the business.' }
      ],
      roadmap: [
        { label: 'Strategic Planning', duration: '2 weeks', detail: 'Looking at how your business works now.' },
        { label: 'System Customization', duration: '4 weeks', detail: 'Building the system for your specific needs.' }
      ],
      benchmarks: [{ label: 'Work Efficiency', value: '+50%' }, { label: 'Admin Errors', value: '-70%' }],
      techStack: ['Node.js', 'PostgreSQL'],
      businessValue: 'Managing your business becomes simple and stress-free.'
    },
    {
      id: 'crm',
      name: 'Intelligence CRM Solutions',
      tagline: 'Understand your customers, scale your revenue.',
      description: 'Advanced analytics and client management for data-driven teams.',
      longDescription: 'Our CRM solutions enable businesses to track every customer interaction, automate sales pipelines, and leverage data for high-conversion marketing strategies.',
      category: 'Enterprise',
      imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000',
      features: ['Lead Scoring', 'Automated Marketing', 'Client Lifecycle Tracking'],
      domains: [{ name: 'Sales', description: 'Optimizing the revenue funnel.' }],
      pillars: [
        { title: 'Data Intelligence', description: 'Turn customer data into actionable growth strategies.' },
        { title: 'Sales Velocity', description: 'Shorten sales cycles with intelligent automation.' }
      ],
      roadmap: [
        { label: 'Process Mapping', duration: '2 weeks', detail: 'Defining your unique sales and support stages.' },
        { label: 'Integration', duration: '3 weeks', detail: 'Connecting CRM with your website and email tools.' }
      ],
      benchmarks: [{ label: 'Retention', value: '+35%' }, { label: 'Sales Growth', value: '+25%' }],
      techStack: ['Custom Node.js', 'PostgreSQL', 'Cloud Infrastructure'],
      businessValue: 'Maximize the lifetime value of every customer through better understanding and engagement.'
    },
    {
      id: 'uiux',
      name: 'Architectural UI/UX Design',
      tagline: 'Interface engineering for the high-end web.',
      description: 'Scientific design focused on conversion, retention, and brand integrity.',
      longDescription: 'We don\'t just design layouts; we engineer user journeys. Our process combines behavioral psychology with high-performance front-end engineering.',
      category: 'Design',
      imageUrl: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=1000',
      features: ['Behavioral Mapping', 'High-Fidelity Prototypes', 'Design Systems'],
      domains: [{ name: 'Visual Identity', description: 'Establishing a premium digital presence.' }],
      pillars: [
        { title: 'Conversion Focus', description: 'Every pixel is placed to guide users toward your business goals.' },
        { title: 'Brand Consistency', description: 'Scalable design systems that grow with your company.' }
      ],
      roadmap: [
        { label: 'User Research', duration: '2 weeks', detail: 'Interviewing stakeholders and analyzing competitors.' },
        { label: 'Interactive Prototyping', duration: '2 weeks', detail: 'Validating concepts before writing a single line of code.' }
      ],
      benchmarks: [{ label: 'User Engagement', value: '+60%' }, { label: 'Conversion Rate', value: '+40%' }],
      techStack: ['Figma', 'React', 'Tailwind CSS'],
      businessValue: 'A professional, intuitive interface builds trust and ensures your users stay longer and buy more.'
    },
    {
      id: 'seo',
      name: 'Visibility & SEO Engineering',
      tagline: 'Dominate search, maximize organic speed.',
      description: 'Deep technical optimization to ensure your brand is seen first by your customers.',
      longDescription: 'SEO is an engineering problem. We optimize your site speed, semantic structure, and content authority to climb search rankings and stay there.',
      category: 'Consulting',
      imageUrl: 'https://images.unsplash.com/photo-1562577353-f71e93b5a63c?auto=format&fit=crop&q=80&w=1000',
      features: ['Core Web Vitals Optimization', 'Semantic Indexing', 'Authority Building'],
      domains: [{ name: 'Growth', description: 'Increasing your reach without paid ads.' }],
      pillars: [
        { title: 'Technical Authority', description: 'Winning the trust of search engine algorithms.' },
        { title: 'Semantic Content', description: 'Matching your expertise with user search intent.' }
      ],
      roadmap: [
        { label: 'Technical Audit', duration: '1 week', detail: 'Deep dive into site performance and crawlability.' },
        { label: 'Content Strategy', duration: '3 weeks', detail: 'Establishing topical authority in your niche.' }
      ],
      benchmarks: [{ label: 'Organic Traffic', value: '+200%' }, { label: 'Page Speed', value: '<1s' }],
      techStack: ['Next.js', 'Google Search Console', 'Ahrefs Intelligence'],
      businessValue: 'Reduce your reliance on paid advertising by building a sustainable source of organic leads.'
    },
    {
      id: 'cyber',
      name: 'Smart Security (Cyber)',
      tagline: 'Keep your business data safe and private.',
      description: 'Advanced protection against digital threats and data loss.',
      longDescription: 'Our security systems protect your company from hackers and data theft. We build a safety net around your business.',
      category: 'Security',
      imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
      features: ['Secure Login', 'Threat Detection', 'Data Protection'],
      domains: [{ name: 'Security', description: 'Protecting your digital assets.' }],
      pillars: [
        { title: 'Constant Protection', description: 'Your systems are monitored 24/7 for any suspicious activity.' }
      ],
      roadmap: [
        { label: 'Security Audit', duration: '1 week', detail: 'Finding any weak spots in your security.' }
      ],
      benchmarks: [{ label: 'Safety Level', value: 'Highest' }, { label: 'Risk Reduction', value: '95%' }],
      techStack: ['Cloudflare', 'Zero Trust'],
      businessValue: 'Peace of mind knowing your company secrets are locked away.'
    },
    {
      id: 'api',
      name: 'Custom API & Integration',
      tagline: 'The bridge between your digital assets.',
      description: 'Custom middleware and API development to synchronize your business operations.',
      longDescription: 'We build high-performance bridges between your existing software. Our custom APIs ensure data flows seamlessly between your ERP, CRM, and website.',
      category: 'Development',
      imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1000',
      features: ['REST & GraphQL', 'Third-party Integration', 'Real-time Webhooks'],
      domains: [{ name: 'Interconnectivity', description: 'Linking disparate data silos.' }],
      pillars: [
        { title: 'Scalable Logic', description: 'APIs that handle heavy traffic without breaking.' }
      ],
      roadmap: [
        { label: 'Endpoint Mapping', duration: '1 week', detail: 'Defining how data should travel between systems.' }
      ],
      benchmarks: [{ label: 'Data Sync Latency', value: '<100ms' }],
      techStack: ['Node.js', 'Go', 'Express'],
      businessValue: 'Automates data entry and eliminates human error across your company.'
    },
    {
      id: 'infra-audit',
      name: 'Infrastructure Health Audit',
      tagline: 'Evaluate. Optimize. Secure.',
      description: 'Professional assessment of your current hardware and software health.',
      longDescription: 'We perform a deep dive into your current IT setup. We identify bottlenecks, security risks, and opportunities for cost savings.',
      category: 'Consulting',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000',
      features: ['Performance Benchmarking', 'Security Vulnerability Scanning', 'Cost Optimization Report'],
      domains: [{ name: 'Sustainability', description: 'Long-term IT viability.' }],
      pillars: [
        { title: 'Efficiency First', description: 'We find ways to get more performance from your current hardware.' }
      ],
      roadmap: [
        { label: 'Full System Scan', duration: '2 weeks', detail: 'Reviewing servers, networks, and software licenses.' }
      ],
      benchmarks: [{ label: 'Cost Savings Found', value: 'Avg 20%' }],
      techStack: [],
      businessValue: 'Save money by only upgrading what you truly need and securing what you have.'
    },
    {
      id: 'mobile-eng',
      name: 'Mobile App Engineering',
      tagline: 'Your business in the palms of their hands.',
      description: 'Native and cross-platform mobile apps built for performance and scale.',
      longDescription: 'We develop sleek, powerful mobile applications for iOS and Android. Our focus is on providing a seamless experience that keeps users engaged.',
      category: 'Development',
      imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000',
      features: ['Native Performance', 'Offline Mode', 'Push Notifications'],
      domains: [{ name: 'Mobile Growth', description: 'Capturing the smartphone market.' }],
      pillars: [
        { title: 'Responsive Design', description: 'Apps that look beautiful on every screen size.' }
      ],
      roadmap: [
        { label: 'App Architecture', duration: '3 weeks', detail: 'Designing for low-latency and battery efficiency.' }
      ],
      benchmarks: [{ label: 'App Store Rating', value: 'Target 4.8+' }],
      techStack: ['React Native', 'Swift', 'Kotlin'],
      businessValue: 'Increase customer loyalty and accessibility with a dedicated mobile presence.'
    },
    {
      id: 'blockchain',
      name: 'Transparent Records (Blockchain)',
      tagline: 'Trust and honesty built into your systems.',
      description: 'Secure, unchangeable records for contracts and tracking.',
      longDescription: 'Blockchain is a way to record information so that it can never be changed or deleted. It creates a digital paper trail that everyone can trust but no one can manipulate.',
      category: 'Blockchain',
      imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000',
      features: ['Proof of Origin', 'Secure Contracts', 'Fraud Prevention'],
      domains: [{ name: 'Logistics', description: 'Tracking items with total honesty.' }],
      pillars: [
        { title: 'No Middlemen', description: 'Direct verification between you and your partners, reducing processing fees and legal overhead.' }
      ],
      roadmap: [
        { label: 'Ledger Logic', duration: '2 weeks', detail: 'Defining what specific business data needs the highest level of trust.' }
      ],
      benchmarks: [{ label: 'Trust Level', value: '100%' }, { label: 'Verification Speed', value: 'Instant' }],
      techStack: ['Ethereum', 'Solidity', 'Web3.js'],
      businessValue: 'Eliminate fraud and reduce legal costs by moving critical business records to a secure, decentralized ledger.'
    },
    {
      id: 'cloud',
      name: 'Modern Infrastructure (Cloud)',
      tagline: 'Your business, online and reliable.',
      description: 'Secure hosting and digital storage for a modern company.',
      longDescription: 'We move your business to the cloud so you can access your work from anywhere in the world, ensuring zero data loss and maximum uptime.',
      category: 'Cloud',
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
      features: ['Global Access', 'Auto Backups', 'High Reliability'],
      domains: [{ name: 'Infrastructure', description: 'Stable foundations for your apps.' }],
      pillars: [
        { title: 'Always Online', description: 'Your systems are available 24/7 with zero downtime and automatic failure recovery.' }
      ],
      roadmap: [
        { label: 'Migration Plan', duration: '2 weeks', detail: 'Moving your existing data and applications to a modern cloud environment.' }
      ],
      benchmarks: [{ label: 'Uptime', value: '99.99%' }, { label: 'Scalability', value: 'Infinite' }],
      techStack: ['AWS', 'Google Cloud', 'Terraform'],
      businessValue: 'Lower hardware costs and empower your team to work globally with complete data security.'
    }
  ],
  ar: [
    {
      id: 'erp',
      name: 'نظم إدارة الأعمال (ERP)',
      tagline: 'اربط شركتك بالكامل في منصة واحدة.',
      description: 'نظم مبيعاتك ومخزونك وأموالك في مكان واحد سهل.',
      longDescription: 'يربط نظام إدارة الأعمال (ERP) جميع الأجزاء المختلفة لشركتك - مثل المبيعات والمخزون والمحاسبة - في منصة واحدة سهلة الاستخدام.',
      category: 'Enterprise',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
      features: ['تتبع المخزون في الوقت الفعلي', 'الفواتير الآلية', 'إدارة الموظفين'],
      domains: [{ name: 'العمليات', description: 'تسهيل سير العمل اليومي.' }],
      pillars: [
        { title: 'أمن المعلومات', description: 'حافظ على أمان بيانات عملك الخاصة وتحت سيطرتك.' },
        { title: 'توفير الوقت', description: 'أتمتة المهام المتكررة ليركز فريقك على نمو العمل.' }
      ],
      roadmap: [
        { label: 'التخطيط الاستراتيجي', duration: 'أسبوعان', detail: 'دراسة كيفية عمل عملك الآن.' },
        { label: 'تخصيص النظام', duration: 'أربعة أسابيع', detail: 'بناء النظام لاحتياجاتك المحددة.' }
      ],
      benchmarks: [{ label: 'كفاءة العمل', value: '+50%' }, { label: 'أخطاء الإدارة', value: '-70%' }],
      techStack: ['Node.js', 'PostgreSQL'],
      businessValue: 'تصبح إدارة عملك بسيطة وخالية من التوتر.'
    },
    {
        id: 'crm',
        name: 'حلول ذكاء العملاء (CRM)',
        tagline: 'افهم عملاءك، وضاعف أرباحك.',
        description: 'تحليلات متقدمة وإدارة العملاء للفرق الموجهة بالبيانات.',
        longDescription: 'تمكن حلول CRM الشركات من تتبع كل تفاعل مع العملاء، وأتمتة مسارات المبيعات، واستغلال البيانات لاستراتيجيات تسويق عالية التحويل.',
        category: 'Enterprise',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000',
        features: ['تقييم العملاء المحتملين', 'التسويق الآلي', 'تتبع دورة حياة العميل'],
        domains: [{ name: 'المبيعات', description: 'تحسين قمع الإيرادات.' }],
        pillars: [
          { title: 'ذكاء البيانات', description: 'حول بيانات العملاء إلى استراتيجيات نمو قابلة للتنفيذ.' }
        ],
        roadmap: [
          { label: 'رسم العمليات', duration: 'أسبوعان', detail: 'تحديد مراحل المبيعات والدعم الفريدة الخاصة بك.' }
        ],
        benchmarks: [{ label: 'الاحتفاظ بالعملاء', value: '+35%' }],
        techStack: [],
        businessValue: 'عظم القيمة طويلة الأمد لكل عميل من خلال فهم وتفاعل أفضل.'
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
