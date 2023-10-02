import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  isLoggedIn: false,
  addItem: (item) => {},
  removeItem: (id) => {},
  userLoggedIn: () => {},
  userLoggedOut: () => {},
});

export default CartContext;
