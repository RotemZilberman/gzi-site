import React from 'react';
import { useLanguage } from '../LanguageContext';
import { CONTENT } from '../constants';

const LogoTicker: React.FC = () => {
  const { language } = useLanguage();
  const clients = CONTENT[language].clients.items;
  
  // Duplicate list to create seamless infinite scroll
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="bg-white border-b border-slate-100 py-10 overflow-hidden relative select-none">
       {/* Fade edges for smooth effect */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      <div className="flex w-max animate-scroll-left hover:pause">
        {duplicatedClients.map((client, index) => (
          <div 
            key={index} 
            className="flex items-center mx-12 opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default"
          >
            {/* Minimal Typography Logo Style */}
            <span className="text-2xl font-black text-brand-black tracking-tight whitespace-nowrap">
              {client}
            </span>
          </div>
        ))}
      </div>
      
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default LogoTicker;