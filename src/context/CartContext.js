"use client";

import { createContext, useReducer, useContext } from "react";

const initialState = {
  id: "",
  shipping: 0,
  role: "",
  profile: {
    firstName: "",
    lastName: "",
    mobile: "",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ID":
      return { ...state, id: action.payload };
    case "SET_SHIPPING":
      return { ...state, shipping: action.payload };
    case "SET_ROLE":
      return { ...state, role: action.payload };
    case "SET_PROFILE":
      return { ...state, profile: action.payload };
    default:
      throw new Error("Invalid Action");
  }
};

const CartContext = createContext();

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return [state, dispatch];
};

export default CartProvider;
export { useCart };
