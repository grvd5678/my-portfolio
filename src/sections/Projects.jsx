import { useState } from "react";
import { ExternalLink, Sparkles, FolderGit2 } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import TiltCard from "../components/TiltCard";
import MorphingTabs from "../components/MorphingTabs";

const Projects = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      title: "FinPulse SaaS",
      subtitle: "Multi-Tenant FinTech Platform — Next.js 16, React 19, Neon, Drizzle",
      category: "Full-Stack & SaaS",
      featured: true,
      desc: "Architected an enterprise multi-tenant FinTech SaaS using Next.js 16 App Router, React 19 Server Components/Actions, and Neon serverless PostgreSQL with Drizzle ORM ($0 idle infrastructure costs). Implemented subdomain-level edge routing (middleware.ts) injecting isolated tenant branding (x-tenant), cryptographically verified Clerk webhooks (Svix), an immutable audit ledger (audit_logs), and a real-time macroeconomic shock simulator (Monte Carlo stress testing).",
      tech: [
        "Next.js 16",
        "React 19",
        "Neon PostgreSQL",
        "Drizzle ORM",
        "Clerk Auth",
        "Svix Webhooks",
        "Tailwind CSS",
      ],
      year: "2026",
      link: "https://finpulse-saas-five.vercel.app/",
    },
    {
      title: "ShopHub",
      subtitle: "Real-Time E-Commerce & Redis Platform — React 18, Node.js, Socket.io, Redis, Mongo",
      category: "Full-Stack & SaaS",
      featured: true,
      desc: "Engineered a production MERN e-commerce platform with 40+ RESTful endpoints, 8 Mongoose schemas with TLS auto-detection, and Docker multi-container orchestration (Mongo, Redis, API, Nginx). Built collaborative group shopping via Socket.io room state sync and a Redis 7 cache-aside layer delivering sub-5ms read latencies with auto-invalidation; integrated Stripe & Razorpay payments with webhook validation and Web Speech API voice commerce.",
      tech: [
        "React 18",
        "Node.js",
        "Socket.io",
        "Redis 7",
        "MongoDB",
        "Docker",
        "Stripe",
        "Razorpay",
      ],
      year: "2026",
      link: "https://ecommerce-frontend-l3zz.onrender.com/",
    },
    {
      title: "NexusGraph",
      subtitle: "Autonomous Engineering Brain & Graph — Next.js 15, FastAPI, FalkorDB, Docker",
      category: "GenAI & Systems",
      featured: true,
      desc: "Built an engineering intelligence platform on FalkorDB connecting decisions, microservices, and incident post-mortems into a property graph with a 3-agent orchestration system (Archivist, Guardian, Commander). Authored multi-hop Cypher queries (*1..5 hops) and graph algorithms (algo.pageRank, shortestPath) executing in <1 ms to compute outage blast radius, dependency bottlenecks, and autonomous task creation.",
      tech: [
        "Next.js 15",
        "FastAPI",
        "FalkorDB",
        "Docker",
        "Cypher Queries",
        "Graph Algorithms",
        "Python",
      ],
      year: "2026",
      link: "https://nexusgraph-omega.vercel.app/",
    },
    {
      title: "VoiceSprint",
      subtitle: "Voice-Driven Agile Kanban Platform — React 19, Node.js, Socket.io, Gemini",
      category: "GenAI & Systems",
      featured: true,
      desc: "Developed an Agile sprint intake platform integrating Wispr Flow voice dictation (Alt+V) and Google Gemini API for strict JSON parsing into structured P0-P3 tickets with auto-generated markdown specs. Synchronized an interactive drag-and-drop Kanban board in real time across team members using Socket.io bi-directional event broadcasts with zero page refreshes.",
      tech: [
        "React 19",
        "Node.js",
        "Socket.io",
        "Google Gemini API",
        "Tailwind CSS",
        "Wispr Flow",
      ],
      year: "2026",
      link: "https://voicesprint.onrender.com/",
    },
    {
      title: "Big Data & Hadoop Storage System",
      subtitle: "Distributed Big Data Storage & Cluster Operations (NIELIT)",
      category: "GenAI & Systems",
      featured: false,
      desc: "Engineered scalable distributed storage architectures using Hadoop HDFS, Spark, and Hive on Linux virtual clusters. Implemented MapReduce workflows, distributed query processing, and applied storage operations over large-scale datasets.",
      tech: ["Hadoop", "HDFS", "Apache Spark", "Apache Hive", "Linux", "Distributed Systems"],
      year: "2026",
      link: null,
    },
  ];

  const categories = ["All", "Full-Stack & SaaS", "GenAI & Systems"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase tracking-widest inline-flex items-center gap-1.5 mb-3">
              <FolderGit2 size={13} /> Portfolio Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Production full-stack platforms, knowledge graphs, and real-time systems architected with modern cloud ecosystems.
            </p>
          </div>

          {/* Morphing Tabs Filter */}
          <div className="mb-12">
            <MorphingTabs
              tabs={categories}
              activeTab={activeCategory}
              onChange={setActiveCategory}
            />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <TiltCard key={index} maxTilt={5}>
                <div className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full group hover:border-cyan-500/40 relative">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-xs font-mono text-cyan-400 mb-1 block">
                          {project.year} • {project.category}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30">
                          <Sparkles size={11} /> Featured
                        </span>
                      )}
                    </div>

                    <p className="text-xs font-medium text-purple-300/90 mb-3">
                      {project.subtitle}
                    </p>

                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                      {project.desc}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] text-gray-300 border border-white/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-xs sm:text-sm font-semibold transition-colors"
                        >
                          <span>Live Demo</span>
                          <ExternalLink size={14} />
                        </a>
                      ) : (
                        <span className="text-xs text-gray-500 font-mono">
                          Architecture Verified
                        </span>
                      )}

                      <a
                        href="https://github.com/grvd5678"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
                      >
                        GitHub Repo →
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
