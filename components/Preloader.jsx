import React, { useEffect } from 'react';
import logo from '../public/assets/LogoPreloader.png';
import Image from 'next/image';

function Preloader() {
  return (
    <div className='preloader-page'>
      <div className='preloader-main-container'>
        <div className='preloader-title-container'>
          <h2 className='preloader-title'> Mário Viegas </h2>
        </div>
        <div className='preloader-logo-container'>
          <Image className='preloader-logo' src={logo} alt="Preloader logo" />
        </div>
        <div className='preloader-hero-container'>
          <span className='preloader-phrase'>Welcome to my portfolio.</span>
          <span className='year'>2024</span>
        </div>
        <div className='preloader-footer-container'>
          <span className='preloader-footer'>&copy; 2024 Copyright - Mario Viegas</span>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
