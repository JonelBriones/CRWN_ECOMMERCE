import React, { useContext } from 'react'
import { selectCategoriesMap } from '../../store/categories/category.selector'
import { useSelector } from 'react-redux'
import CategoryPreview from '../../components/category-preview/category-preview.component'
const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap)

  console.log(categoriesMap)
  return (
    <>
      <div className="shop-container">
        {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title]
          return (
            <CategoryPreview products={products} title={title} key={title} />
          )
        })}
      </div>
    </>
  )
}

export default CategoriesPreview
