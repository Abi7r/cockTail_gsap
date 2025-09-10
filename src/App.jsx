import  gsap from 'gsap';
import {ScrollTrigger,SplitText} from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText)
import React from 'react'
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import Cocktails from './components/cocktails.jsx';
const App = () => {
  return (
    <main >
      <Navbar/>
      <Hero/>
  <Cocktails />
    </main>
  );
};
export default App;