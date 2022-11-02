import React from 'react'
import '../product-card/product-card.styles.scss'
import Button from '../button/button.component'
import { addItemToCart } from '../../store/cart/cart.action'
import { useDispatch, useSelector } from 'react-redux'
import { selectCart } from '../../store/cart/cart.selector'
const ProductCard = ({ product }) => {
  const { name, price, id, imageUrl } = product
  const cart = useSelector(selectCart)
  const dispatch = useDispatch()
  const addProductToCart = () => dispatch(addItemToCart(cart, product))
  return (
    <div key={id} className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button
        buttonType="inverted"
        onClick={() => addProductToCart(cart, product)}>
        {' '}
        Add to cart
      </Button>
    </div>
  )
}

export default ProductCard
