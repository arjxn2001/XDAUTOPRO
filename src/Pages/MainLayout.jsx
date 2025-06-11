import React from 'react';
import InsideNav from '../Components/InsideNav';
import Home from './Home';
import Work from './Work';
import Contact from './Contact';

const MainLayout = () => {
  return (
    <>
      <InsideNav />
      <Home />
      <Work />
      <Contact />
    </>
  );
};

export default MainLayout;