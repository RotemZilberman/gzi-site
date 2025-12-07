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
  { he: 'חברה כלכלית ראש העין', en: "Rosh Ha'ayin Economic Company", src: '/companies/water-authorities/Logo-3.png' },
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
      subtitle: 'GZI Consulting מחברת בין בינה מלאכותית למידע גיאוגרפי. אנו בונים את המוח הדיגיטלי של הרשויות המובילות בישראל.',
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
      description1: 'במשך יותר מ־30 שנה גיל זילברמן וצוות GZI מלווים רשויות, ועדות תכנון, תאגידי מים וחברות פרטיות בהקמה ויישום של מערכות GIS, דיגיטציה וחדשנות דיגיטלית. החוזקה: חיבור בין הבנה עסקית-תפעולית ליכולות טכנולוגיות, כדי לבנות מערכות שעובדות באמת. משנת 2017 גיל משמש כיועץ מקצועי לרשויות ולוועדות תכנון בהקמת מערכות מידע, דיגיטציה וסקרים, וכתיבת מכרזים כולל דרישות סעיף 116.',
      descriptionExtendedTitle: 'מתודולוגיה וחדשנות',
      descriptionExtended: `אנחנו מאמינים שטכנולוגיה היא אמצעי, לא מטרה. מודל עבודה מבוסס 7 שכבות מבטיח מכרזים מותאמים-לקוח, בחירת ספק נכונה והטמעה שעומדת בדרישות. בגישת GIS Active הלקוח שותף מלא לניהול ולעדכון המידע, כך שהמערכת נשארת חיה ומדויקת לאורך זמן.

אודות:
במשך יותר מ־30 שנה אני מלווה רשויות מקומיות, ועדות לתכנון ובנייה, תאגידי מים וחברות פרטיות בתכנון, הקמה ויישום של מערכות GIS ופתרונות ניהול מקרקעין. עם ניסיון שנצבר בעבודה עם מרבית הגופים הציבוריים בישראל, פיתחתי מומחיות ייחודית: חיבור בין הבנה עסקית-תפעולית לבין יכולות טכנולוגיות מתקדמות.
ניסיון עמוק במערכות מידע לרשויות: יותר מ-25 שנה בהקמה ותפעול של מערכות מידע בארגונים ממשלתיים, עיריות, אגפי הנדסה וועדות תכנון ובנייה.

משנת 2017 אני משמש כיועץ מקצועי לרשויות ולוועדות תכנון במגוון תחומים: תוכניות עבודה לשדרוג מערכות מידע והרחבת נגישות המידע לתושבים, ליווי ויישום מערכות לניהול ועדות לתכנון ובנייה, הטמעת מערכות מידע וקליטת נתונים, קידום חדשנות דיגיטלית וסקרים מקצועיים (כולל דרישות סעיף 116), ותמיכה בהגשת קולות קוראים ומענקים.

משרד הייעוץ והצוות:
משרד הייעוץ בניהולי מאגד צוות מומחים בעלי ניסיון רב בניהול תהליכים, ארגון מידע וביצוע פרויקטים רחבי היקף בתחום ה־GIS ובמערכות מידע מוניציפליות. החוזקה המרכזית היא היכולת לחבר בין העולם העסקי לצרכים הטכנולוגיים, להבין את המציאות הארגונית, ולבנות פתרון שמאזן בין פונקציונליות, תקציב ויכולת תפעולית.

מה אנחנו עושים:
אפיון והגדרת דרישות, בניית פתרון טכני ועסקי מותאם, ניהול פרויקטים בתחום מערכות מידע ו־GIS, ניתוח מידע והפקת תובנות לקבלת החלטות, ייעוץ וכתיבת מסמכי מכרז, ליווי בבחירת ספקים, ותמיכה מלאה בשלבי ההטמעה והתפעול.

למי אנו מעניקים שירות:
ערים ורשויות מקומיות, מועצות מקומיות ואזוריות, ועדות לתכנון ובנייה מרחביות, תאגידי מים, משרדי ממשלה, וחברות פרטיות העוסקות בניהול נכסים ותשתיות.

הגישה שלנו ברורה:
הטכנולוגיה היא אמצעי לא המטרה. בעולמות רוויי פתרונות, האתגר הוא לבחור את המערכת הנכונה לארגון — זו שמתאימה ליכולת התפעולית, לדרישות המקצועיות ולמסגרת התקציב, וממשיכה לייצר ערך לאורך זמן.`,
      features: [
        { icon: Shield, title: 'ניסיון מוכח ונטול אינטרסים', desc: 'ליווי עשרות רשויות בישראל באובייקטיביות מלאה.' },
        { icon: Server, title: 'אינטגרציה מערכתית', desc: 'חיבור מערכות הנדסה, גבייה ותפעול לפלטפורמה אחת.' },
      ],
      imageWidgets: {
        opt: 'אופטימיזציה עירונית',
        realtime: 'ניתוח נתונים בזמן אמת',
        server: 'GIS Active'
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
      subtitle: 'מעטפת מלאה: מכרזים, דיגיטציה ומיפוי, חדשנות דיגיטלית, GIS Active, פתרונות GIS ו-AI — כדי שהמערכות יעבדו באמת.',
      cta: 'קרא עוד',
      back: 'חזרה לרשימת השירותים',
      items: [
        {
          title: 'ייעוץ וכתיבת מסמכי מכרז',
          description: 'מכרז מותאם-לקוח לפי מודל 7 שכבות: דרישות פונקציונליות, טכניות, ממשקים, לוחות זמנים ובקרת איכות.',
          extendedDescription: `כתיבת מכרז למערכות מידע היא שלב קריטי. מכרז טוב הוא תוכנית עבודה מפורטת שמותאמת לארגון, לא מסמך מדף. אני כותב ומלווה מכרזים תוך הבנה עמוקה של התהליכים, הצוות והתקציב, ומבסס את העבודה על מודל 7 שכבות.

מודל 7 השכבות:
1. בחינת המידע הקיים – תמונת מצב אמיתית של מערכות, תהליכים, חסמים והזדמנויות.
2. הגדרת דרישות מערכת – דרישות פונקציונליות וטכניות בשיתוף מלא עם הלקוח.
3. בחינת ממשקים – בדיקה של כל המערכות הנוגעות לתהליך כדי למנוע "אי בודד" של מידע.
4. כתיבת מסמכי מכרז – רקע, צרכים, לוחות זמנים, מנגנוני הערכה ועבודה משותפת עם יועצי ביטוח ומשפט.
5. פרסום המכרז ובחירת ספק זוכה – מענה לשאלות, ניתוח הצעות והמלצה מנומקת.
6. שלב ההקמה – גיבוש תוכנית עבודה ועמידה ביעדי המערכת.
7. שלב ההטמעה ובקרת האיכות – בדיקות התאמה לדרישות, זיהוי פערים והנחיות לשיפורים.

למה לבחור בשיטה?
מכרז תפור בדיוק ללקוח, צמצום סיכונים וטעויות, ראייה מערכתית שמונעת הפתעות בהמשך, ושילוב בין ידע טכנולוגי וניסיון רב-שנים בעולם המכרזים הציבוריים.`,
          icon: FileText,
          features: ['מודל 7 שכבות', 'התאמה מלאה לארגון', 'ליווי פרסום ובחירת ספק']
        },
        {
          title: 'איסוף נתונים, דיגיטציה ומיפוי',
          description: 'ליווי מלא לסקרי מים, ביוב, ניקוז, מאור, שילוט, ארנונה וחריגות בנייה – מאפיון ועד פיקוח בשטח.',
          extendedDescription: `נתוני שטח מדויקים הם הבסיס לכל מערכת מידע איכותית. אני מלווה ארגונים בהקמה וביצוע של פרויקטים לאיסוף נתונים, דיגיטציה ומיפוי — משלב התכנון ועד אספקת נתונים תקניים, אמינים ומותאמים למערכת ה־GIS והמידע הארגוני.

מה כולל הליווי המקצועי?
- הגדרת דרישות ומפרט טכני: זיהוי הצורך המקצועי, פורמט הנתונים, רמת הדיוק והתקנים המחייבים, וההתאמה למערכות הלקוח.
- ליווי מקצועי לביצוע סקרי שטח: פיקוח ובקרה על תשתיות מים, ביוב, ניקוז, מאור, שילוט, תמרור, סקרי ארנונה וחריגות בנייה (סעיף 116), כולל בדיקות איכות בשטח ועמידה בלוחות זמנים.
- דיגיטציה, עיבוד וקליטת נתונים: ניקוי, תקנון והאחדת שכבות מידע, בדיקות טופולוגיה ורציפות, שילוב במערכות GIS קיימות והתאמה למבני נתונים של ספקים אחרים.
- בקרת איכות סופית והטמעה בארגון: בדיקה מדוקדקת מול המפרט והדרישות המקוריות כדי לוודא שהמידע המדויק נכנס למערכת וניתן באמת לעבוד איתו.

למה זה חשוב?
איכות הנתונים משפיעה ישירות על החלטות תכנוניות, תפעול תשתיות, גביית ארנונה, ניהול נכסים, הצגת מידע לתושבים והעמידה בדרישות חוקיות. הליווי מונע נתונים חסרים או לא תקניים, חוסך עלויות כפולות ומייצר מידע שימושי מהיום הראשון.`,
          icon: Layers,
          features: ['מפרט מדויק', 'פיקוח ובקרת איכות', 'דיגיטציה ותקנון']
        },
        {
          title: 'חדשנות דיגיטלית ושיפור תהליכים',
          description: 'אוטומציה, AI, וידאו אנליטיקה ותאורה חכמה לשיפור שירות לתושב ותפעול תשתיות.',
          extendedDescription: `בעידן של עומסי עבודה, דרישות רגולטוריות וציפייה לשירות איכותי, חדשנות דיגיטלית היא תנאי לתפעול חכם. אני מלווה רשויות מקומיות בהטמעת כלים טכנולוגיים מתקדמים המותאמים ליכולות הארגון, למציאות התפעולית ולתקציב, עם דגש על שיפור תהליכים ולא על "התקנת גאדג'טים".

מה כוללת החדשנות הדיגיטלית?
- מערכות אוטומציה ו-Workflow: אוטומציה לפניות תושב, זרימות עבודה בין אגפים, סנכרון נתונים בין מערכות מידע וחיסכון בזמן ובכוח אדם.
- בינה מלאכותית: ניתוח נתוני GIS, תשתיות וגבייה, כלי חיזוי לעומסים ותקלות, Chatbots ושירותים דיגיטליים לתושב, וכלים לזיהוי חריגות ושיפור בקרה.
- וידאו אנליטיקה מתקדמת: זיהוי אירועים בזמן אמת, ניטור תנועה והולכי רגל, בטיחות וביטחון בעיר, ושילוב המידע במערכות GIS ובמאגרי מידע נוספים.
- תאורה חכמה וניהול תשתיות עירוניות: בקרה מרחוק, שליטה באנרגיה, ניטור תקלות ושילוב חיישנים (סביבה, תנועה, חניה ועוד).

ליווי הרשות בתהליך מלא:
הגדרת הצורך והבנת היעדים האסטרטגיים, בחינת פתרונות טכנולוגיים בשוק, אפיון מפורט המותאם ליכולות הארגון, הכנת מפרטים ומסמכי מכרז, הטמעה בפועל וליווי שוטף, מדידה ושיפור תהליכים לאורך זמן. ניסיון עשיר בליווי רשויות מגוונות, שילוב בין טכנולוגיה לשיפור תהליכי עבודה וראייה מערכתית שמבטיחה שהפתרון משתלב היטב במערכות הקיימות.`,
          icon: Cpu,
          features: ['אוטומציה ו-Workflow', 'AI לשירות ותפעול', 'וידאו ותאורה חכמה']
        },
        {
          title: 'ליווי והטמעת GIS (GIS Active)',
          description: 'הטמעה שמעצימה את הלקוח לנהל ולעדכן מידע בעצמו, עם נהלים וכלים פשוטים.',
          extendedDescription: `ארגונים פועלים בעולם מורכב עם ריבוי מידע ודרישות חוקיות. גישת GIS Active מאפשרת לרשות להיות שותפה מלאה בניהול המידע ולהפוך אותו לכלי החלטה, לא רק לאחסון נתונים.

העקרונות המרכזיים:
- הלקוח כגורם פעיל: עבודה עם כלים פשוטים לניהול המידע, עדכון עצמאי ואמון גבוה בנתונים.
- מערכת שמפיקה תובנות: לא רק אגירת נתונים אלא תמיכה בקבלת החלטות, זיהוי מגמות ודוחות דינמיים.
- פשטות כמפתח: מערכת אינטואיטיבית שמתאימה לתהליכי העבודה ומעודדת אימוץ רחב.
- תחזוקת מידע לאורך זמן: נהלי עבודה, תהליכי עדכון שוטפים, שגרות בקרה וחלוקת אחריות בין תפקידים.

מה כולל הליווי?
אפיון וניתוח צרכים, התאמת פתרון טכני ותפעולי, יישום והטמעה עם הדרכות פרקטיות, הנחיות לעדכון נתונים ובניית נהלי עבודה, דשבורדים ומפות נושאיות, ובקרה ותחזוקה שוטפת. התוצאה: מידע עדכני ותובנות שמאפשרות החלטות נכונות ומהירות, פשטות שמביאה לאימוץ, ועצמאות עם תלות מינימלית בספקים.`,
          icon: Building2,
          features: ['הדרכות ונהלים', 'עדכון רציף', 'בקרה ותחזוקה']
        },
        {
          title: 'מערכות GIS ופתרונות מידע מרחבי',
          description: 'הקמה, שדרוג ויישום של מערכות GIS, פורטלים ודשבורדים בארגונים ציבוריים ופרטיים.',
          extendedDescription: `מערכות GIS הן כלי מרכזי לניהול תשתיות, תכנון עירוני, ניהול נכסים ושיפור שירות לתושב. הצלחה מחייבת תכנון נכון, הבנת התהליכים הארגוניים ויכולת לייצר מידע אמין, עדכני וקל לתפעול.

מה כולל הליווי בתחום ה־GIS?
- הגדרת צרכים ואפיון מערכת: הבנת תהליכי העבודה, זיהוי שכבות מידע נדרשות, בחירת כלים טכנולוגיים, תשתיות, ארכיטקטורה ונהלי עבודה.
- בניית פתרונות מידע מרחבי: מערכות פנימיות לאנשי מקצוע, פורטלים ונגישות מידע לתושבים, דשבורדים מרחביים ומודלים לניהול נכסים ותשתיות.
- אינטגרציה וחיבור למערכות ארגוניות: הגדרת ממשקים, תהליכי סנכרון מידע, אחידות תקנים ותמיכה בתשתיות IT ו־DBA.
- הטמעה והדרכות: הדרכות פרקטיות, פיתוח כלים פשוטים למשתמשים, התאמת המערכת לתפקידים שונים ובניית נהלים לשמירה על מידע חי ומתוחזק.
- ניהול נתונים ושיפור איכותם: תחזוקת שכבות, בקרת איכות, ניהול Metadata, תקנון נתונים ותמיכה באיסוף נתונים ופרויקטי דיגיטציה.
- הפקת תובנות וניתוח מרחבי: ניתוחים, דוחות ודשבורדים לתמיכה בקבלת החלטות על תשתיות, תכנון ותפעול.

למה לבחור בנו?
ניסיון של מעל 30 שנה ומאות פרויקטים ברחבי הארץ, היכרות עמוקה עם עולם הרשויות והתאגידים, מומחיות ב-ESRI, AutoDesk ופתרונות קוד פתוח, וגישה פרקטית שמסתכלת על תהליכי העבודה ומעצימה את הלקוח לאורך זמן.`,
          icon: Database,
          features: ['אינטגרציה עם מערכות', 'פורטלים ודשבורדים', 'ניהול נתונים ו-Metadata']
        },
        {
          title: 'AI & GIS Intelligence',
          description: 'שילוב AI עם GIS לניתוח מגמות, זיהוי דפוסים וחיזוי עומסים ואירועים.',
          extendedDescription: `שילוב בין ניתוח מרחבי לבין בינה מלאכותית יוצר תובנות חכמות לתכנון ותפעול. ארגונים רבים מנצלים רק חלק מהמידע, והחיבור בין GIS ל-AI משנה את תמונת קבלת ההחלטות.

מה כולל השירות?
- ניתוח נתונים מבוסס AI: Machine Learning ו־Deep Learning לזיהוי דפוסים בתשתיות, עומסים ורישוי, גילוי חריגות, זיהוי מוקדי תקלות וסיווג נתונים מורכבים.
- חיזוי (Predictive Analytics): מודלים להבנת התפתחות עומסים על מים, ביוב ותחבורה, צרכים תפעוליים (אחזקה, תאורה, ניקיון), הערכות לפי נתוני אוכלוסייה והדמיות תרחישים.
- תובנות מרחביות חכמות: זיהוי מגמות, קבלת החלטות על עדיפויות השקעה, תכנון תשתיות וייעול תהליכים. התובנות מוצגות בדשבורדים אינטראקטיביים, מפות נושאיות ומערכות תומכות־החלטה.
- שילוב נתוני וידאו אנליטיקה ו-AI Spatial: מיפוי אירועים בזמן אמת, ניטור תנועה והתנהגות משתמשי דרך, תיעוד תשתיות ותחזוקה חזויה.
- אוטומציה מבוססת מיקום: דוחות אוטומטיים לפי מצב עדכני בשטח, ניהול תהליכי רישוי לפי מיקום, שליפה אוטומטית של נתונים וקישור בין תשתיות קיימות לאירועים ודיווחים.

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
      items: [
        {
          title: 'ניהול סקר לאיתור עבירות בנייה — עיריית הרצליה',
          category: 'Data',
          description: 'בחינת שינויים בין צילומי אוויר לאיתור חריגות בנייה, כולל בקרה וטיוב נתונים.',
          image: '/images/survey_management.jpg',
          tags: ['Data', 'QA', 'Planning']
        },
        {
          title: 'הקמת מערכת GIS ארגונית — עיריית באר יעקב',
          category: 'Application',
          description: 'GIS ארגוני לכל מחלקות העירייה: אפיון, יישום, אינטגרציה והדרכות משתמשים.',
          image: '/images/establish_gis_beer_yaakov.jpg',
          tags: ['GIS', 'Implementation', 'Training']
        },
        {
          title: 'הסבת נתונים והקמת GIS — מי אביבים',
          category: 'Application',
          description: 'הסבת נתונים ממערכת קיימת והקמת GIS ארגוני לניהול עצמאי של נתוני התאגיד.',
          image: '/images/water_establishment_mei_avivim.jpg',
          tags: ['Water Utility', 'Data Migration', 'GIS']
        },
        {
          title: 'יישום GIS Active — עיריית קריית מלאכי',
          category: 'Application',
          description: 'העצמת משתמשים, חיבור מקורות מידע ובניית מאגר עירוני מתועד בגישת GIS Active.',
          image: '/images/gis_active.jpg',
          tags: ['GIS Active', 'Data Hub', 'Process']
        },
        {
          title: 'ויזואליזציה של נתונים — עיריית אילת',
          category: 'Data',
          description: 'הפיכת מידע גולמי לסיפור ברור: מפות, דשבורדים ותרשימים שמזהים מגמות.',
          image: '/images/data_virtualization.jpg',
          tags: ['Dashboards', 'Visualization', 'Insights']
        },
        {
          title: 'סקר איתור תשתיות — מי רמת גן',
          category: 'Data & Application',
          description: 'איתור מלא של קווי מים וביוב, ניקוי מעל 600 ק״מ נתונים ושילוב ב-CRM הארגוני.',
          image: '/images/infrastructure_findings.jpg',
          tags: ['Water Utility', 'Data Collection', 'Integration']
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
      subtitle: 'GZI Consulting bridges Artificial Intelligence and Geographic Information. We build the digital brain of Israel\'s leading municipalities.',
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
      description1: 'For over 30 years, Gil Zilberman and the GZI team have guided municipalities, planning committees, water utilities, and private firms to build GIS, digitization, and innovation programs that truly work.',
      descriptionExtendedTitle: 'Methodology & Innovation',
      descriptionExtended: `Technology is the means, not the goal. We use a 7-layer model for tenders and implementation, and GIS Active to keep the client an active owner of data and workflows so Consulting stay accurate and alive.

We define needs, write executable specs, run tenders and vendor selection, and implement GIS, automation, AI, video analytics, and smart lighting — all tied to real operational needs and measurable outcomes.`,
      features: [
        { icon: Shield, title: 'Proven & Unbiased Experience', desc: 'Dozens of authorities and enterprises over three decades.' },
        { icon: Server, title: 'System Integration', desc: 'Simple processes, clear playbooks, and living Consulting.' },
      ],
      imageWidgets: {
        opt: 'Urban Optimization',
        realtime: 'Real-time Analysis',
        server: 'GIS Active'
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
      subtitle: 'Tenders, digitization and mapping, digital innovation, GIS Active, spatial solutions, and AI — one partner to make Consulting work.',
      cta: 'Read More',
      back: 'Back to Services',
      items: [
        {
          title: 'Tender consulting & RFP authoring',
          description: 'Client-tailored tenders using a 7-layer model: functional and technical needs, integrations, timelines, and QA.',
          extendedDescription: 'Define needs, write precise and executable requirements, publish and support vendor selection. The goal: a document the organization understands and can implement without surprises.',
          icon: FileText,
          features: ['7-layer framework', 'Client-specific fit', 'Vendor selection support']
        },
        {
          title: 'Data collection, digitization & mapping',
          description: 'Full guidance for surveys (water, sewer, drainage, lighting, signage, tax, building deviations) from specs to field QA.',
          extendedDescription: 'Technical specs, contractor oversight, on-site quality checks, cleaning and standardizing layers, topology tests, and GIS ingestion. Focus: standardized, reliable data.',
          icon: Layers,
          features: ['Precise specs', 'Field QA', 'Digitization & normalization']
        },
        {
          title: 'Digital innovation & process improvement',
          description: 'Automation, AI, video analytics, and smart lighting to improve citizen services and infrastructure operations.',
          extendedDescription: 'Need-driven solution selection, specs, and implementation support: RPA/Workflow, predictive analytics, sensors and cameras, and smart lighting for efficiency and safety.',
          icon: Cpu,
          features: ['Automation & workflow', 'AI for ops & service', 'Video & smart lighting']
        },
        {
          title: 'GIS implementation (GIS Active)',
          description: 'Implementation that empowers the client to manage and update data with simple tools and clear playbooks.',
          extendedDescription: 'GIS Active: training, procedures, ongoing updates, dashboards, and insights. Ensures the system stays accurate and supports decisions over time.',
          icon: Building2,
          features: ['Playbooks & training', 'Ongoing updates', 'Quality control']
        },
        {
          title: 'GIS platforms & spatial solutions',
          description: 'Setup, upgrades, and implementation of GIS, portals, and dashboards for public and private organizations.',
          extendedDescription: 'Define needs, choose tools, integrate with permitting, tax, water, and CRM Consulting; train users and set maintenance and data governance. Goal: effective, simple, accurate GIS.',
          icon: Database,
          features: ['Enterprise integration', 'Portals & dashboards', 'Data & metadata governance']
        },
        {
          title: 'AI & GIS Intelligence',
          description: 'Blend AI with GIS to detect patterns, predict loads, and automate location-based actions.',
          extendedDescription: 'Machine Learning and Deep Learning for spatial analysis, scenario forecasting, video-analytics fusion, and decision-ready dashboards. Data that turns into insight and action.',
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
      items: [
        {
          title: 'Building-violation survey — Herzliya Municipality',
          category: 'Data',
          description: 'Change detection on aerial imagery to spot construction violations, including QA and data curation.',
          image: '/images/survey_management.jpg',
          tags: ['Data', 'QA', 'Planning']
        },
        {
          title: 'Enterprise GIS — Beer Yaakov Municipality',
          category: 'Application',
          description: 'City-wide GIS: scoping, implementation, integrations, and user training for all departments.',
          image: '/images/establish_gis_beer_yaakov.jpg',
          tags: ['GIS', 'Implementation', 'Training']
        },
        {
          title: 'Data migration & GIS rollout — Mei Avivim',
          category: 'Application',
          description: 'Migrating from a legacy system and deploying an enterprise GIS for independent utility data management.',
          image: '/images/water_establishment_mei_avivim.jpg',
          tags: ['Water Utility', 'Data Migration', 'GIS']
        },
        {
          title: 'GIS Active rollout — Kiryat Malachi',
          category: 'Application',
          description: 'Implementing GIS Active: empowering users, connecting data sources, and building a documented civic hub.',
          image: '/images/gis_active.jpg',
          tags: ['GIS Active', 'Data Hub', 'Process']
        },
        {
          title: 'Data visualization — Eilat Municipality',
          category: 'Data',
          description: 'Turning raw information into clear stories: maps, dashboards, and charts that surface trends.',
          image: '/images/data_virtualization.jpg',
          tags: ['Dashboards', 'Visualization', 'Insights']
        },
        {
          title: 'Infrastructure survey — Mei Ramat Gan',
          category: 'Data & Application',
          description: 'Full survey of water and sewer lines, cleaning 600km of data, and integrating with the corporate CRM.',
          image: '/images/infrastructure_findings.jpg',
          tags: ['Water Utility', 'Data Collection', 'Integration']
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
      subtitle: 'Want to hear how our Consulting can save resources and improve resident service?',
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
