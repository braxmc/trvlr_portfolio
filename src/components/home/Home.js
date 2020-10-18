import React, {useState} from 'react';

import Sidebar from '../shared/Sidebar';
import Navbar from '../shared/Navbar';
import HeroSection from '../hero/HeroSection';
import Info from '../info/Info';
import { homeObjectOne, homeObjectTwo, homeObjectThree } from '../info/InfoData';
import Services from '../services/Services';
import Footer from '../shared/Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection />
      <Info {...homeObjectOne}/>
      <Info {...homeObjectTwo}/>
      <Services />
      <Info {...homeObjectThree}/>
      <Footer />
    </>
  )
}

export default Home;