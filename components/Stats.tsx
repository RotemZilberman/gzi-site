import React from 'react';
import { CONTENT } from '../constants';
import { useLanguage } from '../LanguageContext';

const Stats: React.FC = () => {
  const { language } = useLanguage();
  const stats = CONTENT[language].stats;

  return (
    <section className="py-24 bg-brand-light border-y border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-slate-200">
          {stats.map((stat, index) => (
            <div key={index} className="pt-8 md:pt-0">
              <div className="text-5xl lg:text-7xl font-black text-brand-black mb-3 tracking-tight">
                {stat.value}
              </div>
              <div className="text-slate-500 font-bold tracking-wide text-sm uppercase">
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