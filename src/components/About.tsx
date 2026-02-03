
import { motion } from 'framer-motion';
import { Heart, Code, Bot, Lightbulb, Sparkles, Coffee, Music, Rocket } from 'lucide-react';
import Star20 from './stars/s20';
import Star21 from './stars/s21';
import Star40 from './stars/s40';

const funFacts = [
  { icon: Code, label: 'Coding Daily', color: 'bg-coral' },
  { icon: Bot, label: 'Building AI', color: 'bg-primary' },
  { icon: Lightbulb, label: 'Problem Solver', color: 'bg-highlight' },
  { icon: Heart, label: 'Open Source', color: 'bg-lavender' },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden section-cream border-b-4 border-black">
      {/* Decorative Stars from Neobrutalism */}
      <div className="absolute -top-10 -left-10 hidden md:block opacity-50 pointer-events-none">
        <Star40 className="w-48 h-48 text-coral/40" />
      </div>
      <div className="absolute -bottom-20 -right-10 hidden md:block opacity-50 pointer-events-none">
        <Star21 className="w-72 h-72 text-primary/30" />
      </div>
      <div className="absolute top-20 right-[15%] hidden md:block opacity-30 pointer-events-none">
        <Star20 className="w-40 h-40 text-highlight/50" />
      </div>



      <div className="container mx-auto px-6 relative z-10 transition-all duration-300">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-handwritten text-3xl md:text-4xl text-coral block mb-3"
            >
              Get to know me ♡
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold"
            >
              About <span className="tape-highlight">Me</span>
            </motion.h2>
          </div>

          {/* New Layout: 2 Columns */}
          <div className="grid lg:grid-cols-2 gap-8 h-full">

            {/* Left Column: Big Description Box */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="h-full"
            >
              <div className="paper-card p-8 md:p-12 relative h-full flex flex-col justify-center">
                {/* Tape decorations */}
                <div className="absolute -top-3 left-8 w-24 h-8 bg-highlight/70 transform -rotate-2 rounded-sm" />

                <div className="space-y-6">
                  <p className="text-lg md:text-xl leading-relaxed text-foreground/80 font-medium">
                    Hey! My name is <span className="font-semibold text-coral text-2xl">Singh Aradhana</span>.
                  </p>

                  <p className="text-lg leading-relaxed text-foreground/80">
                    I'm currently studying at <span className="font-semibold border-b-2 border-primary/30">Uka Tarsadia University</span>,
                    pursuing my degree in{' '}
                    <span className="tape-mint inline-block transform -rotate-1 mx-1">Artificial Intelligence and Data Science</span>.
                  </p>

                  <p className="text-lg leading-relaxed text-foreground/80">
                    As I learn more and more, I feel it's becoming easier to explore different programming
                    languages and technologies. I'm particularly passionate about{' '}
                    <span className="font-semibold text-primary">robotics</span> and want to explore
                    more areas where <span className="tape-pink inline-block transform rotate-1 mx-1">AI meets the physical world</span>.
                  </p>

                  <p className="text-lg leading-relaxed text-foreground/80">
                    When I'm not coding, you'll find me exploring new AI research papers,
                    contributing to open source, or building fun side projects. I believe in
                    learning by doing and sharing knowledge with the community.
                  </p>

                  {/* Signature */}
                  <div className="flex items-center gap-3 pt-6 border-t border-dashed border-border mt-auto">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Heart className="w-6 h-6 text-coral fill-coral" />
                    </motion.div>
                    <span className="font-handwritten text-2xl text-muted-foreground">
                      Always learning, always building!
                    </span>
                  </div>
                </div>

                {/* Sticker */}
                <motion.div
                  className="absolute -bottom-4 right-10 sticker bg-lavender text-foreground text-sm flex items-center shadow-lg"
                  animate={{ rotate: [2, -2, 2] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Coffee className="w-4 h-4 mr-2" />
                  Chai Lover
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column: Split Sections */}
            <div className="flex flex-col gap-8 h-full">

              {/* Top Half: Currently Up To (Rectangular) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex-1"
              >
                <div className="paper-card p-8 relative h-full flex flex-col justify-center">
                  <div className="absolute -top-3 right-8 w-20 h-6 bg-success/40 transform rotate-1 rounded-sm" />

                  <h3 className="font-handwritten text-3xl mb-6 flex items-center gap-3">
                    <Rocket className="w-8 h-8 text-coral animate-bounce-soft" />
                    Currently Up To
                  </h3>

                  <div className="flex flex-wrap gap-4">
                    <span className="sticker px-4 py-2 bg-coral/10 text-coral border-2 border-coral/20 hover:scale-105 transition-transform cursor-crosshair">
                      🎯 Learning LLMs
                    </span>
                    <span className="sticker px-4 py-2 bg-primary/10 text-primary border-2 border-primary/20 hover:scale-105 transition-transform cursor-crosshair">
                      🤖 Building Agents
                    </span>
                    <span className="sticker px-4 py-2 bg-highlight/20 text-foreground border-2 border-highlight/30 hover:scale-105 transition-transform cursor-crosshair">
                      📚 Research Papers
                    </span>
                    <span className="sticker px-4 py-2 bg-lavender/20 text-purple-700 border-2 border-lavender/30 hover:scale-105 transition-transform cursor-crosshair">
                      🌟 Open Source
                    </span>
                    <span className="sticker px-4 py-2 bg-sky/20 text-sky-700 border-2 border-sky/30 hover:scale-105 transition-transform cursor-crosshair">
                      ⚡ Competive Programming
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Bottom Half: Two Square-ish Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 flex-1">

                {/* Box 1: Fun Facts / Quick Skills */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-card rounded-3xl border-2 border-dashed border-border p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-coral/20 to-transparent rounded-bl-full" />
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-primary/20 to-transparent rounded-tr-full" />

                  <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-highlight" />
                    Quick bits
                  </h4>
                  <ul className="space-y-3">
                    {funFacts.map((fact, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground/80 group-hover:translate-x-1 transition-transform">
                        <div className={`w-2 h-2 rounded-full ${fact.color}`} />
                        {fact.label}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Box 2: Stats */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="paper-card p-6 flex flex-col justify-center items-center text-center hover:scale-[1.02] transition-transform"
                >
                  <div className="space-y-4 w-full">
                    <div className="p-3 bg-muted/30 rounded-2xl">
                      <span className="font-handwritten text-4xl text-primary block">500+</span>
                      <span className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Connections</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-2 bg-muted/30 rounded-xl">
                        <span className="font-handwritten text-2xl text-coral block">1.3k</span>
                        <span className="text-[10px] uppercase font-bold text-muted-foreground">Followers</span>
                      </div>
                      <div className="p-2 bg-muted/30 rounded-xl">
                        <span className="font-handwritten text-2xl text-highlight block">2+</span>
                        <span className="text-[10px] uppercase font-bold text-muted-foreground">Years XP</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
