import React,{useContext, useEffect, useState} from 'react';
import { ShopContext } from '../context/ShopContext';
import CartItem from './CartItem';
import "./cart.css";

export default function Cart() {
  const[items, setItems]= useState([])

  useEffect(()=> {
    fetch("http://localhost:3000/items")
      .then(resp => resp.json())
      .then(items => setItems(items))
  }, []);

  const{cartItems} = useContext(ShopContext)

  return (
    <>
      <div className="heading">
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {items.map((item) => {
          if(cartItems[item.id] !== 0){
            return <CartItem data={item}/>
          }
        })}
      </div>
    </>
  )
}

// export default Cart;
