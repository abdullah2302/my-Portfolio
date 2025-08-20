import { useEffect, useRef, useState } from 'react';

// Simple intersection observer for single elements (used in components)
export const useIntersectionObserver = (options = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      options
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isVisible];
};

// Multi-section intersection observer for App.jsx (tracks active section)
export const useMultiSectionObserver = (callback, options = { threshold: 0.3, rootMargin: '-20% 0px -20% 0px' }) => {
  const refs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section with the highest intersection ratio among changed entries
        let maxRatio = 0;
        let mostVisibleSection = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleSection = entry;
          }
        });

        if (mostVisibleSection) {
          callback(mostVisibleSection.target.id);
        }
      },
      options
    );

    const observed = new Set();

    const attach = () => {
      const sectionRefs = Object.values(refs.current).filter(Boolean);
      sectionRefs.forEach((ref) => {
        const node = ref.current;
        if (node && !observed.has(node)) {
          observer.observe(node);
          observed.add(node);
        }
      });
    };

    // Attach immediately, after paint, and after other effects
    attach();
    const rafId = requestAnimationFrame(attach);
    const timeoutId = setTimeout(attach, 0);

    // Also try on window load in case images/layout shift
    window.addEventListener('load', attach, { once: true });

    return () => {
      observed.forEach((node) => observer.unobserve(node));
      observed.clear();
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
      window.removeEventListener('load', attach);
    };
  }, [callback, options]);

  return refs;
};
