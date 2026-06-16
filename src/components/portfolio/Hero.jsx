import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Linkedin } from 'lucide-react';

export default function Hero() {
  const orbRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!orbRef.current) return;
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      orbRef.current.style.background = `radial-gradient(ellipse at ${x}% ${y}%, rgba(16,185,129,0.10) 0%, transparent 60%)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center dot-grid overflow-hidden"
    >
      {/* Cursor orb */}
      <div
        ref={orbRef}
        className="absolute inset-0 pointer-events-none transition-all duration-300 ease-out"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(16,185,129,0.10) 0%, transparent 60%)' }}
      />

      {/* Static radial glow behind center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none">
        <div className="w-full h-full rounded-full bg-emerald-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono text-zinc-400 tracking-widest uppercase">
            Math &amp; CS · University of Illinois Chicago
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="font-bold tracking-tight mb-6 leading-none"
          style={{ fontSize: 'clamp(2.6rem, 7vw, 5.5rem)' }}
        >
          <span className="block text-zinc-50">Building Intelligent</span>
          <span className="block text-zinc-50">Systems at the</span>
          <span className="block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
              Intersection
            </span>
            <span className="text-zinc-50"> of Math</span>
          </span>
          <span className="block text-zinc-50">&amp; Computer Science.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.35 }}
          className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Hi, I'm <span className="text-zinc-200 font-semibold">Vedant Rupwal</span>. A Math &amp; CS student
          at UIC specializing in{' '}
          <span className="text-emerald-400">Artificial Intelligence</span>,{' '}
          <span className="text-emerald-400">Data Engineering</span>, and{' '}
          <span className="text-emerald-400">Full-Stack Development</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToExperience}
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-zinc-950 font-semibold text-sm hover:bg-emerald-400 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5"
          >
            Explore Work
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-200" />
          </button>
          <a
            href="https://linkedin.com/in/vedant-rupwal-58702a291"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 font-semibold text-sm hover:border-zinc-500 hover:text-zinc-50 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Linkedin className="w-4 h-4" />
            Connect on LinkedIn
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-zinc-600 tracking-widest uppercase">scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-zinc-600 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
