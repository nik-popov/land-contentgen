import { useState, useEffect } from 'react';
import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, SimpleGrid, Image, Tag, HStack, Divider, Badge, Spinner } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { TimeIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/resources/blog")({
  component: BlogPage,
});

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  // Assuming first two posts are featured
  const featuredPosts = posts.slice(0, 2);
  const recentPosts = posts.slice(2, 8);

  // Calculate popular categories and tags dynamically
  const popularCategories = [...new Set(posts.map(post => post.category))]
    .map(category => ({
      name: category,
      count: posts.filter(post => post.category === category).length
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 6);

  const popularTags = [...new Set(posts.flatMap(post => post.tags))]
    .map(tag => ({
      name: tag,
      count: posts.filter(post => post.tags.includes(tag)).length
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 15)
    .map(tag => tag.name);

  return (
    <>
      {/* Blog Hero Section */}
      <Box py={16} bg="blue.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={6} fontWeight="medium">
            Data Insights Blog
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={10} maxW="800px" mx="auto">
            Expert articles, tutorials, and insights on web scraping, data collection,
            API integration, and proxy management best practices.
          </Text>

          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={10}>
            {featuredPosts.map(post => (
              <Link key={post.id} href={`/resources/blogs/${post.id}`} _hover={{ textDecoration: "none" }}>
                <Box
                  bg="white"
                  boxShadow="md"
                  borderRadius="lg"
                  overflow="hidden"
                  cursor="pointer"
                  _hover={{ bg: "gray.50" }}
                  transition="background-color 0.2s"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    h="250px"
                    w="full"
                    objectFit="cover"
                  />
                  <Box p={6}>
                    <HStack mb={4} spacing={3}>
                      <Badge colorScheme="blue" px={3} py={1} borderRadius="full">
                        {post.category}
                      </Badge>
                      <Flex align="center">
                        <TimeIcon mr={1} color="gray.500" boxSize={3} />
                        <Text fontSize="sm" color="gray.500">{post.readTime}</Text>
                      </Flex>
                    </HStack>

                    <Heading as="h3" size="lg" mb={3} fontWeight="medium" lineHeight="1.3">
                      {post.title}
                    </Heading>

                    <Text color="gray.600" mb={5} fontSize="md">
                      {post.excerpt}
                    </Text>

                    <Box>
                      {post.tags.map((tag, index) => (
                        <Tag
                          key={index}
                          size="sm"
                          mr={2}
                          mb={4}
                          colorScheme="gray"
                          variant="subtle"
                        >
                          {tag}
                        </Tag>
                      ))}
                      <Divider m={4} />
                      <Flex justify="flex-end" mb={4}>
                        <Text fontSize="sm" color="gray.500">{post.date}</Text>
                      </Flex>
                    </Box>
                  </Box>
                </Box>
              </Link>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Recent Posts Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading textAlign="center" as="h2" size="xl" mb={12} fontWeight="medium">
            Recent Articles
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {recentPosts.map(post => (
              <Link key={post.id} href={`/resources/blogs/${post.id}`} _hover={{ textDecoration: "none" }}>
                <Box
                  bg="white"
                  boxShadow="sm"
                  borderRadius="lg"
                  overflow="hidden"
                  height="100%"
                  cursor="pointer"
                  _hover={{ bg: "gray.50" }}
                  transition="background-color 0.2s"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    h="180px"
                    w="full"
                    objectFit="cover"
                  />
                  <Box p={5}>
                    <HStack mb={3} spacing={3}>
                      <Badge colorScheme="blue" px={2} py={0.5} borderRadius="full">
                        {post.category}
                      </Badge>
                      <Flex align="center">
                        <TimeIcon mr={1} color="gray.500" boxSize={3} />
                        <Text fontSize="xs" color="gray.500">{post.readTime}</Text>
                      </Flex>
                    </HStack>

                    <Heading as="h3" size="md" mb={3} fontWeight="medium" lineHeight="1.3">
                      {post.title}
                    </Heading>

                    <Text color="gray.600" mb={4} fontSize="sm" noOfLines={3}>
                      {post.excerpt}
                    </Text>

                    <Divider mb={4} />

                    <Flex justify="flex-end">
                      <Text fontSize="xs" color="gray.500">{post.date}</Text>
                    </Flex>
                  </Box>
                </Box>
              </Link>
            ))}
          </SimpleGrid>
        </Box>
      </Box>

      {/* Call to Action */}
      <Box py={16} bg="blue.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Master Web Scraping Today
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Download our free comprehensive guides and start building
            powerful web scrapers for your data extraction needs
          </Text>

          <Flex justify="center" gap={6} flexWrap="wrap">
            <Button
              size="lg"
              bg="white"
              color="blue.500"
              _hover={{ bg: "gray.100" }}
              as="a"
              href="/demo-request"
            >
              Request Demo
            </Button>

            <Button
              size="lg"
              variant="outline"
              borderColor="white"
              color="white"
              _hover={{ bg: "blue.700" }}
              as="a"
              href="https://dashboard.thedataproxy.com/signup"
            >
              Start Free Trial
            </Button>
          </Flex>
        </Box>
      </Box>

      {/* Blog Sidebar/Categories Section */}
      <Box py={16} bg="white">
        <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
          More From Our Blog
        </Heading>
        <Box maxW="1200px" mx="auto" px={4}>
          <Grid templateColumns={{ base: "1fr", lg: "7fr 3fr" }} gap={10}>
            <Box>
              <VStack spacing={8} align="stretch">
                {posts.slice(0, 4).map(post => (
                  <Link key={post.id} href={`/resources/blogs/${post.id}`} _hover={{ textDecoration: "none" }}>
                    <Flex
                      p={4}
                      bg="gray.50"
                      borderRadius="lg"
                      boxShadow="sm"
                      gap={5}
                      alignItems="center"
                      cursor="pointer"
                      _hover={{ bg: "gray.100" }}
                      transition="background-color 0.2s"
                    >
                      <Image
                        src={post.image}
                        alt={post.title}
                        w={{ base: "80px", md: "150px" }}
                        h={{ base: "80px", md: "100px" }}
                        objectFit="cover"
                        borderRadius="md"
                      />
                      <Box flex="1">
                        <HStack mb={1}>
                          <Badge colorScheme="blue" size="sm">{post.category}</Badge>
                          <Text fontSize="xs" color="gray.500">{post.date}</Text>
                          <Flex align="center">
                            <TimeIcon mr={1} color="gray.500" boxSize={3} m={2}/>
                            <Text fontSize="xs" color="gray.500">{post.readTime}</Text>
                          </Flex>
                        </HStack>
                        <Heading as="h3" size="md" fontWeight="medium" lineHeight="1.3" mb={2}>
                          {post.title}
                        </Heading>
                      </Box>
                    </Flex>
                  </Link>
                ))}
              </VStack>
            </Box>

            <Box>
              <VStack spacing={8} align="stretch">
                <Box bg="gray.50" p={6} borderRadius="lg" boxShadow="sm">
                  <Heading as="h3" size="md" mb={4} fontWeight="medium">
                    Popular Categories
                  </Heading>
                  <Divider mb={4} />
                  <VStack spacing={3} align="stretch">
                    {popularCategories.map((category, index) => (
                      <Flex key={index} justify="space-between" align="center">
                        <Link color="blue.600" fontWeight="medium">
                          {category.name}
                        </Link>
                        <Badge colorScheme="blue" borderRadius="full">
                          {category.count}
                        </Badge>
                      </Flex>
                    ))}
                  </VStack>
                </Box>

                <Box bg="gray.50" p={6} borderRadius="lg" boxShadow="sm">
                  <Heading as="h3" size="md" mb={4} fontWeight="medium">
                    Popular Tags
                  </Heading>
                  <Divider mb={4} />
                  <Flex flexWrap="wrap" gap={2}>
                    {popularTags.map((tag, index) => (
                      <Tag
                        key={index}
                        colorScheme="blue"
                        variant="subtle"
                        size="md"
                        borderRadius="full"
                        cursor="pointer"
                        _hover={{ bg: "blue.100" }}
                      >
                        {tag}
                      </Tag>
                    ))}
                  </Flex>
                </Box>

                <Box bg="blue.50" p={6} borderRadius="lg" boxShadow="sm">
                  <Heading as="h3" size="md" mb={4} fontWeight="medium">
                    Need Expert Help?
                  </Heading>
                  <Text mb={4}>
                    Our team can help you implement the strategies and techniques discussed in our articles.
                  </Text>
                  <Button colorScheme="blue" width="full" as="a" href="/contact-sales">
                    Contact Us
                  </Button>
                </Box>
              </VStack>
            </Box>
          </Grid>
        </Box>
      </Box>

      <Footer />
    </>
  );
}

export default BlogPage;