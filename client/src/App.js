import React from 'react'
import Home from './routes/home/Home'
import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/navigation/Navigation'
import Authentication from './routes/authentication/authentication.component'
import Shop from './components/shop/shop.component'
import Checkout from './components/checkout/checkout.component'
import CategoriesPreview from './routes/categories-preview/categories-preview.component'

function App() {
  return (
    <Routes>
      <Route element={<Navigation />} path="/">
        <Route element={<Home />} index />
        <Route element={<Shop />} path="shop" />
        <Route element={<CategoriesPreview />} path="shop/:category_title" />
        <Route element={<Checkout />} path="checkout" />
        <Route element={<Authentication />} path="auth" />
      </Route>
    </Routes>
  )
}

export default App
