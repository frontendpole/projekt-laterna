import React from 'react';
import { NavLink } from 'react-router-dom';
import '../IntroGadgets.scss';
import cardsImg from '../../../../assets/images/export main page/Group 420.png';
import goToStoreImg from '../../../../assets/images/export main page/Group 421.png';

const IntroGadgetsDesktop = () => {
  return (
    <div className="IntroGadgets--wrapper">
      <div className="IntroGadgets--gadgetsGetDetails">
        <header className='IntroGadgets--header'>
          <h2>W NASZYM SKLEPIE ZNAJDZIESZ</h2>
          <h2>POCZTÓWKI, PLAKATY, GRY <br /> I INNE <span style={{ color: '#AE4527' }}>SKARBY</span> <br /> Z LATARNIAMI MORSKIMI</h2>
        </header>
        <button id="goToStore">
          <NavLink to='/projekt-laterna/sklep'><img src={goToStoreImg} alt="Przycisk przejdź do sklepu" /></NavLink>
        </button>
      </div>
      <div className="IntroGadgets--3pics">
        <img src={cardsImg} alt="Pocztówki z latarniami morskimi" />
      </div>
    </div>
  )
}

export default IntroGadgetsDesktop;