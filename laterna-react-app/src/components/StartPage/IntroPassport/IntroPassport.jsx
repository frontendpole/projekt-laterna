import React from 'react';
import useLayoutQueries from '../../../functions/useLayoutQueries';
import './IntroPassport.scss';
import IntroPassportMobile from './MobileIntroPassport/IntroPassportMobile';
import IntroPassportDesktop from './DesktopIntroPassport/IntroPassportDesktop';

const IntroPassport = () => {

  return (
    <section className="IntroPassport">
      {useLayoutQueries().isTabletOrMobile &&

        <IntroPassportMobile />}
      {useLayoutQueries().isDesktopOrLaptop &&

        <IntroPassportDesktop />}

    </section>
  )
}

export default IntroPassport;