import { useState } from "react";
import { Download, GraduationCap, MapPin, Sparkles, RefreshCw } from "lucide-react";

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="perspective-1000 w-full max-w-[320px] sm:max-w-[360px] h-[440px] cursor-pointer group select-none mx-auto"
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
              <Sparkles size={13} /> Full-Stack Dev
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
            <p className="text-xs text-purple-300/90 font-medium">Full-Stack & GenAI Engineer</p>
            <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] font-mono text-gray-400 group-hover:text-cyan-300 transition-colors">
              <RefreshCw size={12} className="animate-spin-slow" /> Click or tap to flip card
            </div>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="absolute inset-0 w-full h-full rounded-2xl bg-[#090918]/95 border border-cyan-400/40 p-6 flex flex-col justify-between rotate-y-180 backface-hidden shadow-2xl shadow-cyan-950/40 backdrop-blur-2xl">
          <div>
            <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-4">
              <h4 className="text-lg font-bold text-gradient">Gourav Das</h4>
              <span className="text-[11px] font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                MAKAUT '26
              </span>
            </div>

            <div className="space-y-3 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <GraduationCap size={16} className="text-purple-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white">B.Tech in Computer Science</p>
                  <p className="text-gray-400 text-[11px]">FIEM • MAKAUT (CGPA: 7.56)</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5">
                <p className="font-semibold text-cyan-300 text-[11px]">Core Highlights</p>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  ● Built <strong>FinPulse SaaS</strong> with Next.js 16 App Router & Drizzle ORM.
                </p>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  ● <strong>RAG Q&A Assistant</strong> with LangChain & Gemini.
                </p>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  ● <strong>Core CS</strong>: DSA, OOP, DBMS (NeetCode 150).
                </p>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  ● <strong>AWS re/Start</strong> Cloud Trainee (Tata Strive).
                </p>
              </div>
            </div>
          </div>

          {/* Action Button on Back of Card */}
          <div className="pt-2 border-t border-white/10">
            <a
              href="/Gourav_Das_Resume_FullStack.pdf"
              download="Gourav_Das_Resume.pdf"
              onClick={(e) => e.stopPropagation()}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-semibold text-xs shadow-lg shadow-purple-600/30 transition-all hover:scale-[1.02]"
            >
              <Download size={15} /> Download Latest Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
