import React, {useContext} from 'react';
import { ShopContext } from '../context/ShopContext';

const CartItem = (props) => {
    const{cartItems, addToCart, removeFromCart} = useContext(ShopContext)
    const{id, name, src, price} = props.data
  return (
    <div>
      <img src={src} alt={name} />
      <h3>{name}</h3>
      <h6>Ksh.{price}</h6>
      <button onClick={() => removeFromCart(id)}> - </button>
      <input value={cartItems[id]} />
      <button onClick={() => addToCart(id)}> + </button>
    </div>
  )
}

export default CartItem
