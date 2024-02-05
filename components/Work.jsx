import React, { useEffect } from 'react';
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitType from 'split-type';
import Image from 'next/image';
import placeholder from '../public/assets/placeholder.png';

function WorkEntry({ name, imageSrc, reverse }) {
  return (
    <div className={`work-pic-container ${reverse ? 'reverse' : ''}`}>
      <Image className='work-pic' src={imageSrc} alt={`Work ${name} image`} />
      <div className='work-name'>
        <span>{name}</span>
      </div>
    </div>
  );
}

function Work() {
  useEffect(() => {
    // Check if window object is available (client-side)
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      const work = new SplitType('.work-container span', { types: 'chars' });
      const workChars = work.chars;

      var tl = gsap.timeline();

  
      tl.from(workChars, {
        scrollTrigger: {
          trigger: '.work-container',
          start: 'top center',
          end: 'bottom center',
          scrub: true,
          markers: false
        },
        opacity: 0,
        y: 50
      }).to(".work-pic-container", {
        scrollTrigger: {
          trigger: '.work-pic-container',
          start: 'top center',
          end: 'center center',
          scrub: true,
          markers: false
        },
        opacity: 1,
      });
    }
  }, []);
  return (
    <div id='work' className='work'>
      <div className='work-container'>
        <span>WORK</span>
      </div>
      <WorkEntry name="WORK 1" imageSrc={placeholder} reverse={false} />
      <WorkEntry name="WORK 2" imageSrc={placeholder} reverse={true} />
      {/* Add more WorkEntry components for additional works */}
    </div>
  );
}

export default Work;