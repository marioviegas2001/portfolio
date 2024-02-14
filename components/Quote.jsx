import React, { useEffect, useRef } from 'react';
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitType from 'split-type';

function Quote() {
  useEffect(() => {
    // Check if window object is available (client-side)
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      const inspoText = new SplitType('.inspo', { types: 'words' });
      const words = inspoText.words;
      const quoteText = new SplitType('.quote', { types: 'chars' });
      const charsQuote = quoteText.chars;

      var tl = gsap.timeline();

      tl.from(words, {
        scrollTrigger: {
          trigger: '.inspo',
          start: 'top center',
          end: 'bottom center',
          scrub: true,
          markers: false
        },
        opacity: 0.2,
        stagger: 0.1
      });
       // Create a new timeline for the charsQuote animation
    var tlChars = gsap.timeline({ paused: true }); // Set paused to true to prevent auto-play

    tlChars.from(charsQuote, {
      opacity: 0,
      stagger: 0.02,
      onComplete: () => {
        // Callback to ensure it only plays once
        tlChars.kill(); // Kill the timeline after completion
      }
    });

    // Add a scroll trigger to play the tlChars animation when the quote section is in view
    ScrollTrigger.create({
      trigger: '.quote',
      start: '-300px center',
      end: 'bottom center',
      onEnter: () => {
        tlChars.play(); // Play the tlChars animation when the quote section is in view
      },
      once: true // Ensure it only triggers once
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
