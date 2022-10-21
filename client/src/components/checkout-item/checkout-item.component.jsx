import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import Button from '../button/button.component'
import './checkout-item.styles.scss'
import { useNavigate } from 'react-router-dom'
const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, qty } = cartItem
  const { addItemToCart, deleteItemFromCart, clearFromCart } =
    useContext(CartContext)
  const navigate = useNavigate()
  const redirect = () => {
    navigate('/shop')
  }
  return (
    <>
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
            <div className={qty === 1 ? 'arrow hide' : 'arrow'}>&#10094;</div>
          )}
          <span className="value">{qty}</span>
          <div className="arrow" onClick={() => addItemToCart(cartItem)}>
            &#10095;
          </div>
        </span>
        <span className="price">${price}</span>
        <div className="remove-button" onClick={() => clearFromCart(cartItem)}>
          &#10005;
        </div>
      </div>
    </>
  )
}

export default CheckoutItem
