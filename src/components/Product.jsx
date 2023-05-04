import React, {useContext} from 'react'
import {ShopContext} from '../context/ShopContext';

function Product({id,name, price, src}) {
    const {addToCart, cartItems} = useContext(ShopContext)
    const cartItemAmount = cartItems[id]
  return (
    <div>
      <img src={src} alt={name}/> 
      <h3><b>{name}</b></h3>
      <h5>Ksh.{price}</h5> 
      <button onClick={() => addToCart(id)}>
        Add to Cart{cartItemAmount > 0 && <> ({cartItemAmount})</>}</button>
    </div>
  )
}

export default Product;
