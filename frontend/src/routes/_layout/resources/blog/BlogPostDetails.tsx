import { Box, Flex, Heading, Text, Image, Tag, HStack, Divider } from "@chakra-ui/react";
import { createFileRoute, useParams, Link as RouterLink } from "@tanstack/react-router";
import { TimeIcon } from "@chakra-ui/icons";

// Static blog posts data
const posts = [
  {
    id: 1,
    title: "Advanced Techniques for Web Scraping JavaScript-Heavy Websites",
    excerpt: "Learn how to effectively scrape data from modern web applications that rely heavily on JavaScript rendering, dynamic content loading, and anti-bot measures.",
    content: "Web scraping has evolved significantly with the rise of JavaScript-heavy websites. In this article, we explore advanced techniques to tackle modern web applications.\n\nFirst, we’ll cover browser automation tools like Puppeteer, which allow you to render dynamic content. Next, we’ll discuss strategies to bypass anti-bot measures, such as CAPTCHAs and IP blocking.\n\nFinally, we’ll look at best practices for maintaining performance and respecting website terms of service.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Technical",
    readTime: "8 min read",
    date: "Mar 15, 2025",
    views: "15.2K",
    tags: ["Web Scraping", "JavaScript", "Browser Automation", "Puppeteer"],
  },
  {
    id: 2,
    title: "Proxy Rotation Strategies for Large-Scale Data Collection",
    excerpt: "Discover how to build robust proxy rotation systems that maintain high availability, prevent IP blocking, and optimize for both performance and cost-effectiveness.",
    content: "Proxy rotation is critical for large-scale data collection. This article dives into building systems that keep your scrapers running smoothly.\n\nWe’ll start with the basics of proxy selection and move into advanced rotation algorithms. Then, we’ll explore how to balance cost and performance.\n\nBy the end, you’ll have a blueprint for a scalable proxy management system.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    category: "Strategy",
    readTime: "11 min read",
    date: "Mar 8, 2025",
    views: "12.8K",
    tags: ["Proxy Management", "IP Rotation", "Data Collection", "Scaling"],
  },
  // Additional posts can be added here
];

// BlogPostDetails component
function BlogPostDetails() {
  // Get the blog post ID from the URL parameters
  const { id } = useParams();

  // Find the post matching the ID
  const post = posts.find((p) => p.id === parseInt(id));

  // Handle case where post is not found
  if (!post) {
    return (
      <Text fontSize="lg" textAlign="center" py={16}>
        Post not found
      </Text>
    );
  }

  // Split content into paragraphs based on double newlines
  const paragraphs = post.content.split("\n\n");

  return (
    <Box py={16} bg="white">
      <Box maxW="800px" mx="auto" px={4}>
        {/* Blog Post Image */}
        <Image
          src={post.image}
          alt={post.title}
          w="full"
          h="400px"
          objectFit="cover"
          borderRadius="md"
          mb={8}
        />

        {/* Metadata (Category, Date, Read Time) */}
        <Flex align="center" mb={4}>
          <Tag colorScheme="blue" mr={4} px={3} py={1} borderRadius="full">
            {post.category}
          </Tag>
          <Text fontSize="sm" color="gray.500">
            {post.date}
          </Text>
          <Flex align="center" ml={4}>
            <TimeIcon mr={1} color="gray.500" boxSize={3} />
            <Text fontSize="sm" color="gray.500">
              {post.readTime}
            </Text>
          </Flex>
        </Flex>

        {/* Post Title */}
        <Heading as="h1" size="2xl" mb={6} fontWeight="medium" lineHeight="1.3">
          {post.title}
        </Heading>

        {/* Post Content */}
        {paragraphs.map((paragraph, index) => (
          <Text key={index} fontSize="lg" color="gray.700" mb={4}>
            {paragraph}
          </Text>
        ))}

        {/* Tags */}
        <HStack spacing={2} mb={8}>
          {post.tags.map((tag, index) => (
            <Tag key={index} colorScheme="gray" variant="subtle" size="md">
              {tag}
            </Tag>
          ))}
        </HStack>

        {/* Divider and Back Link */}
        <Divider mb={8} />
        <RouterLink
          to="/resources/blog"
          style={{
            color: "#3182CE",
            fontWeight: "medium",
            textDecoration: "none",
          }}
        >
          ← Back to Blog
        </RouterLink>
      </Box>
    </Box>
  );
}

// Define the route for the blog post details page
export const Route = createFileRoute("/resources/blog/:id")({
  component: BlogPostDetails,
});

// Export the component as default
export default BlogPostDetails;