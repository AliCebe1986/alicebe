import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Delay animations until after the component is mounted
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/AliCebe1986', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/ali-cebe', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:alicebe86@gmail.com', label: 'Email' },
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated background elements with reduced animation intensity */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-80">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl top-1/4 -left-64" style={{
          animation: isLoaded ? 'pulse 8s ease-in-out infinite' : 'none'
        }} />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-blue-400/5 blur-3xl bottom-0 -right-64" style={{
          animation: isLoaded ? 'pulse 10s ease-in-out infinite' : 'none'
        }} />
      </div>
      
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center">
          <div className="space-y-8 max-w-3xl">
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.7 }}
            >
              <p className="inline-block px-4 py-1.5 mb-4 text-xs font-medium uppercase tracking-widest text-primary bg-primary/10 rounded-full">
                Full-Stack Developer
              </p>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Hi, I'm <span className="text-gradient">Ali Cebe</span>
              <br />
              <span className="mt-2 block">Creating digital experiences</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-2xl"
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Final-year Computer Programming and Analysis student with hands-on experience in software development and IT support.
              I specialize in building modern, responsive websites and web applications.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <a 
                href="#projects" 
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 hover-lift"
              >
                View My Work
              </a>
              <a 
                href="#resume" 
                className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground hover-lift"
              >
                My Resume
              </a>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-4 pt-2"
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-background border border-border shadow-sm hover:bg-accent transition-colors"
                  aria-label={social.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
          
          <motion.div 
            className="relative hidden md:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="relative w-64 h-64 rounded-full bg-gradient-to-r from-primary/30 to-blue-400/30 p-1 shadow-lg" style={{
              animation: isLoaded ? 'float 6s ease-in-out infinite' : 'none'
            }}>
              <div className="absolute inset-0 rounded-full glass"></div>
              <div className="w-full h-full rounded-full bg-background/50 flex items-center justify-center overflow-hidden">
                <div className="w-56 h-56 rounded-full bg-gradient-to-r from-primary to-blue-400" style={{
                  animation: isLoaded ? 'pulse 3s ease-in-out infinite' : 'none'
                }}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.a 
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm text-muted-foreground"
        initial={{ opacity: 0, y: 10 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        whileHover={{ y: 5 }}
      >
        <span className="mb-2">Scroll down</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.a>
    </section>
  );
};

export default Hero;
