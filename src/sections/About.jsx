import { useState } from 'react';
import { User, Code2, Sparkles, Cloud, Database } from 'lucide-react';
import FlipCard from '../components/FlipCard';
import ResumeModal from '../components/ResumeModal';

const stats = [
  { value: "B.Tech", label: "CSE • MAKAUT (7.56 CGPA)" },
  { value: "10+", label: "Projects Engineered" },
  { value: "7+", label: "Verified Certifications" },
  { value: "AWS", label: "re/Start Cloud Trainee" },
];

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 py-6">
      {/* Header */}
      <div className="mb-6 sm:mb-8 border-b border-white/10 pb-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-purple-300 border border-purple-500/20 mb-2">
          <User size={13} /> Introduction
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          About <span className="text-gradient">Gourav Das</span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-400 mt-1">
          Full-stack developer building robust, intelligent, and scalable digital solutions.
        </p>
      </div>

      {/* Main Grid: Narrative & Stats on Left, 3D FlipCard on Right */}
      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {/* Narrative & Stats (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
          <div className="space-y-3.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
            <p>
              I am a Computer Science Engineer based in Kolkata, West Bengal, passionate about architecting scalable full-stack applications, distributed databases, and generative AI systems.
            </p>
            <p>
              My hands-on experience spans building enterprise SaaS platforms with <strong>Next.js 16 App Router</strong> and <strong>Drizzle ORM (FinPulse)</strong>, production-grade <strong>MERN e-commerce marketplaces</strong> with 40+ REST endpoints and Gemini AI shopping assistants, and <strong>RAG document intelligence systems</strong> using FastAPI, LangChain, and Google Gemini.
            </p>
            <p>
              Currently, I am deepening core cloud infrastructure (VPC, EC2, S3), Linux administration, and security fundamentals through the <strong>AWS re/Start program at Tata Strive</strong>.
            </p>
          </div>

          {/* Stats Dashboard Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col items-center text-center hover:border-purple-500/30 transition-colors"
              >
                <span className="text-xl sm:text-2xl font-extrabold text-white font-mono">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-[11px] text-purple-300/80 font-medium mt-0.5 leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Core Strengths Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="inline-flex items-center gap-1 text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.04] text-gray-300 border border-white/10">
              <Code2 size={12} className="text-cyan-400" /> Full-Stack MERN & Next.js
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.04] text-gray-300 border border-white/10">
              <Sparkles size={12} className="text-purple-400" /> GenAI & RAG Pipelines
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.04] text-gray-300 border border-white/10">
              <Cloud size={12} className="text-pink-400" /> AWS Cloud & DevOps
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.04] text-gray-300 border border-white/10">
              <Database size={12} className="text-amber-400" /> SQL & Relational Databases
            </span>
          </div>
        </div>

        {/* 3D FlipCard (5 cols) */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <FlipCard onOpenResumeModal={() => setIsModalOpen(true)} />
        </div>
      </div>

      {/* Resume Modal */}
      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default About;
