import React from 'react';
import HeaderImg from '../HeaderImg';
import { useMediaQuery } from 'react-responsive';
import startPageImgMobile from '../../assets/images/ZDJECIE STILO-1.png';
import Introduction from './Introduction';
import IntroGadgets from './IntroGadgets';
import IntroPassport from './IntroPassport';
import startPageImgDesktop from '../../assets/images/ZDJECIE STILO@2x.png';

const StartPage = () => {

  const rectangleStyle = {
    backgroundColor: 'transparent',
    opacity: 1
  }

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
  });

  return (
    <>
      <HeaderImg headerImg={isDesktopOrLaptop ? startPageImgDesktop : startPageImgMobile} rectangleStyle={rectangleStyle} />
      <Introduction />
      <IntroPassport />
      <IntroGadgets />
    </>
  )
}

export default StartPage;