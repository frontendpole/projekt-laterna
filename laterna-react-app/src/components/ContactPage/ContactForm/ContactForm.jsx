import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './ContactForm.scss';
import ContactFormMobile from './MobileContactForm/ContactFormMobile';
import ContactFormDesktop from './DesktopContactForm/ContactFormDesktop';


const ContactForm = () => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
  });

  return (
    <section className="ContactForm">

      {isTabletOrMobile &&
        <ContactFormMobile />
      }

      {isDesktopOrLaptop &&
        <ContactFormDesktop />
      }

    </section>
  )
}

export default ContactForm;