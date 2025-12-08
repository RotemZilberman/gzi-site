import React, { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../LanguageContext';
import { CONTENT } from '../constants';
import { ClientLogo } from '../types';

const getBucketCount = (length: number) => Math.min(6, Math.max(1, length));

const createBuckets = (items: ClientLogo[], count: number) => {
  const buckets: ClientLogo[][] = Array.from({ length: count }, () => []);
  items.forEach((item, index) => {
    buckets[index % count].push(item);
  });
  return buckets;
};

const ClientBox: React.FC<{ items: ClientLogo[]; language: 'he' | 'en'; trigger: number }> = ({ items, language, trigger }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, Math.max(items.length - 1, 0)));
  }, [items.length]);

  useEffect(() => {
    if (items.length <= 1) return;

    const fadeDuration = 500; // match tailwind duration-500
    const fadeGap = 80; // small gap before fading back in

    setIsFading(true);

    const swap = setTimeout(() => {
      setCurrentIndex((prev) => {
        let next = prev;
        while (next === prev && items.length > 1) {
          next = Math.floor(Math.random() * items.length);
        }
        return next;
      });
    }, fadeDuration);

    const fadeIn = setTimeout(() => setIsFading(false), fadeDuration + fadeGap);

    return () => {
      clearTimeout(swap);
      clearTimeout(fadeIn);
      setIsFading(false);
    };
  }, [trigger, items]);

  const currentLogo = items[currentIndex];
  if (!currentLogo) return null;
  const label = language === 'he' ? currentLogo.he : currentLogo.en;

  return (
    <div className="h-20 flex items-center justify-center p-3">
      <div
        className={`h-full w-full flex items-center justify-center transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}
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

  const muniBuckets = useMemo(
    () => createBuckets(categories[0].items, getBucketCount(categories[0].items.length)),
    [categories]
  );
  const corpBuckets = useMemo(
    () => createBuckets(categories[1].items, getBucketCount(categories[1].items.length)),
    [categories]
  );

  const [muniTriggers, setMuniTriggers] = useState<number[]>(() => muniBuckets.map(() => 0));
  const [corpTriggers, setCorpTriggers] = useState<number[]>(() => corpBuckets.map(() => 0));

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

    const interval = setInterval(() => {
      const choice = selectableBuckets[Math.floor(Math.random() * selectableBuckets.length)];
      if (choice.type === 'muni') {
        setMuniTriggers((prev) => prev.map((t, idx) => (idx === choice.index ? t + 1 : t)));
      } else {
        setCorpTriggers((prev) => prev.map((t, idx) => (idx === choice.index ? t + 1 : t)));
      }
    }, 3000);

    return () => clearInterval(interval);
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
