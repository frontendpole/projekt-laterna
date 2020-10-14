import React from 'react';
import { NavLink } from 'react-router-dom';
import goToStartPage from '../../assets/images/Group 418.png';
import './LanternPage.scss';
import lanterns from '../../data/lanterns.json';


const LanternHeader = ({ lanternId }) => {

  return (
    <>
      <header className="Lantern--header">
        <NavLink to='/'>
          <button id="goToStartPage">
            <img src={goToStartPage} alt="strzałka do powrotu do strony głównej" />
          </button>
        </NavLink>
      </header>
      <img src={`${lanterns[lanternId].headerImgUrl}`} alt={`grafika latarni morskiej w miejscowości ${lanterns[lanternId].name}`} />
    </>
  )
}

export default LanternHeader;







