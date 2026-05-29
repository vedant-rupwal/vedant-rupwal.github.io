import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'AI & Data Advisor',
    company: 'Eigen Axis',
    location: 'Remote',
    period: 'Dec 2025 — Present',
    status: 'active',
    bullets: [
      { verb: '[ARCHITECTED]', text: 'A production-ready, full-stack web application and RAG backend tailored for clinical knowledge discovery and managing LLM training pipelines.' },
      { verb: '[ENGINEERED]', text: 'An automated, multi-channel data ingestion pipeline with exponential jittered backoff and a Dead Letter Queue (DLQ), extracting structured text from Wikipedia APIs, PubMed, and local PDFs.' },
      { verb: '[DEVELOPED]', text: 'A hybrid embedding engine combining dense neural vectors (SentenceTransformers) and statistical BM25 sparse matrices, streaming real-time indexing into a localized Qdrant vector database.' },
      { verb: '[INTEGRATED]', text: 'PyTorch and TensorFlow training loops with a FastAPI backend and WebSockets, enabling real-time monitoring of model states (Idle, Training, Running) and seamless multi-environment deployments.' },
      { verb: '[SECURED]', text: 'Authentication domain with TOTP MFA, PBKDF2-HMAC-SHA256 password hashing, and Role-Based Access Control (RBAC) to govern schema-driven YAML configurations and audit logs.' },
    ],
  },
  {
    role: 'Data Science Research Assistant',
    company: 'University of Illinois Chicago',
    location: 'Chicago, IL',
    period: 'Jan 2025 — May 2026',
    status: 'recent',
    bullets: [
      { verb: '[MIGRATED]', text: 'Complex MATLAB research codebases to Python, improving scalability and efficiency of data processing pipelines — reducing execution time by 98% (3 months → 30 hours).' },
      { verb: '[MAPPED]', text: 'Advanced spatiotemporal topography to analyze the thickness transitions in ultrathin foam films using computational modeling.' },
      { verb: '[ANALYZED]', text: 'Raw experimental data to derive insights and visualize physical properties through rigorous statistical modeling.' },
    ],
  },
  {
    role: 'AI Developer',
    company: 'Spark Hacks — Chicago, IL',
    location: 'Chicago, IL',
    period: '2025',
    status: 'past',
    bullets: [
      { verb: '[ENGINEERED]', text: 'A real-time mapping feature connecting users with food vendors within their locality, anticipating a 20% increase in vendor sales through proximity discovery.' },
      { verb: '[DESIGNED]', text: 'Backend logic for dynamic inventory data, reducing food waste through real-time transactions between surplus and demand.' },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-40 px-6 lg:px-8 bg-zinc-900/20">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-50">
            Professional Experience
          </h2>
          <div className="mt-4 w-16 h-px bg-emerald-500/60" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical trace line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/60 via-emerald-500/20 to-transparent" />

          <div className="space-y-16">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: idx * 0.1 }}
                className="relative pl-8 md:pl-24"
              >
                {/* Node dot */}
                <div className="absolute left-[-5px] md:left-[27px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-emerald-500 bg-zinc-950 shadow-[0_0_10px_rgba(16,185,129,0.6)]" />

                {/* Card */}
                <div className="gradient-border rounded-xl p-7 bg-zinc-900/50 backdrop-blur-sm">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-zinc-50">{exp.role}</h3>
                      <p className="text-emerald-400 font-semibold mt-0.5">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                      <span className="font-mono text-xs text-zinc-500 flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                      <span className="font-mono text-xs text-zinc-600 flex items-center gap-1.5">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                      {exp.status === 'active' && (
                        <span className="flex items-center gap-1.5 font-mono text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                          <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                          Active
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3">
                        <span className="font-mono text-xs text-emerald-500 bg-emerald-500/8 border border-emerald-500/15 px-1.5 py-0.5 rounded shrink-0 mt-0.5 leading-tight">
                          {bullet.verb}
                        </span>
                        <span className="text-zinc-400 text-sm leading-relaxed">{bullet.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}