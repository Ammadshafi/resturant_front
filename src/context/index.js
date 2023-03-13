import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [checkOut,setCheckOut]=useState(false)

  const addItem = (item) => {
    const checkObj = cartItems.some(obj => obj.menu_item_id === item.menu_item_id);
    if (checkObj){
      alert('item already exist')
    }
    else{
      setCartItems([...cartItems, item]);
    }
  };

  const removeItem = (item) => {
    setCartItems(cartItems.filter((i) => i.menu_item_id !== item.menu_item_id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => parseFloat(total) + parseFloat(item.item_total), 0);
  };
  const getCartLength = () => {

    const data =cartItems.length;
    return data
  };
  const openCheckOutForm=() => {
    setCheckOut(true)
  };
  const closeCheckOutForm=() => {
    setCheckOut(false)
  };

  return (
    <CartContext.Provider
      value={{ cartItems,checkOut, addItem, removeItem, clearCart, getCartTotal,getCartLength,openCheckOutForm,closeCheckOutForm }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;