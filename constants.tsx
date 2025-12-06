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
      readMore: 'קרא עוד על החזון שלנו',
      readLess: 'חזרה לתצוגה מקוצרת',
      description1: 'בעולם שבו העיר הופכת למרחב דיגיטלי מורכב, רשויות מקומיות זקוקות למצפן ברור. GZI Systems מחברת בין העולם הפיזי לדיגיטלי, בין הנדסה אזרחית לטכנולוגיית ענן.',
      // This text replaces description1 when expanded
      descriptionExtendedTitle: 'מתודולוגיה וחדשנות',
      descriptionExtended: `הצוות שלנו מורכב מבוגרי יחידות טכנולוגיות ומומחי תכנון ערים, היוצרים יחד סינרגיה נדירה. אנו מאמינים כי טכנולוגיה אינה המטרה, אלא האמצעי ליצירת מרחב עירוני יעיל, שקוף ונגיש לתושב.
      
      הגישה שלנו מבוססת על שלושה עקרונות ליבה:
      1. עצמאות במידע - הרשות היא הבעלים הבלעדי של המידע שלה.
      2. קוד פתוח וגמישות - הימנעות מ"חתונה קתולית" עם ספקים טכנולוגיים.
      3. אינטגרציה מלאה - חיבור מערכות הליבה (גבייה, הנדסה, מוקד) למערכת אחת מסונכרנת.
      
      אנו מלווים את הרשות החל משלב האפיון, דרך כתיבת המכרזים וניהול הספקים, ועד להטמעה מלאה בשטח והדרכת העובדים.`,
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
      back: 'חזרה לרשימת השירותים',
      items: [
        {
          title: 'AI & GIS Intelligence',
          description: 'שילוב בינה מלאכותית במערכות מידע גיאוגרפיות. אנו הופכים מפות סטטיות למערכות קבלת החלטות חכמות.',
          extendedDescription: 'אנו רותמים את כוחה של הבינה המלאכותית לניתוח כמויות עצומות של מידע גיאוגרפי. המערכות שלנו יודעות לזהות דפוסים במרחב, לחזות עומסי תנועה עתידיים, ולאתר חריגות בניה באופן אוטומטי באמצעות פענוח תצלומי אוויר. אנו מספקים לרשות "מוח דיגיטלי" שלומד את העיר ומשתפר מיום ליום.',
          icon: Map,
          features: ['ניתוח מרחבי מתקדם', 'Digital Twin', 'חיזוי עומסים ותשתיות']
        },
        {
          title: 'Smart City Strategy',
          description: 'בניית האסטרטגיה הדיגיטלית של העיר. מפת דרכים טכנולוגית המחברת בין התושב, העירייה והמרחב.',
          extendedDescription: 'עיר חכמה היא לא רק חיישנים ומצלמות, אלא אסטרטגיה הוליסטית. אנו בונים עבור הרשות תוכנית אב מקיפה המגדירה כיצד הטכנולוגיה תשרת את היעדים העירוניים בעשור הקרוב. התהליך כולל מיפוי פערים, הגדרת תקציבים, וקביעת מדדי הצלחה (KPIs) לשיפור השירות לתושב והתייעלות תפעולית.',
          icon: Cpu,
          features: ['תוכניות אב למחשוב', 'IoT עירוני', 'מדיניות Open Data']
        },
        {
          title: 'Tenders & Procurement',
          description: 'ניהול מכרזים טכנולוגיים מורכבים. אנו כותבים את המפרטים שמגדירים את עתיד העיר.',
          extendedDescription: 'רכש טכנולוגי ברשויות מקומיות הוא אתגר מורכב הדורש מומחיות ספציפית. אנו מלווים את הרשות בכתיבת מכרזים (RFP/RFI) מדויקים המבטיחים קבלת פתרונות איכותיים במחיר הוגן. אנו מנהלים את תהליך בחינת ההצעות, מבצעים בדיקות היתכנות טכנולוגיות (POC), ומבטיחים עמידה בסטנדרטים של אבטחת מידע.',
          icon: FileText,
          features: ['מכרזי ענן ו-SaaS', 'מיפוי פוטוגרמטרי', 'בקרת ספקים קפדנית']
        },
        {
          title: 'Data Architecture',
          description: 'תכנון ארכיטקטורת נתונים המאפשרת זרימת מידע חלקה בין אגפי העירייה השונים.',
          extendedDescription: 'המידע הוא הנכס החשוב ביותר של הארגון. אנו מתכננים ומקימים אגמי נתונים (Data Lakes) ומחסני נתונים המרכזים מידע מכלל מערכות העירייה - גבייה, הנדסה, מוקד עירוני וחינוך. הארכיטקטורה שלנו מבטיחה "אמת אחת" (Single Source of Truth) ומאפשרת למנהלים לקבל תמונת מצב אמינה בזמן אמת.',
          icon: Database,
          features: ['אינטגרציית API', 'Data Warehousing', 'אבטחת סייבר מוניציפלית']
        },
        {
          title: 'Urban Planning Tech',
          description: 'מערכות רישוי זמין ופיקוח על הבנייה. אוטומציה של תהליכים הנדסיים מורכבים.',
          extendedDescription: 'אנו מובילים את המהפכה הדיגיטלית במינהל ההנדסה. המערכות שלנו מייעלות את תהליכי הרישוי והפיקוח, מקצרות את זמני ההמתנה להיתרים, ומאפשרות שקיפות מלאה מול היזמים והתושבים. הפתרונות כוללים מערכות לניהול ועדות, חישוב שטחים אוטומטי, ובדיקה מרחבית ממוחשבת של תוכניות הגשה.',
          icon: Building2,
          features: ['מערכות רישוי מקוון', 'ניהול ועדות', 'ניתוח תב"ע ממוחשב']
        },
        {
          title: 'QA & Validation',
          description: 'בקרת איכות לנתונים גיאוגרפיים. הבטחת אמינות המידע כבסיס לקבלת החלטות.',
          extendedDescription: 'החלטות שגויות מתבססות על נתונים שגויים. אנו מפעילים מערך בקרת איכות קפדני (QA) לטיוב נתונים גיאוגרפיים ואלפא-נומריים. הצוותים שלנו מבצעים ולידציה לנתוני מדידות, מוודאים תקינות טופולוגית של שכבות GIS, ומבטיחים סנכרון מלא בין בסיסי הנתונים השונים ברשות.',
          icon: ShieldCheck,
          features: ['טיוב נתונים', 'בקרת מדידות', 'תיקוף כתובות']
        }
      ]
    },
    projects: {
      badge: 'תיק עבודות',
      title: 'פרויקטים נבחרים',
      subtitle: 'מערכות שו"ב מתקדמות, מיפוי עירוני חכם ופתרונות ענן. הנה הצצה לעשייה שלנו בשטח.',
      next: 'הבא',
      prev: 'הקודם',
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
        },
        {
          title: 'פלטפורמת היתרי בנייה',
          category: 'הנדסה ורישוי',
          description: 'אוטומציה מלאה של תהליכי היתר הבנייה, כולל בדיקה מרחבית אוטומטית וחישוב אגרות.',
          image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031&auto=format&fit=crop',
          tags: ['Automation', 'Engineering', 'GovTech']
        },
        {
          title: 'ניהול נכסים מוניציפלי',
          category: 'כלכלה אורבנית',
          description: 'מערכת GIS לניהול ותמחור נדל"ן עירוני, שטחי מסחר ושלטי חוצות להגדלת הכנסות.',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
          tags: ['Real Estate', 'GIS', 'Finance']
        },
        {
          title: 'מערך רמזורים חכם',
          category: 'תחבורה חכמה',
          description: 'אופטימיזציה של תנועה עירונית באמצעות בינה מלאכותית וחיישני IoT בצמתים מרכזיים.',
          image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop',
          tags: ['Smart Mobility', 'AI', 'Traffic']
        }
      ]
    },
    clients: {
      title: 'הלקוחות שלנו',
      subtitle: 'גאים לשרת את הרשויות והגופים המובילים בישראל',
      items: [], // Deprecated in favor of categories below
      categories: [
        {
          name: 'רשויות מקומיות',
          items: [
            'עיריית אילת', 'עיריית באר יעקב', 'עיריית שדרות', 'מועצה מקומית שדות דן',
            'מועצה מקומית הגלבוע', 'מועצה מקומית בית אל', 'ועדה לתכנון ובניה זמורה',
            'עיריית הרצליה', 'ועדה לתכנון ובניה מצפה אפק', 'ועדה לתכנון ובניה רכס הכרמל',
            'מועצה אזורית חבל אילות', 'מועצה מקומית אבן יהודה', 'מועצה אזורית לכיש',
            'מועצה מקומית מיתר', 'קיבוץ קטורה', 'קיבוץ אפק'
          ]
        },
        {
          name: 'תאגידי מים וביוב וחברות כלכליות',
          items: [
            'חברה כלכלית עמק חפר', 'חברה כלכלית אילת', 'מיתב', 'הבאר השלישית',
            'מי אביבים', 'קולחי גלבוע', 'חברה כלכלית ראש העין', 'מי רמת גן',
            'מי רעננה', 'מי שיקמה', 'תאגיד מעיינות השרון'
          ]
        }
      ],
      bannerTitle: 'הצטרפו למהפכה העירונית',
      bannerText: 'המומחים שלנו ממתינים לסייע לכם באתגר הבא.',
      bannerCta: 'צרו קשר'
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
      readMore: 'Read More About Our Vision',
      readLess: 'Back to Summary',
      description1: 'In a world where the city becomes a complex digital space, municipalities need a clear compass. GZI Systems connects the physical world to the digital, from civil engineering to cloud technology.',
      descriptionExtendedTitle: 'Methodology & Innovation',
      descriptionExtended: `Our team consists of technology unit veterans and urban planning experts, creating a rare synergy. We believe technology is not the goal, but the means to create an efficient, transparent, and accessible urban space.

      Our approach is based on three core principles:
      1. Data Independence - The authority is the sole owner of its data.
      2. Open Source & Flexibility - Avoiding "vendor lock-in" scenarios.
      3. Full Integration - Connecting core systems (billing, engineering, hotline) into one synchronized platform.

      We accompany the authority from the characterization stage, through tender writing and vendor management, to full implementation in the field and employee training.`,
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
      back: 'Back to Services',
      items: [
        {
          title: 'AI & GIS Intelligence',
          description: 'Integrating AI into GIS systems. We turn static maps into smart decision-making systems.',
          extendedDescription: 'We harness the power of AI to analyze vast amounts of geographic data. Our systems identify spatial patterns, predict future traffic loads, and automatically detect construction anomalies using aerial imagery analysis. We provide the authority with a "digital brain" that learns the city and improves daily.',
          icon: Map,
          features: ['Advanced Spatial Analysis', 'Digital Twin', 'Load & Infrastructure Prediction']
        },
        {
          title: 'Smart City Strategy',
          description: 'Building the city\'s digital strategy. A technological roadmap connecting residents, municipality, and space.',
          extendedDescription: 'A smart city is not just sensors and cameras, but a holistic strategy. We build a comprehensive master plan for the authority defining how technology will serve urban goals in the coming decade. The process includes gap analysis, budget definition, and KPI setting for improved resident service and operational efficiency.',
          icon: Cpu,
          features: ['IT Master Plans', 'Urban IoT', 'Open Data Policy']
        },
        {
          title: 'Tenders & Procurement',
          description: 'Managing complex tech tenders. We write the specifications that define the city\'s future.',
          extendedDescription: 'Technological procurement in local authorities is a complex challenge requiring specific expertise. We guide the authority in writing precise tenders (RFP/RFI) ensuring quality solutions at fair prices. We manage the proposal review process, conduct technological feasibility checks (POC), and ensure information security standards compliance.',
          icon: FileText,
          features: ['Cloud & SaaS Tenders', 'Photogrammetric Mapping', 'Strict Vendor Control']
        },
        {
          title: 'Data Architecture',
          description: 'Planning data architecture enabling smooth information flow between municipal departments.',
          extendedDescription: 'Data is the organization\'s most valuable asset. We plan and establish Data Lakes and Data Warehouses centering information from all municipal systems - billing, engineering, municipal hotline, and education. Our architecture ensures a "Single Source of Truth" enabling managers to receive reliable real-time status updates.',
          icon: Database,
          features: ['API Integration', 'Data Warehousing', 'Municipal Cyber Security']
        },
        {
          title: 'Urban Planning Tech',
          description: 'Online licensing and construction supervision systems. Automating complex engineering processes.',
          extendedDescription: 'We lead the digital revolution in engineering administration. Our systems streamline licensing and supervision processes, shorten permit waiting times, and enable full transparency with developers and residents. Solutions include committee management systems, automatic area calculation, and computerized spatial checking of submission plans.',
          icon: Building2,
          features: ['Online Licensing', 'Committee Management', 'Computerized Urban Planning']
        },
        {
          title: 'QA & Validation',
          description: 'Quality assurance for geographic data. Ensuring information reliability as a basis for decision making.',
          extendedDescription: 'Wrong decisions are based on wrong data. We operate a strict Quality Assurance (QA) array for geographic and alphanumeric data improvement. Our teams validate measurement data, ensure topological correctness of GIS layers, and ensure full synchronization between different municipal databases.',
          icon: ShieldCheck,
          features: ['Data Cleansing', 'Measurement Control', 'Address Validation']
        }
      ]
    },
    projects: {
      badge: 'Portfolio',
      title: 'Selected Projects',
      subtitle: 'Advanced C&C systems, smart urban mapping, and cloud solutions. Here is a glimpse of our work in the field.',
      next: 'Next',
      prev: 'Previous',
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
        },
        {
          title: 'Permit Platform',
          category: 'Engineering & Licensing',
          description: 'Full automation of building permit processes, including automatic spatial checking and fee calculation.',
          image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031&auto=format&fit=crop',
          tags: ['Automation', 'Engineering', 'GovTech']
        },
        {
          title: 'Municipal Asset Management',
          category: 'Urban Economy',
          description: 'GIS system for managing and pricing municipal real estate, commercial areas, and billboards.',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
          tags: ['Real Estate', 'GIS', 'Finance']
        },
        {
          title: 'Smart Traffic Grid',
          category: 'Smart Mobility',
          description: 'Optimizing urban traffic using AI and IoT sensors at key intersections.',
          image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop',
          tags: ['Smart Mobility', 'AI', 'Traffic']
        }
      ]
    },
    clients: {
      title: 'Our Clients',
      subtitle: 'Proud to serve Israel\'s leading authorities and organizations',
      items: [
        'Tel Aviv-Yafo', 'Rishon LeZion', 'Herzliya', 'Holon', 'Ra\'anana', 'Netanya', 
        'Ministry of Interior', 'RAMI', 'Netivei Israel', 'Ministry of Housing', 'MAPI', 'Modi\'in'
      ],
      categories: [
        {
          name: 'Municipalities',
          items: [
            'Tel Aviv-Yafo', 'Rishon LeZion', 'Herzliya', 'Holon', 'Ra\'anana', 'Netanya', 'Modi\'in'
          ]
        },
        {
          name: 'Government & Infrastructure',
          items: [
            'Ministry of Interior', 'RAMI', 'Netivei Israel', 'Ministry of Housing', 'MAPI'
          ]
        }
      ],
      bannerTitle: 'Ready to join the success?',
      bannerText: 'Join dozens of authorities that have already made the technological leap.',
      bannerCta: 'Contact Us'
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