import { useEffect, useState } from 'react';

/**
 * Simple viewport check to toggle mobile-only UI tweaks without relying on Tailwind utilities.
 */
export const useIsMobile = (breakpoint = 768) => {
  const getIsMobile = () => (typeof window !== 'undefined' ? window.innerWidth < breakpoint : false);

  const [isMobile, setIsMobile] = useState<boolean>(getIsMobile);

  useEffect(() => {
    const handleResize = () => setIsMobile(getIsMobile());
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
};
