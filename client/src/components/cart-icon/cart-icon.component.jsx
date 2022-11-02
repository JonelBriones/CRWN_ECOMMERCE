import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartCount } from '../../store/cart/cart.selector'
import { selectIsCartOpen } from '../../store/cart/cart.selector'

import { setIsCartOpen } from '../../store/cart/cart.action'
const CartIcon = ({}) => {
  // const { cart, isCartOpen, cartCount, setIsCartOpen } = useContext(CartContext)
  const cartCount = useSelector(selectCartCount)
  const isCartOpen = useSelector(selectIsCartOpen)

  const dispatch = useDispatch()

  const toggle = () => {
    dispatch(setIsCartOpen(!isCartOpen))
  }
  return (
    <div className="cart-icon-container" onClick={toggle}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  )
}

export default CartIcon
