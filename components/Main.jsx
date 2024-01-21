import Image from 'next/image'
import React from 'react'
import WebsiteHero from '../public/assets/WebsiteHero.png'

function Main() {
  return (
    <div id='main' className='hero-container'>
        <div className="hero1">
            It's me, Mario
        </div>
        <div className="hero2">
            It's me, Mario
        </div>
        <div className="hero3">
            It's me, Mario
        </div>
        <Image className='hero-image'
            src={WebsiteHero} 
            alt="Website Hero Pic"  
            style={{
              width: '50%',
              height: 'auto',
            }}
        /> 
    </div>
  )
}

export default Main