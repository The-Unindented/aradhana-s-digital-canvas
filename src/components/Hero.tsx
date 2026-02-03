import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, MapPin, GraduationCap, Github, Linkedin, Mail, Heart, Star } from 'lucide-react';
import profileImg from '../assets/aradhana.jpg';

// Decorative Star SVG components
const Star4 = ({ color = "currentColor", size = 24, stroke, strokeWidth, className, ...props }: {
  color?: string;
  size?: number;
  stroke?: string;
  strokeWidth?: number;
  className?: string;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} {...props}>
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" stroke={stroke} strokeWidth={strokeWidth} />
  </svg>
);

const Star6 = ({ color = "currentColor", size = 24, stroke, strokeWidth, className, ...props }: {
  color?: string;
  size?: number;
  stroke?: string;
  strokeWidth?: number;
  className?: string;
}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} {...props}>
    <path d="M12 0L14 8L22 8L16 13L18 21L12 17L6 21L8 13L2 8L10 8L12 0Z" stroke={stroke} strokeWidth={strokeWidth} />
  </svg>
);

const Hero = () => {
  const floatingElements = [
    { icon: '✨', delay: 0, x: '8%', y: '25%' },
    { icon: '🚀', delay: 0.5, x: '88%', y: '18%' },
    { icon: '💡', delay: 1, x: '5%', y: '75%' },
    { icon: '🤖', delay: 1.5, x: '92%', y: '70%' },
    { icon: '💜', delay: 2, x: '12%', y: '50%' },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-bg border-b-4 border-black">
      {/* Decorative Stars */}
      <motion.div
        className="absolute top-20 right-[15%] pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Star4 color="#F87171" size={40} stroke="#222" strokeWidth={1} />
      </motion.div>
      <motion.div
        className="absolute top-40 left-[10%] pointer-events-none"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Star6 color="#FCD34D" size={32} stroke="#222" strokeWidth={1} />
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-[20%] pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <Star4 color="#6EE7B7" size={28} stroke="#222" strokeWidth={1} />
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-[18%] pointer-events-none"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Star6 color="#93C5FD" size={36} stroke="#222" strokeWidth={1} />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none z-10" />

      {/* Floating decorative elements */}
      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl md:text-4xl pointer-events-none select-none opacity-50"
          style={{ left: el.x, top: el.y }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: el.delay,
            ease: 'easeInOut',
          }}
        >
          {el.icon}
        </motion.div>
      ))}

      <div className="container mx-auto px-6 lg:px-12 xl:px-20 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 xl:gap-16 pt-32 pb-20">
          {/* LEFT SIDE: Text Content */}
          <div className="flex-1 text-center lg:text-left max-w-xl lg:max-w-lg xl:max-w-xl">
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-handwritten text-3xl text-muted-foreground mb-2"
            >
              Hey there! Welcome to ♡
            </motion.p>

            {/* Brand Name */}
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight text-foreground"
            >
              <span className="relative inline-block">
                aiwitharadhana
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-highlight opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
              <span className="text-coral">.in</span>
            </motion.h1>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-8"
            >
              <p className="text-xl md:text-2xl text-foreground/80 mb-2">
                I'm <span className="font-semibold text-foreground text-2xl md:text-3xl">Singh Aradhana</span>
              </p>
            </motion.div>

            {/* Role Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
            >
              <span className="sticker bg-coral text-white text-sm py-2 px-4 shadow-sticker hover:scale-105 transition-transform cursor-default">
                <Sparkles className="w-4 h-4 mr-1.5 inline" />
                AI/ML Engineer
              </span>
              <span className="sticker bg-primary/20 text-primary-foreground text-sm py-2 px-4 shadow-sticker hover:scale-105 transition-transform cursor-default border border-primary/20">
                Data Scientist
              </span>
              <span className="sticker bg-highlight text-yellow-900 text-sm py-2 px-4 shadow-sticker hover:scale-105 transition-transform cursor-default">
                <Star className="w-4 h-4 mr-1.5 inline" />
                Robotics Explorer
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-foreground/70 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Exploring the fascinating world of{' '}
              <span className="font-semibold text-coral">Machine Learning</span>,{' '}
              <span className="font-semibold text-primary">Automation</span>, and{' '}
              <span className="font-semibold text-highlight-foreground/80">Robotics Engineering</span>.
              Building AI that makes a difference.
            </motion.p>

            {/* Location & Uni */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-muted-foreground mb-10 font-medium"
            >
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-coral" />
                Surat, Gujarat, India
              </span>
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-primary" />
                Uka Tarsadia University
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-coral text-white rounded-full font-bold text-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                View My Work
                <Sparkles className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-border text-foreground rounded-full font-bold text-lg hover:border-coral hover:text-coral hover:bg-coral/5 transition-all duration-300"
              >
                <Heart className="w-5 h-5" />
                Let's Connect
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex justify-center lg:justify-start gap-4 mt-10"
            >
              <a href="https://github.com/The-Unindented/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white border border-border rounded-full hover:scale-110 hover:border-foreground transition-all shadow-sm">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/singharadhana" target="_blank" rel="noopener noreferrer" className="p-3 bg-white border border-border rounded-full hover:scale-110 hover:border-[#0077B5] hover:text-[#0077B5] transition-all shadow-sm">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:aradhana8704@gmail.com" className="p-3 bg-white border border-border rounded-full hover:scale-110 hover:border-coral hover:text-coral transition-all shadow-sm">
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Profile Image with Creative Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            className="flex-shrink-0 relative lg:ml-0"
          >
            {/* Decorative background blob */}
            <div className="absolute -inset-8 bg-gradient-to-tr from-coral/30 via-primary/20 to-highlight/30 rounded-full blur-3xl" />

            {/* Image container with playful frame */}
            <div className="relative">
              {/* Tape decorations */}
              <div className="absolute -top-4 left-1/4 w-16 h-6 bg-highlight/80 transform -rotate-12 rounded-sm z-20 shadow-sm" />
              <div className="absolute -top-3 right-1/4 w-14 h-5 bg-coral/60 transform rotate-6 rounded-sm z-20 shadow-sm" />

              {/* Main image frame */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-3xl bg-white p-3 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-dashed border-border">
                  <img
                    src={profileImg}
                    alt="Singh Aradhana"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative stickers around frame */}
                <motion.div
                  className="absolute -top-2 -right-2 sticker bg-coral text-white text-xs py-1.5 px-3 z-30"
                  animate={{ rotate: [3, -3, 3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  She/Her ✨
                </motion.div>
                <motion.div
                  className="absolute -bottom-2 -left-2 sticker bg-primary text-foreground text-xs py-1.5 px-3 z-30"
                  animate={{ rotate: [-2, 2, -2] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  AI Enthusiast 🤖
                </motion.div>
              </div>

              {/* Floating stars around the image */}
              <motion.div
                className="absolute -top-6 -right-6"
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                <Star4 color="#FCD34D" size={32} stroke="#333" strokeWidth={1.5} />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-8"
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              >
                <Star6 color="#F87171" size={24} stroke="#333" strokeWidth={1.5} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground/60 hover:text-coral transition-colors"
        >
          <span className="text-sm font-handwritten">Scroll to explore</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
