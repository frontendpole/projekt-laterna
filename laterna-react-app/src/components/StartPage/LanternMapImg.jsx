import React from 'react';
import './LanternMapImg.scss';
import { NavLink } from 'react-router-dom';
import lanterns from '../../data/lanterns.json';

const LanternMapImg = () => {

  return (
    <>
      {lanterns.map(lantern => (
        <NavLink to={`/latarnie/${lantern.id}`}>
          <img src={lantern.mapImg} className={`LanternImg ${lantern.name}`} alt={`grafika latarni morskiej w miejscowości ${lantern.name}`} />
        </NavLink>))
      }
    </>
  )
}

export default LanternMapImg;