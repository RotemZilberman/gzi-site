import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { CONTENT } from '../constants';

const ClientBox: React.FC<{ items: string[] }> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Random interval between 4s and 8s to make grid look organic
    const intervalTime = Math.random() * 4000 + 4000;
    
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        // Pick random next item that isn't current
        let nextIndex;
        do {
            nextIndex = Math.floor(Math.random() * items.length);
        } while (nextIndex === currentIndex && items.length > 1);
        
        setCurrentIndex(nextIndex);
        setIsFading(false);
      }, 500); // Wait for fade out
    }, intervalTime);

    return () => clearInterval(interval);
  }, [items, currentIndex]);

  return (
    <div className="h-16 flex items-center justify-center p-2">
      <span 
        className={`text-sm md:text-base font-medium text-slate-400 text-center transition-all duration-500 whitespace-nowrap overflow-hidden text-ellipsis ${isFading ? 'opacity-0 blur-sm scale-95' : 'opacity-100 blur-0 scale-100'}`}
      >
        {items[currentIndex]}
      </span>
    </div>
  );
};

const ClientSwapper: React.FC = () => {
  const { language } = useLanguage();
  const categories = CONTENT[language].clients.categories;
  
  // Create chunks for the grid. 
  // We want to show X boxes, but cycle through Y items.
  // We will distribute the full list of items into X buckets.
  const createBuckets = (items: string[], count: number) => {
    const buckets: string[][] = Array.from({ length: count }, () => []);
    items.forEach((item, index) => {
      buckets[index % count].push(item);
    });
    return buckets;
  };

  const muniBuckets = createBuckets(categories[0].items, 6); // 6 boxes for munis
  const corpBuckets = createBuckets(categories[1].items, 6); // 6 boxes for corps

  return (
    <section className="bg-white border-b border-slate-100 py-16">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col gap-12">
          
          {/* Municipalities Row */}
          <div>
            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-widest mb-4">{categories[0].name}</h3>
            {/* Clean Grid - No borders, no backgrounds */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-4">
              {muniBuckets.map((bucket, idx) => (
                <ClientBox key={`muni-${idx}`} items={bucket} />
              ))}
            </div>
          </div>

          {/* Corps Row */}
          <div>
            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-widest mb-4">{categories[1].name}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-4">
              {corpBuckets.map((bucket, idx) => (
                <ClientBox key={`corp-${idx}`} items={bucket} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClientSwapper;