import React from 'react';
import {products} from './products';

const ProductAlerts = ({ product, notify }) => {
  let productAlerts;

  if (product.price > 700) {
    productAlerts = <p>
      <button onClick={notify}>Notify Me</button>
    </p>;
  }

  return <div className="product-alerts">{productAlerts}</div>
};

export default ProductAlerts;
