import React from 'react';
import './ShopPage.scss';
import { useMediaQuery } from 'react-responsive';
import products from '../../data/products.json';

const ShopArticles = () => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
  });

  return (
    <div className="ShopPage--articles">
      {products.map(product => (
        <div className="ShopPage--product">
          <img src={isDesktopOrLaptop ? product.imgDesktop : product.imgMobile} alt={`zdjęcie artykułu: ${product.name}`} />
          <div className="ShopPage--product--description">
            <p>{product.name}</p>
            <p>{product.price} PLN</p>
          </div>
        </div>))}
    </div>
  )
}

export default ShopArticles;