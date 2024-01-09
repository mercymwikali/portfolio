import React from 'react';
import { hospital, judiciary, movies } from '../assets/Images';
import { Button } from 'antd';

const Portfolio = () => {
  // Dummy data for additional cards
  const cardsData = [
    {
      id: 1,
      imgSrc: judiciary,
      title: 'Judiciary Portal',
      text: 'A prototype staff portal for over 6000 Judiciary employees, offering streamlined tools for leave requests, resource management, and insightful data visualizations on leave trends and expenses. Enhancing efficiency and fostering a data-driven approach to workforce management.',
      demoLink: 'https://judiciary-iota.vercel.app/',
    },
    {
      id: 2,
      imgSrc: hospital,
      title: 'Hospital Management System',
      text: 'Revolutionizing healthcare, our system transforms medical facilities nationwide, empowering hospitals to go paperless for streamlined operations and swift patient treatment. With robust data analytics, it offers invaluable insights for efficient business and hospital management, ensuring enhanced patient care and overall operational excellence.',
      demoLink: 'https://hospital-mgt.vercel.app/addPatient',
    },

    {
      id: 3,
      imgSrc: movies,
      title: 'Movies App',
      text: 'My Movies App project was a deep dive into API integration, data fetching, error handling, and React Hooks. I gained valuable insights into managing state, handling asynchronous operations, and ensuring a seamless user experience. This project served as an excellent learning opportunity for mastering React Hooks and honing skills in modern web development.',
      demoLink: 'https://movie-app-tan-iota.vercel.app/-node',
    },
  ];

  return (
    <div className="h-100 mb-5 align-items-center justify-content-center">
      <div className="row py-3">
        <div className="col-12 text-center">
          <h2 className="py-3 text-capitalize fw-bold border-bottom border-gray-400">
            Projects
          </h2>
        </div>
      </div>
      <div id='portfolio' className='row justify-content-center align-items-center'>
        {cardsData.map((card) => (
          <div key={card.id} className="col-12 mb-3 d-flex justify-content-center cursor-pointer ">
            <div className="card bg-transparent shadow-lg" style={{ maxWidth: '780px' }}>
              <div className="row g-0 align-items-center justify-content-center px-3">
                <div className="col-md-4 pt-3 align-items-center justify-content-center" >
                  <img src={card.imgSrc} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8 py-3 px-3">
                  <h5 className="h6 text-decoration-underline">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                  <Button type="default" href={card.demoLink} target="_blank" rel="noopener noreferrer" danger>Live Demo</Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
