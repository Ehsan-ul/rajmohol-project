import React from 'react';
import Header from './header/Header';
import Body from './body/Body';
import Footer from './footer/Footer';

const MainComponent = () => {
  return (
    <div className='main-background'>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
};

export default MainComponent;
