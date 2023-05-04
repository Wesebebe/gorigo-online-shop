import React, { useContext, useEffect, useState } from "react";
import {ShopContext} from '../context/ShopContext';
import CartItem from "./CartItem";
import './Cart.css';

function Cart() {
   const [items, setItems] =useState([])
   const {cartItems} =useContext(ShopContext);
    useEffect(()=>{
        fetch ('http://localhost:3001/items')
        .then((resp) => resp.json())
        .then((items) => setItems(items))

    }, []);

    return(

    <div className="Cart">
        <div>
            <h1>Your Cart Items</h1>
            <div className="cartItems">
                {items.map((item) => {
                    if(cartItems[item.id] !==0){
                        return<CartItem data={item}/>
                    }
                })}


            </div>
        </div>

    </div>
    )
}
export default Cart;