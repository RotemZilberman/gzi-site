import React, { useState } from 'react';
import { CONTENT } from '../constants';
import { CheckCircle2, ArrowLeft, ArrowRight, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { useIsMobile } from '../utils/useIsMobile';

const Services: React.FC = () => {
  const { language, dir } = useLanguage();
  const t = CONTENT[language].services;
  const isRtl = dir === 'rtl';
  const isMobile = useIsMobile();

  const [selectedServiceIndex, setSelectedServiceIndex] = useState<number | null>(null);

  const handleServiceClick = (index: number) => {
    setSelectedServiceIndex(index);
  };

  const closeDetail = () => {
    setSelectedServiceIndex(null);
  };

  const selectedService = selectedServiceIndex !== null ? t.items[selectedServiceIndex] : null;

  return (
    <section id="services" className="py-28 bg-white relative overflow-hidden transition-all">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest text-violet-600 uppercase mb-4">{t.badge}</h2>
          <h3 className="text-4xl font-black text-brand-black mb-6">{t.title}</h3>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="relative min-h-[500px]">
          
          {/* Grid View */}
          <div className={`grid ${isMobile ? 'grid-cols-2 gap-4' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'} transition-all duration-500 transform ${selectedServiceIndex !== null ? 'opacity-0 scale-95 pointer-events-none absolute top-0 w-full' : 'opacity-100 scale-100'}`}>
            {t.items.map((service, index) => (
              <div 
                key={index}
                onClick={() => handleServiceClick(index)}
                className="group p-6 sm:p-8 lg:p-10 bg-slate-50 rounded-2xl transition-colors duration-300 cursor-pointer border border-transparent flex flex-col h-full"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm border border-slate-100 text-brand-black">
                    <service.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-brand-black mb-3">
                  {service.title}
                </h4>
                
                <p className="text-slate-600 mb-8 leading-relaxed text-sm">
                  {service.description}
                </p>

                <div className={`mt-auto w-full flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors group-hover:text-black group-hover:font-semibold ${isRtl ? 'justify-end' : 'justify-start'}`}>
                  <span className="group-hover:text-black">{t.cta}</span>
                  {isRtl ? <ArrowLeft size={16} /> : <ArrowRight size={16} className="group-hover:text-black" />}
                </div>
              </div>
            ))}
          </div>

          {/* Detail View - Overlay */}
          {selectedService && (
             <div className={`${isMobile ? 'fixed inset-0 z-40 bg-white/98 px-5 pt-24 pb-12 overflow-y-auto' : 'absolute top-0 left-0 w-full h-full z-10 transition-all duration-500 transform'} ${selectedServiceIndex !== null ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
               <div className={`${isMobile ? 'bg-white rounded-3xl shadow-xl border border-slate-100 p-6 flex flex-col gap-6' : 'bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 md:p-16 h-full flex flex-col justify-center relative'}`}>
                 {!isMobile && (
                   <button 
                     onClick={closeDetail}
                     className="absolute top-10 right-10 p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors z-20"
                     aria-label={t.back}
                   >
                     <X size={28} />
                   </button>
                 )}

                 {isMobile && (
                   <div className="flex items-center justify-between">
                     <button 
                       onClick={closeDetail}
                       className="flex items-center gap-2 text-sm font-bold text-slate-600"
                     >
                       {isRtl ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
                       <span>{t.back}</span>
                     </button>
                     <div className="w-14 h-14 bg-brand-black rounded-2xl flex items-center justify-center text-white shadow-md">
                       <selectedService.icon className="w-7 h-7" strokeWidth={1.5} />
                     </div>
                   </div>
                 )}

                 <div className={`flex flex-col ${isMobile ? 'gap-6' : 'md:flex-row gap-16 items-start h-full overflow-y-auto'}`}>
                   
                   {/* Left Side: Icon & Title */}
                   <div className={`${isMobile ? 'flex flex-col gap-4' : 'md:w-1/4 flex flex-col items-start sticky top-0'}`}>
                      {!isMobile && (
                        <div className="w-24 h-24 bg-brand-black rounded-3xl flex items-center justify-center text-white mb-8 shadow-xl">
                          <selectedService.icon className="w-12 h-12" strokeWidth={1.5} />
                        </div>
                      )}
                      <h3 className={`text-3xl md:text-4xl font-black text-brand-black ${isMobile ? '' : 'mb-6'} leading-tight`}>
                        {selectedService.title}
                      </h3>
                   </div>
                   
                   {/* Right Side: Content */}
                   <div className={isMobile ? 'flex-1' : 'md:w-3/4'}>
                      {/* Short Description - Larger */}
                      <h4 className="text-lg md:text-2xl font-bold text-slate-900 mb-4 md:mb-6 leading-snug">
                        {selectedService.description}
                      </h4>
                      
                      {/* Extended Description - Match About sizing */}
                      <div className="prose prose-base md:prose-lg max-w-4xl text-slate-700 leading-relaxed mb-2 md:mb-8 font-light whitespace-pre-line">
                        {selectedService.extendedDescription || selectedService.description}
                      </div>
                      
                   </div>
                 </div>

               </div>
             </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Services;
