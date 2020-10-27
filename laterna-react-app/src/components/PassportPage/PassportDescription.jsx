import React from 'react';
import './PassportDescription.scss';
import { useMediaQuery } from 'react-responsive';
import PassportImg1 from '../../assets/images/Zrzut ekranu 2020-06-30 o 20.47.15.png';
import PassportImg2 from '../../assets/images/Zrzut ekranu 2020-06-05 o 15.18.42.png';
import PassportImg3 from '../../assets/images/paszport mockup 13.png';
import PassportImg4 from '../../assets/images/paszport mockup 4.png';
import PassportImg5 from '../../assets/images/paszport mockup 3.png';
import PassportImg6 from '../../assets/images/paszport mockup -2.png';
import PassportDesktop from './PassportDesktop';
import PassportDescMobile from './PassportDescMobile';

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