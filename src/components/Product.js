import React, { useContext } from 'react';
import "../pages/shop.css";
import { ShopContext } from '../context/ShopContext';

const Product = ({id, name, price, src}) => {
  const{addToCart, cartItems} = useContext(ShopContext)

  const cartItemAmount = cartItems[id]
  return (
    <div>
      <img src={src} alt={name} />
      <h3>{name}</h3>
      <h6>Ksh.{price}</h6>
      <button onClick={() => addToCart(id)} calssName="ui primary button">
        Add to Cart{cartItemAmount > 0 && <> ({cartItemAmount})</>}
      </button>
    </div>
  )
}

export default Product
