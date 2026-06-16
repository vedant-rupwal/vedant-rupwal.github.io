import { motion } from 'framer-motion';

const skillCategories = [
  {
    label: 'Languages',
    tag: '[LANG]',
    skills: ['Python', 'C/C++', 'Java', 'R', 'MATLAB', 'JavaScript', 'SQL'],
  },
  {
    label: 'AI & Machine Learning',
    tag: '[AI/ML]',
    skills: [
      'Machine Learning',
      'Artificial Intelligence',
      'Deep Learning',
      'Unsupervised Learning',
      'Bayesian Networks',
      'Probabilistic Graphical Models',
      'Markov Models',
      'Graph Theory',
      'Model Training',
      'GANs',
      'RAG Systems',
    ],
  },
  {
    label: 'Data Science & Research',
    tag: '[DATA]',
    skills: [
      'Predictive Modeling',
      'Statistical Analysis',
      'Data Analysis',
      'Data Warehousing',
      'Big Data',
      'Spatiotemporal Mapping',
      'Data Classification',
      'Data Visualization',
    ],
  },
  {
    label: 'Engineering Stack',
    tag: '[STACK]',
    skills: [
      'FastAPI',
      'TensorFlow',
      'PyTorch',
      'ChromaDB',
      'Qdrant',
      'WebSockets',
      'SentenceTransformers',
      'Hugging Face',
      'MLflow',
      'AWS SageMaker',
      'Microsoft Azure ML',
      'Azure DevOps',
    ],
  },
  {
    label: 'Security, Automation & UX',
    tag: '[OPS/UX]',
    skills: [
      'MLOps',
      'DevOps',
      'Cybersecurity Incident Management',
      'Linux',
      'Microsoft SQL Server',
      'IT Automation',
      'Figma',
      'UX Research',
      'User Interface Design',
    ],
  },
  {
    label: 'Certifications',
    tag: '[CERT]',
    skills: [
      'Stanford - Probabilistic Graphical Models',
      'Duke - MLOps',
      'Microsoft AI & ML Engineering Professional Certificate',
      'Google Cybersecurity Professional Certificate',
      'Google Advanced Data Analytics Professional Certificate',
      'Google UX Design Professional Certificate',
      'Google Data Analytics Professional Certificate',
      'Google IT Automation with Python',
      'Google AI Professional Certificate',
      'IBM Accelerated Deep Learning with GPU',
      'IBM Deep Learning using TensorFlow',
      'IBM Applied Data Science with R - Level 2',
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
