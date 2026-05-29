import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-40 px-6 lg:px-8 bg-zinc-900/20">
      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none">
        <div className="w-full h-full bg-emerald-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-50">
            Let's Build Something
            <br />
            <span className="text-emerald-400">Together.</span>
          </h2>
          <div className="mt-4 w-16 h-px bg-emerald-500/60" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="text-zinc-400 text-base leading-relaxed mb-10 max-w-md">
              I'm actively seeking opportunities in AI Engineering, Data Science, and Full-Stack Development.
              Whether it's a full-time role, internship, or a compelling technical project — let's connect.
            </p>

            <div className="space-y-5">
              <a
                href="mailto:vedantrupwal@gmail.com"
                className="group flex items-center gap-4 text-zinc-400 hover:text-emerald-400 transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-lg border border-zinc-800 bg-zinc-900 flex items-center justify-center group-hover:border-emerald-500/40 transition-colors duration-200">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-mono text-zinc-600 mb-0.5">Email</p>
                  <p className="text-sm font-medium">vedantrupwal@gmail.com</p>
                </div>
              </a>

              <a
                href="https://github.com/vedant-rupwal"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-zinc-400 hover:text-emerald-400 transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-lg border border-zinc-800 bg-zinc-900 flex items-center justify-center group-hover:border-emerald-500/40 transition-colors duration-200">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-mono text-zinc-600 mb-0.5">GitHub</p>
                  <p className="text-sm font-medium">github.com/vedant-rupwal</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/vedant-rupwal-58702a291"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-zinc-400 hover:text-emerald-400 transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-lg border border-zinc-800 bg-zinc-900 flex items-center justify-center group-hover:border-emerald-500/40 transition-colors duration-200">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-mono text-zinc-600 mb-0.5">LinkedIn</p>
                  <p className="text-sm font-medium">linkedin.com/in/vedant-rupwal-58702a291</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="text-zinc-50 font-semibold text-lg">Message sent!</h3>
                <p className="text-zinc-500 text-sm">I'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-zinc-500 mb-2 uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 placeholder-zinc-600 text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-500 mb-2 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 placeholder-zinc-600 text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all duration-200"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-500 mb-2 uppercase tracking-wider">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about the role, project, or opportunity..."
                    className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 placeholder-zinc-600 text-sm focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-emerald-500 text-zinc-950 font-semibold text-sm hover:bg-emerald-400 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 pt-8 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="font-mono text-xs text-zinc-600">
            © 2026 Vedant Rupwal — Built with precision.
          </p>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-xs text-zinc-600">Available for opportunities</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}