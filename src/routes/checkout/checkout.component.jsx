import { Fragment, useContext } from "react"
import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import './checkout.styles.scss'

const CheckOut = () => {
  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <Fragment>
      <section className="checkout-container">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map((item) => (
          <CheckoutItem key={item.id} checkoutItem={item} />
        ))}
        <span className="total">Total Price: ${totalPrice}</span>
      </section>
    </Fragment>
  );
};

export default CheckOut;