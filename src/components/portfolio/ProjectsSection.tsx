import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Layers, Users, FileText, Globe, DollarSign, Gamepad2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Super Admin Client',
    description: 'Host application for Module Federation micro-frontend architecture. Central management system for all remote modules.',
    icon: Layers,
    tags: ['React', 'Module Federation', 'TypeScript', 'Micro-Frontend'],
    github: 'https://github.com/Rushabhshete/superadminclient.git',
    featured: true,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Employee Management',
    description: 'Remote module for comprehensive employee management with role-based access, attendance tracking, and HR functionalities.',
    icon: Users,
    tags: ['React', 'Material UI', 'REST API', 'Module Federation'],
    github: 'https://github.com/Rushabhshete/employee.git',
    featured: true,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 3,
    title: 'Inquiry Management',
    description: 'Remote module for handling inquiries, lead tracking, and follow-up management with real-time updates.',
    icon: FileText,
    tags: ['React', 'Spring Boot', 'MySQL', 'Module Federation'],
    github: 'https://github.com/Rushabhshete/LayringInquiry.git',
    featured: true,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 4,
    title: 'Student Management',
    description: 'Comprehensive student management system with enrollment, attendance, grades, and academic tracking.',
    icon: Users,
    tags: ['React', 'Material UI', 'REST API', 'Module Federation'],
    github: 'https://github.com/Rushabhshete/layringstudent.git',
    featured: false,
    color: 'from-orange-500 to-amber-500',
  },
  {
    id: 5,
    title: 'Dynamic Website Framework',
    description: 'Remote module for creating dynamic, customizable websites with drag-and-drop functionality.',
    icon: Globe,
    tags: ['React', 'Vite', 'Tailwind CSS', 'Module Federation'],
    github: 'https://github.com/Rushabhshete/websiteframework.git',
    featured: false,
    color: 'from-red-500 to-rose-500',
  },
  {
    id: 6,
    title: 'Income Expense Tracker',
    description: 'Financial management module for tracking income, expenses, and generating financial reports.',
    icon: DollarSign,
    tags: ['React', 'Chart.js', 'REST API', 'Module Federation'],
    github: 'https://github.com/sarfaraj2024/income-expense.git',
    featured: false,
    color: 'from-teal-500 to-cyan-500',
  },
  {
    id: 7,
    title: 'Tic Tac Toe',
    description: 'Interactive Tic Tac Toe game with modern UI, animations, and player vs player mode.',
    icon: Gamepad2,
    tags: ['React', 'CSS', 'Game Logic'],
    github: 'https://github.com/Rushabhshete/Tic_Tac_Toe.git',
    featured: false,
    color: 'from-indigo-500 to-violet-500',
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = project.icon;

  return (
    <motion.div
      className={`relative group ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="h-full glass-card rounded-2xl p-6 overflow-hidden"
        whileHover={{ scale: 1.02, y: -5 }}
      >
        {/* Background gradient */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 transition-opacity duration-300`}
          animate={{ opacity: isHovered ? 0.05 : 0 }}
        />

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
              Featured
            </span>
          </div>
        )}

        {/* Icon */}
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} bg-opacity-20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
          <Icon className="w-6 h-6 text-foreground" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-md bg-muted/50 text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 mt-auto">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-4 h-4" />
            <span>View Code</span>
          </motion.a>
        </div>

        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full pointer-events-none"
          animate={isHovered ? { translateX: '100%' } : {}}
          transition={{ duration: 0.6 }}
        />
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-l from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-r from-accent/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in micro-frontend architecture and full-stack development
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View more on GitHub */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/rushabhshete"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card hover:bg-primary/5 transition-colors font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            <span>View More on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
