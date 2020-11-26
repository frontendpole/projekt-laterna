import React from 'react';
import useLayoutQueries from '../../functions/useLayoutQueries';
import HeaderImg from '../Header/HeaderImg';
import ShopArticles from './ShopArticles';
import shopPageImg from './images/crop Tomasz Lerczak  CC BY-SA 3@2x-min.png';
import shopPageMobile from './images/lighthouse-on-top-of-cliff-2869512 (1)@2x.png';

const ShopPage = () => {

  return (
    <>
      <HeaderImg headerImg={useLayoutQueries().isDesktopOrLaptop ? shopPageImg : shopPageMobile} title="sklep" />
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