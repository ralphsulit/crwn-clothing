import { Fragment, useContext } from "react";

import { ChevronLeft, ChevronRight, XCircle } from 'react-feather'; 
import { CartContext } from "../../contexts/cart.context";

import './checkout-item.style.scss';

const CheckoutItem = ({ checkoutItem }) => {
  const { name, imageUrl, price, quantity, id } = checkoutItem;
  const { decreaseQuantity, increaseQuantity, removeItem } = useContext(CartContext);

  return (
    <Fragment>
      <section className="checkout-item-container">
        <div className="image-container">
          <img src={imageUrl} alt={`${name}`} />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
          <button onClick={() => decreaseQuantity(id)} className="arrow"><ChevronLeft /></button>
          {quantity}
          <button onClick={() => increaseQuantity(id)} className="arrow"><ChevronRight /></button>
        </span>
        <span className="price">${price}</span>
        <button onClick={() => removeItem(id)} className="remove-button"><XCircle /></button>
      </section>
    </Fragment>
  );
};

export default CheckoutItem;