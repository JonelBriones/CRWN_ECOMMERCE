import { createAction } from '../../reducers/reducer.utils'
import { CART_ACTION_TYPES } from './cart.types'
export const setCart = (cart) => createAction(CART_ACTION_TYPES.SET_CART, cart)
export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)

const addItem = (cart, productObject) => {
  const exist = cart.find((product) => product.id === productObject.id)
  if (exist) {
    // console.log('Updating Product Qty', exist)
    return cart.map((product) =>
      product.id === productObject.id
        ? { ...exist, qty: exist.qty + 1 }
        : product
    )
  } else {
    // console.log('Adding item to cart', productObject)
    return [...cart, { ...productObject, qty: 1 }]
  }
}
export const addItemToCart = (cart, productObject) => {
  const updateCartItems = addItem(cart, productObject)
  return createAction(CART_ACTION_TYPES.SET_CART, updateCartItems)
}
const deleteItem = (cart, productObject) => {
  const exist = cart.find((product) => product.id === productObject.id)
  if (exist) {
    // console.log('Updating Product Qty', exist)
    return cart.map((product) =>
      product.id === productObject.id
        ? { ...exist, qty: exist.qty - 1 }
        : product
    )
  }
}
export const deleteItemFromCart = (cart, productObject) => {
  const updateCartItems = deleteItem(cart, productObject)
  return createAction(CART_ACTION_TYPES.SET_CART, updateCartItems)
}
const clearItem = (cart, productObject) => {
  // console.log('Clearing Product from cart', productObject)
  return cart.filter((product) => product.id !== productObject.id)
}
export const clearFromCart = (cart, productObject) => {
  const updateCartItems = clearItem(cart, productObject)
  return createAction(CART_ACTION_TYPES.SET_CART, updateCartItems)
}

// const setIsCartOpen = (bool) => {
//   dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool))
// }
