import React from 'react'
import Button from '../button/button.component'
import './checkout-item.styles.scss'
import { addItemToCart } from '../../store/cart/cart.action'
import { deleteItemFromCart } from '../../store/cart/cart.action'
import { clearFromCart } from '../../store/cart/cart.action'
import { useDispatch, useSelector } from 'react-redux'
import { selectCart } from '../../store/cart/cart.selector'
const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, qty } = cartItem
  const cart = useSelector(selectCart)
  const dispatch = useDispatch()
  const deleteItem = () => dispatch(deleteItemFromCart(cart, cartItem))
  const addItem = () => dispatch(addItemToCart(cart, cartItem))
  const clearItemFromCart = () => dispatch(clearFromCart(cart, cartItem))
  return (
    <>
      <div className="checkout-item-container">
        <div className="image-container">
          <img src={imageUrl} alt={name} />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
          {qty > 1 ? (
            <div className="arrow" onClick={() => deleteItem(cart, cartItem)}>
              &#10094;
            </div>
          ) : (
            <div className={qty === 1 ? 'arrow hide' : 'arrow'}>&#10094;</div>
          )}
          <span className="value">{qty}</span>
          <div className="arrow" onClick={() => addItem(cart, cartItem)}>
            &#10095;
          </div>
        </span>
        <span className="price">${price}</span>
        <div
          className="remove-button"
          onClick={() => clearItemFromCart(cart, cartItem)}>
          &#10005;
        </div>
      </div>
    </>
  )
}

export default CheckoutItem
