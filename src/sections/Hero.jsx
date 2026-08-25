import { ChevronDown, Sparkles, MapPin } from 'lucide-react';
import Button from '../components/Button';
import { useTypingEffect } from '../hooks/useTypingEffect';
import CountUp from '../components/CountUp';

const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const PAUSE_DURATION = 2000;

const Hero = () => {
  const typingText = useTypingEffect(
    [
      'Full-Stack Developer (MERN & Next.js)',
      'GenAI & RAG Systems Builder',
      'Software Engineer',
      'Cloud & Backend Trainee',
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
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6 pt-24 pb-20">
      <div className="text-center max-w-4xl z-10">
        
        {/* Recruiter Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/15 backdrop-blur-xl shadow-xl shadow-purple-950/20 mb-8 hover:border-purple-500/40 transition-all duration-300">
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
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          Hi, I'm <span className="text-gradient">Gourav Das</span>
        </h1>

        {/* Animated Subtitle */}
        <p className="text-2xl md:text-3xl text-purple-300 mb-6 min-h-10 font-semibold tracking-wide">
          {typingText}<span className="animate-pulse text-cyan-400">|</span>
        </p>

        {/* Hero Bio */}
        <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-normal">
          Full-Stack developer specializing in modern MERN & Next.js ecosystems, with hands-on experience building enterprise financial SaaS platforms, AI shopping assistants, and RAG document intelligence systems.
        </p>

        {/* Action Buttons & Socials */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-10">
          <Button href="#projects">
            <span className="inline-flex items-center gap-2">
              <Sparkles size={16} /> View Featured Work
            </span>
          </Button>
          <Button variant="outline" href="#contact">Contact Me</Button>
        </div>

        {/* Floating Social Quick Links */}
        <div className="flex justify-center items-center gap-3 mb-12">
          <a
            href="https://github.com/grvd5678"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.08] text-gray-300 hover:text-white transition-all duration-300 shadow-md hover:scale-105"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="text-xs font-semibold">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/gourav-das-7a94a02b1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 hover:border-purple-400/50 hover:bg-white/[0.08] text-gray-300 hover:text-white transition-all duration-300 shadow-md hover:scale-105"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="text-xs font-semibold">LinkedIn</span>
          </a>

          <a
            href="https://twitter.com/gourav_das17281"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter Profile"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 hover:border-pink-400/50 hover:bg-white/[0.08] text-gray-300 hover:text-white transition-all duration-300 shadow-md hover:scale-105"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span className="text-xs font-semibold">Twitter / X</span>
          </a>
        </div>

        {/* Metrics Counter Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl shadow-purple-950/20 max-w-3xl mx-auto">
          {metrics.map((m, idx) => (
            <div key={idx} className="flex flex-col items-center p-2">
              <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                <CountUp
                  target={m.target}
                  decimals={m.decimals}
                  suffix={m.suffix}
                />
              </span>
              <span className="text-[11px] md:text-xs text-gray-400 font-medium mt-1 text-center">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer text-purple-400 hover:text-cyan-300 transition-colors z-10"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
};

export default Hero;
