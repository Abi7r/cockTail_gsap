import  gsap from 'gsap';
import {ScrollTrigger,SplitText} from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText)
import React from 'react'
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
const App = () => {
  return (
    <main >
      <Navbar/>
      <Hero/>

    </main>
  );
};
export default App;