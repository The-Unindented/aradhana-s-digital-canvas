import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Brain, Cloud, Bot, Thermometer, Heart, Zap } from 'lucide-react';

const projects = [
  {
    title: 'Multi-Agent System with Google Gemini 2.0',
    description: 'A sophisticated Multi-Agent System demonstrating distributed AI intelligence with specialized agents for jokes, Q&A, weather, and task orchestration.',
    tech: ['Google ADK', 'Gemini 2.0 Flash', 'Python', 'uv'],
    icon: Bot,
    color: 'coral',
    bgColor: 'bg-coral',
    link: 'https://github.com/The-Unindented/',
    highlights: ['Intelligent task routing', 'Real-time data integration', 'Microservices architecture'],
    featured: true,
  },
  {
    title: 'GAN Project on MNIST',
    description: 'A Generative Adversarial Network that generates handwritten digits, witnessing creativity in action as the model learns to create realistic outputs.',
    tech: ['Python', 'TensorFlow', 'Deep Learning', 'GANs'],
    icon: Brain,
    color: 'primary',
    bgColor: 'bg-primary',
    link: 'https://github.com/The-Unindented/',
    highlights: ['Generator & Discriminator', 'Epoch visualization', 'Hyperparameter tuning'],
    featured: true,
  },
  {
    title: 'Weather Forecast Dashboard',
    description: 'A sleek and interactive Weather Dashboard showing live temperature, humidity, wind, pressure, and more for any city worldwide.',
    tech: ['Python', 'Streamlit', 'OpenWeatherMap API'],
    icon: Thermometer,
    color: 'highlight',
    bgColor: 'bg-highlight',
    link: 'https://github.com/The-Unindented/',
    highlights: ['Real-time data', 'Clean UI', 'Location coordinates'],
    featured: false,
  },
  {
    title: 'MindSphere - AI Healthcare Solution',
    description: 'An AI-powered healthcare solution built during Lokahi Innovation Hackathon with symptom checking, medical report analysis, and doctor booking.',
    tech: ['AI/ML', 'IVR System', 'Healthcare'],
    icon: Heart,
    color: 'lavender',
    bgColor: 'bg-lavender',
    link: 'https://github.com/The-Unindented/',
    highlights: ['Symptom Checker', 'Report Analysis', 'Voice assistance'],
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden section-pink border-b-4 border-black">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-1/2 h-full opacity-20 dot-bg pointer-events-none" />

      {/* Decorative elements */}
      <svg className="absolute top-16 right-16 w-20 h-20 text-coral/20 hidden lg:block animate-spin-slow" viewBox="0 0 100 100">
        <path d="M50 10 L61 40 L95 40 L68 60 L79 90 L50 72 L21 90 L32 60 L5 40 L39 40 Z" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>

      <svg className="absolute bottom-20 left-16 w-16 h-16 text-primary/20 hidden lg:block" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="12 8" />
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-handwritten text-3xl md:text-4xl text-coral block mb-3">
            Things I've built 🛠️
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="tape-pink">Projects</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={project.featured ? 'md:row-span-1' : ''}
            >
              <motion.div
                whileHover={{ y: -8, rotate: index % 2 === 0 ? -1 : 1 }}
                className="paper-card p-6 md:p-8 h-full relative group"
              >
                {/* Decorative tape */}
                <div className={`absolute -top-2 ${index % 2 === 0 ? 'left-6' : 'right-6'
                  } w-20 h-5 ${project.bgColor}/50 transform ${index % 2 === 0 ? '-rotate-2' : 'rotate-2'
                  } rounded-sm`} />

                {/* Featured badge */}
                {project.featured && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -top-3 -right-3 sticker bg-coral text-white text-xs"
                  >
                    <Zap className="w-3 h-3 mr-1" />
                    Featured
                  </motion.div>
                )}

                {/* Icon */}
                <div className={`inline-flex p-4 ${project.bgColor} rounded-2xl mb-5 shadow-sticker`}>
                  <project.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-xl md:text-2xl mb-3 group-hover:text-coral transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 bg-muted rounded-full text-muted-foreground flex items-center gap-1"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-coral" />
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-xs font-mono px-3 py-1.5 ${project.bgColor}/10 rounded-full text-foreground`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-coral hover:text-coral/80 font-medium transition-colors group/link"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>

                {/* Decorative corner */}
                <div className="absolute bottom-4 right-4 opacity-5">
                  <project.icon className="w-20 h-20" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/The-Unindented/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            See more on GitHub
            <Sparkles className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
