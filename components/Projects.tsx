import React, { useEffect, useRef, useState, useMemo } from 'react';
import { CONTENT } from '../constants';
import { ArrowRight, ArrowLeft, Filter, X, Sparkles } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { useIsMobile } from '../utils/useIsMobile';

// Unified elegant color scheme for all categories
const categoryStyle = { 
  bg: 'bg-slate-50', 
  text: 'text-slate-700', 
  border: 'border-slate-200', 
  activeBg: 'bg-brand-black' 
};

const Projects: React.FC = () => {
  const { language, dir } = useLanguage();
  const t = CONTENT[language].projects;
  const isRtl = dir === 'rtl';
  const isMobile = useIsMobile();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  // Extract all unique categories from projects
  const allCategories = useMemo(() => {
    const categoriesSet = new Set<string>();
    t.items.forEach(project => {
      if (project.categories) {
        project.categories.forEach(cat => categoriesSet.add(cat));
      }
    });
    return Array.from(categoriesSet).sort();
  }, [t.items]);

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (!selectedCategory) return t.items;
    return t.items.filter(project => 
      project.categories?.includes(selectedCategory)
    );
  }, [t.items, selectedCategory]);

  const itemsPerPage = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(filteredProjects.length / itemsPerPage);

  // Reset to first slide when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  useEffect(() => {
    setCurrentIndex((prev) => {
      const slideIndex = Math.floor(prev / itemsPerPage);
      const clampedSlide = Math.min(slideIndex, Math.max(totalSlides - 1, 0));
      return clampedSlide * itemsPerPage;
    });
  }, [itemsPerPage, totalSlides]);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      (prev + itemsPerPage >= filteredProjects.length) ? 0 : prev + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - itemsPerPage < 0 ? Math.max(filteredProjects.length - itemsPerPage, 0) : prev - itemsPerPage));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return;
    const touch = e.touches[0];
    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isMobile) return;
    const startX = touchStartX.current;
    const startY = touchStartY.current;
    touchStartX.current = null;
    touchStartY.current = null;
    if (startX === null || startY === null) return;

    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - startX;
    const deltaY = touch.clientY - startY;
    if (Math.abs(deltaX) < 40 || Math.abs(deltaX) < Math.abs(deltaY)) return;

    // Swipe left (negative deltaX) = next in LTR, prev in RTL
    // Swipe right (positive deltaX) = prev in LTR, next in RTL
    if (deltaX < 0) {
      isRtl ? prevSlide() : nextSlide();
    } else {
      isRtl ? nextSlide() : prevSlide();
    }
  };

  const visibleProjects = filteredProjects.slice(currentIndex, currentIndex + itemsPerPage);

  const getCategoryStyle = () => {
    return categoryStyle;
  };

  return (
    <section id="projects" className="pt-24 pb-16 bg-gradient-to-b from-white to-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold tracking-widest text-violet-600 uppercase mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              {t.badge}
            </h2>
            <h3 className="text-4xl font-black text-brand-black">{t.title}</h3>
            <p className="text-lg text-slate-600 mt-4 max-w-xl">
              {t.subtitle}
            </p>
          </div>
        </div>

        {/* Category Filter Section */}
        <div className="mb-12">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsFilterExpanded(!isFilterExpanded)}
            className="md:hidden w-full flex items-center justify-between px-4 py-3 bg-white rounded-xl border border-slate-200 shadow-sm mb-4"
          >
            <span className="flex items-center gap-2 font-medium text-slate-700">
              <Filter className="w-4 h-4" />
              {language === 'he' ? 'סינון לפי קטגוריה' : 'Filter by Category'}
            </span>
            <span className={`transform transition-transform duration-200 ${isFilterExpanded ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          {/* Filter Pills */}
          <div className={`
            ${isMobile ? (isFilterExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden') : ''}
            transition-all duration-300 ease-in-out
          `}>
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
              {/* All Categories Button */}
              <button
                onClick={() => setSelectedCategory(null)}
                className={`
                  group relative px-4 py-2.5 rounded-full font-medium text-sm
                  transition-all duration-300 transform hover:scale-105
                  ${!selectedCategory 
                    ? 'bg-brand-black text-white shadow-lg shadow-slate-300/50' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:shadow-md'
                  }
                `}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {!selectedCategory && <span className="w-2 h-2 rounded-full bg-white animate-pulse" />}
                  {t.allCategories}
                </span>
              </button>

              {/* Category Buttons */}
              {allCategories.map((category) => {
                const colors = getCategoryStyle();
                const isSelected = selectedCategory === category;
                const projectCount = t.items.filter(p => p.categories?.includes(category)).length;
                
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(isSelected ? null : category)}
                    className={`
                      group relative px-4 py-2.5 rounded-full font-medium text-sm
                      transition-all duration-300 transform hover:scale-105
                      ${isSelected 
                        ? `${colors.activeBg} text-white shadow-lg` 
                        : `${colors.bg} ${colors.text} border ${colors.border} hover:shadow-md`
                      }
                    `}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {isSelected && <span className="w-2 h-2 rounded-full bg-white animate-pulse" />}
                      {category}
                      <span className={`
                        text-xs px-1.5 py-0.5 rounded-full
                        ${isSelected ? 'bg-white/20 text-white' : 'bg-white/80 text-slate-500'}
                      `}>
                        {projectCount}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Filter Indicator */}
          {selectedCategory && (
            <div className="mt-4 flex items-center gap-2 animate-fade-in">
              <span className="text-sm text-slate-500">
                {language === 'he' ? 'מציג:' : 'Showing:'}
              </span>
              <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${getCategoryStyle().bg} ${getCategoryStyle().text}`}>
                {selectedCategory}
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="hover:bg-black/10 rounded-full p-0.5 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            </div>
          )}
        </div>

        {/* Projects Carousel */}
        <div 
          className="relative px-4 md:px-8"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Arrows */}
          {filteredProjects.length > itemsPerPage && (
            <>
              <button 
                onClick={isRtl ? nextSlide : prevSlide}
                className="hidden md:flex items-center justify-center absolute top-36 left-[-18px] lg:left-[-26px] w-10 h-10 rounded-full bg-white shadow-lg text-slate-400 hover:text-brand-black hover:shadow-xl transition-all z-10"
                aria-label={isRtl ? "Next projects" : "Previous projects"}
              >
                <ArrowLeft size={20} />
              </button>
              <button 
                onClick={isRtl ? prevSlide : nextSlide}
                className="hidden md:flex items-center justify-center absolute top-36 right-[-18px] lg:right-[-26px] w-10 h-10 rounded-full bg-white shadow-lg text-slate-400 hover:text-brand-black hover:shadow-xl transition-all z-10"
                aria-label={isRtl ? "Previous projects" : "Next projects"}
              >
                <ArrowRight size={20} />
              </button>
            </>
          )}

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[520px]">
            {visibleProjects.map((project, index) => (
              <div 
                key={`${selectedCategory}-${currentIndex}-${index}`} 
                className="flex flex-col gap-5 animate-fade-in-up bg-white rounded-2xl overflow-hidden shadow-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Category Badges */}
                  <div className="absolute top-3 right-3 z-20 flex flex-wrap gap-1.5 max-w-[calc(100%-24px)] justify-end">
                    {project.categories?.slice(0, 2).map((cat, catIndex) => {
                      return (
                        <span 
                          key={catIndex}
                          className="px-2.5 py-1 text-xs font-semibold rounded-full shadow-sm backdrop-blur-sm bg-white/95 text-slate-700 border border-slate-200"
                        >
                          {cat}
                        </span>
                      );
                    })}
                    {project.categories && project.categories.length > 2 && (
                      <span className="px-2 py-1 bg-white/95 text-xs font-semibold text-slate-600 rounded-full shadow-sm backdrop-blur-sm border border-slate-200">
                        +{project.categories.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-5 pt-0">
                  <h4 className="text-xl font-bold text-brand-black mb-3 line-clamp-2">
                    {project.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 flex-grow">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                <Filter className="w-8 h-8 text-slate-400" />
              </div>
              <p className="text-slate-500 text-lg">
                {language === 'he' ? 'לא נמצאו פרויקטים בקטגוריה זו' : 'No projects found in this category'}
              </p>
              <button
                onClick={() => setSelectedCategory(null)}
                className="mt-4 text-violet-600 font-medium hover:underline"
              >
                {language === 'he' ? 'הצג את כל הפרויקטים' : 'Show all projects'}
              </button>
            </div>
          )}

          {/* Pagination Dots - Mobile */}
          {filteredProjects.length > 0 && (
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
          )}

          {/* Pagination Dots - Desktop */}
          {filteredProjects.length > itemsPerPage && (
            <div className="hidden md:flex justify-center items-center gap-4 mt-8">
              <div className="flex gap-1.5">
                {Array.from({ length: totalSlides }).map((_, idx) => {
                  const isActive = idx === Math.floor(currentIndex / itemsPerPage);
                  return (
                    <button
                      key={`desktop-dot-${idx}`}
                      onClick={() => setCurrentIndex(idx * itemsPerPage)}
                      className={`h-2 rounded-full transition-all duration-300 ${isActive ? 'w-8 bg-brand-black' : 'w-2 bg-slate-300 hover:bg-slate-400'}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
