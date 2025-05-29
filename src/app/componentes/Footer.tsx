import React from "react";

function Footer({ filters }: { filters: unknown }) {
  return (
    <footer
      className="
    fixed
    bottom-4
    left-4
    bg-black
    bg-opacity-70
    p-2  
    px-6
    rounded-3xl
    opacity-95
    backdrop-blur-sm   
    "
    >
      <span className="text-sm text-[#09f] opacity-80"></span>
      <h4 className="m-0 flex">Filters</h4>
      <h5 className="m-0 flex">
        <pre>{JSON.stringify(filters, null, 2)}</pre>
      </h5>
    </footer>
  );
}

export default Footer;
