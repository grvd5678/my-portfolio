import { useState } from "react";
import { Download, GraduationCap, MapPin, Sparkles, RefreshCw, Layers, Brain, ExternalLink } from "lucide-react";

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="perspective-1000 w-full max-w-[320px] sm:max-w-[370px] h-[460px] cursor-pointer group select-none mx-auto"
      onClick={() => setIsFlipped(!isFlipped)}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setIsFlipped(!isFlipped)}
      tabIndex={0}
      role="button"
      aria-label="Toggle profile details card"
    >
      <div
        className={`relative w-full h-full duration-700 transform-style-3d transition-transform ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* FRONT SIDE */}
        <div className="absolute inset-0 w-full h-full rounded-2xl bg-[#0d0d1c]/90 border border-purple-500/30 p-6 flex flex-col items-center justify-between backface-hidden shadow-2xl shadow-purple-950/40 backdrop-blur-xl group-hover:border-cyan-400/50 transition-colors">
          {/* Top Badge */}
          <div className="w-full flex justify-between items-center text-xs text-gray-400">
            <span className="inline-flex items-center gap-1 text-cyan-300 font-mono font-medium">
              <Sparkles size={13} /> Full-Stack & AI Dev
            </span>
            <span className="inline-flex items-center gap-1 text-purple-300">
              <MapPin size={13} /> Kolkata, IN
            </span>
          </div>

          {/* Portrait Image with glowing ring */}
          <div className="relative my-auto">
            <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition-opacity" />
            <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
              <img
                src="/profile.jpeg"
                alt="Gourav Das Portrait"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = "/portfolio.svg";
                }}
              />
            </div>
          </div>

          {/* Front Name & Flip Hint */}
          <div className="text-center w-full">
            <h3 className="text-xl font-bold text-white tracking-wide">Gourav Das</h3>
            <p className="text-xs text-purple-300/90 font-medium">
              AWS Certified Cloud Practitioner • Full-Stack & AI
            </p>
            <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] font-mono text-gray-400 group-hover:text-cyan-300 transition-colors">
              <RefreshCw size={12} className="animate-spin-slow" /> Click or tap to flip card
            </div>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="absolute inset-0 w-full h-full rounded-2xl bg-[#090918]/95 border border-cyan-400/40 p-5 sm:p-6 flex flex-col justify-between rotate-y-180 backface-hidden shadow-2xl shadow-cyan-950/40 backdrop-blur-2xl">
          <div>
            <div className="flex justify-between items-center border-b border-white/10 pb-2.5 mb-3">
              <div>
                <h4 className="text-lg font-bold text-gradient leading-none">Gourav Das</h4>
                <span className="text-[10px] text-amber-300 font-mono mt-0.5 block">
                  AWS Certified Cloud Practitioner
                </span>
              </div>
              <span className="text-[11px] font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                MAKAUT '26
              </span>
            </div>

            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-start gap-2">
                <GraduationCap size={15} className="text-purple-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white text-xs">B.Tech in Computer Science</p>
                  <p className="text-gray-400 text-[11px]">FIEM • MAKAUT (CGPA: 7.56)</p>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-1 text-[11px]">
                <p className="text-gray-300">
                  ● <strong>AWS Certified Cloud Practitioner</strong> (Amazon Web Services).
                </p>
                <p className="text-gray-300">
                  ● <strong>FinPulse SaaS</strong> (Next.js 16, React 19, Neon PostgreSQL).
                </p>
                <p className="text-gray-300">
                  ● <strong>RAG Assistant</strong> (FastAPI, LangChain, Google Gemini).
                </p>
                <p className="text-gray-300">
                  ● <strong>ML Intern</strong> at LearnDepth • Core CS (NeetCode 150).
                </p>
              </div>
            </div>
          </div>

          {/* Dual Resume Selector on Back of Card */}
          <div className="pt-2 border-t border-white/10 space-y-2">
            <div className="text-[10px] font-mono uppercase tracking-wider text-gray-400 flex items-center justify-between">
              <span>Target Resumes:</span>
              <span className="text-cyan-400 font-semibold">Select Role</span>
            </div>

            {/* 1. Full-Stack Resume */}
            <div className="flex items-center gap-1.5">
              <a
                href="/Gourav_Das_Resume_FullStack.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 flex items-center justify-between px-3 py-2 rounded-xl bg-gradient-to-r from-cyan-500/15 to-blue-500/15 hover:from-cyan-500/25 hover:to-blue-500/25 border border-cyan-500/30 text-cyan-200 text-xs font-semibold transition-all group/btn"
              >
                <span className="inline-flex items-center gap-1.5">
                  <Layers size={13} className="text-cyan-400" /> Full-Stack Resume
                </span>
                <ExternalLink size={12} className="opacity-70 group-hover/btn:opacity-100" />
              </a>
              <a
                href="/Gourav_Das_Resume_FullStack.pdf"
                download="Gourav_Das_Resume_FullStack.pdf"
                onClick={(e) => e.stopPropagation()}
                title="Download Full-Stack Resume PDF"
                className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/15 text-gray-300 hover:text-white transition-all shrink-0"
              >
                <Download size={13} />
              </a>
            </div>

            {/* 2. AI / ML Resume */}
            <div className="flex items-center gap-1.5">
              <a
                href="/Gourav_Das_Resume_AIML.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 flex items-center justify-between px-3 py-2 rounded-xl bg-gradient-to-r from-purple-500/15 to-pink-500/15 hover:from-purple-500/25 hover:to-pink-500/25 border border-purple-500/30 text-purple-200 text-xs font-semibold transition-all group/btn"
              >
                <span className="inline-flex items-center gap-1.5">
                  <Brain size={13} className="text-purple-400" /> AI / ML Engineer Resume
                </span>
                <ExternalLink size={12} className="opacity-70 group-hover/btn:opacity-100" />
              </a>
              <a
                href="/Gourav_Das_Resume_AIML.pdf"
                download="Gourav_Das_Resume_AIML.pdf"
                onClick={(e) => e.stopPropagation()}
                title="Download AI/ML Resume PDF"
                className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/15 text-gray-300 hover:text-white transition-all shrink-0"
              >
                <Download size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
