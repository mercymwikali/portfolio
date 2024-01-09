import React, { useEffect, useRef, useState } from 'react';
import { Button, Spin } from 'antd';
import { HeroImage } from '../assets/Images';
import Typed from 'typed.js';

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
      <div className="d-block d-md-flex">
        <div className="item one col-12 col-md-6">
          <img src={HeroImage} className='image-fluid text-center ' alt="Hero" />
        </div>
        <div className="item col-12 col-md-6 px-2 mx-auto mt-md-5">
          <div className="py-md-3" style={{ height: '80px', overflow: 'hidden' }}>
            <h1 className='text-robotic'>
              <span ref={typingRef}></span>
            </h1>
          </div>
          <div className="py-3 px-2">
          <p className="mx-auto lh-lg text-break ">
              As a seasoned software developer, I possess proficiency in essential front-end and server-side languages. My unwavering interest and profound passion for software development have been the driving forces behind my continuous skill refinement through both personal and professional projects. Over the years, I have honed my algorithmic and problem-solving skills, cultivating a versatility that allows me to adeptly navigate a wide array of technologies and programming languages. Being primarily a self-learner, I am adept at swiftly adapting to new challenges, always ready to tackle the next exciting project with enthusiasm and creativity.
            </p>

          </div>
          <Button
            type="primary"
            block
            ghost
            size='large'
            onClick={handleDownloadResume}
            // loading={loading}
          >
            {loading ? <Spin size="default" /> : 'Download Resume'}
          </Button>
        </div>
      </div>
  );
}

export default About;
