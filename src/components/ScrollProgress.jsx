import { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let timeoutId = null;
    const updateScrollProgress = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
        setScrollProgress(progress);
        timeoutId = null;
      }, 16);
    };

    updateScrollProgress();
    window.addEventListener('scroll', updateScrollProgress);
    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50">
      <div 
        className="h-full bg-gradient-to-r from-purple-500 to-purple-700 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
