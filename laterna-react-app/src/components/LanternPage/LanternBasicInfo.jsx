import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './LanternBasicInfo.scss';
import lanterns from '../../data/lanterns.json';

const LanternBasicInfo = ({ lanternId }) => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  // const isDesktopOrLaptop = useMediaQuery({
  //   query: '(min-device-width: 1024px)'
  // });

  return (
    <>
      <div className="Lantern--basic-info">
        <div className="Lantern--basic-info--wrapper" style={{ marginTop: 47.76 }}>
          <h2>ROK BUDOWY LATARNI</h2>
          <div className="border"></div>
          <p>{lanterns[lanternId].constructionYear}</p>
        </div>
        <div className="Lantern--basic-info--wrapper">
          <h2>WYSOKOŚĆ LATARNI</h2>
          <div className="border"></div>
          <p>{lanterns[lanternId].height}</p>
        </div>
        <div className="Lantern--basic-info--wrapper">
          <h2>WYSOKOŚĆ ŚWIATŁA</h2>
          <div className="border"></div>
          <p>{lanterns[lanternId].lightHeight}</p>
        </div>
        <div className="Lantern--basic-info--wrapper">
          <h2>CHARAKTERYSTYKA ŚWIATŁA</h2>
          <div className="border"></div>
          <p>{lanterns[lanternId].lightDetails}</p>
        </div>
        <div className="Lantern--basic-info--wrapper">
          <h2>ADRES LATARNI</h2>
          <div className="border"></div>
          <p>{lanterns[lanternId].address}</p>
          <p>{lanterns[lanternId].address2}</p>
        </div>
      </div>

      {isTabletOrMobile &&
        <div className="Lantern--introduction">
          <p>{lanterns[lanternId].introduction}</p>
        </div>}
    </>
  )
}

export default LanternBasicInfo;


