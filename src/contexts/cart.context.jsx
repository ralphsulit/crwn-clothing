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

  // function to decrease product quantity in the cart
  const decreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  // function to increase product quantity in the cart
  const increaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  // function to remove product in the cart
  const removeItem = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  // Calculate the total price of all items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, countTotalProducts, decreaseQuantity, increaseQuantity, removeItem, totalPrice}

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};