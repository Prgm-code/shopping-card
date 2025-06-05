import React, { useId } from "react";
import { ShoppingCart, BrushCleaningIcon } from "lucide-react";
import Image from "next/image";
import { useCart } from "../hooks/useCart";

function Cart() {
  const cartCheckoutId = useId(); // ID único para el checkbox

  const { cart, cleanCart, addToCart } = useCart();

  return (
    <>
      {/* Botón para abrir el carrito esto esta gestionado por ccs*/}
      <label
        htmlFor={cartCheckoutId}
        className="cart-button flex items-center justify-center bg-blue-600 cursor-pointer rounded-full h-10 w-10 absolute right-2 top-2 transition-all duration-300 hover:scale-110 z-[9999]"
      >
        <ShoppingCart className="h-6 w-6 text-white" />
      </label>

      {/* Input para controlar el estado del carrito */}
      <input id={cartCheckoutId} type="checkbox" className="hidden" />

      {/* Carrito */}
      <aside className="cart bg-black p-8 fixed right-0 top-0 w-[200px] transition-all duration-300 hidden">
        <ul>
          {cart.map((product) => (
            <li className="border-b border-gray-700 pb-4" key={product.id}>
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-2">
                <strong className="text-white">{product.title}</strong> -{" "}
                <span className="text-gray-400">{product.price}</span>
              </div>
              <footer className="flex gap-2 justify-center items-center mt-2">
                <small className="text-gray-400">Qty: {product.quantity}</small>
                <button
                  className="p-2 bg-gray-700 hover:bg-gray-500 rounded text-white"
                  onClick={() => addToCart(product)}
                >
                  +
                </button>
              </footer>
            </li>
          ))}
        </ul>
        <button
          className="p-2 bg-gray-700 hover:bg-gray-500 rounded mt-4"
          onClick={() => cleanCart()}
        >
          <BrushCleaningIcon className="h-6 w-6 text-white" />
        </button>
      </aside>
    </>
  );
}

export default Cart;
