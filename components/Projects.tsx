import React, { useState } from 'react';
import { CONTENT } from '../constants';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Projects: React.FC = () => {
  const { language, dir } = useLanguage();
  const t = CONTENT[language].projects;
  const isRtl = dir === 'rtl';

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      (prev + itemsPerPage >= t.items.length) ? 0 : prev + itemsPerPage
    );
  };

  const visibleProjects = t.items.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section id="projects" className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold tracking-widest text-violet-600 uppercase mb-4">{t.badge}</h2>
            <h3 className="text-4xl font-black text-brand-black">{t.title}</h3>
            <p className="text-lg text-slate-600 mt-4 max-w-xl">
              {t.subtitle}
            </p>
          </div>
          
          <div className="flex items-center gap-3">
             <button 
               onClick={nextSlide}
               className="p-4 rounded-full bg-brand-black text-white hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
             >
               {isRtl ? <ArrowLeft size={24} /> : <ArrowRight size={24} />}
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 min-h-[500px]">
          {visibleProjects.map((project, index) => (
            <div key={`${currentIndex}-${index}`} className="flex flex-col gap-6 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              {/* Image Container - Clean, no heavy borders */}
              <div className="relative h-72 overflow-hidden rounded-2xl bg-slate-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 z-20">
                   <span className="px-3 py-1 bg-white text-xs font-bold text-brand-black rounded-full shadow-sm">
                     {project.category}
                   </span>
                </div>
              </div>

              {/* Content - Editorial Style */}
              <div className="flex flex-col flex-grow">
                <h4 className="text-2xl font-bold text-brand-black mb-2 min-h-[72px]">
                  {project.title}
                </h4>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed min-h-[72px]">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
