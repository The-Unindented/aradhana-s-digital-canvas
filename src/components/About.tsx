import { motion } from 'framer-motion';
import { Heart, Code, Bot, Lightbulb } from 'lucide-react';
import doodlePattern from '@/assets/doodle-pattern.png';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `url(${doodlePattern})`, backgroundSize: '400px' }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="font-handwritten text-3xl text-primary block mb-2">
              Get to know me ♡
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              About <span className="tape-highlight">Me</span>
            </h2>
          </div>

          {/* Main Content Card */}
          <div className="paper-card p-8 md:p-12 relative">
            {/* Decorative tape */}
            <div className="absolute -top-2 left-8 w-16 h-5 bg-accent/70 transform -rotate-6" />
            <div className="absolute -top-2 right-12 w-12 h-5 bg-coral/50 transform rotate-3" />

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-foreground/80">
                  Hey! My name is <span className="font-semibold text-primary">Singh Aradhana</span> and 
                  I'm currently studying at Uka Tarsadia University, pursuing my degree in{' '}
                  <span className="font-semibold">Artificial Intelligence and Data Science</span>.
                </p>
                
                <p className="text-lg leading-relaxed text-foreground/80">
                  As I learn more and more, I feel it's becoming easier to explore different programming 
                  languages and technologies. I'm particularly passionate about{' '}
                  <span className="font-semibold text-coral">robotics</span> and want to explore 
                  more areas where AI meets the physical world.
                </p>

                <div className="flex items-center gap-2 text-muted-foreground font-handwritten text-xl">
                  <Heart className="w-5 h-5 text-coral fill-coral" />
                  <span>Always learning, always building!</span>
                </div>
              </div>

              {/* Fun Facts / Interests */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  className="paper-card p-4 text-center dashed-border"
                >
                  <Code className="w-8 h-8 text-primary mx-auto mb-2" />
                  <span className="font-medium text-sm">Coding Daily</span>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className="paper-card p-4 text-center dashed-border"
                >
                  <Bot className="w-8 h-8 text-success mx-auto mb-2" />
                  <span className="font-medium text-sm">Building AI</span>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className="paper-card p-4 text-center dashed-border"
                >
                  <Lightbulb className="w-8 h-8 text-accent mx-auto mb-2" />
                  <span className="font-medium text-sm">Problem Solver</span>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  className="paper-card p-4 text-center dashed-border"
                >
                  <Heart className="w-8 h-8 text-coral mx-auto mb-2" />
                  <span className="font-medium text-sm">Open Source</span>
                </motion.div>
              </div>
            </div>

            {/* Connection stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 pt-8 border-t border-border flex flex-wrap justify-center gap-8"
            >
              <div className="text-center">
                <span className="font-handwritten text-4xl text-primary">500+</span>
                <p className="text-sm text-muted-foreground">LinkedIn Connections</p>
              </div>
              <div className="text-center">
                <span className="font-handwritten text-4xl text-coral">1,357</span>
                <p className="text-sm text-muted-foreground">Followers</p>
              </div>
              <div className="text-center">
                <span className="font-handwritten text-4xl text-success">2+</span>
                <p className="text-sm text-muted-foreground">Years Learning</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
