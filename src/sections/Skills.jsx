import { Cpu, Code2, Layout, Database, Cloud } from "lucide-react";
import DomainRotator from "../components/DomainRotator";

const skillGroups = [
  {
    category: "Languages & Web Core",
    icon: <Code2 className="text-pink-400" size={18} />,
    color: "border-pink-500/30",
    skills: ["JavaScript (ES6+)", "Python", "Java", "SQL", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Frontend & Frameworks",
    icon: <Layout className="text-cyan-400" size={18} />,
    color: "border-cyan-500/30",
    skills: ["React.js", "React 19", "Next.js 16 (App Router)", "Vite", "Redux", "Responsive UI"],
  },
  {
    category: "Backend & Databases",
    icon: <Database className="text-purple-400" size={18} />,
    color: "border-purple-500/30",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "Django",
      "MongoDB",
      "Neon PostgreSQL",
      "Drizzle ORM",
      "Oracle SQL",
      "MySQL",
    ],
  },
  {
    category: "Cloud, AI & DevOps",
    icon: <Cloud className="text-amber-400" size={18} />,
    color: "border-amber-500/30",
    skills: [
      "AWS (EC2, VPC, S3)",
      "DevOps & CI/CD",
      "LangChain & RAG",
      "Google Gemini API",
      "Git & GitHub",
      "Linux",
      "Postman",
      "Vercel",
    ],
  },
];

const Skills = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 py-6">
      {/* Header */}
      <div className="mb-6 sm:mb-8 border-b border-white/10 pb-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-pink-500/10 text-pink-300 border border-pink-500/20 mb-2">
          <Cpu size={13} /> Toolbox & Competencies
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-400 mt-1">
          Modern full-stack technologies, distributed cloud infrastructure, and AI engineering.
        </p>
      </div>

      {/* Grid: 4 Grouped Cards on Left (7 cols) + 3D Domain Rotator on Right (5 cols) */}
      <div className="grid lg:grid-cols-12 gap-6 items-center">
        {/* 4 Skill Cards Grid (7 cols) */}
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3.5">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className={`p-4 rounded-2xl bg-[#0b0b18]/80 border ${group.color} backdrop-blur-xl hover:border-white/30 transition-all flex flex-col justify-between shadow-lg shadow-black/20`}
            >
              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/10">
                    {group.icon}
                  </div>
                  <h3 className="text-xs font-bold text-white tracking-wide">{group.category}</h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.03] text-gray-200 border border-white/10 hover:border-purple-400/40 hover:bg-white/[0.08] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3D Domain Rotator (5 cols) */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <DomainRotator />
        </div>
      </div>
    </div>
  );
};

export default Skills;
