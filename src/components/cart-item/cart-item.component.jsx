import { Fragment } from "react";



import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
  const { name, quantity } = cartItem;

  return (
    <Fragment>
      <h2>{name}</h2>
      <span>{quantity}</span>
    </Fragment>
  );
};

export default CartItem;