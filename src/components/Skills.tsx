
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { category: 'Frontend', items: ['HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Tailwind CSS', 'SASS/SCSS', 'Framer Motion'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'Django', 'MongoDB', 'PostgreSQL', 'RESTful APIs', 'GraphQL'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Docker', 'Webpack', 'Vite', 'NPM/Yarn', 'Postman'] },
    { category: 'Design', items: ['Figma', 'Adobe XD', 'Responsive Design', 'UI/UX Design', 'Wireframing', 'Prototyping', 'Color Theory', 'Typography'] },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <motion.p
            className="inline-block px-3 py-1 mb-4 text-xs font-medium uppercase tracking-widest text-primary bg-primary/10 rounded-full"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Skills
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Technologies I Work With
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm proficient in a wide range of technologies, frameworks, and tools that enable me to build 
            comprehensive web solutions.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skills.map((skillGroup, i) => (
            <motion.div
              key={i}
              className="bg-background rounded-lg p-6 shadow-md glass"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gradient inline-block">
                {skillGroup.category}
              </h3>
              <div className="space-y-3">
                {skillGroup.items.map((skill, j) => (
                  <motion.div
                    key={j}
                    className="relative"
                    variants={itemVariants}
                    custom={j}
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                      <span className="text-sm">{skill}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 bg-background rounded-lg p-8 glass"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">My Approach to Development</h3>
              <p className="text-muted-foreground mb-4">
                I believe in writing clean, maintainable code and following best practices in all my projects. 
                My development approach is centered around:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2 mt-2"></span>
                  <span>Responsive design that works across all devices</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2 mt-2"></span>
                  <span>Accessibility standards for inclusive web applications</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2 mt-2"></span>
                  <span>Performance optimization for fast-loading pages</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2 mt-2"></span>
                  <span>Testing and code quality assurance</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2 mt-2"></span>
                  <span>Continual learning and adaptation to new technologies</span>
                </li>
              </ul>
            </div>
            <div className="relative h-64 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-400 opacity-20 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-gradient">5+ Years</div>
                  <p className="text-muted-foreground">Development Experience</p>
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
