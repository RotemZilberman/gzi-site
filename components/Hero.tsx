import React from 'react';
import { ArrowLeft, ChevronDown, Map as MapIcon, Database, Activity } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { CONTENT } from '../constants';

const Hero: React.FC = () => {
  const { language, dir } = useLanguage();
  const t = CONTENT[language].hero;
  const isRtl = dir === 'rtl';

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-10">
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 bg-ai-mesh opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-full h-full bg-tech-grid opacity-30 pointer-events-none" />
      
      {/* Abstract Glowing Orbs */}
      <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-violet-200/40 rounded-full blur-[100px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-cyan-100/50 rounded-full blur-[80px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className={`lg:w-1/2 text-center ${isRtl ? 'lg:text-right' : 'lg:text-left'} z-20`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-violet-100 shadow-sm mb-8 animate-fade-in-up">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-violet-600"></span>
              </span>
              <span className="text-sm font-bold text-violet-800 tracking-wide uppercase">{t.badge}</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight animate-fade-in-up [animation-delay:200ms]">
              {t.titleStart} <br />
              <span className="text-transparent bg-clip-text bg-ai-gradient-text">
                {t.titleEnd}
              </span>
            </h1>

            <p className={`text-xl text-slate-600 mb-10 leading-relaxed font-light max-w-2xl lg:mx-0 mx-auto animate-fade-in-up [animation-delay:400ms]`}>
              {t.subtitle}
            </p>

            <div className={`flex flex-col sm:flex-row gap-5 justify-center ${isRtl ? 'lg:justify-start' : 'lg:justify-start'} items-center animate-fade-in-up [animation-delay:600ms]`}>
              <a 
                href="#contact" 
                className="group relative px-8 py-4 bg-ai-gradient text-white rounded-xl font-bold transition-all hover:shadow-xl hover:shadow-violet-200 hover:-translate-y-1 flex items-center gap-3 overflow-hidden shadow-lg shadow-violet-500/20"
              >
                <div className="absolute inset-0 w-full h-full bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12"></div>
                <span className="relative">{t.ctaPrimary}</span>
                <ArrowLeft className={`relative w-5 h-5 transition-transform ${isRtl ? 'group-hover:-translate-x-1' : 'rotate-180 group-hover:translate-x-1'}`} />
              </a>
              <a 
                href="#projects" 
                className="px-8 py-4 bg-white/80 backdrop-blur text-slate-700 border border-slate-200 rounded-xl font-bold transition-all hover:border-violet-300 hover:text-violet-700 hover:shadow-lg"
              >
                {t.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Visual Graphic Element */}
          <div className="lg:w-1/2 relative w-full animate-fade-in [animation-delay:500ms] flex justify-center">
            <div className="relative w-[350px] md:w-[500px] aspect-square flex items-center justify-center">
              
              {/* Outer Rotating Rings */}
              <div className="absolute w-full h-full border border-violet-100/60 rounded-full animate-spin-slow [animation-duration:40s]"></div>
              <div className="absolute w-[80%] h-[80%] border border-dashed border-cyan-200 rounded-full animate-spin-slow [animation-direction:reverse] [animation-duration:30s]"></div>
              
              {/* Central City Image (Circular) */}
              {/* FIX: 'isolation-isolate' creates a new stacking context to enforce the border-radius clipping during transform */}
              <div className="absolute w-[60%] h-[60%] rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-violet-500/20 z-10 group isolation-isolate">
                 <img 
                   src="https://images.unsplash.com/photo-1543965860-82ed7d542cc4?q=80&w=2060&auto=format&fit=crop" 
                   alt="Tel Aviv Skyline" 
                   className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-1000 transform-gpu"
                 />
                 {/* Gradient Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-violet-900/40 to-cyan-500/20 mix-blend-overlay pointer-events-none"></div>
                 
                 {/* Center Pulse */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <div className="w-20 h-20 bg-violet-500/20 rounded-full animate-ping-slow"></div>
                 </div>
              </div>

              {/* Connecting Nodes Animation */}
              <div className="absolute w-[60%] h-[60%] animate-spin-slow [animation-duration:50s] pointer-events-none">
                 <div className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-full border-2 border-white shadow-lg -translate-x-1/2 -translate-y-1/2"></div>
                 <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-violet-400 rounded-full border-2 border-white shadow-lg -translate-x-1/2 translate-y-1/2"></div>
                 <div className="absolute left-0 top-1/2 w-3 h-3 bg-indigo-400 rounded-full border-2 border-white shadow-lg -translate-x-1/2 -translate-y-1/2"></div>
              </div>

              {/* Floating Widgets */}
              <div className="absolute -top-4 right-4 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl border border-violet-100 animate-float z-20 max-w-[180px]">
                <div className="flex items-center gap-3 mb-2">
                   <div className="p-2 bg-violet-100 rounded-lg text-violet-600"><Database size={18} /></div>
                   <span className="text-xs font-bold text-slate-800">{t.widgets.bigData}</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                   <div className="h-full bg-violet-500 w-[70%] animate-pulse"></div>
                </div>
              </div>

              <div className="absolute bottom-8 -left-4 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl border border-cyan-100 animate-float-delayed z-20">
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-cyan-100 rounded-lg text-cyan-600"><MapIcon size={18} /></div>
                   <div>
                      <div className="text-xs font-bold text-slate-800">{t.widgets.gis}</div>
                      <div className="text-[10px] text-slate-400">{t.widgets.syncing}</div>
                   </div>
                   <Activity className="w-4 h-4 text-green-500 ml-2" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-violet-300">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;
