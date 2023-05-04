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

function ShopContextProvidr(props) {

    const [cartItems,setCartItems] = useState(getDefaultCart);
  return (
    <ShopContext.Provider> {props.children}</ShopContext.Provider>
  )
}

export default Context;
