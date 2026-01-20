
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
    journal: { header: 'Success Stories', sub: 'Transformations', back: 'Back', featured: 'Latest Win', tactical: 'Client Outcomes', readTime: 'min read' },
    inquiry: { title: 'Your Project', sub: 'Selection', empty: 'List is empty.', remove: 'Remove', initiate: 'Start Review', assessment: 'Expert reply in 24h', contact: 'Contact Info', name: 'Your Name', email: 'Email', org: 'Company', context: 'Details', submit: 'Send Request', back: 'Back', success: 'Thank You.', successSub: 'We will contact you soon.', scopes: 'Selected Services' },
    footer: { sub: 'Architecting sovereign digital futures.', nav: 'Navigation', exp: 'Expertise', newsletter: 'Subscribe', newsd: 'Get updates.', reg: 'Join Us', contact: 'Connect', address: 'Damascus, Syria', email: 'info@syscomatics.com', phone: '+963 932 255 512' },
    cookie: { title: 'Systems Protocol', desc: 'We utilize localized caching to ensure your Project Brief and language preferences persist across sessions.', accept: 'Accept Protocol', reject: 'Decline' }
  },
  ar: {
    nav: { solutions: 'الحلول', strategy: 'الاستراتيجية', insights: 'قصص النجاح', brief: 'ملخص المشروع' },
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
    journal: { header: 'قصص النجاح', sub: 'التحولات', back: 'العودة', featured: 'أحدث الإنجازات', tactical: 'النتائج', readTime: 'دقائق' },
    inquiry: { title: 'مشروعك', sub: 'الاختيار', empty: 'القائمة فارغة.', remove: 'إزالة', initiate: 'بدء المراجعة', assessment: 'رد خلال ٢٤ ساعة', contact: 'الاتصال', name: 'الاسم', email: 'البريد', org: 'الشركة', context: 'التفاصيل', submit: 'إرسال', back: 'العودة', success: 'شكراً لك.', successSub: 'سنتواصل معك قريباً.', scopes: 'الخدمات المختارة' },
    footer: { sub: 'بناء مستقبل رقمي سيادي.', nav: 'التنقل', exp: 'الخبرة', newsletter: 'اشترك', newsd: 'احصل على التحديثات.', reg: 'انضم إلينا', contact: 'تواصل', address: 'دمشق، سوريا', email: 'info@syscomatics.com', phone: '+963 932 255 512' },
    cookie: { title: 'بروتوكول الأنظمة', desc: 'نحن نستخدم التخزين المحلي لضمان استمرار ملخص مشروعك وتفضيلات اللغة الخاصة بك عبر الجلسات.', accept: 'قبول البروتوكول', reject: 'رفض' }
  },
  ku: {
    nav: { solutions: 'Çareserî', strategy: 'Stratejî', insights: 'Çîrok', brief: 'Kurteya Projeyê' },
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
    services: { header: 'Çareseriyên Me', sub: 'Amûrên aqilmend ên ji bo pargîdaniyên nûjen hatine sêwirandin.', back: 'Vegere', spec: 'Pisporî di', pillars: 'Çima Ev Girîng e', roadmap: 'Nexşerêya Stratejîk', thesis: 'Teza Mîmarî', value: 'Nirxa Karsaziya Stratejîk', briefAdd: 'Li Kurteyê Zêde Bike', explore: 'Lêkolîn Bike' },
    journal: { header: 'Çîrokên Serkeftinê', sub: 'Veguherîn', back: 'Vegere', featured: 'Serkeftina Dawî', tactical: 'Encamên Mişterî', readTime: 'deqe xwendin' },
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
      features: ['Real-time Inventory', 'Automated Accounting', 'Employee Portals'],
      domains: [{ name: 'Operations', description: 'Smoothing daily workflows.' }],
      pillars: [
        { title: 'Single Truth', description: 'Every department looks at the same data.' },
        { title: 'Efficiency', description: 'Remove manual copying between different files.' }
      ],
      roadmap: [
        { label: 'Audit', duration: '', detail: 'Listing all current business steps.' },
        { label: 'Platform Build', duration: '', detail: 'Creating your custom control center.' }
      ],
      benchmarks: [],
      techStack: ['Node.js', 'PostgreSQL'],
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
      features: ['Secure Payments', 'Mobile-First Design', 'Global Shipping Sync'],
      domains: [{ name: 'Retail', description: 'Scaling digital sales.' }],
      pillars: [
        { title: 'Customer Trust', description: 'Safe payment gateways that protect buyer data.' },
        { title: 'Speed', description: 'Fast page loads to keep shoppers from leaving.' }
      ],
      roadmap: [
        { label: 'Design', duration: '', detail: 'Crafting the perfect user journey.' },
        { label: 'Launch', duration: '', detail: 'Setting up gateways and logistics.' }
      ],
      benchmarks: [],
      techStack: ['Next.js', 'Stripe'],
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
      features: ['Sales Pipelines', 'Email History', 'Task Reminders'],
      domains: [{ name: 'Sales', description: 'Optimizing the funnel.' }],
      pillars: [
        { title: 'Organization', description: 'No more lost sticky notes or messy spreadsheets.' },
        { title: 'Analytics', description: 'See which products or staff are selling best.' }
      ],
      roadmap: [
        { label: 'Import', duration: '', detail: 'Moving existing contacts to the new system.' },
        { label: 'Automation', duration: '', detail: 'Setting up automatic follow-up alerts.' }
      ],
      benchmarks: [],
      techStack: ['Node.js', 'PostgreSQL'],
      businessValue: 'Increase sales by following up on every lead at the perfect time.'
    },
    {
      id: 'uiux',
      name: 'Digital Architecture (UI/UX)',
      tagline: 'Making software easy and beautiful to use.',
      description: 'Strategic design that guides users to take the right action.',
      longDescription: 'UI/UX is the difference between a tool that is frustrating and one that is a joy to use. We design the "look" (UI) and the "feel" (UX) so that your users never get confused and always find what they are looking for quickly.',
      category: 'Design',
      imageUrl: 'https://images.unsplash.com/photo-1576595580361-90a855b84b20?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      features: ['User Testing', 'Visual Branding', 'Prototype Design'],
      domains: [{ name: 'Identity', description: 'Premium digital presence.' }],
      pillars: [
        { title: 'Clarity', description: 'Simple layouts that need no manual to understand.' },
        { title: 'Retention', description: 'Good design keeps users coming back to your app.' }
      ],
      roadmap: [
        { label: 'Wireframes', duration: '', detail: 'Drawing the "blueprints" of the app.' },
        { label: 'Final Polish', duration: '', detail: 'Adding colors, fonts, and smooth motion.' }
      ],
      benchmarks: [],
      techStack: ['Figma', 'React'],
      businessValue: 'Reduce user support calls by making the software obvious to use.'
    },
    {
      id: 'seo',
      name: 'Digital Signage (SEO)',
      tagline: 'Be the first thing people see on Google.',
      description: 'Technical and content work to put your brand at the top of search.',
      longDescription: 'SEO is like making sure your shop is on the busiest street in the world. We optimize your website code and content so that when people search for what you do, your name appears first. It is the best way to get free, high-quality traffic.',
      category: 'Consulting',
      imageUrl: 'https://images.unsplash.com/photo-1709281847802-9aef10b6d4bf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      features: ['Keyword Strategy', 'Speed Optimization', 'Ranking Reports'],
      domains: [{ name: 'Growth', description: 'Increasing organic reach.' }],
      pillars: [
        { title: 'Authority', description: 'Making your site a trusted leader in your industry.' },
        { title: 'Accessibility', description: 'Ensuring search engines can read your site perfectly.' }
      ],
      roadmap: [
        { label: 'Audit', duration: '', detail: 'Finding why you aren\'t ranking yet.' },
        { label: 'Campaign', duration: '', detail: 'Building content that Google loves.' }
      ],
      benchmarks: [],
      techStack: ['Next.js', 'Search Console'],
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
      features: ['Threat Monitoring', 'Data Encryption', 'Secure Access'],
      domains: [{ name: 'Defense', description: 'Proactive protection.' }],
      pillars: [
        { title: 'Prevention', description: 'Stopping attacks before they even start.' },
        { title: 'Recovery', description: 'Backup plans if the worst happens.' }
      ],
      roadmap: [
        { label: 'Scan', duration: '', detail: 'Testing your current weak spots.' },
        { label: 'Fortify', duration: '', detail: 'Installing firewalls and encryption.' }
      ],
      benchmarks: [],
      techStack: ['Cloudflare', 'Zero Trust'],
      businessValue: 'Avoid massive lawsuits and brand damage from data leaks.'
    },
    {
      id: 'api',
      name: 'The Software Bridge (API)',
      tagline: 'Make your apps talk to each other.',
      description: 'Connect different software so data flows automatically.',
      longDescription: 'APIs are like bridges between islands of software. If you have an ERP and a website, we build the bridge so that when someone buys a product, your stock level updates automatically. No more manual copying and pasting between apps.',
      category: 'Development',
      imageUrl: 'https://images.unsplash.com/photo-1763568258208-a5af30d5a31b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      features: ['Real-time Sync', 'Multi-app Connect', 'Safe Data Flow'],
      domains: [{ name: 'Connectivity', description: 'Eliminating manual sync.' }],
      pillars: [
        { title: 'Automation', description: 'Systems working together without humans.' },
        { title: 'Consistency', description: 'Keeping the same data in every app.' }
      ],
      roadmap: [
        { label: 'Mapping', duration: '', detail: 'Deciding what data needs to travel.' },
        { label: 'Connection', duration: '', detail: 'Building and testing the bridge.' }
      ],
      benchmarks: [],
      techStack: ['Node.js', 'Go'],
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
      features: ['Cost Analysis', 'Safety Checks', 'Performance Testing'],
      domains: [{ name: 'Efficiency', description: 'IT resource optimization.' }],
      pillars: [
        { title: 'Optimization', description: 'Get more speed for less money.' },
        { title: 'Safety', description: 'Find holes in your security before hackers do.' }
      ],
      roadmap: [
        { label: 'Deep Scan', duration: '', detail: 'Looking at every server and app.' },
        { label: 'Prescription', duration: '', detail: 'A list of what to fix and why.' }
      ],
      benchmarks: [],
      techStack: [],
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
      features: ['Offline Mode', 'Push Notifications', 'Fast Navigation'],
      domains: [{ name: 'Mobile', description: 'Direct engagement.' }],
      pillars: [
        { title: 'Engagement', description: 'Stay top-of-mind with home screen icons.' },
        { title: 'Performance', description: 'Apps that don\'t lag or crash.' }
      ],
      roadmap: [
        { label: 'Logic Dev', duration: '', detail: 'Building the core functionality.' },
        { label: 'App Store', duration: '', detail: 'Getting you listed on Apple and Google.' }
      ],
      benchmarks: [],
      techStack: ['React Native', 'Firebase'],
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
      features: ['Smart Contracts', 'Supply Chain Tracking', 'Digital Identity'],
      domains: [{ name: 'Trust', description: 'Verifiable records.' }],
      pillars: [
        { title: 'Immutability', description: 'What is written is written forever.' },
        { title: 'Transparency', description: 'Every party can verify the history.' }
      ],
      roadmap: [
        { label: 'Use Case', duration: '', detail: 'Finding where trust is needed most.' },
        { label: 'Network', duration: '', detail: 'Setting up the secure ledger.' }
      ],
      benchmarks: [],
      techStack: ['Solidity', 'Ethereum'],
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
      features: ['Unlimited Scale', 'Automatic Backups', 'Global Speed'],
      domains: [{ name: 'Infrastructure', description: 'Reliable foundations.' }],
      pillars: [
        { title: 'Elasticity', description: 'Pay for what you use, scale up when busy.' },
        { title: 'Resilience', description: 'If one server fails, another takes over instantly.' }
      ],
      roadmap: [
        { label: 'Migration', duration: '', detail: 'Moving your data to the cloud.' },
        { label: 'Scaling', duration: '', detail: 'Configuring servers for growth.' }
      ],
      benchmarks: [],
      techStack: ['AWS', 'Terraform'],
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
        features: ['مخزون لحظي', 'محاسبة آلية', 'بوابات موظفين'],
        domains: [{ name: 'العمليات', description: 'تسهيل سير العمل.' }],
        pillars: [
          { title: 'حقيقة واحدة', description: 'كل الأقسام ترى نفس البيانات.' },
          { title: 'الكفاءة', description: 'إلغاء النسخ اليدوي بين الملفات.' }
        ],
        roadmap: [
          { label: 'التدقيق', duration: '', detail: 'حصر خطوات العمل الحالية.' },
          { label: 'بناء المنصة', duration: '١ شهر', detail: 'إنشاء مركز التحكم الخاص بك.' }
        ],
        benchmarks: [],
        techStack: ['Node.js', 'Postgres'],
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
        features: ['دفع آمن', 'تصميم للموبايل', 'ربط الشحن العالمي'],
        domains: [{ name: 'التجزئة', description: 'توسيع المبيعات الرقمية.' }],
        pillars: [
          { title: 'ثقة العميل', description: 'بوابات دفع آمنة تحمي بيانات المشتري.' },
          { title: 'السرعة', description: 'تحميل سريع للصفحات لمنع خروج المتسوقين.' }
        ],
        roadmap: [
          { label: 'التصميم', duration: '', detail: 'رسم رحلة المستخدم المثالية.' },
          { label: 'الإطلاق', duration: '', detail: 'إعداد بوابات الدفع واللوجستيات.' }
        ],
        benchmarks: [],
        techStack: ['Next.js', 'Stripe'],
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
        features: ['أقماع البيع', 'تاريخ المراسلات', 'تنبيهات المهام'],
        domains: [{ name: 'المبيعات', description: 'تحسين القمع.' }],
        pillars: [
          { title: 'التنظيم', description: 'وداعاً للملاحظات الورقية الضائعة والملفات الفوضوية.' },
          { title: 'التحليلات', description: 'معرفة أي المنتجات أو الموظفين يبيعون بشكل أفضل.' }
        ],
        roadmap: [
          { label: 'الاستيراد', duration: '', detail: 'نقل جهات الاتصال الحالية للنظام.' },
          { label: 'الأتمتة', duration: '', detail: 'إعداد تنبيهات المتابعة التلقائية.' }
        ],
        benchmarks: [],
        techStack: ['Node.js', 'Postgres'],
        businessValue: 'زيادة المبيعات عبر متابعة كل فرصة في الوقت المثالي.'
    },
    {
        id: 'uiux',
        name: 'المعمارية الرقمية (UI/UX)',
        tagline: 'جعل البرمجيات سهلة وجميلة في الاستخدام.',
        description: 'تصميم استراتيجي يوجه المستخدم لاتخاذ الإجراء الصحيح.',
        longDescription: 'تصميم UI/UX هو الفرق بين أداة محبطة وأداة ممتعة. نصمم "الشكل" (UI) و"الإحساس" (UX) بحيث لا يرتبك المستخدمون أبداً ويجدون ما يبحثون عنه بسرعة وسهولة.',
        category: 'Design',
        imageUrl: 'https://images.unsplash.com/photo-1576595580361-90a855b84b20?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        features: ['اختبار المستخدمين', 'الهوية البصرية', 'تصميم النماذج'],
        domains: [{ name: 'الهوية', description: 'حضور رقمي متميز.' }],
        pillars: [
          { title: 'الوضوح', description: 'واجهات بسيطة لا تحتاج لكتيب تعليمات لفهمها.' },
          { title: 'الاستمرارية', description: 'التصميم الجيد يحفز المستخدمين على العودة.' }
        ],
        roadmap: [
          { label: 'الهيكل', duration: '', detail: 'رسم "المخططات" الأولية للتطبيق.' },
          { label: 'اللمسات النهائية', duration: '', detail: 'إضافة الألوان والخطوط والحركة.' }
        ],
        benchmarks: [],
        techStack: ['Figma', 'React'],
        businessValue: 'تقليل مكالمات الدعم الفني عبر جعل البرنامج بديهي الاستخدام.'
    },
    {
        id: 'seo',
        name: 'اللافتة الرقمية (SEO)',
        tagline: 'كن أول ما يراه الناس على جوجل.',
        description: 'عمل تقني وبصري لوضع علامتك التجارية في مقدمة البحث.',
        longDescription: 'تحسين محركات البحث يشبه التأكد من أن متجرك يقع في أكثر الشوارع ازدحاماً في العالم. نحسن كود موقعك ومحتواه بحيث عندما يبحث الناس عما تفعله، يظهر اسمك أولاً. إنها أفضل طريقة للحصول على زوار مهتمين مجاناً.',
        category: 'Consulting',
        imageUrl: 'https://images.unsplash.com/photo-1709281847802-9aef10b6d4bf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        features: ['استراتيجية الكلمات', 'تحسين السرعة', 'تقارير الترتيب'],
        domains: [{ name: 'النمو', description: 'توسيع الوصول المجاني.' }],
        pillars: [
          { title: 'السلطة', description: 'جعل موقعك رائداً وموثوقاً في مجالك.' },
          { title: 'سهولة الوصول', description: 'ضمان قدرة جوجل على قراءة موقعك بامتياز.' }
        ],
        roadmap: [
          { label: 'التدقيق', duration: '', detail: 'معرفة سبب عدم ظهورك حتى الآن.' },
          { label: 'الحملة', duration: '', detail: 'بناء محتوى يحبه جوجل.' }
        ],
        benchmarks: [],
        techStack: ['Next.js', 'Google Console'],
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
        features: ['مراقبة التهديدات', 'تشفير البيانات', 'وصول آمن'],
        domains: [{ name: 'الدفاع', description: 'أنظمة استباقية.' }],
        pillars: [
          { title: 'الوقاية', description: 'إيقاف الهجمات قبل أن تبدأ.' },
          { title: 'التعافي', description: 'خطط بديلة في حال حدوث الأسوأ.' }
        ],
        roadmap: [
          { label: 'المسح', duration: '', detail: 'اختبار نقاط الضعف الحالية.' },
          { label: 'التحصين', duration: '', detail: 'تركيب الجدران النارية والتشفير.' }
        ],
        benchmarks: [],
        techStack: ['Cloudflare', 'Zero-Trust'],
        businessValue: 'تجنب الدعاوى القضائية الضخمة وتضرر العلامة التجارية بسبب تسريب البيانات.'
    },
    {
        id: 'api',
        name: 'جسر البرمجيات (API)',
        tagline: 'اجعل تطبيقاتك تتحدث مع بعضها البعض.',
        description: 'ربط البرمجيات المختلفة لتدفق البيانات تلقائياً.',
        longDescription: 'الـ APIs هي مثل الجسور بين جزر البرمجيات. إذا كان لديك نظام ERP وموقع إلكتروني، فنحن نبني الجسر بحيث عندما يشتري شخص ما منتجاً، يتم تحديث مستوى المخزون تلقائياً. لا مزيد من النسخ واللصق اليدوي بين التطبيقات.',
        category: 'Development',
        imageUrl: 'https://images.unsplash.com/photo-1763568258208-a5af30d5a31b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        features: ['مزامنة لحظية', 'ربط تطبيقات متعددة', 'تدفق آمن'],
        domains: [{ name: 'الربط', description: 'إلغاء المزامنة اليدوية.' }],
        pillars: [
          { title: 'الأتمتة', description: 'أنظمة تعمل معاً دون تدخل بشري.' },
          { title: 'الاتساق', description: 'بقاء نفس البيانات في كل تطبيق.' }
        ],
        roadmap: [
          { label: 'رسم البيانات', duration: '', detail: 'تحديد البيانات التي تحتاج للانتقال.' },
          { label: 'الربط', duration: '', detail: 'بناء واختبار الجسر.' }
        ],
        benchmarks: [],
        techStack: ['Node.js', 'Go', 'GraphQL'],
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
        features: ['تحليل التكلفة', 'فحص السلامة', 'اختبار الأداء'],
        domains: [{ name: 'الكفاءة', description: 'تحسين الموارد.' }],
        pillars: [
          { title: 'التحسين', description: 'الحصول على سرعة أكبر بتكلفة أقل.' },
          { title: 'السلامة', description: 'اكتشاف الثغرات قبل أن يجدها المخترقون.' }
        ],
        roadmap: [
          { label: 'مسح عميق', duration: '', detail: 'النظر في كل خادم وتطبيق.' },
          { label: 'الوصفة', duration: '', detail: 'قائمة بما يجب إصلاحه ولماذا.' }
        ],
        benchmarks: [],
        techStack: [],
        businessValue: 'غالباً ما يجد التدقيق توفيراً بنسبة ٢٠٪ في الفواتير الشهرية.'
    },
    {
        id: 'mobile-eng',
        name: 'عملك في جيبك (Mobile)',
        tagline: 'ضع شركتك في جيب عميلك.',
        description: 'تطبيقات سريعة وسهلة الاستخدام للآيفون والأندرويد.',
        longDescription: 'تطبيقات الموبايل هي الوسيلة لتكون قريباً من عميلك. نبني تطبيقات تسمح لعملائك بالشراء، الحجز، أو الدردشة معك من أي مكان. مصممة لتعمل بسلاسة حتى في الاتصالات الضعيفة وبإحساس سريع وطبيعي.',
        category: 'Development',
        imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000',
        features: ['وضع الأوفلاين', 'إشعارات لحظية', 'تصفح سريع'],
        domains: [{ name: 'الموبايل', description: 'تفاعل مباشر.' }],
        pillars: [
          { title: 'التفاعل', description: 'ابقَ في ذهن العميل عبر أيقونة شاشة هاتفه.' },
          { title: 'الأداء', description: 'تطبيقات لا تتعلق ولا تتوقف فجأة.' }
        ],
        roadmap: [
          { label: 'التطوير', duration: '', detail: 'بناء الوظائف الأساسية.' },
          { label: 'المتاجر', duration: '', detail: 'إدراجك في متجري آبل وجوجل.' }
        ],
        benchmarks: [],
        techStack: ['React Native', 'Firebase'],
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
        features: ['عقود ذكية', 'تتبع التوريد', 'هوية رقمية'],
        domains: [{ name: 'الثقة', description: 'سجلات قابلة للتحقق.' }],
        pillars: [
          { title: 'عدم التغيير', description: 'ما كُتب يبقى مكتوباً للأبد.' },
          { title: 'الشفافية', description: 'يمكن لكل طرف التحقق من التاريخ.' }
        ],
        roadmap: [
          { label: 'دراسة الحالة', duration: '', detail: 'تحديد أين تبرز الحاجة للثقة.' },
          { label: 'الشبكة', duration: '', detail: 'إعداد السجل الآمن.' }
        ],
        benchmarks: [],
        techStack: ['Solidity', 'Web3.js'],
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
        features: ['توسع غير محدود', 'نسخ احتياطي آلي', 'سرعة عالمية'],
        domains: [{ name: 'الأساسات', description: 'اعتمادية عند التوسع.' }],
        pillars: [
          { title: 'المرونة', description: 'ادفع ثمن ما تستخدمه فقط، وتوسع وقت الزحمة.' },
          { title: 'الاستدامة', description: 'إذا تعطل خادم، يستلم آخر فوراً.' }
        ],
        roadmap: [
          { label: 'الهجرة', duration: '', detail: 'نقل بياناتك للسحابة.' },
          { label: 'التوسع', duration: '', detail: 'ضبط الخوادم للنمو.' }
        ],
        benchmarks: [],
        techStack: ['AWS', 'Terraform', 'K8s'],
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
        features: ['Envantera Rastî', 'Hesabvaniya Otomatîk', 'Portalên Karmendan'],
        domains: [{ name: 'Operasyon', description: 'Hêsankirina karên rojane.' }],
        pillars: [
          { title: 'Rastiya Yekane', description: 'Her beş li heman daneyan dinêre.' },
          { title: 'Kêrhatî', description: 'Rakirina kopîkirina manuwel a di navbera pelan de.' }
        ],
        roadmap: [
          { label: 'Audit', duration: '', detail: 'Lîstekirina hemî gavên karsaziya niha.' },
          { label: 'Avakirina Platformê', duration: '', detail: 'Afirandina navenda kontrolê ya xwerû.' }
        ],
        benchmarks: [],
        techStack: ['Node.js', 'Postgres'],
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
        features: ['Dravdana Ewle', 'Sêwirana Mobile-First', 'Synca Barkirina Global'],
        domains: [{ name: 'Retail', description: 'Mezinkirina firotanên dîjîtal.' }],
        pillars: [
          { title: 'Baweriya Mişterî', description: 'Dergehên dravdanê yên ewle ku daneyên kiriyar diparêzin.' },
          { title: 'Lez', description: 'Barkirina rûpelê ya bilez da ku kiriyar neterikînin.' }
        ],
        roadmap: [
          { label: 'Sêwirandin', duration: '', detail: 'Afirandina rêwîtiya bikarhêner a kamil.' },
          { label: 'Destpêkirin', duration: '', detail: 'Sazkirina dergehan û lojîstîkê.' }
        ],
        benchmarks: [],
        techStack: ['Next.js', 'Stripe'],
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
        features: ['Pîpeline-ên Firotanê', 'Dîroka E-peyamê', 'Bîranînên Kar'],
        domains: [{ name: 'Firotan', description: 'Optimîzekirina funnel.' }],
        pillars: [
          { title: 'Rêxistin', description: 'Êdî notên winda an pelên tevlihev tune.' },
          { title: 'Analîtîk', description: 'Bibînin kîjan berhem an karmend çêtir difroşin.' }
        ],
        roadmap: [
          { label: 'Import', duration: '', detail: 'Veguhestina kontakan bo pergala nû.' },
          { label: 'Otomasyon', duration: '', detail: 'Sazkirina bîranînên şopandinê yên otomatîk.' }
        ],
        benchmarks: [],
        techStack: ['Node.js', 'Postgres'],
        businessValue: 'Bi şopandina fersendan di dema kamil de firotanê zêde bikin.'
    },
    {
        id: 'uiux',
        name: 'Mîmariya Dîjîtal (UI/UX)',
        tagline: 'Bikaranîna nermalavê hêsan û xweşik bikin.',
        description: 'Sêwirana stratejîk ku bikarhêner ber bi çalakiya rast ve dibe.',
        longDescription: 'UI/UX cudahiya di navbera amûrek tevlihev û amûrek xweş de ye. Em "xuyabûn" (UI) û "hest" (UX) sêwirînin da ku bikarhêner qet neyên şaş kirin û her dem tiştê ku lê digerin bi hêsanî bibînin.',
        category: 'Design',
        imageUrl: 'https://images.unsplash.com/photo-1576595580361-90a855b84b20?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        features: ['Testkirina Bikarhêner', 'Branding-a Vîzyonel', 'Sêwirana Prototîp'],
        domains: [{ name: 'Nasname', description: 'Hebûna dîjîtal a premium.' }],
        pillars: [
          { title: 'Zelalî', description: 'Sêwirandinên hêsan ku hewceyê pirtûka perwerdehiyê nîne.' },
          { title: 'Berdewamî', description: 'Sêwirana baş bikarhêneran di hundurê appê de dihêle.' }
        ],
        roadmap: [
          { label: 'Wireframes', duration: '', detail: 'Nexşekirina avahiya appê.' },
          { label: 'Polish', duration: '', detail: 'Zêdekirina reng û tevgera xweşik.' }
        ],
        benchmarks: [],
        techStack: ['Figma', 'React'],
        businessValue: 'Bi hêsankirina bikaranîna nermalavê bangên daxwaza alîkariyê kêm bikin.'
    },
    {
        id: 'seo',
        name: 'Nîşana Dîjîtal (SEO)',
        tagline: 'Bibin tiştê yekem ku mirov li ser Google dibînin.',
        description: 'Xebata teknîkî û naverokî da ku branda we derkeve serê lêgerînê.',
        longDescription: 'SEO mîna wê ye ku dikanek we li kolana herî qerebalix a cîhanê hebe. Em kod û naveroka malpera we optimîze dikin da ku dema mirov lêgerînê dikin, navê we yekem derkeve. Ev riya herî baş e ji bo girtina trafîka organîk a belaş.',
        category: 'Consulting',
        imageUrl: 'https://images.unsplash.com/photo-1709281847802-9aef10b6d4bf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        features: ['Stratejiya Keyword', 'Optimîzasyona Lezê', 'Raporên Rêzkirinê'],
        domains: [{ name: 'Mezinbûn', description: 'Berfirehkirina gihîştina organîk.' }],
        pillars: [
          { title: 'Otorîte', description: 'Kirina malpera we bibe lîderê bawermend di sektora we de.' },
          { title: 'Gihîştin', description: 'Piştrastkirina ku motorên lêgerînê malpera we kamil dixwînin.' }
        ],
        roadmap: [
          { label: 'Audit', duration: '', detail: 'Tespîtkirina çima hûn hîn derneketine serî.' },
          { label: 'Kampanya', duration: '', detail: 'Avakirina naveroka ku Google jê hez dike.' }
        ],
        benchmarks: [],
        techStack: ['Next.js', 'Google Console'],
        businessValue: 'Bi trafîka organîk budceya reklamê kêm bikin.'
    },
    {
        id: 'cyber',
        name: 'Keleha Dîjîtal (Cyber)',
        tagline: 'Daneyên xwe ji hackran dûr bigirin.',
        description: 'Ewlehiya nûjen ji bo parastina raz û dravê pargîdaniyê.',
        longDescription: 'Ewlehiya sîber dîwarê dora karsaziya weya dîjîtal e. Em pergalên ku "nederbasbûyîyan" dişopînin û daneyên weyên krîtîk diparêzin saz dikin. Ev piştrast dike ku agahdariya pargîdaniya we taybet bimîne û sîstemên we neyên hackkirin.',
        category: 'Security',
        imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
        features: ['Şopandina Gefan', 'Encryption-a Daneyan', 'Gihîştina Ewle'],
        domains: [{ name: 'Parastin', description: 'Sîstemên proaktîf.' }],
        pillars: [
          { title: 'Pêşîgirtin', description: 'Rawestandina êrîşan berî ku dest pê bikin.' },
          { title: 'Recovery', description: 'Planên alternatîf heke tiştek xirab bibe.' }
        ],
        roadmap: [
          { label: 'Scan', duration: '', detail: 'Testkirina xalên lawaz ên niha.' },
          { label: 'Bihêzkirin', duration: '', detail: 'Sazkirina firewall û parastinê.' }
        ],
        benchmarks: [],
        techStack: ['Cloudflare', 'Zero-Trust'],
        businessValue: 'Ji dozên yasayî û zirara brandê ya ji ber daxuyaniya daneyan dûr bikevin.'
    },
    {
        id: 'api',
        name: 'Pira Nermalavê (API)',
        tagline: 'Bila app-ên we bi hev re bipeyivin.',
        description: 'Girêdana nermalavên cihêreng da ku dane bixweber herikin.',
        longDescription: 'API mîna pirên di navbera giravên nermalavê de ne. Heke ERP û malperek we hebe, em pirê ava dikin da ku dema kesek tiştek dikire, envantera we bixweber nû bibe. Êdî kopîkirina manuwel di navbera appan de nîne.',
        category: 'Development',
        imageUrl: 'https://images.unsplash.com/photo-1763568258208-a5af30d5a31b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        features: ['Synca Rastî', 'Girêdana Pir-app', 'Herikîna Ewle'],
        domains: [{ name: 'Girêdan', description: 'Rakirina hevdengkirina manuwel.' }],
        pillars: [
          { title: 'Otomasyon', description: 'Sîstemên ku bêyî mirovan bi hev re dixebitin.' },
          { title: 'Berdewamî', description: 'Parastina heman daneyan di her appê de.' }
        ],
        roadmap: [
          { label: 'Mapping', duration: '', detail: 'Biryara kîjan dane divê bimeşin.' },
          { label: 'Girêdan', duration: '', detail: 'Avakirin û ceribandina pirê.' }
        ],
        benchmarks: [],
        techStack: ['Node.js', 'Go'],
        businessValue: '90% karê manuwel ê têketina daneyan ji holê rakin.'
    },
    {
        id: 'infra-audit',
        name: 'Bijîşkê Sîstemê (Audit)',
        tagline: 'Teknolojiya we saxlem e an tenê biha ye?',
        description: 'Kontrolek ji bo sazûmana IT-ê da ku wendahî û rîskan bibîne.',
        longDescription: 'Mîna kontrolek bijîşkî, audita sîstemê li pirsgirêkên veşartî digere. Em server û nermalavên we kontrol dikin da ku bibînin çi hêdî ye, çi ne ewle ye, û hûn ji bo çi drav didin lê bikar nayînin.',
        category: 'Consulting',
        imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000',
        features: ['Analîza Lêçûnê', 'Kontrola Ewlehiyê', 'Testkirina Performansê'],
        domains: [{ name: 'Kêrhatî', description: 'Optimîzekirina çavkaniyan.' }],
        pillars: [
          { title: 'Optimîzasyon', description: 'Bi kêmtir drav leza zêdetir bigirin.' },
          { title: 'Ewlehî', description: 'Xalên qul ên ewlehiyê berî hackran bibînin.' }
        ],
        roadmap: [
          { label: 'Scan', duration: '', detail: 'Nêrîna li her server û appê.' },
          { label: 'Reçete', duration: '', detail: 'Lîsteya tiştên ku divê werin sererastkirin.' }
        ],
        benchmarks: [],
        techStack: [],
        businessValue: 'Bi gelemperî 20% lêçûnên IT-ê yên mehane kêm dike.'
    },
    {
        id: 'mobile-eng',
        name: 'Karsazî di Dest de (Mobile)',
        tagline: 'Pargîdaniya xwe bixin berîka mişteriyê xwe.',
        description: 'App-ên bilez û hêsan ji bo iPhone û Android.',
        longDescription: 'App-ên mobile li ser nêzîkbûna bi mişterî re ne. Em app-ên ku dihêlin mişteriyên we bikirin, rezervasyon bikin an bi we re bipeyivin ava dikin. Ew hatine sêwirandin da ku di înterneta hêdî de jî bilez bixebitin.',
        category: 'Development',
        imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000',
        features: ['Moda Offline', 'Notîfîkasyon', 'Navîgasyona Bilez'],
        domains: [{ name: 'Mobile', description: 'Tevlêbûna rasterast.' }],
        pillars: [
          { title: 'Engagement', description: 'Bi îkona li ser ekranê her dem li ber çavan bin.' },
          { title: 'Performans', description: 'App-ên ku qet naqerisin an namînin.' }
        ],
        roadmap: [
          { label: 'Mantiq', duration: '', detail: 'Avakirina fonksiyonên bingehîn.' },
          { label: 'Mekan', duration: '', detail: 'Lîstekirina li Apple û Google.' }
        ],
        benchmarks: [],
        techStack: ['React Native', 'Firebase'],
        businessValue: 'Têkiliya mişterî bi xwe re 10 qat hêsantir bikin.'
    },
    {
        id: 'blockchain',
        name: 'Tomarên Neguherbar (Blockchain)',
        tagline: 'Baweriya ku nayê sextekirin.',
        description: 'Ledgerek dîjîtal ku tê de tomar mayînde û zelal in.',
        longDescription: 'Blockchain rêyek e ji bo tomarkirina agahiyan da ku qet neyê jêbirin an guhertin. Ev ji bo peymanan, zincîra dabînkirinê an şopandina tiştên biha kamil e. Ew baweriyek kamil di navbera aliyan de ava dike.',
        category: 'Blockchain',
        imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000',
        features: ['Smart Contracts', 'Şopandina Têketinê', 'Nasnameya Dîjîtal'],
        domains: [{ name: 'Bawerî', description: 'Tomarên verastkirî.' }],
        pillars: [
          { title: 'Neguherbarî', description: 'Tiştê ku hatiye nivîsandin her dem dimîne.' },
          { title: 'Zelalî', description: 'Her kes dikare dîrokê verast bike.' }
        ],
        roadmap: [
          { label: 'Plan', duration: '', detail: 'Tespîtkirina ku derê bawerî hewce ye.' },
          { label: 'Tora Ewle', duration: '', detail: 'Sazkirina ledgera ewleh.' }
        ],
        benchmarks: [],
        techStack: ['Solidity', 'Web3.js'],
        businessValue: 'Lêçûnên navbeynkar û parêzerên verastkirinê ji holê rakin.'
    },
    {
        id: 'cloud',
        name: 'Ezmanê Mezinbûyî (Cloud)',
        tagline: 'Li şûna kirîna hardware, hêzê bi kirê bigirin.',
        description: 'Hostkirina nermalava we li ser serverên global ku bi we re mezin dibin.',
        longDescription: 'Cloud computing tê wê wateyê ku karsaziya we li ser înternetê dijî. Li şûna kirîna serverên biha yên ku kevn dibin, hûn torên global ên bi hêz bikar tînin. Heke karsaziya we mezin bibe, serverên we jî bixweber mezin dibin.',
        category: 'Cloud',
        imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
        features: ['Mezinbûna Bêsînor', 'Backupa Otomatîk', 'Leza Global'],
        domains: [{ name: 'Binesazî', description: 'Pêbawerî di mezinbûnê de.' }],
        pillars: [
          { title: 'Elastîkbûn', description: 'Tenê ji bo tiştê ku bikar tînin drav bidin.' },
          { title: 'Resilience', description: 'Heke serverek têk biçe, yekî din tavilê cîh digire.' }
        ],
        roadmap: [
          { label: 'Veguhestin', duration: '', detail: 'Bar kirina daneyan bo ewran.' },
          { label: 'Mezinbûn', duration: '', detail: 'Konfîgurasyona ji bo mezinbûnê.' }
        ],
        benchmarks: [],
        techStack: ['AWS', 'Terraform', 'K8s'],
        businessValue: 'Ji lêçûnên hardware rizgar bibin û qet ji têkçûna sîstemê netirsin.'
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
