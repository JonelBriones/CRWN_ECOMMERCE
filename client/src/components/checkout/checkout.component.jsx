import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import CheckoutItem from '../checkout-item/checkout-item.component'
import './checkout.styles.scss'
import Button from '../button/button.component'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
  const { cart, addItemToCart, deleteItemFromCart, cartTotal } =
    useContext(CartContext)
  const navigate = useNavigate()
  const redirect = () => {
    navigate('/shop')
  }
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cart.map((product) => (
        <CheckoutItem cartItem={product} key={product.id} />
      ))}
      <div className="header-block">
        <span className="total">
          {cartTotal ? `Total: $${cartTotal}` : 'cart is empty'}
        </span>
      </div>
      {cart.length === 0 ? (
        <Button onClick={() => redirect()}>Go to shop</Button>
      ) : (
        <Button onClick={() => redirect()}>Keep Shopping</Button>
      )}
    </div>
  )
}

export default Checkout
