import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight, Github, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Queen Of Apostles Renewal Centre Website',
      description: 'A modern website for Queen Of Apostles Renewal Centre built with ASP.NET. This capstone project features a responsive design, booking system, and information about the centre\'s services and facilities.',
      image: './lovable-uploads/9415a9d9-17eb-408e-8e23-d4335b1c46d8.png',
      tags: ['C#', 'ASP.NET', 'SQL', 'Bootstrap', 'JavaScript', 'Responsive Design'],
      links: {
        demo: 'https://github.com/AliCebe1986/QueenOfApostlesRenewalCentreWebsite',
        github: 'https://github.com/AliCebe1986/QueenOfApostlesRenewalCentreWebsite',
      },
      capstone: true,
    },
    {
      title: 'Blog Project',
      description: 'A feature-rich blog platform built with ASP.NET and SQL. This project includes user authentication, content management, and a responsive design for optimal viewing on any device.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=500&auto=format&fit=crop',
      tags: ['C#', 'ASP.NET', 'SQL', 'Bootstrap', 'JavaScript', 'Responsive Design'],
      links: {
        demo: 'https://github.com/AliCebe1986/Blog',
        github: 'https://github.com/AliCebe1986/Blog',
      },
    },
    {
      title: 'Personal Restaurant Guide',
      description: 'An Android application that allows users to discover, save, and review restaurants. Features include search functionality, user reviews, and restaurant details.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=500&auto=format&fit=crop',
      tags: ['Java', 'Android', 'SQLite', 'XML', 'Mobile Development'],
      links: {
        demo: 'https://github.com/AliCebe1986/PersonalRestaurantGuide',
        github: 'https://github.com/AliCebe1986/PersonalRestaurantGuide',
      },
    },
    {
      title: 'GBC Event Booking',
      description: 'An event booking system for George Brown College that allows users to browse, book, and manage events. Includes user authentication and event management features.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=500&auto=format&fit=crop',
      tags: ['C#', 'ASP.NET', 'SQL', 'Bootstrap'],
      links: {
        demo: 'https://github.com/AliCebe1986/-GBC_EventBooking-31',
        github: 'https://github.com/AliCebe1986/-GBC_EventBooking-31',
      },
    },
    {
      title: 'GBC Bids',
      description: 'An online auction platform for George Brown College students and staff to buy and sell items. Features include user profiles, item listings, and bidding functionality.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=500&auto=format&fit=crop',
      tags: ['C#', 'ASP.NET', 'SQL', 'Bootstrap', 'JavaScript'],
      links: {
        demo: 'https://github.com/AliCebe1986/GBCBids',
        github: 'https://github.com/AliCebe1986/GBCBids',
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <motion.p
            className="inline-block px-3 py-1 mb-4 text-xs font-medium uppercase tracking-widest text-primary bg-primary/10 rounded-full"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Recent Work
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Here are some of the projects I've worked on recently. Each project demonstrates my skills and approach to problem-solving.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="group bg-background rounded-lg overflow-hidden shadow-md hover-lift"
              variants={itemVariants}
            >
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                  <div className="flex gap-4">
                    <motion.a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-background flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Globe className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-background flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <motion.span
                    className="text-primary"
                    initial={{ scale: 1 }}
                    whileHover={{ rotate: 45, scale: 1.2 }}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.span>
                </div>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.capstone && (
                  <div className="mt-2">
                    <Link 
                      to="/capstone" 
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      View Capstone Details <ArrowUpRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a 
            href="https://github.com/AliCebe1986" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 hover-lift"
          >
            View More on GitHub <Github className="ml-2 w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
