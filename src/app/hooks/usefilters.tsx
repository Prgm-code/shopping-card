import { useContext } from "react";
import { FiltersContext } from "../context/FiltersContext";
import { IProduct } from "../componentes/ShoppingList";

// Este hook ahora funcionará correctamente porque se usará dentro del Provider

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext)!;

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
