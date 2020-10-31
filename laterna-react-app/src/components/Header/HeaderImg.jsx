import React from 'react';
import './HeaderImg.scss';

const HeaderImg = ({ title, headerImg, rectangleStyle, titleStyle }) => {

  return (
    <header className='HeaderImg'>
      <div className="HeaderImg--wrapper">
        <img className='HeaderImg--img' src={headerImg} alt="sea lantern" />
        <div className="HeaderImg--rectangle" style={rectangleStyle}></div>
        <h1 className='HeaderImg--title slide-top' style={titleStyle}>{title}</h1>
      </div>

    </header>)
}

export default HeaderImg;