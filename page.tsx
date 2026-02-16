import { Metadata } from "next";

type Props = {
  params: { id: string };
};

// ?? Dynamic metadata function
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const postId = params.id;

  return {
    title: `Post ${postId} - My Blog`,
    description: `This is the blog post number ${postId}`,
  };
}

export default function PostPage({ params }: Props) {
  return (
    <div>
      <h1>Post {params.id}</h1>
      <p>This page has dynamic metadata.</p>
    </div>
  );
}
