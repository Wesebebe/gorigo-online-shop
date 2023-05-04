import React from 'react'

function Product({name, price, src}) {
    
  return (
    <div>
      <img src={src} alt={name}/> 
      <h3><b>{name}</b></h3>
      <h5>Ksh.{price}</h5> 
      <button>Add to Cart</button>
    </div>
  )
}

export default Product;
