import React from 'react';
import './LanternPageDesktop.scss';
import '../LanternRest.scss';
import HeaderImg from '../../Header/HeaderImg';
import lanterns from '../../../data/lanterns.json';
import LanternHeader from '../LanternHeader';
import LanternBasicInfo from '../LanternBasicInfo';
import LanternCustomInfo from './LanternCustomInfo';

const LanternPageDesktop = ({ lanternId }) => {

  const titleStyle = {
    width: '897px',
    height: '127px',
    textAlign: 'left',
    fontSize: '65px',
    lineHeight: '78px',
    top: "85%",
    left: "10%"
  }

  const introDesktop = lanterns[lanternId].introDesktop;

  const restDesktop = lanterns[lanternId].restDesktop;

  return (
    <>
      <HeaderImg
        headerImg={lanterns[lanternId].headerImg}
        title={lanterns[lanternId].name}
        titleStyle={titleStyle} />
      <LanternHeader lanternId={lanternId} />
      <div className="LanternPageDesktop">
        <div className="LanternPageDesktop--basic-info">
          <img
            src={`${lanterns[lanternId].desktopImg}`}
            alt={`grafika latarni morskiej w miejscowości ${lanterns[lanternId].name}`} />
          <LanternBasicInfo lanternId={lanternId} />
        </div>
        <LanternCustomInfo array={introDesktop} />

        <div className="LanternPageDesktop--pictures">
          {lanterns[lanternId].picturesDesktop.map(element => (
            <img src={element.img} alt="zdjęcie latarni morskiej" />
          ))}
        </div>

        {lanterns[lanternId].restDesktop &&
          <LanternCustomInfo array={restDesktop} />
        }

        <footer className="lanternRest--footer">
          <p>Zdjęcia:</p>
          <p>{lanterns[lanternId].footer}</p>
        </footer>
      </div>
    </>
  )
}

export default LanternPageDesktop;