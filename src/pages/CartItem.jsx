import React from 'react'

function CartItem(props) {
  const {id, name, amount, src} = props.data;
  return (
    <div className='cartItems'>
      <img src={src} alt='name'/>
      <p> <b>{name}</b></p>
      <p> <b>Ksh.{amount}</b></p>
      
    </div>
  )
}

export default CartItem;
