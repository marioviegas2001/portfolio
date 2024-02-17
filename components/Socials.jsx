import React, { useEffect } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitType from 'split-type';
import python from '../public/assets/pythonCard.png';
import C from '../public/assets/cCard.png';
import cplus from '../public/assets/cplusCard.png';
import css from '../public/assets/cssCard.png';
import figma from '../public/assets/figmaCard.png';
import github from '../public/assets/githubCard.png';
import html from '../public/assets/htmlCard.png';
import java from '../public/assets/javaCard.png';
import javascript from '../public/assets/javascriptCard.png';
import linux from '../public/assets/linuxCard.png';
import react from '../public/assets/reactCard.png';
import vs from '../public/assets/vsCard.png';



import Image from 'next/image';


function Socials() {
  useEffect(() => {
    // Check if window object is available (client-side)
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      const skills = new SplitType('.socials-container', { types: 'chars' });
      const skillsChars = skills.chars;

      var tlSkillChars = gsap.timeline({ paused: true });


      tlSkillChars.from(skillsChars, {
        opacity: 0,
        y: 50,
        stagger:0.05,
        ease: 'power3.out',
        onComplete: () => {
          tlSkillChars.kill();
        }
      });
      ScrollTrigger.create({
        trigger: '.socials-container',
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          tlSkillChars.play(); 
        },
        once: true 
      });

      const cards = document.querySelectorAll('.custom-box');

      gsap.fromTo(cards, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, scrollTrigger: {
          trigger: '.socials-container', 
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play none none none',
        }
      });
      
    }
  }, []);
  return (
    <div id='socials' className='socials'>
        <div className='socials-container'>
            <span>SKILLS</span>
        </div>

        <div className='socials-cards'>
          <div className='custom-box'>
            <Image
              className='card'
              src={python}
              alt='python skill card'
            />
            <div className='text'>Python</div>
          </div>
          <div className='custom-box'>
            <Image
              className='card'
              src={C}
              alt='C skill card'
            />
            <div className='text'>C</div>
          </div>
          <div className='custom-box'>
            <Image
              className='card'
              src={cplus}
              alt='python skill card'
            />
            <div className='text'>C++</div>
          </div>
          <div className='custom-box'>
            <Image
              className='card'
              src={css}
              alt='css skill card'
            />
            <div className='text'>CSS</div>
          </div>
          <div className='custom-box'>
            <Image
              className='card'
              src={figma}
              alt='figma skill card'
            />
            <div className='text'>Figma</div>
          </div>
          <div className='custom-box'>
            <Image
              className='card'
              src={github}
              alt='github skill card'
            />
            <div className='text'>Github</div>
          </div>
          <div className='custom-box'>
            <Image
              className='card'
              src={html}
              alt='html skill card'
            />
            <div className='text'>HTML</div>
          </div>
          <div className='custom-box'>
            <Image
              className='card'
              src={java}
              alt='java skill card'
            />
            <div className='text'>Java</div>
          </div>
          <div className='custom-box'>
            <Image
              className='card'
              src={javascript}
              alt='javascript skill card'
            />
            <div className='text'>JavaScript</div>
          </div>
          <div className='custom-box'>
            <Image
              className='card'
              src={linux}
              alt='linux skill card'
            />
            <div className='text'>Linux</div>
          </div>
          <div className='custom-box'>
            <Image
              className='card'
              src={react}
              alt='react skill card'
            />
            <div className='text'>React</div>
          </div>
          <div className='custom-box'>
            <Image
              className='card'
              src={vs}
              alt='vs skill card'
            />
            <div className='text'>VS Code</div>
          </div>
      </div>
    </div>
  )
}

export default Socials