import React, { useContext } from 'react'
import Button from '../button/button.component'
import './cart-dropdown.styles.scss'

import { useNavigate } from 'react-router-dom'
import CartItem from '../cart-item/cart-item.component'
import { CartContext } from '../../contexts/cart.context'

const CartDropdown = () => {
  const { cart, setIsCartOpen, isCartOpen } = useContext(CartContext)
  const navigate = useNavigate()
  const goToCheckout = () => {
    navigate('checkout')
    setIsCartOpen(!isCartOpen)
  }
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cart.map((product) => (
          <CartItem product={product} key={product.id} />
        ))}
        <Button onClick={goToCheckout}>Go to checkout</Button>
      </div>
    </div>
  )
}

export default CartDropdown
