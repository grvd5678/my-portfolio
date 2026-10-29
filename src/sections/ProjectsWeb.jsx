import { useState } from "react";
import {
  ExternalLink,
  Github,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Layers,
  Cpu,
  BarChart3,
  Layout,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
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
    architecture: {
      decision: "Why Neon + Drizzle? Serverless branching and auto-suspend reduce idle infrastructure costs to $0 while maintaining sub-80ms edge cold starts with type-safe Drizzle SQL queries.",
      flow: [
        {
          stage: "Edge Routing",
          node: "Next.js 16 Middleware",
          detail: "Resolves subdomain hostname, extracts tenant slug, and injects 'x-tenant' context header.",
        },
        {
          stage: "Compute & Auth",
          node: "React 19 Server Actions + Clerk",
          detail: "Executes zero-bundle server logic with Svix cryptographically signed webhook validation.",
        },
        {
          stage: "Data Access",
          node: "Drizzle ORM Type-Safe Layer",
          detail: "Enforces tenant_id isolation across all relational queries with compile-time SQL validation.",
        },
        {
          stage: "Persistence & Ledger",
          node: "Neon Serverless Postgres",
          detail: "Stores immutable audit_logs ledger with automatic connection pooling and instant scale-up.",
        },
        {
          stage: "Simulation Engine",
          node: "Monte Carlo Worker",
          detail: "Simulates 10,000 real-time macroeconomic shock scenarios with zero UI thread freezing.",
        },
      ],
    },
    metrics: [
      { value: "$0", label: "Idle Cloud Spend", desc: "Neon serverless compute scales down to zero when inactive." },
      { value: "10,000", label: "Monte Carlo Runs", desc: "Real-time client-side financial portfolio stress simulations." },
      { value: "100%", label: "Cryptographic Audit", desc: "Svix webhook signature verification prevents replay attacks." },
      { value: "<80ms", label: "Edge Middleware", desc: "Subdomain tenant extraction and security header injection." },
    ],
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
    architecture: {
      decision: "Why Redis 7 Cache-Aside? Offloads 90%+ of read requests from MongoDB during peak flash sales while ensuring instant key invalidation on price or inventory writes.",
      flow: [
        {
          stage: "Reverse Proxy",
          node: "Nginx Gateway",
          detail: "Handles SSL termination, rate limiting, and reverse proxy routing to Node cluster.",
        },
        {
          stage: "In-Memory Cache",
          node: "Redis 7 (Sub-5ms Hit)",
          detail: "Cache-aside pattern serves products and cart state with automated TTL & write invalidation.",
        },
        {
          stage: "API Engine",
          node: "Express.js 5 MVC Cluster",
          detail: "40+ RESTful endpoints, JWT authentication, and Stripe/Razorpay webhook reconciliation.",
        },
        {
          stage: "Primary DB",
          node: "MongoDB Replica / Atlas",
          detail: "8 strict Mongoose schemas with TLS auto-detection, compound indexing, and transactions.",
        },
        {
          stage: "Real-Time Sync",
          node: "Socket.io Room Bus",
          detail: "Bi-directional multiplayer cart state synchronization with zero page refreshes.",
        },
      ],
    },
    metrics: [
      { value: "<5ms", label: "Redis Read Latency", desc: "In-memory cache-aside response time on hot catalog items." },
      { value: "40+", label: "RESTful Endpoints", desc: "Production API endpoints with input validation & rate limiting." },
      { value: "4 Services", label: "Docker Orchestration", desc: "Docker Compose cluster linking Mongo, Redis, Node, and Nginx." },
      { value: "2 Gateways", label: "Payment Pipelines", desc: "Dual Stripe and Razorpay webhook reconciliation engines." },
    ],
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
    architecture: {
      decision: "Why FalkorDB over Vector RAG? Vector embeddings lose hierarchical structural dependencies. FalkorDB computes exact multi-hop relationship traversals in <1ms using native C graph engines.",
      flow: [
        {
          stage: "Ingestion Agent",
          node: "Archivist Agent",
          detail: "Parses architecture decision records (ADRs), git commits, and incident post-mortems into graph nodes.",
        },
        {
          stage: "Validation Agent",
          node: "Guardian Agent",
          detail: "Executes deep Cypher queries (*1..5 hops) in <1ms to detect circular dependencies and vulnerabilities.",
        },
        {
          stage: "Execution Agent",
          node: "Commander Agent",
          detail: "Computes PageRank blast radius during simulated microservice outages and dispatches remediation tasks.",
        },
        {
          stage: "Graph Engine",
          node: "FalkorDB In-Memory",
          detail: "Ultra-low latency graph database running inside Docker with native Cypher query compilation.",
        },
        {
          stage: "Visual Explorer",
          node: "Next.js 15 Force Graph",
          detail: "Interactive 2D/3D force-directed canvas visualizing dependencies and incident paths.",
        },
      ],
    },
    metrics: [
      { value: "<1ms", label: "Cypher Query Speed", desc: "Deep multi-hop graph query execution time on FalkorDB." },
      { value: "3 Agents", label: "Autonomous Pipeline", desc: "Archivist, Guardian, and Commander cooperative agent loop." },
      { value: "5 Hops", label: "Blast Radius Depth", desc: "Recursive dependency traversal for microservice failure impact." },
      { value: "100%", label: "In-Memory Engine", desc: "C-based graph engine eliminating disk bottleneck latency." },
    ],
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
    architecture: {
      decision: "Why Wispr Flow + Gemini? Cuts ticket filing friction from 3 minutes of typing to a 15-second voice dictation with guaranteed strict schema JSON adherence.",
      flow: [
        {
          stage: "Voice Capture",
          node: "Wispr Flow (Alt+V)",
          detail: "Captures natural spoken developer speech with instant transcription streaming.",
        },
        {
          stage: "Semantic Engine",
          node: "Google Gemini 1.5 Flash",
          detail: "Extracts structured JSON schema: Title, Acceptance Criteria, Priority (P0-P3), and markdown specs.",
        },
        {
          stage: "Sprint API",
          node: "Node.js & Express API",
          detail: "Validates ticket payload integrity and injects tasks into active sprint backlog.",
        },
        {
          stage: "Real-Time Hub",
          node: "Socket.io Broadcast",
          detail: "Emits instant 'ticket:created' and 'column:moved' events to all connected clients.",
        },
        {
          stage: "Interactive Board",
          node: "React 19 DnD Canvas",
          detail: "Drag-and-drop Kanban board renders real-time state changes with zero page refreshes.",
        },
      ],
    },
    metrics: [
      { value: "15s", label: "Voice-to-Ticket Speed", desc: "From voice dictation to fully formatted Jira-style ticket." },
      { value: "0 Refreshes", label: "Real-Time Sync", desc: "Socket.io bi-directional updates across all team browser tabs." },
      { value: "P0–P3", label: "Auto-Priority Scoring", desc: "Automated ticket categorization based on semantic urgency." },
      { value: "100%", label: "Strict JSON Adherence", desc: "Guaranteed structured LLM output without format breakage." },
    ],
  },
];

