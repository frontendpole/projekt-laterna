import React from 'react';
import '../IntroPassport.scss';
import { NavLink } from 'react-router-dom';
import getInfoButton from '../../images/passport/dowiedz (2).svg';
import waveImg from '../../images/passport/Path 1874@2x.png';
import arrowImg from '../../images/passport/Group 257.png';
import PassportImg4Desktop from '../../images/passport/Group 3333.svg';
import PassportImg5Desktop from '../../images/passport/Group 474.svg';

const IntroPassportDesktop = () => {

  return (
    <div className="IntroPassport--wrapper">
      <img className="IntroPassport--wave" src={waveImg} alt="fala w tle" />

      <div className="IntroPassport--2pics">
        <img src={PassportImg4Desktop} alt="okładka górna paszportu miłośnika latarni morskich" />
        <img src={PassportImg5Desktop} alt="wnętrze paszportu miłośnika latarni morskich, latarnia Gdańsk Nowy Port" />
      </div>

      <div className="IntroPassport--passportGetDetails">
        <img className="IntroPassport--arrow" src={arrowImg} alt="Pofalowana strzałka" />
        <div className="IntroPassport--header">
          <h2>POZNAWAJ LATARNIE</h2>
          <h2>I ZBIERAJ PIECZĄTKI</h2>
          <h2>W <span style={{ color: '#AE4527' }}>PASZPORCIE MIŁOŚNIKA</span></h2>
          <h2 style={{ color: '#AE4527' }}>LATARNI MORSKICH</h2>
        </div>
        <button id="passportDetails">
          <NavLink to='/paszport'>
            <img src={getInfoButton} alt="Przycisk dowiedz się więcej" />
          </NavLink>
        </button>
      </div>
    </div>
  )
}

export default IntroPassportDesktop;