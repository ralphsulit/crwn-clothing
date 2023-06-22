import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { Fragment } from 'react';
import './cart-icon.styles.scss';

const CartIcon = () => {
  return (
    <Fragment>  
      <div className='cart-icon-container'>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
      </div>
    </Fragment>
  );
};

export default CartIcon;