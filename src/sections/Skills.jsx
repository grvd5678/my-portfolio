import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import MorphingTabs from "../components/MorphingTabs";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("All");

  const skills = {
    "Languages": [
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "Python", level: 90 },
      { name: "Java", level: 75 },
    ],
    "Frontend": [
      { name: "React.js & React 19", level: 90 },
      { name: "Next.js 16 (App Router)", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Vite", level: 90 },
    ],
    "Backend & APIs": [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "FastAPI", level: 85 },
      { name: "REST API Architecture", level: 90 },
      { name: "Django", level: 70 },
      { name: "JWT & RBAC Security", level: 85 },
    ],
    "Databases & ORM": [
      { name: "MongoDB", level: 85 },
      { name: "Neon Serverless PostgreSQL", level: 85 },
      { name: "Drizzle ORM", level: 80 },
      { name: "MySQL", level: 80 },
      { name: "Oracle SQL", level: 85 },
    ],
    "AI & GenAI": [
      { name: "LangChain & RAG Pipelines", level: 85 },
      { name: "Google Gemini API Integration", level: 90 },
      { name: "Scikit-learn & ML Classifiers", level: 80 },
      { name: "TF-IDF & NLP Processing", level: 80 },
    ],
    "Cloud & Tools": [
      { name: "AWS (EC2, VPC, S3)", level: 75 },
      { name: "DevOps & CI/CD Foundations", level: 80 },
      { name: "Linux Administration", level: 80 },
      { name: "Git & GitHub", level: 90 },
      { name: "Clerk Auth & Svix Webhooks", level: 85 },
      { name: "Postman API Testing", level: 90 },
      { name: "Vercel & Railway Deployment", level: 90 },
    ],
  };

  const allSkills = Object.values(skills).flat();
  const displaySkills = activeTab === "All" ? allSkills : skills[activeTab];
  const tabs = ["All", ...Object.keys(skills)];
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="skills" className="py-20 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-4">
          Proficiencies spanning modern full-stack development, generative AI orchestration, serverless databases, and cloud infrastructure.
        </p>

        <div className="flex justify-center mt-8 mb-12">
          <MorphingTabs
            tabs={tabs}
            activeTab={activeTab}
            onChange={setActiveTab}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {displaySkills.map((skill) => (
            <div key={skill.name} className="space-y-2 bg-white/[0.03] p-4 rounded-xl border border-white/5 hover:border-white/10 transition-all">
              <div className="flex justify-between">
                <span className="font-medium text-gray-200">{skill.name}</span>
                <span className="text-purple-400 font-semibold">{skill.level}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-purple-700 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
