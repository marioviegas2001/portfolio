import Image from 'next/image';
import React from 'react';
import sectionLogo from '../public/assets/sectionLogo.png';
import aboutPhoto from '../public/assets/aboutPhoto.jpg';


function About() {
  return (
    <div id='about' className='about'>
      <div className='section1-container'>
        <Image
          className='section-logo'
          src={sectionLogo}
          alt='Section logo'
        />
        <span>ABOUT ME</span>
        <Image
          className='section-logo'
          src={sectionLogo}
          alt='Section logo'
        />
      </div>
      <div className='photo-container'>
        <Image
            className='photo'
            src={aboutPhoto}
            alt='About me photo'
        />
        <div className='who-am-i'>
            <span>A quick intro, Who Am I?</span>
            <p>I'm Mário Viegas, I'm natural from São Miguel, a Portuguese Island in Azores and I'm currently 22 years old. I recently 
                completed my bachelors in Computer Science and Engineering and I'm now finishing my Master's degree in the same field. 
                With a strong interest in computers and creation, I began my journey 
                at the age of 18, and I have been on this fun and challenging experience for the past five years.
            </p>
            <p>When I'm not developing, I enjoy travelling and meeting new cultures, hang around with friends and family
                 and I also enjoy distracting myself by playing videogames or hitting the gym.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
