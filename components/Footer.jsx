import React, { useEffect, useState } from 'react'
import { Icon } from "@iconify/react";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

function Footer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  function toTop() {
    scroll.scrollToTop(); // Using react-scroll's scrollToTop function
  }

  function getFormattedTime() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const gmt = -date.getTimezoneOffset() / 60;
    return `${hours}:${minutes} | GMT ${gmt >= 0 ? '+' : '-'}${Math.abs(gmt)}`;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getFormattedTime());
    }, 1000);

    return () => clearInterval(interval); // Cleanup function to clear the interval
  }, []);

  return (
    <footer className='footer'>
      <div className='footer-container1'>
        <div className='navigationdiv'>
          <span className='navigationText'>Navigation</span>
          <div className='navigation-links'>
            <ScrollLink to='main' smooth offset={-100}>
              <span>HOME</span>
            </ScrollLink>
            <ScrollLink to='about' smooth offset={100}>
              <span>ABOUT</span>
            </ScrollLink>
            <ScrollLink to='work' smooth offset={500}>
              <span>WORK</span>
            </ScrollLink>
            <ScrollLink to='socials' smooth offset={100}>
              <span>SKILLS</span>
            </ScrollLink>
          </div>
        </div>
        <div className='socialsdiv'>
          <span className='socialsText'>Socials</span>
          <div className='socials-links'>
            <a href='https://github.com/marioviegas2001' target='_blank' rel='noopener noreferrer'>
              <Icon className='icon' icon="mdi:github" color="#FFF" />
            </a>
            <a href='https://linkedin.com/in/marioviegasdev' target='_blank' rel='noopener noreferrer'>
              <Icon className='icon' icon="mdi:linkedin" color="#FFF" />
            </a>
            <a href='https://www.instagram.com/marioviegas984/' target='_blank' rel='noopener noreferrer'>
              <Icon className='icon' icon="mdi:instagram" color="#FFF" />
            </a>
          </div>
        </div>
      </div>
      <div className='footer-container2'>
        <div className='copyright'>
          <span>&copy; 2024 <br /> Mario Viegas</span>
        </div>
        <div className='time'>
          <span className='local'>Local Time</span>
          <span className='time-counter' suppressHydrationWarning>{time}</span>
        </div>
        <div className='go-top'>
          <button className='button-go-top' onClick={toTop}>
            <Icon className='icon' icon="mingcute:arrow-up-fill" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer;