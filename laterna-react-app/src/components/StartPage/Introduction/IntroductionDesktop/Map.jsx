import React from 'react';
import mapImg from '../../images/map/Group 190@2x.png';
import dotsImg from '../../images/map/Group 247@2x.png';
import './Map.scss';
import LanternMapImg from './LanternMapImg';
// import IntroductionDesktop from '../../Introduction/IntroductionDesktop/IntroductionDesktop';

const Map = () => {

  return (
    <div className="Map">
      <img id='map' src={mapImg} alt="Mapa wybrzeża Polski" />
      <img id="dots" src={dotsImg} alt="Punkty miejscowości na mapie." />
      <LanternMapImg />
    </div>
  )
}

export default Map;