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
          <h2>WITAMY W SKLEPIE PEŁNYM</h2>
          <h2>LATARNIOWYCH SKARBÓW!</h2>
        </div>
        <div className="ShopPage--header">
          <h2>ABY PRZEJŚĆ DO SKLEPU</h2>
          <a href="https://www.etsy.com/pl/shop/ProjektLaterna?ref=seller-platform-mcnav" style={{ color: "rgb(176, 69, 39)" }} target="_blank" >KLIKNIJ TUTAJ</a>
        </div>
        <ShopArticles />
      </section>    </>
  )
}

export default ShopPage;