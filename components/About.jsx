import Image from 'next/image';
import React, { useEffect } from 'react';
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitType from 'split-type';
import aboutPhoto from '../public/assets/aboutPhoto.png';


function About() {
  useEffect(() => {
    // Check if window object is available (client-side)
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      const aboutme = new SplitType('.section1-container', { types: 'chars' });
      const aboutmeChars = aboutme.chars;
      const text = new SplitType('.who-am-i', { types: 'words' });
      const textWords = text.words;

      var tl = gsap.timeline();

  
      tl.from(aboutmeChars, {
        scrollTrigger: {
          trigger: '.section1-container',
          start: 'top center',
          end: 'bottom center',
          scrub: true,
          markers: false
        },
        opacity: 0,
        y: 50
      }).from(textWords, {
        scrollTrigger: {
          trigger: '.who-am-i',
          start: 'top center',
          end: 'center center',
          scrub: true,
          markers: false
        },
        opacity: 0,
      }).to('.photo', {
        scrollTrigger: {
          trigger: '.photo',
          start: 'top center',
          end: 'center bottom',
          scrub: true,
          markers: false //to method used instead of a from because some conflict with css would't make from method work
        },
        opacity: 1,
      });
    }
  }, []);

  return (
    <div id='about' className='about'>
      <div className='section1-container'>
        ABOUT ME
      </div>
      <div className='photo-container' >
        <Image
            className='photo'
            src={aboutPhoto}
            alt='About me photo'
        />
        <div className='who-am-i'>
            <span>A quick intro, Who Am I?</span>
            <p>I'm Mário Viegas, I'm natural from São Miguel, a Portuguese Island in Azores and I'm currently 22 years old. I recently 
                completed my bachelors in Computer Science and Engineering and I'm now finishing my Master's degree in the same field. 
                With a strong interest in computers and creation, I began my journey 
                at the age of 18, and I have been on this fun and challenging experience for the past five years.
            </p>
            <p>When I'm not developing, I enjoy travelling and meeting new cultures, hang around with friends and family
                 and I also enjoy distracting myself by playing videogames or hitting the gym.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
