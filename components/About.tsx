import React, { useState } from 'react';
import { CONTENT } from '../constants';
import { useLanguage } from '../LanguageContext';
import { ChevronDown, ChevronUp } from 'lucide-react';

const About: React.FC = () => {
  const { language, dir } = useLanguage();
  const t = CONTENT[language].about;
  const isRtl = dir === 'rtl';

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="py-24 bg-white border-b border-slate-100 overflow-hidden relative transition-all duration-500">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 opacity-50 -z-10"></div>
      
      {/* Container adapts width based on state */}
      <div className={`container mx-auto px-6 transition-all duration-700 ${isExpanded ? 'max-w-[95rem]' : 'max-w-6xl'}`}>
        
        {/* Adjusted Grid Columns: Image on far side (10%), Gap increased significantly */}
        <div className={`grid items-start transition-all duration-700 ease-in-out ${isExpanded ? 'md:grid-cols-[10%_1fr] gap-16 md:gap-24' : 'md:grid-cols-2 gap-12'}`}>
          
          {/* Visual Side - Shrinks significantly on expand */}
          <div className={`relative order-2 md:order-1 transition-all duration-700 ${isExpanded ? 'opacity-100 scale-100 mt-4' : 'scale-100'}`}>
             <div className={`absolute -inset-4 bg-gradient-to-tr from-violet-100 to-cyan-50 rounded-[2rem] transform -rotate-2 -z-10 border border-white transition-all duration-700 ${isExpanded ? 'opacity-0' : 'opacity-100'}`}></div>
             
             <div className={`relative rounded-2xl overflow-hidden shadow-2xl shadow-violet-200/50 group transition-all duration-700 ${isExpanded ? 'aspect-square rounded-lg shadow-md hover:shadow-lg' : 'aspect-square md:aspect-[4/5]'}`}>
               <img 
                 src="/images/who_we_are.jpg" 
                 alt="GZI Consulting team" 
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-violet-900/20 group-hover:bg-violet-900/10 transition-colors"></div>
             </div>
          </div>
          
          {/* Content Side */}
          <div className="order-1 md:order-2 flex flex-col justify-center min-h-[400px]">
            <div className="mb-4">
               <span className="text-violet-600 font-bold tracking-widest text-sm uppercase">{t.badge}</span>
            </div>
            
            {/* Title - Stable */}
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              {t.title} <br/>
              <span className="text-[#0084E0]">{t.titleHighlight}</span>
            </h2>

            {/* Swapping Content Area */}
            <div className="relative">
              {/* Default Content - Fades Out */}
              <div className={`transition-all duration-500 absolute top-0 w-full ${isExpanded ? 'opacity-0 translate-x-10 pointer-events-none invisible' : 'opacity-100 visible relative'}`}>
                 <p className="text-lg text-slate-600 mb-8 leading-relaxed font-light">
                   {t.description1}
                 </p>
              </div>

              {/* Extended Content - Fades In (Replaces previous content) */}
              <div className={`transition-all duration-700 w-full ${!isExpanded ? 'opacity-0 -translate-x-10 pointer-events-none absolute top-0' : 'opacity-100 relative'}`}>
                <h3 className="text-3xl font-bold text-slate-900 mb-8">{t.descriptionExtendedTitle}</h3>
                {/* Bigger Text for Expanded Mode with narrower line length */}
                <div className={`prose prose-lg md:prose-xl max-w-3xl lg:max-w-4xl text-slate-700 leading-relaxed whitespace-pre-line font-light ${isRtl ? 'ml-auto' : 'mr-auto'}`}>
                  {t.descriptionExtended}
                </div>
              </div>
            </div>

            {/* Action Button */}
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-12 self-start flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              {isExpanded ? t.readLess : t.readMore}
              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
