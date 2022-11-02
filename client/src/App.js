import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from './store/user/user.action'
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from './utils/firebase/firebase.utils'
import { Routes, Route } from 'react-router-dom'

import Home from './routes/home/Home'
import Navigation from './routes/navigation/Navigation'
import Authentication from './routes/authentication/authentication.component'
import Shop from './components/shop/shop.component'
import Checkout from './components/checkout/checkout.component'

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      dispatch(setCurrentUser(user))
      if (window.location.pathname === '/auth') {
        navigate('/')
      }
    })
    return unsubscribe
  }, [])
  return (
    <Routes>
      <Route element={<Navigation />} path="/">
        <Route index element={<Home />} />
        <Route element={<Shop />} path="shop/*" />
        <Route element={<Checkout />} path="checkout" />
        <Route element={<Authentication />} path="auth" />
      </Route>
    </Routes>
  )
}

export default App
