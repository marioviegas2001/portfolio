import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import WebsiteHero from '../public/assets/WebsiteHero.png';

function Main() {
  const heroImageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: mouseX, clientY: mouseY } = e;
      const { current: heroImage } = heroImageRef;

      if (heroImage) {
        const { left, top, width, height } = heroImage.getBoundingClientRect();
        const offsetX = mouseX - left;
        const offsetY = mouseY - top;

        const moveX = (offsetX / width - 0.5) * 30; // Adjust sensitivity by changing the multiplier
        const moveY = (offsetY / height - 0.5) * 30;

        heroImage.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };

    const handleMouseLeave = () => {
      const { current: heroImage } = heroImageRef;

      if (heroImage) {
        heroImage.style.transform = 'translate(0, 0)';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [heroImageRef]);

  return (
    <div id='main' className='hero-container'>
      <div className="hero1">It's me, Mario</div>
      <div className="hero2">It's me, Mario</div>
      <div className="hero3">It's me, Mario</div>
      <div className="hero-image" ref={heroImageRef}>
        <Image
          src={WebsiteHero}
          alt="Website Hero Pic"
          style={{
            width: '50%',
            height: 'auto',
          }}
        />
      </div>
    </div>
  );
}

export default Main;
