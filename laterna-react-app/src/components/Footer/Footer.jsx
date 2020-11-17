import React from 'react';
import './Footer.scss';
import { useMediaQuery } from 'react-responsive';
import FooterMobile from './FooterMobile';
import FooterDesktop from './FooterDesktop';
import useLayoutQueries from '../../functions/useLayoutQueries';

const Footer = () => {

  return (
    <footer className='Footer'>

      {useLayoutQueries().isTabletOrMobile &&
        <FooterMobile />}

      {useLayoutQueries().isDesktopOrLaptop &&
        <FooterDesktop />}

    </footer>
  )
}

export default Footer;