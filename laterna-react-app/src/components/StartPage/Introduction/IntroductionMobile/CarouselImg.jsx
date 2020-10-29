import React from 'react';
import './CarouselImg.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from './Card';
import lanterns from '../../../../data/lanterns.json';

const CarouselImg = () => {

  return (
    <Carousel>
      {lanterns.map(lantern => (
        <Card img={lantern.carouselImg} id={lantern.id} />
      ))}
    </Carousel>
  )
}

export default CarouselImg;