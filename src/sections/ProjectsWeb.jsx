import { useState } from "react";
import { ExternalLink, Github, Sparkles, ChevronLeft, ChevronRight, Layers } from "lucide-react";
import TiltCard from "../components/TiltCard";

const webProjects = [
  {
    title: "FinPulse SaaS",
    subtitle: "Multi-Tenant FinTech Platform — Next.js 16, React 19, Neon, Drizzle",
    badge: "Next.js 16 • React 19 • Neon Serverless",
    desc: "Architected an enterprise multi-tenant FinTech SaaS using Next.js 16 App Router, React 19 Server Components/Actions, and Neon serverless PostgreSQL with Drizzle ORM ($0 idle infrastructure costs). Implemented subdomain-level edge routing (middleware.ts) injecting isolated tenant branding (x-tenant), cryptographically verified Clerk webhooks (Svix), an immutable audit ledger (audit_logs), and a real-time macroeconomic shock simulator (Monte Carlo stress testing).",
    tech: ["Next.js 16", "React 19", "Neon PostgreSQL", "Drizzle ORM", "Clerk Auth", "Svix", "Tailwind CSS"],
    live: "https://finpulse-saas-five.vercel.app/",
    github: "https://github.com/grvd5678",
    featured: true,
    stats: "Next.js 16 • Drizzle ORM • Multi-Tenant",
  },
  {
    title: "ShopHub",
    subtitle: "Real-Time E-Commerce & Redis Platform — React 18, Node.js, Socket.io, Redis, Mongo",
    badge: "Redis 7 Cache-Aside • Socket.io Sync",
    desc: "Engineered a production MERN e-commerce platform with 40+ RESTful endpoints, 8 Mongoose schemas with TLS auto-detection, and Docker multi-container orchestration (Mongo, Redis, API, Nginx). Built collaborative group shopping via Socket.io room state sync and a Redis 7 cache-aside layer delivering sub-5ms read latencies with auto-invalidation; integrated Stripe & Razorpay payments with webhook validation and Web Speech API voice commerce.",
    tech: ["React 18", "Node.js", "Socket.io", "Redis 7", "MongoDB", "Docker", "Stripe", "Razorpay"],
    live: "https://ecommerce-frontend-l3zz.onrender.com/",
    github: "https://github.com/grvd5678/E-Commerce",
    featured: true,
    stats: "Sub-5ms Latency • 40+ Endpoints",
  },
  {
    title: "NexusGraph",
    subtitle: "Autonomous Engineering Brain & Graph — Next.js 15, FastAPI, FalkorDB, Docker",
    badge: "FalkorDB Graph • 3-Agent Orchestration",
    desc: "Built an engineering intelligence platform on FalkorDB connecting decisions, microservices, and incident post-mortems into a property graph with a 3-agent orchestration system (Archivist, Guardian, Commander). Authored multi-hop Cypher queries (*1..5 hops) and graph algorithms (algo.pageRank, shortestPath) executing in <1 ms to compute outage blast radius, dependency bottlenecks, and autonomous task creation.",
    tech: ["Next.js 15", "FastAPI", "FalkorDB", "Docker", "Cypher", "Graph Algorithms"],
    live: "https://nexusgraph-omega.vercel.app/",
    github: "https://github.com/grvd5678",
    featured: true,
    stats: "<1ms Execution • Graph AI",
  },
  {
    title: "VoiceSprint",
    subtitle: "Voice-Driven Agile Kanban Platform — React 19, Node.js, Socket.io, Gemini",
    badge: "Wispr Flow Voice • Gemini AI • Real-Time",
    desc: "Developed an Agile sprint intake platform integrating Wispr Flow voice dictation (Alt+V) and Google Gemini API for strict JSON parsing into structured P0-P3 tickets with auto-generated markdown specs. Synchronized an interactive drag-and-drop Kanban board in real time across team members using Socket.io bi-directional event broadcasts with zero page refreshes.",
    tech: ["React 19", "Node.js", "Socket.io", "Google Gemini API", "Tailwind CSS", "Wispr Flow"],
    live: "https://voicesprint.onrender.com/",
    github: "https://github.com/grvd5678",
    featured: true,
    stats: "Zero-Refresh Sync • AI Tickets",
  },
];

const ProjectsWeb = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : webProjects.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < webProjects.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="w-full h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Header Row with Prev/Next Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8 border-b border-white/10 pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mb-2">
            <Layers size={13} /> Featured Web Hub
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Web & <span className="text-gradient-cyan">SaaS Engineering</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Enterprise SaaS platforms, full-stack marketplaces, and modern web architectures.
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handlePrev}
            aria-label="Previous web project"
            className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-gray-300 hover:text-white transition-all"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="text-xs font-mono text-cyan-300 px-2">
            {currentIndex + 1} / {webProjects.length}
          </span>
          <button
            onClick={handleNext}
            aria-label="Next web project"
            className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-gray-300 hover:text-white transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Projects Grid Display (Featuring Current Active Project prominently + side cards) */}
      <div className="grid md:grid-cols-2 gap-6 items-stretch">
        {/* Main Featured Highlight Card */}
        <TiltCard maxTilt={6} className="h-full">
          <div className="h-full rounded-2xl bg-[#0a0a18]/90 border border-cyan-500/40 p-6 sm:p-7 flex flex-col justify-between backdrop-blur-xl shadow-2xl shadow-cyan-950/20">
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  {webProjects[currentIndex].badge}
                </span>
                {webProjects[currentIndex].featured && (
                  <span className="inline-flex items-center gap-1 text-xs text-yellow-400 font-medium">
                    <Sparkles size={13} /> Featured
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                {webProjects[currentIndex].title}
              </h3>
              <p className="text-xs font-medium text-cyan-200/80 mb-3">
                {webProjects[currentIndex].subtitle}
              </p>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                {webProjects[currentIndex].desc}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {webProjects[currentIndex].tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] text-gray-300 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                {webProjects[currentIndex].live && (
                  <a
                    href={webProjects[currentIndex].live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs transition-all shadow-lg shadow-cyan-500/20"
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                )}
                {webProjects[currentIndex].github && (
                  <a
                    href={webProjects[currentIndex].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 text-gray-200 hover:text-white font-medium text-xs transition-all"
                  >
                    <Github size={15} /> Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </TiltCard>

        {/* Secondary Project Quick Selector Grid */}
        <div className="grid grid-cols-1 gap-4">
          {webProjects.map((proj, idx) => {
            const isSelected = currentIndex === idx;
            return (
              <div
                key={proj.title}
                onClick={() => setCurrentIndex(idx)}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border ${
                  isSelected
                    ? "bg-cyan-500/10 border-cyan-400/60 shadow-lg shadow-cyan-500/10"
                    : "bg-white/[0.02] border-white/10 hover:border-white/25 hover:bg-white/[0.04]"
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <h4 className={`text-sm font-bold ${isSelected ? "text-cyan-300" : "text-white"}`}>
                    {proj.title}
                  </h4>
                  <span className="text-[10px] font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded">
                    {proj.stats}
                  </span>
                </div>
                <p className="text-xs text-gray-400 line-clamp-2">{proj.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsWeb;

