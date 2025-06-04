import React from "react";
import Filters from "./Filters";

function Header({}) {
  return (
    <header className=" w-full max-w-xl mx-auto flex flex-row  justify-between  p-4 border border-amber-400 rounded-xl mb-10">
      <Filters />
    </header>
  );
}

export default Header;
