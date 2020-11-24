import React from 'react';
import arrow from './images/Group 418.png';
import { NavLink } from 'react-router-dom';

const ForwardArrowWithLabel = ({ nextId, nextName, nextUrl, isLast }) => {

  return (
    <>
      {!isLast &&
        <NavLink to={`/latarnie/${nextId}/${nextUrl}`}>
          <button id="goForward">
            <p>
              {nextName}
            </p>
            <img src={arrow} alt={"poprzednia strona"} />
          </button>
        </NavLink>}
    </>
  )
}

export default ForwardArrowWithLabel;