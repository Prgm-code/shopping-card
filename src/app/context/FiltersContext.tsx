import React, { createContext, useState } from "react";

interface IFilters {
  category: string;
  minPrice: number;
}

interface IFiltersContext {
  filters: IFilters;
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>;
}

export const FiltersContext = createContext<IFiltersContext | undefined>(
  undefined
);

export function FilterProviders({ children }: { children: React.ReactNode }) {
  const [filters, setFilters] = useState<IFilters>({
    // Tipamos el estado inicial
    category: "all",
    minPrice: 0,
  });

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}
