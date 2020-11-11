import React from 'react';
import lanterns from '../../data/lanterns.json';
import arrow from '../../assets/images/Group 418.png';
import { NavLink } from 'react-router-dom';

const ForwardArrowWithLabel = ({ lanternId, isLast }) => {

  let nextId = parseInt(lanternId) + 1;

  return (
    <NavLink to={!isLast ? `/projekt-laterna/latarnie/${nextId}` : '/projekt-laterna'}>
      <button id="goForward">
        <p>
          {isLast ? "strona gł." : (lanterns[nextId].shortName || lanterns[nextId].name)}
        </p>
        <img src={arrow} alt={isLast ? "strzałka do powrotu do strony głównej" : "poprzednia strona"} />
      </button>
    </NavLink>
  )
}

export default ForwardArrowWithLabel;