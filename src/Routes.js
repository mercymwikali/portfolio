import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path='/experience' element={<Experience/>}/>
        <Route path="/" element={<Home/>} />
      </Routes>
  );
};

export default AppRoutes;
