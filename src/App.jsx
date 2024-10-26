import React from 'react';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Main from './Components/Main';

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Banner */}
      <Banner></Banner>
      {/* main Sectiom */}
      <Main></Main>
      {/* Player Data */}

      {/* Footer */}
      <Footer></Footer>
      
    </div>
  );
};

export default App;