import React, {useContext} from 'react';
import { ShopContext } from '../context/ShopContext';
import "./cart.css";

const CartItem = (props) => {
    const{cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext)
    const{id, name, src, price} = props.data
  return (
    <div className="cartItem">
      <img src={src} alt={name} />
      <h3>{name}</h3>
      <h6>Ksh.{price}</h6>
      <button onClick={() => removeFromCart(id)}> - </button>
      <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
      <button onClick={() => addToCart(id)}> + </button>
    </div>
  )
}

export default CartItem
