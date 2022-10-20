import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import CheckoutItem from '../checkout-item/checkout-item.component'
import './checkout.styles.scss'
const Checkout = () => {
  const { cart, addItemToCart, deleteItemFromCart } = useContext(CartContext)
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
      <span className="total"></span>
    </div>
  )
}

export default Checkout
