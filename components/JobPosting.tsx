import React from 'react';
import { Briefcase, CheckCircle, Star, Mail, MapPin } from 'lucide-react';

const requirements = [
  'ניסיון של 2–5 שנים ביישום מערכות GIS.',
  'ניסיון בעבודה עם תוכנות GIS, בדגש על מוצרי ESRI ו-QGIS – יתרון משמעותי.',
  'יכולת ניהול ותיאום משימות ופרויקטים.',
  'יכולת עבודה במקביל על מספר משימות ופרויקטים.',
  'סדר, דיוק ויכולת ירידה לפרטים.',
  'יכולת למידה עצמאית גבוהה ומוטיבציה להתפתח מקצועית.',
];

const advantages = [
  'ייעודי קרקע. ניתוח זכויות בנייה.',
  'עבודה מול גופי תכנון ורשויות מקומיות.',
];

const JobPosting: React.FC = () => {
  return (
    <section dir="rtl" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">

        {/* Header badge */}
        <div className="flex justify-center mb-10">
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-violet-800 text-white text-sm font-bold px-5 py-2 rounded-full shadow-lg shadow-violet-300/40 tracking-wide">
            <Briefcase className="w-4 h-4" />
            דרושים – הצטרפו לצוות
          </span>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">

          {/* Card top accent */}
          <div className="h-1 bg-gradient-to-r from-violet-500 to-violet-800" />

          <div className="p-8 md:p-12">

            {/* Job title */}
            <div className="mb-6">
              <h2 className="text-3xl font-black text-slate-900 leading-tight">
                דרוש/ה מיישם/ת <span className="text-violet-700">GIS</span>
              </h2>
              <div className="flex flex-wrap items-center gap-3 mt-3 text-sm text-slate-400 font-medium">
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> ישראל</span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span>משרה מלאה</span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span>2–5 שנות ניסיון</span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-slate-100 mb-8" />

            {/* Intro */}
            <p className="text-slate-600 text-base leading-relaxed mb-8 font-light">
              בואו להצטרף לחברת בוטיק המתמחה במתן שירותי GIS מתקדמים ומגוונים ללקוחות רבים במשק.{' '}
              אנו מחפשים מיישם/ת GIS להשתלבות בעבודה מאתגרת ומרתקת בחזית הטכנולוגיה, הכוללת ניהול והובלת פרויקטים,
              ניהול ותחזוקת מאגרי מידע גיאוגרפיים, קליטת נתונים, ביצוע בקרות איכות והפקת תוצרים מקצועיים.
            </p>

            {/* Requirements */}
            <div className="mb-8">
              <h3 className="text-base font-bold text-slate-800 mb-4 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-slate-500" />
                דרישות התפקיד
              </h3>
              <ul className="space-y-3">
                {requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            {/* Advantages */}
            <div className="bg-slate-50 rounded-2xl p-6">
              <h3 className="text-base font-bold text-violet-700 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm border border-slate-100">
                  <Star className="w-4 h-4 text-violet-600" />
                </div>
                יתרון לבעלי ניסיון בתחומים הבאים
              </h3>
              <ul className="space-y-2">
                {advantages.map((adv, i) => (
                  <li key={i} className="flex items-start gap-3 text-violet-600 text-sm leading-relaxed font-medium">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                    {adv}
                  </li>
                ))}
              </ul>
            </div>

            {/* Closing pitch + CTA */}
            <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-slate-600 text-sm leading-relaxed font-light max-w-sm">
                אם אתם מחפשים סביבת עבודה מקצועית, מגוונת ודינמית, ורוצים להיות חלק מצוות איכותי ומשפחתי –{' '}
                <span className="font-bold text-violet-700">נשמח להכיר אתכם.</span>
              </p>

              <a
                href="mailto:Job@gzi.co.il"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-violet-800 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-violet-400/30 hover:-translate-y-0.5 transition-all text-sm"
              >
                <Mail className="w-4 h-4" />
                שלח/י קורות חיים
              </a>
            </div>

          </div>
        </div>

        <p className="text-center text-xs text-slate-400 mt-6">משרה זו פונה לנשים וגברים כאחד</p>
      </div>
    </section>
  );
};

export default JobPosting;
