import React from 'react';
import { Send, MapPin, Mail, Phone, CalendarCheck } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { CONTENT } from '../constants';

const Contact: React.FC = () => {
  const { language, dir } = useLanguage();
  const t = CONTENT[language].contact;
  const isRtl = dir === 'rtl';

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Gradient Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-violet-50/50 to-transparent -z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Info Side */}
          <div className="lg:w-1/2">
            <div className="inline-block p-3 rounded-2xl bg-violet-100 text-violet-700 mb-6">
               <CalendarCheck className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-6">{t.title}</h2>
            <p className="text-lg text-slate-600 mb-12 font-light leading-relaxed">
              {t.subtitle} <br/>
              <span className="font-bold text-violet-700">{t.highlight}</span>
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center border border-slate-100 group-hover:border-violet-300 transition-colors">
                  <Mail className="w-5 h-5 text-slate-500 group-hover:text-violet-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{t.email}</h4>
                  <a href={`mailto:${t.emailAddress}`} className="text-slate-600 hover:text-violet-600 transition-colors">{t.emailAddress}</a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center border border-slate-100 group-hover:border-violet-300 transition-colors">
                  <Phone className="w-5 h-5 text-slate-500 group-hover:text-violet-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{t.phone}</h4>
                  <a href={`tel:${t.phoneHref || t.phoneNumber}`} className="text-slate-600 hover:text-violet-600 transition-colors">{t.phoneNumber}</a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center border border-slate-100 group-hover:border-violet-300 transition-colors">
                  <MapPin className="w-5 h-5 text-slate-500 group-hover:text-violet-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{t.address}</h4>
                  <p className="text-slate-600">{t.addressText}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-1/2">
            <form 
              className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50"
              action={`mailto:${t.emailAddress}?subject=${encodeURIComponent('meeting request from gzi site')}`}
              method="post"
              encType="text/plain"
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-6">{t.formTitle}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-slate-700">{t.labels.name}</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all bg-slate-50 focus:bg-white" placeholder={t.placeholders.name} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="org" className="text-sm font-bold text-slate-700">{t.labels.org}</label>
                  <input type="text" id="org" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all bg-slate-50 focus:bg-white" placeholder={t.placeholders.org} />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label htmlFor="email" className="text-sm font-bold text-slate-700">{t.labels.email}</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all bg-slate-50 focus:bg-white" placeholder={t.placeholders.email} />
              </div>

              <div className="space-y-2 mb-8">
                <label htmlFor="message" className="text-sm font-bold text-slate-700">{t.labels.message}</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all bg-slate-50 focus:bg-white resize-none" placeholder={t.placeholders.message}></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-gradient-to-r from-violet-600 to-violet-800 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-violet-500/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
                {t.labels.submit}
                <Send className={`w-4 h-4 transition-transform ${isRtl ? 'group-hover:-translate-x-1' : 'rotate-180 group-hover:translate-x-1'}`} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
