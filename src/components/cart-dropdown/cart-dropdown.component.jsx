import { Fragment, useState } from 'react';

import Button from '../button/button';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const [isActive, setActive] = useState(true);

  const toggleClass = () => {
    setActive(!isActive);
  }

  return (
    <Fragment>
      <section
        className={isActive ? 'cart-dropdown-container' : null}
        onClick={toggleClass}
      >
        <div className='cart-items' />
        <Button>GO TO CHECKOUT</Button>
      </section>
    </Fragment>
  );
};

export default CartDropdown;