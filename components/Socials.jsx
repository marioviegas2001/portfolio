import React from 'react'
import sectionLogo from '../public/assets/sectionLogo.png';
import insta from '../public/assets/instaSocials.png';
import fb from '../public/assets/fbSocials.png';
import tt from '../public/assets/ttSocials.png';

import Image from 'next/image';


function Socials() {
  return (
    <div id='socials' className='socials'>
        <div className='socials-container'>
            <Image
            className='section-logo'
            src={sectionLogo}
            alt='Section logo'
            />
            <span>SOCIALS</span>
            <Image
            className='section-logo'
            src={sectionLogo}
            alt='Section logo'
            />
        </div>

        <div className='socials-cards'>
        <Image
            className='fb'
            src={fb}
            alt='fb social card'
        />
        <Image
            className='insta'
            src={insta}
            alt='ig social card'
        />
        <Image
            className='tt'
            src={tt}
            alt='tt social card'
        />
      </div>
    </div>
  )
}

export default Socials