import React from 'react';
import { useMediaQuery } from 'react-responsive';
import HeaderImg from '../HeaderImg';
import PassportPageImg from '../../assets/images/Tomasz Lerczak  CC BY-SA.png';
import PassportDescription from './PassportDescription';
import PassportGetInfo from './PassportGetInfo';
import PassportPageImgDesktop from '../../assets/images/crop Tomasz Lerczak  CC BY-SA.png';

const PassportPage = () => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
  });

  return (
    <>
      <HeaderImg headerImg={isDesktopOrLaptop ? PassportPageImgDesktop : PassportPageImg} title="paszport" />
      <PassportDescription />
      <PassportGetInfo />
    </>
  )
}

export default PassportPage;