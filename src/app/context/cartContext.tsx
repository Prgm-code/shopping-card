import React, { createContext, useReducer } from "react";
import { IProduct } from "../componentes/ShoppingList";

export interface ICartProduct extends IProduct {
  quantity: number;
}

export interface ICart {
  cart: ICartProduct[];
  addToCart: (product: IProduct) => void;
  cleanCart: () => void;
  removeFromCart: (product: IProduct) => void;
}

const initialState = [] as ICartProduct[];

interface IAddCartAction {
  type: "ADD_TO_CART" | "REMOVE_FROM_CART" | "CLEAR_CART";
  payload: IProduct;
}
interface IAddClearAction {
  type: "CLEAR_CART";
  payload: undefined;
}
type CartAction = IAddCartAction | IAddClearAction;

const reducer = (state: ICartProduct[], action: CartAction): ICartProduct[] => {
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case "ADD_TO_CART": {
      const { id } = actionPayload;
      const productInCartIndex = state.findIndex((item) => item.id === id);

      if (productInCartIndex >= 0) {
        const newCart = structuredClone(state);
        newCart[productInCartIndex].quantity += 1;
        return newCart;
      }
      return [
        ...state,
        {
          ...actionPayload,
          quantity: 1,
        },
      ];
    }
    case "REMOVE_FROM_CART": {
      const { id } = actionPayload;

      return state.filter((item) => item.id !== id);
    }
    case "CLEAR_CART": {
      return initialState;
    }
  }
};

// Crear el contexto
export const CartContext = createContext<ICart | null>(null);

// Crear el provider
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product: IProduct) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  const removeFromCart = (product: IProduct) =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });

  const cleanCart = () =>
    dispatch({
      type: "CLEAR_CART",
      payload: undefined,
    });

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart: addToCart,
        cleanCart: cleanCart,
        removeFromCart: removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
