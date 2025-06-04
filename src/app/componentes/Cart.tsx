import React, { useId } from "react";
import { ShoppingCart, BrushCleaningIcon } from "lucide-react";
import Image from "next/image";

function Cart() {
  const cartCheckoutId = useId(); // ID único para el checkbox

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
          <li className="border-b border-gray-700 pb-4">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt="imagen"
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-2">
              <strong className="text-white">Iphone</strong> -{" "}
              <span className="text-gray-400">$1499</span>
            </div>
            <footer className="flex gap-2 justify-center items-center mt-2">
              <small className="text-gray-400">Qty: 1</small>
              <button className="p-2 bg-gray-700 hover:bg-gray-500 rounded text-white">
                +
              </button>
            </footer>
          </li>
        </ul>
        <button className="p-2 bg-gray-700 hover:bg-gray-500 rounded mt-4">
          <BrushCleaningIcon className="h-6 w-6 text-white" />
        </button>
      </aside>
    </>
  );
}

export default Cart;
