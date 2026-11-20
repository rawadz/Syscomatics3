
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { Language, Service } from './types';
import { MEDIA_ASSETS } from './mediaAssets';

export const SERVICES_DATA: Record<Language, Service[]> = {
  en: [
    {
      id: 'erp',
      name: 'The Company Brain (ERP)',
      tagline: 'One center for all your company data.',
      description: 'A shared system where money, stock, and staff info work together.',
      longDescription: 'An ERP is like a central nervous system for your business. Instead of having separate files for sales and accounting, everything is in one place. Everyone sees the same facts, leading to fewer mistakes and faster decisions.',
      category: 'Enterprise',
      imageUrl: MEDIA_ASSETS.enterpriseInfrastructure,
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
      imageUrl: MEDIA_ASSETS.digitalWorkspaceCase,
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
      imageUrl: MEDIA_ASSETS.engineeringStudioHall,
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
      imageUrl: MEDIA_ASSETS.digitalWorkspaceCase,
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
      imageUrl: MEDIA_ASSETS.engineeringStudioHall,
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
      imageUrl: MEDIA_ASSETS.sovereignSecurityVault,
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
      imageUrl: MEDIA_ASSETS.enterpriseInfrastructure,
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
      imageUrl: MEDIA_ASSETS.engineeringStudioHall,
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
      id: 'cloud',
      name: 'Sovereign Cloud Infrastructure',
      tagline: 'Absolute control over your data territory.',
      description: 'High-performance private and hybrid cloud setups designed for regional data residency.',
      longDescription: 'Generic cloud solutions put your data in hands you don’t control. Our Sovereign Cloud infrastructure provides the same performance as global providers but on your territory, under your laws, and protected by your encryption keys.',
      category: 'Cloud',
      imageUrl: MEDIA_ASSETS.heroArchitecture,
      features: ['Zero-Knowledge Private Clusters', 'Hybrid Sync Architecture', 'Automated Scaling Protocols', 'Localized Hardware Deployment'],
      domains: [{ name: 'Infrastructure', description: 'Rock-solid stability.' }, { name: 'Security', description: 'Absolute privacy.' }, { name: 'Performance', description: 'Global speed, local control.' }],
      pillars: [
        { title: 'Data Residency', description: 'Ensuring your data never leaves your specified geographic borders.' },
        { title: 'Elastic Resilience', description: 'Resources that expand instantly during peak traffic loads.' },
        { title: 'Encrypted Persistence', description: 'Multiple layers of hardware and software encryption.' },
        { title: 'Open-Stack Control', description: 'Avoiding vendor lock-in through open infrastructure standards.' }
      ],
      roadmap: [
        { label: 'Load Analysis', duration: 'Week 1', detail: 'Measuring current and projected compute/storage needs.' },
        { label: 'Architecture Design', duration: 'Week 2-3', detail: 'Blueprint of the hybrid or private cloud mesh.' },
        { label: 'Deployment Phase', duration: 'Week 4-8', detail: 'Hardware procurement and cluster configuration.' },
        { label: 'Migration', duration: 'Week 9+', detail: 'Moving workloads to the new sovereign environment.' }
      ],
      benchmarks: [],
      techStack: ['Kubernetes', 'Terraform', 'OpenStack', 'Nginx'],
      businessValue: 'Eliminate compliance risks and foreign interference in your data.'
    },
    {
      id: 'ai',
      name: 'Neural Intelligence Systems',
      tagline: 'Predict the future of your business.',
      description: 'Custom AI models that analyze patterns and automate complex decision-making.',
      longDescription: 'Our Neural Intelligence systems move beyond simple automation. We build proprietary AI models that live on your infrastructure, ensuring data sovereignty while providing predictive insights on inventory, customer churn, and market shifts.',
      category: 'AI',
      imageUrl: MEDIA_ASSETS.enterpriseInfrastructure,
      features: ['Predictive Demand Forecasting', 'Automated Lead Qualification', 'Natural Language Document Processing', 'Sovereign On-Premise AI Hosting'],
      domains: [{ name: 'Strategy', description: 'Data-driven decision making.' }, { name: 'Automation', description: 'Reducing cognitive load.' }, { name: 'Intelligence', description: 'Market foresight.' }],
      pillars: [
        { title: 'Sovereign AI', description: 'Models trained on your data, staying within your private network.' },
        { title: 'Pattern Recognition', description: 'Discovering hidden efficiencies in existing data sets.' },
        { title: 'Ethical Accuracy', description: 'Explainable AI models that provide clear reasoning for outputs.' },
        { title: 'Hyper-Personalization', description: 'Tailoring customer experiences at absolute scale.' }
      ],
      roadmap: [
        { label: 'Data Feasibility', duration: 'Week 1-2', detail: 'Analyzing availability and quality of training data.' },
        { label: 'Model Architecture', duration: 'Week 3-5', detail: 'Designing the neural network structure for your specific use case.' },
        { label: 'Training & Refinement', duration: 'Week 6-10', detail: 'Iterative model training and accuracy testing.' },
        { label: 'Integration', duration: 'Week 11+', detail: 'Embedding the AI model into your existing ERP/CRM workflow.' }
      ],
      benchmarks: [],
      techStack: ['Python', 'PyTorch', 'TensorFlow', 'NVIDIA CUDA'],
      businessValue: 'Identify market opportunities and operational risks before they occur.'
    },
    {
      id: 'blockchain',
      name: 'Private Ledger Architecture',
      tagline: 'Trust built into the very code.',
      description: 'Transparent, immutable auditing systems for high-stakes enterprise transactions.',
      longDescription: 'Blockchain is the ultimate auditing tool. We build private, high-speed ledger systems that make it impossible to fake records, ensuring absolute transparency in supply chains, finance, and legal documentation.',
      category: 'Blockchain',
      imageUrl: MEDIA_ASSETS.sovereignSecurityVault,
      features: ['Immutable Audit Trails', 'Smart Contract Automation', 'Multi-Node Verification', 'Encrypted Document Hashing'],
      domains: [{ name: 'Trust', description: 'Verifiable integrity.' }, { name: 'Finance', description: 'Fraud-proof transactions.' }, { name: 'Audit', description: 'Automated transparency.' }],
      pillars: [
        { title: 'Immutability', description: 'Records that cannot be changed once they are verified.' },
        { title: 'Decentralized Security', description: 'Eliminating single points of failure in data storage.' },
        { title: 'Process Efficiency', description: 'Removing middle-men through self-executing smart contracts.' },
        { title: 'Auditable Logic', description: 'Complete history of every transaction and system state.' }
      ],
      roadmap: [
        { label: 'Protocol Selection', duration: 'Week 1-2', detail: 'Choosing the right consensus mechanism for your speed needs.' },
        { label: 'Smart Contract Design', duration: 'Week 3-5', detail: 'Programming the business rules directly into the chain.' },
        { label: 'Security Audit', duration: 'Week 6-7', detail: 'Rigorous testing of the contract logic for vulnerabilities.' },
        { label: 'Node Setup', duration: 'Week 8+', detail: 'Full network deployment and integration with existing systems.' }
      ],
      benchmarks: [],
      techStack: ['Solidity', 'Hyperledger Fabric', 'Go', 'Rust'],
      businessValue: 'Reduce fraud and auditing costs by 70% through technical transparency.'
    },
    {
      id: 'resilience',
      name: 'Business Resilience & Recovery',
      tagline: 'The system that refuses to fail.',
      description: 'Advanced engineering to ensure your operations survive any physical or digital crisis.',
      longDescription: 'Disaster recovery is more than just backups. We engineer "Anti-Fragile" systems that can detect failures instantly and switch to redundant infrastructure without users noticing. We protect your business from hardware failure and cyber attacks.',
      category: 'Security',
      imageUrl: MEDIA_ASSETS.sovereignSecurityVault,
      features: ['Real-time Data Replication', 'Instant Automated Failover', 'Offline Operational Modes', 'Redundant Power & Network Mesh'],
      domains: [{ name: 'Continuity', description: 'Operations that never stop.' }, { name: 'Safety', description: 'Protecting the company core.' }, { name: 'Resilience', description: 'Bouncing back stronger.' }],
      pillars: [
        { title: 'Zero Downtime', description: 'Ensuring your primary services stay online through any incident.' },
        { title: 'Data Integrity', description: 'Protecting records from corruption during system switches.' },
        { title: 'Rapid Recovery', description: 'Targeting RTOs (Recovery Time Objectives) measured in seconds.' },
        { title: 'Global Failover', description: 'The ability to move your operations across regions instantly.' }
      ],
      roadmap: [
        { label: 'Risk Assessment', duration: 'Week 1', detail: 'Identifying all points of failure in current setup.' },
        { label: 'Redundancy Blueprint', duration: 'Week 2-3', detail: 'Designing the mirror systems and sync protocols.' },
        { label: 'Stress Testing', duration: 'Week 4-5', detail: 'Simulating disasters to prove the resilience of the design.' },
        { label: 'Command Setup', duration: 'Week 6+', detail: 'Final monitoring dashboard and auto-recovery activation.' }
      ],
      benchmarks: [],
      techStack: ['Veeam', 'Zerto', 'Rsync', 'HAProxy'],
      businessValue: 'Stop worrying about the "what-if" and focus on growth with absolute safety.'
    },
    {
      id: 'iot',
      name: 'Industrial IoT & Edge Intelligence',
      tagline: 'Connect your physical assets to your digital brain.',
      description: 'Hardware and software integration for real-time factory, warehouse, and fleet monitoring.',
      longDescription: 'Industrial IoT bridges the gap between your physical assets and your ERP. We install sensors and edge-computing devices that monitor machines, track vehicles, and manage energy usage, feeding all that data directly into your decision-making systems.',
      category: 'Development',
      imageUrl: MEDIA_ASSETS.enterpriseInfrastructure,
      features: ['Real-time Sensor Networks', 'Predictive Maintenance Alerts', 'Fleet Tracking & Telematics', 'Energy Efficiency Monitoring'],
      domains: [{ name: 'Manufacturing', description: 'Smart factory floors.' }, { name: 'Logistics', description: 'Total asset visibility.' }, { name: 'Efficiency', description: 'Reducing physical waste.' }],
      pillars: [
        { title: 'Edge Processing', description: 'Analyzing data locally to ensure instant response times.' },
        { title: 'Asset Visibility', description: 'Knowing where everything is and how it is performing, 24/7.' },
        { title: 'Predictive Care', description: 'Fixing machines before they break, based on vibration and heat data.' },
        { title: 'Unified Data Stream', description: 'One dashboard for both your office and your factory.' }
      ],
      roadmap: [
        { label: 'Hardware Audit', duration: 'Week 1-2', detail: 'Evaluating current machinery and connectivity potential.' },
        { label: 'Sensor Integration', duration: 'Week 3-6', detail: 'Physical installation and protocol setup (MQTT/Modbus).' },
        { label: 'Edge Configuration', duration: 'Week 7-9', detail: 'Setting up local processing to reduce cloud lag.' },
        { label: 'System Sync', duration: 'Week 10+', detail: 'Final connection to the ERP for automated reporting.' }
      ],
      benchmarks: [],
      techStack: ['MQTT', 'Industrial PC', 'C++', 'Grafana'],
      businessValue: 'Reduce machine downtime by 40% and optimize energy costs.'
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
        imageUrl: MEDIA_ASSETS.enterpriseInfrastructure,
        features: ['إدارة المخزون في الوقت الفعلي', 'محاسبة آلية متعددة العملات', 'بوابات خدمة ذاتية للموظفين', 'تقارير تشغيلية وتحليلية متقدمة'],
        domains: [{ name: 'العمليات', description: 'تسهيل سير العمل اليومي.' }, { name: 'المالية', description: 'ضمان الاستقرار المالي.' }, { name: 'المالحة البشرية', description: 'إدارة الكوادر بكفاءة.' }, { name: 'ذكاء الأعمال', description: 'رؤى تحليلية دقيقة.' }],
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
        imageUrl: MEDIA_ASSETS.digitalWorkspaceCase,
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
        imageUrl: MEDIA_ASSETS.engineeringStudioHall,
        features: ['تتبع ديناميكي لمراحل المبيعات', 'أرشفة موحدة لتاريخ التواصل', 'تنبيهات متابعة آلية وذكية', 'تقييم العملاء المحتمين بالذكاء الاصطناعي'],
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
        imageUrl: MEDIA_ASSETS.digitalWorkspaceCase,
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
        imageUrl: MEDIA_ASSETS.engineeringStudioHall,
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
        imageUrl: MEDIA_ASSETS.sovereignSecurityVault,
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
        imageUrl: MEDIA_ASSETS.enterpriseInfrastructure,
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
        imageUrl: MEDIA_ASSETS.engineeringStudioHall,
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
    },
    {
        id: 'cloud',
        name: 'البنية التحتية السحابية السيادية',
        tagline: 'سيطرة مطلقة على إقليمك الرقمي.',
        description: 'إعدادات سحابية خاصة وهجينة عالية الأداء مصممة لضمان إقامة البيانات محلياً.',
        longDescription: 'توفر بنيتنا التحتية السحابية السيادية نفس أداء المزودين العالميين ولكن على أرضك، وتحت قوانينك، ومحمية بمفاتيح التشفير الخاصة بك فقط.',
        category: 'Cloud',
        imageUrl: MEDIA_ASSETS.heroArchitecture,
        features: ['عناقيد خاصة', 'معمارية هجينة', 'توسع آلي', 'أجهزة محلية'],
        domains: [{ name: 'البنية التحتية', description: 'استقرار تقني صلب.' }, { name: 'الأمن', description: 'خصوصية مطلقة.' }, { name: 'الأداء', description: 'سرعة عالمية، تحكم محلي.' }],
        pillars: [
          { title: 'سيادة البيانات', description: 'ضمان عدم خروج بياناتك أبداً من الحدود الجغرافية المحددة.' },
          { title: 'المرونة المطاطية', description: 'موارد تتوسع فوريًا خلال فترات ذروة حركة البيانات.' },
          { title: 'الاستمرارية المشفرة', description: 'طبقات متعددة من تشفير العتاد والبرمجيات.' },
          { title: 'التحكم المفتوح', description: 'تجنب الارتباط بمورد واحد من خلال معايير البنية التحتية المفتوحة.' }
        ],
        roadmap: [
          { label: 'تحليل الأحمال', duration: 'أسبوع ١', detail: 'قياس احتياجات الحوسبة والتخزين الحالية والمتوقعة.' },
          { label: 'تصميم المعمارية', duration: 'أسبوع ٢-٣', detail: 'مخطط هندسي للسحابة الخاصة أو الهجينة.' },
          { label: 'مرحلة النشر', duration: 'أسبوع ٤-٨', detail: 'تأمين العتاد وتهيئة العناقيد البرمجية.' },
          { label: 'الهجرة التقنية', duration: 'أسبوع ٩+', detail: 'نقل أعباء العمل إلى البيئة السيادية الجديدة.' }
        ],
        benchmarks: [],
        techStack: ['Kubernetes', 'Terraform', 'OpenStack'],
        businessValue: 'إلغاء مخاطر الامتثال والتدخل الخارجي في بياناتك.'
    },
    {
        id: 'ai',
        name: 'أنظمة الذكاء العصبي',
        tagline: 'توقع مستقبل أعمالك بدقة متناهية.',
        description: 'نماذج ذكاء اصطناعي مخصصة لتحليل الأنماط وأتمتة اتخاذ القرارات المعقدة.',
        longDescription: 'تتجاوز أنظمة الذكاء العصبي لدينا مفهوم الأتمتة البسيطة؛ فنحن نبني نماذج ذكاء اصطناعي مملوكة لك تعمل ضمن بنيتك التحتية الخاصة، مما يضمن سيادة البيانات مع توفير رؤى تنبؤية حول المخزون والعملاء وتغيرات السوق.',
        category: 'AI',
        imageUrl: MEDIA_ASSETS.enterpriseInfrastructure,
        features: ['توقع الطلب', 'تأهيل العملاء', 'معالجة اللغات', 'استضافة AI محلية'],
        domains: [{ name: 'الاستراتيجية', description: 'صناعة القرار المبني على البيانات.' }, { name: 'الأتمتة', description: 'تقليل العبء الذهني.' }, { name: 'الذكاء', description: 'استشراف السوق.' }],
        pillars: [
          { title: 'ذكاء اصطناعي سيادي', description: 'نماذج مدربة على بياناتك، تبقى ضمن شبكتك الخاصة.' },
          { title: 'التعرف على الأنماط', description: 'اكتشاف الكفاءات المخفية في مجموعات البيانات الحالية.' },
          { title: 'الدقة الأخلاقية', description: 'نماذج ذكاء اصطناعي قابلة للتفسير توفر أسباباً واضحة للمخرجات.' },
          { title: 'التخصيص الفائق', description: 'تصميم تجارب العملاء بدقة متناهية وعلى نطاق واسع.' }
        ],
        roadmap: [
          { label: 'جدوى البيانات', duration: 'أسبوع ١-٢', detail: 'تحليل توفر وجودة بيانات التدريب.' },
          { label: 'معمارية النموذج', duration: 'أسبوع ٣-٥', detail: 'تصميم هيكل الشبكة العصبية لحالتك الخاصة.' },
          { label: 'التدريب والتحسين', duration: 'أسبوع ٦-١٠', detail: 'تدريب النموذج التكراري واختبار الدقة.' },
          { label: 'التكامل المؤسسي', duration: 'أسبوع ١١+', detail: 'دمج نموذج AI في سير عمل ERP/CRM الحالي.' }
        ],
        benchmarks: [],
        techStack: ['Python', 'PyTorch', 'TensorFlow'],
        businessValue: 'تحديد فرص السوق والمخاطر التشغيلية قبل وقوعها.'
    },
    {
        id: 'blockchain',
        name: 'معمارية السجلات الخاصة',
        tagline: 'ثقة مدمجة في صلب الكود البرمجي.',
        description: 'أنظمة تدقيق شفافة وغير قابلة للتلاعب للمعاملات عالية الأهمية.',
        longDescription: 'البلوكشين هو أداة التدقيق النهائية. نحن نبني أنظمة سجلات خاصة وعالية السرعة تجعل من المستحيل تزيير السجلات، مما يضمن الشفافية المطلقة في سلاسل التوريد والتمويل والوثائق القانونية.',
        category: 'Blockchain',
        imageUrl: MEDIA_ASSETS.sovereignSecurityVault,
        features: ['مسارات تدقيق', 'عقود ذكية', 'تشفير المستندات', 'تحقق متعدد العقد'],
        domains: [{ name: 'الثقة', description: 'نزاهة قابلة للتحقق.' }, { name: 'المالية', description: 'معاملات مقاومة للاحتيال.' }, { name: 'التدقيق', description: 'شفافية مؤتمتة.' }],
        pillars: [
          { title: 'عدم التغيير', description: 'السجلات التي لا يمكن تغييرها بمجرد التحقق منها.' },
          { title: 'الأمان اللامركزي', description: 'إلغاء نقاط الفشل الواحدة في تخزين البيانات.' },
          { title: 'كفاءة العمليات', description: 'إزالة الوسطاء من خلال عقود ذكية ذاتية التنفيذ.' },
          { title: 'المنطق القابل للتدقيق', description: 'تاريخ كامل لكل معاملة وحالة للنظام.' }
        ],
        roadmap: [
          { label: 'اختيار البروتوكول', duration: 'أسبوع ١-٢', detail: 'اختيار آلية الإجماع المناسبة لاحتياجات السرعة.' },
          { label: 'تصميم العقود الذكية', duration: 'أسبوع ٣-٥', detail: 'برمجة قواعد العمل مباشرة في السلسلة.' },
          { label: 'تدقيق الأمان', duration: 'أسبوع ٦-٧', detail: 'اختبار صارم لمنطق العقود بحثاً عن ثغرات.' },
          { label: 'إعداد العقد', duration: 'أسبوع ٨+', detail: 'النشر الكامل للشبكة والتكامل مع الأنظمة الحالية.' }
        ],
        benchmarks: [],
        techStack: ['Solidity', 'Rust', 'Hyperledger'],
        businessValue: 'تقليل تكاليف الاحتيال والتدقيق بنسبة ٧٠٪ من خلال الشفافية التقنية.'
    },
    {
        id: 'resilience',
        name: 'مرونة الأعمال والتعافي',
        tagline: 'النظام الذي يرفض الفشل.',
        description: 'هندسة متقدمة لضمان بقاء عملياتك تحت أي ظرف أو أزمة.',
        longDescription: 'التعافي من الكوارث أكثر من مجرد نسخ احتياطية. نحن نهندس أنظمة "مضادة للهشاشة" يمكنها كشف الأعطال لحظياً والانتقال إلى بنية تحتية بديلة دون أن يشعر المستخدمون، مما يحمي عملك من فشل العتاد والهجمات السيبرانية.',
        category: 'Security',
        imageUrl: MEDIA_ASSETS.sovereignSecurityVault,
        features: ['مزامنة لحظية', 'انتقال فوري', 'عمل أوفلاين', 'شبكة طاقة مكررة'],
        domains: [{ name: 'الاستمرارية', description: 'عمليات لا تتوقف أبداً.' }, { name: 'الأمان', description: 'حماية جوهر الشركة.' }, { name: 'المرونة', description: 'العودة بشكل أقوى.' }],
        pillars: [
          { title: 'صفر توقف', description: 'ضمان بقاء خدماتك الأساسية متصلة خلال أي حادث.' },
          { title: 'سلامة البيانات', description: 'حماية السجلات من الفساد خلال عمليات تبديل النظام.' },
          { title: 'التعافي السريع', description: 'استهداف أهداف زمن التعافي (RTOs) المقاسة بالثواني.' },
          { title: 'الانتقال العالمي', description: 'القدرة على نقل عملياتك عبر المناطق الجغرافية فوراً.' }
        ],
        roadmap: [
          { label: 'تقييم المخاطر', duration: 'أسبوع ١', detail: 'تحديد كافة نقاط الفشل في الإعداد الحالي.' },
          { label: 'مخطط التكرار', duration: 'أسبوع ٢-٣', detail: 'تصميم الأنظمة المرآتية وبروتوكولات المزامنة.' },
          { label: 'اختبار الجهد', duration: 'أسبوع ٤-٥', detail: 'محاكاة الكوارث لإثبات مرونة التصميم.' },
          { label: 'إعداد القيادة', duration: 'أسبوع ٦+', detail: 'لوحة مراقبة نهائية وتفعيل التعافي التلقائي.' }
        ],
        benchmarks: [],
        techStack: ['Veeam', 'HAProxy', 'Rsync'],
        businessValue: 'توقف عن القلق بشأن "ماذا لو" وركز على النمو بأمان مطلق.'
    },
    {
        id: 'iot',
        name: 'إنترنت الأشياء الصناعي وذكاء الحافة',
        tagline: 'اربط عالمك المادي بدماغك الرقمي.',
        description: 'تكامل العتاد والبرمجيات للمراقبة اللحظية للمصانع والمستودعات والأساطيل.',
        longDescription: 'يسد إنترنت الأشياء الصناعي الفجوة بين أصولك المادية ونظام ERP الخاص بك. نحن نركب حساسات وأجهزة حوسبة الحافة التي تراقب الآلات، وتتبع المركبات، وتدير استهلاك الطاقة، مما يغذي أنظمة اتخاذ القرار بالبيانات المباشرة.',
        category: 'Development',
        imageUrl: MEDIA_ASSETS.enterpriseInfrastructure,
        features: ['حساسات لحظية', 'صيانة تنبؤية', 'تتبع الأساطيل', 'مراقبة الطاقة'],
        domains: [{ name: 'التصنيع', description: 'أرضيات مصانع ذكية.' }, { name: 'اللوجستيات', description: 'وضوح كامل للأصول.' }, { name: 'الكفاءة', description: 'تقليل الهدر المادي.' }],
        pillars: [
          { title: 'معالجة الحافة', description: 'تحليل البيانات محلياً لضمان أوقات استجابة فورية.' },
          { title: 'وضوح الأصول', description: 'معرفة مكان كل شيء وكيفية أدائه على مدار الساعة.' },
          { title: 'العناية التنبؤية', description: 'إصلاح الآلات قبل تعطلها بناءً على بيانات الاهتزاز والحرارة.' },
          { title: 'تدفق البيانات الموحد', description: 'لوحة تحكم واحدة لمكتبك ومصنعك معاً.' }
        ],
        roadmap: [
          { label: 'تدقيق العتاد', duration: 'أسبوع ١-٢', detail: 'تقييم الآلات الحالية وإمكانيات الاتصال.' },
          { label: 'تكامل الحساسات', duration: 'أسبوع ٣-٦', detail: 'التركيب الفعلي وإعداد البروتوكولات (MQTT).' },
          { label: 'تهيئة الحافة', duration: 'أسبوع ٧-٩', detail: 'إعداد المعالجة المحلية لتقليل تأخر السحابة.' },
          { label: 'مزامنة النظام', duration: 'أسبوع ١٠+', detail: 'الاتصال النهائي بنظام ERP للتقارير المؤتمتة.' }
        ],
        benchmarks: [],
        techStack: ['MQTT', 'C++', 'Industrial PC'],
        businessValue: 'تقليل وقت توقف الآلات بنسبة ٤٠٪ وتحسين تكاليف الطاقة.'
    }
  ]
};

export const getServices = (lang: Language): Service[] => {
  return SERVICES_DATA[lang] && SERVICES_DATA[lang].length > 0 ? SERVICES_DATA[lang] : SERVICES_DATA.en;
};
