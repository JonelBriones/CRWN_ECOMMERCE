import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../product-card/product-card.component'
import './category.styles.scss'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Spinner from '../spinner/spinner.component'
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '../../store/categories/category.selector'
const Category = () => {
  const { title } = useParams()
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectCategoriesIsLoading)
  const [products, setProducts] = useState(categoriesMap[title])

  useEffect(() => {
    setProducts(categoriesMap[title])
  }, [title, categoriesMap])
  return (
    <div className="category-preview-container">
      {isLoading ? (
        <>
          <Spinner />
          {console.log('IS LOADING', isLoading)}
        </>
      ) : (
        products && (
          <>
            <h2>
              <Link to="/shop">
                <div>&#10094;</div>
              </Link>
              <span className="title">{title.toUpperCase()}</span>
            </h2>
            <div className="preview rg40">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )
      )}
    </div>
  )
}

export default Category
