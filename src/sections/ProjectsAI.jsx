import { Brain, Sparkles, Github, ArrowRight, Zap, CheckCircle2 } from "lucide-react";
import TiltCard from "../components/TiltCard";

const ProjectsAI = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="mb-6 sm:mb-8 border-b border-white/10 pb-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-2">
          <Brain size={13} /> Intelligence & GenAI Hub
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          AI & <span className="text-gradient-purple">GenAI Systems</span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-400 mt-1">
          Retrieval-Augmented Generation (RAG) pipelines, LLM agents, and high-accuracy NLP classifiers.
        </p>
      </div>

      {/* Featured AI Grid: RAG Assistant & Fake News Classifier */}
      <div className="grid lg:grid-cols-12 gap-6 items-stretch">
        {/* Main Full-Stack RAG Document Assistant (7 cols) */}
        <div className="lg:col-span-7">
          <TiltCard maxTilt={6} className="h-full">
            <div className="h-full rounded-2xl bg-[#0e0a1e]/90 border border-purple-500/40 p-6 sm:p-7 flex flex-col justify-between backdrop-blur-xl shadow-2xl shadow-purple-950/40">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    GenAI • RAG Architecture
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-yellow-400 font-semibold">
                    <Sparkles size={13} /> Spotlight System
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  RAG Document Assistant
                </h3>
                <p className="text-xs font-medium text-purple-300 mb-4">
                  FastAPI Backend • LangChain Orchestration • Google Gemini
                </p>

                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  Engineered an end-to-end Retrieval-Augmented Generation (RAG) system with a React frontend and an asynchronous FastAPI backend. Implemented PDF parsing via <code>PyPDF</code>, semantic chunking with <code>RecursiveCharacterTextSplitter</code>, vector embeddings, and LangChain context grounding powered by Google Gemini.
                </p>

                {/* Architecture Highlights */}
                <div className="grid grid-cols-2 gap-2.5 mb-6 text-xs text-gray-300">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/10">
                    <Zap size={14} className="text-purple-400 shrink-0" />
                    <span>Asynchronous FastAPI Core</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/10">
                    <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                    <span>Pydantic Strict Schemas</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {["FastAPI", "LangChain", "Google Gemini", "PyPDF", "Uvicorn", "Python 3.11", "React"].map((t) => (
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
                    href="https://github.com/grvd5678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-all shadow-lg shadow-purple-600/30"
                  >
                    <Github size={15} /> Explore Codebase
                  </a>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* IIT Patna Fake News Classifier Spotlight (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <TiltCard maxTilt={6} className="h-full">
            <div className="h-full rounded-2xl bg-[#090a18]/90 border border-cyan-500/30 p-6 sm:p-7 flex flex-col justify-between backdrop-blur-xl shadow-2xl shadow-cyan-950/20">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    NLP & Machine Learning
                  </span>
                  <span className="text-xs font-mono font-bold text-cyan-300">IIT Patna</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  Fake News Detection (NLP)
                </h3>
                <p className="text-xs text-gray-400 mb-4 font-mono">
                  IIT Patna Candidate Shortlisting Assignment
                </p>

                {/* Score highlight box */}
                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 mb-4 text-center">
                  <span className="text-3xl font-extrabold text-white">98.57%</span>
                  <p className="text-xs text-cyan-300 font-mono mt-0.5">Test Accuracy • 0.999 AUC-ROC</p>
                  <p className="text-[11px] text-gray-400 mt-1">Evaluated on ~9,000 unseen articles</p>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                  Built a TF-IDF text preprocessing and Logistic Regression classification pipeline, achieving high generalization accuracy and robust ROC curve performance.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {["Python", "Scikit-learn", "TF-IDF Vectorization", "NLP", "Pandas"].map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-lg bg-white/[0.04] text-gray-300 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-white/10 flex justify-between items-center text-xs text-gray-400">
                  <span className="font-mono">Status: Verified Model</span>
                  <a
                    href="https://github.com/grvd5678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-cyan-300 hover:text-white font-medium"
                  >
                    View Project <ArrowRight size={13} />
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
