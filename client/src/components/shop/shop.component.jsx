import React, { useEffect } from 'react'
import './shop.styles.scss'
import { useDispatch } from 'react-redux'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'

import { fetchCategoriesStart } from '../../store/categories/category.action'
import { Routes, Route } from 'react-router-dom'
import Category from '../category/category.component'
import CategoriesPreview from '../../routes/categories-preview/categories-preview.component'
const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategoriesStart())
  }, [])
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route element={<Category />} path=":title" />
    </Routes>
  )
}

export default Shop
