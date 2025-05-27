import ShoppingList from "./componentes/ShoppingList";

export default function Home() {
  // Iniciamos con el mock como valor por defecto

  // Intentamos sobreescribir con la llamada remota
  const remote = fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  }).then((res) => {
    if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
    return res.json(); // res.json() también devuelve promesa :contentReference[oaicite:2]{index=2}
  });

  // Si la remota falla, seguimos con el mock

  // Devolvemos directamente la promesa que resuelve nuestro JSX
  return remote.then((products) => (
    <main className="flex flex-col h-screen items-center justify-center">
      <header>
        <h1 className="text-2xl font-bold">Shopping Cart</h1>
      </header>
      <section>
        <ShoppingList products={products} />
      </section>
    </main>
  ));
}
