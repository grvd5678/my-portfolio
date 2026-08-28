import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', slideIndex: 0 },
  { label: 'About', slideIndex: 1 },
  { label: 'Skills', slideIndex: 2 },
  { label: 'Web & SaaS', slideIndex: 3 },
  { label: 'AI & GenAI', slideIndex: 4 },
  { label: 'Systems & ML', slideIndex: 5 },
  { label: 'Experience', slideIndex: 6 },
  { label: 'Contact', slideIndex: 7 },
];

const Navbar = ({ currentSlide = 0, onSelectSlide }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (slideIndex) => {
    if (onSelectSlide) {
      onSelectSlide(slideIndex);
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#070714]/85 backdrop-blur-xl border-b border-white/10 py-3 px-4 sm:px-6 shadow-xl shadow-black/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <button
          onClick={() => handleNavClick(0)}
          className="text-lg sm:text-xl font-extrabold tracking-tight text-left focus:outline-none"
        >
          Gourav <span className="text-gradient">Das</span>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden xl:flex gap-5 items-center">
          {navItems.map((item) => {
            const isActive = currentSlide === item.slideIndex;
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.slideIndex)}
                className={`text-xs font-semibold px-2.5 py-1 rounded-lg transition-all ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-500/10 border border-cyan-500/30'
                    : 'text-gray-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {item.label}
              </button>
            );
          })}

          {/* Social Icons on Navbar */}
          <div className="flex items-center gap-2.5 pl-3 border-l border-white/10">
            <a
              href="https://github.com/grvd5678"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/gourav-das-7a94a02b1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className="xl:hidden text-gray-300 hover:text-white p-1"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Slide Menu */}
      {isOpen && (
        <div className="xl:hidden bg-[#070714]/95 backdrop-blur-2xl border-t border-white/10 mt-3 py-3 px-4 space-y-1 rounded-2xl">
          {navItems.map((item) => {
            const isActive = currentSlide === item.slideIndex;
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.slideIndex)}
                className={`w-full text-left py-2 px-3 rounded-lg text-xs font-medium transition-colors ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-500/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="flex gap-4 pt-3 border-t border-white/10 px-3 text-xs">
            <a href="https://github.com/grvd5678" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/gourav-das-7a94a02b1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400">
              LinkedIn
            </a>
            <a href="https://twitter.com/gourav_das17281" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400">
              Twitter
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
