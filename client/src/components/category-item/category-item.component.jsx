import './category-item.styles.scss'
import { Link, redirect, useNavigate } from 'react-router-dom'
const CategoryItem = ({ category, id }) => {
  const navigate = useNavigate()
  const redirect = () => {
    navigate(`/shop/${category.title}`)
  }
  return (
    <div className="category-container" key={id} onClick={() => redirect()}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${category.imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{category.title}</h2>
        <p>Show Now</p>
      </div>
    </div>
  )
}

export default CategoryItem
