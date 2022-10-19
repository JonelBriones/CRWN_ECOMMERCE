import { useState, useEffect, createContext } from 'react'
import PRODUCTS from '../components/shop/shop-data.json'
export const ProductsContext = createContext({
  products: [],
})

export const ProductProvider = ({ children }) => {
  const [products, setProduct] = useState(PRODUCTS)
  //   const fakeProducts = { products }
  console.log('PRODUCTS: ', products)
  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  )
}
