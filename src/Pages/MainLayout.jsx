import React from 'react';
import InsideNav from '../Components/InsideNav';
import Home from './Home';
import Contact from './Contact';
import Services from './Services';
import Gap from '../Components/Gap';

const MainLayout = () => {
  return (
    <>
      <InsideNav />
      <Home />
      <Gap/>
      <Services/>
      <Contact />
    </>
  );
};

export default MainLayout;