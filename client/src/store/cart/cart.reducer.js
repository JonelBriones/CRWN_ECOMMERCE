import { CART_ACTION_TYPES } from './cart.types'

export const INITIAL_STATE = {
  cart: [],
  isCartOpen: false,
}
export const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action
  switch (type) {
    case CART_ACTION_TYPES.SET_CART:
      return {
        ...state,
        cart: payload,
      }
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      }
    default:
      return state
    //   throw new Error(`Unhandled type ${type} in cartReducer`)
  }
}
