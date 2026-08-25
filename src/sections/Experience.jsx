import { useState } from "react";
import { Briefcase, Award, CheckCircle2, Building2 } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import MorphingTabs from "../components/MorphingTabs";
import TiltCard from "../components/TiltCard";

const Experience = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [activeTab, setActiveTab] = useState("All");

  const items = [
    {
      title: "AWS re/Start Cloud Trainee",
      organization: "Tata Strive",
      type: "Training & Internships",
      badge: "In Progress",
      duration: "Jun 2026 - Present",
      desc: "Provisioning and configuring core AWS services (VPC, EC2, S3) through hands-on labs, alongside Linux administration and networking exercises. Applying cloud architecture, security group, and IAM best practices through project-based coursework in a structured cloud computing curriculum.",
      skills: ["AWS (EC2, VPC, S3)", "Linux Administration", "Cloud Architecture", "IAM & Security", "Networking"],
    },
    {
      title: "Front-End Software Engineering Job Simulation",
      organization: "Skyscanner (via Forage)",
      type: "Certifications & Simulations",
      badge: "Verified Certificate",
      duration: "2026",
      desc: "Completed Skyscanner's Front-End Software Engineering job simulation. Developed modular UI components using React, handled dynamic data rendering, optimized frontend state flows, and adhered to modern web performance and accessibility standards.",
      skills: ["React.js", "Front-End Architecture", "UI/UX Best Practices", "Component Design", "Web Performance"],
    },
    {
      title: "Advanced Software Engineering Job Simulation",
      organization: "Walmart Global Tech (via Forage)",
      type: "Certifications & Simulations",
      badge: "Verified Certificate",
      duration: "2026",
      desc: "Completed Walmart Global Tech's Advanced Software Engineering simulation covering Advanced Data Structures, Enterprise Software Architecture, Relational Database Design, and Data Munging pipelines.",
      skills: ["Advanced Data Structures", "Software Architecture", "Relational Database Design", "Data Munging"],
    },
    {
      title: "Full Stack Web Development Trainee",
      organization: "Teknowgrade Pvt. Ltd (Remote)",
      type: "Training & Internships",
      badge: "Industrial Training",
      duration: "Feb 2026 - Apr 2026",
      desc: "Built dynamic web applications using the Django framework, implementing authentication, backend logic, REST APIs, and database integration; hands-on experience with full CRUD operations and responsive interfaces.",
      skills: ["Django", "Python", "REST APIs", "CRUD Operations", "Authentication", "Database Design"],
    },
    {
      title: "Full Stack Web Development Certification",
      organization: "Teknowgrade Pvt. Ltd",
      type: "Certifications & Simulations",
      badge: "Certified",
      duration: "2026",
      desc: "Earned certification in Full Stack Web Development demonstrating backend system design with Django, RESTful architecture, relational databases, and modern frontend integration.",
      skills: ["Full Stack Development", "RESTful Architecture", "Backend Engineering", "Django"],
    },
    {
      title: "Blockchain & Big Data Analytics Bootcamp",
      organization: "NIELIT Kolkata (Ministry of Electronics & IT, Govt. of India)",
      type: "Training & Internships",
      badge: "Govt. of India",
      duration: "Feb 2026",
      desc: "Completed a 90-hour intensive bootcamp under the Future Skills PRIME Project covering blockchain fundamentals (smart contracts, Ethereum, Hyperledger) and Big Data technologies (Hadoop, HDFS, Spark, Hive). Applied HDFS for storage and distributed file operations on Linux.",
      skills: ["Hadoop", "HDFS", "Apache Spark", "Apache Hive", "Blockchain", "Linux"],
    },
    {
      title: "The Complete Oracle SQL Certification Course",
      organization: "Udemy",
      type: "Certifications & Simulations",
      badge: "Certificate (16.5 hrs)",
      duration: "Aug 2024",
      desc: "Mastered relational database management, schema creation, normalization, complex joins, subqueries, and query optimization techniques in Oracle SQL.",
      skills: ["Oracle SQL", "Relational Databases", "Complex Queries", "Database Normalization", "Query Optimization"],
    },
    {
      title: "Machine Learning Using Python — Industrial Training",
      organization: "Ardent Computech Pvt. Ltd",
      type: "Training & Internships",
      badge: "Industrial Training",
      duration: "Aug 2023 - Sep 2023 | Kolkata",
      desc: "Covered supervised and unsupervised ML algorithms, exploratory data analysis, feature engineering, and model evaluation metrics using Scikit-learn, Pandas, and NumPy. Developed a recommendation system capstone.",
      skills: ["Python", "Machine Learning", "Scikit-learn", "NumPy", "Pandas", "Model Evaluation"],
    },
    {
      title: "Machine Learning Using Python Certification",
      organization: "Ardent Computech Pvt. Ltd",
      type: "Certifications & Simulations",
      badge: "Certified",
      duration: "2023",
      desc: "Certified in practical machine learning workflows, predictive modeling, statistical analysis, and algorithmic implementations in Python.",
      skills: ["Machine Learning", "Predictive Modeling", "Feature Engineering", "Python"],
    },
    {
      title: "DevOps Foundations",
      organization: "LinkedIn Learning",
      type: "Certifications & Simulations",
      badge: "Certified",
      duration: "2026",
      desc: "Completed comprehensive training covering core DevOps principles, CI/CD pipeline automation, continuous integration and deployment workflows, and cross-functional agile delivery.",
      skills: ["DevOps Fundamentals", "CI/CD Pipelines", "Continuous Integration", "Continuous Delivery", "Agile Operations"],
    },
  ];

  const tabs = ["All", "Training & Internships", "Certifications & Simulations"];

  const filteredItems =
    activeTab === "All" ? items : items.filter((item) => item.type === activeTab);

  return (
    <section id="experience" className="py-20 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Experience & <span className="text-gradient">Certifications</span>
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
          My professional internships, cloud training, enterprise job simulations, and verified technical credentials.
        </p>

        {/* Sliding Fluid Morphing Filter Tabs */}
        <div className="flex justify-center mb-12">
          <MorphingTabs
            tabs={tabs}
            activeTab={activeTab}
            onChange={setActiveTab}
          />
        </div>

        {/* Timeline Grid with 3D Tilt */}
        <div className="space-y-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="relative pl-7 md:pl-8 border-l-2 border-purple-500/30 hover:border-cyan-400/60 transition-all duration-300"
            >
              <div className="absolute -left-[9px] top-4 w-4 h-4 bg-purple-500 rounded-full border-4 border-[#070714] shadow-md shadow-purple-500/50" />
              <TiltCard maxTilt={4} glare={true}>
                <div className="bg-white/[0.03] p-6 rounded-xl border border-white/10 hover:border-purple-500/40 hover:bg-white/[0.06] backdrop-blur-xl transition-all duration-300 shadow-xl shadow-black/20">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          {item.title}
                        </h3>
                        <span className="text-xs bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-200 border border-purple-400/30 px-2.5 py-0.5 rounded-full font-medium inline-flex items-center gap-1 shadow-sm">
                          {item.type === "Certifications & Simulations" ? (
                            <Award size={12} className="text-cyan-300" />
                          ) : (
                            <Briefcase size={12} className="text-purple-300" />
                          )}
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-purple-300 font-medium text-sm flex items-center gap-1.5 mt-1">
                        <Building2 size={14} className="text-purple-400" />
                        {item.organization}
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-purple-300 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      {item.duration}
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4 mt-2">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs bg-purple-500/15 text-purple-200 border border-purple-500/20 px-2.5 py-1 rounded-md inline-flex items-center gap-1"
                      >
                        <CheckCircle2 size={11} className="text-cyan-400" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
