/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useId } from "react";
import { useFilters } from "../hooks/usefilters";

function Filters() {
  const { filters, setFilters } = useFilters();

  const minPriceFilterId = useId();
  const categoryId = useId();

  const handleChangeMinPrice = (event: any) => {
    // setMinPrice(event.target.value);
    setFilters((prev: any) => ({
      ...prev,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event: any) => {
    console.log(event);
    setFilters((prev: any) => ({
      ...prev,
      category: event.target.value,
    }));
  };

  console.log(minPriceFilterId, categoryId);

  return (
    <section className="w-full flex flex-row  justify-between ">
      <div className="flex gap-x-2">
        <label htmlFor="price">Price</label>
        <input
          type="range"
          id={minPriceFilterId}
          min={0}
          max={1000}
          value={filters.minPrice}
          onChange={handleChangeMinPrice}
        />
        <span>{filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor="category">
          <select
            id={categoryId}
            className="bg-amber-900  p-1 rounded-md"
            onChange={handleChangeCategory}
          >
            <option value="all" className="  text-foreground">
              Todos
            </option>
            <option value="laptops" className="text-foreground">
              Portatiles
            </option>
            <option value="electronics" className=" text-foreground">
              electonicos
            </option>
            <option value="smartphones" className=" text-foreground">
              Celulares
            </option>
            <option value="jewelery" className=" text-foreground">
              joyeria
            </option>
            <option value="women's clothing" className=" text-foreground">
              Ropa de Mujer
            </option>
            <option value="men's clothing" className=" text-foreground">
              ropa de hombre
            </option>
          </select>
        </label>
      </div>
    </section>
  );
}

export default Filters;
