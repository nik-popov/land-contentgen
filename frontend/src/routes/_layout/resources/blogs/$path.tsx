import { useState, useEffect } from "react";
import { useParams } from "@tanstack/react-router";

function BlogPostDetails() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { '*': slug } = useParams({ from: "/_layout/resources/blogs/*" });

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("https://example.com/blog-posts.json");
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading) return <div>Loading...</div>;

  const fullPath = `/resources/blogs/${slug}`;
  const post = posts.find(p => p.path === fullPath);

  if (!post) return <div>Post not found: {fullPath}</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export const Route = createFileRoute("/_layout/resources/blogs/*")({
  component: BlogPostDetails,
});