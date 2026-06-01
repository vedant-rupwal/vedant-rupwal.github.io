import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Menu, X } from 'lucide-react';

const RESUME_URL = '/_Vedant_Rupwal_Resume.pdf';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const sectionIds = navLinks.map((link) => link.href.replace('#', ''));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 160) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="font-bold text-lg tracking-tight text-zinc-50 hover:text-emerald-400 transition-colors duration-200"
        >
          Vedant<span className="text-emerald-500">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className={`relative text-sm font-medium transition-colors duration-200 pb-1 ${
                  isActive ? 'text-zinc-50 nav-active' : 'text-zinc-400 hover:text-zinc-50'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="pulse-cta flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 text-sm font-medium hover:bg-emerald-500/20 hover:border-emerald-500/70 transition-all duration-300"
          >
            <FileText className="w-3.5 h-3.5" />
            View Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-zinc-400 hover:text-zinc-50 transition-colors"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800 px-6 py-4 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-left text-zinc-300 hover:text-emerald-400 text-sm font-medium transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-emerald-400 text-sm font-medium"
          >
            <FileText className="w-3.5 h-3.5" />
            View Resume
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
