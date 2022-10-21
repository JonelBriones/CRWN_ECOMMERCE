import React, { useContext } from 'react'
import { CategoriesContext } from '../../contexts/categories.context'
import Category from '../../components/category/category.component'
import { Link, useParams } from 'react-router-dom'
const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext)
  const { category_title } = useParams()
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title]
        if (title === category_title)
          return <Category products={products} title={title} key={title} />
      })}
    </>
  )
}

export default CategoriesPreview
