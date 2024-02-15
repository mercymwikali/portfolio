import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path='/experience' element={<Experience/>}/>
        <Route path ='/contact' element={<Contact/>}/>
        <Route path="/" element={<Home/>} />
      </Routes>
  );
};

export default AppRoutes;
