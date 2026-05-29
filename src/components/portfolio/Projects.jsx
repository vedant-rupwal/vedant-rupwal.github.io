import { motion } from 'framer-motion';
import { Cpu, BarChart2 } from 'lucide-react';

const projects = [
  {
    number: '01',
    title: 'Ask the Pandit',
    subtitle: 'AI / LLM Reading Assistant',
    icon: Cpu,
    description:
      'Advanced Retrieval-Augmented Generation application utilizing a hybrid database routing system with ChromaDB to optimize system memory and accelerate semantic search. Context-aware Chrome extension delivering precise, text-backed RAG answers from extensive theological scriptures.',
    bullets: [
      'Two-stage retrieval pipeline: MiniLM similarity search + CrossEncoder reranking for deep reading comprehension.',
      'Shadow DOM-injected interface dynamically feeding 6,000 characters of real-time contextual material into the LLM.',
      'Strict zero-hallucination guardrails and false-premise handlers to restrict AI responses to verified database texts.',
    ],
    tags: ['Python', 'FastAPI', 'ChromaDB', 'CrossEncoders', 'Shadow DOM', 'LLMs', 'Qwen 2.5', 'Hugging Face'],
    accent: 'from-emerald-500/20 to-teal-500/5',
  },
  {
    number: '02',
    title: 'UIC Spatiotemporal Research',
    subtitle: 'Data Pipeline & Computational Modeling',
    icon: BarChart2,
    description:
      'Scaled algorithmic processing for complex data pipelines, reducing execution times by 98% (3 months → 30 hours). Implemented robust spatiotemporal computational modeling to analyze topographic transitions in ultrathin foam films.',
    bullets: [
      'Pioneered migration of MATLAB research codebases to Python, improving scalability of data processing pipelines by 98%.',
      'Advanced spatiotemporal mapping of topography to analyze thickness of transitions in ultrathin foam films.',
      'Mathematical modeling and statistical visualization of physical properties from raw experimental data.',
    ],
    tags: ['Python', 'MATLAB', 'Data Science', 'Pipeline Optimization', 'Computational Modeling', 'R', 'Statistical Analysis'],
    accent: 'from-blue-500/15 to-indigo-500/5',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-40 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-50">
            Featured Projects
          </h2>
          <div className="mt-4 w-16 h-px bg-emerald-500/60" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: idx * 0.15 }}
                className="group relative gradient-border rounded-2xl overflow-hidden bg-zinc-900/60 backdrop-blur-xl"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <p className="font-mono text-xs text-zinc-600 mb-0.5">{project.number}</p>
                        <h3 className="text-xl font-bold text-zinc-50 group-hover:text-emerald-300 transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-zinc-500 border border-zinc-800 px-2 py-1 rounded">
                      {project.subtitle}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">{project.description}</p>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-7">
                    {project.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="text-emerald-500 mt-1.5 shrink-0">
                          <svg className="w-2 h-2 fill-current" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="4" />
                          </svg>
                        </span>
                        <span className="text-zinc-500 text-xs leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2 py-0.5 rounded border border-zinc-700/60 bg-zinc-800/40 text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
