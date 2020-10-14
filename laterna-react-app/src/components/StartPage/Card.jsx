import React from 'react';
import './Card.scss';
import { NavLink } from 'react-router-dom';

const Card = ({ img, name }) => {

  return (
    <NavLink to={`/latarnie/${name}`}>
      <img src={img} alt={`zdjęcie latarni morskiej w miejscowości ${name}`} className="Card" />
      <div className="rectangle"></div>
    </NavLink>
  )
}

export default Card;