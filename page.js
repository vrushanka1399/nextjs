import type { Metadata } from "next";

type Props = {
  params: { id: string };
};

async function getProduct(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 60 },
  });

  return res.json();
}

// ✅ Dynamic Metadata
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const product = await getProduct(params.id);

  return {
    title: `${product.title} - Products Store`,
    description: product.description,
  };
}

export default async function ProductDetail({ params }: Props) {
  const product = await getProduct(params.id);

  return (
    <div>
      <h1>{product.title}</h1>
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ width: "300px" }}
      />
      <p>{product.description}</p>
      <h3>Price: ${product.price}</h3>
    </div>
  );
}
