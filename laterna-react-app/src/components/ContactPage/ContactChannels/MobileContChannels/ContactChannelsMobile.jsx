import React from 'react';
import { NavLink } from 'react-router-dom';
import '../ContactChannels.scss';
import './ContactChannelsMobile';
import instagramIcon from '../../images/INSTA.png';
import facebookIcon from '../../images/FB.png';
import pinterestIcon from '../../images/PINT.png';
import emailBtnIcon from '../../images/Path 1283.png';

const ContactChannelsMobile = () => {

  return (
    <>
      <header>
        <p>Jeśli masz pytania lub uwagi dotyczące projektu, paszportu czy sklepu, śmiało skontaktuj się z nami!</p>
      </header>
      <div className="ContactChannels--emailWrapper">
        <img src={emailBtnIcon} alt="projektlaterna@gmail.com" />
        <p className="ContactChannels--emailWrapper--emailAddress">projektlaterna@gmail.com</p>
      </div>
      <div className="ContactChannels--social-media">
        <button>
          <a href='https://www.facebook.com/projektlaterna'>
            <img className='social-media--facebook' src={facebookIcon} alt="facebook icon" />
          </a>
        </button>
        <button>
          <a href='https://www.instagram.com/projektlaterna/?igshid=1ama6k71e24md&fbclid=IwAR2zkE5gdUxncRjTMfx7-jsX2Ka2AVt1IGc_7dmZxxk4KQCrOxOn-GvYNPQ'>
            <img className='social-media--instagram' src={instagramIcon} alt="instagram icon" />
          </a>
        </button>
        <button>
          <a href='https://pl.pinterest.com/projektlaterna/?fbclid=IwAR3qiDXeNlimAVLR_gkeqSmhzZgmA6znoB2CDEm0jm81vLpw-aQK9CQHNno'>
            <img className='social-media--pinterest' src={pinterestIcon} alt="pinterest icon" />
          </a>
        </button>
      </div>
    </>
  )
}

export default ContactChannelsMobile;