import { useState, useEffect } from 'react';
import { Box, Flex, Heading, Text, Image, Tag, HStack, Divider, Spinner, UnorderedList, ListItem } from "@chakra-ui/react";
import { createFileRoute, useParams, Link as RouterLink } from "@tanstack/react-router";
import { TimeIcon } from "@chakra-ui/icons";
import Footer from "../../../../components/Common/Footer";

export const Route = createFileRoute("/_layout/resources/blogs/$path")({
  component: BlogPostDetails,
});

function BlogPostDetails() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { path } = useParams({ from: "/_layout/resources/blogs/:path" });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/CobaltDataNet/static/refs/heads/main/blog-posts.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log('Parsed posts:', data);
        console.log('Post paths:', data.map(post => post.path));
        if (!Array.isArray(data)) throw new Error('Fetched data is not an array');
        setPosts(data);
      } catch (err) {
        setError(`Failed to load posts: ${err.message}`);
        console.error('Fetch or parse error:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const parseContent = (content) => {
    if (!content || typeof content !== 'string') {
      return [<Text key="no-content" fontSize="lg" color="gray.700" mb={4}>No content available</Text>];
    }
    const paragraphs = content.split('<br>');
    const elements = [];
    paragraphs.forEach((paragraph, index) => {
      if (!paragraph.trim()) return;
      if (paragraph.startsWith('# ')) {
        elements.push(<Heading key={`h1-${index}`} as="h1" size="xl" mb={4}>{paragraph.slice(2)}</Heading>);
      } else if (paragraph.startsWith('## ')) {
        elements.push(<Heading key={`h2-${index}`} as="h2" size="lg" mb={4} mt={6}>{paragraph.slice(3)}</Heading>);
      } else if (paragraph.startsWith('### ')) {
        elements.push(<Heading key={`h3-${index}`} as="h3" size="md" mb={4} mt={6}>{paragraph.slice(4)}</Heading>);
      } else if (paragraph.startsWith('- ')) {
        const listItems = paragraph.split('<br>').filter(line => line.trim());
        elements.push(
          <UnorderedList key={`ul-${index}`} mb={4}>
            {listItems.map((item, itemIndex) => (
              <ListItem key={`li-${itemIndex}`}>{formatText(item.startsWith('- ') ? item.slice(2) : item)}</ListItem>
            ))}
          </UnorderedList>
        );
      } else {
        elements.push(<Text key={`p-${index}`} fontSize="lg" color="gray.700" mb={4}>{formatText(paragraph)}</Text>);
      }
      if (index < paragraphs.length - 1) elements.push(<br key={`br-${index}`} />);
    });
    return elements.length > 0 ? elements : [<Text key="empty" fontSize="lg" color="gray.700" mb={4}>Content is empty</Text>];
  };

  const formatText = (text) => {
    if (!text) return '';
    const parts = [];
    let remainingText = text;
    let currentIndex = 0;
    while (remainingText.length > 0) {
      const boldStart = remainingText.indexOf('**');
      const italicStart = remainingText.indexOf('*');
      if (boldStart === -1 && italicStart === -1) { parts.push(remainingText); break; }
      const nextMarker = Math.min(boldStart === -1 ? Infinity : boldStart, italicStart === -1 ? Infinity : italicStart);
      if (nextMarker > 0) { parts.push(remainingText.slice(0, nextMarker)); remainingText = remainingText.slice(nextMarker); continue; }
      if (boldStart === 0) {
        const boldEnd = remainingText.indexOf('**', 2);
        if (boldEnd !== -1) {
          parts.push(<Text as="span" fontWeight="bold" key={`bold-${currentIndex}`}>{remainingText.slice(2, boldEnd)}</Text>);
          remainingText = remainingText.slice(boldEnd + 2);
          currentIndex++;
          continue;
        }
      }
      if (italicStart === 0) {
        const italicEnd = remainingText.indexOf('*', 1);
        if (italicEnd !== -1) {
          parts.push(<Text as="span" fontStyle="italic" key={`italic-${currentIndex}`}>{remainingText.slice(1, italicEnd)}</Text>);
          remainingText = remainingText.slice(italicEnd + 1);
          currentIndex++;
          continue;
        }
      }
      parts.push(remainingText[0]);
      remainingText = remainingText.slice(1);
    }
    return parts;
  };

  if (loading) return <Flex justify="center" align="center" minH="100vh"><Spinner size="xl" color="blue.500" /></Flex>;
  if (error) return <Text fontSize="lg" textAlign="center" py={16} color="red.500">{error}</Text>;
  if (!posts.length) return <Text fontSize="lg" textAlign="center" py={16}>No posts available</Text>;

  const fullPath = `/resources/blogs/${path}`;
  const post = posts.find(p => p.path === fullPath);
  if (!post) {
    return (
      <Box py={16} textAlign="center">
        <Text fontSize="lg" mb={4}>Post not found for path: {fullPath}</Text>
        <Text fontSize="sm" color="gray.500">Available paths: {posts.map(p => p.path).join(', ')}</Text>
      </Box>
    );
  }

  return (
    <Box>
      <Box py={16} bg="white">
        <Box maxW="800px" mx="auto" px={4}>
          <RouterLink 
            to="/resources/blog" 
            style={{ color: "#3182CE", fontWeight: "medium", textDecoration: "none", margin: "8px", display: "block" }}
          >
            ← Back to all
          </RouterLink>
          <Box>
            <Image src={post.image} alt={post.title || 'Untitled'} w="full" h="400px" objectFit="cover" borderRadius="md" mb={8} />
            <Flex align="center" mb={4}>
              <Tag colorScheme="blue" mr={4} px={3} py={1} borderRadius="full">{post.category || 'Uncategorized'}</Tag>
              <Text fontSize="sm" color="gray.500">{post.date || 'No date'}</Text>
              <Flex align="center" ml={4}>
                <TimeIcon mr={1} color="gray.500" boxSize={3} />
                <Text fontSize="sm" color="gray.500">{post.readTime || 'N/A'}</Text>
              </Flex>
            </Flex>
            <Heading as="h1" size="2xl" mb={6} fontWeight="medium" lineHeight="1.3">{post.title || 'Untitled'}</Heading>
            {parseContent(post.content)}
            <HStack spacing={2} mt={4} mb={8}>
              {post.tags && post.tags.map((tag, index) => (
                <Tag key={index} colorScheme="gray" variant="subtle" size="md">{tag}</Tag>
              ))}
            </HStack>
            <Divider mb={8} />
            <Text fontSize="sm" color="gray.500">Views: {post.views || 'N/A'}</Text>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default BlogPostDetails;