
import ProductCard from '../product-card/product-card.component';

import {CategoryPreviewContainer} from './category-preview.style.jsx';

const CategoryPreview = ({title, products}) => {
  return (
    <>
      <CategoryPreviewContainer>
        <h2>
          <span className='title'>{title.toUpperCase()}</span>
        </h2>
        <div className='preview'>
          {
            products
              .filter((_, i) => i < 4)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
          }
        </div>
      </CategoryPreviewContainer>
    </>
  );
};

export default CategoryPreview;