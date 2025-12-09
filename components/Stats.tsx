import React from 'react';
import { CONTENT } from '../constants';
import { useLanguage } from '../LanguageContext';

const Stats: React.FC = () => {
  const { language } = useLanguage();
  const stats = CONTENT[language].stats;

  return (
    <section className="py-16 md:py-24 bg-brand-light border-y border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-3 gap-6 md:gap-12 text-center divide-x divide-x-reverse divide-slate-200 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="pt-4 md:pt-0">
              <div className="text-4xl md:text-5xl lg:text-7xl font-black text-brand-black mb-3 tracking-tight leading-tight">
                {stat.value}
              </div>
              <div className="text-slate-500 font-bold tracking-wide text-xs md:text-sm uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
