import React from 'react';
import About from './About';
import Experience from './Experience';
import Portfolio from './Portfolio';
import Contact from './Contact';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView();

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className="section"
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div id='' className='container-fluid background' >
        <About />
      <AnimatedSection>
        <Portfolio />
      </AnimatedSection>
      <AnimatedSection>
        <Experience />
      </AnimatedSection>
      <AnimatedSection>
        <Contact />
      </AnimatedSection>
      <footer className="text-center py-3">
        <p>&copy; {currentYear} Mayfair@All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
