/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { Language, JournalArticle } from './types';

export const JOURNAL_ARTICLES: Record<Language, JournalArticle[]> = {
  en: [
    {
      id: 5,
      title: 'E-Commerce Platform for Online Businesses (Syria)',
      date: '',
      excerpt: 'A ready-to-launch automated sales platform tailored for Syrian businesses and Instagram sellers.',
      image: 'https://images.unsplash.com/photo-1665686310429-ee43624978fa?q=80&w=2070&auto=format&fit=crop',
      content: 'Developed a ready-to-launch e-commerce website tailored for Syrian online businesses, especially Instagram-based sellers seeking a more professional and automated sales process. The platform supports product management, automated order handling, and structured customer data, reducing manual work and improving order accuracy. AI tools were used to enhance and standardize product images for web presentation, helping businesses maintain a consistent and professional brand identity.'
    },
    {
      id: 6,
      title: 'Unified Clinical Operating System',
      date: '',
      excerpt: 'Comprehensive clinic management centralizing medical records, scheduling, and billing for multi-specialty practices.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
      content: 'Designed a comprehensive clinic management system suitable for medical clinics of all specialties. The platform centralizes patient management, appointment scheduling, medical records, procedures, billing, and reporting in a single, easy-to-use system. It supports detailed patient profiles, smart scheduling to avoid overlaps, procedure tracking with notes and images, flexible billing with partial or full payments, and real-time operational reports. The system includes multi-user role management for doctors, nurses, receptionists, and accountants, and is fully mobile-friendly, enabling clinics to reduce paperwork, minimize errors, and deliver a more professional patient experience.'
    },
    {
      id: 1,
      title: 'Goldsmith Management System',
      date: '',
      excerpt: 'Comprehensive Frappe-based ERP designed for jewelry workshops to manage daily transactions and business workflows.',
      image: 'https://images.unsplash.com/photo-1609619741907-dcc81add10f7?q=80&w=2072&auto=format&fit=crop',
      content: 'Designed and deployed a comprehensive Frappe-based ERP system for jewelry workshops to manage transactions, balances, daily operations, and business workflows. Implemented mobile-friendly interfaces, structured data handling, and system reliability features, contributing to improved operational efficiency and better decision-making.'
    },
    {
      id: 2,
      title: 'ERPNext Implementation – Cheese Manufacturing (Lebanon)',
      date: '',
      excerpt: 'Digitalizing operations for a major cheese producer in Lebanon, improving workflow efficiency and reliable system adoption.',
      image: 'https://images.unsplash.com/photo-1610037275499-00c6b17c8ddd?q=80&w=2070&auto=format&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1765446925577-59a34c05f778?q=80&w=2070&auto=format&fit=crop',
      content: 'Supported the transition from manual processes and Excel files to a structured CRM system for AVIS Erbil. Enhanced customer management, reservations handling, and reporting accuracy. Improved workflow efficiency and provided guidance to staff to ensure effective system utilization and continuity of operations.'
    }
  ],
  ar: [
    {
      id: 5,
      title: 'منصة التجارة الإلكترونية للأعمال السورية',
      date: '٢٠٢٤',
      excerpt: 'منصة مبيعات مؤتمتة وجاهزة للإطلاق، مخصصة للشركات السورية وبائعي منصة إنستغرام.',
      image: 'https://images.unsplash.com/photo-1665686310429-ee43624978fa?q=80&w=2070&auto=format&fit=crop',
      content: 'تم تطوير موقع تجارة إلكترونية متكامل مخصص للأعمال السورية الناشئة، خاصةً بائعي الإنستغرام الراغبين في أتمتة عمليات البيع بشكل احترافي. تدعم المنصة إدارة المنتجات، الطلبات المؤتمتة، وقواعد بيانات العملاء المنظمة، مما يقلل الجهد اليدوي ويرفع دقة العمليات. كما تم دمج أدوات الذكاء الاصطناعي لتحسين صور المنتجات وضمان هوية بصرية متسقة.'
    },
    {
      id: 6,
      title: 'نظام التشغيل العيادي الموحد',
      date: '٢٠٢٤',
      excerpt: 'إدارة شاملة للعيادات تدمج السجلات الطبية والجدولة والفوترة للمراكز متعددة التخصصات.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
      content: 'تصميم نظام متكامل لإدارة العيادات الطبية بمختلف تخصصاتها. يرتكز النظام على مركزية إدارة المرضى، جدولة المواعيد الذكية، السجلات الطبية الإلكترونية، والفوترة، كل ذلك في منصة واحدة سهلة الاستخدام. يدعم النظام ملفات المرضى المفصلة وتتبع الإجراءات الطبية بالصور والملاحظات، مع نظام تقارير تشغيلية لحظية. النظام متوافق تماماً مع الهواتف المحمولة لتقليل المعاملات الورقية ورفع كفاءة التجربة العلاجية.'
    },
    {
      id: 1,
      title: 'نظام إدارة ورش صياغة الذهب',
      date: '٢٠٢٤',
      excerpt: 'نظام ERP شامل مبني على إطار عمل Frappe لإدارة المعاملات اليومية وسير العمل في ورش المجوهرات.',
      image: 'https://images.unsplash.com/photo-1609619741907-dcc81add10f7?q=80&w=2072&auto=format&fit=crop',
      content: 'تصميم ونشر نظام ERP متكامل لورش الصياغة لضبط الأرصدة، المعاملات، والعمليات التشغيلية اليومية. تم التركيز على واجهات سهلة الاستخدام متوافقة مع الموبايل وهيكلية بيانات منظمة تضمن موثوقية عالية للأنظمة، مما ساهم في تحسين الكفاءة التشغيلية بنسبة كبيرة واتخاذ قرارات مبنية على بيانات دقيقة.'
    },
    {
      id: 2,
      title: 'تنفيذ ERPNext – صناعة الأجبان (لبنان)',
      date: '٢٠٢٤',
      excerpt: 'رقمنة العمليات لمنتج رئيسي للأجبان في لبنان، لتحسين كفاءة سير العمل واعتماد نظام تقني موثوق.',
      image: 'https://images.unsplash.com/photo-1610037275499-00c6b17c8ddd?q=80&w=2070&auto=format&fit=crop',
      content: 'تنفيذ وتخصيص نظام ERPNext لشركة رائدة في صناعة الأجبان في لبنان. تضمن المشروع رقمنة كافة العمليات، تهيئة الوحدات الرئيسية، ترحيل البيانات التاريخية، وتدريب الكادر لضمان الانتقال السلس والمستدام نحو الإدارة الرقمية المتكاملة.'
    },
    {
      id: 3,
      title: 'التحقق من الشهادات عبر البلوكشين',
      date: '٢٠٢٤',
      excerpt: 'تطوير نظام تحقق قائم على شبكة إيثيريوم خاصة باستخدام عقود Solidity الذكية ومسح كود QR.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000',
      content: 'تطوير نظام تحقق متطور يعتمد على تقنيات البلوكشين عبر شبكة إيثيريوم خاصة. تم بناء عقود ذكية بلغة Solidity وواجهة ويب تمكن المؤسسات والطلاب من التحقق من صحة الشهادات العلمية عبر مسح كود QR آمن، مما يمنع التزوير ويعزز الموثوقية الأكاديمية.'
    },
    {
      id: 4,
      title: 'نظام CRM لشركة AVIS لتأجير السيارات (أربيل)',
      date: '٢٠٢٤',
      excerpt: 'تحويل العمليات اليدوية إلى نظام CRM منظم لفرع AVIS أربيل، مما عزز دقة التقارير التشغيلية.',
      image: 'https://images.unsplash.com/photo-1765446925577-59a34c05f778?q=80&w=2070&auto=format&fit=crop',
      content: 'دعم التحول الرقمي الكامل من العمليات اليدوية وجداول Excel إلى نظام CRM متكامل لشركة AVIS في أربيل. ساهم المشروع في تحسين إدارة العملاء والطلبات ورفع دقة التقارير التحليلية، مما ضمن استمرارية الأعمال بكفاءة عالية تحت ضغوط التشغيل المرتفعة.'
    }
  ],
  ku: [
    {
      id: 5,
      title: 'Platforma E-Bazirganiyê ji bo Karsaziyên Sûriyê',
      date: '',
      excerpt: 'Platformek firotanê ya otomatîk ji bo karsaziyên Sûriyê û firoşkarên Instagramê.',
      image: 'https://images.unsplash.com/photo-1665686310429-ee43624978fa?q=80&w=2070&auto=format&fit=crop',
      content: 'Me malperek e-bazirganiyê ya amade ji bo karsaziyên serhêl ên Sûriyê ava kir, bi taybetî ji bo firoşkarên Instagramê yên ku li pêvajoyek firotanê ya profesyoneltir û otomatîktir digerin. Platform rêveberiya hilberan, birêvebirina fermanan a otomatîk û daneyên mişteriyan ên birêkxistî pêşkêş dike.'
    },
    {
      id: 6,
      title: 'Pergala Operasyona Klînîkî ya Yekbûyî',
      date: '',
      excerpt: 'Rêvebiriya klînîkî ya berfireh ku tomarên bijîjkî, bernamekirin û faturekirinê navendî dike.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
      content: 'Pergalek rêveberiya klînîkî ya berfireh ku ji bo klînîkên bijîjkî yên hemî taybetmendiyan guncan e hatî sêwirandin. Platform rêveberiya nexweşan, bernamekirina randevûyan, tomarên bijîjkî, pêvajoyan, faturekirin û raporkirinê di pergalek yekane de navendî dike. Pergal bi tevahî mobîl-dostane ye.'
    },
    {
      id: 1,
      title: 'Pergala Rêveberiya Zêrkeran',
      date: '',
      excerpt: 'ERP li ser bingeha Frappe ji bo kargehên zêrgeran hatiye sêwirandin da ku karên rojane birêve bibin.',
      image: 'https://images.unsplash.com/photo-1609619741907-dcc81add10f7?q=80&w=2072&auto=format&fit=crop',
      content: 'Sêwirandin û bicihkirina pergala ERP li ser bingeha Frappe ji bo kargehên zêrgeran da ku danûstandin, bîlanço, operasyonên rojane û herikîna kar birêve bibin. Navberên guncan ji bo mobîlê hatine çêkirin.'
    },
    {
      id: 2,
      title: 'Cîbicîkirina ERPNext – Hilberîna Penîr (Libnan)',
      date: '',
      excerpt: 'Dîjîtalîzekirina operasyonan ji bo hilberînerê penîr li Libnanê û baştirkirina karîgeriya herikîna kar.',
      image: 'https://images.unsplash.com/photo-1610037275499-00c6b17c8ddd?q=80&w=2070&auto=format&fit=crop',
      content: 'Me ERPNext ji bo kompanyayeke hilberîna penîr li Libnanê cîbicî kir û xwerû kir, ku operasyonan dîجîtal dike û karîgeriya herikîna kar baştir dike. Perwerdekirina karmendan ji bo bikaranîna pergalê hat encamdan.'
    },
    {
      id: 3,
      title: 'Verastkirina Dîplomayan bi Blockchain',
      date: '',
      excerpt: 'Pêşxistina pergala verastkirinê ya li ser bingeha blockchain bi karanîna tora Ethereum.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000',
      content: 'Me pergalek verastkirinê ya li ser bingeha blockchain bi karanîna tora taybet a Ethereum pêş xist. Peymanên biaqil ên Solidity hatine bikaranîn da ku pêşî li sextekariya belgeyan were girtin û bawerî were zêdekirin.'
    },
    {
      id: 4,
      title: 'Veguherîna CRM ya AVIS Hewlêr',
      date: '',
      excerpt: 'Veguherîna ji pêvajoyên manuwel bo pergala CRM ji bo AVIS li Hewlêrê.',
      image: 'https://images.unsplash.com/photo-1765446925577-59a34c05f778?q=80&w=2070&auto=format&fit=crop',
      content: 'Piştgirîkirina veguherîna ji Excel bo pergala CRM ya birêkxistî ji bo AVIS Hewlêr. Baştirkirina rêveberiya mişteriyan, rezervasyon û daxuyaniyên raporan. Karîgeriya herikîna kar hatiye zêdekirin.'
    }
  ]
};
