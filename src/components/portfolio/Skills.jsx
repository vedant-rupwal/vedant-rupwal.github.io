import { motion } from 'framer-motion';

const skillCategories = [
  {
    label: 'Languages',
    tag: '[LANG]',
    skills: ['Python', 'C/C++', 'Java', 'R', 'MATLAB', 'JavaScript'],
  },
  {
    label: 'AI & Data Science',
    tag: '[AI/ML]',
    skills: [
      'Machine Learning',
      'RAG Systems',
      'Predictive Modeling',
      'Statistical Analysis',
      'Spatiotemporal Mapping',
      'Data Classification',
      'Neural Embeddings',
    ],
  },
  {
    label: 'Tools & Frameworks',
    tag: '[STACK]',
    skills: ['FastAPI', 'TensorFlow', 'PyTorch', 'ChromaDB', 'Qdrant', 'WebSockets', 'SentenceTransformers'],
  },
  {
    label: 'Certifications',
    tag: '[CERT]',
    skills: [
      'AWS Solutions Architect Associate',
      'Deep Learning · TensorFlow',
      'Accelerated Deep Learning · GPU',
      'Applied Data Science · R (Lvl 2)',
      'Agentforce Innovator',
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-40 px-6 lg:px-8">
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
            Technical Arsenal
          </h2>
          <div className="mt-4 w-16 h-px bg-emerald-500/60" />
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.label}
              variants={cardVariants}
              className="gradient-border rounded-xl p-7 bg-zinc-900/60 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-xs text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                  {cat.tag}
                </span>
                <h3 className="text-zinc-50 font-semibold text-base">{cat.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-2.5 py-1 rounded border border-zinc-700/80 bg-zinc-800/50 text-zinc-300 hover:border-emerald-500/40 hover:text-emerald-300 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}