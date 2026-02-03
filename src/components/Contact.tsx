import { useState, useRef, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send, Heart, ExternalLink, MessageCircle, Coffee, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setStatusMessage('Please fill in all required fields.');
      return;
    }

    setStatus('loading');

    // Construct mailto link
    const mailtoLink = `mailto:aradhana8704@gmail.com?subject=${encodeURIComponent(formData.subject || 'New Message from Portfolio')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;

    // Open in new tab/window
    window.location.href = mailtoLink;

    setStatus('success');
    setStatusMessage('Opening your email client... ✨');

    // Reset form after a short delay
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setStatus('idle');
      setStatusMessage('');
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden section-cream border-b-4 border-black">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 dot-bg pointer-events-none" />

      {/* Decorative elements */}
      <svg className="absolute top-16 left-12 w-16 h-16 text-coral/20 hidden lg:block" viewBox="0 0 100 100">
        <path d="M50 10 C30 30, 70 30, 50 50 C70 70, 30 70, 50 90" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>

      <svg className="absolute bottom-20 right-16 w-20 h-20 text-primary/20 hidden lg:block" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="15 10" />
      </svg>

      <svg className="absolute top-1/2 left-8 w-12 h-12 text-highlight/30 hidden lg:block" viewBox="0 0 100 100">
        <path d="M50 10 L61 40 L95 40 L68 60 L79 90 L50 72 L21 90 L32 60 L5 40 L39 40 Z" fill="none" stroke="currentColor" strokeWidth="2" />
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
          <span className="font-handwritten text-3xl md:text-4xl text-coral block mb-3">
            Let's connect! 💬
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Get in <span className="tape-highlight">Touch</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="paper-card p-8 relative"
            >
              <div className="absolute -top-2 left-6 w-20 h-5 bg-coral/60 transform -rotate-2 rounded-sm" />
              <div className="absolute -top-2 right-10 w-14 h-5 bg-primary/50 transform rotate-2 rounded-sm" />

              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-coral rounded-xl">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-handwritten text-2xl">
                  Send me a message! ✉️
                </h3>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-muted/30 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-coral/50 focus:border-coral transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-muted/30 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-coral/50 focus:border-coral transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground/70 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 bg-muted/30 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-coral/50 focus:border-coral transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, question, or just say hi!"
                    rows={4}
                    className="w-full px-4 py-3 bg-muted/30 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-coral/50 focus:border-coral transition-all resize-none"
                    required
                  />
                </div>

                {/* Status Message */}
                {status !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-2 p-3 rounded-xl ${status === 'success' ? 'bg-green-100 text-green-700' :
                      status === 'error' ? 'bg-red-100 text-red-700' :
                        'bg-muted text-foreground'
                      }`}
                  >
                    {status === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
                    {status === 'success' && <CheckCircle className="w-4 h-4" />}
                    {status === 'error' && <AlertCircle className="w-4 h-4" />}
                    <span className="text-sm">{statusMessage}</span>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: status === 'loading' ? 1 : 1.02, y: status === 'loading' ? 0 : -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-coral text-white rounded-2xl font-medium shadow-sticker hover:shadow-card-hover transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>

              {/* Fun availability sticker */}
              <motion.div
                className="absolute -bottom-3 -right-3 sticker bg-highlight text-foreground text-xs hidden md:flex"
                animate={{ rotate: [2, -2, 2] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Coffee className="w-3 h-3 mr-1" />
                Open for opportunities!
              </motion.div>
            </motion.div>

            {/* Contact Info & Social Links Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Quick Contact Info */}
              <div className="paper-card p-6 relative">
                <div className="absolute -top-2 right-6 w-16 h-5 bg-lavender/60 transform rotate-2 rounded-sm" />

                <div className="space-y-4">
                  <motion.a
                    href="mailto:aradhana8704@gmail.com"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-muted/30 rounded-2xl hover:bg-muted/50 transition-all group"
                  >
                    <div className="p-3 bg-coral rounded-xl shadow-sticker">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                      <p className="font-medium group-hover:text-coral transition-colors">aradhana8704@gmail.com</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>

                  <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-2xl">
                    <div className="p-3 bg-primary rounded-xl shadow-sticker">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                      <p className="font-medium">Surat, Gujarat, India 🇮🇳</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="paper-card p-6 relative">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="p-2.5 bg-lavender rounded-xl"
                  >
                    <Heart className="w-5 h-5 text-white" />
                  </motion.div>
                  <h3 className="font-handwritten text-xl">
                    Find me online ✨
                  </h3>
                </div>

                <div className="space-y-3">
                  <motion.a
                    href="https://github.com/The-Unindented/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between p-4 bg-muted/30 rounded-2xl hover:bg-muted/50 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-foreground rounded-xl shadow-sticker">
                        <Github className="w-5 h-5 text-background" />
                      </div>
                      <div>
                        <p className="font-medium group-hover:text-coral transition-colors">GitHub</p>
                        <p className="text-sm text-muted-foreground">@The-Unindented</p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-coral transition-colors" />
                  </motion.a>

                  <motion.a
                    href="https://linkedin.com/in/singharadhana"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between p-4 bg-muted/30 rounded-2xl hover:bg-muted/50 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[#0077B5] rounded-xl shadow-sticker">
                        <Linkedin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium group-hover:text-coral transition-colors">LinkedIn</p>
                        <p className="text-sm text-muted-foreground">Singh Aradhana</p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-coral transition-colors" />
                  </motion.a>
                </div>
              </div>

              {/* Quote */}
              <div className="paper-card px-6 py-4 relative text-center">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-highlight/60 transform -rotate-1 rounded-sm" />
                <p className="font-handwritten text-xl text-muted-foreground">
                  "Every great collaboration starts with a simple hello!"
                </p>
                <p className="text-sm text-muted-foreground mt-1">- Aradhana ✨</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
