import { useState } from "react";
import { Cpu, Code2, Layout, Database, Cloud, Sparkles, ArrowRight } from "lucide-react";
import DomainRotator from "../components/DomainRotator";

const skillGroups = [
  {
    category: "Full-Stack & Web Core",
    icon: <Layout className="text-cyan-400" size={18} />,
    color: "border-cyan-500/30",
    skills: [
      "Next.js 16/15 (App Router)",
      "React 19/18",
      "Node.js 20 (ES Modules)",
      "Express.js 5",
      "Django",
      "Socket.io (WebSockets)",
      "RESTful API Architecture",
      "JWT Auth & RBAC",
    ],
  },
  {
    category: "Databases & Caching",
    icon: <Database className="text-purple-400" size={18} />,
    color: "border-purple-500/30",
    skills: [
      "PostgreSQL (Neon Serverless)",
      "Redis 7 (Cache-Aside, Sub-5ms)",
      "FalkorDB (Graph DB / Cypher)",
      "MongoDB (Atlas & Mongoose 9)",
      "Drizzle ORM",
      "MySQL",
      "SQLite",
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="text-amber-400" size={18} />,
    color: "border-amber-500/30",
    skills: [
      "AWS Certified Cloud Practitioner",
      "AWS (ECS Fargate, EC2, S3)",
      "AWS (CloudWatch, VPC, IAM)",
      "Docker & Docker Compose",
      "Nginx",
      "GitHub Actions (CI/CD)",
      "Vercel & Render",
    ],
  },
  {
    category: "Languages & Core CS",
    icon: <Code2 className="text-pink-400" size={18} />,
    color: "border-pink-500/30",
    skills: [
      "TypeScript",
      "JavaScript (ES6+)",
      "Python",
      "Tailwind CSS v4",
      "Data Structures & Algorithms",
      "OOP & DBMS (NeetCode 150)",
      "Big Data (Hadoop, HDFS, Spark)",
    ],
  },
];

const skillProjectMatrix = {
  "Next.js 16/15 (App Router)": {
    project: "FinPulse SaaS & NexusGraph",
    impact: "Architected multi-tenant edge routing (middleware.ts), Server Components & Actions with zero cold bloat.",
    slideIndex: 3,
    type: "Production SaaS",
  },
  "React 19/18": {
    project: "FinPulse, ShopHub & VoiceSprint",
    impact: "Engineered real-time drag-and-drop Kanban, collaborative shopping rooms, and modern Server Actions.",
    slideIndex: 3,
    type: "Frontend Core",
  },
  "Node.js 20 (ES Modules)": {
    project: "ShopHub & VoiceSprint",
    impact: "Built 40+ RESTful endpoints, Socket.io event buses, and asynchronous background worker queues.",
    slideIndex: 3,
    type: "Backend Runtime",
  },
  "Express.js 5": {
    project: "ShopHub E-Commerce",
    impact: "Layered MVC architecture with JWT auth, TLS auto-detection, rate limiting, and Stripe/Razorpay webhooks.",
    slideIndex: 3,
    type: "REST API Cluster",
  },
  "Django": {
    project: "Python Web Backends",
    impact: "Implemented secure ORM queries, administrative portals, and modular microservice endpoints.",
    slideIndex: 3,
    type: "Backend Framework",
  },
  "Socket.io (WebSockets)": {
    project: "ShopHub & VoiceSprint",
    impact: "Delivered bi-directional room synchronization for multiplayer carts and zero-refresh Kanban broadcast.",
    slideIndex: 3,
    type: "Real-Time Engine",
  },
  "RESTful API Architecture": {
    project: "ShopHub & FinPulse",
    impact: "Designed 40+ validated endpoints with query pagination, compound filters, and cryptographically verified webhooks.",
    slideIndex: 3,
    type: "API Design",
  },
  "JWT Auth & RBAC": {
    project: "FinPulse (Clerk/Svix) & ShopHub",
    impact: "Role-based access control with secure HTTP-only cookie tokens and cryptographically signed webhooks.",
    slideIndex: 3,
    type: "Security & Auth",
  },
  "PostgreSQL (Neon Serverless)": {
    project: "FinPulse SaaS",
    impact: "Engineered zero-idle-cost serverless relational database with Drizzle ORM migrations and tenant isolation.",
    slideIndex: 3,
    type: "Relational DB",
  },
  "Redis 7 (Cache-Aside, Sub-5ms)": {
    project: "ShopHub E-Commerce",
    impact: "Implemented cache-aside layer delivering sub-5ms read latencies with automated key invalidation on write.",
    slideIndex: 3,
    type: "Distributed Cache",
  },
  "FalkorDB (Graph DB / Cypher)": {
    project: "NexusGraph Autonomous Brain",
    impact: "Authored multi-hop Cypher queries (*1..5 hops) in <1ms to calculate microservice blast radius and task DAGs.",
    slideIndex: 3,
    type: "Graph Intelligence",
  },
  "MongoDB (Atlas & Mongoose 9)": {
    project: "ShopHub E-Commerce",
    impact: "Architected 8 schemas with TLS auto-detection, compound indexing, and high-performance aggregation pipelines.",
    slideIndex: 3,
    type: "Document Store",
  },
  "Drizzle ORM": {
    project: "FinPulse SaaS",
    impact: "Constructed type-safe SQL schemas, zero runtime overhead, and automated database migration pipelines.",
    slideIndex: 3,
    type: "Type-Safe ORM",
  },
  "MySQL": {
    project: "Relational Systems",
    impact: "Structured normalized relational schemas, ACID transactions, and foreign key constraint validation.",
    slideIndex: 3,
    type: "SQL Database",
  },
  "SQLite": {
    project: "Local Embedded Testing",
    impact: "Fast in-memory and file-based zero-configuration database testing for rapid prototyping.",
    slideIndex: 3,
    type: "Embedded DB",
  },
  "AWS Certified Cloud Practitioner": {
    project: "Official AWS Credential",
    impact: "Score 800+, Validation ID: 85072ebc063548f0b29c688c19317a06. Core VPC, IAM, S3, and ECS Fargate mastery.",
    slideIndex: 6,
    type: "AWS Certification",
  },
  "AWS (ECS Fargate, EC2, S3)": {
    project: "Cloud Deployments",
    impact: "Serverless container orchestration on ECS Fargate, S3 asset buckets, and resilient EC2 hosting.",
    slideIndex: 6,
    type: "Cloud Compute",
  },
  "AWS (CloudWatch, VPC, IAM)": {
    project: "Cloud Infrastructure",
    impact: "Engineered isolated VPC subnets, least-privilege IAM policies, and CloudWatch performance monitoring.",
    slideIndex: 6,
    type: "Cloud Security",
  },
  "Docker & Docker Compose": {
    project: "ShopHub & NexusGraph",
    impact: "Multi-container orchestration linking Mongo, Redis, Node API, and Nginx reverse proxies with health checks.",
    slideIndex: 5,
    type: "Containerization",
  },
  "Nginx": {
    project: "ShopHub E-Commerce",
    impact: "Configured reverse proxy, SSL termination, client payload limits, and static asset edge caching.",
    slideIndex: 5,
    type: "Reverse Proxy",
  },
  "GitHub Actions (CI/CD)": {
    project: "All Production Apps",
    impact: "Automated linting, build verification, and continuous zero-downtime deployment pipelines.",
    slideIndex: 3,
    type: "DevOps Pipeline",
  },
  "Vercel & Render": {
    project: "FinPulse & ShopHub",
    impact: "Edge-hosted Next.js apps with automated preview deployments and production SSL certs.",
    slideIndex: 3,
    type: "Cloud Hosting",
  },
  "TypeScript": {
    project: "FinPulse & NexusGraph",
    impact: "End-to-end type safety, strict interface contracts, and compile-time defect prevention.",
    slideIndex: 3,
    type: "Type System",
  },
  "JavaScript (ES6+)": {
    project: "All Modern Codebases",
    impact: "Mastery of ES Modules, async/await, closures, functional array methods, and event loops.",
    slideIndex: 3,
    type: "Core Language",
  },
  "Python": {
    project: "NexusGraph (FastAPI)",
    impact: "Built asynchronous graph endpoints, agent orchestration scripts, and data pipeline processors.",
    slideIndex: 4,
    type: "Backend & Systems",
  },
  "Tailwind CSS v4": {
    project: "FinPulse, ShopHub & Portfolio",
    impact: "Engineered responsive glassmorphism UI, theme tokens, and dynamic layout systems.",
    slideIndex: 3,
    type: "UI Architecture",
  },
  "Data Structures & Algorithms": {
    project: "Graph Engine & Algorithm Optimization",
    impact: "Applied Dijkstra shortest-path, PageRank, DFS/BFS traversals, and NeetCode 150 problem-solving.",
    slideIndex: 4,
    type: "Computer Science",
  },
  "OOP & DBMS (NeetCode 150)": {
    project: "System Architecture",
    impact: "Clean SOLID architecture, normalized relational schemas, and high-concurrency transaction handling.",
    slideIndex: 5,
    type: "Core Foundations",
  },
  "Big Data (Hadoop, HDFS, Spark)": {
    project: "Hadoop Storage System (NIELIT)",
    impact: "Engineered distributed HDFS storage clusters and MapReduce workflows on Linux virtual clusters.",
    slideIndex: 5,
    type: "Distributed Systems",
  },
};

const Skills = ({ onNavigateSlide }) => {
  const [activeSkill, setActiveSkill] = useState("Next.js 16/15 (App Router)");

  const activeConnection = skillProjectMatrix[activeSkill] || null;

  return (
    <div className="w-full h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 py-6">
      {/* Header */}
      <div className="mb-5 sm:mb-6 border-b border-white/10 pb-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-pink-500/10 text-pink-300 border border-pink-500/20 mb-2">
          <Cpu size={13} /> Toolbox & Competencies
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-400 mt-1">
          Modern full-stack technologies, distributed cloud infrastructure, and AI systems linked to real production applications.
        </p>
      </div>

      {/* Grid: 4 Grouped Cards on Left (7 cols) + 3D Domain Rotator on Right (5 cols) */}
      <div className="grid lg:grid-cols-12 gap-5 items-start">
        {/* Left Column: 4 Skill Cards Grid + Interactive Skill-to-Project Matrix Inspector */}
        <div className="lg:col-span-7 flex flex-col gap-3.5">
          <div className="grid sm:grid-cols-2 gap-3.5">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className={`p-3.5 rounded-2xl bg-[#0b0b18]/85 border ${group.color} backdrop-blur-xl hover:border-white/30 transition-all flex flex-col justify-between shadow-lg shadow-black/20`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/10">
                      {group.icon}
                    </div>
                    <h3 className="text-xs font-bold text-white tracking-wide">{group.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => {
                      const isHovered = activeSkill === skill;
                      return (
                        <button
                          key={skill}
                          type="button"
                          onMouseEnter={() => setActiveSkill(skill)}
                          onClick={() => setActiveSkill(skill)}
                          className={`text-[11px] font-mono px-2.5 py-1 rounded-lg border transition-all text-left ${
                            isHovered
                              ? "bg-cyan-500/20 text-cyan-200 border-cyan-400 shadow-sm shadow-cyan-500/20"
                              : "bg-white/[0.03] text-gray-200 border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.08]"
                          }`}
                        >
                          {skill}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Skill-to-Project Connection Inspector */}
          <div
            className={`p-3.5 rounded-xl border transition-all duration-300 ${
              activeConnection
                ? "bg-gradient-to-r from-cyan-950/40 via-purple-950/30 to-[#0b0b18] border-cyan-500/40 shadow-lg shadow-cyan-950/30"
                : "bg-white/[0.02] border-white/10"
            }`}
          >
            {activeConnection ? (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span className="text-xs font-bold text-white font-mono">{activeSkill}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      {activeConnection.type}
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    <span className="text-cyan-300 font-semibold">Applied in {activeConnection.project}:</span>{" "}
                    {activeConnection.impact}
                  </p>
                </div>
                {onNavigateSlide && (
                  <button
                    onClick={() => onNavigateSlide(activeConnection.slideIndex)}
                    className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>View Project</span>
                    <ArrowRight size={13} />
                  </button>
                )}
              </div>
            ) : (
              <div className="flex items-center justify-between text-xs text-gray-400 py-1">
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-purple-400 shrink-0" />
                  <span>Hover or tap any skill pill above to inspect real-world project impact and architecture linkage.</span>
                </div>
                <span className="text-[10px] font-mono text-cyan-400/80 hidden sm:inline">Skill Matrix</span>
              </div>
            )}
          </div>
        </div>

        {/* 3D Domain Rotator (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-center items-center h-full">
          <DomainRotator />
        </div>
      </div>
    </div>
  );
};

export default Skills;
