import Image from "next/image";
import React from "react";

/**
 * Representa un producto tal como viene de Fakestore API
 */
export interface IProduct {
  /** Identificador único del producto */
  id: number;
  /** Título o nombre del producto */
  title: string;
  /** Precio en la moneda indicada */
  price: number;
  /** Descripción detallada */
  description: string;
  /** Categoría del producto */
  category: string;
  /** URL de la imagen del producto */
  image: string;
  /** Valoración del producto */
  rating: {
    /** Puntuación media (por ejemplo, de 0 a 5) */
    rate: number;
    /** Número de valoraciones recibidas */
    count: number;
  };
}

function ShoppingList({ products }: { products: IProduct[] }) {
  console.log(products);
  return (
    <ul className="w-full max-w-2xl flex flex-col gap-y-4 ">
      {products.map((product) => (
        <li key={product.id}>
          <div
            className="
            grid 
            grid-cols-1 
            sm:grid-cols-[250px_1fr] 
            gap-6 
            p-6 
            border border-gray-200 
            rounded-xl 
            shadow-md 
            hover:shadow-lg 
            hover: transform-view
            transition-shadow
         "
          >
            {/* Columna de la imagen: 250px fijos */}
            <div
              className="w-full h-[250px] relative rounded-lg overflow-hidden
cursor-pointer
transform
hover:scale-110
    hover:rotate-2  <!-- Aquí añadimos la rotación -->
    transition-transform
    duration-300
    ease-in-out
            "
            >
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Columna de contenido: ocupa el resto */}
            <div className="flex flex-col justify-between space-y-4">
              <h3 className="text-xl font-semibold ">{product.title}</h3>
              <div className="flex justify-between align-middle">
                {" "}
                <p className="text-lg font-medium text-indigo-600">
                  ${product.price}
                </p>{" "}
                <button
                  className="
                   p-2
                    border 
                    bg-amber-400
                     text-purple-800 
                     transform hover:scale-110     
                     transition-transform
                    duration-300
                    ease-in-out
                    hover:bg-amber-500
                    rounded-xl
                    text-sm
                    font-semibold"
                >
                  Add to card
                </button>{" "}
              </div>
              <p className="text-sm  line-clamp-4">{product.description}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ShoppingList;
