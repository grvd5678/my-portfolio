import { useState, useEffect } from "react";
import {
  Home,
  User,
  Cpu,
  Award,
  FolderGit2,
  Mail,
} from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: <Home size={19} /> },
  { id: "about", label: "About", icon: <User size={19} /> },
  { id: "skills", label: "Skills", icon: <Cpu size={19} /> },
  { id: "experience", label: "Experience", icon: <Award size={19} /> },
  { id: "projects", label: "Projects", icon: <FolderGit2 size={19} /> },
  { id: "contact", label: "Contact", icon: <Mail size={19} /> },
];

const FloatingDock = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      aria-label="Quick Navigation Dock"
      className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center"
    >
      <div className="glass-dock p-2 rounded-2xl flex flex-col gap-2.5">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-label={item.label}
              className={`group relative flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-tr from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-500/30 scale-105"
                  : "text-gray-400 hover:text-white hover:bg-white/10 hover:scale-105"
              }`}
            >
              {item.icon}

              {/* Tooltip on Hover */}
              <span className="absolute left-14 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap bg-[#0e0e1e]/90 text-white border border-purple-500/30 backdrop-blur-md opacity-0 -translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shadow-xl shadow-black/40">
                {item.label}
              </span>

              {/* Active Indicator Dot */}
              {isActive && (
                <span className="absolute -left-1 w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              )}
            </a>
          );
        })}

        {/* Separator */}
        <div className="w-6 h-[1px] bg-white/10 my-1 mx-auto" />

        {/* Quick Social Action Icons */}
        <a
          href="https://github.com/grvd5678"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="group relative flex items-center justify-center w-11 h-11 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
        >
          <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          <span className="absolute left-14 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap bg-[#0e0e1e]/90 text-white border border-purple-500/30 backdrop-blur-md opacity-0 -translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shadow-xl shadow-black/40">
            GitHub
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/gourav-das-7a94a02b1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="group relative flex items-center justify-center w-11 h-11 rounded-xl text-gray-400 hover:text-cyan-400 hover:bg-white/10 hover:scale-105 transition-all duration-300"
        >
          <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          <span className="absolute left-14 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap bg-[#0e0e1e]/90 text-white border border-purple-500/30 backdrop-blur-md opacity-0 -translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shadow-xl shadow-black/40">
            LinkedIn
          </span>
        </a>
      </div>
    </aside>
  );
};

export default FloatingDock;
