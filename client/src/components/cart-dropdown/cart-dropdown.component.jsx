import React from 'react'
import Button from '../button/button.component'
import './cart-dropdown.styles.scss'

import { useNavigate } from 'react-router-dom'
import CartItem from '../cart-item/cart-item.component'
import { useDispatch, useSelector } from 'react-redux'
import { selectCart, selectIsCartOpen } from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.action'

const CartDropdown = () => {
  const cart = useSelector(selectCart)
  const isCartOpen = useSelector(selectIsCartOpen)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const goToCheckout = () => {
    navigate('checkout')
    dispatch(setIsCartOpen(!isCartOpen))
  }
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cart.length === 0 && (
          <span className="empty-message">cart is empty</span>
        )}
        {cart.map((product) => (
          <CartItem product={product} key={product.id} />
        ))}
      </div>
      <Button onClick={goToCheckout}>Checkout</Button>
    </div>
  )
}

export default CartDropdown
