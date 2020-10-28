import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './Introduction.scss';
import Carousel from './CarouselImg';
import IntroductionMobile from './IntroductionMobile';
import IntroductionDesktop from './IntroductionDesktop';

const Introduction = () => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
  });

  return (
    <section className="Introduction">

      {isTabletOrMobile &&
        <IntroductionMobile />
      }

      {isDesktopOrLaptop &&
        <IntroductionDesktop />
      }

    </section>
  )
}

export default Introduction;