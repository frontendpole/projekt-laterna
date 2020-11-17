import React from 'react';
import './PassportDescription.scss';
import { useMediaQuery } from 'react-responsive';
import PassportDesktop from './DesktopPassportDesc/PassportDesktop';
import PassportDescMobile from './MobilePassportDesc/PassportDescMobile';
import useLayoutQueries from '../../../functions/useLayoutQueries';

const PassportDescription = () => {

  return (
    <section className="PassportDescription">

      {useLayoutQueries().isTabletOrMobile &&
        <PassportDescMobile />
      }
      {useLayoutQueries().isDesktopOrLaptop &&
        <PassportDesktop />
      }

    </section>
  )
}

export default PassportDescription;