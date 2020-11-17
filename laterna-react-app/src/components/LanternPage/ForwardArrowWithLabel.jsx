import React from 'react';
import arrow from '../../assets/images/Group 418.png';
import { NavLink } from 'react-router-dom';

const ForwardArrowWithLabel = ({ isLast, nextId, nextName }) => {

  return (
    <NavLink to={!isLast ? `/latarnie/${nextId}` : '/'}>
      <button id="goForward">
        <p>
          {nextName}
        </p>
        <img src={arrow} alt={isLast ? "strzałka do powrotu do strony głównej" : "poprzednia strona"} />
      </button>
    </NavLink>
  )
}

export default ForwardArrowWithLabel;