import React from 'react';
import { NavLink } from 'react-router-dom';
import '../IntroGadgets.scss';
import postCardImg from '../../images/gadgets/Group 84.png';
import lanternCardImg from '../../images/gadgets/Group 89.png';
import blueCardImg from '../../images/gadgets/Group 275.png';
import goToStoreImg from '../../images/gadgets/Group 421.png';

const IntroGadgetsDesktop = () => {
  return (
    <div className="IntroGadgets--wrapper">
      <div className="IntroGadgets--gadgetsGetDetails">
        <header className='IntroGadgets--header'>
          <h2>W NASZYM SKLEPIE ZNAJDZIESZ</h2>
          <h2>POCZTÓWKI, PLAKATY, GRY <br /> I INNE <span style={{ color: '#AE4527' }}>SKARBY</span> <br /> Z LATARNIAMI MORSKIMI</h2>
        </header>
        <button id="goToStore">
          <NavLink to='/sklep'>
            <img src={goToStoreImg} alt="Przycisk przejdź do sklepu" />
          </NavLink>
        </button>
      </div>
      <div className="IntroGadgets--3pics">
        <div className="IntroGadgets--3pics--wrapper">
          <img src={blueCardImg} alt="Pocztówki z latarniami morskimi" />
          <img src={postCardImg} alt="Pocztówki z latarniami morskimi" />
          <img src={lanternCardImg} alt="Pocztówki z latarniami morskimi" />
        </div>
      </div>
    </div>
  )
}

export default IntroGadgetsDesktop;