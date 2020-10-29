import React from 'react';
import mapImg from '../../../../assets/images/map/export/Group 190@2x.png';
import dotsImg from '../../../../assets/images/map/export/Group 247@2x.png';
import './Map.scss';
import LanternMapImg from './LanternMapImg';
import IntroductionDesktop from '../../Introduction/IntroductionDesktop/IntroductionDesktop';

const Map = () => {

  return (
    <div className="Map">
      <img id='map' src={mapImg} alt="Mapa wybrzeża Polski" />
      <img id="dots" src={dotsImg} />
      <LanternMapImg />
      <IntroductionDesktop />
    </div>
  )
}

export default Map;