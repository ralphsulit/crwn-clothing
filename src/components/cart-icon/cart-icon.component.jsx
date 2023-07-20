import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { Fragment, useContext, useEffect } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, countTotalProducts, cartItems } = useContext(CartContext);

  // toggles cart icon
  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  }

  // recalculate the total count whenever cartItems state changes
  const cartCount = countTotalProducts(cartItems);

  useEffect(() => {
    
  }, [cartCount]);

  return (
    <Fragment>  
      <section className='cart-icon-container' onClick={toggleIsCartOpen}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{cartCount}</span>
      </section>
    </Fragment>
  );
};

export default CartIcon;