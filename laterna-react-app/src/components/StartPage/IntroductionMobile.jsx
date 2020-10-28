import React from 'react';
import './Introduction.scss';
import Carousel from './CarouselImg';

const IntroductionMobile = () => {

  return (
    <>
      <header className='Introduction--header'>
        <div className='Introduction--header--headerWrapper'>
          <h2>NA POLSKIM WYBRZEŻU ZNAJDUJE SIĘ</h2>
          <h2 style={{ color: '#AE4527' }}>17 LATARNI MORSKICH</h2>
        </div>
        <div className='Introduction--header--headerWrapper'>
          <h2>15 Z NICH JEST CZYNNYCH </h2>
          <h2>A 13 DOSTĘPNYCH DO ZWIEDZANIA</h2>
        </div>
      </header>
      <div className="Introduction--carousel" style={{ height: 233 }}>
        <Carousel />
      </div>
    </>
  )
}

export default IntroductionMobile;