
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { Language } from './types';

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
      philosophy: "تضع سيسكوماتيكس الأولوية لبناء بنية تحتية رقمية سيادية وضمان استقرار الأنظمة على المدى الطويل بدلاً من الحلول المؤقتة.",
      history: "تأسست الشركة من قبل رواد زيتون في دمشق، لخدمة السوق الإقليمي منذ عام ٢٠٢٤.",
      location_advantage: "موقعنا الاستراتيجي في دمشق يمنحنا فهماً عميقاً للتحديات التشغيلية في المنطقة."
    },
    faq: [
      { q: "ما هي آلية تنفيذ المشاريع؟", a: "نتبع إطار عمل مكون من ٣ مراحل 'نصغي، نبني، تقود': تبدأ بالاكتشاف الاستراتيجي، ثم بناء المعمارية التقنية، وتنتهي بالتسليم المباشر للنظام." },
      { q: "كيف يتم تحديد تكلفة الخدمات؟", a: "تعتمد التكلفة على مدى تعقيد المتطلبات التقنية. يتم تقديم عرض سعر مفصل خلال ٢٤ ساعة من تقديم ملخص المشروع." },
      { q: "هل تقدمون خدمات الربط المخصصة؟", a: "نعم، نحن متخصصون في بناء البرمجيات الوسيطة عالية الأداء وواجهات البرمجة (APIs) المخصصة لأنظمة ERP و CRM." }
    ],
    guardrails: [
      "وجه المستخدم دائماً لإضافة الخدمات المطلوبة إلى 'ملخص المشروع'.",
      "لا تعطي أسعاراً محددة دون إجراء تقييم فني رسمي.",
      "ركز دائماً على سلامة المعمارية التقنية واستدامتها."
    ]
  },
  ku: {
    company: {
      philosophy: "Syscomatics girîngiyê dide binesaziya dîjîtal a serwer û îstîqrara pergalê ya demdirêj.",
      history: "Ji hêla Rawad Zaitoun ve li Şamê hatiye damezrandin.",
      location_advantage: "Navenda stratejîk li Şamê, famkirina kêşeyên operasyonel ên herêmî."
    },
    faq: [
      { q: "Pêvajoya projeya we çawa ye?", a: "Em çarçoveyek 3-qonaxî dişopînin: 'Guhdarî, Avakirin, Fermandekirin' - tespîta stratejîk, mîmarî, û radestkirina rasterast a pergalê." },
      { q: "Mesrefa xizmetan çiqas e?", a: "Bihayê li gorî tevliheviya projeyê tê hesabkirin. Di nav 24 saetan de piştî şandina kurteya projeyê pêşniyara bihayê tê dayîn." }
    ],
    guardrails: [
      "Her dem bikarhêner ber bi 'Kurteya Projeyê' ve bibe.",
      "Bêyî nirxandinek fermî bihayekî tam nede.",
      "Fokusa xwe bide ser yekparebûna mîmarî."
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
        { title: 'Listen', desc: 'We understand your goals and business challenges first.', img: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { title: 'Build', desc: 'Our engineers create your custom digital architecture.', img: 'https://images.unsplash.com/photo-1759984782632-732eea46df77?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { title: 'Command', desc: 'You take control of a powerful, scaling system.', img: 'https://images.unsplash.com/photo-1748609339084-ea43ec1b8fbb?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
      ],
      uptime: 'Always On', 
      uptimed: 'High-speed systems ensuring continuous operations.',
      uptimeLabel: '99.9% Uptime'
    },
    services: { 
      header: 'Our Solutions', 
      sub: 'Smart tools designed for modern companies.', 
      back: 'Back', 
      spec: 'Expertise in', 
      pillars: 'Why This Matters', 
      pillarsSub: 'Engineered foundations ensuring scalability, security, and operational excellence.',
      roadmap: 'Strategic Roadmap', 
      thesis: 'The Architectural Thesis', 
      value: 'Strategic Business Value', 
      roiBadge: 'ROI & Strategic Outcomes',
      ctaHeader: 'Ready for Engineering?',
      ctaSub: 'Add this solution to your project brief for a technical architecture review within 24 hours.',
      briefAdd: 'Add to Brief', 
      explore: 'Explore' 
    },
    journal: { 
      header: 'Featured Projects', 
      sub: 'Proven Impact', 
      back: 'Back', 
      featured: 'Strategic Milestone', 
      tactical: 'Case Studies', 
      readTime: 'min read', 
      exploreAll: 'Explore Project Archive',
      archiveHeader: 'The Digital',
      archiveAccent: 'Transformations.',
      archiveSub: 'A comprehensive record of engineering excellence and sovereign digital infrastructure built across the region.',
      logLabel: 'Architecture Log',
      fullArchive: 'Full Archive'
    },
    inquiry: { 
      title: 'Your Project', 
      sub: 'Selection', 
      empty: 'List is empty.', 
      remove: 'Remove', 
      initiate: 'Start Review', 
      assessment: 'Expert reply in 24h', 
      contact: 'Contact Info', 
      name: 'Your Name', 
      email: 'Email', 
      org: 'Company', 
      context: 'Details', 
      submit: 'Send Request', 
      back: 'Back', 
      success: 'Thank You.', 
      successSub: 'We will contact you soon.', 
      scopes: 'Selected Services',
      scopeLabel: 'Project Scope',
      processing: 'Processing...',
      returnHome: 'Return Home'
    },
    footer: { 
        sub: 'Empowering Systems. Automating Tomorrow.', 
        nav: 'Links', 
        contact: 'Connect', 
        address: 'Damascus, Syria', 
        email: 'info@syscomatics.com', 
        phone: '+963 932 255 512',
        link1: 'Solutions',
        link2: 'Strategy',
        link3: 'Projects',
        copyright: 'Syscomatics Co.',
        founder: 'Founded by Rawad Zaitoun'
    },
    cookie: { 
      title: 'Privacy Preferences', 
      desc: 'We use cookies to enhance your browsing experience, ensure secure session persistence, and analyze architectural performance.', 
      accept: 'Accept All', 
      reject: 'Decline' 
    },
    labs: {
        badge: 'Interactive Labs',
        title: 'Architectural',
        accent: 'Simulations.',
        sub: 'Experience our high-performance logic through real-time technical visualizations.',
        arch: 'Architecture',
        archVal: 'SYS_CORE_V4',
        latency: 'Latency',
        latencyVal: '14ms',
        button: 'Run Simulation',
        processing: 'Processing...',
        modules: [
            { id: 'ERP', label: 'Company Brain', desc: 'ERP_NODE_MAP' },
            { id: 'CRM', label: 'Customer Memory', desc: 'CRM_INTEL_RADAR' },
            { id: 'Ecommerce', label: 'Storefront', desc: 'EC_PIPELINE' },
            { id: 'Cyber', label: 'Fortress', desc: 'SEC_SHIELD' }
        ]
    }
  },
  ar: {
    nav: { solutions: 'الحلول التقنية', strategy: 'الاستراتيجية', insights: 'سجل المشاريع', brief: 'ملخص المشروع' },
    hero: { 
      tagline: 'هندسة السيادة الرقمية', 
      title: 'صُممت لأجل', 
      accent: 'الأداء الأقصى.', 
      sub: 'تمكين المؤسسات العالمية بأنظمة تقنية عالية الكفاءة، مصممة للاستقرار المطلق والتوسع بلا حدود.', 
      cta1: 'استكشف حلولنا', 
      cta2: 'الرؤية الاستراتيجية' 
    },
    about: { 
      badge: 'مسار التنفيذ', 
      title: 'بساطة. وضوح.', 
      accent: 'نتائج ملموسة.', 
      sub: 'ثلاث خطوات تقنية مدروسة لتعزيز نمو أعمالك وضمان تفوقها التشغيلي.',
      steps: [
        { title: 'نصغي', desc: 'نبدأ بفهم أهدافك والتحديات التي تواجه أعمالك بعمق واحترافية.', img: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { title: 'نبني', desc: 'يقوم مهندسونا بابتكار معمارية رقمية مخصصة بالكامل لاحتياجاتك.', img: 'https://images.unsplash.com/photo-1759984782632-732eea46df77?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { title: 'تقود', desc: 'تتولى السيطرة الكاملة على نظام قوي، آمن، وقابل للتوسع اللامتناهي.', img: 'https://images.unsplash.com/photo-1748609339084-ea43ec1b8fbb?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
      ],
      uptime: 'جاهزية دائمة', 
      uptimed: 'أنظمة عالية السرعة تضمن استمرارية أعمالك دون أي انقطاع تقني.',
      uptimeLabel: '٩٩.٩٪ توفر النظام'
    },
    services: { 
      header: 'حلولنا التقنية', 
      sub: 'أدوات ذكية مصممة لتلبية متطلبات الشركات الحديثة والمعقدة.', 
      back: 'العودة', 
      spec: 'الخبرة في مجال', 
      pillars: 'لماذا سيسكوماتيكس؟', 
      pillarsSub: 'أسس هندسية متينة تضمن القابلية للتوسع، الأمان السيبراني، والتميز التشغيلي.',
      roadmap: 'خارطة الطريق الاستراتيجية', 
      thesis: 'الأطروحة الهندسية', 
      value: 'الاستراتيجية للأعمال', 
      roiBadge: 'العائد على الاستثمار والنتائج',
      ctaHeader: 'هل أنت جاهز للتنفيذ؟',
      ctaSub: 'أضف هذا الحل إلى ملخص مشروعك للحصول على مراجعة شاملة للمعمارية التقنية خلال ٢٤ ساعة.',
      briefAdd: 'إضافة للملخص', 
      explore: 'استكشف التفاصيل' 
    },
    journal: { 
      header: 'أبرز المشاريع', 
      sub: 'تأثير تقني ملموس', 
      back: 'العودة', 
      featured: 'إنجاز استراتيجي', 
      tactical: 'دراسات الحالة', 
      readTime: 'دقائق للقراءة', 
      exploreAll: 'استكشف أرشيف المشاريع',
      archiveHeader: 'التحولات',
      archiveAccent: 'الرقمية.',
      archiveSub: 'سجل شامل للتميز الهندسي والبنية التحتية الرقمية السيادية التي تم بناؤها في المنطقة.',
      logLabel: 'سجل المعمارية',
      fullArchive: 'الأرشيف الكامل'
    },
    inquiry: { 
      title: 'مشروعك القادم', 
      sub: 'الخدمات المختارة', 
      empty: 'قائمة الطلبات فارغة حالياً.', 
      remove: 'إزالة', 
      initiate: 'بدء الدراسة الفنية', 
      assessment: 'رد الخبراء خلال ٢٤ ساعة', 
      contact: 'معلومات الاتصال', 
      name: 'الاسم الكامل', 
      email: 'البريد الإلكتروني', 
      org: 'الشركة / المؤسسة', 
      context: 'تفاصيل إضافية عن المتطلبات', 
      submit: 'إرسال الطلب', 
      back: 'العودة', 
      success: 'شكراً لثقتكم.', 
      successSub: 'سنتواصل معك قريبا لمراجعة المتطلبات الفنية لمشروعك.', 
      scopes: 'الخدمات المختارة',
      scopeLabel: 'سياق المشروع',
      processing: 'جاري المعالجة...',
      returnHome: 'العودة للرئيسية'
    },
    footer: { 
        sub: 'تمكين الأنظمة. أتمتة المستقبل.', 
        nav: 'روابط', 
        contact: 'تواصل معنا', 
        address: 'دمشق، سوريا', 
        email: 'info@syscomatics.com', 
        phone: '+963 932 255 512',
        link1: 'الحلول',
        link2: 'الاستراتيجية',
        link3: 'المشاريع',
        copyright: 'شركة سيسكوماتيكس',
        founder: 'تأسست من قبل رواد زيتون'
    },
    cookie: { 
      title: 'تفضيلات الخصوصية', 
      desc: 'نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح، وضمان استمرار جلسة العمل، وتحليل أداء المعمارية التقنية.', 
      accept: 'قبول الكل', 
      reject: 'رفض' 
    },
    labs: {
        badge: 'مختبرات تفاعلية',
        title: 'محاكاة',
        accent: 'معمارية.',
        sub: 'اختبر قوة منطقنا البرمجي عبر أدوات مرئية تقنية في الوقت الفعلي.',
        arch: 'المعمارية',
        archVal: 'SYS_CORE_V4',
        latency: 'الاستجابة',
        latencyVal: '١٤ مللي ثانية',
        button: 'بدء المحاكاة',
        processing: 'جاري المعالجة...',
        modules: [
            { id: 'ERP', label: 'دماغ الشركة', desc: 'نظام_ERP' },
            { id: 'CRM', label: 'ذاكرة العميل', desc: 'رادار_CRM' },
            { id: 'Ecommerce', label: 'متجر رقمي', desc: 'خط_التجارة' },
            { id: 'Cyber', label: 'الحصن الرقمي', desc: 'درع_الأمان' }
        ]
    }
  },
  ku: {
    nav: { solutions: 'Çareserî', strategy: 'Stratejî', insights: 'Projeyên Me', brief: 'Kurteya Projeyê' },
    hero: { 
      tagline: 'Mîmariya Serweriya Dîjîtal', 
      title: 'Endezyarî ji bo', 
      accent: 'Performansê.', 
      sub: 'Bihêzkirina rêxistinên global bi pergalên performansa-bilind ku ji bo îstîqrara mutleq û pîvana bêsînor hatine sêwirandin.', 
      cta1: 'Çareseriyên Me', 
      cta2: 'Stratejî' 
    },
    about: { 
      badge: 'Rêwîtî', 
      title: 'Hêsan. Rasterast.', 
      accent: 'Bibandor.', 
      sub: 'Sê gav ji bo bihêzkirina mezinbûna karsaziya we.',
      steps: [
        { title: 'Guhdarî', desc: 'Em pêşî armanc û kêşeyên karsaziya we fam dikin.', img: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { title: 'Avakirin', desc: 'Endezyarên me mîmariya dîjîtal a taybet ji we re ava dikin.', img: 'https://images.unsplash.com/photo-1759984782632-732eea46df77?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { title: 'Fermandekirin', desc: 'Hûn kontrola pergalek bi hêz û mezin dibin.', img: 'https://images.unsplash.com/photo-1748609339084-ea43ec1b8fbb?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
      ],
      uptime: 'Her Dem Vekirî', 
      uptimed: 'Pergalên leza bilind ku operasyonên berdewam garantî dikin.',
      uptimeLabel: '99.9% Dema Serhêl'
    },
    services: { 
      header: 'Çareseriyên Me', 
      sub: 'Amûrên aqilmend ku ji bo pargîdanîyên nûjen hatine sêwirandin.', 
      back: 'Vegere', 
      spec: 'Pisporî di', 
      pillars: 'Çima ev girîng e', 
      pillarsSub: 'Bingehên endezyarkirî ku mezinbûn, ewlehî û jêhatiya operasyonel garantî din.',
      roadmap: 'Nexşerêya Stratejîk', 
      thesis: 'Teza Mîmarî', 
      value: 'Nirxa Karsaziya Stratejîk', 
      roiBadge: 'ROI û Encamên Stratejîk',
      ctaHeader: 'Ji bo Endezyariyê Amade ne?',
      ctaSub: 'Vê çareseriyê li kurteya projeya xwe zêde bikin ji bo nirxandina mîmariya teknîkî di nav 24 demjimêran de.',
      briefAdd: 'Li Kurteyê Zêde Bike', 
      explore: 'Lêkolîn Bike' 
    },
    journal: { 
      header: 'Projeyên Taybet', 
      sub: 'Bandora îsbatkirî', 
      back: 'Vegere', 
      featured: 'Nîşana Stratejîk', 
      tactical: 'Nimûneyên Serkeftinê', 
      readTime: 'deqe xwendin', 
      exploreAll: 'Arşîva Projeyan Bibîne',
      archiveHeader: 'Veguherînên',
      archiveAccent: 'Dîjîtal.',
      archiveSub: 'Tomarek berfireh a jêhatiya endezyariyê û binesaziya dîjîtal a serwer a ku li herêmê hatî avakirin.',
      logLabel: 'Loga Mîmarî',
      fullArchive: 'Arşîva Tam'
    },
    inquiry: { 
      title: 'Projeya We', 
      sub: 'Bijartin', 
      empty: 'Lîste vala ye.', 
      remove: 'Rake', 
      initiate: 'Nirxandinê Destpê Bike', 
      assessment: 'Bersiva pispor di 24 demjimêran de', 
      contact: 'Agahdariya Têkiliyê', 
      name: 'Navê We', 
      email: 'E-peyam', 
      org: 'Pargîdanî', 
      context: 'Kitekitên Projeyê', 
      submit: 'Daxwazê Bişîne', 
      back: 'Vegere', 
      success: 'Spas dikin.', 
      successSub: 'Em ê di demeke nêz de bi we re têkilî deynin.', 
      scopes: 'Xizmetên Bijartî',
      scopeLabel: 'Hecma Projeyê',
      processing: 'Tê kirin...',
      returnHome: 'Vegere Serî'
    },
    footer: { 
        sub: 'Hêzkirina Pergalan. Otomatîkkirina Paşerojê.', 
        nav: 'Lînk', 
        contact: 'Têkilî', 
        address: 'Şam, Sûriye', 
        email: 'info@syscomatics.com', 
        phone: '+963 932 255 512',
        link1: 'Çareserî',
        link2: 'Stratejî',
        link3: 'Proje',
        copyright: 'Syscomatics Co.',
        founder: 'Ji hêla Rawad Zaitoun ve hat damezrandin'
    },
    cookie: { 
      title: 'Vebijarkên Taybetmendiyê', 
      desc: 'Em kûkiyan bikar tînin da ku ezmûna weya gerê baştir bikin, ewlehiya danişîna we peyda bikin û performansa mîmariyê analîz bikin.', 
      accept: 'Hemî Pejirandin', 
      reject: 'Red Bike' 
    },
    labs: {
        badge: 'Laboratuvarên Înteraktîf',
        title: 'Mîmarî',
        accent: 'Sîmulasîyon.',
        sub: 'Hêza mantiqê me bi navgîniya amûrên dîtbarî yên teknîkî biceribînin.',
        arch: 'Mîmarî',
        archVal: 'SYS_CORE_V4',
        latency: 'Derengî',
        latencyVal: '14ms',
        button: 'Sîmulasîyonê Bide Destpêkirin',
        processing: 'Tê kirin...',
        modules: [
            { id: 'ERP', label: 'Mejiyê Şîrketê', desc: 'ERP_NODE_MAP' },
            { id: 'CRM', label: 'Bîra Mişterî', desc: 'CRM_INTEL_RADAR' },
            { id: 'Ecommerce', label: 'Dikan', desc: 'EC_PIPELINE' },
            { id: 'Cyber', label: 'Kela Dîjîtal', desc: 'SEC_SHIELD' }
        ]
    }
  }
};
