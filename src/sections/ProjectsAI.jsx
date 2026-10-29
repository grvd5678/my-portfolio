import { Brain, Sparkles, Github, Zap, CheckCircle2, ExternalLink, Mic, Network } from "lucide-react";
import TiltCard from "../components/TiltCard";

const ProjectsAI = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="mb-6 sm:mb-8 border-b border-white/10 pb-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-2">
          <Brain size={13} /> Intelligence & Graph Hub
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Autonomous & <span className="text-gradient-purple">Graph Systems</span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-400 mt-1">
          Knowledge graph intelligence, multi-agent orchestration, and voice-driven generative workflows.
        </p>
      </div>

      {/* Featured AI & Graph Grid: NexusGraph & VoiceSprint */}
      <div className="grid lg:grid-cols-12 gap-6 items-stretch">
        {/* Main NexusGraph Engineering Brain (7 cols) */}
        <div className="lg:col-span-7">
          <TiltCard maxTilt={6} className="h-full">
            <div className="h-full rounded-2xl bg-[#0e0a1e]/90 border border-purple-500/40 p-6 sm:p-7 flex flex-col justify-between backdrop-blur-xl shadow-2xl shadow-purple-950/40">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 inline-flex items-center gap-1.5">
                    <Network size={12} className="text-cyan-400" /> FalkorDB • 3-Agent Graph
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-yellow-400 font-semibold">
                    <Sparkles size={13} /> Spotlight System
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  NexusGraph — Autonomous Engineering Brain
                </h3>
                <p className="text-xs font-medium text-purple-300 mb-4">
                  Next.js 15 • FastAPI Core • FalkorDB Graph Engine • Docker
                </p>

                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  Engineered an engineering intelligence platform on FalkorDB connecting architectural decisions, microservices, and incident post-mortems into an interconnected property graph. Features a 3-agent orchestration system (<strong>Archivist</strong>, <strong>Guardian</strong>, <strong>Commander</strong>) with multi-hop Cypher queries (*1..5 hops) executing in &lt;1 ms to calculate outage blast radius and automated dependency remediation.
                </p>

                {/* Architecture Highlights */}
                <div className="grid grid-cols-2 gap-2.5 mb-6 text-xs text-gray-300">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/10">
                    <Zap size={14} className="text-purple-400 shrink-0" />
                    <span>&lt;1ms Cypher & PageRank</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/10">
                    <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                    <span>3-Agent Orchestration</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {["Next.js 15", "FastAPI", "FalkorDB", "Docker", "Cypher Queries", "Graph Algorithms", "Python"].map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-purple-950/40 text-purple-200 border border-purple-500/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <a
                    href="https://nexusgraph-omega.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-semibold text-xs transition-all shadow-lg shadow-purple-600/30"
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                  <a
                    href="https://github.com/grvd5678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 text-gray-200 hover:text-white font-medium text-xs transition-all"
                  >
                    <Github size={15} /> Source Code
                  </a>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* VoiceSprint Voice-Driven Agile Kanban (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <TiltCard maxTilt={6} className="h-full">
            <div className="h-full rounded-2xl bg-[#090a18]/90 border border-cyan-500/30 p-6 sm:p-7 flex flex-col justify-between backdrop-blur-xl shadow-2xl shadow-cyan-950/20">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 inline-flex items-center gap-1.5">
                    <Mic size={12} className="text-cyan-400" /> Voice AI • Socket.io
                  </span>
                  <span className="text-xs font-mono font-bold text-cyan-300">React 19</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  VoiceSprint — Voice Agile Kanban
                </h3>
                <p className="text-xs text-gray-400 mb-4 font-mono">
                  Voice Dictation • Gemini Parsing • Real-Time Board
                </p>

                {/* Metric highlight box */}
                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 mb-4 text-center">
                  <span className="text-2xl font-extrabold text-white">Zero Refresh</span>
                  <p className="text-xs text-cyan-300 font-mono mt-0.5">Bi-directional Socket.io Sync</p>
                  <p className="text-[11px] text-gray-400 mt-1">Wispr Flow (Alt+V) + Gemini Strict JSON</p>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                  Built an Agile intake platform translating spoken voice requirements directly into structured P0-P3 tickets with auto-generated markdown specifications and drag-and-drop real-time board sync.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {["React 19", "Node.js", "Socket.io", "Google Gemini API", "Tailwind CSS", "Wispr Flow"].map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-lg bg-white/[0.04] text-gray-300 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center gap-2">
                  <a
                    href="https://voicesprint.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold text-xs transition-all shadow-md shadow-cyan-500/20"
                  >
                    <ExternalLink size={13} /> Live Demo
                  </a>
                  <a
                    href="https://github.com/grvd5678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 text-gray-300 hover:text-white text-xs font-medium transition-all"
                  >
                    <Github size={13} /> Codebase
                  </a>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </div>
  );
};

export default ProjectsAI;