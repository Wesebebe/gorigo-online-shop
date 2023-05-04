import React, { useContext } from "react";
import {ShopContext} from './context/ShopContext';
import CartItem from "./CartItem";

function Cart() {
    const {cartItems, items} =useContext(ShopContext);
    return(

    <div className="Cart">
        <div>
            <h1>Your Cart Items</h1>
            <div className="cartItems">
                {items.map((items) => {
                    if(cartItems(items.id) !==0){
                        return<CartItem data={items}/>
                    }
                })}
            </div>
        </div>

    </div>
    )
}
export default Cart;