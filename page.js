export default async function ProductDetails({ params }) {
  const { id } = params;

  const res = await fetch(
    `https://dummyjson.com/products/${id}`,
    {
      next: { revalidate: 60 },
    }
  );

  const product = await res.json();

  return (
    <div>
      <h2>{product.title}</h2>

      <img
        src={product.thumbnail}
        alt={product.title}
        width="200"
      />

      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p>{product.description}</p>
    </div>
  );
}
