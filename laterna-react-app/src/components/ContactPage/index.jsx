import React from 'react';
import './ContactPage.scss';
import HeaderImg from '../Header/HeaderImg';
import ContactPageImg from './images/lighthouse-on-near-body-of-water-between-rock-formation-176383@2x.png';
import ContactChannels from './ContactChannels/ContactChannels';
import ContactForm from './ContactForm/ContactForm';
import ContactPageImgDesktop from './images/crop Arkadiusz Zarzecki  CC BY-SA@2x.png';
import useLayoutQueries from '../../functions/useLayoutQueries';

const ContactPage = () => {

  return (
    <>
      <HeaderImg
        headerImg={useLayoutQueries().isDesktopOrLaptop ? ContactPageImgDesktop : ContactPageImg}
        title='kontakt' />
      <div className="ContactPage">
        <ContactChannels />
        <ContactForm />
      </div>
    </>
  )
}

export default ContactPage;