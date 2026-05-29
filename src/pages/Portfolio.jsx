import Navbar from '@/components/portfolio/Navbar';
import Hero from '@/components/portfolio/Hero';
import Skills from '@/components/portfolio/Skills';
import Experience from '@/components/portfolio/Experience';
import Projects from '@/components/portfolio/Projects';
import Contact from '@/components/portfolio/Contact';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-inter overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}