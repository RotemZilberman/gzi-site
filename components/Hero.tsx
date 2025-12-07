import React from 'react';
import { ArrowLeft, Map as MapIcon, Database, Activity, ChevronDown } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { CONTENT } from '../constants';

const Hero: React.FC = () => {
  const { language, dir } = useLanguage();
  const t = CONTENT[language].hero;
  const isRtl = dir === 'rtl';

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center bg-white pt-24 pb-10 overflow-hidden">
      
      {/* Background Ambience - City GIS Pattern & Blobs */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        
        {/* Custom City Map Pattern - Buildings, Parks, Roads */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.05] text-slate-900" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="city-gis-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              {/* Roads Grid */}
              <path d="M100 0V200 M0 100H200" stroke="currentColor" strokeWidth="4" fill="none" />
              <path d="M50 0V200 M150 0V200 M0 50H200 M0 150H200" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6"/>

              {/* Park Area (Top Left) - Organic Shape with Trees */}
              <path d="M10 10 Q40 5 60 25 T90 45 V90 H10 V10Z" fill="currentColor" opacity="0.15" />
              <circle cx="30" cy="30" r="3" fill="currentColor" opacity="0.3" />
              <circle cx="60" cy="60" r="4" fill="currentColor" opacity="0.3" />
              <circle cx="45" cy="75" r="2.5" fill="currentColor" opacity="0.3" />

              {/* High Density Commercial Buildings (Top Right) */}
              <rect x="110" y="10" width="35" height="35" fill="currentColor" opacity="0.25" />
              <rect x="155" y="10" width="35" height="35" fill="currentColor" opacity="0.25" />
              <rect x="110" y="55" width="80" height="35" fill="currentColor" opacity="0.25" />

              {/* Public Institutions / Complex Shapes (Bottom Left) */}
              <path d="M10 110 H40 V190 H10 Z M50 110 H90 V140 H50 Z M50 150 H90 V190 H50 Z" fill="currentColor" opacity="0.2" />

              {/* Residential Blocks (Bottom Right) */}
              <g opacity="0.15">
                <rect x="110" y="110" width="20" height="20" fill="currentColor" />
                <rect x="140" y="110" width="20" height="20" fill="currentColor" />
                <rect x="170" y="110" width="20" height="20" fill="currentColor" />
                
                <rect x="110" y="140" width="20" height="20" fill="currentColor" />
                <rect x="140" y="140" width="20" height="20" fill="currentColor" />
                <rect x="170" y="140" width="20" height="20" fill="currentColor" />

                <rect x="110" y="170" width="20" height="20" fill="currentColor" />
                <rect x="140" y="170" width="20" height="20" fill="currentColor" />
                <rect x="170" y="170" width="20" height="20" fill="currentColor" />
              </g>

            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#city-gis-pattern)" />
        </svg>
        
        {/* Animated Blobs for "Life" */}
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-blue-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-violet-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob [animation-delay:2000ms]"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[400px] h-[400px] bg-cyan-50/60 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob [animation-delay:4000ms]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex-grow flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Text Content */}
          <div className={`lg:w-1/2 ${isRtl ? 'lg:text-right' : 'lg:text-left'} text-center z-20`}>
            
            {/* Badge Removed */}

            <h1 className="text-5xl lg:text-7xl font-black text-brand-black leading-[1.05] mb-8 tracking-tight animate-fade-in-up [animation-delay:100ms]">
              {t.titleStart} <br />
              <span className="text-brand-primary">
                {t.titleEnd}
              </span>
            </h1>

            <p className={`text-xl text-slate-600 mb-10 leading-relaxed font-normal max-w-xl lg:mx-0 mx-auto animate-fade-in-up [animation-delay:200ms]`}>
              {t.subtitle}
            </p>

            <div className={`flex flex-col sm:flex-row gap-5 justify-center ${isRtl ? 'lg:justify-start' : 'lg:justify-start'} items-center animate-fade-in-up [animation-delay:400ms]`}>
              <a 
                href="#contact" 
                className="px-8 py-4 bg-brand-black text-white rounded-full font-bold transition-all hover:bg-slate-800 flex items-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
              >
                <span>{t.ctaPrimary}</span>
                <ArrowLeft className={`w-5 h-5 transition-transform ${isRtl ? 'group-hover:-translate-x-1' : 'rotate-180 group-hover:translate-x-1'}`} />
              </a>
              <a 
                href="#projects" 
                className="px-8 py-4 bg-white/50 backdrop-blur-sm text-brand-black border border-slate-200 rounded-full font-bold transition-all hover:border-brand-black hover:bg-white"
              >
                {t.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Visual Graphic Element */}
          <div className="lg:w-1/2 relative w-full animate-fade-in [animation-delay:300ms] flex justify-center lg:justify-end">
            <div className="relative w-[350px] md:w-[500px] aspect-square flex items-center justify-center animate-float">
              
              {/* Spinning Ring - Radar/Scanner Look */}
              <div className="absolute inset-0 border border-slate-100/50 rounded-full scale-110 animate-[spin_30s_linear_infinite] pointer-events-none">
                 <div className="absolute top-0 left-1/2 w-3 h-3 bg-brand-primary/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-sm"></div>
              </div>

              {/* Central City Image */}
              <div 
                className="relative w-[90%] h-[90%] rounded-full overflow-hidden shadow-2xl z-10 isolation-isolate"
                style={{ 
                  WebkitMaskImage: 'radial-gradient(circle, white 100%, black 100%)',
                  maskImage: 'radial-gradient(circle, white 100%, black 100%)'
                }}
              >
                 <img 
                   src="/images/main_page.jpg" 
                   alt="GZI Systems" 
                   className="w-full h-full object-cover scale-105"
                 />
                 <div className="absolute inset-0 bg-brand-black/10"></div>
              </div>

              {/* Minimal Floating Widgets */}
              <div className="absolute top-[10%] right-0 bg-white p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 animate-fade-in-up [animation-delay:600ms] z-20 w-[160px] hover:scale-105 transition-transform">
                <div className="flex items-center gap-3 mb-2">
                   <div className="p-2 bg-slate-50 rounded-md text-brand-black"><Database size={16} /></div>
                   <span className="text-xs font-bold text-slate-900">{t.widgets.bigData}</span>
                </div>
                <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                   <div className="h-full bg-brand-black w-[70%] animate-[pulse_3s_infinite]"></div>
                </div>
              </div>

              <div className="absolute bottom-[15%] left-0 bg-white p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 animate-fade-in-up [animation-delay:800ms] z-20 hover:scale-105 transition-transform">
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-slate-50 rounded-md text-brand-black"><MapIcon size={16} /></div>
                   <div>
                      <div className="text-xs font-bold text-slate-900">{t.widgets.gis}</div>
                   </div>
                   <Activity className="w-3.5 h-3.5 text-green-600 ml-2 animate-pulse" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <div className="w-full flex justify-center pb-4 animate-bounce opacity-50">
         <ChevronDown className="w-6 h-6 text-slate-400" />
      </div>
    </section>
  );
};

export default Hero;
