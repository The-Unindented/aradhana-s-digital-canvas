import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, MapPin, GraduationCap } from 'lucide-react';
import skyBg from '@/assets/sky-bg.jpg';

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${skyBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Hand-drawn flower doodles */}
        <svg className="absolute top-20 left-10 w-16 h-16 text-foreground/20 animate-float" viewBox="0 0 100 100">
          <path d="M50 20 Q60 35 50 50 Q40 35 50 20" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M20 50 Q35 60 50 50 Q35 40 20 50" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M80 50 Q65 60 50 50 Q65 40 80 50" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M50 80 Q60 65 50 50 Q40 65 50 80" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="50" cy="50" r="8" fill="currentColor"/>
        </svg>
        
        <svg className="absolute top-40 right-20 w-12 h-12 text-coral/40 animate-float" style={{ animationDelay: '1s' }} viewBox="0 0 100 100">
          <path d="M50 10 L61 40 L95 40 L68 60 L79 90 L50 72 L21 90 L32 60 L5 40 L39 40 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>

        <svg className="absolute bottom-40 left-20 w-20 h-20 text-primary/30 animate-float" style={{ animationDelay: '2s' }} viewBox="0 0 100 100">
          <path d="M50 15 C20 15 10 40 10 55 C10 75 25 90 50 90 C75 90 90 75 90 55 C90 40 80 15 50 15" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 19px, currentColor 20px), repeating-linear-gradient(90deg, transparent, transparent 19px, currentColor 20px)',
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Paper Card Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="paper-card p-8 md:p-12 relative"
          >
            {/* Tape decorations */}
            <div className="absolute -top-3 left-1/4 w-20 h-6 bg-accent/80 transform -rotate-3" />
            <div className="absolute -top-3 right-1/4 w-16 h-6 bg-success/60 transform rotate-2" />
            
            {/* Name with playful typography */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="font-handwritten text-2xl md:text-3xl text-muted-foreground mb-4 block">
                Hey there! I'm
              </span>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="inline-block">Singh</span>{' '}
                <span className="inline-block tape-highlight text-foreground">Aradhana</span>
              </h1>
              
              <p className="font-handwritten text-xl md:text-2xl text-muted-foreground mb-2">
                She/Her ✨
              </p>
            </motion.div>

            {/* Role badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-3 mb-8"
            >
              <span className="sticker bg-primary text-primary-foreground">
                <Sparkles className="w-4 h-4 mr-2" />
                AI/ML Enthusiast
              </span>
              <span className="sticker bg-coral text-coral-foreground transform rotate-1">
                Data Science
              </span>
              <span className="sticker bg-success text-success-foreground transform -rotate-2">
                Robotics Explorer
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              Exploring the fascinating world of{' '}
              <span className="font-semibold text-primary">Machine Learning</span>,{' '}
              <span className="font-semibold text-coral">Automation</span>, and{' '}
              <span className="font-semibold text-success">Robotics Engineering</span>. 
              Building AI that makes a difference.
            </motion.p>

            {/* Location & Education */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-6 text-muted-foreground mb-8"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-coral" />
                <span>Surat, Gujarat, India</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span>Uka Tarsadia University</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                View My Work
                <Sparkles className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-card border-2 border-foreground/20 rounded-full font-medium hover:border-primary hover:text-primary transition-all duration-300"
              >
                Let's Connect
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm font-handwritten">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
