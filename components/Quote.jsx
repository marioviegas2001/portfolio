import React, { useEffect, useRef } from 'react';
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitType from 'split-type';

function Quote() {
  useEffect(() => {
    // Check if window object is available (client-side)
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      const ourText = new SplitType('.inspo', { types: 'chars' });
      const chars = ourText.chars;

      gsap.from(chars, {
        scrollTrigger: {
          trigger: '.inspo',
          start: 'top center',
          end: 'bottom center',
          scrub: true,
          markers: true
        },
        opacity: 0.2,
        stagger: 0.1
      });
    }
  }, []);

  return (
    <div className="quote-container"> 
        <div className='inspo'>
            I'm a creator of  digital experiences,  one line of code at a time I'm dedicated to bringing ideas to life. 
        </div>
        <div className='quote'>
            ❝The best way to predict the future is to invent it.❞ - Alan Kay
        </div>  
    </div>
  );
}

export default Quote;
