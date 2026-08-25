import CyberBackground from './components/CyberBackground';
import FloatingDock from './components/FloatingDock';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import Loader from './components/Loader';

function App() {
  return (
    <div className="relative min-h-screen bg-[#070714] text-gray-100">
      <Loader />
      <ScrollProgress />
      <CyberBackground />
      <Navbar />
      <FloatingDock />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
