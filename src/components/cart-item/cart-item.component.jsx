import { Fragment } from "react";

import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <Fragment>
      <section className="cart-item-container">
        <img src={imageUrl} alt={`${name}`} />
        <div className="item-details">
          <span className="name">{name}</span>
          <span className="price">{quantity} x ${price}</span>
        </div>
      </section>
    </Fragment>
  );
};

export default CartItem;