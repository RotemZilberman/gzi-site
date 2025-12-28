import { Map, Layers, Database, FileText, ShieldCheck, Cpu, Building2, Server, Network, Shield } from 'lucide-react';
import { NavItem, ServiceItem, StatItem, ClientCategory, ClientLogo, ProjectItem } from './types';

// Logo assets grouped by category (all live in /public/companies)
const MUNICIPAL_LOGOS: ClientLogo[] = [
  { he: 'עיריית אילת', en: 'Eilat Municipality', src: '/companies/local-authorities/Eilat_Logo.svg' },
  { he: 'עיריית באר יעקב', en: 'Beer Yaakov Municipality', src: '/companies/local-authorities/BEER_YAAKOV_LOGO.jpg' },
  { he: 'עיריית שדרות', en: 'Sderot Municipality', src: '/companies/local-authorities/logo-2.jpg' },
  { he: 'מועצה מקומית שדות דן', en: 'Sdot Dan Local Council', src: '/companies/local-authorities/SdotDan.svg.png' },
  { he: 'מועצה מקומית הגלבוע', en: 'Gilboa Local Council', src: '/companies/local-authorities/Gilboa_Regional_Council_COA.svg.png' },
  { he: 'מועצה מקומית בית אל', en: 'Beit El Local Council', src: '/companies/local-authorities/logo-2.png' },
  { he: 'ועדה לתכנון ובניה זמורה', en: 'Zamora Planning Committee', src: '/companies/local-authorities/הוועדה-המקומית-לתכנון-ובנייה-זמורה.jpg' },
  { he: 'עיריית הרצליה', en: 'Herzliya Municipality', src: '/companies/local-authorities/Herzliya_Logo_2011.svg.png' },
  { he: 'ועדה לתכנון ובניה מצפה אפק', en: 'Mitzpe Afek Planning Committee', src: '/companies/local-authorities/logo_MitzpeAfeq.png' },
  { he: 'ועדה לתכנון ובניה רכס הכרמל', en: 'Carmel Ridge Planning Committee', src: '/companies/local-authorities/logo-3.svg' },
  { he: 'מועצה אזורית חבל אילות', en: 'Hevel Eilot Regional Council', src: '/companies/local-authorities/Hevel_Eilot_Regional_Council_COA.svg.png' },
  { he: 'מועצה מקומית אבן יהודה', en: 'Even Yehuda Local Council', src: '/companies/local-authorities/אבן_יהודה_סמל.png' },
  { he: 'מועצה אזורית לכיש', en: 'Lachish Regional Council', src: '/companies/local-authorities/Lachishtransparent.png' },
  { he: 'מועצה מקומית מיתר', en: 'Meitar Local Council', src: '/companies/local-authorities/logo-5.png' },
  { he: 'קיבוץ קטורה', en: 'Kibbutz Ketura', src: '/companies/local-authorities/ketura_kibbutz.png' },
  { he: 'קיבוץ אפק', en: 'Kibbutz Afek', src: '/companies/local-authorities/logoF.png' },
];

const WATER_AND_ECON_LOGOS: ClientLogo[] = [
  { he: 'חברה כלכלית עמק חפר', en: 'Emek Hefer Economic Company', src: '/companies/water-authorities/logo-4.png' },
  { he: 'חברה כלכלית אילת', en: 'Eilat Economic Company', src: '/companies/water-authorities/logo_eilat.png' },
  { he: 'מיתב', en: 'Miteb', src: '/companies/water-authorities/logo-6.png' },
  { he: 'הבאר השלישית', en: "HaBe'er HaShlishit", src: '/companies/water-authorities/logo.png' },
  { he: 'מי אביבים', en: 'Mei Avivim', src: '/companies/water-authorities/logo_my_avivim.png' },
  { he: 'קולחי גלבוע', en: 'Kolchei Gilboa', src: '/companies/water-authorities/logo.jpg' },
  { he: 'חברה כלכלית ראש העין', en: "Rosh Ha'ayin Economic Company", src: '/companies/water-authorities/Logo-3.jpg' },
  { he: 'מי רמת גן', en: 'Mei Ramat Gan', src: '/companies/water-authorities/מי-רמת-גן.jpg' },
  { he: 'מי רעננה', en: "Mei Ra'anana", src: '/companies/water-authorities/Updatedlogo_raanana.jpg' },
  { he: 'מי שיקמה', en: 'Mei Shikma', src: '/companies/water-authorities/מי-שיקמה-שירות-לקוחות-לוגו.jpg' },
  { he: 'תאגיד מעיינות השרון', en: 'Mayanot HaSharon', src: '/companies/water-authorities/logosharon.svg' },
];

