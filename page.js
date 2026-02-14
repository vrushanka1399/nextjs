import Image from "next/image";

export default async function ProductDetails({ params }) {
  const { id } = params;

  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.title}</h1>

      {/* Static image from public folder */}
      <Image
        src="/product.jpg"   // directly from public (NO /public prefix)
        alt="Product Image"
        width={400}
        height={300}
      />

      <p><strong>Price:</strong> ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}
