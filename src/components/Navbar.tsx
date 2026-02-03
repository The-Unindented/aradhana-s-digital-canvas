import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Handshake } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Tech Stack' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{
        width: "100%",
        y: 0,
        borderRadius: 0,
        backgroundColor: "rgba(255, 255, 255, 0)", // Transparent initially
        borderBottomColor: "rgba(0,0,0,0)"
      }}
      animate={{
        width: scrolled ? "90%" : "100%",
        y: scrolled ? 20 : 0,
        borderRadius: scrolled ? "50px" : "0px",
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0)",
        border: scrolled ? "1px solid rgba(0,0,0,0.1)" : "0px solid rgba(0,0,0,0)",
        backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
        boxShadow: scrolled ? "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" : "none",
      }}
      transition={{
        duration: 0.4,
        ease: "easeInOut", // Smooth easing instead of spring for resize
      }}
      style={{
        maxWidth: scrolled ? "1024px" : "100%",
        left: "50%",
        x: "-50%", // Always centered
      }}
      className="fixed z-50 flex items-center justify-between px-6 py-2 md:py-3 transition-colors"
    >
      <div className="flex items-center gap-1 group">
        <div className="block">
          <span className="font-display text-xl font-bold text-foreground group-hover:text-coral transition-colors">
            aiwitharadhana
          </span>
          <span className="font-display text-xl font-bold text-coral">.in</span>
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-1">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="relative px-4 py-2 font-medium text-foreground/70 hover:text-foreground transition-colors group"
          >
            {link.label}
            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-coral rounded-full group-hover:w-1/2 transition-all duration-300" />
          </a>
        ))}
      </div>

      {/* Social Links & CTA */}
      <div className="hidden md:flex items-center gap-2">
        <a
          href="https://github.com/The-Unindented/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-muted transition-colors text-foreground/70 hover:text-foreground"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com/in/singharadhana"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-muted transition-colors text-foreground/70 hover:text-foreground"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="mailto:aradhana8704@gmail.com"
          className="ml-2 p-2.5 bg-coral text-white rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center"
          aria-label="Say Hello"
        >
          <Handshake className="w-5 h-5" />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-full hover:bg-muted transition-colors"
        aria-label="Toggle menu"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-4 p-4 bg-card rounded-3xl shadow-xl border border-border/50 md:hidden overflow-hidden w-full origin-top"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between px-4 py-3 rounded-2xl font-medium text-foreground hover:bg-muted transition-all"
                >
                  {link.label}
                  <span className="w-1.5 h-1.5 rounded-full bg-coral opacity-0 group-hover:opacity-100" />
                </motion.a>
              ))}

              <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-border/50">
                <a
                  href="https://github.com/The-Unindented/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-muted/50 hover:bg-foreground hover:text-background transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span className="font-medium text-sm">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/singharadhana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-muted/50 hover:bg-[#0077B5] hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="font-medium text-sm">LinkedIn</span>
                </a>
              </div>

              <a
                href="mailto:aradhana8704@gmail.com"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 mt-2 px-4 py-3 bg-coral text-white rounded-2xl font-medium shadow-sticker"
              >
                <Handshake className="w-5 h-5" />
                Say Hello
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;