import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'React / Full Stack Developer',
    company: 'PJSoftTech Pvt. Ltd.',
    period: 'May 2024 – Present',
    type: 'Full-time',
    achievements: [
      'Developed and maintained enterprise-level CRM systems including Lead, Employee, Student/Admission, and Inquiry modules',
      'Built scalable, high-performance web applications using React.js, Vite, JavaScript (ES6+), and Spring Boot',
      'Implemented Module Federation micro-frontend architecture for large-scale systems',
      'Designed responsive, user-friendly interfaces using Material UI, Ant Design, HTML5, and CSS3',
      'Integrated secure REST APIs, authentication, file uploads, and payment gateways (Razorpay)',
      'Worked closely with backend teams using Spring Boot, Hibernate ORM, and Microservices',
      'Followed Git best practices and wrote clean, modular, maintainable code in an agile environment',
    ],
  },
  {
    id: 2,
    title: 'System Engineer',
    company: 'Infosys Ltd.',
    period: '2022 (6 Months)',
    type: 'Full-time',
    achievements: [
      'Gained hands-on experience with Core Java, C++, and enterprise-level systems',
      'Worked extensively with Oracle PeopleSoft applications',
      'Developed understanding of large-scale enterprise software workflows',
      'Collaborated with cross-functional teams in a corporate development environment',
      'This role strengthened my foundation and motivated me to pursue full-stack development',
    ],
  },
];


const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-8xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                <motion.div
                  className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary/30"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-16 md:pl-0`}>
                <motion.div
                  className="glass-card rounded-2xl p-6 group hover:shadow-lg transition-shadow"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {exp.type}
                      </span>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + i * 0.05 + 0.4 }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
