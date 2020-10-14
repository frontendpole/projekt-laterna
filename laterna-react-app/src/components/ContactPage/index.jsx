import React from 'react';
import HeaderImg from '../HeaderImg';
import ContactPageImg from '../../assets/images/lighthouse-on-near-body-of-water-between-rock-formation-176383.png';
import ContactChannels from './ContactChannels';
import ContactForm from './ContactForm';

const ContactPage = () => {

  return (
    <>
      <HeaderImg headerImg={ContactPageImg} title='kontakt' />
      <ContactChannels />
      <ContactForm />
    </>
  )
}

export default ContactPage;