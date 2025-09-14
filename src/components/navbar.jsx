import React from 'react';
import { navLinks } from '../../constants/index.js';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {
  useGSAP(()=>{
    const navTween=gsap.timeline({ScrollTrigger:{trigger:'nav',start:'bottom top'}});
    navTween.fromTo('nav',{backgroundColor:'transparent'},{
      backgroundColor:'rgba(0, 0, 0, 0.5)',
        backdropFilter:'blur(10px)',
      duration:1,
      ease:'power1.inOut',
    });
  })
  return (
    <nav>
    <div>
      <a href="nav" className="flex items-center gap-2">
        <img src="/images/logo4.png" alt="logo" />
        <p>Liquid Lore</p>
      </a>
      <ul>{navLinks.map(links=>(<li key={links.id}>
        <a href={`#${links.id}`}>{links.title}</a>
      </li>))}</ul>
    </div>
    </nav>
  );
};
export default Navbar;
