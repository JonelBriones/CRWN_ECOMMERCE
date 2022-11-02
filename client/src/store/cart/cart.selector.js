import { createSelector } from 'reselect'

const selectCardReducer = (state) => state.cart

export const selectCart = createSelector(
  [selectCardReducer],
  (cartSlice) => cartSlice.cart
)
export const selectIsCartOpen = createSelector(
  [selectCardReducer],
  (cart) => cart.isCartOpen
)
export const selectCartCount = createSelector([selectCart], (cartItems) =>
  cartItems.reduce(
    (previousValue, currentValue) =>
      currentValue.qty ? previousValue + currentValue.qty : previousValue,
    0
  )
)
export const selectCartTotal = createSelector([selectCart], (cartItems) =>
  cartItems.reduce(
    (previousValue, currentValue) =>
      currentValue.price * currentValue.qty + previousValue,
    0
  )
)
// export const selectCartMap = createSelector([selectCart], (cart) =>
//   cart.reduce((acc, product) => {
//     console.log(product)
//     return acc
//   }, {})
// )

// const updateCartTotal = newCart.reduce(
//   (previousValue, currentValue) =>
//     currentValue.price * currentValue.qty + previousValue,
//   0
// )
// const updateCartCount = newCart.reduce(
//   (previousValue, currentValue) =>
//     currentValue.qty ? previousValue + currentValue.qty : previousValue,
//   0
// )
