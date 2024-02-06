import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function Footer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  function toTop() {
    window.scrollTo(0, 0)
  }

  function getFormattedTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const gmt = -date.getTimezoneOffset() / 60;
    return `${hours}:${minutes} | GMT ${gmt >= 0 ? '+' : '-'}${Math.abs(gmt)}`;
  }

  useEffect(() => {
    setInterval(() => {
      setTime(getFormattedTime());
    }, 1000);
  });

  return (
    <footer className='footer'>
        <div className='footer-container1'>
            <div className='navigationdiv'>
                <span className='navigationText'>Navigation</span>
                <div className='navigation-links'>
                    <Link href='/' >
                        <span >HOME</span>
                    </Link>
                    <Link href='/#about' onclick="lenis.scrollTo('#about')">
                        <span >ABOUT</span>
                    </Link>
                    <Link href='/#work'>
                        <span >WORK</span>
                    </Link>
                    <Link href='/#socials'>
                        <span >SKILLS</span>
                    </Link>
                </div>
            </div>
            <div className='socialsdiv'>
                <span className='socialsText'>Socials</span>
                <div className='socials-links'>
                    <Link href='/'>
                        <span >HOME</span>
                    </Link>
                    <Link href='/#about'>
                        <span >ABOUT</span>
                    </Link>
                    <Link href='/#work'>
                        <span >WORK</span>
                    </Link>
                </div>
            </div>
        </div>
        <div className='footer-container2'>
            <div className='copyright'>
                <span>&copy; 2024 <br /> Mario Viegas</span>
            </div>
            <div className='time'>
                <span className='local'>Local Time</span>
                <span className='time-counter'>{time}</span>
            </div>
            <div className='go-top'>
                <button onClick={toTop}>TOP</button>
            </div>
        </div>
    </footer>
  )
}

export default Footer