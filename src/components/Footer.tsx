
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#2D1B4E] text-[#D8B4FE] overflow-hidden font-sans">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`
        }}
      />

      <div className="container mx-auto px-6 pt-24 pb-0 relative z-10 flex flex-col justify-between min-h-[600px]">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
          {/* Column 1 - Large Nav */}
          <div className="flex flex-col gap-4">
            {['Home', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                className="text-4xl md:text-5xl font-medium tracking-tight hover:text-white transition-colors block w-fit"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Column 2 - Socials */}
          <div className="mt-2 md:mt-0">
            <h3 className="text-xl font-medium mb-6 text-white/90">Connect</h3>
            <div className="flex flex-col gap-4 text-sm font-medium tracking-wide">
              <a href="https://linkedin.com/in/singharadhana" target="_blank" rel="noopener noreferrer" className="uppercase hover:text-white transition-colors w-fit">LinkedIn</a>
              <a href="https://github.com/The-Unindented/" target="_blank" rel="noopener noreferrer" className="uppercase hover:text-white transition-colors w-fit">GitHub</a>
              <a href="mailto:aradhana8704@gmail.com" className="uppercase hover:text-white transition-colors w-fit">Email</a>
            </div>
          </div>

          {/* Column 3 - Resources */}
          <div className="mt-2 md:mt-0">
            <h3 className="text-xl font-medium mb-6 text-white/90">Explore</h3>
            <div className="flex flex-col gap-4 text-sm font-medium tracking-wide">
              <a href="#" className="uppercase hover:text-white transition-colors w-fit">Resume</a>
              <a href="#about" className="uppercase hover:text-white transition-colors w-fit">About Me</a>
              <a href="#skills" className="uppercase hover:text-white transition-colors w-fit">Tech Stack</a>
            </div>
          </div>

          {/* Column 4 - Other */}
          <div className="mt-2 md:mt-0">
            <h3 className="text-xl font-medium mb-6 text-white/90">More</h3>
            <div className="flex flex-col gap-4 text-sm font-medium tracking-wide">
              <span className="uppercase opacity-70 cursor-not-allowed">Case Studies</span>
              <span className="uppercase opacity-70 cursor-not-allowed">Snippet Library</span>
            </div>
          </div>
        </div>

        {/* Middle Section - Icons & Legal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 md:mb-4">
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/singharadhana" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
            <a href="https://github.com/The-Unindented/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github size={24} /></a>
            <a href="mailto:aradhana8704@gmail.com" className="hover:text-white transition-colors"><Mail size={24} /></a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-[10px] md:text-xs font-bold tracking-widest uppercase text-[#B794F4]">
            <a href="#" className="hover:text-white transition-colors">Media Inquiries</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <span className="text-white/50">© {currentYear} Aradhana Singh</span>
          </div>
        </div>

        {/* Bottom Big Text */}
        <div className="w-full relative">
          <h1 className="text-[17vw] leading-[0.75] font-bold text-center tracking-tighter text-[#9F7AEA] opacity-90 select-none pb-4">
            ARADHANA.
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
