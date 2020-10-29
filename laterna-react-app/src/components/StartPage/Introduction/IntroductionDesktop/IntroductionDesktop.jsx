import React from 'react';
import '../Introduction.scss';

const IntroductionDesktop = () => {

  return (
    <>
      <div className='Introduction--header--headerWrapper1'>
        <h2>NA POLSKIM WYBRZEŻU</h2>
        <h2>ZNAJDUJE SIĘ</h2>
        <h2 style={{ color: '#AE4527' }}>17 LATARNI MORSKICH</h2>
      </div>
      <div className='Introduction--header--headerWrapper2'>
        <h2><span style={{ color: '#AE4527' }}>15</span> Z NICH JEST CZYNNYCH </h2>
        <h2>A <span style={{ color: '#AE4527' }}>13</span> DOSTĘPNYCH DO ZWIEDZANIA</h2>
      </div>

    </>
  )
}

export default IntroductionDesktop;