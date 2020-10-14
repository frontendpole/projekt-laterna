import React from 'react';
import HeaderImg from '../HeaderImg';
import PassportPageImg from '../../assets/images/Tomasz Lerczak  CC BY-SA.png';
import PassportDescription from './PassportDescription';
import PassportGetInfo from './PassportGetInfo';

const PassportPage = () => {

  return (
    <>
      <HeaderImg headerImg={PassportPageImg} title="paszport" />
      <PassportDescription />
      <PassportGetInfo />
    </>
  )
}

export default PassportPage;