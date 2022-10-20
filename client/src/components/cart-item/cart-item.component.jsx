import React, { useContext } from 'react'
import './cart-item.styles.scss'

const CartItem = ({ product }) => {
  const { name, imageUrl, qty, price, id } = product
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span>
          {qty} x ${price}
        </span>
      </div>
    </div>
  )
}

export default CartItem
