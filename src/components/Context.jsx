import React, { createContext, useState } from 'react'
import Products from './Components/Product'

export const ShopContext =createContext(null);
const getDefaultCart = () => {
    let Cart = {};
    for (let i=1; i < Products.length; i++ ){
        Cart[1] = 0;
    }
    return Cart;
}

function ShopContextProvider(props) {

    const [cartItems,setCartItems] = useState(getDefaultCart);
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));

        const removeFromCart = (itemId) => {
            setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    };

    const contexValue = {cartItems, addToCart, removeFromCart};
  return (
    <ShopContext.Provider value={contexValue} > 
        {props.children}
    </ShopContext.Provider>
  )
}
}

export default Context;
