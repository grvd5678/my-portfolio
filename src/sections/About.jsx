import { Code, Bot, Cloud, Download, Eye } from 'lucide-react';
import { useState } from 'react';
import Button from '../components/Button';
import ResumeModal from '../components/ResumeModal';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const highlights = [
  {
    icon: <Code className="text-purple-400" size={32} />,
    title: "Full-Stack & SaaS Engineering",
    desc: "Building production web apps and multi-tenant SaaS platforms with React 19, Next.js 16, MERN, Neon PostgreSQL, and Drizzle ORM."
  },
  {
    icon: <Bot className="text-purple-400" size={32} />,
    title: "Generative AI & RAG Systems",
    desc: "Developing document-grounded Q&A systems and AI shopping assistants using FastAPI, LangChain, and Google Gemini."
  },
  {
    icon: <Cloud className="text-purple-400" size={32} />,
    title: "Cloud & API Architecture",
    desc: "Deploying secure REST APIs, role-based access control (RBAC), and provisioning core AWS services (EC2, VPC, S3) with Linux."
  }
];

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="about" className="py-20 px-6">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-8">
              <div className="relative w-48 h-48 mx-auto md:mx-0">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full blur-xl opacity-50"></div>
                <img 
                  src="/profile.jpeg" 
                  alt="Gourav Das" 
                  width={192}
                  height={192}
                  loading="eager"
                  decoding="async"
                  className="relative w-full h-full rounded-full object-cover border-4 border-purple-500 shadow-2xl"
                  style={{ objectPosition: 'center top' }}
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center md:text-left">Full-Stack & GenAI Developer</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Full-stack developer specializing in modern JavaScript/TypeScript and Python ecosystems. Hands-on experience building enterprise financial analytics platforms (FinPulse SaaS), full-stack e-commerce platforms with integrated payments and AI shopping assistants, and RAG document intelligence backends.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Currently deepening cloud fundamentals and infrastructure design through the AWS re/Start program at Tata Strive. Passionate about architecting scalable REST APIs, optimizing serverless relational databases, and crafting fast, accessible user interfaces.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="#contact">Get In Touch</Button>
              <Button variant="outline" href="#projects">View Projects</Button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 border border-purple-500 px-6 py-3 rounded-full hover:bg-purple-500/10 transition-all font-medium">
                <Eye size={18} /> Preview CV
              </button>
              <a href="/Gourav_Das_Resume_FullStack.pdf" download="Gourav_Das_Resume.pdf"
                 className="flex items-center gap-2 border border-purple-500 px-6 py-3 rounded-full hover:bg-purple-500/10 transition-all font-medium">
                <Download size={18} /> Download CV
              </a>
            </div>
          </div>

          <div className="space-y-6">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex gap-4 p-5 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all">
                <div className="flex-shrink-0 mt-1">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-white mb-1.5">{item.title}</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default About;
