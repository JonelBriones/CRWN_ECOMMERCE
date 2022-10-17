import CategoryItem from '../category-item/category-item.component'
import './category-menu.styles.scss'

const CategoryMenu = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  )
}
export default CategoryMenu
