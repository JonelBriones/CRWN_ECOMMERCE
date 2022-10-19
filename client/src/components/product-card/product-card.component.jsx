import React from 'react'
import { useContext } from 'react'
import '../product-card/product-card.styles.scss'
import Button from '../button/button.component'
const ProductCard = ({ product }) => {
  const { name, price, id, imageUrl } = product
  return (
    <div key={id} className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted"> Add to cart</Button>
    </div>
  )
}

export default ProductCard
