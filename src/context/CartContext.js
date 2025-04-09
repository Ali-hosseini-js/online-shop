"use client";

import { sumProducts } from "src/helper/helper";
import { createContext, useReducer, useContext } from "react";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  discountCounter: 0,
  total: 0,
  cargo: "49000",
  checkout: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        const newItems = [
          ...state.selectedItems,
          { ...action.payload, quantity: 1 },
        ];
        return {
          ...state,
          selectedItems: newItems,
          checkout: false,
          ...sumProducts(newItems),
        };
      }
      return state;

    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: newSelectedItems,
        ...sumProducts(newSelectedItems),
      };

    case "INCREASE":
      const increaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const increasedItems = [...state.selectedItems];
      increasedItems[increaseIndex] = {
        ...increasedItems[increaseIndex],
        quantity: increasedItems[increaseIndex].quantity + 1,
      };
      return {
        ...state,
        selectedItems: increasedItems,
        ...sumProducts(increasedItems),
      };

    case "DECREASE":
      const decreaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const decreasedItems = [...state.selectedItems];
      decreasedItems[decreaseIndex] = {
        ...decreasedItems[decreaseIndex],
        quantity: decreasedItems[decreaseIndex].quantity - 1,
      };
      return {
        ...state,
        selectedItems: decreasedItems,
        ...sumProducts(decreasedItems),
      };

    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        discountCounter: 0,
        cargo: "49000",
        total: 0,
        ckeckout: true,
      };

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
