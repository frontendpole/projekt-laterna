import React from 'react';
import useLayoutQueries from '../../functions/useLayoutQueries';
import HeaderImg from '../Header/HeaderImg';
import PassportPageImg from '../../assets/images/Tomasz Lerczak  CC BY-SA@2x.png';
import PassportDescription from './PassportDescription/PassportDescription';
import PassportGetInfo from './PassportGetInfo/PassportGetInfo';
import PassportPageImgDesktop from '../../assets/images/crop Tomasz Lerczak  CC BY-SA@2x.png';

const PassportPage = () => {

  return (
    <>
      <HeaderImg headerImg={useLayoutQueries().isDesktopOrLaptop ? PassportPageImgDesktop : PassportPageImg} title="paszport" />
      <PassportDescription />
      {useLayoutQueries().isTabletOrMobile &&
        <PassportGetInfo />
      }
    </>
  )
}

export default PassportPage;