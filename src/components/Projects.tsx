import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Brain, Cloud, Bot, Thermometer } from 'lucide-react';

const projects = [
  {
    title: 'Multi-Agent System with Google Gemini 2.0',
    description: 'A sophisticated Multi-Agent System demonstrating distributed AI intelligence with specialized agents for jokes, Q&A, weather, and task orchestration.',
    tech: ['Google ADK', 'Gemini 2.0 Flash', 'Python', 'uv'],
    icon: Bot,
    color: 'bg-primary',
    link: 'https://github.com/The-Unindented/',
    highlights: ['Intelligent task routing', 'Real-time data integration', 'Microservices architecture'],
  },
  {
    title: 'GAN Project on MNIST',
    description: 'A Generative Adversarial Network that generates handwritten digits, witnessing creativity in action as the model learns to create realistic outputs.',
    tech: ['Python', 'TensorFlow', 'Deep Learning', 'GANs'],
    icon: Brain,
    color: 'bg-coral',
    link: 'https://github.com/The-Unindented/',
    highlights: ['Generator & Discriminator training', 'Epoch visualization', 'Hyperparameter tuning'],
  },
  {
    title: 'Weather Forecast Dashboard',
    description: 'A sleek and interactive Weather Dashboard showing live temperature, humidity, wind, pressure, and more for any city worldwide.',
    tech: ['Python', 'Streamlit', 'OpenWeatherMap API'],
    icon: Thermometer,
    color: 'bg-success',
    link: 'https://github.com/The-Unindented/',
    highlights: ['Real-time data', 'Clean UI', 'Location coordinates'],
  },
  {
    title: 'MindSphere - AI Healthcare Solution',
    description: 'An AI-powered healthcare solution built during Lokahi Innovation Hackathon with symptom checking, medical report analysis, and doctor booking.',
    tech: ['AI/ML', 'IVR System', 'Healthcare'],
    icon: Sparkles,
    color: 'bg-accent',
    link: 'https://github.com/The-Unindented/',
    highlights: ['Symptom Checker', 'Report Analysis', 'Voice assistance'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-handwritten text-3xl text-primary block mb-2">
            Things I've built 🛠️
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="tape-highlight">Projects</span>
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
            >
              <motion.div
                whileHover={{ y: -5, rotate: index % 2 === 0 ? -1 : 1 }}
                className="paper-card p-6 h-full relative group"
              >
                {/* Decorative tape */}
                <div className={`absolute -top-2 left-6 w-20 h-5 ${project.color}/60 transform -rotate-2`} />
                
                {/* Icon */}
                <div className={`inline-flex p-3 ${project.color} rounded-xl mb-4`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
                    >
                      ✓ {highlight}
                    </span>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-3 py-1 bg-secondary rounded-full text-secondary-foreground"
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
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/The-Unindented/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground/20 rounded-full font-medium hover:border-primary hover:text-primary transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            See more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
