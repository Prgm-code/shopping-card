"use client";
import React from "react";
import ShoppingList from "./ShoppingList";
import { IProduct } from "./ShoppingList";
import Header from "@/app/componentes/Header";
import Footer from "./Footer";
import { FilterProviders } from "../context/FiltersContext";

import { useFilters } from "../hooks/usefilters";
import Cart from "./Cart";

// Componente que consume el contexto y necesita estar dentro del Provider
function ShoppìngContent({ products }: { products: IProduct[] }) {
  const { filterProducts, filters } = useFilters(); // <--- Ahora esto funciona

  console.log(filters);

  return (
    <main className="flex flex-col h-screen items-center ">
      <header className="w-screen">
        <h1 className="text-2xl font-bold p-4 mt-3 text-center">
          Shopping Cart
        </h1>
        <Header />
      </header>

      <section>
        <ShoppingList products={filterProducts(products)} />
      </section>
      <Cart />
      <Footer filters={filters} />
    </main>
  );
}

// Este es el componente que exportas y envuelve el contenido con el Provider
function ShoppìngComponent({ products }: { products: IProduct[] }) {
  return (
    <FilterProviders>
      {" "}
      {/* <--- El proveedor envuelve todo lo que lo necesita */}
      <ShoppìngContent products={products} />
    </FilterProviders>
  );
}

export default ShoppìngComponent;
