import React from 'react';
import { CONTENT } from '../constants';
import { useLanguage } from '../LanguageContext';

const Stats: React.FC = () => {
  const { language } = useLanguage();
  const stats = CONTENT[language].stats;

  return (
    <section className="py-20 bg-slate-900 text-white border-y border-slate-800 relative overflow-hidden">
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-900/60 via-slate-900 to-transparent animate-spin-slow origin-center"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-slate-800/50">
          {stats.map((stat, index) => (
            <div key={index} className="pt-8 md:pt-0 group cursor-default">
              <div className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-2 transform transition-transform duration-500 group-hover:scale-110 group-hover:from-cyan-300 group-hover:to-violet-400">
                {stat.value}
              </div>
              <div className="text-cyan-400 font-medium tracking-wide text-lg group-hover:text-white transition-colors">
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
