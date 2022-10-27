import React, { useEffect } from 'react'
import './shop.styles.scss'
import CategoryPreview from '../category-preview/category-preview.component'
import { useDispatch } from 'react-redux'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'
import { useSelector } from 'react-redux'
import { setCategoriesMap } from '../../store/categories/category.action'
import { selectorCategoriesMap } from '../../store/categories/category.selector'
import { Routes, Route } from 'react-router-dom'
import Category from '../category/category.component'
const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()

      // console.log('CATEGORIES: ', categoryMap)
      dispatch(setCategoriesMap(categoryMap))
    }
    getCategoriesMap()
  }, [])
  const categoriesMap = useSelector(selectorCategoriesMap)
  return (
    // <Routes>
    //   <Route
    //     index
    //     element={<CategoryPreview categoriesMap={categoriesMap} />}
    //   />
    //   <Route
    //     element={<Category categoriesMap={categoriesMap} />}
    //     path="shop/:category_title"
    //   />
    // </Routes>
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title]
        return <CategoryPreview products={products} title={title} key={title} />
      })}
    </div>
  )
}

export default Shop
