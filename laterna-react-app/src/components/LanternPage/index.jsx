import React from 'react';
import lanterns from '../../data/lanterns.json';
import { NavLink } from 'react-router-dom';
import goToStartPage from '../../assets/images/Group 418.png';
import Header from '../Header';
import './LanternPage.scss';

const LanternPage = () => {

  return (
    <>
      <section className="Lantern">
        <div className="Lantern--wrapper">
          <header className="Lantern--header">
            <NavLink to='/'>
              <button id="goToStartPage">
                <img src={goToStartPage} alt="strzałka do powrotu do strony głównej" />
              </button>
            </NavLink>
          </header>
          <img src={`${lanterns[0].headerImgUrl}`} alt={`grafika latarni morskiej w miejscowości ${lanterns[0].name}`} />
          <div className="Lantern--basic-info">
            <div className="Lantern--basic-info--wrapper" style={{ marginTop: 47.76 }}>
              <h2>ROK BUDOWY LATARNI</h2>
              <p>{lanterns[0].constructionYear}</p>
            </div>
            <div className="Lantern--basic-info--wrapper">
              <h2>WYSOKOŚĆ LATARNI</h2>
              <p>{lanterns[0].height}</p>
            </div>
            <div className="Lantern--basic-info--wrapper">
              <h2>WYSOKOŚĆ ŚWIATŁA</h2>
              <p>{lanterns[0].lightHeight}</p>
            </div>
            <div className="Lantern--basic-info--wrapper">
              <h2>CHARAKTERYSTYKA ŚWIATŁA</h2>
              <p>{lanterns[0].lightDetails}</p>
            </div>
            <div className="Lantern--basic-info--wrapper">
              <h2>ADRES LATARNI</h2>
              <p>{lanterns[0].address}</p>
              <p>{lanterns[0].address2}</p>
            </div>
          </div>
          <div className="Lantern--introduction">
            <p>{lanterns[0].introduction}</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default LanternPage;