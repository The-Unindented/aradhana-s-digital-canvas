import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send, Heart, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/5 to-transparent" />
      
      {/* Hand-drawn corner decorations */}
      <svg className="absolute bottom-10 left-10 w-20 h-20 text-foreground/10" viewBox="0 0 100 100">
        <path d="M10 90 Q50 50 90 90" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 80 Q50 50 80 80" fill="none" stroke="currentColor" strokeWidth="2"/>
      </svg>
      
      <svg className="absolute top-20 right-10 w-16 h-16 text-primary/20" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5"/>
      </svg>

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
            Let's connect! 💬
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Get in <span className="tape-highlight">Touch</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="paper-card p-8 relative"
            >
              <div className="absolute -top-2 left-6 w-16 h-5 bg-coral/60 transform -rotate-2" />
              
              <h3 className="font-handwritten text-2xl mb-6">
                Let's build something amazing together!
              </h3>
              
              <p className="text-foreground/70 mb-8 leading-relaxed">
                I'm always excited to connect with fellow developers, AI enthusiasts, and 
                anyone interested in collaborating on innovative projects. Feel free to reach out!
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:aradhana8704@gmail.com"
                  className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors group"
                >
                  <div className="p-2 bg-primary rounded-lg">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium group-hover:text-primary transition-colors">aradhana8704@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl">
                  <div className="p-2 bg-coral rounded-lg">
                    <MapPin className="w-5 h-5 text-coral-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Surat, Gujarat, India</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Links Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="paper-card p-8 relative"
            >
              <div className="absolute -top-2 right-6 w-14 h-5 bg-success/60 transform rotate-2" />
              
              <h3 className="font-handwritten text-2xl mb-6">
                Find me online ✨
              </h3>

              <div className="space-y-4">
                <a
                  href="https://github.com/The-Unindented/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-foreground rounded-lg">
                      <Github className="w-5 h-5 text-background" />
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">GitHub</p>
                      <p className="text-sm text-muted-foreground">@The-Unindented</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>

                <a
                  href="https://linkedin.com/in/singharadhana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-[#0077B5] rounded-lg">
                      <Linkedin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">LinkedIn</p>
                      <p className="text-sm text-muted-foreground">Singh Aradhana</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>

              {/* Quick message CTA */}
              <motion.a
                href="mailto:aradhana8704@gmail.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:shadow-card-hover transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                Send me a message
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
