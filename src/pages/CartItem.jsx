import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import './Cart.css'

function CartItem(props) {
  const {id, name, src, price} = props.data;
  const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext)
  return (
    <div className='cartItems'>
      <img src={src} alt={name}/>
      <p> <b>{name}</b></p>
      <p> <b>Ksh.{price}</b></p>
      <div className='countHandler'>
        <button onClick={() => removeFromCart(id)}> - </button>
        <input className='countHandler' value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id) }/>
        <button onClick={() => addToCart(id)}> + </button>
      </div>
      
    </div>
  )
}

export default CartItem;
