import React from 'react'



export default function CartButton({onShowCart}) {
  return (
   <button className='cart-btn' onClick={onShowCart}>Show Cart</button>
  )
}
