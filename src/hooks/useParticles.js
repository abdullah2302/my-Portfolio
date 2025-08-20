import { useMemo } from 'react';

export const useParticles = (count = 50) => {
  return useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 4 + 2}px`,
      duration: `${Math.random() * 5 + 3}s`,
      moveX: `${(Math.random() - 0.5) * 100}px`,
      moveY: `${(Math.random() - 0.5) * 100}px`,
      endX: `${(Math.random() - 0.5) * 50}px`,
      endY: `${(Math.random() - 0.5) * 50}px`,
      animationDelay: `${i * 0.1}s`,
    }));
  }, [count]);
};
