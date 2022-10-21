import { useEffect } from 'react'
import { createContext, useState } from 'react'

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cart: [],
  addItemToCart: () => {},
  clearFromCart: () => {},
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [cartTotal, setCartTotal] = useState(0)

  const cartCount = cart.reduce(
    (previousValue, currentValue) =>
      currentValue.qty ? previousValue + currentValue.qty : previousValue,
    0
  )
  const addItemToCart = (productObject) => {
    console.log('PRODUCT: ', productObject)
    const exist = cart.find((product) => product.id === productObject.id)
    console.log('Updating Product Qty', exist)
    if (exist) {
      setCart(
        cart.map((product) =>
          product.id === productObject.id
            ? { ...exist, qty: exist.qty + 1 }
            : product
        )
      )
    } else {
      console.log('Adding item to cart', productObject)
      setCart([...cart, { ...productObject, qty: 1 }])
    }
    console.log(cart)
    // setCartCount(cartCount + 1)
  }
  const deleteItemFromCart = (productObject) => {
    console.log('PRODUCT: ', productObject)
    const exist = cart.find((product) => product.id === productObject.id)
    console.log('Updating Product Qty', exist)
    if (exist) {
      setCart(
        cart.map((product) =>
          product.id === productObject.id
            ? { ...exist, qty: exist.qty - 1 }
            : product
        )
      )
    }
  }
  const clearFromCart = (productObject) => {
    setCart(cart.filter((product) => product.id !== productObject.id))
  }
  useEffect(() => {
    setCartTotal(
      cart.reduce(
        (previousValue, currentValue) =>
          currentValue.price * currentValue.qty + previousValue,
        0
      )
    )
  }, [cart])
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
