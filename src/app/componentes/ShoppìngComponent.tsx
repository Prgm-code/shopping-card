"use client";
import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import { IProduct } from "./ShoppingList";
import Header from "@/app/componentes/Header";
import Footer from "./Footer";

function useFilters() {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  const filterProducts = (products: IProduct[]) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };
  return { setFilters, filterProducts, filters };
}

function ShoppìngComponent({ products }: { products: IProduct[] }) {
  const { setFilters, filterProducts, filters } = useFilters();

  return (
    <main className="flex flex-col h-screen items-center ">
      <header className="w-screen">
        <h1 className="text-2xl font-bold p-4 mt-3 text-center">
          Shopping Cart
        </h1>
        <Header setFilters={setFilters} />
      </header>

      <section>
        <ShoppingList products={filterProducts(products)} />s
      </section>

      <Footer filters={filters} />
    </main>
  );
}

export default ShoppìngComponent;
