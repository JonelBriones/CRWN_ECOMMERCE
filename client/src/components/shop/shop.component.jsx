import React, { useEffect } from 'react'
import './shop.styles.scss'
import { useDispatch } from 'react-redux'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'

import { setCategories } from '../../store/categories/category.action'
import { Routes, Route } from 'react-router-dom'
import Category from '../category/category.component'
import CategoriesPreview from '../../routes/categories-preview/categories-preview.component'
const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments('categories')
      dispatch(setCategories(categoriesArray))
    }
    getCategoriesMap()
  }, [])
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route element={<Category />} path=":title" />
    </Routes>
  )
}

export default Shop
