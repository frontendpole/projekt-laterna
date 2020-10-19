import './LanternPage.scss';
import React from 'react';
import lanterns from '../../data/lanterns.json';
import './LanternRest.scss';

const LanternRest = ({ lanternId }) => {

  return (
    <div className="lanternRest">
      <img src={lanterns[lanternId].introImg} alt={`zdjęcie latarni morskiej w miejscowości ${lanterns[lanternId].name}`} />
      {lanterns[lanternId].rest.map(element => (
        element.p ? <p>{element.p}</p> : <img src={element.img} alt="zdjęcie latarni morskiej" />
      ))}
      <footer className="lanternRest--footer">
        <p>Zdjęcia:</p>
        <p>{lanterns[lanternId].footer}</p>
      </footer>
    </div>
  )
}

export default LanternRest;