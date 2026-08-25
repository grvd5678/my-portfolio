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
      </div>
    </aside>
  );
};

export default FloatingDock;
