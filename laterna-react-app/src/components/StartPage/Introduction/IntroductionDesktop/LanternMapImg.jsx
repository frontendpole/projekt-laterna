import React from 'react';
import './LanternMapImg.scss';
import { NavLink } from 'react-router-dom';
import lanterns from '../../../../data/lanterns.json';
import świnoujścieLine from '../../images/lines/Line 928.png';
import kikutLine from '../../images/lines/Line 933.png';
import niechorzeLine from '../../images/lines/Line 927.png';
import kołobrzegLine from '../../images/lines/Line 942.png';
import gąskiLine from '../../images/lines/Line 929.png';
import darłowoLine from '../../images/lines/Line 939.png';
import jarosławiecLine from '../../images/lines/Line 930.png';
import ustkaLine from '../../images/lines/Line 940.png';
import stiloLine from '../../images/lines/Line 931.png';
import czołpinoLine from '../../images/lines/Line 941.png';
import rozewieLine from '../../images/lines/Line 933.png';
import jastarniaLine from '../../images/lines/Line 932.png';
import helLine from '../../images/lines/Line 934.png';
import sopotLine from '../../images/lines/Line 938.png';
import gdańsk1Line from '../../images/lines/Line 936.png';
import gdańsk2Line from '../../images/lines/Line 937.png';

const LanternMapImg = () => {

  return (
    <>
      {lanterns.map(lantern => (
        <>
          <NavLink to={`/latarnie/${lantern.id}/${lantern.url}`}>
            <img src={lantern.mapImg} className={`LanternImg ${lantern.url}`} />
          </NavLink>
          <p className={`LanternText ${lantern.url}`}>
            {lantern.name != "krynica morska" && lantern.shortName || lantern.name}
          </p>
        </>
      ))}
      <img src={świnoujścieLine} className={`LanternLine ${lanterns[0].url}`} />
      <img src={kikutLine} className={`LanternLine ${lanterns[1].url}`} />
      <img src={niechorzeLine} className={`LanternLine ${lanterns[2].url}`} />
      <img src={kołobrzegLine} className={`LanternLine ${lanterns[3].url}`} />
      <img src={gąskiLine} className={`LanternLine ${lanterns[4].url}`} />
      <img src={darłowoLine} className={`LanternLine ${lanterns[5].url}`} />
      <img src={jarosławiecLine} className={`LanternLine ${lanterns[6].url}`} />
      <img src={ustkaLine} className={`LanternLine ${lanterns[7].url}`} />
      <img src={stiloLine} className={`LanternLine ${lanterns[8].url}`} />
      <img src={czołpinoLine} className={`LanternLine ${lanterns[9].url}`} />
      <img src={rozewieLine} className={`LanternLine ${lanterns[10].url}`} />
      <img src={jastarniaLine} className={`LanternLine ${lanterns[11].url}`} />
      <img src={helLine} className={`LanternLine ${lanterns[12].url}`} />
      <img src={sopotLine} className={`LanternLine ${lanterns[13].url}`} />
      <img src={gdańsk1Line} className={`LanternLine ${lanterns[14].url}`} />
      <img src={gdańsk2Line} className={`LanternLine ${lanterns[15].url}`} />
      <img src={darłowoLine} className={`LanternLine ${lanterns[16].url}`} />
    </>
  )
}

export default LanternMapImg;