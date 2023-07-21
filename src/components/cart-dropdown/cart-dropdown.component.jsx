import { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <Fragment>
      <section className='cart-dropdown-container'>
        <div className='cart-items'>
          {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </div>
        <Link to='/checkout'>
          <Button>GO TO CHECKOUT</Button>
        </Link>
      </section>
    </Fragment>
  );
};

export default CartDropdown;