import React from 'react';
import './Home.css';

//COMPONENTS
import CMJumbotron from './Components/Header/Jumbotron/jumbotron'
import Popularp from './Components/PProducts/Popularp'
import DiscoverPS from './Components/DiscoverPS/DiscoverPS'
import OurPP from './Components/OurPP/OurPP'


const Home=()=> {
  return (
    <>
      <CMJumbotron/>
      <Popularp/>
      <DiscoverPS/>
      <OurPP/>
    </>
  );  
}

export default Home;
