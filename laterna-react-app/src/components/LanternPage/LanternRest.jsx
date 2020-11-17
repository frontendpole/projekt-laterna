import './LanternPage.scss';
import React from 'react';
import './LanternRest.scss';

const LanternRest = ({ introImg, name, rest, footer }) => {

  return (
    <div className="lanternRest">
      <img
        src={introImg}
        alt={`zdjęcie latarni morskiej w miejscowości ${name}`} />
      {rest.map(element => (
        element.p ? <p>{element.p}</p> : <img src={element.img} alt="zdjęcie latarni morskiej" />
      ))}
      <footer className="lanternRest--footer">
        <p>Zdjęcia:</p>
        <p>{footer}</p>
      </footer>
    </div>
  )
}

export default LanternRest;