const slidesInfo = [
  { id: "hero", label: "Home", accent: "from-purple-500 to-cyan-400" },
  { id: "about", label: "About", accent: "from-violet-500 to-purple-400" },
  { id: "skills", label: "Skills", accent: "from-pink-500 to-rose-400" },
  { id: "projects-web", label: "Web & SaaS", accent: "from-cyan-400 to-blue-500" },
  { id: "projects-ai", label: "AI & GenAI", accent: "from-purple-500 to-pink-500" },
  { id: "projects-systems", label: "Systems & ML", accent: "from-amber-400 to-orange-500" },
  { id: "experience", label: "Experience", accent: "from-emerald-400 to-teal-500" },
  { id: "contact", label: "Contact", accent: "from-orange-400 to-pink-500" },
];

const PageProgress = ({ currentSlide = 0, onSelectSlide }) => {
  const totalSlides = slidesInfo.length;
  const currentFormatted = String(currentSlide + 1).padStart(2, "0");
  const totalFormatted = String(totalSlides).padStart(2, "0");

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3">
      {/* Slide Counter */}
      <span className="text-xs font-mono font-bold tracking-widest text-purple-300/80 bg-[#0c0c1a]/80 px-2.5 py-1 rounded-full border border-purple-500/20 shadow-lg backdrop-blur-md">
        {currentFormatted} / {totalFormatted}
      </span>

      {/* Interactive Dots Bar */}
      <div className="glass-dock p-2 rounded-full flex flex-col gap-2.5">
        {slidesInfo.map((slide, idx) => {
          const isActive = currentSlide === idx;
          return (
            <button
              key={slide.id}
              onClick={() => onSelectSlide && onSelectSlide(idx)}
              aria-label={`Go to slide ${idx + 1}: ${slide.label}`}
              className="group relative flex items-center justify-center p-1 focus:outline-none"
            >
              {/* Dot */}
              <div
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? `w-3 h-3 bg-gradient-to-r ${slide.accent} shadow-md shadow-purple-500/50 scale-110`
                    : "bg-white/20 group-hover:bg-white/60 group-hover:scale-110"
                }`}
              />

              {/* Tooltip on Hover */}
              <span className="absolute right-7 px-2.5 py-1 rounded-md text-[11px] font-semibold whitespace-nowrap bg-[#0e0e1e]/90 text-white border border-purple-500/30 backdrop-blur-md opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shadow-xl shadow-black/40">
                {slide.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PageProgress;

