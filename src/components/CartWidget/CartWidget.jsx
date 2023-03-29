import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/2568/2568255.png"
  return (
    <div>
      <img className='imgCarrito' src= {imgCarrito} alt= "" />
      <strong>5</strong>
    </div>
  )
}

export default CartWidget
