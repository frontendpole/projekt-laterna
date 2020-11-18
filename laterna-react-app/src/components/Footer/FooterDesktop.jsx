import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss';
import instagramDesktop from './images/iconfinder_-2@2x.png';
import facebookDesktop from './images/iconfinder_facebook_circle_black_-1@2x.png';
import pinterestDesktop from './images/iconfinder_-1@2x.png';
import photo1Desktop from './images/insta-79@2x.png';
import photo2Desktop from './images/plakat 16.png';
import photo3Desktop from './images/insta-81@2x.png';
import photo4Desktop from './images/insta-80@2x.png';

const FooterDesktop = () => {

  return (
    <>
      <div className="Footer--wrapper1">
        <h2>projekt laterna</h2>
        <NavLink to='/kontakt'>kontakt</NavLink>
        <section className='contactDetails'>
          <p>kontakt@projektlaterna.pl</p>
        </section>
        <section className='social-media'>
          <button>
            <a href="https://www.instagram.com/projektlaterna/?igshid=1ama6k71e24md&fbclid=IwAR2zkE5gdUxncRjTMfx7-jsX2Ka2AVt1IGc_7dmZxxk4KQCrOxOn-GvYNPQ">
              <img className='social-media--instagram' src={instagramDesktop} alt="instagram icon" />
            </a>
          </button>
          <button>
            <a href="#">
              <img className='social-media--facebook' src={facebookDesktop} alt="facebook icon" />
            </a>
          </button>
          <button>
            <a href="#">
              <img className='social-media--pinterest' src={pinterestDesktop} alt="pinterest icon" />
            </a>
          </button>
        </section>
      </div>
      <div className="Footer--wrapper2">
        <a href="https://www.instagram.com/projektlaterna/?igshid=1ama6k71e24md&fbclid=IwAR2zkE5gdUxncRjTMfx7-jsX2Ka2AVt1IGc_7dmZxxk4KQCrOxOn-GvYNPQ">instagram</a>        <section className='footer-pictures'>
          <img src={photo1Desktop} alt="" />
          <img src={photo2Desktop} alt="" />
          <img src={photo3Desktop} alt="" />
          <img src={photo4Desktop} alt="" />
        </section>
        <p>Copyrights: Sabina Strzelecka 2020</p>
      </div>
    </>
  )
}

export default FooterDesktop;