const CLIENT_LOGO_LIST = [...MUNICIPAL_LOGOS, ...WATER_AND_ECON_LOGOS];

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
      subtitle: 'GZI Consulting מייעצת ויישמת מערכות מידע בגופים ממשלתיים ובחברות בדגש על מערכות GIS וניהול מקרקעין (GZI. (LIS מחברת בין בינה מלאכותית למידע גיאוגרפי. ',
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
      description1: 'במשך יותר מ־30 שנה גיל זילברמן וצוות GZI מלווים רשויות, ועדות תכנון, תאגידי מים וחברות פרטיות בהקמה ויישום של מערכות GIS, דיגיטציה וחדשנות דיגיטלית. החוזקה שלנו: חיבור בין הבנה עסקית-תפעולית ליכולות טכנולוגיות. החיבור בין תהליכים עסקיים וטכנולוגיה מתקדמת מאפשר לבנות מערכות שמשרתות את הלקוחות ומעניקות להם תובנות עסקיות. גיל זילברמן משמש משנת 2017 כיועץ מקצועי לרשויות ולוועדות תכנון בהקמת מערכות מידע, דיגיטציה וסקרים, וכתיבת מכרזים למערכות מידע ולפרויקטים לאיסוף נתונים כגון: תשתיות עירוניות, סקר מאור ובדיקות יציבות, סקר תמרור עירוני, צילומי אוויר, סקרים לאיתור עברות בניה ועוד.',
      descriptionExtendedTitle: 'מתודולוגיה וחדשנות',
      descriptionExtended: `אנחנו מאמינים שטכנולוגיה היא אמצעי, לא מטרה. בעולם רווי פתרונות, האתגר המרכזי הוא לבחור את המערכת הנכונה לארגון זו שמתאימה ליכולת התפעולית, לדרישות המקצועיות ולמסגרת התקציב.
הצלחה ביישום מערכת מידע מושתתת על חווית שירות, מתן ערך מוסף למשתמש, יצירת תהליכי עדכון ושמירה על נכונות המידע לאורך זמן.  
מערכת מידע המבוססת על מידע אמין מאפשר לארגון להפיק תובנות ולהשתמש בנתונים ככלי מרכזי בתהליכי תכנון ותחזוקה. 
במהלך שנות עבודתנו פיתחנו מתודולוגיית שונות ליישום מערכות מידע.
לצורך כתיבת מכרזים המותאמים לדרישות ספציפיות של לקוחות פותחה מתודולוגיה של ניהול מכרז המבוסס על  7 שכבות בה כל שלב מהווה תשתית לשכבה הבאה.  מכרזים בשיטה זו מבטיחים התאמה של הפתרון לצרכי הארגון ויצירת תהליכי הטמעה.
בתחום מערכות המידע הגיאוגרפיות פותחה גישת GIS Active בה הלקוח שותף מלא לניהול ולעדכון המידע.  באופן זה, המערכת נשארת מדויקת לאורך זמן.  
במשך יותר מ־30 שנה אנו מייעצים לרשויות מקומיות, ועדות לתכנון ובנייה,  תאגידי מים וחברות פרטיות בתכנון, הקמה ויישום של מערכות GIS ופתרונות ניהול מקרקעין. 
הניסיון שנצבר בעבודה עם מרבית הגופים המוניציפאליים בישראל,  אפשר פיתוח מומחיות ייחודית בחיבור בין הבנה עסקית-תפעולית לבין יכולות טכנולוגיות מתקדמות.  
אנו עוסקים בחיבור בין העולם העסקי לצרכים הטכנולוגיים, הבנת המציאות הארגונית ועצוב פתרון שמאזן בין פונקציונליות, תקציב ויכולת תפעולית. 

מה אנחנו עושים: 
אפיון והגדרת דרישות,  בניית פתרון טכני ועסקי מותאם, ניהול פרויקטים בתחום מערכות מידע ו־GIS , ניתוח מידע והפקת תובנות לקבלת החלטות, ייעוץ וכתיבת מסמכי מכרז, ליווי בבחירת ספקים, ותמיכה מלאה בשלבי ההטמעה והתפעול. 
למי אנו מעניקים שירות: 
ערים ורשויות מקומיות, מועצות מקומיות ואזוריות, ועדות לתכנון ובנייה מרחביות, תאגידי מים, משרדי ממשלה וחברות פרטיות העוסקות בניהול נכסים ותשתיות. 
 `,
      features: [
        { icon: Shield, title: 'ניסיון מוכח ונטול אינטרסים', desc: 'ליווי עשרות רשויות בישראל באובייקטיביות מלאה.' },
        { icon: Server, title: 'אינטגרציה מערכתית', desc: 'חיבור מערכות הנדסה, גבייה ותפעול לפלטפורמה אחת.' },
      ],
      imageWidgets: {
        realtime: '',
        server: 'GIS Active'
      }
    },
    stats: [
      { value: '25+', label: 'שנות מצוינות' },
      { value: '100+', label: 'פרוייקטים' },
      { value: '∞', label: 'חדשנות ללא גבולות' },
    ],
    services: {
      badge: 'תחומי התמחות',
      title: 'טכנולוגיה בשירות העיר',
      subtitle: 'מעטפת מלאה: מכרזים, דיגיטציה ומיפוי, חדשנות דיגיטלית, GIS Active, פתרונות GIS ו-AI — כדי שהמערכות יעבדו באמת.',
      cta: 'קרא עוד',
      back: 'חזרה לרשימת השירותים',
      items: [
        {
          title: 'ייעוץ וכתיבת מסמכי מכרז',
          description: 'מכרז מותאם לקוח בהתאם למתודולוגיית 7 השכבות בה דרישות פונקציונליות, טכניות, ממשקים, הקפדה על לוחות זמנים ותהליכי בקרת איכות מבטחים התאמת פתרון לצרכיו של הלקוח.',
          extendedDescription: `כתיבת מכרז למערכות מידע היא אחד השלבים הקריטיים ביותר בפרויקט טכנולוגי. מכרז טוב אינו מסמך משפטי בלבד הוא תוכנית עבודה טכנולוגית מפורטת שמתארת מה הארגון צריך, איך הוא ימדוד הצלחה, ואילו יכולות עליו לדרוש מהספקים.
ניסיון רב שנים מלמד שפתרון שעבד היטב בארגון אחד, לא בהכרח יתאים לאחר. לכן המכרז חייב להיות מותאם-לקוח, מבוסס על הבנה מעמיקה של התהליכים, היכולות, הצוות והתקציב.
לכן פיתחתי מודל עבודה מסודר המבוסס על 7 שכבות, שבו כל שכבה בונה יסודות לשלב הבא, ויחד הן מבטיחות תהליך מכרז איכותי ומוצלח.
תהליך כתיבת המכרז מתחיל בניתוח מצב קיים, ניתוח דרישות של המשתמשים והבנה כיצד המערכת החדשה משתלבת במבנה הארגוני ובמערכות המידע.  ניתוח מעמיק של המצב הקיים ודרישות המערכת יאפשרו כתיבת מסמך מפורט המרחיב את הדרישות הטכניות ומגדיר גם את אמות השירות הנדרשות.  מסמכי המכרז יסייעו לארגון בשלב המימוש  ויאפשרו הבנה ותאום ציפיות בין הלקוח לבין ספק השירותים.   

למה לבחור בשיטת 7 השכבות?
• המכרז תפור בדיוק ללקוח לא פתרון מדף.
• צמצום סיכונים וטעויות בשלב היישום.
• ראייה מערכתית שמונעת הפתעות בהמשך הפרויקט.
• שילוב בין ידע טכנולוגי מעשי לבין ניסיון רב-שנים בעולם המכרזים הציבוריים.
• תהליך שקוף שבו הלקוח שותף מלא להבנת הדרישות ולבחירת הפתרון.`,
          icon: FileText,
          features: ['מודל 7 שכבות', 'התאמה מלאה לארגון', 'ליווי פרסום ובחירת ספק']
        },
        {
          title: 'איסוף נתונים, דיגיטציה ומיפוי',
          description: 'ליווי מלא בביצוע סקרי שטח החל משלב צילומי האוויר ועד להשלמות השדה.  ביצוע סקרי מים, ביוב, ניקוז, מאור, שילוט, ארנונה וחריגות בנייה – מאפיון ועד פיקוח בשטח.',
          extendedDescription: `ליווי מלא לסקרי מים, ביוב, ניקוז, מאור, שילוט, ארנונה וחריגות בנייה – מאפיון ועד פיקוח בשטח.
נתוני שטח מדויקים הם אבן היסוד של כל מערכת מידע איכותית.
ב-GZI אנו מובילים ארגונים לאורך כל מסלול ההקמה והביצוע של פרויקטים לאיסוף נתונים, דיגיטציה ומיפוי — משלב התכנון הראשוני ועד למסירת נתונים תקניים, אמינים ומותאמים למערכות ה-GIS ולמערכות המידע הארגוניות.
מה כולל הליווי המקצועי שלנו?

הגדרת דרישות וכתיבת מפרט טכני
אנו מנתחים את הצרכים המקצועיים של הארגון, מגדירים את פורמט הנתונים, רמות הדיוק, התקנים המחייבים, וההתאמה המדויקת למערכות הלקוח.

ליווי צמוד בתהליכי איסוף וייצור הנתונים
החל מביצוע צילומי אוויר, דרך סקרי שטח והשלמות שדה — אנו מלווים את כל שלבי העבודה.
בין היתר:
• סקרים לאיתור ובקרה של תשתיות מים, ביוב, ניקוז ומאור
• מיפוי שילוט ותמרור
• סקרי ארנונה
• איתור חריגות בנייה (סעיף 116)

בקרת איכות וניהול פרויקט מוקפד
בGZI  אנו מיישמים תהליכי בקרת איכות מחמירים ומנהלים את הפרויקט על פי תוכנית עבודה סדורה ומוסכמת, עד לקבלת תוצרים מדויקים וברי-שימוש.

נתוני שטח מדויקים הם הבסיס לכל מערכת מידע איכותית. GZI מלווה ארגונים בהקמה וביצוע של פרויקטים לאיסוף נתונים, דיגיטציה ומיפוי משלב התכנון ועד אספקת נתונים תקניים, אמינים ומותאמים למערכת ה־GIS  והמידע הארגוני.  
מה כולל הליווי המקצועי ? הגדרת דרישות וכתיבת מפרט טכני: זיהוי הצורך המקצועי, פורמט הנתונים, רמת הדיוק 
והתקנים המחייבים, והתאמה למערכות הלקוח. 

אנו מבצעים ליווי מקצועי החל מביצוע צילומי אוויר (אורתופוטו, ציילום אלכסוני ומודולי תלת מימד)  וביצוע השלמות שדה בסקרי שטח: סקרים לאיתור ובקרה של רשת מים, ביוב, ניקוז, מאור, שילוט, תמרור, סקרי ארנונה וחריגות בנייה (סעיף 116).
GZI מבצעת תהליכי בקרת איכות קפדניים וניהול הפרוייקט בהתאם לתוכנית עבודה מוסכמת.`,
          icon: Layers,
          features: ['מפרט מדויק', 'פיקוח ובקרת איכות', 'דיגיטציה ותקנון']
        },
        {
          title: 'חדשנות דיגיטלית ושיפור תהליכים',
          description: 'אוטומציה של תהליכים, AI, וידאו אנליטיקה ותאורה חכמה לשיפור שירות לתושב ותפעול תשתיות.',
          extendedDescription: `אוטומציה של תהלכים, AI, וידאו אנליטיקה ותאורה חכמה לשיפור שירות לתושב ותפעול תשתיות.

בעידן של עומסי עבודה, רגולציה מחמירה וציפייה גוברת לשירות איכותי, חדשנות דיגיטלית הפכה לתנאי בסיס לתפעול חכם ויעיל. GZI מלווה רשויות מקומיות בהטמעת פתרונות טכנולוגיים מתקדמים כאלה שמתאימים ליכולות הארגון, למציאות התפעולית ולמסגרת התקציב עם דגש על שיפור תהליכים אמיתי המייצרים ערך.

מה כוללת החדשנות הדיגיטלית?
מערכות אוטומציה וWorkflow
אוטומציה לפניות תושב, זרימות עבודה בין אגפים, סנכרון נתונים בין מערכות מידע, קיצור זמני טיפול וחיסכון משמעותי במשאבי אנוש.
בינה מלאכותית (AI)
ניתוח נתוני  GISויישום GIS מבוסס AI,  יישום כלים לניתוח מידע המהווה כלי חיזוי לעומסים ולתקלות, צ’טבוטים ושירותים דיגיטליים לתושב, וזיהוי חריגות לשיפור הבקרה והתפעול.
וידאו אנליטיקה מתקדמת
זיהוי אירועים בזמן אמת, ניטור תנועה והולכי רגל, חיזוק הביטחון העירוני, ושילוב המידע במערכות GIS ובמאגרי מידע ארגוניים.
תאורה חכמה וניהול תשתיות עירוניות
בקרה מרחוק, שליטה בצריכת אנרגיה, ניטור תקלות, שילוב חיישנים (סביבה, תנועה, חניה ועוד) וניהול יעיל של נכסי הרשות.

ליווי מקצה לקצה — משלב החשיבה ועד לשיפור מתמיד
GZI מלווה את הרשות בכל שלבי התהליך:
הגדרת הצורך והיעדים האסטרטגיים, בחינת פתרונות מובילים בשוק, אפיון מדויק המותאם ליכולות הארגון, הכנת מפרטים ומסמכי מכרז, הטמעה בפועל, ליווי שוטף, מדידה ושיפור לאורך זמן.
הניסיון העשיר בעבודה עם רשויות מגוונות מאפשר שילוב מיטבי בין טכנולוגיה, תהליכי עבודה וראייה מערכתית, כך שהפתרון משתלב בצורה חלקה במערכות הקיימות ומייצר שינוי אמיתי.`,
          icon: Cpu,
          features: ['אוטומציה ו-Workflow', 'AI לשירות ותפעול', 'וידאו ותאורה חכמה']
        },
        {
          title: 'ליווי והטמעת GIS (GIS Active)',
          description: 'הטמעה שמעצימה את הלקוח לנהל ולעדכן מידע בעצמו, עם נהלים וכלים פשוטים.',
          extendedDescription: `הטמעה שמעצימה את הלקוח לנהל ולעדכן מידע בעצמו, עם נהלים וכלים פשוטים.
ארגונים פועלים בעולם מורכב עם ריבוי מידע ודרישות חוקיות. גישת GIS Active מאפשרת לרשות להיות שותפה מלאה בניהול המידע ולהפוך אותו לכלי החלטה, לא רק לאחסון נתונים. 

• הלקוח כגורם פעיל: עבודה עם כלים פשוטים לניהול המידע, עדכון עצמאי ואמון גבוה בנתונים. יישום מתודולוגיה של GIS Active משמעותה יישום שמאפשר לארגון הפקת תובנות, תמיכה בקבלת החלטות, זיהוי מגמות ודוחות דינמיים. 
• "פשטות כמפתח": מערכת אינטואיטיבית שמתאימה לתהליכי העבודה ומעודדת שימוש ואימוץ טכנולוגי.  
• תחזוקת מידע לאורך זמן: קביעת נהלי עבודה, תהליכי עדכון שוטפים, שגרות בקרה וחלוקת אחריות בין תפקידים. 

מה כולל השירות שאנו מעניקים? אפיון וניתוח צרכים, התאמת פתרון טכני ותפעולי, יישום והטמעה עם הדרכות פרקטיות, הנחיות לעדכון נתונים ובניית נהלי עבודה, עיצוב דשבורדים ומפות נושאיות, בקרה ותחזוקה שוטפת. 
התוצאה: מידע עדכני ותובנות שמאפשרות החלטות נכונות ומהירות, פשטות שמביאה לאימוץ, ועצמאות עם תלות מינימלית בספקים.`,
          icon: Building2,
          features: ['הדרכות ונהלים', 'עדכון רציף', 'בקרה ותחזוקה']
        },
        {
          title: 'מערכות GIS ופתרונות מידע מרחבי',
          description: 'הקמה, שדרוג ויישום של מערכות GIS, פורטלים ודשבורדים בארגונים ציבוריים ופרטיים.',
          extendedDescription: `הקמה, שדרוג ויישום של מערכות GIS, פורטלים ודשבורדים בארגונים ציבוריים ופרטיים.
מערכות GIS הן כלי מרכזי לניהול תשתיות, תכנון עירוני, ניהול נכסים ושיפור שירות לתושב. 
הצלחה מחייבת תכנון נכון, הבנת התהליכים הארגוניים ויכולת לייצר מידע אמין, עדכני וקל לתפעול.
מה כולל הליווי בתחום הGIS: 
• הגדרת צרכים ואפיון מערכת: הבנת תהליכי העבודה, זיהוי שכבות מידע נדרשות, בחירת כלים טכנולוגיים, תשתיות, ארכיטקטורה ונהלי עבודה.  
• בניית פתרונות מידע מרחבי: מערכות פנימיות לאנשי מקצוע, פורטלים ונגישות מידע לתושבים, דשבורדים מרחביים ומודלים לניהול נכסים ותשתיות.  
• אינטגרציה וחיבור למערכות ארגוניות: הגדרת ממשקים, תהליכי סנכרון מידע, אחידות תקנים ותמיכה בתשתיות IT 
• הטמעה והדרכות: הדרכות פרקטיות, פיתוח כלים פשוטים למשתמשים, התאמת המערכת לתפקידים שונים ובניית נהלים לשמירה על מידע חי ומתוחזק. 
• ניהול נתונים ושיפור איכותם: תחזוקת שכבות, בקרת איכות, ניהול Metadata, תקנון נתונים ותמיכה באיסוף נתונים ופרויקטי דיגיטציה.  
• הפקת תובנות וניתוח מרחבי: ניתוחים, דוחות ודשבורדים לתמיכה בקבלת החלטות על תשתיות, תכנון ותפעול. 

למה לבחור בנו? 
ניסיון של מעל 30 שנה ומאות פרויקטים ברחבי הארץ, היכרות עמוקה עם עולם הרשויות והתאגידים, מומחיות ב-ESRI, AutoDesk  ,פתרונות קוד פתוח, וגישה פרקטית שמסתכלת על תהליכי העבודה ומעצימה את הלקוח לאורך זמן.`,
          icon: Database,
          features: ['אינטגרציה עם מערכות', 'פורטלים ודשבורדים', 'ניהול נתונים ו-Metadata']
        },
        {
          title: 'AI & GIS Intelligence',
          description: 'שילוב AI עם GIS לניתוח מגמות, זיהוי דפוסים וחיזוי עומסים ואירועים.',
          extendedDescription: `שילוב AI עם GIS לניתוח מגמות, זיהוי דפוסים וחיזוי עומסים ואירועים.
שילוב בין ניתוח מרחבי לבין בינה מלאכותית יוצר תובנות חכמות לתכנון ותפעול. ארגונים רבים מנצלים רק חלק מהמידע, והחיבור בין GIS ל-AI משנה את תמונת קבלת ההחלטות.
מה כולל השירות? 
• ניתוח נתונים מבוסס AI: Machine Learning ו־Deep Learning  לזיהוי דפוסים בתשתיות, עומסים ורישוי, גילוי חריגות, זיהוי מוקדי תקלות וסיווג נתונים מורכבים. 
• חיזוי (Predictive Analytics): מודלים להבנת התפתחות עומסים על מים, ביוב ותחבורה, צרכים תפעוליים (אחזקה, תאורה, ניקיון), הערכות לפי נתוני אוכלוסייה והדמיות תרחישים. 
• תובנות מרחביות חכמות: זיהוי מגמות, קבלת החלטות על עדיפויות השקעה, תכנון תשתיות וייעול תהליכים. התובנות מוצגות בדשבורדים אינטראקטיביים, מפות נושאיות ומערכות תומכות־החלטה. 
• שילוב נתוני וידאו אנליטיקה ו-AI Spatial:  מיפוי אירועים בזמן אמת, ניטור תנועה והתנהגות משתמשי דרך, תיעוד תשתיות ותחזוקה חזויה.  
• אוטומציה מבוססת מיקום: דוחות אוטומטיים לפי מצב עדכני בשטח, ניהול תהליכי רישוי לפי מיקום, שליפה אוטומטית של נתונים וקישור בין תשתיות קיימות לאירועים ודיווחים.

יתרונות והערך הייחודי:
המידע עובד בשביל הארגון ולא רק נאגר במערכת, זמן קבלת ההחלטות מתקצר, נוצרת ראייה מערכתית שמאפשרת חיזוי בעיות ותכנון מבוסס נתונים. ניסיון של עשרות שנים ב-GIS, שילוב ידע טכנולוגי ותהליכי עבודה, הנגשת מידע מורכב ופיתוח מודלים מותאמים לכל רשות.`,
          icon: Map,
          features: ['Predictive Analytics', 'Spatial AI', 'אוטומציה מבוססת מיקום']
        }
      ]
    },
    projects: {
      badge: 'תיק עבודות',
      title: 'פרויקטים נבחרים',
      subtitle: 'דוגמאות מליווי רשויות, תאגידי מים וארגונים פרטיים — משלב הסקר ועד GIS Active ו-AI.',
      next: 'הבא',
      prev: 'הקודם',
      allCategories: 'הכל',
      items: [
        {
          title: 'ניהול סקר לאיתור עבירות בנייה — עיריית הרצליה',
          category: 'Data',
          categories: ['Data', 'Decision Support'],
          description: 'בחינת שינויים בין צילומי אוויר לאיתור חריגות בנייה, כולל בקרה וטיוב נתונים.',
          image: '/images/survey_management.jpg',
          tags: ['Data', 'QA', 'Planning']
        },
        {
          title: 'הקמת מערכת GIS ארגונית — עיריית באר יעקב',
          category: 'Digital Platform',
          categories: ['Data', 'Digital Platform', 'Smart City'],
          description: 'GIS ארגוני לכל מחלקות העירייה: אפיון, יישום, אינטגרציה והדרכות משתמשים.',
          image: '/images/establish_gis_beer_yaakov.jpg',
          tags: ['GIS', 'Implementation', 'Training']
        },
        {
          title: 'הסבת נתונים והקמת GIS — מי אביבים',
          category: 'Digital Platform',
          categories: ['Data', 'Digital Platform', 'Infrastructure & Asset Value'],
          description: 'הסבת נתונים ממערכת קיימת והקמת GIS ארגוני לניהול עצמאי של נתוני התאגיד.',
          image: '/images/water_establishment_mei_avivim.jpg',
          tags: ['Water Utility', 'Data Migration', 'GIS']
        },
        {
          title: 'יישום GIS Active — עיריית קריית מלאכי',
          category: 'Digital Platform',
          categories: ['Data', 'Digital Platform', 'Smart City'],
          description: 'העצמת משתמשים, חיבור מקורות מידע ובניית מאגר עירוני מתועד בגישת GIS Active.',
          image: '/images/gis_active.jpg',
          tags: ['GIS Active', 'Data Hub', 'Process']
        },
        {
          title: 'סקר איתור תשתיות — מי רמת גן',
          category: 'Infrastructure & Asset Value',
          categories: ['Infrastructure & Asset Value', 'Data'],
          description: 'איתור מלא של קווי מים וביוב, ניקוי מעל 600 ק״מ נתונים ושילוב ב-CRM הארגוני.',
          image: '/images/infrastructure_findings.jpg',
          tags: ['Water Utility', 'Data Collection', 'Integration']
        },
        {
          title: 'ויזואליזציה של נתונים — עיריית אילת',
          category: 'Smart City',
          categories: ['Smart City', 'Decision Support'],
          description: 'הפיכת מידע גולמי לסיפור ברור: מפות, דשבורדים ותרשימים שמזהים מגמות.',
          image: '/images/data_virtualization.jpg',
          tags: ['Dashboards', 'Visualization', 'Insights']
        },
        {
          title: 'סקר הידרנטים — מועצה אזורית עמק חפר',
          category: 'Infrastructure & Asset Value',
          categories: ['Data', 'Decision Support', 'Infrastructure & Asset Value'],
          description: 'ניהול סקר מים באמצעות יישומים ייעודיים לקליטה וניתוח נתונים בזמן אמת.',
          image: '/images/hydrant.jpg',
          tags: ['Water', 'Survey', 'Real-time']
        },
        {
          title: 'בדיקות יציבות לעמודי מאור — עיריית קריית מלאכי',
          category: 'Infrastructure & Asset Value',
          categories: ['Data', 'Decision Support', 'Infrastructure & Asset Value'],
          description: 'ניהול ומעקב אחר סקר עמודי תאורה, כולל ביצוע בדיקות יציבות לזיהוי סיכונים ומניעת קריסת עמודים.',
          image: '/images/traffic_light.jpg',
          tags: ['Infrastructure', 'Safety', 'Survey']
        },
        {
          title: 'הקמת ארכיב דיגיטלי למסמכי הוועדה — מועצה אזורית שדות דן',
          category: 'Urban Planning',
          categories: ['Data', 'Urban Planning'],
          description: 'דיגיטציה מלאה של ארכיון הוועדה, כולל סריקה וארכוב גאוגרפי של אלפי מסמכים.',
          image: '/images/book.jpg',
          tags: ['Archive', 'Digital', 'Planning']
        },
        {
          title: 'יצירת בסיס נתונים של זכויות בנייה וייעודי קרקע — עיריית אילת',
          category: 'Urban Planning',
          categories: ['Data', 'Urban Planning'],
          description: 'ניתוח מאות תוכניות בניין עיר לצורך הקמת מסד נתונים תכנוני מקיף המפרט זכויות בנייה בכל תא שטח.',
          image: '/images/beach_city.jpg',
          tags: ['Planning', 'Database', 'Land Rights']
        },
        {
          title: 'צילומי אוויר ועיבודם — עיריית רמת גן',
          category: 'Data',
          categories: ['Data'],
          description: 'ביצוע פרויקטים של צילומי אוויר והפקת תוצרים גאודטיים מתקדמים, כולל מודלים תלת־ממדיים, צילומים אלכסוניים ותוצרים מרחביים נוספים.',
          image: '/images/top_view_city.jpg',
          tags: ['Aerial', '3D', 'Geodetic']
        },
        {
          title: 'מיפוי דמוגרפי — עיריית קריית מלאכי',
          category: 'Smart City',
          categories: ['Data', 'Smart City', 'Decision Support'],
          description: 'מיפוי אוכלוסיית התושבים וניתוח מגמות והעדפות, כולל בחירת גני ילדים והצטרפות לתנועות נוער.',
          image: '/images/town.jpg',
          tags: ['Demographics', 'Analysis', 'Trends']
        },
        {
          title: 'יישום מערכת לניהול הוועדה לתכנון ובנייה — עיריית בת ים',
          category: 'Urban Planning',
          categories: ['Smart City', 'Decision Support', 'Digital Platform', 'Urban Planning'],
          description: 'ניתוח צרכים ויישום מערכת לניהול הוועדה, כולל הסבת מערכות, טיוב נתונים ושילוב כלים טכנולוגיים מתקדמים.',
          image: '/images/round_roads.jpg',
          tags: ['Planning Committee', 'System', 'Integration']
        },
        {
          title: 'יישום מערכת GIS מנוהלת AI — עיריית אילת',
          category: 'Smart City',
          categories: ['Smart City', 'Decision Support', 'Digital Platform'],
          description: 'שילוב ייחודי וראשון מסוגו של כלי בינה מלאכותית לניהול ותפעול מערכת מידע גאוגרפית (GIS).',
          image: '/images/city_hologram.jpg',
          tags: ['AI', 'GIS', 'Innovation']
        },
        {
          title: 'יישום GMS — Geographic Management Services (עיריית קריית מלאכי)',
          category: 'Digital Platform',
          categories: ['Smart City', 'Decision Support', 'Digital Platform', 'Data'],
          description: 'מתן שירותים כוללים לניהול GIS ארגוני – "הכול בסל אחד", החל מייעוץ ועד ליישום מלא.',
          image: '/images/beach.jpg',
          tags: ['GMS', 'Full Service', 'GIS Management']
        }
      ]
    },
    clients: {
      title: 'הלקוחות שלנו',
      subtitle: 'גאים לשרת את הרשויות והגופים המובילים בישראל',
      items: CLIENT_LOGO_LIST,
      categories: [
        { name: 'רשויות מקומיות', items: MUNICIPAL_LOGOS },
        { name: 'תאגידי מים וביוב וחברות כלכליות', items: WATER_AND_ECON_LOGOS }
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
      emailAddress: 'gil@gzi.co.il',
      phoneNumber: '052-5656246',
      phoneHref: '+972525656246',
      addressText: 'אריאל שרון 8, אור יהודה',
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
        org: 'שם הרשות / שם הארגון',
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
      subtitle: 'GZI Consulting advises and implements information systems for government bodies and companies, focused on GIS and land information (LIS). We bridge AI and geospatial data.',
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
      description1: 'For over 30 years, Gil Zilberman and the GZI team have guided municipalities, planning committees, water utilities, and private firms in building GIS, digitization, and digital innovation. Our strength: connecting business/operational understanding with technology, so systems serve users and deliver business insight. Since 2017 Gil has advised authorities and planning committees on information systems, digitization and surveys, and RFPs for data-collection projects such as urban infrastructure, lighting and stability checks, signage surveys, aerial imagery, and building-violation surveys.',
      descriptionExtendedTitle: 'Methodology & Innovation',
      descriptionExtended: `Methodology & Innovation 
Technology is a means, not the goal. In a crowded solutions market, the challenge is choosing what fits the operational reality, professional requirements, and budget.
Successful implementations rest on service experience, user value, continuous updates, and data accuracy over time. Reliable data turns into insight and a planning/maintenance tool.
Over the years we developed distinct methodologies for implementing information systems.
For RFPs we use a 7-layer tender method where each layer builds the next—ensuring fit and smooth implementation.
In GIS we built the GIS Active approach, making the client a full partner in managing and updating data so the system stays accurate. 
For 30+ years we’ve advised municipalities, planning committees, water utilities, and private companies on GIS and land-information systems.
Deep work with most Israeli municipal bodies honed our unique blend of business-operational understanding and advanced tech.
We connect business needs to technology, understand organizational reality, and craft solutions that balance functionality, budget, and operational capacity. 

What we do:
Scoping and requirements, tailored technical/business solutions, project management for IT/GIS, data analysis and insights, RFP consulting and authoring, vendor selection support, and full implementation/operations support.
Who we serve:
Cities and municipalities, regional/local councils, regional planning committees, water utilities, government ministries, and private firms managing assets and infrastructure.`,
      features: [
        { icon: Shield, title: 'Proven & Unbiased Experience', desc: 'Dozens of authorities and enterprises over three decades.' },
        { icon: Server, title: 'System Integration', desc: 'Simple processes, clear playbooks, and living Consulting.' },
      ],
      imageWidgets: {
        realtime: 'Real-time Analysis',
        server: 'GIS Active'
      }
    },
    stats: [
      { value: '25+', label: 'Years of Excellence' },
      { value: '100+', label: 'Projects' },
      { value: '∞', label: 'Limitless Innovation' },
    ],
    services: {
      badge: 'Expertise',
      title: 'Technology Serving the City',
      subtitle: 'Full envelope: tenders, digitization and mapping, digital innovation, GIS Active, GIS solutions, and AI—so systems actually work.',
      cta: 'Read More',
      back: 'Back to Services',
      items: [
        {
          title: 'Tender consulting & RFP authoring',
          description: 'Client-tailored tenders using a 7-layer method covering functional/technical needs, integrations, timelines, and QA to ensure the right fit.',
          extendedDescription: `Writing an RFP for information systems is a critical stage. A good tender is a detailed work plan: what the org needs, how success is measured, and what to demand from vendors.
Years of experience show a solution that fits one org may not fit another, so the tender must be client-specific, built on deep understanding of processes, capabilities, team, and budget.
We use a 7-layer model—each layer builds the next—to guarantee a high-quality tender and implementation.
We start with current-state analysis and user requirements, then map how the new system fits the org and other systems. That depth lets us detail technical needs and service levels, and set clear expectations with vendors for delivery.

Why the 7-layer method?
• Tailored to the client, not off-the-shelf.
• Reduces risks and errors during implementation.
• System-wide view that prevents surprises later.
• Combines hands-on tech know-how with long public-tender experience.
• Transparent process with the client as a full partner in defining needs and choosing the solution.`,
          icon: FileText,
          features: ['7-layer framework', 'Client-specific fit', 'Vendor selection support']
        },
        {
          title: 'Data collection, digitization & mapping',
          description: 'End-to-end guidance for field surveys—from aerial imagery to field completion—for water, sewer, drainage, lighting, signage, tax, and building deviations.',
          extendedDescription: `Full guidance for water, sewer, drainage, lighting, signage, tax, and building-violation surveys—from definition through field supervision.
Accurate field data is the cornerstone of any quality information system.
We lead organizations through planning and executing data-collection, digitization, and mapping projects—from initial design to delivering standard, reliable data tailored to GIS and enterprise systems.

What’s included?
Requirements and specs: analyze needs, data formats, accuracy, standards, and exact fit to client systems.

Close support through collection and production:
• Surveys and QA for water, sewer, drainage, lighting
• Signage and traffic-sign mapping
• Property-tax (arnona) surveys
• Building-violation detection (Section 116)

Quality control and disciplined project management:
We apply strict QA and manage the project to an agreed work plan, delivering accurate, usable outputs.

We also handle aerials (orthophoto, oblique, 3D) and field completions; QA and normalize layers; and manage delivery into GIS and other systems.`,
          icon: Layers,
          features: ['Precise specs', 'Field QA', 'Digitization & normalization']
        },
        {
          title: 'Digital innovation & process improvement',
          description: 'Automation, AI, video analytics, and smart lighting to improve resident services and infrastructure operations.',
          extendedDescription: `Automation, AI, video analytics, and smart lighting to improve resident service and infrastructure operations.
With heavy workloads, regulation, and rising expectations, digital innovation is essential. We help municipalities adopt tech that fits their capabilities, reality, and budget—with real process improvement and value.

What’s inside digital innovation?
Automation & workflow
Citizen requests, inter-department flows, data sync, faster handling, and major resource savings.
Artificial Intelligence (AI)
GIS data analysis, AI-driven GIS, predictive tools for loads and failures, chatbots and digital services, anomaly detection for better control and operations.
Advanced video analytics
Real-time event detection, traffic and pedestrian monitoring, urban safety, and fusion into GIS and other data stores.
Smart lighting & infrastructure
Remote control, energy management, fault monitoring, sensors (environment, traffic, parking, and more), and efficient asset management.

End-to-end support—from thinking to continuous improvement
We define needs and strategy, survey solutions, craft precise specs, write tenders, support implementation, and drive ongoing measurement and improvement. Deep municipal experience ensures tech, workflows, and systems fit together and create real change.`,
          icon: Cpu,
          features: ['Automation & workflow', 'AI for ops & service', 'Video & smart lighting']
        },
        {
          title: 'GIS implementation (GIS Active)',
          description: 'Implementation that empowers the client to manage and update data with simple tools and clear playbooks.',
          extendedDescription: `GIS Active empowers clients to manage and update data themselves with simple tools and playbooks.
In a complex world with lots of data and regulation, GIS Active makes the authority a full partner so the system is a decision tool—not just storage.

• Active client: simple tools, self-updates, and trusted data; insights, decisions, trends, and dynamic reports.
• “Simplicity as a key”: intuitive system that fits workflows and encourages adoption.
• Long-term accuracy: playbooks, update cycles, QA routines, and clear roles.

What we deliver: needs analysis, technical/operational fit, implementation with practical training, data-update guidelines and playbooks, dashboards and thematic maps, and ongoing QA/maintenance.
Result: current data, faster decisions, easy adoption, and independence with minimal vendor reliance.`,
          icon: Building2,
          features: ['Playbooks & training', 'Ongoing updates', 'Quality control']
        },
        {
          title: 'GIS platforms & spatial solutions',
          description: 'Setup, upgrade, and implementation of GIS, portals, and dashboards for public and private organizations.',
          extendedDescription: `Setup, upgrade, and implementation of GIS, portals, and dashboards for public and private organizations.
GIS is central to infrastructure management, urban planning, asset management, and resident services. Success requires good design, process understanding, and reliable, easy-to-use data.

What’s in our GIS support:
• Needs and system design: workflows, required layers, tech choices, infrastructure, architecture, and procedures.
• Spatial solutions: internal systems for professionals, public portals, dashboards, and asset/infrastructure models.
• Integration: interfaces, data sync, standards alignment, and IT support.
• Implementation and training: practical training, simple tools, role-fit, and procedures to keep data alive.
• Data management and quality: layer maintenance, QA, metadata management, standardization, and support for data collection and digitization projects.
• Insights and spatial analysis: analytics, reports, and dashboards to drive decisions on infrastructure, planning, and operations.

Why us?
30+ years, hundreds of projects, deep municipal/utility experience, ESRI/AutoDesk/open-source expertise, and a practical, work-process view that empowers the client long term.`,
          icon: Database,
          features: ['Enterprise integration', 'Portals & dashboards', 'Data & metadata governance']
        },
        {
          title: 'AI & GIS Intelligence',
          description: 'Blend AI with GIS to detect patterns, predict loads, and automate location-based actions.',
          extendedDescription: `Blending AI with GIS to analyze trends, detect patterns, and predict loads and events.
Spatial analysis + AI yields smarter planning and operations; many organizations use only part of their data and miss these insights.

What’s included:
• AI-driven analysis: Machine Learning and Deep Learning to spot patterns in infrastructure, loads, and permitting; detect anomalies; find failure hot spots; and classify complex data.
• Predictive analytics: models for water/sewer/traffic loads, operational needs (maintenance, lighting, cleaning), population-based forecasts, and scenario simulations.
• Smart spatial insights: trend detection, investment prioritization, infrastructure planning, and process optimization. Presented in interactive dashboards, thematic maps, and decision-support systems.
• Video analytics + AI Spatial: real-time event mapping, traffic/behavior monitoring, infrastructure documentation, and predictive maintenance.
• Location-based automation: automatic reports, location-driven permitting flows, data retrieval, and linking existing infrastructure to events and reports.

Value:
Data works for the organization (not just stored), decision time shrinks, and a system-wide view enables forecasting and data-driven planning. Built on decades of GIS experience, tech/process know-how, and clear, decision-ready models for every client.`,
          icon: Map,
          features: ['Predictive analytics', 'Spatial AI', 'Location-based automation']
        }
      ]
    },
    projects: {
      badge: 'Portfolio',
      title: 'Selected Projects',
      subtitle: 'Work with authorities, water utilities, and private orgs — from surveys to GIS Active and AI.',
      next: 'Next',
      prev: 'Previous',
      allCategories: 'All',
      items: [
        {
          title: 'Building-violation survey — Herzliya Municipality',
          category: 'Data',
          categories: ['Data', 'Decision Support'],
          description: 'Change detection on aerial imagery to spot construction violations, including QA and data curation.',
          image: '/images/survey_management.jpg',
          tags: ['Data', 'QA', 'Planning']
        },
        {
          title: 'Enterprise GIS — Beer Yaakov Municipality',
          category: 'Digital Platform',
          categories: ['Data', 'Digital Platform', 'Smart City'],
          description: 'City-wide GIS: scoping, implementation, integrations, and user training for all departments.',
          image: '/images/establish_gis_beer_yaakov.jpg',
          tags: ['GIS', 'Implementation', 'Training']
        },
        {
          title: 'Data migration & GIS rollout — Mei Avivim',
          category: 'Digital Platform',
          categories: ['Data', 'Digital Platform', 'Infrastructure & Asset Value'],
          description: 'Migrating from a legacy system and deploying an enterprise GIS for independent utility data management.',
          image: '/images/water_establishment_mei_avivim.jpg',
          tags: ['Water Utility', 'Data Migration', 'GIS']
        },
        {
          title: 'GIS Active rollout — Kiryat Malachi',
          category: 'Digital Platform',
          categories: ['Data', 'Digital Platform', 'Smart City'],
          description: 'Implementing GIS Active: empowering users, connecting data sources, and building a documented civic hub.',
          image: '/images/gis_active.jpg',
          tags: ['GIS Active', 'Data Hub', 'Process']
        },
        {
          title: 'Infrastructure survey — Mei Ramat Gan',
          category: 'Infrastructure & Asset Value',
          categories: ['Infrastructure & Asset Value', 'Data'],
          description: 'Full survey of water and sewer lines, cleaning 600km of data, and integrating with the corporate CRM.',
          image: '/images/infrastructure_findings.jpg',
          tags: ['Water Utility', 'Data Collection', 'Integration']
        },
        {
          title: 'Data visualization — Eilat Municipality',
          category: 'Smart City',
          categories: ['Smart City', 'Decision Support'],
          description: 'Turning raw information into clear stories: maps, dashboards, and charts that surface trends.',
          image: '/images/data_virtualization.jpg',
          tags: ['Dashboards', 'Visualization', 'Insights']
        },
        {
          title: 'Hydrant Survey — Emek Hefer Regional Council',
          category: 'Infrastructure & Asset Value',
          categories: ['Data', 'Decision Support', 'Infrastructure & Asset Value'],
          description: 'Managing a water survey using dedicated applications for real-time data collection and analysis.',
          image: '/images/hydrant.jpg',
          tags: ['Water', 'Survey', 'Real-time']
        },
        {
          title: 'Lighting Pole Stability Tests — Kiryat Malachi Municipality',
          category: 'Infrastructure & Asset Value',
          categories: ['Data', 'Decision Support', 'Infrastructure & Asset Value'],
          description: 'Managing and tracking lighting pole surveys, including stability tests to identify risks and prevent pole collapse.',
          image: '/images/traffic_light.jpg',
          tags: ['Infrastructure', 'Safety', 'Survey']
        },
        {
          title: 'Digital Archive for Committee Documents — Sdot Dan Regional Council',
          category: 'Urban Planning',
          categories: ['Data', 'Urban Planning'],
          description: 'Full digitization of the committee archive, including scanning and geographic archiving of thousands of documents.',
          image: '/images/book.jpg',
          tags: ['Archive', 'Digital', 'Planning']
        },
        {
          title: 'Building Rights & Land Use Database — Eilat Municipality',
          category: 'Urban Planning',
          categories: ['Data', 'Urban Planning'],
          description: 'Analyzing hundreds of urban plans to create a comprehensive planning database detailing building rights for every land parcel.',
          image: '/images/beach_city.jpg',
          tags: ['Planning', 'Database', 'Land Rights']
        },
        {
          title: 'Aerial Photography & Processing — Ramat Gan Municipality',
          category: 'Data',
          categories: ['Data'],
          description: 'Executing aerial photography projects and producing advanced geodetic products, including 3D models, oblique imagery, and additional spatial outputs.',
          image: '/images/top_view_city.jpg',
          tags: ['Aerial', '3D', 'Geodetic']
        },
        {
          title: 'Demographic Mapping — Kiryat Malachi Municipality',
          category: 'Smart City',
          categories: ['Data', 'Smart City', 'Decision Support'],
          description: 'Mapping resident population and analyzing trends and preferences, including kindergarten selection and youth movement participation.',
          image: '/images/town.jpg',
          tags: ['Demographics', 'Analysis', 'Trends']
        },
        {
          title: 'Planning & Building Committee System — Bat Yam Municipality',
          category: 'Urban Planning',
          categories: ['Smart City', 'Decision Support', 'Digital Platform', 'Urban Planning'],
          description: 'Needs analysis and system implementation for committee management, including system migration, data curation, and advanced technology integration.',
          image: '/images/round_roads.jpg',
          tags: ['Planning Committee', 'System', 'Integration']
        },
        {
          title: 'AI-Managed GIS System — Eilat Municipality',
          category: 'Smart City',
          categories: ['Smart City', 'Decision Support', 'Digital Platform'],
          description: 'A unique, first-of-its-kind integration of AI tools for managing and operating a geographic information system (GIS).',
          image: '/images/city_hologram.jpg',
          tags: ['AI', 'GIS', 'Innovation']
        },
        {
          title: 'GMS — Geographic Management Services (Kiryat Malachi Municipality)',
          category: 'Digital Platform',
          categories: ['Smart City', 'Decision Support', 'Digital Platform', 'Data'],
          description: 'Comprehensive GIS management services – "All in One Basket", from consulting to full implementation.',
          image: '/images/beach.jpg',
          tags: ['GMS', 'Full Service', 'GIS Management']
        }
      ]
    },
    clients: {
      title: 'Our Clients',
      subtitle: 'Proud to serve Israel\'s leading authorities and organizations',
      items: CLIENT_LOGO_LIST,
      categories: [
        { name: 'Municipalities', items: MUNICIPAL_LOGOS },
        { name: 'Water Utilities & Economic Companies', items: WATER_AND_ECON_LOGOS }
      ],
      bannerTitle: 'Ready to join the success?',
      bannerText: 'Join dozens of authorities that have already made the technological leap.',
      bannerCta: 'Contact Us'
    },
    contact: {
      title: 'Let’s Plan the Future.',
      subtitle: 'Want to hear how our systems can save resources and improve resident service?',
      highlight: 'Coffee is on us.',
      email: 'Email',
      phone: 'Direct Phone',
      address: 'Headquarters',
      emailAddress: 'gil@gzi.co.il',
      phoneNumber: '+972-52-565-6246',
      phoneHref: '+972525656246',
      addressText: '8 Ariel Sharon St, Or Yehuda',
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
