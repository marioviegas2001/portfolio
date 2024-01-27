import Image from 'next/image';
import Logo from '../public/assets/Logo.png';
import LetsTalk from '../public/assets/contactButton.png';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import Lenis from '@studio-freight/lenis'


function Navbar() {


  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, []);

  useEffect(() => {
    // GSAP Animation
    var tl = gsap.timeline();
    tl.fromTo('.logo', {opacity: 0}, {duration: 4, opacity: 1})
    .fromTo('.center span', {opacity: 0}, {duration: 4, opacity: 1}, "<")
    .fromTo('.lets-talk', {opacity: 0}, {duration: 4, opacity: 1}, "<")

    return () => {
      tl.kill(); // Cancel all animations
    };
  }, []);


  return (
    <div className='navbar'>
      <div className="left">
        <Link href='/'>
          <Image className='logo' src={Logo} alt="Website logo" />
        </Link>
        
      </div>
      <div className="center">
          <Link href='/#about'>
            <span >ABOUT</span>
          </Link>
          <Link href='/#work'>
            <span >WORK</span>
          </Link>
          <Link href='/#socials'>
            <span >SOCIALS</span>
          </Link>
      </div>
      <div className="right">
        <Link href='/#contact'>
          <Image className='lets-talk' src={LetsTalk} alt="Contact Button" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
