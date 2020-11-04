import React from 'react';
import { useMediaQuery } from 'react-responsive';
import HeaderImg from '../Header/HeaderImg';
import ShopArticles from './ShopArticles';
import shopPageImg from '../../assets/images/desktop/crop Tomasz Lerczak  CC BY-SA 3@2x.png';
import shopPageMobile from '../../assets/images/lighthouse-on-top-of-cliff-2869512 (1)@2x.png';

const ShopPage = () => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
  });

  return (
    <>
      <HeaderImg headerImg={isDesktopOrLaptop ? shopPageImg : shopPageMobile} title="sklep" />
      <section className="ShopPage">
        <div className="ShopPage--header">
          <h2>SKLEP PROJEKTU LATERNA</h2>
          <h2 style={{ color: '#B04527' }}>NIE JEST JESZCZE CZYNNY</h2>
          <h2>ZAJRZYJ TU ZA JAKIŚ CZAS :)</h2>
        </div>
        <ShopArticles />
      </section>    </>
  )
}

export default ShopPage;