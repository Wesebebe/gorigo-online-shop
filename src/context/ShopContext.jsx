import React, { createContext, useState } from 'react'

export const ShopContext =createContext(null);

export const ShopContextProvider=(props) => {
    const [cartItems,setCartItems] = useState({
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
    })


    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    };

    const updateCartItemCount = (newAmount, itemId) => { 
        setCartItems ((prev) => ({...prev, [itemId]: newAmount}));
    }

    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount};
  return (
    <ShopContext.Provider value={contextValue} > 
        {props.children}
    </ShopContext.Provider>
  )

}
