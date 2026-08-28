import { useState } from "react";
import { Briefcase, Award, CheckCircle2, Building2, Eye } from "lucide-react";
import MorphingTabs from "../components/MorphingTabs";
import TiltCard from "../components/TiltCard";
import CertificateModal from "../components/CertificateModal";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const items = [
    {
      title: "AWS re/Start Cloud Trainee",
      organization: "Tata Strive",
      type: "Training & Internships",
      badge: "In Progress",
      duration: "Jun 2026 - Present",
      desc: "Provisioning and configuring core AWS services (VPC, EC2, S3) through hands-on labs, alongside Linux administration and networking exercises. Applying cloud architecture, security groups, and IAM best practices through project-based coursework.",
      skills: ["AWS (EC2, VPC, S3)", "Linux Administration", "Cloud Architecture", "IAM & Security"],
    },
    {
      title: "DevOps Foundations",
      organization: "LinkedIn Learning",
      type: "Certifications & Simulations",
      badge: "Certified",
      duration: "2026",
      desc: "Completed comprehensive training covering core DevOps principles, CI/CD pipeline automation, continuous integration and deployment workflows, and cross-functional agile delivery.",
      skills: ["DevOps Fundamentals", "CI/CD Pipelines", "Continuous Integration", "Continuous Delivery"],
    },
    {
      title: "Front-End Software Engineering Job Simulation",
      organization: "Skyscanner (via Forage)",
      type: "Certifications & Simulations",
      badge: "Verified Certificate",
      duration: "2026",
      desc: "Completed Skyscanner's Front-End simulation. Developed modular UI components using React, handled dynamic data rendering, optimized frontend state flows, and adhered to modern web performance standards.",
      skills: ["React.js", "Front-End Architecture", "UI/UX Best Practices", "Web Performance"],
    },
    {
      title: "Advanced Software Engineering Job Simulation",
      organization: "Walmart Global Tech (via Forage)",
      type: "Certifications & Simulations",
      badge: "Verified Certificate",
      duration: "2026",
      desc: "Completed Walmart Global Tech's Advanced simulation covering Advanced Data Structures, Enterprise Software Architecture, Relational Database Design, and Data Munging pipelines.",
      skills: ["Advanced Data Structures", "Software Architecture", "Relational Database Design"],
    },
    {
      title: "Full Stack Web Development Trainee",
      organization: "Teknowgrade Pvt. Ltd (Remote)",
      type: "Training & Internships",
      badge: "Industrial Training",
      duration: "Feb 2026 - Apr 2026",
      desc: "Built dynamic web applications using the Django framework, implementing authentication, backend logic, REST APIs, and database integration; hands-on CRUD operations.",
      skills: ["Django", "Python", "REST APIs", "CRUD Operations", "Database Design"],
    },
    {
      title: "Blockchain & Big Data Analytics Bootcamp",
      organization: "NIELIT Kolkata (Ministry of Electronics & IT, Govt. of India)",
      type: "Training & Internships",
      badge: "Govt. of India",
      duration: "Feb 2026",
      desc: "Completed a 90-hour intensive bootcamp under Future Skills PRIME covering blockchain fundamentals and Big Data technologies (Hadoop, HDFS, Spark, Hive). Applied HDFS for storage and file operations on Linux.",
      skills: ["Hadoop", "HDFS", "Apache Spark", "Apache Hive", "Blockchain", "Linux"],
    },
    {
      title: "The Complete Oracle SQL Certification Course",
      organization: "Udemy",
      type: "Certifications & Simulations",
      badge: "Certificate (16.5 hrs)",
      duration: "Aug 2024",
      desc: "Mastered relational database management, schema creation, normalization, complex joins, subqueries, and query optimization techniques in Oracle SQL.",
      skills: ["Oracle SQL", "Relational Databases", "Complex Queries", "Database Normalization"],
    },
    {
      title: "Machine Learning Using Python",
      organization: "Ardent Computech Pvt. Ltd",
      type: "Training & Internships",
      badge: "Industrial Training",
      duration: "Aug 2023 - Sep 2023",
      desc: "Covered supervised/unsupervised ML algorithms, exploratory data analysis, feature engineering, and model evaluation metrics using Scikit-learn, Pandas, and NumPy.",
      skills: ["Python", "Machine Learning", "Scikit-learn", "NumPy", "Pandas"],
    },
  ];

  const tabs = ["All", "Training & Internships", "Certifications & Simulations"];

  const filteredItems =
    activeTab === "All" ? items : items.filter((item) => item.type === activeTab);

  const handleOpenCertModal = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 py-6">
      {/* Header */}
      <div className="mb-4 sm:mb-6 border-b border-white/10 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 mb-1.5">
            <Award size={13} /> Track Record & Credentials
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Experience & <span className="text-gradient">Certifications</span>
          </h2>
        </div>

        {/* Tab Filters */}
        <div className="shrink-0">
          <MorphingTabs
            tabs={tabs}
            activeTab={activeTab}
            onChange={setActiveTab}
          />
        </div>
      </div>

      {/* Grid of Experience & Certificate Cards */}
      <div className="grid md:grid-cols-2 gap-4 max-h-[58vh] overflow-y-auto pr-1 no-scrollbar">
        {filteredItems.map((item, idx) => (
          <TiltCard key={idx} maxTilt={4} className="h-full">
            <div className="p-4 sm:p-5 rounded-2xl bg-[#0a0a18]/80 border border-white/10 hover:border-emerald-400/40 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between h-full shadow-lg shadow-black/20">
              <div>
                <div className="flex justify-between items-start gap-2 mb-2">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-emerald-300 flex items-center gap-1 mt-1">
                      <Building2 size={12} /> {item.organization}
                    </p>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.05] text-purple-300 border border-white/10 whitespace-nowrap">
                    {item.duration}
                  </span>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed mb-3 line-clamp-3">
                  {item.desc}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 inline-flex items-center gap-1"
                    >
                      <CheckCircle2 size={10} className="text-cyan-400" />
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="pt-2.5 border-t border-white/10 flex justify-between items-center text-xs">
                  <span className="text-[11px] font-mono text-gray-400">
                    Badge: {item.badge}
                  </span>
                  <button
                    onClick={() => handleOpenCertModal(item)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-purple-300 hover:text-white border border-white/10 transition-colors text-[11px] font-medium"
                  >
                    <Eye size={12} /> View Details
                  </button>
                </div>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>

      {/* Certificate Preview Modal */}
      <CertificateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        certificate={selectedCert}
      />
    </div>
  );
};

export default Experience;
