import { useState, useEffect, useRef, useCallback } from 'react';
import CyberBackground from './components/CyberBackground';
import Navbar from './layout/Navbar';
import PageProgress from './components/PageProgress';
import Loader from './components/Loader';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import ProjectsWeb from './sections/ProjectsWeb';
import ProjectsAI from './sections/ProjectsAI';
import ProjectsSystems from './sections/ProjectsSystems';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

const TOTAL_SLIDES = 8;

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isScrollingRef = useRef(false);
  const touchStartRef = useRef(0);

  const goToSlide = useCallback((index) => {
    if (index >= 0 && index < TOTAL_SLIDES) {
      setCurrentSlide(index);
    }
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(TOTAL_SLIDES - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide]);

  // Mouse wheel debounce navigation
  useEffect(() => {
    const handleWheel = (e) => {
      // Don't intercept if scrolling inside a scrollable modal or inner element
      if (e.target.closest('.overflow-y-auto, textarea, iframe')) {
        return;
      }

      if (isScrollingRef.current) return;

      if (Math.abs(e.deltaY) > 28 || Math.abs(e.deltaX) > 28) {
        isScrollingRef.current = true;

        if (e.deltaY > 0 || e.deltaX > 0) {
          nextSlide();
        } else {
          prevSlide();
        }

        setTimeout(() => {
          isScrollingRef.current = false;
        }, 850);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [nextSlide, prevSlide]);

  // Touch Swipe Handling for mobile/tablets
  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStartRef.current - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  return (
    <div
      className="relative w-screen h-screen overflow-hidden bg-[#06060f] text-gray-100 select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Loader />
      <CyberBackground />
      <Navbar currentSlide={currentSlide} onSelectSlide={goToSlide} />
      <PageProgress currentSlide={currentSlide} onSelectSlide={goToSlide} />

      {/* Main 8-Slide Horizontal Track */}
      <main
        className="flex w-[800vw] h-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          transform: `translateX(-${currentSlide * 100}vw)`,
        }}
      >
        {/* Slide 0: Hero */}
        <section className="w-[100vw] h-full flex items-center justify-center pt-16 pb-8 px-4 overflow-y-auto no-scrollbar">
          <Hero onNavigateSlide={goToSlide} />
        </section>

        {/* Slide 1: About */}
        <section className="w-[100vw] h-full flex items-center justify-center pt-16 pb-8 px-4 overflow-y-auto no-scrollbar">
          <About />
        </section>

        {/* Slide 2: Skills */}
        <section className="w-[100vw] h-full flex items-center justify-center pt-16 pb-8 px-4 overflow-y-auto no-scrollbar">
          <Skills />
        </section>

        {/* Slide 3: Web & SaaS */}
        <section className="w-[100vw] h-full flex items-center justify-center pt-16 pb-8 px-4 overflow-y-auto no-scrollbar">
          <ProjectsWeb />
        </section>

        {/* Slide 4: AI & GenAI */}
        <section className="w-[100vw] h-full flex items-center justify-center pt-16 pb-8 px-4 overflow-y-auto no-scrollbar">
          <ProjectsAI />
        </section>

        {/* Slide 5: Systems & ML */}
        <section className="w-[100vw] h-full flex items-center justify-center pt-16 pb-8 px-4 overflow-y-auto no-scrollbar">
          <ProjectsSystems />
        </section>

        {/* Slide 6: Experience & Certs */}
        <section className="w-[100vw] h-full flex items-center justify-center pt-16 pb-8 px-4 overflow-y-auto no-scrollbar">
          <Experience />
        </section>

        {/* Slide 7: Contact */}
        <section className="w-[100vw] h-full flex items-center justify-center pt-16 pb-8 px-4 overflow-y-auto no-scrollbar">
          <Contact />
        </section>
      </main>

      {/* Floating Bottom Quick Slide Navigation Controls */}
      <footer className="fixed bottom-4 left-6 z-40 hidden sm:flex items-center gap-3 bg-[#0c0c1a]/80 backdrop-blur-xl border border-white/10 px-3 py-1.5 rounded-full text-xs text-gray-400">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
        >
          <ChevronLeft size={14} /> Prev
        </button>
        <span className="text-[11px] font-mono text-purple-300">
          Slide {currentSlide + 1} / {TOTAL_SLIDES}
        </span>
        <button
          onClick={nextSlide}
          disabled={currentSlide === TOTAL_SLIDES - 1}
          className="hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
        >
          Next <ChevronRight size={14} />
        </button>
      </footer>
    </div>
  );
}

export default App;
