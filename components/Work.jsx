import React from 'react';
import Image from 'next/image';
import sectionLogo from '../public/assets/sectionLogo.png';
import placeholder from '../public/assets/placeholder.png';

function WorkEntry({ name, imageSrc, reverse }) {
  return (
    <div className={`work-pic-container ${reverse ? 'reverse' : ''}`}>
      <Image className='work-pic' src={imageSrc} alt={`Work ${name} image`} />
      <div className='work-name'>
        <span>{name}</span>
      </div>
    </div>
  );
}

function Work() {
  return (
    <div className='work'>
      <div className='work-container'>
        <Image className='section-logo' src={sectionLogo} alt='Section logo' />
        <span>WORK</span>
        <Image className='section-logo' src={sectionLogo} alt='Section logo' />
      </div>
      <WorkEntry name="WORK 1" imageSrc={placeholder} reverse={false} />
      <WorkEntry name="WORK 2" imageSrc={placeholder} reverse={true} />
      {/* Add more WorkEntry components for additional works */}
    </div>
  );
}

export default Work;