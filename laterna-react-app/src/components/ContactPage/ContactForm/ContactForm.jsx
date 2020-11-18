import React from 'react';
import './ContactForm.scss';
import ContactFormMobile from './MobileContactForm/ContactFormMobile';
import ContactFormDesktop from './DesktopContactForm/ContactFormDesktop';
import useLayoutQueries from '../../../functions/useLayoutQueries';


const ContactForm = () => {

  return (
    <section className="ContactForm">

      {useLayoutQueries().isTabletOrMobile &&
        <ContactFormMobile />
      }

      {useLayoutQueries().isDesktopOrLaptop &&
        <ContactFormDesktop />
      }

    </section>
  )
}

export default ContactForm;