import React, { useEffect } from 'react'
import Footer from './Footer'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from 'next/link';

function Contact() {
  useEffect(() => {
    // Check if window object is available (client-side)
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.contact',
          start: 'top center',
          end: 'bottom center',
          scrub: true, // Enable scrubbing
          markers: false,
        }
      });
  
      tl.to('.navbar', {
        opacity: 0,
      }).to('.navbar', {
        opacity: 1,
      });
    }
  }, []);

  return (
    <div id='contact' className='contact'>
        <div className='contact-me'>
            <Link href="/ContactForm">
              <span>GET IN TOUCH.</span>
            </Link>
        </div>
      <Footer/>
    </div>
  )
}

export default Contact