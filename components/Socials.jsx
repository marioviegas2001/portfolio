import React from 'react'
import python from '../public/assets/pythonCard.png';

import Image from 'next/image';


function Socials() {
  return (
    <div id='socials' className='socials'>
        <div className='socials-container'>
            <span>SKILLS</span>
        </div>

        <div className='socials-cards'>
          <div className='custom-box'>
            <Image
              className='python'
              src={python}
              alt='python skill card'
            />
            <div className='python-text'>Python</div>
          </div>
      </div>
    </div>
  )
}

export default Socials