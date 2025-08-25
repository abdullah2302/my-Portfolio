import { useEffect, useMemo, useState } from 'react';

export const useParticles = (count = 50) => {
  const [effectiveCount, setEffectiveCount] = useState(count);

  useEffect(() => {
    let prefersReduced = false;
    try {
      prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (_) {
      prefersReduced = false;
    }

    if (prefersReduced) {
      setEffectiveCount(0);
      return;
    }

    const deviceMemory = typeof navigator !== 'undefined' && navigator.deviceMemory ? navigator.deviceMemory : 4;
    const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1024;

    let adjusted = count;
    // Scale down on lower-memory devices
    if (deviceMemory <= 2) {
      adjusted = Math.max(8, Math.round(count * 0.25));
    } else if (deviceMemory <= 4) {
      adjusted = Math.max(12, Math.round(count * 0.5));
    }
    // Further reduce on small screens
    if (viewportWidth < 640) {
      adjusted = Math.min(adjusted, 16);
    }

    setEffectiveCount(adjusted);
  }, [count]);

  return useMemo(() => {
    return Array.from({ length: effectiveCount }).map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 4 + 2}px`,
      duration: `${Math.random() * 5 + 3}s`,
      moveX: `${(Math.random() - 0.5) * 100}px`,
      moveY: `${(Math.random() - 0.5) * 100}px`,
      endX: `${(Math.random() - 0.5) * 50}px`,
      endY: `${(Math.random() - 0.5) * 50}px`,
      animationDelay: `${i * 0.12}s`,
    }));
  }, [effectiveCount]);
};
