import React from 'react';
import HeaderImg from '../HeaderImg';
import startPageImg from '../../assets/images/ZDJECIE STILO-1.png';
import Introduction from './Introduction';
import IntroGadgets from './IntroGadgets';
import IntroPassport from './IntroPassport';

const StartPage = () => {

  const rectangleStyle = {
    backgroundColor: 'transparent',
    opacity: 1
  }

  return (
    <>
      <HeaderImg headerImg={startPageImg} rectangleStyle={rectangleStyle} />
      <Introduction />
      <IntroPassport />
      <IntroGadgets />
    </>
  )
}

export default StartPage;