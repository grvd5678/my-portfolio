import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0a0a0f]/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold">
          Gourav <span className="text-gradient">Das</span> Portfolio
        </a>
        
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} 
               className="hover:text-purple-400 transition-colors">
              {link}
            </a>
          ))}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} 
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
                className="md:hidden">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-md">
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} 
               onClick={() => setIsOpen(false)}
               className="block px-6 py-3 hover:bg-purple-500/10 transition-colors">
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
