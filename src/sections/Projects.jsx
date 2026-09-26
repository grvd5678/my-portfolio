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
      subtitle: "Enterprise Financial Analytics & Collaboration Platform",
      category: "Full-Stack & SaaS",
      featured: true,
      desc: "Built an enterprise multi-tenant financial analytics and real-time collaboration platform featuring live market asset tracking, collaborative portfolios, and white-labeled client portals. Engineered using Next.js 16 App Router with React 19 Server Components & Server Actions, Neon serverless PostgreSQL, Drizzle ORM, and Clerk auth integrated with Svix webhooks.",
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
      title: "RAG Document Assistant",
      subtitle: "Document-Grounded Q&A with FastAPI & LangChain",
      category: "GenAI & Python",
      featured: true,
      desc: "Built a retrieval-augmented generation (RAG) system with a React/Vite frontend and a modular FastAPI backend (app/core, app/models, app/services) for document-grounded Q&A over uploaded PDFs. Utilized PyPDF and RecursiveCharacterTextSplitter for chunking, LangChain to orchestrate semantic retrieval with Google Gemini, and Pydantic-typed schemas served asynchronously via Uvicorn.",
      tech: [
        "FastAPI",
        "LangChain",
        "Google Gemini",
        "Python",
        "React.js",
        "PyPDF",
        "Uvicorn",
        "Pydantic",
      ],
      year: "2026",
      link: "https://rag-doc-assistant-pearl.vercel.app/",
    },
    {
      title: "E-Commerce Web Application",
      subtitle: "Full-Stack MERN Platform with Gemini AI Assistant",
      category: "Full-Stack & SaaS",
      featured: true,
      desc: "Built a production-ready full-stack MERN platform with 40+ REST endpoints across 11 route modules backed by 8 MongoDB collections. Features JWT auth, OTP email verification, password reset, and RBAC across admin/seller/buyer tiers. Integrated Stripe & Razorpay payments, an admin dashboard, similar-product recommendations, and an integrated Gemini-powered AI shopping assistant. Hardened API security with Helmet, CORS, rate limiting, and bcrypt.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Google Gemini AI",
        "Stripe",
        "Razorpay",
        "JWT & RBAC",
      ],
      year: "2026",
      link: "https://ecommerce-frontend-l3zz.onrender.com/",
    },
    {
      title: "Fake News Detection (ML)",
      subtitle: "IIT Patna Candidate-Shortlisting NLP Assignment",
      category: "Machine Learning",
      featured: false,
      desc: "Developed a robust NLP classifier using TF-IDF vectorization and Logistic Regression with a stratified 70:10:20 train/validation/test split. Achieved 98.57% accuracy, 98.63% F1-score, and 0.999 AUC-ROC on an unseen test set of ~9,000 news articles.",
      tech: [
        "Python",
        "Machine Learning",
        "TF-IDF",
        "Logistic Regression",
        "Scikit-learn",
        "Pandas",
      ],
      year: "2025 - 2026",
      link: "https://fake-news-detection-ffbj9xbmxayxmkifc8fyje.streamlit.app/",
    },
    {
      title: "Heart Disease Prediction System (ML)",
      subtitle: "B.Tech Final Year Research & Classification Project",
      category: "Machine Learning",
      featured: false,
      desc: "Designed and benchmarked 5 supervised machine learning classifiers (Logistic Regression, KNN, SVM, Decision Tree, Random Forest) to predict cardiovascular disease risk. Attained up to 82% accuracy with Logistic Regression and Random Forest following systematic hyperparameter tuning.",
      tech: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Ensemble Learning",
      ],
      year: "2024 - 2025",
      link: "https://heart-disease-predictor-1j4t.onrender.com/",
    },
    {
      title: "Personal Developer Portfolio",
      subtitle: "Modern Responsive Portfolio with 100/100 Lighthouse",
      category: "Full-Stack & SaaS",
      featured: false,
      desc: "Designed and developed a personal developer portfolio featuring interactive animations, responsive glassmorphism layout, EmailJS contact integration, and PDF CV preview modal. Achieved a perfect 100/100 Lighthouse score across Performance, Accessibility, Best Practices, and SEO.",
      tech: ["React.js", "Vite", "Tailwind CSS", "JavaScript", "EmailJS"],
      year: "2025 - 2026",
      link: "https://my-portfolio-sigma-nine-62.vercel.app",
    },
    {
      title: "Movie Recommendation System (ML)",
      subtitle: "Content-Based Recommendation Engine",
      category: "Machine Learning",
      featured: false,
      desc: "Built a content-based recommendation engine utilizing cosine similarity across the TMDB dataset of ~5,000 movies. Applied natural language preprocessing and feature extraction on metadata tags to deliver personalized film suggestions.",
      tech: [
        "Python",
        "Scikit-learn",
        "Cosine Similarity",
        "Pandas",
        "NumPy",
      ],
      year: "2023 - 2024",
      link: null,
    },
    {
      title: "Joke Generator App",
      subtitle: "Component-Driven React Application",
      category: "Full-Stack & SaaS",
      featured: false,
      desc: "Developed a fast, responsive web application that fetches dynamic data from external Joke APIs. Built with component-based React and styled with modern Tailwind CSS utilities for seamless cross-device UX.",
      tech: ["React.js", "Vite", "Tailwind CSS", "REST API", "JavaScript"],
      year: "2025",
      link: "https://joke-generator-nine-plum.vercel.app/",
    },
    {
      title: "Hadoop File System Management (HDFS)",
      subtitle: "Distributed Big Data Storage & Cluster Operations",
      category: "GenAI & Python",
      featured: false,
      desc: "Applied Hadoop Distributed File System (HDFS) for data management during the NIELIT Big Data bootcamp. Created cluster hierarchies, uploaded and retrieved datasets via CLI, and verified distributed service configurations on Linux environments.",
      tech: ["Hadoop", "HDFS", "Linux", "Big Data", "Spark", "Hive"],
      year: "Feb 2026",
      link: null,
    },
  ];

  const categories = ["All", "Full-Stack & SaaS", "GenAI & Python", "Machine Learning"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
          A selection of enterprise SaaS applications, GenAI solutions, full-stack systems, and machine learning models engineered with high performance and clean architecture.
        </p>

        {/* Sliding Fluid Morphing Filter Tabs */}
        <div className="flex justify-center mb-12">
          <MorphingTabs
            tabs={categories}
            activeTab={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        {/* Projects Grid with 3D Tilt Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <TiltCard
              key={project.title}
              maxTilt={7}
              className="h-full"
            >
              <div
                className={`h-full relative flex flex-col justify-between rounded-xl p-6 transition-all duration-300 border backdrop-blur-xl ${
                  project.featured
                    ? "bg-white/[0.05] hover:bg-white/[0.08] border-purple-500/40 shadow-xl shadow-purple-950/20 hover:border-cyan-400/50 hover:shadow-cyan-500/10"
                    : "bg-white/[0.03] hover:bg-white/[0.06] border-white/10 hover:border-purple-500/40 shadow-lg shadow-black/20"
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-2 gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-gradient-to-r from-purple-500/30 to-cyan-500/20 text-purple-200 border border-purple-400/40 px-2.5 py-0.5 rounded-full shadow-sm">
                          <Sparkles size={11} className="text-cyan-300 animate-pulse" /> Featured
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-purple-400 whitespace-nowrap font-semibold bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                      {project.year}
                    </span>
                  </div>

                  {project.subtitle && (
                    <p className="text-xs text-purple-300/90 font-medium mb-3">
                      {project.subtitle}
                    </p>
                  )}

                  <p className="text-gray-300 text-sm leading-relaxed mb-5">
                    {project.desc}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-purple-500/15 text-purple-200 border border-purple-500/20 px-2.5 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <FolderGit2 size={13} className="text-purple-400" /> {project.category}
                    </span>
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                      >
                        <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" /> Live Demo
                      </a>
                    ) : (
                      <span className="text-xs text-gray-500 italic">
                        Internal / Repository
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
