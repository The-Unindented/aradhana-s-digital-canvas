import BubbleMenu from '@/components/BubbleMenu';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

// Custom nav items for the BubbleMenu
const navItems = [
  {
    label: 'home',
    href: '#',
    ariaLabel: 'Home',
    rotation: -8,
    hoverStyles: { bgColor: '#F87171', textColor: '#ffffff' }
  },
  {
    label: 'about',
    href: '#about',
    ariaLabel: 'About',
    rotation: 8,
    hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
  },
  {
    label: 'projects',
    href: '#projects',
    ariaLabel: 'Projects',
    rotation: 8,
    hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
  },
  {
    label: 'experience',
    href: '#experience',
    ariaLabel: 'Experience',
    rotation: 8,
    hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
  },
  {
    label: 'contact',
    href: '#contact',
    ariaLabel: 'Contact',
    rotation: -8,
    hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
  }
];

// Decorative Star components
const Star4 = ({ color = "currentColor", size = 24, className = "" }: { color?: string; size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" stroke="#333" strokeWidth="1" />
  </svg>
);

// Marquee component for transitions between sections
// Marquee component for transitions between sections
const SectionMarquee = ({ text }: { text: string }) => (
  <div className="py-6 overflow-hidden bg-white border-b-4 border-black">
    <div className="marquee whitespace-nowrap">
      <div className="marquee-content flex items-center">
        {[...Array(12)].map((_, i) => (
          <span key={i} className="mx-8 font-handwritten text-3xl font-bold text-gray-500 whitespace-nowrap">
            {text}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BubbleMenu
        items={navItems}
        useFixedPosition={true}
        menuBg="#ffffff"
        menuContentColor="#111111"
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
        logo={
          <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>
            <span style={{ color: '#111' }}>aiwitharadhana</span>
            <span style={{ color: '#F87171' }}>.in</span>
          </span>
        }
      />
      <Hero />

      <SectionMarquee text="✨ AI Enthusiast • Open Source • Machine Learning • Robotics • Data Science • Building the Future ✨" />

      <About />

      <Experience />

      <SectionMarquee text="🚀 Python • TensorFlow • Deep Learning • GANs • Computer Vision • NLP • LLMs • 🚀" />

      <Projects />

      <Skills />

      <SectionMarquee text="💡 Let's Connect • Collaborate • Build Something Amazing Together • 💡" />

      <Contact />

      <Footer />

      {/* Floating decorative stars */}
      <motion.div
        className="fixed bottom-20 right-10 pointer-events-none hidden lg:block opacity-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <Star4 color="#F87171" size={40} />
      </motion.div>


    </div>
  );
};

export default Index;
