import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss';
import instagramIcon from '../assets/images/iconfinder_-2.png';
import facebookIcon from '../assets/images/iconfinder_facebook_circle_black_-1.png';
import pinterestIcon from '../assets/images/iconfinder_-1.png';
import photo1 from '../assets/images/insta-1.png';
import photo2 from '../assets/images/insta-2.png';
import photo3 from '../assets/images/insta-1.png';
import photo4 from '../assets/images/insta-3.png';

const FooterMobile = () => {

  return (
    <>
      <h2>projekt laterna</h2>
      <NavLink to='/kontakt'>kontakt</NavLink>
      <section className='contactDetails'>
        <p>kontakt@projektlaterna.pl</p>
        <p>+48 602 439 801</p>
      </section>
      <section className='social-media'>
        <button>
          <NavLink to='https://www.instagram.com/projektlaterna/?igshid=1ama6k71e24md&fbclid=IwAR2zkE5gdUxncRjTMfx7-jsX2Ka2AVt1IGc_7dmZxxk4KQCrOxOn-GvYNPQ'>
            <img className='social-media--instagram' src={instagramIcon} alt="instagram icon" />
          </NavLink>
        </button>
        <button>
          <NavLink to='#'>
            <img className='social-media--facebook' src={facebookIcon} alt="facebook icon" />
          </NavLink>
        </button>
        <button>
          <NavLink to='#'>
            <img className='social-media--pinterest' src={pinterestIcon} alt="pinterest icon" />
          </NavLink>
        </button>
      </section>
      <NavLink to='/instagram'>instagram</NavLink>
      <section className='footer-pictures'>
        <img src={photo1} alt="" />
        <img src={photo2} alt="" />
        <img src={photo3} alt="" style={{ marginTop: '9px' }} />
        <img src={photo4} alt="" style={{ marginTop: '9px' }} />
      </section>
      <p>Copyrights: Sabina Strzelecka 2020</p>
    </>
  )
}

export default FooterMobile;