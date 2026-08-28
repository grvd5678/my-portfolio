import { Cpu, Heart, Film, Database, Github } from "lucide-react";
import TiltCard from "../components/TiltCard";

const systemProjects = [
  {
    title: "Heart Disease Prediction System",
    type: "B.Tech Final Year Capstone Project",
    badge: "Machine Learning (82% Acc)",
    desc: "Evaluated and benchmarked 5 supervised machine learning classifiers (Logistic Regression, KNN, SVM, Decision Tree, Random Forest) on clinical patient telemetry to predict early-stage cardiovascular risks with up to 82% accuracy.",
    tech: ["Python", "Scikit-Learn", "SVM", "Random Forest", "Matplotlib", "Seaborn"],
    icon: <Heart className="text-rose-400" size={22} />,
    color: "border-rose-500/30",
    stats: "5 Classifiers Compared",
  },
  {
    title: "Big Data & Hadoop Storage System",
    type: "NIELIT Govt. of India Bootcamp Project",
    badge: "Big Data & Distributed HDFS",
    desc: "Engineered scalable distributed storage architectures using Hadoop HDFS, Spark, and Hive on Linux virtual clusters. Implemented MapReduce workflows and distributed query processing over large-scale unstructured datasets.",
    tech: ["Hadoop", "HDFS", "Apache Spark", "Apache Hive", "Linux", "Distributed Systems"],
    icon: <Database className="text-amber-400" size={22} />,
    color: "border-amber-500/30",
    stats: "90-Hour Implementation",
  },
  {
    title: "Movie Recommendation System",
    type: "Ardent Computech Capstone Project",
    badge: "Collaborative Filtering",
    desc: "Implemented content-based and collaborative filtering recommendation engines using Cosine Similarity metrics, matrix factorization, and vector nearest neighbors in Python.",
    tech: ["Python", "Pandas", "Scikit-Learn", "NumPy", "Recommendation Algorithms"],
    icon: <Film className="text-purple-400" size={22} />,
    color: "border-purple-500/30",
    stats: "Cosine Similarity Matrix",
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
          Systems, <span className="text-gradient-amber">Big Data & ML</span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-400 mt-1">
          Predictive analytics, distributed Big Data architectures (Hadoop/HDFS), and computational capstones.
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

                <div className="pt-3 border-t border-white/10 flex justify-between items-center text-xs">
                  <span className="font-mono text-gray-400">{project.stats}</span>
                  <a
                    href="https://github.com/grvd5678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-gray-300 hover:text-white font-medium"
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

