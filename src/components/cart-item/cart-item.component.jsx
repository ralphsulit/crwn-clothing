import { Fragment } from "react";

import {CartItemContainer, ItemDetails} from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <Fragment>
      <CartItemContainer>
        <img src={imageUrl} alt={`${name}`} />
        <ItemDetails>
          <span className="name">{name}</span>
          <span className="price">{quantity} x ${price}</span>
        </ItemDetails>
      </CartItemContainer>
    </Fragment>
  );
};

export default CartItem;