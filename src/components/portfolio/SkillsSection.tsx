import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Vite', level: 90 },
      { name: 'JavaScript (ES6+)', level: 92 },
      { name: 'Material UI', level: 88 },
      { name: 'Ant Design', level: 85 },
      { name: 'Framer Motion', level: 80 },
      { name: 'HTML5 / CSS3', level: 95 },
      { name: 'Responsive Design', level: 90 },
    ],
  },
  {
    title: 'Backend',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Java', level: 88 },
      { name: 'Spring Boot', level: 85 },
      { name: 'REST APIs', level: 90 },
      { name: 'JWT Authentication', level: 85 },
    ],
  },
  {
    title: 'Architecture',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Micro-Frontend (Module Federation)', level: 90 },
      { name: 'Role-Based Access Control', level: 88 },
      { name: 'Multi-Tenant Systems', level: 85 },
    ],
  },
  {
    title: 'Tools & Others',
    color: 'from-orange-500 to-amber-500',
    skills: [
      { name: 'Git & GitHub', level: 92 },
      { name: 'Postman', level: 88 },
      { name: 'Swagger', level: 85 },
      { name: 'AWS (EC2)', level: 70 },
      { name: 'MySQL', level: 82 },
      { name: 'Figma', level: 65 },
    ],
  },
];

const SkillBadge = ({ skill, color, delay }: { skill: { name: string; level: number }; color: string; delay: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="glass-card rounded-xl px-4 py-3 cursor-pointer overflow-hidden"
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Background gradient on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-10 transition-opacity`}
        />

        {/* Skill name */}
        <div className="relative flex items-center justify-between gap-3">
          <span className="font-medium text-sm">{skill.name}</span>
          <motion.span
            className="text-xs text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
          >
            {skill.level}%
          </motion.span>
        </div>

        {/* Progress bar */}
        <div className="relative mt-2 h-1 bg-muted rounded-full overflow-hidden">
          <motion.div
            className={`absolute inset-y-0 left-0 bg-gradient-to-r ${color} rounded-full`}
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.2, duration: 0.8, ease: 'easeOut' }}
          />
        </div>

        {/* Shimmer effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
          animate={isHovered ? { translateX: '100%' } : {}}
          transition={{ duration: 0.6 }}
        />
      </motion.div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-l from-accent/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to build amazing applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="glass-card rounded-2xl p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`} />
                <h3 className="text-xl font-display font-semibold">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBadge
                    key={skill.name}
                    skill={skill}
                    color={category.color}
                    delay={categoryIndex * 0.1 + skillIndex * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
