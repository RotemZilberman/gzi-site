import React from 'react';
import { CONTENT } from '../constants';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Projects: React.FC = () => {
  const { language, dir } = useLanguage();
  const t = CONTENT[language].projects;
  const isRtl = dir === 'rtl';

  return (
    <section id="projects" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-violet-100/50 rounded-full blur-[100px]"></div>
         <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-cyan-100/50 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-violet-600 uppercase mb-3">{t.badge}</h2>
            <h3 className="text-4xl font-black text-slate-900">{t.title}</h3>
            <p className="text-lg text-slate-600 mt-4 font-light">
              {t.subtitle}
            </p>
          </div>
          
          <button className="group flex items-center gap-2 text-violet-700 font-bold hover:text-violet-900 transition-colors">
            {t.ctaAll}
            <ArrowLeft className={`w-5 h-5 transition-transform ${isRtl ? 'group-hover:-translate-x-1' : 'rotate-180 group-hover:translate-x-1'}`} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((project, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-violet-100 transition-all duration-500 border border-slate-100 flex flex-col h-full">
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20">
                   <span className="px-3 py-1 bg-white/90 backdrop-blur text-xs font-bold text-violet-700 rounded-full shadow-lg">
                     {project.category}
                   </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-violet-700 transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-100">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-md uppercase tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
