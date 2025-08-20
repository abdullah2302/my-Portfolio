import { useEffect } from 'react';

export const useCounterAnimation = (setCount, target, duration = 1000) => {
  useEffect(() => {
    const animateCount = () => {
      let start = null;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const progressRatio = Math.min(progress / duration, 1);
        setCount(Math.ceil(progressRatio * target));
        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    animateCount();
  }, [setCount, target, duration]);
};
