import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './IntroGadgets.scss'
import IntroGadgetsMobile from './MobileIntroGadgets/IntroGadgetsMobile';
import IntroGadgetsDesktop from './DesktopIntroGadgets/IntroGadgetsDesktop';

const IntroGadgets = () => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
  });

  return (
    <section className="IntroGadgets">
      {isTabletOrMobile &&
        <IntroGadgetsMobile />}

      {isDesktopOrLaptop &&
        <IntroGadgetsDesktop />}
    </section>
  )
}

export default IntroGadgets;