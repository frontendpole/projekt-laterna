import React from 'react';
import useLayoutQueries from '../../../functions/useLayoutQueries';
import './IntroGadgets.scss'
import IntroGadgetsMobile from './MobileIntroGadgets/IntroGadgetsMobile';
import IntroGadgetsDesktop from './DesktopIntroGadgets/IntroGadgetsDesktop';

const IntroGadgets = () => {

  return (
    <section className="IntroGadgets">
      {useLayoutQueries().isTabletOrMobile &&
        <IntroGadgetsMobile />}

      {useLayoutQueries().isDesktopOrLaptop &&
        <IntroGadgetsDesktop />}
    </section>
  )
}

export default IntroGadgets;