
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
    },
    {
      id: 'cloud',
      name: 'Sovereign Cloud Infrastructure',
      tagline: 'Absolute control over your data territory.',
      description: 'High-performance private and hybrid cloud setups designed for regional data residency.',
      longDescription: 'Generic cloud solutions put your data in hands you don’t control. Our Sovereign Cloud infrastructure provides the same performance as global providers but on your territory, under your laws, and protected by your encryption keys.',
      category: 'Cloud',
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
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
      imageUrl: 'https://images.unsplash.com/photo-1660165458059-57cfb6cc87e5?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
      imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000',
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
      imageUrl: 'https://images.unsplash.com/photo-1580090918915-b2678c8a3d5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
      imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
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
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
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
    },
    {
        id: 'cloud',
        name: 'البنية التحتية السحابية السيادية',
        tagline: 'سيطرة مطلقة على إقليمك الرقمي.',
        description: 'إعدادات سحابية خاصة وهجينة عالية الأداء مصممة لضمان إقامة البيانات محلياً.',
        longDescription: 'توفر بنيتنا التحتية السحابية السيادية نفس أداء المزودين العالميين ولكن على أرضك، وتحت قوانينك، ومحمية بمفاتيح التشفير الخاصة بك فقط.',
        category: 'Cloud',
        imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
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
        imageUrl: 'https://images.unsplash.com/photo-1660165458059-57cfb6cc87e5?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
        imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000',
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
        imageUrl: 'https://images.unsplash.com/photo-1580090918915-b2678c8a3d5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
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
          { title: 'Lihevhatina Yasayî', description: 'Kontrolên navxweyî yn ji bo standardên herêmî û navneteweyî.' },
          { title: 'Mîmariya Mezinbûyî', description: 'Pergalên ku bi tevliheviya karsaziya we re mezin bovin.' }
        ],
        roadmap: [
          { label: 'Audita Tespîtê', duration: 'Hefte 1-2', detail: 'Nexşekirina hemî pêvajoyên karsaziye û tespîtkirina kêşeyan.' },
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
        longDescription: 'Ecommerce ji malperekê zêdetir e; ew motorek firotanê ye. Berhemên we bi mişteriyên li her derê cîhanê ve girê dide, dravdana wan bi ewlehî pêk tîne, û ji we re dibe alîkar ku hûn barkirinê bêyî pirsgirêkên şopandina manuwel birêve bînin.',
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
    },
    {
      id: 'uiux',
      name: 'Mîmariya Dîjîtal (UI/UX)',
      tagline: 'Bikaranîna nermalavê hêsan û xweşik bikin.',
      description: 'Sêwirana stratejîk ku bikarhêneran ber bi çalakiya rast ve dibe.',
      longDescription: 'UI/UX ferqa di navbera amûrek acizker û ya ku karanîna wê kêf e de ye. Em "xuyang" (UI) û "hest" (UX) sêwirandin dikin da ku bikarhênerên we qet tevlihev nebin û her dem tiştê ku lê digerin zû bibînin.',
      category: 'Design',
      imageUrl: 'https://images.unsplash.com/photo-1576595580361-90a855b84b20?q=80&w=1974&auto=format&fit=crop',
      features: ['Lêkolîn û Testkirina Bikarhêneran', 'Sêwirana Nasnameya Dîtbarî', 'Prototîpên Înteraktîf', 'Belgekirina Pergalê'],
      domains: [{ name: 'Nasname', description: 'Hebûna dîjîtal a premium.' }, { name: 'Hilber', description: 'Karanîna nermalavê.' }],
      pillars: [
        { title: 'Zelaliya Nasînê', description: 'Sêwiranên hêsan ku ji bo têgihîştinê pêdivî bi perwerdehiyê tune.' },
        { title: 'Daxwaza Marqeyê', description: 'Sêwirana ku bi bikarhêneran re pewendiyên hestyarî ava dike.' },
        { title: 'Pêşî Gihîştin', description: 'Garantîkirina ku hilbera we ji bo her kesî dixebite.' },
        { title: 'Dubarekirina Berdewam', description: 'Bikaranîna daneyan ji bo baştirkirina ezmûnê.' }
      ],
      roadmap: [
        { label: 'Qonaxa Vedîtinê', duration: 'Hefte 1', detail: 'Diyarkirina kesayetên bikarhêneran û armancan.' },
        { label: 'Nexşeyên Wireframe', duration: 'Hefte 2-3', detail: 'Avakirina îskeletê serîlêdanê.' },
        { label: 'Sêwirana Dîtbarî', duration: 'Hefte 4-5', detail: 'Sêwirana reng, tîp û estetîka marqeyê.' },
        { label: 'Radestkirina Sêwiranê', duration: 'Hefte 6', detail: 'Amûrên dawî û belgekirina pergalê.' }
      ],
      benchmarks: [],
      techStack: ['Figma', 'Adobe Creative Suite'],
      businessValue: 'Kêmkirina bangên piştgiriyê bi hêsankirina nermalavê.'
    },
    {
      id: 'seo',
      name: 'Nîşana Dîjîtal (SEO)',
      tagline: 'Bibin tiştê yekem ku mirov li ser Google dibînin.',
      description: 'Karê teknîkî û naverokê da ku marqeya we di serê lêgerînê de cih bigire.',
      longDescription: 'SEO mîna wê ye ku dikana we li ser kolana herî qerebalix a cîhanê be. Em koda malpera we û naveroka we optimîze dikin da ku gava mirov li karê we digerin, navê we pêşî derkeve. Ev riya herî baş e ji bo trafîka belaş.',
      category: 'Consulting',
      imageUrl: 'https://images.unsplash.com/photo-1709281847802-9aef10b6d4bf?q=80&w=1932&auto=format&fit=crop',
      features: ['Stratejiya Naverokê', 'Optimîzasyona Leza Teknîkî', 'Backlink Building', 'Serweriya Lêgerîna Herêmî'],
      domains: [{ name: 'Mezinbûn', description: 'Zêdekirina gihîştina organî.' }, { name: 'Teknîkî', description: 'Core web vitals.' }],
      pillars: [
        { title: 'Desthilatdariya Dîjîtal', description: 'Malpera we di pîşesaziya we de bibe rêberek pêbawer.' },
        { title: 'Hêza Demdirêj', description: 'Trafîka ku dimîne gava reklam disekinin.' },
        { title: 'Ranking Stratejîk', description: 'Targetkirina peyvên ku bi rastî dibin sedema firotanê.' },
        { title: 'Naveroka Semantîk', description: 'Optimîzekirina li gorî mebesta lêgerînê.' }
      ],
      roadmap: [
        { label: 'Audîta Teknîkî', duration: 'Hefte 1', detail: 'Fixkirina kêşeyên ku malperê hêdî dikin.' },
        { label: 'Lêkolîna Peyvên Sereke', duration: 'Hefte 2', detail: 'Diyarkirina peyvên herî biha.' },
        { label: 'Cîbicîkirina li ser Rûpelê', duration: 'Hefte 3-4', detail: 'Optimîzekirina sernav û naverokan.' },
        { label: 'Şopandina Mezinbûnê', duration: 'Berdewam', detail: 'Raporkirina mehane û nûvekirina stratejiyê.' }
      ],
      benchmarks: [],
      techStack: ['Semrush', 'Search Console'],
      businessValue: 'Bi wergirtina trafîka organî li şûna reklaman, bi hezaran dolar qezenc bikin.'
    },
    {
      id: 'cyber',
      name: 'Kela Dîjîtal (Sîber)',
      tagline: 'Daneyên xwe ji hakeran biparêzin.',
      description: 'Ewlehiya nûjen ji bo parastina raz û dravê pargîdaniya we.',
      longDescription: 'Ewlehiya sîber dîwarê li dora karsaziya weya dîjîtal e. Em pergalên ku çavdêriya "dagirkeran" dikin û daneyên weyên hesas şîfre dikin ava dikin. Ev garantî dike ku agahiyên weyên taybet her dem parastî bimînin.',
      category: 'Security',
      imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
      features: ['Çavdêriya Tehdîtan', 'Şîfrekirina Daneyan', 'Zero-Trust Architecture', 'Bersivdana Bûyeran'],
      domains: [{ name: 'Parastin', description: 'Parastina proaktîf.' }, { name: 'Taybetmendî', description: 'Parastina daneyan.' }],
      pillars: [
        { title: 'Parastina Berî Tehdîtê', description: 'Rawestandina êrîşên sîber berî ku bikevin tora we.' },
        { title: 'Berxwedana Karsaziyê', description: 'Garantîkirina operasyonan di dema bûyeran de.' },
        { title: 'Serweriya Daneyan', description: 'Kontrola tam li ser cih û awayê tomarkirina daneyan.' },
        { title: 'Hişmendiya Ewlehiyê', description: 'Perwerdekirina karmendan wekî xeta parastinê.' }
      ],
      roadmap: [
        { label: 'Vulnerability Scan', duration: 'Hefte 1', detail: 'Testkirina her dergehek dîjîtal ji bo lawaziyan.' },
        { label: 'Fortification-a Torê', duration: 'Hefte 2-3', detail: 'Sazkirina firewall û şîfrekirina pêşketî.' },
        { label: 'Kontrolên Gihîştinê', duration: 'Hefte 4', detail: 'Cîbicîkirina multi-factor auth û destûran.' },
        { label: 'Radestkirina Ewlehiyê', duration: 'Hefte 5+', detail: 'Perwerdehiya dawî û sazkirina çavdêriyê.' }
      ],
      benchmarks: [],
      techStack: ['IDS/IPS', 'AES-256'],
      businessValue: 'Ji dozên mezin û zirara marqeyê ji ber leakbûna daneyan dûr bikevin.'
    },
    {
      id: 'api',
      name: 'Pira Nermalavê (API)',
      tagline: 'Bila sepanên we bi hev re bipeyivin.',
      description: 'Nermalavên cihêreng bi hev ve girêdin da ku daneyan bixweber biherikin.',
      longDescription: 'API mîna pirên di navbera giravên nermalavê de ne. Ger ERP û malperek we hebe, em pirê ava dikin da ku gava kesek hilberek bikire, asta stoka we bixweber nûve bibe. Êdî kopîkirina manuwel tune.',
      category: 'Development',
      imageUrl: 'https://images.unsplash.com/photo-1763568258208-a5af30d5a31b?q=80&w=2070&auto=format&fit=crop',
      features: ['Hefdengkirina Rastî', 'Gateway-ên Performansa-Bilind', 'Veguhestina Daneyên Şîfrekirî'],
      domains: [{ name: 'Girêdan', description: 'Rakirina synca manuwel.' }, { name: 'Otomasyon', description: 'Herikîna bêkêmasî.' }],
      pillars: [
        { title: 'Otomasyona Tevahî', description: 'Pergalên ku bêyî destwerdana mirovî hev nûve dikin.' },
        { title: 'Integrîtiya Daneyan', description: 'Garantîkirina ku agahî di hemî sepanan de wekhev bimînin.' },
        { title: 'Berfirehbûn', description: 'Girêdana hêsan a nermalavên nû gava karsazî mezin dibe.' },
        { title: 'Ewlehiya Endpoint', description: 'Parastina dergehên ku nermalav lê diaxivin.' }
      ],
      roadmap: [
        { label: 'Nexşekirina Daneyan', duration: 'Hefte 1', detail: 'Diyarkirina kîjan dane divê biçin kîjan derê.' },
        { label: 'Pêşxistina Mantiqê', duration: 'Hefte 2-4', detail: 'Avakirina qaîdeyên veguhertin û synca taybet.' },
        { label: 'Testkirina Stresê', duration: 'Hefte 5', detail: 'Garantîkirina pira piralî di bin trafîka zêde de.' },
        { label: 'Girêdana Zindî', duration: 'Hefte 6+', detail: 'Vekirina pira otomatîk ji bo hilberînê.' }
      ],
      benchmarks: [],
      techStack: ['Go', 'gRPC'],
      businessValue: '90% ji xebata daxuyaniya daneyan a manuwel ji holê rakin.'
    },
    {
      id: 'infra-audit',
      name: 'Bijîşkê Pergalê (Audît)',
      tagline: 'Ma teknolojiya we saxlem e an tenê biha ye?',
      description: 'Kontrolek ji bo sazkirina IT-ya we da ku hûn windahî û rîskan bibînin.',
      longDescription: 'Mîna muayeneya fîzîkî, audîta pergalê li pirsgirêkên veşartî digere. Em server û nermalava we kontrol dikin da ku bibînin ka çi hêdî ye, çi ne ewle ye, û hûn ji bo çi pere didin lê bikar nayînin.',
      category: 'Consulting',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000',
      features: ['Analîza Cost-Benefit', 'Check-ên Ewlehiyê', 'Testên Performansê', 'Nirxandina Çavkaniyên IT'],
      domains: [{ name: 'Kêrhatinî', description: 'Optimîzekirina çavkaniyên IT.' }, { name: 'Budçe', description: 'Kêmkirina mesrefan.' }],
      pillars: [
        { title: 'Optimîzasyona Lean', description: 'Bidestxistina performansa herî zêde bi windahiya herî kêm.' },
        { title: 'Vedîtina Rîskên Veşartî', description: 'Dîtina gefan berî ku bibin krîzên biha.' },
        { title: 'Stratejiya Fînanse', description: 'Veguherandina IT-yê bo ajokerek nirxê.' },
        { title: 'Kontrola Serwer', description: 'Rakirina girêdayîbûna bi firoşkarên biha yên nehewce.' }
      ],
      roadmap: [
        { label: 'Înventara Pergalan', duration: 'Hefte 1', detail: 'Katalogkirina her server, lîsans û koda we.' },
        { label: 'Qonaxa Analîzê', duration: 'Hefte 2', detail: 'Testên performansê û nirxandina mesrefên IT.' },
        { label: 'Reçeteya Stratejîk', duration: 'Hefte 3', detail: 'Lîsteya kitekit a çareseriyên krîtîk û teserûfê.' },
        { label: 'Piştgiriya Cîbicîkirinê', duration: 'Berdewam', detail: 'Rêberiya tîmê we di pêvajoya paqijkirinê de.' }
      ],
      benchmarks: [],
      techStack: ['Infrastructure as Code'],
      businessValue: 'Bi gelemperî 20% teserûfê di fatûreyên IT-yê de peyda dike.'
    },
    {
        id: 'cloud',
        name: 'Binesaziya Ewr a Serwer',
        tagline: 'Kontrola mutleq li ser herêma we.',
        description: 'Sazkirinên ewr ên taybet û hîbrîd ên performansa-bilind ku ji bo residenciya daneyên herêmî hatine sêwirandin.',
        longDescription: 'Çareseriyên ewr ên giştî daneyên we dixin destên ku hûn kontrol nakin. Binesaziya me ya Ewr a Serwer heman performansê pêşkêşî we dike, lê li ser axa we û di bin kontrola we de.',
        category: 'Cloud',
        imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
        features: ['Clusterên Taybet', 'Mîmariya Hîbrîd', 'Mezinbûna Otomatîk', 'Hardware-a Herêmî'],
        domains: [{ name: 'Binesazî', description: 'Îstîqrara herî bilind.' }, { name: 'Ewlehî', description: 'Taybetmendiya mutleq.' }, { name: 'Performans', description: 'Leza global.' }],
        pillars: [
            { title: 'Residenciya Daneyan', description: 'Garantîkirina ku daneyên we sînorên herêmî dernakevin.' },
            { title: 'Berxwedana Elastîk', description: 'Çavkaniyên ku di dema barê giran de tavilê mezin dibin.' },
            { title: 'Berdewamiya Şîfrekirî', description: 'Çend qatên şîfrekirina hardware û software.' },
            { title: 'Kontrola Open-Stack', description: 'Dûrketina ji girtîbûna firoşkaran bi standardên vekirî.' }
        ],
        roadmap: [
            { label: 'Analîza Barê', duration: 'Hefte 1', detail: 'Pîvandina hewcedariyên compute û storage yên niha.' },
            { label: 'Sêwirana Mîmarî', duration: 'Hefte 2-3', detail: 'Nexşeya ewr a hîbrîd an taybet.' },
            { label: 'Qonaxa Deployment', duration: 'Hefte 4-8', detail: 'Peydakirina hardware û konfîgurasyona clustera.' },
            { label: 'Veguhastin (Migration)', duration: 'Hefte 9+', detail: 'Barkirina karên we bo hawîrdora nû ya serwer.' }
        ],
        benchmarks: [],
        techStack: ['Kubernetes', 'Terraform', 'OpenStack'],
        businessValue: 'Rîskên yasayî û destwerdana biyanî di daneyên we de ji holê rakin.'
    },
    {
        id: 'ai',
        name: 'Pergalên Zîrekiya Neural',
        tagline: 'Pêşeroja karsaziya xwe pêşbînî bikin.',
        description: 'Modelên AI-yê yên taybet ku piranîya biryarên tevlihev otomatîk dikin.',
        longDescription: 'Pergalên me yên Zîrekiya Neural ji otomasyona hêsan derbas dibin. Em modelên AI-yê yên xwerû ava dikin ku li ser binesaziya we dimînin, serweriya daneyan garantî dikin.',
        category: 'AI',
        imageUrl: 'https://images.unsplash.com/photo-1660165458059-57cfb6cc87e5?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        features: ['Pêşbîniya Daxwazê', 'Lead Qualification-a Otomatîk', 'AI Hosting li ser Erdê', 'NLP Document Processing'],
        domains: [{ name: 'Strategî', description: 'Biryardana bi daneyan.' }, { name: 'Otomasyon', description: 'Kêmkirina barê hişî.' }, { name: 'Zîrekî', description: 'Pêşdîtina bazarê.' }],
        pillars: [
            { title: 'AI-ya Serwer', description: 'Modelên ku li ser daneyên we hatine perwerdekirin.' },
            { title: 'Naskirina Anmatan', description: 'Vedîtina kêrhatiyên veşartî di daneyan de.' },
            { title: 'Rastiya Etîk', description: 'Modelên AI-yê yên şirovebar ku mantiqê eşkere dikin.' },
            { title: 'Hyper-Personalization', description: 'Sêwirana tecrubeyên mişterî bi awayekî mezin.' }
        ],
        roadmap: [
            { label: 'Analîza Daneyan', duration: 'Hefte 1-2', detail: 'Nirxandina kalîte û hejmara daneyên perwerdehiyê.' },
            { label: 'Mîmariya Modelê', duration: 'Hefte 3-5', detail: 'Sêwirandina tora neural ji bo rewşa we.' },
            { label: 'Perwerdekirin & Başkirin', duration: 'Hefte 6-10', detail: 'Testkirina rastiya modelê û perwerdekirina dubare.' },
            { label: 'Integrasyon', duration: 'Hefte 11+', detail: 'Bicihkirina modela AI di nav herikîna ERP/CRM de.' }
        ],
        benchmarks: [],
        techStack: ['Python', 'PyTorch', 'TensorFlow'],
        businessValue: 'Fersendên bazarê û rîskên operasyonel berî ku pêş bikevin nas bikin.'
    },
    {
        id: 'blockchain',
        name: 'Mîmariya Ledger a Taybet',
        tagline: 'Baweriya di hundurê kodê de.',
        description: 'Pergalên audîtê yên zelal û neguherbar ji bo danûstandinên giring.',
        longDescription: 'Blockchain amûra audîtê ya herî dawî ye. Em pergalên ledger ên taybet û bilez ava dikin ku çêkirina tomarên sexte ne gengaz dike, û zelaliya mutleq di zincîrên dabînkirinê de peyda dike.',
        category: 'Blockchain',
        imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000',
        features: ['Trailên Audîtê yên Neguherbar', 'Smart Contracts', 'Multi-Node Verification', 'Encrypted Document Hashing'],
        domains: [{ name: 'Bawerî', description: 'Yekparebûna verastkirî.' }, { name: 'Fînans', description: 'Danûstandinên ewle.' }, { name: 'Audît', description: 'Zelaliya otomatîk.' }],
        pillars: [
            { title: 'Neguherbarî', description: 'Tomarên ku piştî verastkirinê nayên guhertin.' },
            { title: 'Ewlehiya Nenavendî', description: 'Rakirina xalên têkçûnê yên yekane di hilanînê de.' },
            { title: 'Kêrhatina Pêvajoyê', description: 'Rakirina navbeynkaran bi peymanên biaqil.' },
            { title: 'Mantiqê Audîtbar', description: 'Dîroka tevahî ya her danûstandin û rewşa pergalê.' }
        ],
        roadmap: [
            { label: 'Hilbijartina Protokolê', duration: 'Hefte 1-2', detail: 'Hilbijartina mekanîzmaya consensus a guncan.' },
            { label: 'Sêwirana Smart Contract', duration: 'Hefte 3-5', detail: 'Bernamekirina qaîdeyên karsaziyê di hundurê zincîrê de.' },
            { label: 'Audîta Ewlehiyê', duration: 'Hefte 6-7', detail: 'Testkirina tund a mantiqê peymanan ji bo lawaziyan.' },
            { label: 'Sazkirina Node', duration: 'Hefte 8+', detail: 'Deploymenta tevahî ya torê û integrasyona pergalê.' }
        ],
        benchmarks: [],
        techStack: ['Solidity', 'Go', 'Rust'],
        businessValue: 'Mesrefên sextekarî û audîtê bi saya zelaliya teknîkî %70 kêm bikin.'
    },
    {
        id: 'resilience',
        name: 'Berxwedana Karsaziyê & Recovery',
        tagline: 'Pergala ku red dike ku têk biçe.',
        description: 'Endezyariya pêşkeftî ji bo operasyonên saxlem di her krîza fîzîkî an dîjîtal de.',
        longDescription: 'Recovery-a ji felaketan ji yedekgirtinê zêdetir e. Em pergalên "Anti-Fragile" endezyar dikin ku dikarin têkçûnan di cih de tespît bikin û bêyî ku bikarhêner pê bihesin derbasî binesaziya yedek bibin.',
        category: 'Security',
        imageUrl: 'https://images.unsplash.com/photo-1580090918915-b2678c8a3d5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        features: ['Replîkasyona Daneyan a Rastî', 'Failover-a Otomatîk', 'Mode-ên Operasyona Offline', 'Redundant Power Mesh'],
        domains: [{ name: 'Berdewamî', description: 'Operasyonên bê rawest.' }, { name: 'Ewlehî', description: 'Parastina bingeha pargîdaniyê.' }, { name: 'Berxwedan', description: 'Vegera bi hêztir.' }],
        pillars: [
            { title: 'Zero Downtime', description: 'Xizmetên weyên sereke di her bûyerê de serhêl dimînin.' },
            { title: 'Integrîtiya Daneyan', description: 'Parastina tomaran ji gendeliyê di dema guhertinê de.' },
            { title: 'Recovery-a Bilez', description: 'Targetkirina demên vegerê yên di nav çirkeyan de.' },
            { title: 'Global Failover', description: 'Şiyana barkirina operasyonan bo herêmên din tavilê.' }
        ],
        roadmap: [
            { label: 'Nirxandina Rîskê', duration: 'Hefte 1', detail: 'Tespîtkirina hemî xalên têkçûnê yên di sazkirina niha de.' },
            { label: 'Blueprint-a Redundans', duration: 'Hefte 2-3', detail: 'Sêwirana pergalên neynik û protokolên synca.' },
            { label: 'Testkirina Stresê', duration: 'Hefte 4-5', detail: 'Simulasîyona felaketan ji bo îsbatkirina berxwedanê.' },
            { label: 'Sazkirina Fermandariyê', duration: 'Hefte 6+', detail: 'Dashboarda çavdêriyê û aktîvkirina recovery-a otomatîk.' }
        ],
        benchmarks: [],
        techStack: ['Veeam', 'Zerto', 'HAProxy'],
        businessValue: 'Bi ewlehiya tam mezin bibin û xema "gelo çi bibe" ji holê rakin.'
    },
    {
        id: 'iot',
        name: 'IoT-a Pîşesazî & Edge Intelligence',
        tagline: 'Cîhana fîzîkî bi mejiyê dîjîtal ve girêbidin.',
        description: 'Hardware û software ji bo şopandina fabrîka, dikan û wesayîtan di wextê rast de.',
        longDescription: 'IoT-a Pîşesazî valahiya di navbera milkên fîzîkî û ERP-ya we de tije dike. Em sensoran sazi dikin ku makîneyan dişopînin, wesayîtan dişopînin û bikaranîna enerjiyê birêve dibin.',
        category: 'Development',
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
        features: ['Torên Sensoran yên Rastî', 'Lênêrîna Pêşbînîker', 'Şopandina Wesayîtan', 'Mîna Enerjiyê'],
        domains: [{ name: 'Hilberîn', description: 'Fabrîkayên biaqil.' }, { name: 'Lojîstîk', description: 'Vîzîbîlîteya tevahî ya milkan.' }, { name: 'Kêrhatinî', description: 'Kêmkirina windahiya fîzîkî.' }],
        pillars: [
            { title: 'Pêvajoya Edge', description: 'Analîzkirina daneyan di cih de ji bo bersiva bilez.' },
            { title: 'Vîzîbîlîteya Milkan', description: 'Zanîna her tiştî û performansa wan, 24/7.' },
            { title: 'Lênêrîna Pêşbînîker', description: 'Fixkirina makîneyan berî ku xera bibin bi daneyên germ û lerzê.' },
            { title: 'Herikîna Daneyan a Yekbûyî', description: 'Yek dashboard ji bo ofîs û fabrîkaya we.' }
        ],
        roadmap: [
            { label: 'Audîta Hardware', duration: 'Hefte 1-2', detail: 'Nirxandina makîneyên niha û potansiyela girêdanê.' },
            { label: 'Integrasyona Sensoran', duration: 'Hefte 3-6', detail: 'Sazkirina fîzîkî û sazkirina protokolan (MQTT).' },
            { label: 'Konfîgurasyona Edge', duration: 'Hefte 7-9', detail: 'Sazkirina pêvajoya herêmî ji bo kêmkirina derengiyê.' },
            { label: 'Synca Pergalê', duration: 'Hefte 10+', detail: 'Girêdana dawî ya bi ERP-ê re ji bo raporên otomatîk.' }
        ],
        benchmarks: [],
        techStack: ['MQTT', 'Industrial PC', 'C++', 'Grafana'],
        businessValue: 'Dema têkçûna makîneyan %40 kêm bikin û mesrefên enerjiyê optimîze bikin.'
    }
  ]
};

export const getServices = (lang: Language): Service[] => {
  return SERVICES_DATA[lang] && SERVICES_DATA[lang].length > 0 ? SERVICES_DATA[lang] : SERVICES_DATA.en;
};
