import { Sparkles, MapPin, ArrowRight, Eye } from 'lucide-react';
import { useTypingEffect } from '../hooks/useTypingEffect';
import CountUp from '../components/CountUp';

const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const PAUSE_DURATION = 2000;

const Hero = ({ onNavigateSlide }) => {
  const typingText = useTypingEffect(
    [
      'Full-Stack Developer (MERN & Next.js)',
      'AI & RAG Systems Builder',
      'Scalable Web & Cloud Architect',
      'Software Engineer',
    ],
    TYPING_SPEED,
    DELETING_SPEED,
    PAUSE_DURATION
  );

  const metrics = [
    { target: 98.57, decimals: 2, suffix: "%", label: "NLP Accuracy (IIT Patna)" },
    { target: 40, decimals: 0, suffix: "+", label: "MERN REST Endpoints" },
    { target: 100, decimals: 0, suffix: "/100", label: "Lighthouse Performance" },
    { target: 7, decimals: 0, suffix: "+", label: "Industry Certifications" },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center max-w-6xl mx-auto px-4 sm:px-6 py-6 text-center">
      {/* Recruiter Status Pill */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/15 backdrop-blur-xl shadow-xl shadow-purple-950/20 mb-6 hover:border-purple-500/40 transition-all duration-300">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span className="text-xs font-semibold text-gray-200 tracking-wide">
          Open to Work • Full-Stack / MERN Developer
        </span>
        <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-purple-300 font-medium pl-2 border-l border-white/10">
          <MapPin size={11} className="text-purple-400" /> Kolkata, IN
        </span>
      </div>

      {/* Hero Title */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-4 tracking-tight">
        Hi, I'm <span className="text-gradient">Gourav Das</span>
      </h1>

      {/* Animated Subtitle */}
      <p className="text-xl sm:text-2xl md:text-3xl text-purple-300 mb-5 min-h-[36px] font-semibold tracking-wide">
        {typingText}<span className="animate-pulse text-cyan-400">|</span>
      </p>

      {/* Hero Bio */}
      <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-7 max-w-2xl mx-auto leading-relaxed font-normal">
        Full-Stack developer specializing in modern MERN & Next.js ecosystems, with hands-on experience building enterprise financial SaaS platforms, AI shopping assistants, and RAG document intelligence systems.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mb-8">
        <button
          onClick={() => onNavigateSlide && onNavigateSlide(3)}
          className="flex items-center gap-2 py-3 px-6 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-semibold text-sm shadow-xl shadow-purple-900/30 transition-all hover:scale-105"
        >
          <Eye size={16} /> View Featured Work
        </button>

        <a
          href="https://github.com/grvd5678"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 py-3 px-6 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 text-gray-200 hover:text-white font-medium text-sm transition-all hover:scale-105"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </a>

        <button
          onClick={() => onNavigateSlide && onNavigateSlide(7)}
          className="flex items-center gap-2 py-3 px-6 rounded-full border border-purple-500/50 hover:bg-purple-500/10 text-purple-300 hover:text-white font-medium text-sm transition-all hover:scale-105"
        >
          Contact Me <ArrowRight size={15} />
        </button>
      </div>

      {/* Floating Social Quick Links */}
      <div className="flex justify-center items-center gap-3 mb-8">
        <a
          href="https://github.com/grvd5678"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.08] text-gray-300 hover:text-white transition-all text-xs"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/gourav-das-7a94a02b1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-purple-400/50 hover:bg-white/[0.08] text-gray-300 hover:text-white transition-all text-xs"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </a>

        <a
          href="https://twitter.com/gourav_das17281"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter Profile"
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-pink-400/50 hover:bg-white/[0.08] text-gray-300 hover:text-white transition-all text-xs"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          Twitter / X
        </a>
      </div>

      {/* Metrics Counter Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl shadow-purple-950/20 max-w-3xl mx-auto w-full">
        {metrics.map((m, idx) => (
          <div key={idx} className="flex flex-col items-center p-1.5">
            <span className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              <CountUp target={m.target} decimals={m.decimals} suffix={m.suffix} />
            </span>
            <span className="text-[10px] sm:text-[11px] md:text-xs text-gray-400 font-medium mt-0.5 text-center">
              {m.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
