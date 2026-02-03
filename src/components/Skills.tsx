
import { motion } from 'framer-motion';
import { Code, Brain, Wrench, Sparkles, Award, BookOpen, Layers, Terminal, Database, Globe } from 'lucide-react';
import Star40 from './stars/s40';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    color: 'bg-coral',
    borderColor: 'border-coral',
    items: [
      { name: 'Python', emoji: '🐍', bg: 'bg-green-100', border: 'border-green-300' },
      { name: 'JavaScript', emoji: '🌐', bg: 'bg-yellow-100', border: 'border-yellow-300' },
      { name: 'C++', emoji: '⚡', bg: 'bg-blue-100', border: 'border-blue-300' },
      { name: 'Java', emoji: '☕', bg: 'bg-orange-100', border: 'border-orange-300' },
      { name: 'C', emoji: '🔧', bg: 'bg-gray-100', border: 'border-gray-300' },
    ]
  },
  {
    title: 'AI & ML',
    icon: Brain,
    color: 'bg-primary',
    borderColor: 'border-primary',
    items: [
      { name: 'Machine Learning', emoji: '🤖', bg: 'bg-pink-100', border: 'border-pink-300' },
      { name: 'Deep Learning', emoji: '🧠', bg: 'bg-indigo-100', border: 'border-indigo-300' },
      { name: 'Computer Vision', emoji: '👁️', bg: 'bg-purple-100', border: 'border-purple-300' },
      { name: 'NLP', emoji: '💬', bg: 'bg-blue-100', border: 'border-blue-300' },
      { name: 'LLMs', emoji: '✨', bg: 'bg-yellow-100', border: 'border-yellow-300' },
      { name: 'GANs', emoji: '🎨', bg: 'bg-rose-100', border: 'border-rose-300' },
    ]
  },
  {
    title: 'Frameworks',
    icon: Layers,
    color: 'bg-highlight',
    borderColor: 'border-highlight',
    items: [
      { name: 'TensorFlow', emoji: '🔶', bg: 'bg-orange-100', border: 'border-orange-300' },
      { name: 'PyTorch', emoji: '🔥', bg: 'bg-red-100', border: 'border-red-300' },
      { name: 'Streamlit', emoji: '🌊', bg: 'bg-red-50', border: 'border-red-200' },
      { name: 'FastAPI', emoji: '⚡', bg: 'bg-teal-100', border: 'border-teal-300' },
      { name: 'React', emoji: '⚛️', bg: 'bg-cyan-100', border: 'border-cyan-300' },
    ]
  },
  {
    title: 'Tools',
    icon: Wrench,
    color: 'bg-lavender',
    borderColor: 'border-lavender',
    items: [
      { name: 'Git', emoji: '🔀', bg: 'bg-orange-100', border: 'border-orange-300' },
      { name: 'Docker', emoji: '🐳', bg: 'bg-blue-100', border: 'border-blue-300' },
      { name: 'Tableau', emoji: '📊', bg: 'bg-purple-100', border: 'border-purple-300' },
      { name: 'VS Code', emoji: '💻', bg: 'bg-blue-50', border: 'border-blue-200' },
    ]
  }
];

const certifications = [
  {
    title: 'Deloitte Australia - Data Analytics',
    issuer: 'Forage',
    date: 'May 2025',
    emoji: '🎓',
    bg: 'bg-green-50',
    border: 'border-green-200'
  },
  {
    title: 'Recent Advancements in AI and Robotics',
    issuer: 'SVNIT Surat',
    date: 'July 2024',
    emoji: '🤖',
    bg: 'bg-blue-50',
    border: 'border-blue-200'
  },
  {
    title: 'Supervised ML: Regression & Classification',
    issuer: 'Coursera - Andrew Ng',
    date: '2024',
    emoji: '📊',
    bg: 'bg-yellow-50',
    border: 'border-yellow-200'
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden section-sky border-b-4 border-black">

      {/* Background decoration */}
      <div className="absolute top-10 right-10 opacity-40 hidden lg:block">
        <Star40 className="w-32 h-32 text-primary/20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-handwritten text-3xl md:text-4xl text-primary block mb-3 font-bold" style={{ textShadow: "2px 2px 0px rgba(255,255,255,0.5)" }}>
            What I work with 💻
          </span>
          <h2 className="text-4xl md:text-5xl font-bold inline-block relative">
            <span className="relative z-10 px-4">Tech <span className="text-coral">Stack</span></span>
            {/* Underline Squiggle */}
            <svg className="absolute w-full h-3 bottom-0 left-0 text-highlight opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
            </svg>
          </h2>
        </motion.div>

        {/* Skills Grid - Neobrutalist Block Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl p-6 md:p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6 border-b-2 border-dashed border-gray-200 pb-4">
                <div className={`p-3 rounded-xl ${category.color} border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-2xl">{category.title}</h3>
              </div>

              {/* Items */}
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className={`
                               flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm border-2 text-foreground
                               ${skill.bg} ${skill.border} shadow-sm cursor-default select-none
                             `}
                  >
                    <span className="text-lg">{skill.emoji}</span>
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Unified Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 md:p-10 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-highlight px-6 py-2 rounded-full border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 whitespace-nowrap z-10">
              <Award className="w-5 h-5" />
              Certifications & Learning
            </div>

            <div className="grid gap-4 pt-4">
              {certifications.map((cert, i) => (
                <div key={i} className={`
                            flex flex-col md:flex-row md:items-center gap-4 p-4 rounded-2xl border-2 transition-all hover:translate-x-1 hover:shadow-none
                            ${cert.bg} ${cert.border} shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]
                        `}>
                  <div className="text-3xl bg-white w-12 h-12 flex items-center justify-center rounded-xl border-2 border-black/10 shadow-sm">
                    {cert.emoji}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg leading-tight mb-1">{cert.title}</h4>
                    <div className="flex items-center gap-2 text-sm font-semibold opacity-70">
                      <span>{cert.issuer}</span>
                      <span>•</span>
                      <span>{cert.date}</span>
                    </div>
                  </div>
                  <div className="md:ml-auto">
                    <div className="p-2 bg-white rounded-lg border border-black/10 hover:bg-black hover:text-white transition-colors cursor-pointer group">
                      <BookOpen className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
