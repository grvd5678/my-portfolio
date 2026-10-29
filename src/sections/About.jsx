import { User, Code2, Sparkles, Cloud, Database } from 'lucide-react';
import FlipCard from '../components/FlipCard';

const stats = [
  { value: "B.Tech", label: "CSE • MAKAUT (7.56 CGPA)" },
  { value: "40+", label: "RESTful Endpoints" },
  { value: "<1ms", label: "Graph Query Latency" },
  { value: "AWS", label: "Certified Cloud Practitioner" },
];

const About = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 py-6">
      {/* Header */}
      <div className="mb-6 sm:mb-8 border-b border-white/10 pb-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-purple-300 border border-purple-500/20 mb-2">
          <User size={13} /> Professional Profile
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          About <span className="text-gradient">Gourav Das</span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-400 mt-1">
          Full-Stack Software Engineer • Next.js 16, React 19, Node.js & AWS Certified Cloud Practitioner.
        </p>
      </div>

      {/* Main Grid: Narrative & Stats on Left, 3D FlipCard on Right */}
      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {/* Narrative & Stats (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
          <div className="space-y-3.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
            <p>
              I am a <strong>Full-Stack Software Developer</strong> specializing in Next.js 16, React 19, and the MERN stack with hands-on experience building distributed cloud systems, real-time collaboration engines, and enterprise SaaS platforms.
            </p>
            <p>
              My engineering work includes architecting <strong>FinPulse SaaS</strong> (multi-tenant serverless PostgreSQL with Next.js 16 App Router & Drizzle), <strong>ShopHub</strong> (production MERN e-commerce with sub-5ms Redis 7 caching and Socket.io room state sync), and <strong>NexusGraph</strong> (autonomous engineering brain with FalkorDB knowledge graph and multi-hop Cypher queries executing in &lt;1ms).
            </p>
            <p>
              As an <strong>AWS Certified Cloud Practitioner</strong>, I bring deep expertise in RESTful API architecture, database modeling (SQL, NoSQL, Graph), and microservice orchestration (Docker, ECS Fargate, CloudWatch, Nginx).
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
              <Code2 size={12} className="text-cyan-400" /> Next.js 16 & React 19
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.04] text-gray-300 border border-white/10">
              <Sparkles size={12} className="text-purple-400" /> Redis 7 & WebSockets
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.04] text-gray-300 border border-white/10">
              <Cloud size={12} className="text-amber-400" /> AWS Certified Cloud Practitioner
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.04] text-gray-300 border border-white/10">
              <Database size={12} className="text-cyan-400" /> FalkorDB & PostgreSQL
            </span>
          </div>
        </div>

        {/* 3D FlipCard (5 cols) */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <FlipCard />
        </div>
      </div>
    </div>
  );
};

export default About;
