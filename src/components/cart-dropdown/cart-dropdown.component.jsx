import { Fragment } from 'react';

import Button from '../button/button';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  return (
    <Fragment>
      <section className='cart-dropdown-container'>
        <div className='cart-items' />
        <Button>GO TO CHECKOUT</Button>
      </section>
    </Fragment>
  );
};

export default CartDropdown;