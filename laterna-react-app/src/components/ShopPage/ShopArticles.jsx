import React from 'react';
import './ShopPage.scss';
import useLayoutQueries from '../../functions/useLayoutQueries';
import products from '../../data/products.json';

const ShopArticles = () => {

  const isDesktopOrLaptop = useLayoutQueries().isDesktopOrLaptop;

  return (
    <div className="ShopPage--articles">
      {products.map(product => (
        <a href={product.name === 'pocztówki' ? "https://www.etsy.com/pl/shop/ProjektLaterna?ref=seller-platform-mcnav&section_id=31390866" : product.name === "plakaty" ? "https://www.etsy.com/pl/shop/ProjektLaterna?ref=seller-platform-mcnav&section_id=31440377" : product.name === "mapy" ? "https://www.etsy.com/pl/shop/ProjektLaterna?ref=seller-platform-mcnav&section_id=31460953" : null} target="_blank" className="ShopPage--product">
          <img
            src={isDesktopOrLaptop ? product.imgDesktop : product.imgMobile}
            alt={`zdjęcie artykułu: ${product.name}`} />
          <div className="ShopPage--product--description">
            <p>{product.name}</p>
          </div>
        </a>))}
    </div>
  )
}

export default ShopArticles;