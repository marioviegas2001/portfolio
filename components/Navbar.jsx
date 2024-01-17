import Image from 'next/image';
import React from 'react';
import Logo from '../public/assets/Logo.png'
import LetsTalk from '../public/assets/contactButton.png'


function Navbar() {
    return (
      <div className="navbar">
        <div className="left">
          <Image className='logo'
              src={Logo} 
              alt="Website logo"
          /> 
        </div>
        <div className="center">
          <span>About</span>
          <span>Work</span>
          <span>Socials</span>
        </div>
        <div className="right">
          <Image className='lets-talk'
              src={LetsTalk} 
              alt="Contact Button" 
          /> 
        </div>
      </div>
    );
  }

export default Navbar;
