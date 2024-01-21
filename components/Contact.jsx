import React from 'react'
import sectionLogo from '../public/assets/sectionLogoBlack.png';
import contactMeBtn from '../public/assets/contactMe.png';
import Image from 'next/image';


function Contact() {
  return (
    <div id='contact' className='contact'>
        <div className='contact-container'>
            <Image
            className='section-logo'
            src={sectionLogo}
            alt='Section logo'
            />
            <span>CONTACT</span>
            <Image
            className='section-logo'
            src={sectionLogo}
            alt='Section logo'
            />
        </div>
        <div className='contact-me'>
            <span>LET'S TALK.</span>
            <Image
            className='contact-me-btn'
            src={contactMeBtn}
            alt='Contact Me Button'
            />
        </div>
    </div>
  )
}

export default Contact