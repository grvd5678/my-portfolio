import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Layers, Brain, Cloud, Database, Cpu, Sparkles } from "lucide-react";

const domains = [
  {
    title: "Full-Stack SaaS",
    subtitle: "MERN • Next.js 16 • Drizzle",
    icon: <Layers className="text-cyan-400" size={24} />,
    color: "border-cyan-500/40 text-cyan-300",
  },
  {
    title: "GenAI & LLMs",
    subtitle: "RAG • LangChain • Gemini",
    icon: <Sparkles className="text-purple-400" size={24} />,
    color: "border-purple-500/40 text-purple-300",
  },
  {
    title: "Cloud & DevOps",
    subtitle: "AWS • CI/CD • Linux",
    icon: <Cloud className="text-pink-400" size={24} />,
    color: "border-pink-500/40 text-pink-300",
  },
  {
    title: "Machine Learning",
    subtitle: "Scikit-learn • NLP (98.57%)",
    icon: <Brain className="text-emerald-400" size={24} />,
    color: "border-emerald-500/40 text-emerald-300",
  },
  {
    title: "Databases & SQL",
    subtitle: "MongoDB • Neon • Oracle SQL",
    icon: <Database className="text-amber-400" size={24} />,
    color: "border-amber-500/40 text-amber-300",
  },
  {
    title: "Big Data & HDFS",
    subtitle: "Hadoop • Spark • Hive",
    icon: <Cpu className="text-blue-400" size={24} />,
    color: "border-blue-500/40 text-blue-300",
  },
];

const DomainRotator = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const cellCount = domains.length;
  const theta = 360 / cellCount;
  const radius = Math.round(200 / 2 / Math.tan(Math.PI / cellCount));

  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedIndex((prev) => prev + 1);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => setSelectedIndex((prev) => prev - 1);
  const handleNext = () => setSelectedIndex((prev) => prev + 1);

  return (
    <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl flex flex-col items-center justify-between w-full max-w-sm mx-auto shadow-xl shadow-purple-950/20">
      <div className="w-full flex items-center justify-between mb-3 px-1">
        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300/80">
          Core Domain Rotator
        </h4>
        <span className="text-[10px] font-mono text-gray-400">3D Interactive</span>
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
            return (
              <div
                key={domain.title}
                className={`carousel-rotator__cell ${domain.color}`}
                style={{
                  transform: `rotateY(${cellAngle}deg) translateZ(${radius}px)`,
                }}
              >
                <div className="p-2.5 rounded-xl bg-white/[0.05] mb-2">{domain.icon}</div>
                <h5 className="font-bold text-white text-sm text-center leading-tight">
                  {domain.title}
                </h5>
                <p className="text-[11px] text-gray-400 text-center font-mono mt-1">
                  {domain.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-3 mt-3">
        <button
          onClick={handlePrev}
          aria-label="Previous domain competency"
          className="p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-gray-300 hover:text-white transition-all hover:scale-110"
        >
          <ChevronLeft size={16} />
        </button>
        <span className="text-[11px] font-mono text-gray-400">
          {((((selectedIndex % cellCount) + cellCount) % cellCount) + 1)} / {cellCount}
        </span>
        <button
          onClick={handleNext}
          aria-label="Next domain competency"
          className="p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-gray-300 hover:text-white transition-all hover:scale-110"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default DomainRotator;

