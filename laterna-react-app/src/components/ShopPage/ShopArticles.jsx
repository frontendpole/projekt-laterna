import React from 'react';
import './ShopPage.scss';
import useLayoutQueries from '../../functions/useLayoutQueries';
import products from '../../data/products.json';

const ShopArticles = () => {

  const isDesktopOrLaptop = useLayoutQueries().isDesktopOrLaptop;

  return (
    <div className="ShopPage--articles">
      {products.map(product => (
        <div className="ShopPage--product">
          <img
            src={isDesktopOrLaptop ? product.imgDesktop : product.imgMobile}
            alt={`zdjęcie artykułu: ${product.name}`} />
          <div className="ShopPage--product--description">
            <p>{product.name}</p>
            <p>{product.price} PLN</p>
          </div>
        </div>))}
    </div>
  )
}

export default ShopArticles;