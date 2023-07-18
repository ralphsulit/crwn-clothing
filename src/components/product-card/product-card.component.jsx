import { Fragment, useContext } from 'react';

import Button from '../button/button';
import { CartContext } from '../../contexts/cart.context';

import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product)

  return (
    <Fragment>
      <section className='product-card-container'>
        <img src={imageUrl} alt={`${name}`} />
        <div className='footer'>
          <span className='name'>{name}</span>
          <span className='price'>{price}</span>
        </div>
        <Button buttonType='inverted' onClick={addProductToCart}>
          Add to cart
        </Button>
      </section>
    </Fragment>
  );
};

export default ProductCard; 