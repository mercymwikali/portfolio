import React, { useEffect, useRef, useState } from 'react';
import { Button, Spin } from 'antd';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { HeroImage } from '../assets/Images';

const About = () => {
  const typingRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const options = {
      strings: [
        'Hi,..!',
        'My name is Mercy 😊',
        'And I am a Full-Stack Developer! 💻',
        'Based in Nairobi, Kenya 🌍',
      ],
      typeSpeed: 40,
      backSpeed: 25,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
      onComplete: (self) => {
        typingRef.current.classList.add('fade-out');
        setTimeout(() => {
          self.reset();
          typingRef.current.classList.remove('fade-out');
        }, 500);
      },
    };

    const typed = new Typed(typingRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  const handleDownloadResume = () => {
    setLoading(true);

    // Simulate loading for 2 seconds
    setTimeout(() => {
      setLoading(false);

      // Trigger download
      const link = document.createElement('a');
      link.href = '/CV.pdf'; // Update with the actual path to your resume file
      link.download = 'Mercy_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="d-block d-md-flex"
    >
      <div className="item one col-12 col-md-6">
        <img src={HeroImage} className='image-fluid text-center ' alt="Hero" />
      </div>
      <div className=" col-12 col-md-6 px-2 mx-auto mt-md-5">
        <div className="py-md-3" style={{ height: '80px', overflow: 'hidden' }}>
          <h1 className='text-robotic'>
            <span ref={typingRef}></span>
          </h1>
        </div>
        <div className="py-3 px-2">
          <p className="mx-auto lh-lg text-break pt-2 " style={{ fontSize: '1rem' }}>
          As someone deeply immersed in the world of software development, I've cultivated a strong command of vital front-end and server-side languages. My journey in this field has been fueled by an unyielding curiosity and a genuine love for crafting software solutions, which has propelled me to constantly refine my skills through both personal explorations and professional endeavors. Through the years, I've sharpened my ability to tackle complex problems and devise efficient algorithms, fostering a flexibility that enables me to navigate through various technologies and coding languages with ease. As a self-directed learner, I thrive on embracing new challenges, always eager to dive into the next project with enthusiasm and a flair for innovation.
                    </p>
        </div>
        <div className="text-center mt-md-5">
          <Button
            type="primary"
            block
            ghost
            size='large'
            onClick={handleDownloadResume}
          >
            {loading ? <Spin size="default" /> : 'Download Resume'}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
