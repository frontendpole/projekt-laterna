import React from 'react';
import './LanternMapImg.scss';
import { NavLink } from 'react-router-dom';
import lanterns from '../../../../data/lanterns.json';
import świnoujścieLine from '../../../../assets/images/map/lines/Line 928.png';
import kikutLine from '../../../../assets/images/map/lines/Line 933.png';
import niechorzeLine from '../../../../assets/images/map/lines/Line 927.png';
import kołobrzegLine from '../../../../assets/images/map/lines/Line 942.png';
import gąskiLine from '../../../../assets/images/map/lines/Line 929.png';
import darłowoLine from '../../../../assets/images/map/lines/Line 939.png';
import jarosławiecLine from '../../../../assets/images/map/lines/Line 930.png';
import ustkaLine from '../../../../assets/images/map/lines/Line 940.png';
import stiloLine from '../../../../assets/images/map/lines/Line 931.png';
import czołpinoLine from '../../../../assets/images/map/lines/Line 941.png';
import rozewieLine from '../../../../assets/images/map/lines/Line 933.png';
import jastarniaLine from '../../../../assets/images/map/lines/Line 932.png';
import helLine from '../../../../assets/images/map/lines/Line 934.png';
import sopotLine from '../../../../assets/images/map/lines/Line 938.png';
import gdańsk1Line from '../../../../assets/images/map/lines/Line 936.png';
import gdańsk2Line from '../../../../assets/images/map/lines/Line 937.png';


const LanternMapImg = () => {

  return (
    <>
      {lanterns.map(lantern => (
        <>
          <NavLink to={`/projekt-laterna/latarnie/${lantern.id}`}>
            <img src={lantern.mapImg} className={`LanternImg ${lantern.name === "gdańsk nowy port" ? "gdańsk1" : lantern.name === "gdańsk port północny" ? "gdańsk2" : lantern.name === "krynica morska" ? "krynica" : lantern.name}`} alt={`grafika latarni morskiej w miejscowości ${lantern.name}`} />
          </NavLink>
          <p className={`LanternText ${lantern.name === "gdańsk nowy port" ? "gdańsk1" : lantern.name === "gdańsk port północny" ? "gdańsk2" : lantern.name === "krynica morska" ? "krynica" : lantern.name}`} alt={`grafika latarni morskiej w miejscowości ${lantern.name}`}>{lantern.name === "gdańsk nowy port" ? "gdańsk" : lantern.name}</p>
        </>
      ))}
      <img src={świnoujścieLine} className="LanternLine świnoujście" />
      <img src={kikutLine} className="LanternLine kikut" />
      <img src={niechorzeLine} className="LanternLine niechorze" />
      <img src={kołobrzegLine} className="LanternLine kołobrzeg" />
      <img src={gąskiLine} className="LanternLine gąski" />
      <img src={darłowoLine} className="LanternLine darłowo" />
      <img src={jarosławiecLine} className="LanternLine jarosławiec" />
      <img src={ustkaLine} className="LanternLine ustka" />
      <img src={stiloLine} className="LanternLine stilo" />
      <img src={czołpinoLine} className="LanternLine czołpino" />
      <img src={rozewieLine} className="LanternLine rozewie" />
      <img src={jastarniaLine} className="LanternLine jastarnia" />
      <img src={helLine} className="LanternLine hel" />
      <img src={sopotLine} className="LanternLine sopot" />
      <img src={gdańsk1Line} className="LanternLine gdańsk1" />
      <img src={gdańsk2Line} className="LanternLine gdańsk2" />
      <img src={darłowoLine} className="LanternLine krynica" />
    </>
  )
}

export default LanternMapImg;