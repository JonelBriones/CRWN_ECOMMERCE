import { useReducer } from 'react'
import { useEffect } from 'react'
import { createContext, useState } from 'react'
import { USER_ACTION_TYPES } from './user.context'

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cart: [],
  addItemToCart: () => {},
  clearFromCart: () => {},
})

export const CART_ACTION_TYPES = {
  SET_CART: 'SET_CART',
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
}

const INITIAL_STATE = {
  cart: [],
  cartCount: 0,
  cartTotal: 0,
  isCartOpen: false,
}

const cartReducer = (state, action) => {
  const { type, payload } = action
  console.log('dispatch payload', payload)
  switch (type) {
    case CART_ACTION_TYPES.SET_CART:
      // console.log('payload', payload)
      return {
        ...state,
        ...payload,
      }
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      // console.log('payload', payload)
      return {
        ...state,
        isCartOpen: payload,
      }
    default:
      throw new Error(`Unhandled type of ${type} in cartReducer`)
  }
}

export const CartProvider = ({ children }) => {
  const [{ cart, cartCount, cartTotal, isCartOpen }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  )

  //  EACH TIME CART IS UPDATED RUN REDUCER
  const updateCartReducer = (newCart) => {
    const updateCartTotal = newCart.reduce(
      (previousValue, currentValue) =>
        currentValue.price * currentValue.qty + previousValue,
      0
    )
    const updateCartCount = newCart.reduce(
      (previousValue, currentValue) =>
        currentValue.qty ? previousValue + currentValue.qty : previousValue,
      0
    )
    dispatch({
      type: CART_ACTION_TYPES.SET_CART,
      payload: {
        cart: newCart,
        cartTotal: updateCartTotal,
        cartCount: updateCartCount,
      },
    })
  }

  const addItem = (cart, productObject) => {
    const exist = cart.find((product) => product.id === productObject.id)
    if (exist) {
      console.log('Updating Product Qty', exist)
      return cart.map((product) =>
        product.id === productObject.id
          ? { ...exist, qty: exist.qty + 1 }
          : product
      )
    } else {
      console.log('Adding item to cart', productObject)
      return [...cart, { ...productObject, qty: 1 }]
    }
  }
  const addItemToCart = (productObject) => {
    const updateCartItems = addItem(cart, productObject)
    updateCartReducer(updateCartItems)
  }
  const deleteItem = (cart, productObject) => {
    const exist = cart.find((product) => product.id === productObject.id)
    if (exist) {
      console.log('Updating Product Qty', exist)
      return cart.map((product) =>
        product.id === productObject.id
          ? { ...exist, qty: exist.qty - 1 }
          : product
      )
    }
  }
  const deleteItemFromCart = (productObject) => {
    const updateCartItems = deleteItem(cart, productObject)
    updateCartReducer(updateCartItems)
  }
  const clearItem = (cart, productObject) => {
    console.log('Clearing Product from cart', productObject)
    return cart.filter((product) => product.id !== productObject.id)
  }
  const clearFromCart = (productObject) => {
    const updateCartItems = clearItem(cart, productObject)
    updateCartReducer(updateCartItems)
  }

  const setIsCartOpen = (bool) => {
    dispatch({ type: 'SET_IS_CART_OPEN', payload: bool })
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        deleteItemFromCart,
        clearFromCart,
        cartTotal,
        cartCount,
      }}>
      {children}
    </CartContext.Provider>
  )
}
