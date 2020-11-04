import React from 'react';
import HeaderImg from '../Header/HeaderImg';
import { useMediaQuery } from 'react-responsive';
import startPageImgMobile from '../../assets/images/ZDJECIE STILO-1@2x.png';
import Introduction from './Introduction/Introduction';
import IntroGadgets from './IntroGadgets/IntroGadgets';
import IntroPassport from './IntroPassport/IntroPassport';
import startPageImgDesktop from '../../assets/images/desktop/ZeroJeden . CC BY-SA 3.0 PL web@2x.png';

const StartPage = () => {

  const rectangleStyle = {
    backgroundColor: 'transparent',
    opacity: 1
  }

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
  });

  const titleStyle = {
    width: '897px',
    height: '127px',
    textAlign: 'left',
    fontSize: '55px',
    lineHeight: '66px',
    top: "75%",
    left: "10%"
  }

  return (
    <>
      <HeaderImg headerImg={isDesktopOrLaptop ? startPageImgDesktop : startPageImgMobile} rectangleStyle={isTabletOrMobile ? rectangleStyle : null} title={isDesktopOrLaptop && "poznaj latarnie morskie polskiego wybrzeża"} titleStyle={titleStyle} />
      <Introduction />
      <IntroPassport />
      <IntroGadgets />
    </>
  )
}

export default StartPage;