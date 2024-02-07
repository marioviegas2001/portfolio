import Image from 'next/image';
import Logo from '../public/assets/Logo.png';
import LetsTalk from '../public/assets/contactButton.png';
import { useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
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
        <ScrollLink to='main' smooth>
          <Image className='logo' src={Logo} alt="Website logo" />
        </ScrollLink>
      </div>
      <div className="center">
        <ScrollLink to='about' smooth>
          <span>ABOUT</span>
        </ScrollLink>
        <ScrollLink to='work' smooth>
          <span>WORK</span>
        </ScrollLink>
        <ScrollLink to='socials' smooth>
          <span>SKILLS</span>
        </ScrollLink>
      </div>
      <div className="right">
        <ScrollLink to='contact' smooth>
          <Image className='lets-talk' src={LetsTalk} alt="Contact Button" />
        </ScrollLink>
      </div>
    </div>
  );
}

export default Navbar;
