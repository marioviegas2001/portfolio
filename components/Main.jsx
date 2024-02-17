import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import WebsiteHero from '../public/assets/WebsiteHero.png';
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitType from 'split-type'


function Main() {
  const heroImageRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);


  useEffect(() => {
    // GSAP Animation
    const ourText = new SplitType('.hero1', { types: 'chars' })
    const chars = ourText.chars
    const ourText2 = new SplitType('.hero2', { types: 'chars' })
    const chars2 = ourText2.chars
    const ourText3 = new SplitType('.hero3', { types: 'chars' })
    const chars3 = ourText3.chars
    const heroImage = heroImageRef.current;
    const heroTexts = document.querySelectorAll('.hero1, .hero2, .hero3');

    var tl = gsap.timeline();
    tl.fromTo(chars,{ y: 100, opacity: 0}, { delay: 0.5, y: 0, opacity: 1, stagger: 0.05, duration: 2, ease: 'power4.out',})
    .fromTo(chars2,{ y: 100, opacity: 0}, { y: 0, opacity: 1, stagger: 0.05, duration: 2, ease: 'power4.out',}, "<")
    .fromTo(chars3,{ y: 100, opacity: 0}, { y: 0, opacity: 1, stagger: 0.05, duration: 2, ease: 'power4.out',}, "<")
    .fromTo('.hero-image',{ y: 100, opacity: 0}, { y: 0, opacity: 1, duration: 1, ease: 'power4.out',}, "-=1.5")
    .to('.hero-image-img', {
      scrollTrigger: {
        trigger: '.trigger-animation',
        start: '-200px center',
        end: '200px center',
        scrub: true,
        markers: false,
      },
      opacity: 0,
      y: -100
    }).to(heroTexts, {
      scrollTrigger: {
        trigger: '.trigger-animation',
        start: '-200px center',
        end: '200px center',
        scrub: true,
        markers: false
      },
      opacity: 0,
    }, '<');

    ScrollTrigger.refresh();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: mouseX, clientY: mouseY } = e;
      const { current: heroImage } = heroImageRef;

      if (heroImage) {
        const { left, top, width, height } = heroImage.getBoundingClientRect();
        const offsetX = mouseX - left;
        const offsetY = mouseY - top;

        const moveX = (offsetX / width - 0.5) * 30; // Adjust sensitivity by changing the multiplier
        const moveY = (offsetY / height - 0.5) * 30;

        heroImage.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };

    const handleMouseLeave = () => {
      const { current: heroImage } = heroImageRef;

      if (heroImage) {
        heroImage.style.transform = 'translate(0, 0)';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [heroImageRef]);

  return (
    <div id='main' className='hero-container'>
      <div className="hero1"><p>It's me, Mario</p></div>
      <div className="hero2"><p>It's me, Mario</p></div>
      <div className="hero3"><p>It's me, Mario</p></div>
      <div className="hero-image" ref={heroImageRef}>
        <Image
          className="hero-image-img" //classname added for opacity animation (cant animate at parent level)
          src={WebsiteHero}
          alt="Website Hero Pic"
          style={{
            width: '50%',
            height: 'auto',
          }}
        />
      </div>
      <div className='trigger-animation'></div>
    </div>
  );
}

export default Main;
