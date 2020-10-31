import React from 'react';
import { useMediaQuery } from 'react-responsive';
import HeaderImg from '../Header/HeaderImg';
import PassportPageImg from '../../assets/images/Tomasz Lerczak  CC BY-SA.png';
import PassportDescription from './PassportDescription/PassportDescription';
import PassportGetInfo from './PassportGetInfo/PassportGetInfo';
import PassportPageImgDesktop from '../../assets/images/crop Tomasz Lerczak  CC BY-SA@2x.png';

const PassportPage = () => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
  });

  return (
    <>
      <HeaderImg headerImg={isDesktopOrLaptop ? PassportPageImgDesktop : PassportPageImg} title="paszport" />
      <PassportDescription />
      {isTabletOrMobile &&
        <PassportGetInfo />
      }
    </>
  )
}

export default PassportPage;