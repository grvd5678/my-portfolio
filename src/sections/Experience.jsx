import { useState } from "react";
import { Award, CheckCircle2, Building2, Eye, ShieldCheck, ExternalLink } from "lucide-react";
import MorphingTabs from "../components/MorphingTabs";
import TiltCard from "../components/TiltCard";
import CertificateModal from "../components/CertificateModal";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const items = [
    {
      title: "AWS Certified Cloud Practitioner",
      organization: "Amazon Web Services (AWS)",
      type: "Certifications & Hackathons",
      badge: "Globally Certified",
      duration: "Oct 2026 - Oct 2029",
      desc: "Demonstrates overall understanding of AWS Cloud concepts, security, compliance, architecture principles, core AWS services (ECS, EC2, S3, VPC, RDS, IAM, CloudWatch), and billing models. Validated by Amazon Web Services.",
      skills: ["AWS Cloud Architecture", "ECS & Compute", "VPC & Networking", "S3 Storage", "IAM & Cloud Security", "CloudWatch"],
      validationNumber: "85072ebc063548f0b29c688c19317a06",
      verificationUrl: "https://aws.amazon.com/verification",
      certificatePdf: "/AWS_Certified_Cloud_Practitioner.pdf",
      issueDate: "October 6, 2026",
      expirationDate: "October 6, 2029",
      featured: true,
    },
    {
      title: "Full Stack Web Development Trainee",
      organization: "Teknowgrade Pvt. Ltd (Remote)",
      type: "Experience & Training",
      badge: "Industrial Training",
      duration: "Feb 2026 - Apr 2026",
      desc: "Built dynamic web applications using Django: engineered backend logic, user authentication, REST APIs, and relational schemas with hands-on CRUD operations, RBAC, and automated testing suites.",
      skills: ["Django", "Python", "REST APIs", "CRUD Operations", "RBAC", "Automated Testing"],
    },
    {
      title: "AWS re/Start Cloud Trainee",
      organization: "Tata Strive",
      type: "Experience & Training",
      badge: "Core Cloud",
      duration: "Jun 2026 - Oct 2026",
      desc: "Provisioned and configured core AWS cloud services (VPC, EC2, S3, IAM, Security Groups), Linux administration, and network routing in an enterprise-aligned, project-driven curriculum.",
      skills: ["AWS (VPC, EC2, S3)", "Linux Administration", "IAM & Security Groups", "Cloud Networking"],
    },
    {
      title: "Environmental Hacks (Bharat Builds Tour)",
      organization: "WeMakeDevs & AWS",
      type: "Certifications & Hackathons",
      badge: "AWS Hackathon",
      duration: "Oct 2026",
      desc: "Engineered cloud-native and full-stack solutions during the nationwide Bharat Builds Tour Hackathon powered by WeMakeDevs in collaboration with AWS.",
      skills: ["Cloud Architecture", "AWS Solutions", "Full-Stack Collaboration"],
    },
    {
      title: "Big Data Analytics Bootcamp",
      organization: "NIELIT Kolkata (Ministry of Electronics & IT, Govt. of India)",
      type: "Experience & Training",
      badge: "Govt. of India",
      duration: "Feb 2026",
      desc: "Completed a 90-hour government-sponsored program covering distributed Big Data systems (Hadoop, HDFS, Spark, Hive) and applied storage operations on Linux.",
      skills: ["Hadoop", "HDFS", "Apache Spark", "Apache Hive", "Distributed Systems", "Linux"],
    },
    {
      title: "The Complete Oracle SQL Certification Course",
      organization: "Udemy",
      type: "Certifications & Hackathons",
      badge: "Certificate (16.5 hrs)",
      duration: "Aug 2024",
      desc: "Mastered relational database management, schema creation, normalization, complex joins, subqueries, and query optimization techniques in Oracle SQL.",
      skills: ["Oracle SQL", "Relational Databases", "Complex Queries", "Database Normalization"],
    },
  ];

  const tabs = ["All", "Experience & Training", "Certifications & Hackathons"];

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
            <div
              className={`p-4 sm:p-5 rounded-2xl ${
                item.featured
                  ? "bg-gradient-to-br from-[#120d28]/95 to-[#0b1322]/95 border-amber-500/40 shadow-xl shadow-amber-950/20 ring-1 ring-amber-500/20"
                  : "bg-[#0a0a18]/80 border-white/10 hover:border-emerald-400/40"
              } border backdrop-blur-xl transition-all duration-300 flex flex-col justify-between h-full shadow-lg shadow-black/20`}
            >
              <div>
                <div className="flex justify-between items-start gap-2 mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                        {item.title}
                      </h3>
                      {item.featured && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold">
                          <ShieldCheck size={11} /> AWS Official
                        </span>
                      )}
                    </div>
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
                  <div className="flex items-center gap-2">
                    {item.live && (
                      <a
                        href={item.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 text-[11px] font-medium transition-all"
                      >
                        <ExternalLink size={11} /> Live Demo
                      </a>
                    )}
                    <button
                      onClick={() => handleOpenCertModal(item)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-purple-300 hover:text-white border border-white/10 transition-colors text-[11px] font-medium"
                    >
                      <Eye size={12} /> View Details
                    </button>
                  </div>
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
