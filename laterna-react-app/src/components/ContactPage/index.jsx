import React from 'react';
import './ContactPage.scss';
import { useMediaQuery } from 'react-responsive';
import HeaderImg from '../HeaderImg';
import ContactPageImg from '../../assets/images/lighthouse-on-near-body-of-water-between-rock-formation-176383.png';
import ContactChannels from './ContactChannels';
import ContactForm from './ContactForm';
import ContactPageImgDesktop from '../../assets/images/crop Arkadiusz Zarzecki  CC BY-SA.png';

const ContactPage = () => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
  });

  return (
    <>
      <HeaderImg headerImg={isDesktopOrLaptop ? ContactPageImgDesktop : ContactPageImg} title='kontakt' />
      <div className="ContactPage">
        <ContactChannels />
        <ContactForm />
      </div>
    </>
  )
}

export default ContactPage;