import React, { useState } from 'react'
import ProductCard from '../product-card/product-card.component'
import './category.styles.scss'
import { Link } from 'react-router-dom'
const Category = ({ products, title }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title">{title.toUpperCase()}</span>
        <Link to="/shop">
          <div>&#10094;</div>
        </Link>
      </h2>
      <div className="preview rg40">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Category
