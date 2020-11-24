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
            <img src={lantern.mapImg} className={`LanternImg ${lantern.url}`} alt={`grafika latarni morskiej z miejscowości ${lantern.name}`} />
          </NavLink>
          <p className={`LanternText ${lantern.url}`}>
            {lantern.name === "krynica morska" ? lantern.name : lantern.shortName || lantern.name}
          </p>
        </>
      ))}
      <img src={świnoujścieLine} className={`LanternLine ${lanterns[0].url}`} alt="linia łącząca nazwę miejscowości z grafiką latarni na mapie" />
      <img src={kikutLine} className={`LanternLine ${lanterns[1].url}`} alt="linia łącząca nazwę miejscowości z grafiką latarni na mapie" />
      <img src={niechorzeLine} className={`LanternLine ${lanterns[2].url}`} alt="linia łącząca nazwę miejscowości z grafiką latarni na mapie" />
      <img src={kołobrzegLine} className={`LanternLine ${lanterns[3].url}`} alt="linia łącząca nazwę miejscowości z grafiką latarni na mapie" />
      <img src={gąskiLine} className={`LanternLine ${lanterns[4].url}`} alt="linia łącząca nazwę miejscowości z grafiką latarni na mapie" />
      <img src={darłowoLine} className={`LanternLine ${lanterns[5].url}`} alt="linia łącząca nazwę miejscowości z grafiką latarni na mapie" />
      <img src={jarosławiecLine} className={`LanternLine ${lanterns[6].url}`} alt="linia łącząca nazwę miejscowości z grafiką latarni na mapie" />
      <img src={ustkaLine} className={`LanternLine ${lanterns[7].url}`} alt="linia łącząca nazwę miejscowości z grafiką latarni na mapie" />
      <img src={stiloLine} className={`LanternLine ${lanterns[8].url}`} alt="linia łącząca nazwę miejscowości z grafiką latarni na mapie" />
      <img src={czołpinoLine} className={`LanternLine ${lanterns[9].url}`} alt="linia łącząca nazwę miejscowości z grafiką latarni na mapie" />
      <img src={rozewieLine} className={`LanternLine ${lanterns[10].url}`} alt="linia łącząca nazwę miejscowości z grafiką latarni na mapie" />
      <img src={jastarniaLine} className={`LanternLine ${lanterns[11].url}`} alt="linia łącząca nazwę miejscowości z grafiką latarni na mapie" />
      <img src={helLine} className={`LanternLine ${lanterns[12].url}`} alt="linia łącząca nazwę miejscowości z grafiką latarni na mapie" />
      <img src={sopotLine} className={`LanternLine ${lanterns[13].url}`} alt="linia łącząca nazwę miejscowości z grafiką latarni na mapie" />
      <img src={gdańsk1Line} className={`LanternLine ${lanterns[14].url}`} alt="linia łącząca nazwę miejscowości z grafiką latarni na mapie" />
      <img src={gdańsk2Line} className={`LanternLine ${lanterns[15].url}`} alt="linia łącząca nazwę miejscowości z grafiką latarni na mapie" />
      <img src={darłowoLine} className={`LanternLine ${lanterns[16].url}`} alt="linia łącząca nazwę miejscowości z grafiką latarni na mapie" />
    </>
  )
}

export default LanternMapImg;