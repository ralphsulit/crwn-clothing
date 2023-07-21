import { Fragment, useContext } from "react"
import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import './checkout.styles.scss'

const CheckOut = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <Fragment>
      <h1>Checkout Page</h1>
      <section className="checkout-container">
        {cartItems.map((item) => (
          <CheckoutItem key={item.id} checkoutItem={item} />
        ))}
      </section>
    </Fragment>
  );
};

export default CheckOut;