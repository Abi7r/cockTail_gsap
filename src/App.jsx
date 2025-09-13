import  gsap from 'gsap';
import {ScrollTrigger,SplitText} from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText)
import React from 'react'
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import Cocktails from './components/cocktails.jsx';
import About from './components/About.jsx';
import Art from '../Art.jsx';
import Menu from '../Menu.jsx';
const App = () => {
  return (
    <main >
      <Navbar/>
      <Hero/>
  <Cocktails />
      <About/>
      <Art/>
      <Menu/>
    </main>
  );
};
export default App;