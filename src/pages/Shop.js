import React, {useEffect, useState} from 'react';
import Product from '../components/Product';
import "./shop.css";



export default function Shop() {
  const[items, setItems]= useState([])

  useEffect(()=> {
    fetch("http://localhost:3000/items")
      .then(resp => resp.json())
      .then(items => setItems(items))
  }, []);

  const list = items.map((item) => {
    return < div className="products">< Product key={item.id} id={item.id} name={item.name} src={item.src} price={item.price}/></div>
  })

  return (
    <div>
      <h1 className='heading'>GORIGO ONLINE SHOP</h1>
      <div className="products">
      {list}
      </div>
    </div>
  )
}

// export const iteminfo = items.find((item) => item.id === Number(item));

// export default Shop;
