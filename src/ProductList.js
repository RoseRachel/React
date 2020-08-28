
import React from 'react';
import ProductAlerts from './ProductAlerts';
import {products} from './products';


// function UserGreeting(props) {
//   return<h1>Welcome back!</h1>;
// }
//   function GuestGreeting(props){
//     return<h1>Please sign up</h1>
// }

// function greeting (props){
//   const isLoggedIn = props.isLOggedIn;
//   if (isLoggedIn){
//     return < UserGreeting/>;

//   }
//   return <GuestGreeting/>;
// }

const ProductList = ({ name }) => {
  const Buy = () => {
    window.alert('Added to cart');
  }

  // const onNotify = () => {
  //   window.alert('You will be notified when the product goes on sale');
  // }

  return (
    <div className="product-list">
      <h2>My Groceries</h2>
     
            {/* <ProductAlerts product={product} notify={onNotify} /> */}
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
            {product.cereals && <p>{`Type: ${product.cereals}`}</p>}
            {product.herbs && <p>{`Type: ${product.herbs}`}</p>}
            <button onClick={Buy}>
              Buy
            </button>
            {/* <ProductAlerts product={product} notify={onNotify} /> */}
            
          </div>
        )
      })}
    </div>
  )
};

export default ProductList;