import React from 'react'
import Home from './routes/home/Home'
import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/navigation/Navigation'
import Authentication from './routes/authentication/authentication.component'

const Shop = () => {
  return <h1>Shop Page</h1>
}
function App() {
  return (
    <Routes>
      <Route element={<Navigation />} path="/">
        <Route element={<Home />} index />
        <Route element={<Shop />} path="shop" />
        <Route element={<Authentication />} path="auth" />
      </Route>
    </Routes>
  )
}

export default App
