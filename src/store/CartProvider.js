import { useReducer } from 'react';

import CartContext from './CartContext';

const defaultCartState = {
  items: [],
  totalAmount: 0,
  isLoggedIn: false,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {

    // console.log("hey we reached here", typeof action.item.price, typeof action.item.amount);
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + Math.round(action.item.price * action.item.amount*10);

    // console.log("updatedTotalAmount",updatedTotalAmount)
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
     
    };
  }
  if(action.type === 'LOGIN') {
    console.log('first login')
    return {
      ...state,
      isLoggedIn: true,
    };
  }
  if(action.type === 'LOGOUT') {
    return {
      ...state,
      isLoggedIn: false,
    };
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD', item: item});
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type: 'REMOVE', id: id});
  };

  const userLoggedInHandler = () => {
    dispatchCartAction({type: 'LOGIN'});
  }

  const userLoggedOutHandler = () => {
    dispatchCartAction({type: 'LOGOUT'});
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    userLoggedIn: userLoggedInHandler,
    userLoggedOut: userLoggedOutHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};



export default CartProvider;