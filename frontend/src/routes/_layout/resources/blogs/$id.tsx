import { useState, useEffect } from 'react';
import { Box, Flex, Heading, Text, Image, Tag, HStack, Divider, Spinner } from "@chakra-ui/react";
import { createFileRoute, useParams, Link as RouterLink } from "@tanstack/react-router";
import { TimeIcon } from "@chakra-ui/icons";
import Footer from "../../../../components/Common/Footer";

function BlogPostDetails() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams({ from: "/_layout/resources/blogs/$id" });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/CobaltDataNet/static/refs/heads/main/blog-posts.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <Flex justify="center" align="center" minH="100vh">
        <Spinner size="xl" color="blue.500" />
      </Flex>
    );
  }

  if (error) {
    return (
      <Text fontSize="lg" textAlign="center" py={16} color="red.500">
        Error: {error}
      </Text>
    );
  }

  const post = posts.find(p => p.id === parseInt(id));
  if (!post) {
    return (
      <Text fontSize="lg" textAlign="center" py={16}>
        Post not found
      </Text>
    );
  }

  const paragraphs = post.content ? post.content.split("\n\n") : [post.excerpt];

  return (
    <Box>
      <Box py={16} bg="white">
        <Box maxW="800px" mx="auto" px={4}>
          <Image 
            src={post.image} 
            alt={post.title} 
            w="full" 
            h="400px" 
            objectFit="cover" 
            borderRadius="md" 
            mb={8} 
          />
          <Flex align="center" mb={4}>
            <Tag colorScheme="blue" mr={4} px={3} py={1} borderRadius="full">
              {post.category}
            </Tag>
            <Text fontSize="sm" color="gray.500">{post.date}</Text>
            <Flex align="center" ml={4}>
              <TimeIcon mr={1} color="gray.500" boxSize={3} />
              <Text fontSize="sm" color="gray.500">{post.readTime}</Text>
            </Flex>
          </Flex>
          <Heading as="h1" size="2xl" mb={6} fontWeight="medium" lineHeight="1.3">
            {post.title}
          </Heading>
          {paragraphs.map((paragraph, index) => (
            <Text key={index} fontSize="lg" color="gray.700" mb={4}>
              {paragraph}
            </Text>
          ))}
          <HStack spacing={2} mb={8}>
            {post.tags.map((tag, index) => (
              <Tag key={index} colorScheme="gray" variant="subtle" size="md">
                {tag}
              </Tag>
            ))}
          </HStack>
          <Divider mb={8} />
          <RouterLink 
            to="/resources/blogs" 
            style={{ color: "#3182CE", fontWeight: "medium", textDecoration: "none" }}
          >
            ← Back to Blog
          </RouterLink>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export const Route = createFileRoute("/_layout/resources/blogs/:id")({
  component: BlogPostDetails,
});

export default BlogPostDetails;