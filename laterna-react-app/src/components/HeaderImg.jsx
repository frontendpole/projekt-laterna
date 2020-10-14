import React from 'react';
import './HeaderImg.scss';

const HeaderImg = ({ title, headerImg, rectangleStyle }) => {
  return (
    <header className='HeaderImg'>
      <img className='HeaderImg--img' src={headerImg} alt="sea lantern" />
      <div className="HeaderImg--rectangle" style={rectangleStyle}></div>
      <h1 className='HeaderImg--title'>{title}</h1>
    </header>)
}

export default HeaderImg;