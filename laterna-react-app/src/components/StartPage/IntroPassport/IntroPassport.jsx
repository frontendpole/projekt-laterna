import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './IntroPassport.scss';
import IntroPassportMobile from './MobileIntroPassport/IntroPassportMobile';
import IntroPassportDesktop from './DesktopIntroPassport/IntroPassportDesktop';

const IntroPassport = () => {


  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
  });

  return (
    <section className="IntroPassport">
      {isTabletOrMobile &&

        <IntroPassportMobile />}
      {isDesktopOrLaptop &&

        <IntroPassportDesktop />}

    </section>
  )
}

export default IntroPassport;