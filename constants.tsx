import { Map, Layers, Database, FileText, ShieldCheck, Cpu, Building2, Server, Network, Shield } from 'lucide-react';
import { NavItem, ServiceItem, StatItem, ClientCategory, ProjectItem } from './types';

// Content Dictionary
export const CONTENT = {
  he: {
    nav: {
      about: 'אודות',
      services: 'שירותים',
      projects: 'פרויקטים',
      clients: 'לקוחות',
      contact: 'צור קשר',
    },
    hero: {
      badge: 'AI-GIS Innovation',
      titleStart: 'העתיד של',
      titleEnd: 'המרחב העירוני',
      subtitle: 'GZI Systems מחברת בין בינה מלאכותית למידע גיאוגרפי. אנו בונים את המוח הדיגיטלי של הרשויות המובילות בישראל.',
      ctaPrimary: 'קבע פגישת ייעוץ',
      ctaSecondary: 'צפה בפרויקטים',
      widgets: {
        bigData: 'Big Data',
        gis: 'שכבות GIS',
        syncing: 'מסתנכרן...',
      }
    },
    about: {
      badge: 'מי אנחנו',
      title: 'יותר מייעוץ טכנולוגי.',
      titleHighlight: 'הארכיטקטים של העיר החכמה.',
      description1: 'בעולם שבו העיר הופכת למרחב דיגיטלי מורכב, רשויות מקומיות זקוקות למצפן ברור. GZI Systems מחברת בין העולם הפיזי לדיגיטלי, בין הנדסה אזרחית לטכנולוגיית ענן.',
      features: [
        { icon: Shield, title: 'ניסיון מוכח ונטול אינטרסים', desc: 'ליווי עשרות רשויות בישראל באובייקטיביות מלאה.' },
        { icon: Server, title: 'אינטגרציה מערכתית', desc: 'חיבור מערכות הנדסה, גבייה ותפעול לפלטפורמה אחת.' },
      ],
      imageWidgets: {
        opt: 'אופטימיזציה עירונית',
        realtime: 'ניתוח נתונים בזמן אמת',
        server: 'GIS Server Active'
      }
    },
    stats: [
      { value: '25+', label: 'שנות מצוינות' },
      { value: '50+', label: 'ערים חכמות' },
      { value: '∞', label: 'חדשנות ללא גבולות' },
    ],
    services: {
      badge: 'תחומי התמחות',
      title: 'טכנולוגיה בשירות העיר',
      subtitle: 'אנו מספקים מעטפת שירותים מלאה המשלבת ידע הנדסי, הבנה טכנולוגית עמוקה וניסיון עשיר בניהול פרויקטים לאומיים.',
      cta: 'קרא עוד',
      items: [
        {
          title: 'AI & GIS Intelligence',
          description: 'שילוב בינה מלאכותית במערכות מידע גיאוגרפיות. אנו הופכים מפות סטטיות למערכות קבלת החלטות חכמות.',
          icon: Map,
          features: ['ניתוח מרחבי מתקדם', 'Digital Twin', 'חיזוי עומסים ותשתיות']
        },
        {
          title: 'Smart City Strategy',
          description: 'בניית האסטרטגיה הדיגיטלית של העיר. מפת דרכים טכנולוגית המחברת בין התושב, העירייה והמרחב.',
          icon: Cpu,
          features: ['תוכניות אב למחשוב', 'IoT עירוני', 'מדיניות Open Data']
        },
        {
          title: 'Tenders & Procurement',
          description: 'ניהול מכרזים טכנולוגיים מורכבים. אנו כותבים את המפרטים שמגדירים את עתיד העיר.',
          icon: FileText,
          features: ['מכרזי ענן ו-SaaS', 'מיפוי פוטוגרמטרי', 'בקרת ספקים קפדנית']
        },
        {
          title: 'Data Architecture',
          description: 'תכנון ארכיטקטורת נתונים המאפשרת זרימת מידע חלקה בין אגפי העירייה השונים.',
          icon: Database,
          features: ['אינטגרציית API', 'Data Warehousing', 'אבטחת סייבר מוניציפלית']
        },
        {
          title: 'Urban Planning Tech',
          description: 'מערכות רישוי זמין ופיקוח על הבנייה. אוטומציה של תהליכים הנדסיים מורכבים.',
          icon: Building2,
          features: ['מערכות רישוי מקוון', 'ניהול ועדות', 'ניתוח תב"ע ממוחשב']
        },
        {
          title: 'QA & Validation',
          description: 'בקרת איכות לנתונים גיאוגרפיים. הבטחת אמינות המידע כבסיס לקבלת החלטות.',
          icon: ShieldCheck,
          features: ['טיוב נתונים', 'בקרת מדידות', 'תיקוף כתובות']
        }
      ]
    },
    projects: {
      badge: 'תיק עבודות',
      title: 'פרויקטים נבחרים',
      subtitle: 'מערכות שו"ב מתקדמות, מיפוי עירוני חכם ופתרונות ענן. הנה הצצה לעשייה שלנו בשטח.',
      ctaAll: 'לכל הפרויקטים',
      items: [
        {
          title: 'Digital Twin תל אביב',
          category: 'חדשנות אורבנית',
          description: 'מיפוי תלת-ממדי מלא של העיר לניהול תשתיות וסימולציות תכנון ובנייה בזמן אמת.',
          image: 'https://images.unsplash.com/photo-1543965860-82ed7d542cc4?q=80&w=2060&auto=format&fit=crop',
          tags: ['3D Mapping', 'AI Analysis', 'Urban Planning']
        },
        {
          title: 'מערכת שו"ב מטרופולינית',
          category: 'שליטה ובקרה',
          description: 'הקמת מרכז שליטה אחוד המשלב נתוני תנועה, ביטחון ותפעול לפלטפורמה אחת חכמה.',
          image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
          tags: ['IoT', 'Big Data', 'Security']
        },
        {
          title: 'טרנספורמציית ענן ממשלתית',
          category: 'תשתיות IT',
          description: 'ליווי משרד ממשלתי במעבר תשתיות ה-GIS לסביבת ענן היברידית מאובטחת.',
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
          tags: ['Cloud Computing', 'Cyber Security', 'Migration']
        }
      ]
    },
    clients: {
      title: 'השותפים שלנו לדרך',
      subtitle: 'עובדים בגאווה עם הגופים המובילים במשק הישראלי',
      categories: [
        {
          name: 'ערים ורשויות',
          items: ['תל אביב-יפו', 'ראשון לציון', 'הרצליה', 'חולון', 'רעננה', 'נתניה']
        },
        {
          name: 'ממשל ותשתיות',
          items: ['משרד הפנים', 'רמ"י', 'נתיבי ישראל', 'משרד השיכון', 'מפ"י']
        }
      ],
      bannerTitle: 'מוכנים להצטרף למהפכה הדיגיטלית?',
      bannerText: 'הצטרפו לעשרות רשויות שכבר מנהלות את המחר, היום.',
      bannerCta: 'תיאום פגישת היכרות'
    },
    contact: {
      title: 'בואו נתכנן את העתיד.',
      subtitle: 'רוצים לשמוע איך המערכות שלנו יכולות לחסוך לכם משאבים ולשפר את השירות לתושב?',
      highlight: 'הקפה עלינו.',
      email: 'דואר אלקטרוני',
      phone: 'טלפון ישיר',
      address: 'מטה החברה',
      formTitle: 'תיאום פגישה / ייעוץ',
      labels: {
        name: 'שם מלא',
        org: 'ארגון / רשות',
        email: 'דואר אלקטרוני',
        message: 'נושא הפנייה',
        submit: 'שלח בקשה לתיאום'
      },
      placeholders: {
        name: 'ישראל ישראלי',
        org: 'שם הרשות',
        email: 'email@company.com',
        message: 'נשמח לשמוע על האתגרים שלכם...'
      }
    }
  },
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      projects: 'Projects',
      clients: 'Clients',
      contact: 'Contact',
    },
    hero: {
      badge: 'AI-GIS Innovation',
      titleStart: 'The Future of',
      titleEnd: 'Urban Space',
      subtitle: 'GZI Systems bridges Artificial Intelligence and Geographic Information. We build the digital brain of Israel\'s leading municipalities.',
      ctaPrimary: 'Book Consultation',
      ctaSecondary: 'View Projects',
      widgets: {
        bigData: 'Big Data',
        gis: 'GIS Layers',
        syncing: 'Syncing...',
      }
    },
    about: {
      badge: 'Who We Are',
      title: 'More Than Tech Consulting.',
      titleHighlight: 'We Are Smart City Architects.',
      description1: 'In a world where the city becomes a complex digital space, municipalities need a clear compass. GZI Systems connects the physical world to the digital, from civil engineering to cloud technology.',
      features: [
        { icon: Shield, title: 'Proven & Unbiased Experience', desc: 'Guiding dozens of authorities in Israel with full objectivity.' },
        { icon: Server, title: 'System Integration', desc: 'Connecting engineering, billing, and operations into one platform.' },
      ],
      imageWidgets: {
        opt: 'Urban Optimization',
        realtime: 'Real-time Analysis',
        server: 'GIS Server Active'
      }
    },
    stats: [
      { value: '25+', label: 'Years of Excellence' },
      { value: '50+', label: 'Smart Cities' },
      { value: '∞', label: 'Limitless Innovation' },
    ],
    services: {
      badge: 'Expertise',
      title: 'Technology Serving the City',
      subtitle: 'We provide a full service envelope combining engineering knowledge, deep tech understanding, and rich experience in national projects.',
      cta: 'Read More',
      items: [
        {
          title: 'AI & GIS Intelligence',
          description: 'Integrating AI into GIS systems. We turn static maps into smart decision-making systems.',
          icon: Map,
          features: ['Advanced Spatial Analysis', 'Digital Twin', 'Load & Infrastructure Prediction']
        },
        {
          title: 'Smart City Strategy',
          description: 'Building the city\'s digital strategy. A technological roadmap connecting residents, municipality, and space.',
          icon: Cpu,
          features: ['IT Master Plans', 'Urban IoT', 'Open Data Policy']
        },
        {
          title: 'Tenders & Procurement',
          description: 'Managing complex tech tenders. We write the specifications that define the city\'s future.',
          icon: FileText,
          features: ['Cloud & SaaS Tenders', 'Photogrammetric Mapping', 'Strict Vendor Control']
        },
        {
          title: 'Data Architecture',
          description: 'Planning data architecture enabling smooth information flow between municipal departments.',
          icon: Database,
          features: ['API Integration', 'Data Warehousing', 'Municipal Cyber Security']
        },
        {
          title: 'Urban Planning Tech',
          description: 'Online licensing and construction supervision systems. Automating complex engineering processes.',
          icon: Building2,
          features: ['Online Licensing', 'Committee Management', 'Computerized Urban Planning']
        },
        {
          title: 'QA & Validation',
          description: 'Quality assurance for geographic data. Ensuring information reliability as a basis for decision making.',
          icon: ShieldCheck,
          features: ['Data Cleansing', 'Measurement Control', 'Address Validation']
        }
      ]
    },
    projects: {
      badge: 'Portfolio',
      title: 'Selected Projects',
      subtitle: 'Advanced C&C systems, smart urban mapping, and cloud solutions. Here is a glimpse of our work in the field.',
      ctaAll: 'All Projects',
      items: [
        {
          title: 'Digital Twin Tel Aviv',
          category: 'Urban Innovation',
          description: 'Full 3D mapping of the city for infrastructure management and real-time planning simulations.',
          image: 'https://images.unsplash.com/photo-1543965860-82ed7d542cc4?q=80&w=2060&auto=format&fit=crop',
          tags: ['3D Mapping', 'AI Analysis', 'Urban Planning']
        },
        {
          title: 'Metropolitan C&C System',
          category: 'Command & Control',
          description: 'Establishing a unified control center integrating traffic, security, and operations data into one smart platform.',
          image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
          tags: ['IoT', 'Big Data', 'Security']
        },
        {
          title: 'Government Cloud Transformation',
          category: 'IT Infrastructure',
          description: 'Guiding a government ministry in migrating GIS infrastructures to a secure hybrid cloud environment.',
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
          tags: ['Cloud Computing', 'Cyber Security', 'Migration']
        }
      ]
    },
    clients: {
      title: 'Our Partners',
      subtitle: 'Proudly working with leading entities in the Israeli economy',
      categories: [
        {
          name: 'Cities & Authorities',
          items: ['Tel Aviv-Yafo', 'Rishon LeZion', 'Herzliya', 'Holon', 'Ra\'anana', 'Netanya']
        },
        {
          name: 'Government & Infrastructure',
          items: ['Ministry of Interior', 'RAMI', 'Netivei Israel', 'Ministry of Housing', 'MAPI']
        }
      ],
      bannerTitle: 'Ready to Join the Digital Revolution?',
      bannerText: 'Join dozens of authorities already managing tomorrow, today.',
      bannerCta: 'Schedule a Meeting'
    },
    contact: {
      title: 'Let\'s Plan the Future.',
      subtitle: 'Want to hear how our systems can save resources and improve resident service?',
      highlight: 'Coffee is on us.',
      email: 'Email',
      phone: 'Direct Phone',
      address: 'Headquarters',
      formTitle: 'Schedule Meeting / Consult',
      labels: {
        name: 'Full Name',
        org: 'Organization / Authority',
        email: 'Email Address',
        message: 'Subject',
        submit: 'Send Request'
      },
      placeholders: {
        name: 'Israel Israeli',
        org: 'Authority Name',
        email: 'email@company.com',
        message: 'We\'d love to hear about your challenges...'
      }
    }
  }
};
