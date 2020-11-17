import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './ContactChannels.scss';
import ContactChannelsMobile from './MobileContChannels/ContactChannelsMobile';
import ContactChannelsDesktop from './DesktopContChannels/ContactChannelsDesktop';
import useLayoutQueries from '../../../functions/useLayoutQueries';

const ContactChannels = () => {

  return (
    <section className="ContactChannels">

      {useLayoutQueries().isTabletOrMobile &&
        <ContactChannelsMobile />}

      {useLayoutQueries().isDesktopOrLaptop &&
        <ContactChannelsDesktop />}

    </section>
  )
}

export default ContactChannels;