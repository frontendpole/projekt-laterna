import React from 'react';
import './Card.scss';
import { NavLink } from 'react-router-dom';
import lanterns from '../../../../data/lanterns.json';

const Card = ({ img, id }) => {

  return (
    <NavLink to={`/latarnie/${id}`}>
      <img
        src={img}
        alt={`zdjęcie latarni morskiej w miejscowości ${lanterns[id].name}`}
        className="Card" />
      <div className="rectangle"></div>
    </NavLink>
  )
}

export default Card;