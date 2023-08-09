import { Fragment, useContext } from "react";

import { ChevronLeft, ChevronRight, XCircle } from 'react-feather'; 
import { CartContext } from "../../contexts/cart.context";

import { CheckoutItemContainer, ImageContainer } from './checkout-item.style.jsx';

const CheckoutItem = ({ checkoutItem }) => {
  const { name, imageUrl, price, quantity, id } = checkoutItem;
  const { decreaseQuantity, increaseQuantity, removeItem } = useContext(CartContext);

  const increaseQuantityHandler = () => increaseQuantity(id);
  const decreaseQuantityHandler = () => decreaseQuantity(id);
  const removeItemHandler = () => removeItem(id);

  return (
    <Fragment>
      <CheckoutItemContainer>
        <ImageContainer>
          <img src={imageUrl} alt={`${name}`} />
        </ImageContainer>
        <span className="name">{name}</span>
        <span className="quantity">
          <button onClick={decreaseQuantityHandler} className="arrow"><ChevronLeft /></button>
          <span className="value">{quantity}</span>
          <button onClick={increaseQuantityHandler} className="arrow"><ChevronRight /></button>
        </span>
        <span className="price">${price}</span>
        <button onClick={removeItemHandler} className="remove-button"><XCircle /></button>
      </CheckoutItemContainer>
    </Fragment>
  );
};

export default CheckoutItem;