import React from 'react';
import HeaderImg from '../Header/HeaderImg';
import { useMediaQuery } from 'react-responsive';
import AboutProjectPageImgMobile from '../../assets/images/ZDJECIE STILO-2@2x.png'
import AboutProjectPageImgDesktop from '../../assets/images/crop lighthouse-4324254_192@2x.png';
import ProjectDescription from './ProjectDescription/ProjectDescription';



const AboutProjectPage = () => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
  });

  return (
    <>
      <HeaderImg headerImg={isDesktopOrLaptop ? AboutProjectPageImgDesktop : AboutProjectPageImgMobile} title="o projekcie" />
      <ProjectDescription />
    </>
  )
}

export default AboutProjectPage;