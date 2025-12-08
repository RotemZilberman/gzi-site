import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { CONTENT } from '../constants';
import { ClientLogo } from '../types';

const ClientBox: React.FC<{ items: ClientLogo[]; language: 'he' | 'en' }> = ({ items, language }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRolling, setIsRolling] = useState(false);

  useEffect(() => {
    if (items.length <= 1) return;

    const intervalTime = 8000 + Math.random() * 4000;
    
    const interval = setInterval(() => {
      setIsRolling(true);
      setTimeout(() => {
        let nextIndex;
        do {
            nextIndex = Math.floor(Math.random() * items.length);
        } while (nextIndex === currentIndex && items.length > 1);
        
        setCurrentIndex(nextIndex);
        setIsRolling(false);
      }, 600);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [items, currentIndex]);

  const currentLogo = items[currentIndex];
  const label = language === 'he' ? currentLogo.he : currentLogo.en;

  return (
    <div className="h-20 flex items-center justify-center p-3">
      <div
        className={`h-full w-full flex items-center justify-center transition-all duration-600 ${isRolling ? 'opacity-0 rotate-6 scale-95' : 'opacity-100 rotate-0 scale-100'}`}
      >
        <img
          src={currentLogo.src}
          alt={label}
          className="max-h-12 max-w-[150px] object-contain"
          loading="lazy"
        />
      </div>
      <span className="sr-only">{label}</span>
    </div>
  );
};

const ClientSwapper: React.FC = () => {
  const { language } = useLanguage();
  const categories = CONTENT[language].clients.categories;
  const getBucketCount = (length: number) => Math.min(6, Math.max(1, length));
  
  const createBuckets = (items: ClientLogo[], count: number) => {
    const buckets: ClientLogo[][] = Array.from({ length: count }, () => []);
    items.forEach((item, index) => {
      buckets[index % count].push(item);
    });
    return buckets;
  };

  const muniBuckets = createBuckets(categories[0].items, getBucketCount(categories[0].items.length));
  const corpBuckets = createBuckets(categories[1].items, getBucketCount(categories[1].items.length));

  return (
    <section className="bg-white border-b border-slate-100 py-16">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col gap-12">
          
          <div>
            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-widest mb-4">{categories[0].name}</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-4">
              {muniBuckets.map((bucket, idx) => (
                <ClientBox key={`muni-${idx}`} items={bucket} language={language} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-widest mb-4">{categories[1].name}</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-4">
              {corpBuckets.map((bucket, idx) => (
                <ClientBox key={`corp-${idx}`} items={bucket} language={language} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClientSwapper;
