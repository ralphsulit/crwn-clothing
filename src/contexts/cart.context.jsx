import { createContext, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  //checking if productToAdd is in the cartItem
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  //if productToAdd is in the cartItem,
  //if true it will add productToAdd + 1
  //if false it will just add the product
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //if there is no match productToAdd will be add to cartItems
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// function hook to count all products in the cart using reduce
const countTotalProducts = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
};


export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => { },
  cartItems: [],
  addItemToCart: () => {} 
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  }

  const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, countTotalProducts}

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};