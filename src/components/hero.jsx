import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
  const videoRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const heroSplit = new SplitText('.title', { type: 'chars,words' });
    const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });
    heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

    // Text animations
    gsap.from(heroSplit.chars, { yPercent: 100, duration: 1.8, ease: 'expo.out', stagger: 0.06 });
    gsap.from(paragraphSplit.lines, { opacity: 0, yPercent: 100, delay: 0.7, stagger: 0.07, ease: 'expo.out' });

    // Leaf animations
    gsap.timeline({
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    }).to('.right-leaf', { y: 200 }, 0)
      .to('.left-leaf', { y: -200 }, 0);

    const startValue = isMobile ? 'top 50%' : 'center 60%';
    const endValue = isMobile ? '120% top' : 'bottom top';

    // Video scroll animation
    // const video = videoRef.current;
    // if (video) {
    //   // Set initial video state
    //   video.currentTime = 0;
    //   video.pause();

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: 'video',
          start: startValue,
          end: endValue,
          scrub: true,
          pin: true, // stick the vid
        }
      });

      videoRef.current.onloadedmetadata = () => {
        tl.to(videoRef.current, { currentTime: videoRef.current.duration });
      };

  }); // Close useGSAP hook

  return (
    <>
      <section id='hero' className="noisy">
        <h1 className='title'>Mojito</h1>
        <img src="/images/hero-left-leaf.png" alt="leftLeaf" className='left-leaf' />
        <img src="/images/hero-right-leaf.png" alt="righttLeaf" className='right-leaf' />
        <div className='body'>
          <div className='content'>
            <div className='space-y-5 hidden md:block'>
              <p>Cool. Crisp. Classic</p>
              <p className='subtitle'>
                Sip the Spirit <br/>of Summer
              </p>
            </div>
            <div className='view-cocktails'>
              <div className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses.
              </div>
              <a href="#cocktails">View cocktails</a>
            </div>
          </div>
        </div>
      </section>

      <div className="video absolute inset-0">
        <video
          src="/videos/output.mp4"
          muted
          playsInline
          preload='auto'
          ref={videoRef}
        />
      </div>
    </>
  );
};

export default Hero;