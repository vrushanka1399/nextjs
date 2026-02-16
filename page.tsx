import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products Store - Products List",
  description: "Browse all available products.",
};

export default async function ProductsPage() {
  const res = await fetch("https://dummyjson.com/products", {
    next: { revalidate: 60 }, // enables caching + ISR
  });

  const data = await res.json();

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data.products.map((product: any) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
