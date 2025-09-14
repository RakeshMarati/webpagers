import React from 'react'
import "./Cart.css"
const Cart = () => {
  return (
    <div className='cart'>
        <h1>Shopping Cart</h1>
        <div className='cart-content'>
            <p>Your Cart is empty</p>
            <p>Add some prodcuts to your cart</p>
        </div>
    </div>
  )
}

export default Cart;