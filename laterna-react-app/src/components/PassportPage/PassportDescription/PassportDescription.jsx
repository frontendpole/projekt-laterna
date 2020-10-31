import React from 'react';
import './PassportDescription.scss';
import { useMediaQuery } from 'react-responsive';
import PassportDesktop from './DesktopPassportDesc/PassportDesktop';
import PassportDescMobile from './MobilePassportDesc/PassportDescMobile';

const PassportDescription = () => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
  });

  return (
    <section className="PassportDescription">

      {isTabletOrMobile &&
        <PassportDescMobile />
      }
      {isDesktopOrLaptop &&
        <PassportDesktop />
      }

    </section>
  )
}

export default PassportDescription;