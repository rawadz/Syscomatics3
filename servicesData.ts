/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { Language, Service } from './types';

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
    }
  ],
  ar: [
    {
        id: 'erp',
        name: 'إدارة الموارد المركزية (ERP)',
        tagline: 'مركز واحد يجمع كافة بيانات مؤسستك.',
        description: 'نظام تقني موحد يربط العمليات المالية والمخزون والموظفين في بيئة واحدة متكاملة.',
        longDescription: 'نظام ERP هو بمثابة الجهاز العصبي المركزي لأعمالك. بدلاً من تشتت البيانات في ملفات منفصلة، يجمع النظام كل شيء في مكان واحد، مما يضمن دقة المعلومات لحظياً ويسرّع عملية اتخاذ القرار الاستراتيجي.',
        category: 'Enterprise',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
        features: ['إدارة المخزون في الوقت الفعلي', 'محاسبة آلية متعددة العملات', 'بوابات خدمة ذاتية للموظفين', 'تقارير تشغيلية وتحليلية متقدمة'],
        domains: [{ name: 'العمليات', description: 'تسهيل سير العمل اليومي.' }, { name: 'المالية', description: 'ضمان الاستقرار المالي.' }, { name: 'الموارد البشرية', description: 'إدارة الكوادر بكفاءة.' }, { name: 'ذكاء الأعمال', description: 'رؤى تحليلية دقيقة.' }],
        pillars: [
          { title: 'مصدر موحد للحقيقة', description: 'كافة الأقسام تعتمد على بيانات موحدة ومحدثة لحظياً.' },
          { title: 'الكفاءة التشغيلية القصوى', description: 'إلغاء العمليات اليدوية والنسخ المكرر للبيانات.' },
          { title: 'الامتثال للمعايير', description: 'فحوصات مدمجة لضمان التوافق مع المعايير المحلية والدولية.' },
          { title: 'معمارية مرنة وقابلة للتوسع', description: 'أنظمة تنمو وتتطور مع تزايد حجم أعمالك.' }
        ],
        roadmap: [
          { label: 'تدقيق الاكتشاف', duration: 'أسبوع ١-٢', detail: 'رسم خرائط العمليات الحالية وتحديد نقاط الضعف.' },
          { label: 'المخطط الهندسي', duration: 'أسبوع ٣-٤', detail: 'تصميم هيكلية النظام المخصصة لمجال عملك.' },
          { label: 'ترحيل البيانات', duration: 'أسبوع ٥-٨', detail: 'نقل السجلات الحالية بأمان واحترافية للنظام الجديد.' },
          { label: 'القيادة التشغيلية', duration: 'أسبوع ٩+', detail: 'التدريب النهائي للكادر وإطلاق النظام بالكامل.' }
        ],
        benchmarks: [],
        techStack: ['Node.js', 'PostgreSQL', 'SAP Integration'],
        businessValue: 'إيقاف نزيف الموارد الناتج عن أخطاء الإدخال المكرر والبيروقراطية الورقية.'
    },
    {
        id: 'ecommerce',
        name: 'منصة التجارة الإلكترونية (Ecommerce)',
        tagline: 'منصة بيع متكاملة تعمل على مدار الساعة.',
        description: 'واجهة رقمية قوية تُدير المدفوعات وتتتبع الشحن والخدمات اللوجستية عالمياً.',
        longDescription: 'التجارة الإلكترونية لدينا تتجاوز مجرد موقع ويب؛ إنها محرك مبيعات متكامل يربط منتجاتك بالعملاء حول العالم، ويُعالج المدفوعات بأعلى معايير الأمان.',
        category: 'Development',
        imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000',
        features: ['معالجة مدفوعات عالمية آمنة', 'تجربة تسوق متوافقة مع الهواتف', 'أتمتة اللوجستيات وتتبع الشحن', 'أدوات تسويق وتحسين محركات بحث مدمجة'],
        domains: [{ name: 'التجزئة', description: 'توسيع المبيعات الرقمية.' }, { name: 'اللوجستيات', description: 'تتبع الشحن والتوصيل.' }, { name: 'التسويق', description: 'الوصول للعملاء المستهدفين.' }, { name: 'خدمة العملاء', description: 'دعم ما بعد البيع.' }],
        pillars: [
          { title: 'موثوقية العميل', description: 'بوابات دفع آمنة تحمي بيانات المشترين الحساسة.' },
          { title: 'أداء فائق السرعة', description: 'سرعة تحميل استثنائية لرفع معدلات التحويل.' },
          { title: 'جاهزية القنوات المتعددة', description: 'مزامنة المبيعات عبر الويب، الموبايل، ومنصات التواصل.' },
          { title: 'تحسين تجربة التحويل', description: 'واجهات مصممة لتقليل التخلي عن سلة التسوق.' }
        ],
        roadmap: [
          { label: 'استراتيجية UX', duration: 'أسبوع ١', detail: 'تحديد رحلة العميل المثالية لضمان البيع.' },
          { label: 'هندسة المنصة', duration: 'أسبوع ٢-٤', detail: 'بناء الواجهات والمنطق البرمجي للمتجر.' },
          { label: 'ربط بوابات الدفع', duration: 'أسبوع ٥', detail: 'إعداد أنظمة الدفع الآمنة والربط اللوجستي.' },
          { label: 'تدقيق الأداء', duration: 'أسبوع ٦', detail: 'اختبارات الجهد وتحسين SEO قبل الإطلاق.' }
        ],
        benchmarks: [],
        techStack: ['Next.js', 'Stripe', 'Headless CMS'],
        businessValue: 'الوصول لعملائك في كل مكان وزمان دون قيود جغرافية.'
    },
    {
        id: 'crm',
        name: 'إدارة علاقات العملاء (CRM)',
        tagline: 'لا تفقد فرصة بيع أو عميلاً محتملاً أبداً.',
        description: 'نظام ذكي لتتبع كافة التفاعلات والمحادثات لتعزيز كفاءة فريق المبيعات.',
        longDescription: 'نظام CRM هو الذاكرة الاحترافية لمؤسستك، حيث يجمع كافة المراسلات والاجتماعات في مكان واحد، مما يساعد فريقك على المتابعة الدقيقة وتحويل الفرص إلى صفقات ناجحة.',
        category: 'Enterprise',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000',
        features: ['تتبع ديناميكي لمراحل المبيعات', 'أرشفة موحدة لتاريخ التواصل', 'تنبيهات متابعة آلية وذكية', 'تقييم العملاء المحتملين بالذكاء الاصطناعي'],
        domains: [{ name: 'المبيعات', description: 'تحسين قمع المبيعات.' }, { name: 'التسويق', description: 'استهداف الحملات بدقة.' }, { name: 'الدعم', description: 'رفع مستوى رضا العملاء.' }, { name: 'التحليلات', description: 'توقع الإيرادات المستقبلية.' }],
        pillars: [
          { title: 'ذكاء المبيعات', description: 'تحويل البيانات إلى استراتيجيات بيع فعالة.' },
          { title: 'التعاون المؤسسي', description: 'رؤى مشتركة بين أقسام المبيعات والدعم الفني.' },
          { title: 'الاحتفاظ بالعملاء', description: 'أدوات استباقية لضمان ولاء العملاء الدائم.' },
          { title: 'أتمتة العمليات الإدارية', description: 'تقليل الأعباء الروتينية عن كاهل فريق المبيعات.' }
        ],
        roadmap: [
          { label: 'تقييم الاحتياجات', duration: 'أسبوع ١', detail: 'تحليل دورات المبيعات وطرق التواصل الحالية.' },
          { label: 'تهيئة النظام', duration: 'أسبوع ٢-٣', detail: 'تخصيص الحقول والمسارات لتناسب سير عملك.' },
          { label: 'إدراج البيانات', duration: 'أسبوع ٤', detail: 'استيراد بيانات العملاء ومزامنة البريد الإلكتروني.' },
          { label: 'تحسين الأداء', duration: 'أسبوع ٥+', detail: 'أتمتة المراسلات الدورية وإعداد التقارير.' }
        ],
        benchmarks: [],
        techStack: ['Salesforce', 'HubSpot API', 'Python'],
        businessValue: 'رفع معدلات المبيعات عبر المتابعة الدقيقة في التوقيت المثالي.'
    },
    {
        id: 'uiux',
        name: 'معمارية تجربة المستخدم (UI/UX)',
        tagline: 'تحويل البرمجيات المعقدة إلى واجهات بديهية وجذابة.',
        description: 'تصميم استراتيجي يوجه المستخدم نحو الإجراء الصحيح بسلاسة تامة.',
        longDescription: 'تجربة المستخدم هي الفارق الجوهري بين النظام المُربك والنظام الممتع. نحن نصمم "الشكل" و"الإحساس" بحيث يجد المستخدمون ما يبحثون عنه بسرعة وسهولة.',
        category: 'Design',
        imageUrl: 'https://images.unsplash.com/photo-1576595580361-90a855b84b20?q=80&w=1974&auto=format&fit=crop',
        features: ['أبحاث واختبارات معمقة للمستخدمين', 'هوية بصرية عصرية ومتكاملة', 'نماذج أولية تفاعلية عالية الدقة', 'توثيق شامل لأنظمة التصميم'],
        domains: [{ name: 'الهوية الرقمية', description: 'حضور رقمي متميز.' }, { name: 'تطوير المنتجات', description: 'تحسين سهولة الاستخدام.' }, { name: 'العلامة التجارية', description: 'السرد البصري للقصة.' }, { name: 'سهولة الوصول', description: 'تصميم شامل للجميع.' }],
        pillars: [
          { title: 'الوضوح الإدراكي', description: 'واجهات بسيطة لا تتطلب تدريباً لفهمها.' },
          { title: 'الولاء للعلامة', description: 'تصميم يخلق روابط عاطفية وثقة مع المستخدمين.' },
          { title: 'الشمولية الرقمية', description: 'ضمان كفاءة عمل النظام لكافة فئات المستخدمين.' },
          { title: 'التطوير المستمر', description: 'استخدام البيانات لتحسين التجربة بشكل دائم.' }
        ],
        roadmap: [
          { label: 'مرحلة الاكتشاف', duration: 'أسبوع ١', detail: 'تحديد شخصيات المستخدمين وأهداف العمل.' },
          { label: 'مخططات الهيكل', duration: 'أسبوع ٢-٣', detail: 'بناء الهيكل العظمي والمعماري للتطبيق.' },
          { label: 'التصميم البصري', duration: 'أسبوع ٤-٥', detail: 'تطبيق الألوان، الخطوط، وجماليات العلامة.' },
          { label: 'تسليم التصميم', duration: 'أسبوع ٦', detail: 'تقديم الأصول النهائية والتوثيق للمطورين.' }
        ],
        benchmarks: [],
        techStack: ['Figma', 'Adobe Creative Suite', 'Principle'],
        businessValue: 'تقليل تكاليف الدعم الفني عبر جعل الأنظمة بديهية الاستخدام.'
    },
    {
        id: 'seo',
        name: 'تحسين محركات البحث (SEO)',
        tagline: 'كن الخيار الأول الذي يراه العملاء على جوجل.',
        description: 'عمل تقني واستراتيجي لرفع تصنيف علامتك التجارية في نتائج البحث.',
        longDescription: 'خدمات SEO لدينا تضمن تواجد مشروعك في صدارة "الشوارع الرقمية" الأكثر ازدحاماً. نحن نحسن الأكواد والمحتوى لضمان ظهورك أمام العملاء المستهدفين بفعالية.',
        category: 'Consulting',
        imageUrl: 'https://images.unsplash.com/photo-1709281847802-9aef10b6d4bf?q=80&w=1932&auto=format&fit=crop',
        features: ['استراتيجية المحتوى والكلمات المفتاحية', 'تحسين السرعة التقنية للموقع', 'بناء الروابط الخلفية القوية', 'التصدر في نتائج البحث المحلية'],
        domains: [{ name: 'النمو', description: 'زيادة الوصول المجاني.' }, { name: 'الجانب التقني', description: 'تحسين أساسيات الويب.' }, { name: 'المحتوى', description: 'ترسيخ المرجعية المعرفية.' }, { name: 'التواجد المحلي', description: 'الظهور في المنطقة المستهدفة.' }],
        pillars: [
          { title: 'السلطة الرقمية', description: 'جعل موقعك المرجع الموثوق في مجال عملك.' },
          { title: 'الأصول طويلة الأمد', description: 'بناء حركة زوار مستدامة لا تتوقف بتوقف الإعلانات.' },
          { title: 'التصدر الاستراتيجي', description: 'استهداف الكلمات التي تؤدي فعلياً للمبيعات.' },
          { title: 'السياق الدلالي', description: 'التحسين بناءً على نية البحث وليس مجرد تكرار الكلمات.' }
        ],
        roadmap: [
          { label: 'التدقيق التقني', duration: 'أسبوع ١', detail: 'إصلاح المشاكل التقنية التي تبطئ ظهور الموقع.' },
          { label: 'بحث الكلمات', duration: 'أسبوع ٢', detail: 'تحديد المصطلحات عالية القيمة لمجال عملك.' },
          { label: 'التنفيذ المباشر', duration: 'أسبوع ٣-٤', detail: 'تحسين العناوين والمحتوى عالي التأثير.' },
          { label: 'مراقبة النمو', duration: 'مستمر', detail: 'تقارير شهرية وتحديثات استراتيجية دورية.' }
        ],
        benchmarks: [],
        techStack: ['Semrush', 'Ahrefs', 'Search Console'],
        businessValue: 'توفير ميزانيات الإعلانات الضخمة عبر الحصول على زوار مجانيين.'
    },
    {
        id: 'cyber',
        name: 'الأمن السيبراني (Cybersecurity)',
        tagline: 'حماية أصولك الرقمية من التهديدات المتطورة.',
        description: 'حلول أمنية حديثة لحماية أسرار الشركة وبياناتها المالية من الاختراق.',
        longDescription: 'الأمن السيبراني هو الجدار الدفاعي لمشروعك الرقمي. نحن نبني أنظمة مراقبة وتشفير متقدمة تضمن خصوصية بياناتك وحمايتها من هجمات الفدية والاختراقات.',
        category: 'Security',
        imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
        features: ['مراقبة استباقية للتهديدات', 'تشفير بيانات بمعايير عسكرية', 'معمارية الوصول "صفر ثقة"', 'خطط استجابة سريعة للحوادث'],
        domains: [{ name: 'الدفاع', description: 'حماية استباقية وشاملة.' }, { name: 'الخصوصية', description: 'حماية بيانات العملاء.' }, { name: 'الامتثال', description: 'التوافق مع القوانين الأمنية.' }, { name: 'التعافي', description: 'ضمان استمرارية الأعمال.' }],
        pillars: [
          { title: 'الحماية الوقائية', description: 'إيقاف الهجمات قبل اختراق شبكة الشركة.' },
          { title: 'مرونة الأعمال', description: 'ضمان استمرار العمليات حتى أثناء محاولات الاختراق.' },
          { title: 'سيادة البيانات', description: 'تحكم كامل في مكان وكيفية تخزين البيانات الحساسة.' },
          { title: 'الوعي الأمني', description: 'تمكين الموظفين ليكونوا خط الدفاع الأول.' }
        ],
        roadmap: [
          { label: 'مسح الثغرات', duration: 'أسبوع ١', detail: 'اختبار كافة المداخل الرقمية بحثاً عن نقاط ضعف.' },
          { label: 'تحصين الشبكة', duration: 'أسبوع ٢-٣', detail: 'تركيب الجدران النارية وأنظمة التشفير المتقدمة.' },
          { label: 'ضوابط الوصول', duration: 'أسبوع ٤', detail: 'تطبيق المصادقة الثنائية والأذونات المحددة.' },
          { label: 'تسليم الأنظمة', duration: 'أسبوع ٥+', detail: 'تدريب نهائي وإعداد المراقبة على مدار الساعة.' }
        ],
        benchmarks: [],
        techStack: ['IDS/IPS', 'AES-256', 'SIEM Platforms'],
        businessValue: 'تجنب الدعاوى القضائية والضرر بسمعة العلامة التجارية الناتج عن تسريب البيانات.'
    },
    {
        id: 'api',
        name: 'تكامل الأنظمة والربط البرمجي (API)',
        tagline: 'جعل تطبيقاتك تتحدث لغة واحدة.',
        description: 'ربط البرمجيات المختلفة لضمان تدفق البيانات آلياً ودون تدخل بشري.',
        longDescription: 'واجهات البرمجة (APIs) هي الجسور بين جزر البرمجيات. نحن نبني هذه الجسور لضمان مزامنة البيانات بين متجرك ونظام المخازن والمحاسبة تلقائياً.',
        category: 'Development',
        imageUrl: 'https://images.unsplash.com/photo-1763568258208-a5af30d5a31b?q=80&w=2070&auto=format&fit=crop',
        features: ['مزامنة البيانات لحظياً', 'مراكز ربط التطبيقات المتعددة', 'نقل بيانات مشفر وآمن', 'بوابات API عالية الأداء'],
        domains: [{ name: 'الربط التقني', description: 'إلغاء المزامنة اليدوية.' }, { name: 'الأتمتة', description: 'تدفقات عمل سلسة.' }, { name: 'الأنظمة', description: 'توافقية تشغيلية عالية.' }, { name: 'التوسع', description: 'إدارة الرسائل والبيانات.' }],
        pillars: [
          { title: 'الأتمتة الشاملة', description: 'أنظمة تحدث بعضها البعض دون تدخل بشري.' },
          { title: 'سلامة البيانات', description: 'ضمان بقاء المعلومات متسقة عبر كافة المنصات.' },
          { title: 'القابلية للتوسع', description: 'ربط برمجيات جديدة بسهولة مع نمو أعمالك.' },
          { title: 'أمن نقاط النهاية', description: 'حماية البوابات التي تتواصل عبرها البرمجيات.' }
        ],
        roadmap: [
          { label: 'رسم السياق', duration: 'أسبوع ١', detail: 'تحديد البيانات التي تحتاج للانتقال بدقة.' },
          { label: 'تطوير المنطق', duration: 'أسبوع ٢-٤', detail: 'بناء قواعد التحويل والمزامنة البرمجية.' },
          { label: 'اختبار الجهد', duration: 'أسبوع ٥', detail: 'ضمان استقرار الربط خلال ضغط البيانات.' },
          { label: 'الاتصال المباشر', duration: 'أسبوع ٦+', detail: 'تشغيل الجسر الآلي في بيئة الإنتاج.' }
        ],
        benchmarks: [],
        techStack: ['Go', 'gRPC', 'RabbitMQ'],
        businessValue: 'إلغاء ٩٠٪ من أعباء إدخال البيانات يدوياً.'
    },
    {
        id: 'infra-audit',
        name: 'تدقيق وتطوير البنية التحتية (Audit)',
        tagline: 'فحص شامل لصحة وكفاءة بنيتك التحتية التقنية.',
        description: 'تحليل دقيق لكافة موارد تكنولوجيا المعلومات لكشف الهدر والمخاطر.',
        longDescription: 'تماماً مثل الفحص الطبي، يبحث تدقيق النظام عن المشاكل المخفية. نحن نفحص الخوادم والبرمجيات لتحديد مواطن البطء والثغرات الأمنية والتكاليف غير المبررة.',
        category: 'Consulting',
        imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000',
        features: ['تحليل التكلفة والفائدة بعمق', 'فحوصات سلامة شاملة', 'اختبارات الأداء والجهد', 'مراجعة دورة حياة الموارد'],
        domains: [{ name: 'الكفاءة', description: 'تحسين استغلال الموارد.' }, { name: 'الميزانية', description: 'تقليل التكاليف غير الضرورية.' }, { name: 'الأمن', description: 'تخفيف المخاطر التقنية.' }, { name: 'المستقبل', description: 'خارطة طريق للتحديث.' }],
        pillars: [
          { title: 'التحسين الرشيق', description: 'تحقيق أقصى أداء بأقل قدر من الهدر المالي.' },
          { title: 'اكتشاف المخاطر', description: 'إيجاد التهديدات قبل أن تصبح أزمات مكلفة.' },
          { title: 'الاستراتيجية المالية', description: 'تحويل تكنولوجيا المعلومات إلى محرك للقيمة المضافة.' },
          { title: 'التحكم السيادي', description: 'إزالة الاعتماد على موردين خارجيين مكلفين.' }
        ],
        roadmap: [
          { label: 'حصر الأنظمة', duration: 'أسبوع ١', detail: 'فهرسة كل خادم، ترخيص، وسطر برمجية.' },
          { label: 'مرحلة التحليل', duration: 'أسبوع ٢', detail: 'إجراء اختبارات الأداء ومراجعات التكلفة.' },
          { label: 'الوصفة الاستراتيجية', duration: 'أسبوع ٣', detail: 'قائمة مفصلة بالإصلاحات الحرجة وفرص التوفير.' },
          { label: 'دعم التنفيذ', duration: 'مستمر', detail: 'توجيه فريقك خلال عملية التحسين الشاملة.' }
        ],
        benchmarks: [],
        techStack: ['Infrastructure as Code', 'Trivy', 'Cost Optimization'],
        businessValue: 'غالباً ما يساهم التدقيق في توفير ٢٠٪ من فواتير تكنولوجيا المعلومات الشهرية.'
    }
  ],
  ku: [
    {
        id: 'erp',
        name: 'Mejiyê Pargîdaniyê (ERP)',
        tagline: 'Navendek yekane ji bo hemî daneyên pargîdaniya we.',
        description: 'Pergalek hevpar ku tê de drav, envanter û agahiyên karmendan bi hev re dixebitin.',
        longDescription: 'ERP mîna pergalek demarî ya navendî ye ji bo karsaziya we. Li şûna ku hûn pelên cihêreng ji bo firotan û hesabvaniyê bikar bînin, her tişt li yek cîhek e. Her kes heman rastiyan dibîne, ku dibe sedema kêmbûna çewtiyan û biryarên bileztir.',
        category: 'Enterprise',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
        features: ['Rêveberiya Envanterê ya Rastî', 'Hesabvaniya Pir-pereyî ya Otomatîk', 'Portalên Karmendan yên Xweser', 'Raporkirina Operasyonel a Pêşketî'],
        domains: [{ name: 'Operasyon', description: 'Hêsankirina herikîna karên rojane.' }, { name: 'Fînanse', description: 'Îstîqrara dravî.' }, { name: 'Çavkaniyên Mirovî', description: 'Rêveberiya mirovan.' }, { name: 'Zîrekiya Daneyan', description: 'Analîzên kûr.' }],
        pillars: [
          { title: 'Çavkaniya Rastiyê ya Yekane', description: 'Her beş li heman daneyên hevdengkirî dinêre.' },
          { title: 'Kêrhatina Operasyonel', description: 'Rakirina kopîkirina manuwel a di navbera pelên cihê de.' },
          { title: 'Lihevhatina Yasayî', description: 'Kontrolên navxweyî yên ji bo standardên herêmî û navneteweyî.' },
          { title: 'Mîmariya Mezinbûyî', description: 'Pergalên ku bi tevliheviya karsaziya we re mezin dibin.' }
        ],
        roadmap: [
          { label: 'Audita Tespîtê', duration: 'Hefte 1-2', detail: 'Nexşekirina hemî pêvajoyên karsaziyê û tespîtkirina kêşeyan.' },
          { label: 'Nexşeya Mîmarî', duration: 'Hefte 3-4', detail: 'Sêwirana ERP-ya xwerû ji bo sektora weya taybet.' },
          { label: 'Veguhestina Daneyan', duration: 'Hefte 5-8', detail: 'Barkirina tomarkirinên kevn bo pergalê bi awayekî ewle.' },
          { label: 'Fermandariya Operasyonel', duration: 'Hefte 9+', detail: 'Perwerdehiya dawî ya karmendan û destpêkirina tam.' }
        ],
        benchmarks: [],
        techStack: ['Node.js', 'PostgreSQL', 'SAP Integration'],
        businessValue: 'Ji ber çewtiyên îdarî û kaxezên hêdî drav winda nekin.'
    },
    {
        id: 'ecommerce',
        name: 'Dikana Dîjîtal (Ecommerce)',
        tagline: 'Dikanek ku dema hûn radizên jî difiroşe.',
        description: 'Malperek bi hêz ku dravdanê digire û barkirinê li seranserê cîhanê dişopîne.',
        longDescription: 'Ecommerce ji malperekê zêdetir e; ew motorek firotanê ye. Berhemên we bi mişteriyên li her derê cîhanê ve girê dide, dravdana wan bi ewlehî pêk tîne, û ji we re dibe alîkar ku hûn barkirinê bêyî pirsgirêkên şopandina manuwel birêve bibin.',
        category: 'Development',
        imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000',
        features: ['Dravdana Global a Ewle', 'Sêwirana Mobile-Responsive', 'Synca Lojîstîk û Barkirinê ya Otomatîk', 'Amûrên Marketing û SEO-yê yên Navxweyî'],
        domains: [{ name: 'Retail', description: 'Mezinkirina firotanên dîjîtal.' }, { name: 'Lojîstîk', description: 'Şopandina barkirinê.' }, { name: 'Marketing', description: 'Gihîştina mişteriyan.' }, { name: 'Xizmeta Mişteriyan', description: 'Piştgiriya piştî kirînê.' }],
        pillars: [
          { title: 'Baweriya Mişterî', description: 'Dergehên dravdanê yên ewle ku daneyên kiryaran diparêzin.' },
          { title: 'Performansa li Pîvanê', description: 'Barkirina rûpelê ya bilez ji bo herî zêde veguherînan.' },
          { title: 'Amadehiya Omnichannel', description: 'Synca firotanê li seranserê web, mobîl û medyaya civakî.' },
          { title: 'Fokusa li ser Veguherînê', description: 'Sêwirana UI ji bo kêmkirina berdana kartê.' }
        ],
        roadmap: [
          { label: 'Stratejiya UX', duration: 'Hefte 1', detail: 'Diyarkirina rêwîtiya kirînê ya herî baş ji bo mişterî.' },
          { label: 'Endezyariya Platformê', duration: 'Hefte 2-4', detail: 'Avakirina bingeha dikanê û mantiqê katalogê.' },
          { label: 'Girêdana Dravdanê', duration: 'Hefte 5', detail: 'Sazkirina dergehên ewle û lojîstîka herêmî.' },
          { label: 'Audita Performansê', duration: 'Hefte 6', detail: 'Testkirin û optimîzasyona SEO-yê berî destpêkirinê.' }
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
        features: ['Şopandina Pipeline-a Firotanê ya Dînamîk', 'Dîroka Peywendiyê ya Navendî', 'Bîranînên Şopandinê yên Otomatîk', 'Lead Scoring bi AI'],
        domains: [{ name: 'Firotan', description: 'Optimîzekirina funnel-a firotanê.' }, { name: 'Marketing', description: 'Kampanyayên taybet.' }, { name: 'Piştgirî', description: 'Têkiliyên saxlem.' }, { name: 'Analîtîk', description: 'Texmîna dahatê.' }],
        pillars: [
          { title: 'Zîrekiya Lead-an', description: 'Veguhestina daneyan bo stratejiyên firotanê yên bandor.' },
          { title: 'Hevkariya Tîmê', description: 'Agahiyên hevpar di navbera beşên firotan û piştgiriyê de.' },
          { title: 'Parastina Mişterî', description: 'Amûrên proaktîf ji bo ku mişterî bi we ve werin girêdan.' },
          { title: 'Otomasyona Pêvajoyê', description: 'Kêmkirina barê îdarî yê tîmê firotanê.' }
        ],
        roadmap: [
          { label: 'Nirxandina CRM', duration: 'Hefte 1', detail: 'Analîzkirina daxwaz û pêvajoyên firotanê yên niha.' },
          { label: 'Sazkirina Pergalê', duration: 'Hefte 2-3', detail: 'Xwerûkirina qadan û pipeline-an ji bo karsaziya we.' },
          { label: 'Barkirina Daneyan', duration: 'Hefte 4', detail: 'Veguhestina daneyên kevn û synca e-peyamê.' },
          { label: 'Optimîzasyona Firotanê', duration: 'Hefte 5+', detail: 'Otomatîkkirina rapor û bîranînên şopandinê.' }
        ],
        benchmarks: [],
        techStack: ['Salesforce', 'HubSpot API', 'Python'],
        businessValue: 'Bi şopandina fersendan di dema kamil de firotanê zêde bikin.'
    }
  ]
};

export const getServices = (lang: Language): Service[] => {
  return SERVICES_DATA[lang] && SERVICES_DATA[lang].length > 0 ? SERVICES_DATA[lang] : SERVICES_DATA.en;
};
