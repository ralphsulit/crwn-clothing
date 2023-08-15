
import { Fragment, useContext, useEffect } from 'react';

import { CartContext } from '../../contexts/cart.context';

import {CartIconContainer, ShoppingIcon, ItemCount} from './cart-icon.styles.jsx';

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
      <CartIconContainer onClick={toggleIsCartOpen}>
        <ShoppingIcon/>
        <ItemCount  >{cartCount}</ItemCount>
      </CartIconContainer>
    </Fragment>
  );
};

export default CartIcon;