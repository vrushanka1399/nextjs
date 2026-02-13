import Link from "next/link";

export default function ProductsPage() {
  return (
    <div>
      <h1>Products Page</h1>
      <p>Select a product:</p>

      <ul>
        {Array.from({ length: 10 }, (_, index) => (
          <li key={index}>
            <Link href={`/products/${index + 1}`}>
              Product {index + 1}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
