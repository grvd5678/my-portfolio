import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Layers, Brain, Cloud, Database, Cpu, Sparkles } from "lucide-react";

const domains = [
  {
    title: "Full-Stack SaaS",
    subtitle: "MERN • Next.js 16 • Drizzle",
    icon: <Layers className="text-cyan-400" size={24} />,
    color: "border-cyan-500/50 text-cyan-300",
    glow: "shadow-cyan-500/20",
  },
  {
    title: "GenAI & LLMs",
    subtitle: "RAG • LangChain • Gemini",
    icon: <Sparkles className="text-purple-400" size={24} />,
    color: "border-purple-500/50 text-purple-300",
    glow: "shadow-purple-500/20",
  },
  {
    title: "Cloud & DevOps",
    subtitle: "AWS • CI/CD • Linux",
    icon: <Cloud className="text-pink-400" size={24} />,
    color: "border-pink-500/50 text-pink-300",
    glow: "shadow-pink-500/20",
  },
  {
    title: "Machine Learning",
    subtitle: "Scikit-learn • NLP (98.57%)",
    icon: <Brain className="text-emerald-400" size={24} />,
    color: "border-emerald-500/50 text-emerald-300",
    glow: "shadow-emerald-500/20",
  },
  {
    title: "Databases & SQL",
    subtitle: "MongoDB • Neon • Oracle SQL",
    icon: <Database className="text-amber-400" size={24} />,
    color: "border-amber-500/50 text-amber-300",
    glow: "shadow-amber-500/20",
  },
  {
    title: "Big Data & HDFS",
    subtitle: "Hadoop • Spark • Hive",
    icon: <Cpu className="text-blue-400" size={24} />,
    color: "border-blue-500/50 text-blue-300",
    glow: "shadow-blue-500/20",
  },
];

const DomainRotator = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const cellCount = domains.length;
  const theta = 360 / cellCount;
  const radius = 220; // 3D cylinder depth

  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedIndex((prev) => prev + 1);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => setSelectedIndex((prev) => prev - 1);
  const handleNext = () => setSelectedIndex((prev) => prev + 1);

  // Normalized active front index
  const activeNormalizedIndex =
    (((selectedIndex % cellCount) + cellCount) % cellCount);

  return (
    <div className="p-5 sm:p-6 rounded-2xl bg-[#0a0a18]/90 border border-white/10 backdrop-blur-xl flex flex-col items-center justify-between w-full max-w-sm mx-auto shadow-2xl shadow-purple-950/20">
      <div className="w-full flex items-center justify-between mb-2 px-1">
        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300">
          Core Domain Rotator
        </h4>
        <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
          3D Showcase
        </span>
      </div>

      {/* 3D Scene Viewport */}
      <div className="scene-rotator my-4">
        <div
          className="carousel-rotator"
          style={{
            transform: `translateZ(-${radius}px) rotateY(${selectedIndex * -theta}deg)`,
          }}
        >
          {domains.map((domain, index) => {
            const cellAngle = theta * index;
            const diff = Math.min(
              Math.abs(index - activeNormalizedIndex),
              cellCount - Math.abs(index - activeNormalizedIndex)
            );
            const isFront = diff === 0;
            const isNear = diff === 1;

            return (
              <div
                key={domain.title}
                className={`carousel-rotator__cell ${isFront ? domain.color : 'border-white/10'} ${isFront ? domain.glow : ''}`}
                style={{
                  transform: `rotateY(${cellAngle}deg) translateZ(${radius}px) scale(${isFront ? 1.05 : 0.92})`,
                  opacity: isFront ? 1 : isNear ? 0.35 : 0,
                  pointerEvents: isFront ? 'auto' : 'none',
                }}
              >
                <div className={`p-2.5 rounded-xl mb-1.5 ${isFront ? 'bg-white/[0.08]' : 'bg-white/[0.03]'}`}>
                  {domain.icon}
                </div>
                <h5 className="font-bold text-white text-sm text-center leading-tight">
                  {domain.title}
                </h5>
                <p className="text-[11px] text-gray-300 text-center font-mono mt-1">
                  {domain.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-3 mt-2">
        <button
          onClick={handlePrev}
          aria-label="Previous domain competency"
          className="p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.12] border border-white/15 text-gray-300 hover:text-white transition-all hover:scale-110 active:scale-95"
        >
          <ChevronLeft size={16} />
        </button>
        <span className="text-xs font-mono font-semibold text-purple-300">
          {activeNormalizedIndex + 1} / {cellCount}
        </span>
        <button
          onClick={handleNext}
          aria-label="Next domain competency"
          className="p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.12] border border-white/15 text-gray-300 hover:text-white transition-all hover:scale-110 active:scale-95"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default DomainRotator;
