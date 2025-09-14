import React from 'react';
import {openingHours ,socials } from '../../constants/index.js'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';


const Contact = () => {
  useGSAP(()=>{
    const textSplit=SplitText.create('#contact',{type:'words'});
   const timeline= gsap.timeline({scrollTrigger:{trigger:"#contact",
        start:'top center',}, ease:'power1.inOut',});
   timeline.from(textSplit.words,{opacity:0,yPercent:100,stagger:0.02})
     .from('#contact h3,#contact p',{opacity:0,yPercent:100,stagger:0.02},'-=0.5')

     .to('#f-right-leaf',{
       y:-50,duration:1,ease:'power1.inOut',stagger:0.2
     },'-=0.5').to('#f-left-leaf',{
     y:+50,duration:1,ease:'power1.inOut',stagger:0.2
   },'<')

  })
  return (
    <footer id='contact'>
      <img src="/images/footer-right-leaf.png" alt="leaf-right" id='f-right-leaf'  />
      <img src="/images/footer-left-leaf.png" alt="leaf-left"  id='f-left-leaf' />
      <div className="content">
        <h2>Where to find us</h2>
        <div>
          <h3>Visit our bar</h3>
          <p>https://maps.app.goo.gl/LBzAogC3cpu9Nejq7</p>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>+917428730894</p>
          <p>hello@akCocktail.com</p>
        </div>
        <div>
          <h3>Open every day</h3>
          {openingHours.map((time) => (<p key={time.day}>{time.day}:{time.time}</p>))}
        </div>
        <div >
          <h3>Socials</h3>
          <div className="flex-center gap-5">
          {socials.map(social => (
            <a href={social.url}  key={social.name} target='_blank' rel='noopener noreferrer' aria-label={social.name}><img src={social.icon} alt="" /></a>
          ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Contact;
