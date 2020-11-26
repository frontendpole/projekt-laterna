import React from 'react';
import HeaderImg from '../Header/HeaderImg';
import AboutProjectPageImgMobile from './images/ZDJECIE STILO-2@2x-min.png'
import AboutProjectPageImgDesktop from './images/crop lighthouse-4324254_192@2x-min.png';
import ProjectDescription from './ProjectDescription/ProjectDescription';
import useLayoutQueries from '../../functions/useLayoutQueries';

const AboutProjectPage = () => {

  return (
    <>
      <HeaderImg
        headerImg={useLayoutQueries().isDesktopOrLaptop ? AboutProjectPageImgDesktop : AboutProjectPageImgMobile}
        title="o projekcie" />
      <ProjectDescription />
    </>
  )
}

export default AboutProjectPage;