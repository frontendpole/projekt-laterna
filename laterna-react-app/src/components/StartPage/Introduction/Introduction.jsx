import React from 'react';
import useLayoutQueries from '../../../functions/useLayoutQueries';
import './Introduction.scss';
import IntroductionMobile from './IntroductionMobile/IntroductionMobile';
import Map from '../Introduction/IntroductionDesktop/Map';

const Introduction = () => {

  return (
    <section className="Introduction">

      {useLayoutQueries().isTabletOrMobile &&
        <IntroductionMobile />
      }

      {useLayoutQueries().isDesktopOrLaptop &&
        <Map />
      }

    </section>
  )
}

export default Introduction;