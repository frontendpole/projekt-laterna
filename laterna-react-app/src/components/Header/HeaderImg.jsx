import React from 'react';
import './HeaderImg.scss';
import { animate__fadeInUp } from 'animate.css';

const HeaderImg = ({ title, headerImg, rectangleStyle, titleStyle }) => {

  return (
    <header className='HeaderImg'>
      <div className="HeaderImg--wrapper">
        <img className='HeaderImg--img' src={headerImg} alt="sea lantern" />
        <div className="HeaderImg--rectangle" style={rectangleStyle}></div>
        <h1 className='HeaderImg--title slide-top animate__animated animate__fadeInUp' style={titleStyle}>{title}</h1>
      </div>

    </header>)
}

export default HeaderImg;