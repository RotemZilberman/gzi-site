import React from 'react';
import { CONTENT } from '../constants';
import { Building2, Landmark } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Clients: React.FC = () => {
  const { language } = useLanguage();
  const t = CONTENT[language].clients;

  return (
    <section id="clients" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">{t.title}</h2>
          <p className="text-lg text-slate-600">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {t.categories.map((category, idx) => (
            <div key={idx} className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <h3 className="text-xl font-bold text-violet-800 mb-8 flex items-center gap-2">
                {idx === 0 ? <Building2 className="w-5 h-5"/> : <Landmark className="w-5 h-5"/>}
                {category.name}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.items.map((client, clientIdx) => {
                  const label = language === 'he' ? client.he : client.en;
                  
                  return (
                    <div key={clientIdx} className="aspect-[4/3] bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 flex flex-col items-center justify-center p-4 text-center hover:border-violet-300 hover:shadow-lg transition-all group cursor-default overflow-hidden">
                      <div className="w-24 h-20 mb-2 flex items-center justify-center relative">
                        <img 
                          src={client.src}
                          alt={label}
                          className="max-w-full max-h-full object-contain filter grayscale-[20%] brightness-95 contrast-110 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-300"
                          style={{ mixBlendMode: 'multiply' }}
                        />
                      </div>
                      <span className="sr-only">{label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-violet-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 bg-tech-grid opacity-20"></div>
           <div className="relative z-10">
             <h3 className="text-2xl md:text-3xl font-bold mb-4">{t.bannerTitle}</h3>
             <p className="text-violet-100 mb-8 max-w-xl mx-auto">{t.bannerText}</p>
             <a href="#contact" className="inline-block bg-white text-violet-700 px-8 py-3 rounded-full font-bold hover:bg-violet-50 transition-colors shadow-lg">
               {t.bannerCta}
             </a>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Clients;
