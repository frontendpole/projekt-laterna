import React from 'react';
import { NavLink } from 'react-router-dom';
import '../IntroGadgets.scss'
import cardsImg from '../../images/gadgets/pocztowki.svg';
import goToStoreImg from '../../images/gadgets/przejdz.svg';

const IntroGadgetsMobile = () => {
  return (
    <>
      <header className='IntroGadgets--header'>
        <div className='IntroGadgets--header--info'>
          <h2>ZDOBĄDŹ POCZTÓWKI,</h2>
          <h2>PLAKATY, GRY I INNE
          <span style={{ color: '#AE4527' }}> SKARBY</span>
          </h2>
          <h2>Z LATARNIAMI MORSKIMI</h2>
        </div>
      </header>
      <div className="IntroGadgets--gadgetsGetDetails">
        <img src={cardsImg} alt="Pocztówki z latarniami morskimi" />
        <button id="goToStore">
          <NavLink to='/sklep'>
            <img src={goToStoreImg} alt="Przycisk przejdź do sklepu" />
          </NavLink>
        </button>
      </div>
    </>
  )
}

export default IntroGadgetsMobile;