import React from 'react';
import { NavLink } from 'react-router-dom';
import '../ContactChannels.scss';
import '../MobileContChannels/ContactChannelsMobile';
import instagramIconDesktop from '../../images/INSTA@2x.png';
import facebookIconDesktop from '../../images/FB@2x.png';
import pinterestIconDesktop from '../../images/PINT@2x.png';
import emailBtnIconDesktop from '../../images/Path 1283@2x.png';

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
          <a href='https://www.facebook.com/projektlaterna'>
            <img className='social-media--facebook' src={facebookIconDesktop} alt="facebook icon" />
          </a>
        </button>
        <button>
          <a href='https://www.instagram.com/projektlaterna/?igshid=1ama6k71e24md&fbclid=IwAR2zkE5gdUxncRjTMfx7-jsX2Ka2AVt1IGc_7dmZxxk4KQCrOxOn-GvYNPQ'>
            <img className='social-media--instagram' src={instagramIconDesktop} alt="instagram icon" />
          </a>
        </button>
        <button>
          <a href='https://pl.pinterest.com/projektlaterna/?fbclid=IwAR3qiDXeNlimAVLR_gkeqSmhzZgmA6znoB2CDEm0jm81vLpw-aQK9CQHNno'>
            <img className='social-media--pinterest' src={pinterestIconDesktop} alt="pinterest icon" />
          </a>
        </button>
      </div>
    </>
  )
}

export default ContactChannelsDesktop;