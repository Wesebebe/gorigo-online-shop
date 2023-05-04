import React from 'react';
import "../pages/shop.css"

const Product = ({name, price, src}) => {
  return (
    <div className='product'>
      <img src={src} alt={name} />
      <h3>{name}</h3>
      <h6>Ksh.{price}</h6>
    </div>
  )
}

export default Product
