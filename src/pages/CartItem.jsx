import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';

function CartItem(props) {
  const {id, name, src, price} = props.data;
  const {cartItems, addToCart, removeFromCart} = useContext(ShopContext)
  return (
    <div className='cartItems'>
      <img src={src} alt={name}/>
      <p> <b>{name}</b></p>
      <p> <b>Ksh.{price}</b></p>
      <div className='countHandler'>
        <button onClick={() => removeFromCart(id)}> - </button>
        <input value={cartItems[id]}/>
        <button onClick={() => addToCart(id)}> + </button>
      </div>
      
    </div>
  )
}

export default CartItem;
