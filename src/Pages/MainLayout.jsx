import React from 'react';
import InsideNav from '../Components/InsideNav';
import Home from './Home';
import Contact from './Contact';
import Services from './Services';
import Gap from '../Components/Gap';
import VideoPage from '../Components/VideoPage';

const MainLayout = () => {
  return (
    <>
      <InsideNav />
      <Home />
      <Services/>
      <Contact />
    </>
  );
};

export default MainLayout;