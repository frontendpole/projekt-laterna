import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './Introduction.scss';
import IntroductionMobile from './IntroductionMobile/IntroductionMobile';
import Map from '../Introduction/IntroductionDesktop/Map';

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
        <Map />
      }

    </section>
  )
}

export default Introduction;