import React from "react";
import Filters from "./Filters";

function Header({
  setFilters,
}: {
  setFilters: React.Dispatch<
    React.SetStateAction<{
      category: string;
      minPrice: number;
    }>
  >;
}) {
  return (
    <header className=" w-full max-w-xl mx-auto flex flex-row  justify-between  p-4 border border-amber-400 rounded-xl mb-10">
      <Filters setFilters={setFilters} />
    </header>
  );
}

export default Header;
