
   
import React from 'react';
import ProductAlerts from './ProductAlerts';



import {products} from './products';


const ProductList = ({ name }) => {
  const Buy = () => {
    window.alert('Added to cart');
  }

  const onNotify = () => {
    window.alert('You will be notified when the product goes on sale');
  }

  return (
    <div className="product-list">
      <h2>My Groceries</h2>

      {products.map(product => {
        return (
          <div class="products">
            <h3>
              <a title={`${product.type1} details`}>
                { product.type1 }
              </a>
            </h3>
            
            <img src={product.images}></img>
            <h3>
              <a title={`${product.quantity} details`}>
               Quantity { product.quantity }
              </a>
            </h3>
            <h3>
              <a title={`${product.price} details`}>
                Ksh.{ product.price }
              </a>
            </h3>
            {product.veges && <p>{`Type: ${product.veges}`}</p>}
            {product.fruits && <p>{`Type: ${product.fruits}`}</p>}
            <button onClick={Buy}>
              Buy
            </button>
            <ProductAlerts product={product} notify={onNotify} />
            
          </div>
        )
      })}
    </div>
  )
};

export default ProductList;

