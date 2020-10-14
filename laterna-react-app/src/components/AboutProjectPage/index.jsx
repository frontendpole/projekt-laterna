import React from 'react';
import HeaderImg from '../HeaderImg';
import AboutProjectPageImg from '../../assets/images/ZDJECIE STILO-2.png'
import ProjectDescription from './ProjectDescription';


const AboutProjectPage = () => {

  return (
    <>
      <HeaderImg headerImg={AboutProjectPageImg} title="o projekcie" />
      <ProjectDescription />
    </>
  )
}

export default AboutProjectPage;