import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const experiences = [
  {
    company: 'EnactOn Technologies Private Limited',
    role: 'AI Developer Intern',
    period: 'Jan 2025 - Present',
    type: 'Current',
    description: 'Working on real-world AI projects, learning from industry experts, and making meaningful impact.',
    color: 'bg-primary',
  },
  {
    company: 'JBcodeapp',
    role: 'AI/ML Intern',
    period: 'May 2025 - Jul 2025',
    type: 'Completed',
    description: 'Developed a Terminal-based Agentic Coding Tool, integrating key AI components into a terminal-based interface. Collaborated seamlessly with teammates on challenging projects.',
    color: 'bg-coral',
  },
  {
    company: 'Open Source Connect India',
    role: 'Official Contributor',
    period: '2024 - Present',
    type: 'Active',
    description: 'Contributing to one of India\'s most vibrant open source initiatives, building real-world projects alongside passionate developers.',
    color: 'bg-success',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 sky-bg relative">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-24 h-24 border-2 border-foreground/10 rounded-lg transform rotate-12" />
      <div className="absolute bottom-20 left-10 w-16 h-16 border-2 border-foreground/10 rounded-full" />
      
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
            My journey so far ✨
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="tape-highlight">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-6 ${
                  index % 2 === 0 ? 'right-0 md:-right-3' : 'left-0 md:-left-3'
                } w-6 h-6 ${exp.color} rounded-full border-4 border-background hidden md:block`}
              />

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? -1 : 1 }}
                className="paper-card p-6 relative ml-8 md:ml-0"
              >
                {/* Tape decoration */}
                <div className={`absolute -top-2 ${index % 2 === 0 ? 'left-4' : 'right-4'} w-14 h-4 ${exp.color}/60 transform ${index % 2 === 0 ? '-rotate-3' : 'rotate-3'}`} />

                {/* Status badge */}
                <span className={`sticker ${exp.color} text-white text-xs mb-4`}>
                  {exp.type}
                </span>

                <h3 className="font-bold text-xl mb-1">{exp.role}</h3>
                <p className="text-primary font-medium mb-2">{exp.company}</p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                </div>

                <p className="text-foreground/70 leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
