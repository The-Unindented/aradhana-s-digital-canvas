
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building2, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';

const experiences = [
  {
    company: 'EnactOn Technologies Private Limited',
    role: 'AI Developer Intern',
    period: 'Jan 2025 - Present',
    type: 'Current',
    description: 'Working on real-world AI projects, learning from industry experts, and making meaningful impact in production systems.',
    color: 'coral',
    bgColor: 'bg-coral',
    borderColor: 'border-coral',
  },
  {
    company: 'JBcodeapp',
    role: 'AI/ML Intern',
    period: 'May 2023 - Jul 2023', // Corrected dates from input if needed, assuming user meant 2023 based on order
    type: 'Completed',
    description: 'Developed a Terminal-based Agentic Coding Tool, integrating key AI components. Collaborated seamlessly with teammates on challenging projects.',
    color: 'primary',
    bgColor: 'bg-primary',
    borderColor: 'border-primary',
  },
  {
    company: 'Open Source Connect India',
    role: 'Official Contributor',
    period: '2024 - Present',
    type: 'Active',
    description: "Contributing to one of India's most vibrant open source initiatives, building real-world projects alongside passionate developers.",
    color: 'highlight',
    bgColor: 'bg-highlight',
    borderColor: 'border-highlight',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden section-mint border-b-4 border-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="font-handwritten text-3xl md:text-4xl text-coral block mb-3 font-bold" style={{ textShadow: "2px 2px 0px rgba(255,255,255,0.5)" }}>
            My journey so far ✨
          </span>
          <h2 className="text-4xl md:text-5xl font-bold inline-block relative">
            <span className="relative z-10 px-4">Experience</span>
            <div className="absolute inset-0 bg-yellow-300 transform -rotate-2 -z-0 rounded-lg shadow-sm border-2 border-dashed border-yellow-600/30"></div>
          </h2>
        </motion.div>

        {/* Experience List - Neobrutalist Style */}
        <div className="max-w-3xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group"
            >
              <div className={`
                    relative bg-white rounded-3xl p-8 border-4 ${exp.borderColor} shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] 
                    hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] 
                    transition-all duration-300
                  `}>
                {/* Floating Badge */}
                <div className={`absolute -top-4 right-8 px-4 py-1.5 rounded-full ${exp.bgColor} text-white font-bold text-sm tracking-wide shadow-sm border-2 border-white transform rotate-2 group-hover:rotate-0 transition-transform`}>
                  {exp.type}
                </div>

                {/* Icon Box */}
                <div className={`absolute -left-6 top-8 w-12 h-12 rounded-xl ${exp.bgColor} border-4 border-white shadow-md flex items-center justify-center transform -rotate-6 group-hover:rotate-0 transition-transform z-10 hidden md:flex`}>
                  <Briefcase className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="md:pl-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-bold opacity-60 bg-muted/30 px-3 py-1 rounded-lg w-fit">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>

                  <div className="mb-4 flex items-center gap-2">
                    <Building2 className={`w-5 h-5 text-${exp.color}`} />
                    <span className="text-lg font-semibold opacity-90">{exp.company}</span>
                  </div>

                  <p className="text-foreground/70 leading-relaxed text-lg">
                    {exp.description}
                  </p>
                </div>

                {/* Decorative Shapes */}
                <div className="absolute -bottom-2 left-10 w-2 h-2 rounded-full bg-black/10" />
                <div className="absolute -bottom-2 left-16 w-2 h-2 rounded-full bg-black/10" />
                <div className="absolute -bottom-2 left-22 w-2 h-2 rounded-full bg-black/10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-16"
        >
          <a
            href="https://linkedin.com/in/singharadhana"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-black rounded-full text-lg font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            <span>View Full Journey on LinkedIn</span>
            <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
