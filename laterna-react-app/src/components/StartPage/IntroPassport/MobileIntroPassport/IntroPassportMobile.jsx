import React from 'react';
import '../IntroPassport.scss';
import { NavLink } from 'react-router-dom';
import passportImg from '../../images/passport/paszport do www-1.svg';
import getInfoButton from '../../images/passport/dowiedz.svg';
import waveImg from '../../images/passport/falka.png';
import arrowImg from '../../images/passport/strzalka.png';

const IntroPassportMobile = () => {

  return (
    <>
      <div className="IntroPassport--header">
        <h2>POZNAWAJ LATARNIE</h2>
        <h2>I ZBIERAJ PIECZĄTKI</h2>
        <h2>W <span style={{ color: '#AE4527' }}>PASZPORCIE MIŁOŚNIKA</span></h2>
        <h2 style={{ color: '#AE4527' }}>LATARNI MORSKICH</h2>
      </div>
      <div className="IntroPassport--passportGetDetails">
        <img src={passportImg} alt="Paszport miłośnika latarni morskich." />
        <button id="passportDetails">
          <NavLink to='/paszport'>
            <img src={getInfoButton} alt="Przycisk dowiedz się więcej" />
          </NavLink>
        </button>
      </div>
      <img className="IntroPassport--arrow" src={arrowImg} alt="Pofalowana strzałka" />
      <img className="IntroPassport--wave" src={waveImg} alt="fala w tle" />
    </>
  )
}

export default IntroPassportMobile;