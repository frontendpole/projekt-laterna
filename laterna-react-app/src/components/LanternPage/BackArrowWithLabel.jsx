import React from 'react';
import arrow from './images/Group 418.png';
import { NavLink } from 'react-router-dom';

const BackArrowWithLabel = ({ isFirst, previousName, previousId, previousUrl }) => {

  return (
    <NavLink to={!isFirst ? `/latarnie/${previousId}/${previousUrl}` : '/'}>
      <button id="goBack">
        <img src={arrow} alt={isFirst ? "strzałka do powrotu do strony głównej" : "poprzednia strona"} />
        <p>
          {previousName}
        </p>
      </button>
    </NavLink>
  )
}

export default BackArrowWithLabel;