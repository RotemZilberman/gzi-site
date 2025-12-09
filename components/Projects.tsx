import React, { useEffect, useState } from 'react';
import { CONTENT } from '../constants';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { useIsMobile } from '../utils/useIsMobile';

const Projects: React.FC = () => {
  const { language, dir } = useLanguage();
  const t = CONTENT[language].projects;
  const isRtl = dir === 'rtl';
  const isMobile = useIsMobile();

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(t.items.length / itemsPerPage);

  useEffect(() => {
    setCurrentIndex((prev) => {
      const slideIndex = Math.floor(prev / itemsPerPage);
      const clampedSlide = Math.min(slideIndex, Math.max(totalSlides - 1, 0));
      return clampedSlide * itemsPerPage;
    });
  }, [itemsPerPage, totalSlides]);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      (prev + itemsPerPage >= t.items.length) ? 0 : prev + itemsPerPage
    );
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - itemsPerPage < 0 ? Math.max(t.items.length - itemsPerPage, 0) : prev - itemsPerPage));
  };

  const visibleProjects = t.items.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section id="projects" className="pt-24 pb-16 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold tracking-widest text-violet-600 uppercase mb-4">{t.badge}</h2>
            <h3 className="text-4xl font-black text-brand-black">{t.title}</h3>
            <p className="text-lg text-slate-600 mt-4 max-w-xl">
              {t.subtitle}
            </p>
          </div>
        </div>

        <div className="relative px-4 md:px-8">
          <button 
            onClick={prevSlide}
            className="hidden md:flex items-center justify-center absolute top-36 left-[-18px] lg:left-[-26px] text-slate-400 hover:text-brand-black transition-colors z-10"
            aria-label="Previous projects"
          >
            {isRtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
          </button>
          <button 
            onClick={nextSlide}
            className="hidden md:flex items-center justify-center absolute top-36 right-[-18px] lg:right-[-26px] text-slate-400 hover:text-brand-black transition-colors z-10"
            aria-label="Next projects"
          >
            {isRtl ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
          </button>

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
          <div className="flex md:hidden justify-center gap-2 mt-6">
            {Array.from({ length: totalSlides }).map((_, idx) => {
              const isActive = idx === Math.floor(currentIndex / itemsPerPage);
              return (
                <button
                  key={`dot-${idx}`}
                  onClick={() => setCurrentIndex(idx * itemsPerPage)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${isActive ? 'w-6 bg-brand-black' : 'w-2.5 bg-slate-300'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
