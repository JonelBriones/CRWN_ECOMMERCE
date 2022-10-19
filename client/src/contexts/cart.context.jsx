import { createContext, useState } from 'react'

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
})

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  return (
    <CartContext.Provider value={{ cart, isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  )
}
