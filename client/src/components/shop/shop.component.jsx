import React, { useContext } from 'react'
import { CategoriesContext } from '../../contexts/categories.context'
import './shop.styles.scss'
import CategoryPreview from '../category-preview/category-preview.component'
import { Link } from 'react-router-dom'
const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext)
  console.log('shop', categoriesMap)

  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title]
        return <CategoryPreview products={products} title={title} key={title} />
      })}
    </div>
  )
}

export default Shop
