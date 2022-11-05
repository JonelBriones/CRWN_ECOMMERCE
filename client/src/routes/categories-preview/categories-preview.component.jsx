import React, { useContext } from 'react'
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '../../store/categories/category.selector'
import { useSelector } from 'react-redux'
import CategoryPreview from '../../components/category-preview/category-preview.component'
import Spinner from '../../components/spinner/spinner.component'
const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectCategoriesIsLoading)
  console.log(categoriesMap)
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="shop-container">
          {Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title]
            return (
              <CategoryPreview products={products} title={title} key={title} />
            )
          })}
        </div>
      )}
    </>
  )
}

export default CategoriesPreview
