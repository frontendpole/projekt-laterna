import React from 'react';
import { NavLink } from 'react-router-dom';
import '../ContactChannels.scss';
import './ContactChannelsMobile';
import instagramIcon from '../../../../assets/images/INSTA.png';
import facebookIcon from '../../../../assets/images/FB.png';
import pinterestIcon from '../../../../assets/images/PINT.png';
import emailBtnIcon from '../../../../assets/images/Path 1283.png';

const ContactChannelsMobile = () => {

  return (
    <>
      <header>
        <p>Jeśli masz pytania lub uwagi dotyczące projektu, paszportu czy sklepu, śmiało skontaktuj się z nami!</p>
      </header>
      <div className="ContactChannels--emailWrapper">
        <img src={emailBtnIcon} alt="kontakt@projektlaterna.pl" />
        <p className="ContactChannels--emailWrapper--emailAddress">kontakt@projektlaterna.pl</p>
      </div>
      <div className="ContactChannels--social-media">
        <button>
          <NavLink to='#'>
            <img className='social-media--facebook' src={facebookIcon} alt="facebook icon" />
          </NavLink>
        </button>
        <button>
          <NavLink to='https://www.instagram.com/projektlaterna/?igshid=1ama6k71e24md&fbclid=IwAR2zkE5gdUxncRjTMfx7-jsX2Ka2AVt1IGc_7dmZxxk4KQCrOxOn-GvYNPQ'>
            <img className='social-media--instagram' src={instagramIcon} alt="instagram icon" />
          </NavLink>
        </button>
        <button>
          <NavLink to='#'>
            <img className='social-media--pinterest' src={pinterestIcon} alt="pinterest icon" />
          </NavLink>
        </button>
      </div>
    </>
  )
}

export default ContactChannelsMobile;