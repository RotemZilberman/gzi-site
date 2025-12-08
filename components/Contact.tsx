import React, { useState } from 'react';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { CONTENT } from '../constants';

const Contact: React.FC = () => {
  const { language, dir } = useLanguage();
  const t = CONTENT[language].contact;
  const isRtl = dir === 'rtl';
  const formSubmitEndpoint = 'https://formsubmit.co/ajax/3fdf0371138a7847ec88014155054eec';
  const [formData, setFormData] = useState({ name: '', org: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setStatusMessage('');

    try {
      const response = await fetch(formSubmitEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          organization: formData.org,
          email: formData.email,
          _replyto: formData.email,
          message: formData.message,
          _subject: 'New meeting request from gzi-site',
          _template: 'table',
          _autoresponse: language === 'he' 
            ? 'אנחנו נרגשים לדבר איתך! נחזור אליך בהקדם ונתאם פגישה.' 
            : 'We are very excited to talk with you. We will meet soon!',
        }),
      });

      const result = await response.json();

      if (!response.ok || result.success === 'false') {
        const message = result?.message || (language === 'he' ? 'שליחה נכשלה, נסה שוב בעוד רגע.' : 'Send failed, please try again shortly.');
        setStatus('error');
        setStatusMessage(message);
        return;
      }

      setStatus('success');
      setStatusMessage(language === 'he' ? 'הבקשה נשלחה! בדוק את המייל לקבלת אישור.' : 'Request sent! Check your email for confirmation.');
      setFormData({ name: '', org: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
      setStatusMessage(language === 'he' ? 'שליחה נכשלה, נסה שוב בעוד רגע.' : 'Send failed, please try again shortly.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Gradient Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-violet-50/50 to-transparent -z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Info Side */}
          <div className="lg:w-1/2">
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
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t.addressText)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-600 hover:text-violet-600 underline decoration-slate-200 hover:decoration-violet-300 transition-colors"
                  >
                    {t.addressText}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-1/2">
            <form 
              className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50"
              onSubmit={handleSubmit}
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-6">{t.formTitle}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-slate-700">{t.labels.name}</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={formData.name}
                    onChange={handleChange('name')}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all bg-slate-50 focus:bg-white" 
                    placeholder={t.placeholders.name} 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="org" className="text-sm font-bold text-slate-700">{t.labels.org}</label>
                  <input 
                    type="text" 
                    id="org" 
                    value={formData.org}
                    onChange={handleChange('org')}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all bg-slate-50 focus:bg-white" 
                    placeholder={t.placeholders.org} 
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label htmlFor="email" className="text-sm font-bold text-slate-700">{t.labels.email}</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  value={formData.email}
                  onChange={handleChange('email')}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all bg-slate-50 focus:bg-white" 
                  placeholder={t.placeholders.email} 
                />
              </div>

              <div className="space-y-2 mb-8">
                <label htmlFor="message" className="text-sm font-bold text-slate-700">{t.labels.message}</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={handleChange('message')}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all bg-slate-50 focus:bg-white resize-none" 
                  placeholder={t.placeholders.message}
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="w-full py-4 bg-gradient-to-r from-violet-600 to-violet-800 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-violet-500/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (language === 'he' ? 'שולח...' : 'Sending...') : t.labels.submit}
                <Send className={`w-4 h-4 transition-transform ${isRtl ? 'group-hover:-translate-x-1' : 'rotate-180 group-hover:translate-x-1'}`} />
              </button>

              {statusMessage && (
                <p className={`mt-4 font-semibold ${status === 'success' ? 'text-green-700' : 'text-red-600'}`}>
                  {statusMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
