import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import arrow from '../../assets/images/Group 418.png';
import './LanternHeader.scss';
import lanterns from '../../data/lanterns.json';


const LanternHeader = ({ lanternId }) => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  // const isDesktopOrLaptop = useMediaQuery({
  //   query: '(min-device-width: 1024px)'
  // });

  return (
    <>
      <header className="Lantern--header">
        <NavLink to={lanternId > 0 ? `/projekt-laterna/latarnie/${parseInt(lanternId) - 1}` : '/projekt-laterna'}>
          <button id="goBack">
            <img src={arrow} alt="strzałka do powrotu do strony głównej" />
            <p>
              {lanternId > 0 ? `${lanterns[parseInt(lanternId) - 1].name === 'gdańsk port północny' ? 'gdańsk' : lanterns[parseInt(lanternId) - 1].name === 'gdańsk nowy port' ? 'gdańsk' : lanterns[parseInt(lanternId) - 1].name}` : 'strona gł.'}
            </p>
          </button>
        </NavLink>
        <NavLink to={lanternId < 16 ? `/projekt-laterna/latarnie/${parseInt(lanternId) + 1}` : '/projekt-laterna'}>
          <button id="goForward">
            <p>
              {lanternId < 16 ? `${lanterns[parseInt(lanternId) + 1].name === 'gdańsk port północny' ? 'gdańsk' : lanterns[parseInt(lanternId) + 1].name === 'gdańsk nowy port' ? 'gdańsk' : lanterns[parseInt(lanternId) + 1].name === 'krynica morska' ? 'krynica m.' : lanterns[parseInt(lanternId) + 1].name}` : 'strona gł.'}
            </p>
            <img src={arrow} alt="strzałka do powrotu do strony głównej" />
          </button>
        </NavLink>
      </header>
      {isTabletOrMobile &&
        <img src={`${lanterns[lanternId].headerImgUrl}`} alt={`grafika latarni morskiej w miejscowości ${lanterns[lanternId].name}`} />}
    </>
  )
}
export default LanternHeader;








