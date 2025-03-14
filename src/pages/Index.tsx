
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { usePageTransition } from '@/hooks/usePageTransition';

const Index = () => {
  const isReady = usePageTransition(200);
  
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleClick = function(e: Event) {
      const href = this.getAttribute('href');
      // Skip if it's a router link (contains a slash after #)
      if (href?.includes('/')) return;
      
      e.preventDefault();
      
      const target = document.querySelector(href || '');
      if (target) {
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 80, // Offset for the fixed header
          behavior: 'smooth'
        });
      }
    };
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleClick);
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleClick);
      });
    };
  }, []);
  
  return (
    <motion.div 
      className="min-h-screen bg-background text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Header />
      <main style={{ opacity: isReady ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
