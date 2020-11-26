import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss';
import instagramIcon from './images/iconfinder_-2.png';
import facebookIcon from './images/iconfinder_facebook_circle_black_-1.png';
import pinterestIcon from './images/iconfinder_-1.png';
import photo1 from './images/insta-1.png';
import photo2 from './images/insta-2.png';
import photo3 from './images/plakat 16.png';
import photo4 from './images/insta-3.png';

const FooterMobile = () => {

  return (
    <>
      <h2>projekt laterna</h2>
      <NavLink to='/kontakt'>kontakt</NavLink>
      <section className='contactDetails'>
        <p>kontakt@projektlaterna.pl</p>
      </section>
      <section className='social-media'>
        <button>
          <a href="https://www.instagram.com/projektlaterna/?igshid=1ama6k71e24md&fbclid=IwAR2zkE5gdUxncRjTMfx7-jsX2Ka2AVt1IGc_7dmZxxk4KQCrOxOn-GvYNPQ">
            <img className='social-media--instagram' src={instagramIcon} alt="ikona instagrama" />
          </a>
        </button>
        <button>
          <a href="https://www.facebook.com/projektlaterna">
            <img className='social-media--facebook' src={facebookIcon} alt="ikona facebooka" />
          </a>
        </button>
        <button>
          <a href="https://pl.pinterest.com/projektlaterna/?fbclid=IwAR3qiDXeNlimAVLR_gkeqSmhzZgmA6znoB2CDEm0jm81vLpw-aQK9CQHNno">
            <img className='social-media--pinterest' src={pinterestIcon} alt="ikona pinterest" />
          </a>
        </button>
      </section>
      <a href="https://www.instagram.com/projektlaterna/?igshid=1ama6k71e24md&fbclid=IwAR2zkE5gdUxncRjTMfx7-jsX2Ka2AVt1IGc_7dmZxxk4KQCrOxOn-GvYNPQ">instagram</a>
      <section className='footer-pictures'>
        <img src={photo1} alt="losowe zdjęcie z instagrama projektu laterna" />
        <img src={photo2} alt="losowe zdjęcie z instagrama projektu laterna" />
        <img src={photo3} alt="losowe zdjęcie z instagrama projektu laterna" style={{ marginTop: '9px', width: 146 }} />
        <img src={photo4} alt="losowe zdjęcie z instagrama projektu laterna" style={{ marginTop: '9px' }} />
      </section>
      <p>Copyrights: Sabina Strzelecka 2020</p>
    </>
  )
}

export default FooterMobile;