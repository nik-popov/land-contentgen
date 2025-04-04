import { Box, Flex, Heading, Text, Image, Tag, HStack, Divider } from "@chakra-ui/react";
import { createFileRoute, Link as RouterLink, useParams } from "@tanstack/react-router";
import { TimeIcon } from '@chakra-ui/icons';

// Sample posts array with full content (extended from BlogPage data)
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
    tags: ["Web Scraping", "JavaScript", "Browser Automation", "Puppeteer"]
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
    tags: ["Proxy Management", "IP Rotation", "Data Collection", "Scaling"]
  },
  {
    id: 3,
    title: "Building Resilient Data Pipelines That Scale Automatically",
    excerpt: "How to design data collection and processing pipelines that handle failures gracefully and scale up or down based on workload demands.",
    content: "Resilient data pipelines are essential for modern data-driven applications. This guide walks you through designing systems that adapt to changing demands.\n\nWe’ll cover fault-tolerant architectures, auto-scaling mechanisms, and monitoring strategies.\n\nLearn how to keep your pipelines running smoothly under any condition.",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    category: "Architecture",
    readTime: "9 min read",
    date: "Mar 2, 2025",
    views: "8.4K",
    tags: ["Data Pipeline", "Resilience", "Auto-scaling", "Cloud Architecture"]
  },
  {
    id: 4,
    title: "REST vs. GraphQL: Choosing the Right API for Your Data Needs",
    excerpt: "An in-depth comparison of REST and GraphQL APIs for data collection, with practical advice on when to use each approach.",
    content: "Choosing between REST and GraphQL can make or break your data strategy. This article compares the two in depth.\n\nWe’ll analyze their strengths and weaknesses, from flexibility to performance.\n\nGet practical tips on selecting the right API for your project.",
    image: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "API",
    readTime: "7 min read",
    date: "Feb 28, 2025",
    views: "10.1K",
    tags: ["REST", "GraphQL", "API Design", "Data Integration"]
  },
  {
    id: 5,
    title: "Ethical Web Scraping: Best Practices and Legal Considerations",
    excerpt: "Guidelines for responsible data collection that respects website terms of service, user privacy, and relevant legal frameworks.",
    content: "Ethical web scraping is more important than ever. This article outlines how to scrape responsibly.\n\nWe’ll discuss legal considerations, including copyright and privacy laws.\n\nFollow these best practices to stay compliant and respectful.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Best Practices",
    readTime: "10 min read",
    date: "Feb 22, 2025",
    views: "13.6K",
    tags: ["Ethics", "Legal", "Compliance", "Best Practices"]
  },
  {
    id: 6,
    title: "Real-time Data Processing with Kafka and Elasticsearch",
    excerpt: "How to build streaming data pipelines that process and analyze large volumes of data in real-time using Kafka and Elasticsearch.",
    content: "Real-time data processing unlocks new possibilities. This guide shows you how to use Kafka and Elasticsearch together.\n\nWe’ll cover setting up streams, indexing data, and optimizing performance.\n\nBuild a pipeline that delivers insights as they happen.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Technology",
    readTime: "12 min read",
    date: "Feb 18, 2025",
    views: "9.3K",
    tags: ["Kafka", "Elasticsearch", "Real-time", "Stream Processing"]
  }
];

// Define the route
export const Route = createFileRoute("/_layout/resources/blog/:id")({
  component: BlogPostDetails,
});

// BlogPostDetails component
function BlogPostDetails() {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) {
    return <Text fontSize="lg" textAlign="center" py={16}>Post not found</Text>;
  }

  // Split content into paragraphs
  const paragraphs = post.content.split('\n\n');

  return (
    <Box py={16} bg="white">
      <Box maxW="800px" mx="auto" px={4}>
        {/* Post Image */}
        <Image
          src={post.image}
          alt={post.title}
          w="full"
          h="400px"
          objectFit="cover"
          borderRadius="md"
          mb={8}
        />

        {/* Metadata */}
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

        {/* Title */}
        <Heading as="h1" size="2xl" mb={6} fontWeight="medium" lineHeight="1.3">
          {post.title}
        </Heading>

        {/* Content */}
        {paragraphs.map((para, index) => (
          <Text key={index} fontSize="lg" color="gray.700" mb={4}>
            {para}
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
          style={{ color: "#3182CE", fontWeight: "medium", textDecoration: "none" }}
        >
          ← Back to Blog
        </RouterLink>
      </Box>
    </Box>
  );
}

export default BlogPostDetails;