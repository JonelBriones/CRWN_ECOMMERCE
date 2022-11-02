import React, { useContext } from 'react'
import CheckoutItem from '../checkout-item/checkout-item.component'
import './checkout.styles.scss'
import Button from '../button/button.component'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCart, selectCartTotal } from '../../store/cart/cart.selector'

const Checkout = () => {
  // const { cart, addItemToCart, deleteItemFromCart, cartTotal } =
  //   useContext(CartContext)
  const cart = useSelector(selectCart)
  const cartTotal = useSelector(selectCartTotal)
  const navigate = useNavigate()
  const redirect = () => {
    navigate('/shop')
  }
  return (
    <>
      {cart.length !== 0 ? (
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
          <Button onClick={() => redirect()}>Keep Shopping</Button>
        </div>
      ) : (
        <div className="checkout-container">
          <h1>CART IS EMPTY</h1>
          <Button onClick={() => redirect()}>Go to shop</Button>
        </div>
      )}
    </>
  )
}

export default Checkout
