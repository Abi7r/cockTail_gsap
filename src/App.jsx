import  gsap from 'gsap';
import {ScrollTrigger,SplitText} from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText)
import React from 'react'
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import Cocktails from './components/cocktails.jsx';
import About from './components/About.jsx';
const App = () => {
  return (
    <main >
      <Navbar/>
      <Hero/>
  <Cocktails />
      <About/>
    </main>
  );
};
export default App;