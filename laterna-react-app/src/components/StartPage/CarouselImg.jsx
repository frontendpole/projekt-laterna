import React from 'react';
import './CarouselImg.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from './Card';
import lanterns from '../../data/lanterns.json';
// import swinoujscie from '../../assets/images/Carousel/233px/Artboard 18.png';
// import kikut from '../../assets/images/Carousel/233px/Artboard 3.png';
// import niechorze from '../../assets/images/Carousel/233px/Artboard 12.png';
// import kolobrzeg from '../../assets/images/Carousel/233px/Artboard 26.png';
// import gaski from '../../assets/images/Carousel/233px/Artboard 27.png';
// import darlowo from '../../assets/images/Carousel/233px/Artboard 2.png';
// import jaroslawiec from '../../assets/images/Carousel/233px/Artboard 14.png';
// import ustka from '../../assets/images/Carousel/233px/Artboard 17.png';
// import stilo from '../../assets/images/Carousel/233px/Artboard 11.png';
// import czolpino from '../../assets/images/Carousel/233px/Artboard 17_1.png';
// import rozewie from '../../assets/images/Carousel/233px/Artboard 10.png';
// import jastarnia from '../../assets/images/Carousel/233px/Artboard 15.png';
// import hel from '../../assets/images/Carousel/233px/Artboard 13.png';
// import sopot from '../../assets/images/Carousel/233px/Artboard 9.png';
// import gdanskNowyPort from '../../assets/images/Carousel/233px/Artboard 27.png';
// import gdanskPortPln from '../../assets/images/Carousel/233px/Artboard 8.png';
// import krynica from '../../assets/images/Carousel/233px/Artboard 19.png';

const CarouselImg = () => {

  return (
    <Carousel>
      {lanterns.map(lantern => (
        <Card img={lantern.carouselImg} id={lantern.id} />
      ))}
      {/* <Card img={swinoujscie} name='swinoujscie' /> */}
      {/* <Card img={kikut} name='kikut' />
      <Card img={niechorze} name='niechorze' />
      <Card img={kolobrzeg} name='kolobrzeg' />
      <Card img={gaski} name='gaski' />
      <Card img={darlowo} name='darlowo' />
      <Card img={jaroslawiec} name='jaroslawiec' />
      <Card img={ustka} name='ustka' />
      <Card img={stilo} name='stilo' />
      <Card img={czolpino} name='czolpino' />
      <Card img={rozewie} name='rozewie' />
      <Card img={jastarnia} name='jastarnia' />
      <Card img={hel} name='hel' />
      <Card img={sopot} name='sopot' />
      <Card img={gdanskNowyPort} name='gdansk-nowy-port' />
      <Card img={gdanskPortPln} name='gdansk-port-polnocny' />
      <Card img={krynica} name='krynica' /> */}
    </Carousel>
  )
}

export default CarouselImg;