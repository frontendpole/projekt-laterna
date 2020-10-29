import React from 'react';
import './Footer.scss';
import { useMediaQuery } from 'react-responsive';
import FooterMobile from './FooterMobile';
import FooterDesktop from './FooterDesktop';

const Footer = () => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
  });

  return (
    <footer className='Footer'>

      {isTabletOrMobile &&
        <FooterMobile />}

      {isDesktopOrLaptop &&
        <FooterDesktop />}

    </footer>
  )
}

export default Footer;