import { Cpu, Database, Server, Network, Github, ExternalLink } from "lucide-react";
import TiltCard from "../components/TiltCard";

const systemProjects = [
  {
    title: "ShopHub Docker & Redis Engine",
    type: "Distributed Systems & Caching Layer",
    badge: "Docker • Redis 7 • Sub-5ms",
    desc: "Docker multi-container orchestration (Mongo, Redis, API, Nginx) powering a production MERN platform. Features a Redis 7 cache-aside layer delivering sub-5ms read latencies with automated key invalidation, Socket.io room state synchronization, and TLS auto-detection.",
    tech: ["Docker", "Docker Compose", "Redis 7", "Node.js", "Nginx", "Socket.io"],
    icon: <Server className="text-cyan-400" size={22} />,
    color: "border-cyan-500/30",
    stats: "Sub-5ms Read Latency",
    live: "https://ecommerce-frontend-l3zz.onrender.com/",
  },
  {
    title: "FalkorDB Graph Algorithm Engine",
    type: "Graph Database & Autonomous Routing",
    badge: "FalkorDB • Cypher • <1ms",
    desc: "Authored multi-hop Cypher queries (*1..5 hops) and graph algorithms (algo.pageRank, shortestPath) executing in <1 ms over architectural decisions, microservice dependencies, and incident post-mortems to compute blast radius and task orchestration.",
    tech: ["FalkorDB", "Cypher", "FastAPI", "Next.js 15", "Graph Algorithms", "Docker"],
    icon: <Network className="text-purple-400" size={22} />,
    color: "border-purple-500/30",
    stats: "<1ms Query Execution",
    live: "https://nexusgraph-omega.vercel.app/",
  },
  {
    title: "Big Data & Hadoop Storage System",
    type: "NIELIT Govt. of India Bootcamp",
    badge: "Big Data & Distributed HDFS",
    desc: "Engineered scalable distributed storage architectures using Hadoop HDFS, Spark, and Hive on Linux virtual clusters. Implemented MapReduce workflows, distributed query processing, and applied storage operations over large-scale datasets.",
    tech: ["Hadoop", "HDFS", "Apache Spark", "Apache Hive", "Linux", "Distributed Systems"],
    icon: <Database className="text-amber-400" size={22} />,
    color: "border-amber-500/30",
    stats: "90-Hour Implementation",
  },
];

const ProjectsSystems = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="mb-6 sm:mb-8 border-b border-white/10 pb-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20 mb-2">
          <Cpu size={13} /> Engineering & Infrastructure
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Systems, <span className="text-gradient-amber">Cloud & Distributed Data</span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-400 mt-1">
          High-throughput caching architectures, graph database engines, and distributed Big Data storage.
        </p>
      </div>

      {/* 3-Card Row */}
      <div className="grid md:grid-cols-3 gap-6 items-stretch">
        {systemProjects.map((project) => (
          <TiltCard key={project.title} maxTilt={7} className="h-full">
            <div
              className={`h-full rounded-2xl bg-[#0d0c18]/90 border ${project.color} p-6 flex flex-col justify-between backdrop-blur-xl shadow-xl hover:border-amber-400/50 transition-colors`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                    {project.icon}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.05] text-amber-300 border border-amber-500/20">
                    {project.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-gray-400 mb-3">{project.type}</p>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                  {project.desc}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-gray-300 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2 text-xs">
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-amber-500 hover:from-cyan-400 hover:to-amber-400 text-white font-semibold text-xs transition-all shadow-md shadow-cyan-500/20"
                    >
                      <ExternalLink size={13} /> Live Demo
                    </a>
                  ) : (
                    <span className="font-mono text-gray-400">{project.stats}</span>
                  )}
                  <a
                    href="https://github.com/grvd5678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-gray-300 hover:text-white font-medium border border-white/10 transition-all text-xs"
                  >
                    <Github size={13} /> Codebase
                  </a>
                </div>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSystems;
