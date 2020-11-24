import React from 'react';
import './LanternBasicInfo.scss';
import useLayoutQueries from '../../functions/useLayoutQueries';

const LanternBasicInfo = ({ constructionYear, height, lightHeight, lightDetails, address, address2, introduction }) => {

  return (
    <>
      <div className="Lantern--basic-info">
        <div className="Lantern--basic-info--wrapper" style={useLayoutQueries().isTabletOrMobile ? { marginTop: 47.76 } : null}>
          <h2>ROK BUDOWY LATARNI</h2>
          <div className="border"></div>
          <p>{constructionYear}</p>
        </div>
        <div className="Lantern--basic-info--wrapper">
          <h2>WYSOKOŚĆ LATARNI</h2>
          <div className="border"></div>
          <p>{height}</p>
        </div>
        <div className="Lantern--basic-info--wrapper">
          <h2>WYSOKOŚĆ ŚWIATŁA</h2>
          <div className="border"></div>
          <p>{lightHeight}</p>
        </div>
        <div className="Lantern--basic-info--wrapper">
          <h2>CHARAKTERYSTYKA ŚWIATŁA</h2>
          <div className="border"></div>
          <p>{lightDetails}</p>
        </div>
        <div className="Lantern--basic-info--wrapper">
          <h2>ADRES LATARNI</h2>
          <div className="border"></div>
          <p>{address}</p>
          <p>{address2}</p>
        </div>
      </div>

      {useLayoutQueries().isTabletOrMobile &&
        <div className="Lantern--introduction">
          <p>{introduction}</p>
        </div>}
    </>
  )
}

export default LanternBasicInfo;


