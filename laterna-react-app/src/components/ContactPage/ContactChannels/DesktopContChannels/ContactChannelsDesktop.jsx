import React from 'react';
import { NavLink } from 'react-router-dom';
import '../ContactChannels.scss';
import '../MobileContChannels/ContactChannelsMobile';
import instagramIconDesktop from '../../../../assets/images/INSTA@2x.png';
import facebookIconDesktop from '../../../../assets/images/FB@2x.png';
import pinterestIconDesktop from '../../../../assets/images/PINT@2x.png';
import emailBtnIconDesktop from '../../../../assets/images/Path 1283@2x.png';

const ContactChannelsDesktop = () => {

  return (
    <>
      <header>
        <h2>DANE DO KONTAKTU</h2>
        <p>Jeśli masz pytania lub uwagi dotyczące projektu, paszportu czy sklepu, śmiało skontaktuj się z nami!</p>
      </header>
      <div className="ContactChannels--emailWrapper">
        <img src={emailBtnIconDesktop} alt="kontakt@projektlaterna.pl" />
        <p className="ContactChannels--emailWrapper--emailAddress">kontakt@projektlaterna.pl</p>
      </div>
      <div className="ContactChannels--social-media">
        <button>
          <NavLink to='#'>
            <img className='social-media--facebook' src={facebookIconDesktop} alt="facebook icon" />
          </NavLink>
        </button>
        <button>
          <NavLink to='https://www.instagram.com/projektlaterna/?igshid=1ama6k71e24md&fbclid=IwAR2zkE5gdUxncRjTMfx7-jsX2Ka2AVt1IGc_7dmZxxk4KQCrOxOn-GvYNPQ'>
            <img className='social-media--instagram' src={instagramIconDesktop} alt="instagram icon" />
          </NavLink>
        </button>
        <button>
          <NavLink to='#'>
            <img className='social-media--pinterest' src={pinterestIconDesktop} alt="pinterest icon" />
          </NavLink>
        </button>
      </div>
    </>
  )
}

export default ContactChannelsDesktop;