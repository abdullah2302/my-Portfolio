import { useEffect } from 'react';

export const useKeyboard = (key, callback, condition = true) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === key && condition) {
        callback();
      }
    };

    if (condition) {
      window.addEventListener('keydown', handleKey);
      return () => window.removeEventListener('keydown', handleKey);
    }
  }, [key, callback, condition]);
};
