import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', category: 'Languages', level: 90 },
  { name: 'C++', category: 'Languages', level: 75 },
  { name: 'Java', category: 'Languages', level: 70 },
  { name: 'C', category: 'Languages', level: 80 },
  { name: 'Machine Learning', category: 'AI/ML', level: 85 },
  { name: 'Deep Learning', category: 'AI/ML', level: 80 },
  { name: 'GANs', category: 'AI/ML', level: 75 },
  { name: 'Computer Vision', category: 'AI/ML', level: 70 },
  { name: 'TensorFlow', category: 'Frameworks', level: 75 },
  { name: 'Streamlit', category: 'Frameworks', level: 80 },
  { name: 'Flask', category: 'Frameworks', level: 70 },
  { name: 'Google Gemini', category: 'AI Tools', level: 80 },
  { name: 'Tableau', category: 'Tools', level: 75 },
  { name: 'Data Analysis', category: 'Skills', level: 85 },
];

const categories = ['Languages', 'AI/ML', 'Frameworks', 'AI Tools', 'Tools', 'Skills'];

const categoryColors: Record<string, string> = {
  'Languages': 'bg-primary',
  'AI/ML': 'bg-coral',
  'Frameworks': 'bg-success',
  'AI Tools': 'bg-accent',
  'Tools': 'bg-primary/70',
  'Skills': 'bg-coral/70',
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 sky-bg relative overflow-hidden">
      {/* Decorative grid in corner */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 19px, currentColor 20px), repeating-linear-gradient(90deg, transparent, transparent 19px, currentColor 20px)',
          backgroundSize: '20px 20px'
        }} />
      </div>

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
            What I work with 💻
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Tech <span className="tape-highlight">Stack</span>
          </h2>
        </motion.div>

        {/* Skills by category */}
        <div className="max-w-4xl mx-auto">
          {categories.map((category, catIndex) => {
            const categorySkills = skills.filter(s => s.category === category);
            if (categorySkills.length === 0) return null;
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1, duration: 0.6 }}
                className="mb-8"
              >
                <h3 className="font-handwritten text-2xl text-foreground/80 mb-4 flex items-center gap-2">
                  <span className={`w-3 h-3 ${categoryColors[category]} rounded-full`} />
                  {category}
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (catIndex * 0.1) + (index * 0.05), duration: 0.4 }}
                      whileHover={{ scale: 1.05, rotate: Math.random() > 0.5 ? 2 : -2 }}
                      className={`sticker ${categoryColors[category]} text-white cursor-default`}
                    >
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-2xl mx-auto mt-12"
        >
          <div className="paper-card p-8 relative">
            <div className="absolute -top-2 left-8 w-20 h-5 bg-accent/70 transform -rotate-2" />
            
            <h3 className="font-handwritten text-2xl text-center mb-6">
              Certifications & Learning ✨
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                <span className="text-2xl">🎓</span>
                <div>
                  <h4 className="font-semibold">Deloitte Australia - Data Analytics Job Simulation</h4>
                  <p className="text-sm text-muted-foreground">Forage • May 2025</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                <span className="text-2xl">🤖</span>
                <div>
                  <h4 className="font-semibold">Recent Advancements in AI and Robotics</h4>
                  <p className="text-sm text-muted-foreground">SVNIT Surat • July 2024</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                <span className="text-2xl">📊</span>
                <div>
                  <h4 className="font-semibold">Supervised Machine Learning: Regression & Classification</h4>
                  <p className="text-sm text-muted-foreground">Coursera - Andrew Ng</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
