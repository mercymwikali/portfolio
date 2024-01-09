import React from 'react';
import About from './About';
import Experience from './Experience';
import Portfolio from './Portfolio';
import Contact from './Contact';

const Home = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <div id='' className='container-fluid'>
      <About />
      <Portfolio />
      <Experience />
      <Contact />

      {/* Footer section */}
      <footer className="text-center py-3">
        <p>&copy; {currentYear} Mayfair@All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
