import { Fragment, useContext } from "react";

import { ChevronLeft, ChevronRight, XCircle } from 'react-feather'; 
import { CartContext } from "../../contexts/cart.context";

import './checkout-item.style.scss';

const CheckoutItem = ({ checkoutItem }) => {
  const { name, imageUrl, price, quantity, id } = checkoutItem;
  const { decreaseQuantity, increaseQuantity, removeItem  } = useContext(CartContext);

  return (
    <Fragment>
      <section className="checkout-item-container">
        <img src={imageUrl} alt={`${name}`} />
        <span>{name}</span>
        <span className="checkout-item-quantity">
          <button onClick={() => decreaseQuantity(id)}><ChevronLeft /></button>
          {quantity}
          <button onClick={() => increaseQuantity(id)}><ChevronRight /></button>
        </span>
        <span>{price}</span>
        <button onClick={() => removeItem(id)}><XCircle /></button>
      </section>
    </Fragment>
  );
};

export default CheckoutItem;