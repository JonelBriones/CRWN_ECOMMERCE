import './category-item.styles.scss'
const CategoryItem = ({ category, id }) => {
  return (
    <div className="category-container" key={id}>
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
