import React, { useEffect } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitType from 'split-type';
import Image from 'next/image';
import santander from '../public/assets/santander.png';
import converter from '../public/assets/converter.png';
import Link from 'next/link';


function WorkEntry({ name, description ,imageSrc, reverse, link }) {
  return (
    <div className={`work-pic-container ${reverse ? 'reverse' : ''}`}>
      <Link href={link}>
        <Image className='work-pic' src={imageSrc} alt={`Work ${name} image`} />
      </Link>
      <div className='work-description-container'>
        <div className='work-name'>
          <span>{name}</span>
        </div>
        <div className='description'>
          <span>{description}</span>
        </div>
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

      var tlWorkChars = gsap.timeline({ paused: true });
      var tlWorkPic = gsap.timeline({ paused: true });


      tlWorkChars.from(workChars, {
        opacity: 0,
        y: 50,
        stagger:0.05,
        ease: 'power3.out',
        onComplete: () => {
          tlWorkChars.kill();
        }
      });
      ScrollTrigger.create({
        trigger: '.work-container',
        start: 'top center',
        end: 'center center',
        onEnter: () => {
          tlWorkChars.play(); 
        },
        once: true 
      });
      
      tlWorkPic.to(".work-pic-container", {
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        onComplete: () => {
          tlWorkPic.kill();
        }
      });
      ScrollTrigger.create({
        trigger: '.work-pic-container',
        start: 'top center',
        end: 'center center',
        onEnter: () => {
          tlWorkPic.play(); 
        },
        once: true 
      });
    }
  }, []);
  return (
    <div id='work' className='work'>
      <div className='work-container'>
        <span>WORK</span>
      </div>
      <WorkEntry name="Santander features integration" description="Implementation of three features in the Santander app developed by the InsightX team aimed at assisting individuals approaching retirement." imageSrc={santander} reverse={false} link="https://www.figma.com/proto/CoLMgpsfo37p4i9Vlhl5T3/CCU?page-id=0%3A1&node-id=127-449&starting-point-node-id=127%3A449&mode=design&t=FQHQIxvgMtOZkp4x-1" />
      <WorkEntry name="Cryptocurrencie Converter" description="A cryptocurrency converter able to do conversions between Fiat and Crypto in real-time." imageSrc={converter} reverse={true} link="https://github.com/marioviegas2001/CryptoConverter"/>
      {/* Add more WorkEntry components for additional works */}
    </div>
  );
}

export default Work;