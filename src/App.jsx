import  gsap from 'gsap';
import {ScrollTrigger,SplitText} from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText)
import React from 'react'
import Navbar from './components/navbar.jsx';
import Hero from './components/hero.jsx';
import Cocktails from './components/cocktails.jsx';
import About from './components/About.jsx';
import Art from './components/Art.jsx';
import Menu from './components/Menu.jsx';
import Contact  from './components/Contact.jsx';
const App = () => {
  return (
    <main >
      <Navbar/>
      <Hero/>
  <Cocktails />
      <About/>
      <Art/>
      <Menu/>
      <Contact/>
    </main>
  );
};
export default App;