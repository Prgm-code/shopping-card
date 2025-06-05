import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { ICart } from "../context/cartContext"; // Importamos la interfaz ICart

export const useCart = (): ICart => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("No context provided");
  }

  return context;
};
