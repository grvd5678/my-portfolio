import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId = null;
    const toggleVisibility = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        setIsVisible(window.scrollY > 300);
        timeoutId = null;
      }, 100);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return isVisible ? (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-16 right-8 bg-gradient-to-r from-purple-500 to-purple-700 p-3 rounded-full 
                 hover:from-purple-600 hover:to-purple-800 transition-all transform hover:scale-110 z-50 shadow-lg">
      <ArrowUp size={24} />
    </button>
  ) : null;
};

export default ScrollToTop;
