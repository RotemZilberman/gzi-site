import React from 'react';
import { CONTENT } from '../constants';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Services: React.FC = () => {
  const { language, dir } = useLanguage();
  const t = CONTENT[language].services;
  const isRtl = dir === 'rtl';

  return (
    <section id="services" className="py-28 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest text-violet-600 uppercase mb-3">{t.badge}</h2>
          <h3 className="text-4xl font-black text-slate-900 mb-6">{t.title}</h3>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((service, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-white rounded-2xl border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-200/50 hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Tech Hover Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 to-cyan-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Decorative Top Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-violet-600 transition-colors duration-500 group-hover:rotate-6 shadow-sm group-hover:shadow-violet-300">
                  <service.icon className="w-7 h-7 text-slate-600 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </div>
                
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-violet-800 transition-colors">
                  {service.title}
                </h4>
                
                <p className="text-slate-600 mb-6 leading-relaxed text-sm group-hover:text-slate-700">
                  {service.description}
                </p>

                <ul className="space-y-3 pt-6 border-t border-slate-100">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-500 group-hover:text-slate-700 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Learn More Text */}
                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-violet-600 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {t.cta}
                  <ArrowLeft size={16} className={`transition-transform ${isRtl ? '' : 'rotate-180'}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
