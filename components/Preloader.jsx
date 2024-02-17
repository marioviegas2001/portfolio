import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import logo from '../public/assets/LogoPreloader.png';
import Image from 'next/image';

function Preloader() {
  useEffect(() => {
    // Create a GSAP timeline
    const tl = gsap.timeline();

    // Select the text elements
    const textElements = document.querySelectorAll('.preloader-title, .preloader-phrase, .year, .preloader-footer, .preloader-logo');

    // Add fading in animation for text elements to the timeline
    tl.to(textElements, { opacity: 1, duration: 2, stagger: 0.3 })
      .to('.black-screen', {
        width: "100%",
        duration: 2,
        ease: "power2.inOut",
        onComplete: () => {
          document.body.style.backgroundColor = '#0e0e0c';
        }
      });
  }, []);

  return (
    <div className='preloader-page'>
      <div className='preloader-main-container'>
        <div className='preloader-title-container'>
          <h2 className='preloader-title'> Mário Viegas </h2>
        </div>
        <div className='preloader-logo-container'>
          <Image className='preloader-logo' src={logo} alt="Preloader logo" />
        </div>
        <div className='preloader-hero-container'>
          <span className='preloader-phrase'>Welcome to my portfolio.</span>
          <span className='year'>2024</span>
        </div>
        <div className='preloader-footer-container'>
          <span className='preloader-footer'>&copy; 2024 Copyright - Mario Viegas</span>
        </div>
      </div>
      <div className='black-screen'></div>
    </div>
  );
}

export default Preloader;
