import React from 'react';
import arrow from './images/Group 418.png';
import { NavLink } from 'react-router-dom';

const BackArrowWithLabel = ({ previousName, previousId, previousUrl, isFirst }) => {

  return (
    <>
      {!isFirst &&
        <NavLink to={`/latarnie/${previousId}/${previousUrl}`}>
          <button id="goBack">
            <img src={arrow} alt={"poprzednia strona"} />
            <p>
              {previousName}
            </p>
          </button>
        </NavLink>
      }
    </>
  )
}

export default BackArrowWithLabel;