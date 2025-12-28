import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { useLanguage } from '../LanguageContext';
import { CONTENT } from '../constants';
import { ClientLogo } from '../types';
import { useIsMobile } from '../utils/useIsMobile';

const getBucketCount = (length: number, maxBuckets: number) => Math.min(maxBuckets, Math.max(1, length));

const createBuckets = (items: ClientLogo[], count: number) => {
  const buckets: ClientLogo[][] = Array.from({ length: count }, () => []);
  items.forEach((item, index) => {
    buckets[index % count].push(item);
  });
  return buckets;
};

const ClientBox: React.FC<{ items: ClientLogo[]; language: 'he' | 'en'; trigger: number }> = ({ items, language, trigger }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const initialRender = useRef(true);

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, Math.max(items.length - 1, 0)));
  }, [items.length]);

  useEffect(() => {
    // Skip animation on initial render
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    
    if (items.length <= 1 || isAnimating) return;

    // Calculate next random index
    let next = currentIndex;
    while (next === currentIndex && items.length > 1) {
      next = Math.floor(Math.random() * items.length);
    }
    setNextIndex(next);
    
    // Start fade out
    setIsAnimating(true);
    
    // After fade out, swap and fade in
    const swapTimer = setTimeout(() => {
      setCurrentIndex(next);
    }, 400);
    
    // End animation
    const endTimer = setTimeout(() => {
      setIsAnimating(false);
    }, 800);

    return () => {
      clearTimeout(swapTimer);
      clearTimeout(endTimer);
    };
  }, [trigger]);

  const currentLogo = items[currentIndex];
  if (!currentLogo) return null;
  const label = language === 'he' ? currentLogo.he : currentLogo.en;

  return (
    <div className="h-20 flex items-center justify-center p-3">
      <div
        className={`h-full w-full flex items-center justify-center transition-all duration-400 ease-in-out ${
          isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        <img
          src={currentLogo.src}
          alt={label}
          className="max-h-12 max-w-[100px] w-auto h-auto object-contain"
          loading="lazy"
          onError={(e) => {
            // Hide broken images
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>
      <span className="sr-only">{label}</span>
    </div>
  );
};

const ClientSwapper: React.FC = () => {
  const { language } = useLanguage();
  const categories = CONTENT[language].clients.categories;
  const isMobile = useIsMobile();

  const muniBuckets = useMemo(
    () => createBuckets(categories[0].items, getBucketCount(categories[0].items.length, isMobile ? 3 : 6)),
    [categories, isMobile]
  );
  const corpBuckets = useMemo(
    () => createBuckets(categories[1].items, getBucketCount(categories[1].items.length, isMobile ? 3 : 6)),
    [categories, isMobile]
  );

  const [muniTriggers, setMuniTriggers] = useState<number[]>(() => muniBuckets.map(() => 0));
  const [corpTriggers, setCorpTriggers] = useState<number[]>(() => corpBuckets.map(() => 0));
  const lastTriggeredRef = useRef<{ type: string; index: number } | null>(null);

  useEffect(() => {
    setMuniTriggers(muniBuckets.map(() => 0));
    setCorpTriggers(corpBuckets.map(() => 0));
  }, [muniBuckets, corpBuckets]);

  useEffect(() => {
    const selectableBuckets: { type: 'muni' | 'corp'; index: number }[] = [];

    muniBuckets.forEach((bucket, idx) => {
      if (bucket.length > 1) selectableBuckets.push({ type: 'muni', index: idx });
    });
    corpBuckets.forEach((bucket, idx) => {
      if (bucket.length > 1) selectableBuckets.push({ type: 'corp', index: idx });
    });

    if (!selectableBuckets.length) return;

    const triggerSwap = () => {
      // Pick a random bucket, but try to avoid the same one twice in a row
      let choice = selectableBuckets[Math.floor(Math.random() * selectableBuckets.length)];
      
      // Try up to 3 times to pick a different bucket
      let attempts = 0;
      while (
        lastTriggeredRef.current &&
        choice.type === lastTriggeredRef.current.type &&
        choice.index === lastTriggeredRef.current.index &&
        attempts < 3 &&
        selectableBuckets.length > 1
      ) {
        choice = selectableBuckets[Math.floor(Math.random() * selectableBuckets.length)];
        attempts++;
      }
      
      lastTriggeredRef.current = choice;

      if (choice.type === 'muni') {
        setMuniTriggers((prev) => prev.map((t, idx) => (idx === choice.index ? t + 1 : t)));
      } else {
        setCorpTriggers((prev) => prev.map((t, idx) => (idx === choice.index ? t + 1 : t)));
      }
    };

    // Stagger the initial animations
    const initialDelay = setTimeout(triggerSwap, 2000);
    
    // Then continue with regular interval
    const interval = setInterval(triggerSwap, 3500);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [muniBuckets, corpBuckets]);

  return (
    <section className="bg-white border-b border-slate-100 py-16">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col gap-12">
          
          <div>
            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-widest mb-4">{categories[0].name}</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-4">
              {muniBuckets.map((bucket, idx) => (
                <ClientBox key={`muni-${idx}`} items={bucket} language={language} trigger={muniTriggers[idx] ?? 0} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-widest mb-4">{categories[1].name}</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-4">
              {corpBuckets.map((bucket, idx) => (
                <ClientBox key={`corp-${idx}`} items={bucket} language={language} trigger={corpTriggers[idx] ?? 0} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClientSwapper;
