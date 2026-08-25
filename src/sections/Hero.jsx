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

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button href="#projects">
            <span className="inline-flex items-center gap-2">
              <Sparkles size={16} /> View Featured Work
            </span>
          </Button>
          <Button variant="outline" href="#contact">Contact Me</Button>
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
