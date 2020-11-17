import React from 'react';
import '../IntroPassport.scss';
import { NavLink } from 'react-router-dom';
import getInfoButton from '../../../../assets/images/export main page/dowiedz (2).png';
import waveImg from '../../../../assets/images/export main page/Path 1874@2x.png';
import arrowImg from '../../../../assets/images/export main page/Group 257.png';
import PassportImg4Desktop from '../../../../assets/images/desktop/Group 256.png';
import PassportImg5Desktop from '../../../../assets/images/Zrzut ekranu 2020-06-13 o 19.42.47.png';

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