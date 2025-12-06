import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Clients from './components/Clients';
import Stats from './components/Stats';
import Contact from './components/Contact';
import { LanguageProvider, useLanguage } from './LanguageContext';
import { CONTENT } from './constants';

const AppContent = () => {
  const { language } = useLanguage();
  const t = CONTENT[language].about;

  // Extract icons to variables to avoid array indexing in JSX tag
  const FeatureIcon1 = t.features[0].icon;
  const FeatureIcon2 = t.features[1].icon;

  return (
    <Layout>
      <Hero />
      <Stats />
      
      {/* About / Value Proposition Section */}
      <section id="about" className="py-24 bg-white border-b border-slate-100 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 opacity-50 -z-10"></div>
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Visual Side */}
            <div className="relative order-2 md:order-1">
               <div className="absolute -inset-4 bg-gradient-to-tr from-violet-100 to-cyan-50 rounded-[2rem] transform -rotate-2 -z-10 border border-white"></div>
               
               <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-violet-200/50 group">
                 <img 
                   src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" 
                   alt="Digital Urban Planning" 
                   className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-violet-900/20 group-hover:bg-violet-900/10 transition-colors"></div>
                 
                 {/* Floating Overlay Widgets */}
                 <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md p-5 rounded-xl shadow-lg border border-white/50 max-w-[260px] animate-float">
                   <div className="flex items-center gap-3 mb-3">
                     <div className="p-2 bg-green-100 rounded-lg text-green-600">
                       <FeatureIcon1 size={20} />
                     </div>
                     <div>
                       <p className="text-sm font-bold text-slate-800">{t.imageWidgets.opt}</p>
                       <p className="text-[10px] text-slate-500">{t.imageWidgets.realtime}</p>
                     </div>
                   </div>
                   <div className="flex items-center gap-1 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                     <div className="h-full bg-green-500 w-[85%] rounded-full"></div>
                   </div>
                 </div>

                 <div className="absolute top-8 left-8 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-700 animate-float-delayed">
                    <div className="flex items-center gap-3">
                      <FeatureIcon2 className="text-cyan-400" size={20} />
                      <span className="text-white text-sm font-medium">{t.imageWidgets.server}</span>
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse ml-2"></span>
                    </div>
                 </div>
               </div>
            </div>
            
            {/* Content Side */}
            <div className="order-1 md:order-2">
              <div className="mb-4">
                 <span className="text-violet-600 font-bold tracking-widest text-sm uppercase">{t.badge}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                {t.title} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-violet-600 to-cyan-500">{t.titleHighlight}</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed font-light">
                {t.description1}
              </p>
              
              <div className="space-y-6">
                {t.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                     <div className={`mt-1 p-2 rounded-lg ${idx === 0 ? 'bg-violet-100 text-violet-600' : 'bg-cyan-100 text-cyan-600'}`}>
                       <feature.icon size={18} />
                     </div>
                     <div>
                       <h4 className="font-bold text-slate-900 text-base">{feature.title}</h4>
                       <p className="text-sm text-slate-500 mt-1">{feature.desc}</p>
                     </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Services />
      <Projects />
      <Clients />
      <Contact />
    </Layout>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;