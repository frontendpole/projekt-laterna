import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './ContactChannels.scss';
import ContactChannelsMobile from './ContactChannelsMobile';
import ContactChannelsDesktop from './ContactChannelsDesktop';

const ContactChannels = () => {


  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
  });

  return (
    <section className="ContactChannels">

      {isTabletOrMobile &&
        <ContactChannelsMobile />}

      {isDesktopOrLaptop &&
        <ContactChannelsDesktop />}

    </section>
  )
}

export default ContactChannels;