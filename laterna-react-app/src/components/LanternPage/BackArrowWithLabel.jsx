import React from 'react';
import lanterns from '../../data/lanterns.json';
import arrow from '../../assets/images/Group 418.png';
import { NavLink } from 'react-router-dom';

const BackArrowWithLabel = ({ lanternId, isFirst }) => {

  let previousId = parseInt(lanternId) - 1;

  return (
    <NavLink to={!isFirst ? `/projekt-laterna/latarnie/${previousId}` : '/projekt-laterna'}>
      <button id="goBack">
        <img src={arrow} alt={isFirst ? "strzałka do powrotu do strony głównej" : "poprzednia strona"} />
        <p>
          {isFirst ? "strona gł." : (lanterns[previousId].shortName || lanterns[previousId].name)}
        </p>
      </button>
    </NavLink>
  )
}

export default BackArrowWithLabel;

{/* <NavLink to={lanternId > 0 ? `/projekt-laterna/latarnie/${parseInt(lanternId) - 1}` : '/projekt-laterna'}>
<button id="goBack">
  <img src={arrow} alt="strzałka do powrotu do strony głównej" />
  <p>
    {lanternId > 0 ? `${lanterns[parseInt(lanternId) - 1].name === 'gdańsk port północny' ? 'gdańsk' : lanterns[parseInt(lanternId) - 1].name === 'gdańsk nowy port' ? 'gdańsk' : lanterns[parseInt(lanternId) - 1].name}` : 'strona gł.'}
  </p>
</button>
</NavLink> */}