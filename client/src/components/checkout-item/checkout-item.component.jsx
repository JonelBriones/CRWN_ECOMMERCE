import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import './checkout-item.styles.scss'
const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, qty } = cartItem
  const { addItemToCart, deleteItemFromCart, removeFromCart } =
    useContext(CartContext)

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        {qty > 1 ? (
          <div className="arrow" onClick={() => deleteItemFromCart(cartItem)}>
            &#10094;
          </div>
        ) : (
          <div className="arrow">&#10094;</div>
        )}
        <span className="value">{qty}</span>
        <div className="arrow" onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => removeFromCart(cartItem)}>
        &#10005;
      </div>
      <span className="total"></span>
    </div>
  )
}

export default CheckoutItem
