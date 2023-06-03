import './category-menu.scss';
import CategoryItem from '../category-item/category-item';

const CategoryMenu = ({categories}) => {
  return (
    <div>
      <div className='category-menu'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>   
    </div>
  );
};

export default CategoryMenu;