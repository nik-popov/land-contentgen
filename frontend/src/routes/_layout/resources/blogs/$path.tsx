import { createFileRoute, useParams } from "@tanstack/react-router";

export const Route = createFileRoute("/resources/blogs/*")({
  component: BlogPostDetails,
});

function BlogPostDetails() {
  const { "*": slug } = useParams({ from: "/resources/blogs/*" });
  const fullPath = `/resources/blogs/${slug}`;
  return <div>Displaying blog post for: {fullPath}</div>;
}