const ProjectsWeb = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState("overview"); // 'overview' | 'architecture' | 'metrics'

  const activeProject = webProjects[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : webProjects.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < webProjects.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="w-full h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 py-6">
      {/* Header Row with Prev/Next Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-5 sm:mb-6 border-b border-white/10 pb-3">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mb-2">
            <Layers size={13} /> Featured Web Hub
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Web & <span className="text-gradient-cyan">SaaS Engineering</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Enterprise multi-tenant platforms, distributed caching, and AI systems with interactive system design inspection.
          </p>
        </div>

        {/* Navigation Arrows & Mode Indicator */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handlePrev}
            aria-label="Previous project"
            className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-gray-300 hover:text-white transition-all"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="text-xs font-mono text-cyan-300 px-2">
            {currentIndex + 1} / {webProjects.length}
          </span>
          <button
            onClick={handleNext}
            aria-label="Next project"
            className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-gray-300 hover:text-white transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Main 2-Column Display: Interactive Featured Card (Left) + Quick Project Navigator (Right) */}
      <div className="grid lg:grid-cols-12 gap-5 items-stretch">
        {/* Main Interactive Project Card (7 cols) */}
        <div className="lg:col-span-8 flex flex-col">
          <TiltCard maxTilt={4} className="h-full">
            <div className="h-full rounded-2xl bg-[#0a0a18]/90 border border-cyan-500/40 p-5 sm:p-6 flex flex-col justify-between backdrop-blur-xl shadow-2xl shadow-cyan-950/20">
              <div>
                {/* Top Bar: Badge, Title & 3-Way Mode Switcher */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      {activeProject.badge}
                    </span>
                    {activeProject.featured && (
                      <span className="inline-flex items-center gap-1 text-xs text-yellow-400 font-medium">
                        <Sparkles size={12} /> Featured
                      </span>
                    )}
                  </div>

                  {/* 3-Way Mode Toggle Button Segment */}
                  <div className="inline-flex p-1 rounded-xl bg-black/60 border border-white/10 self-start sm:self-auto">
                    <button
                      onClick={() => setViewMode("overview")}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                        viewMode === "overview"
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm"
                          : "text-gray-400 hover:text-gray-200"
                      }`}
                    >
                      <Layout size={13} />
                      <span>Overview</span>
                    </button>
                    <button
                      onClick={() => setViewMode("architecture")}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                        viewMode === "architecture"
                          ? "bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-sm"
                          : "text-gray-400 hover:text-gray-200"
                      }`}
                    >
                      <Cpu size={13} />
                      <span>Architecture</span>
                    </button>
                    <button
                      onClick={() => setViewMode("metrics")}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                        viewMode === "metrics"
                          ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm"
                          : "text-gray-400 hover:text-gray-200"
                      }`}
                    >
                      <BarChart3 size={13} />
                      <span>Metrics</span>
                    </button>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1">
                  {activeProject.title}
                </h3>
                <p className="text-xs font-medium text-cyan-200/80 mb-4">
                  {activeProject.subtitle}
                </p>

                {/* VIEW 1: Overview Mode */}
                {viewMode === "overview" && (
                  <div className="animate-fadeIn">
                    <p className="text-sm text-gray-300 leading-relaxed mb-5">
                      {activeProject.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {activeProject.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] text-gray-300 border border-white/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* VIEW 2: System Architecture Flow Mode */}
                {viewMode === "architecture" && (
                  <div className="animate-fadeIn space-y-3 mb-5">
                    {/* Architecture Decision Callout */}
                    <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/30 text-xs text-purple-200 flex items-start gap-2.5">
                      <ShieldCheck size={16} className="text-purple-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block mb-0.5">Key Architecture Decision</strong>
                        {activeProject.architecture.decision}
                      </div>
                    </div>

                    {/* Visual Interconnected Pipeline Nodes */}
                    <div className="space-y-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 block">
                        End-to-End System Pipeline
                      </span>
                      <div className="grid gap-2">
                        {activeProject.architecture.flow.map((step, idx) => (
                          <div
                            key={step.stage}
                            className="flex items-start gap-2.5 p-2 rounded-lg bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 transition-colors"
                          >
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shrink-0">
                              0{idx + 1}
                            </span>
                            <div className="min-w-0">
                              <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                                <span>{step.stage}:</span>
                                <span className="text-cyan-300 font-mono text-[11px]">{step.node}</span>
                              </div>
                              <p className="text-[11px] text-gray-300 leading-snug mt-0.5">
                                {step.detail}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* VIEW 3: Impact Metrics Mode */}
                {viewMode === "metrics" && (
                  <div className="animate-fadeIn space-y-4 mb-5">
                    <div className="grid grid-cols-2 gap-3">
                      {activeProject.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-400/30 transition-all flex flex-col justify-between"
                        >
                          <div>
                            <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-cyan-300 to-white block font-mono">
                              {metric.value}
                            </span>
                            <span className="text-xs font-bold text-white block mt-1">
                              {metric.label}
                            </span>
                          </div>
                          <p className="text-[11px] text-gray-400 mt-2 leading-snug">
                            {metric.desc}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="p-2.5 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-xs text-gray-300 flex items-center gap-2">
                      <Zap size={14} className="text-cyan-400 shrink-0" />
                      <span>Validated in production environment with zero runtime schema errors.</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Actions: Live Demo & GitHub */}
              <div className="flex items-center gap-3 pt-3.5 border-t border-white/10">
                {activeProject.live && (
                  <a
                    href={activeProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs transition-all shadow-lg shadow-cyan-500/20"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                )}
                {activeProject.github && (
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 text-gray-200 hover:text-white font-medium text-xs transition-all"
                  >
                    <Github size={14} /> Source Code
                  </a>
                )}
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Right Column: Quick Project Switcher Cards (4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-2.5 justify-between">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-mono uppercase tracking-wider text-gray-400">
              Select Project
            </span>
            <span className="text-[11px] font-mono text-cyan-400">
              {currentIndex + 1} of {webProjects.length}
            </span>
          </div>

          {webProjects.map((proj, idx) => {
            const isSelected = currentIndex === idx;
            return (
              <div
                key={proj.title}
                onClick={() => setCurrentIndex(idx)}
                className={`p-3.5 rounded-xl cursor-pointer transition-all duration-300 border ${
                  isSelected
                    ? "bg-cyan-500/10 border-cyan-400/60 shadow-lg shadow-cyan-500/10 scale-[1.01]"
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
                <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                  {proj.subtitle}
                </p>
                {isSelected && (
                  <div className="mt-2 pt-2 border-t border-cyan-500/20 flex items-center justify-between text-[11px] text-cyan-300">
                    <span>Active in Inspector</span>
                    <ArrowRight size={12} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsWeb;
