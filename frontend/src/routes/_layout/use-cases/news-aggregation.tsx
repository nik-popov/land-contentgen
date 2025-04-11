import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon, DownloadIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/use-cases/news-aggregation")({
  component: NewsAggregationPage,
});

function NewsAggregationPage() {
  const aggregationFeatures = [
    { feature: "Topic Discovery", sources: "10,000+", metrics: "200+", useCases: "Trend identification, breaking news detection, niche coverage, topic clustering" },
    { feature: "Content Categorization", sources: "8,500+", metrics: "150+", useCases: "Content organization, personalized feeds, interest mapping, section creation" },
    { feature: "Source Reliability", sources: "9,000+", metrics: "120+", useCases: "Fact checking, bias detection, credibility scoring, source transparency" },
    { feature: "Personalization Engine", sources: "7,500+", metrics: "180+", useCases: "User preferences, reading history, interest profiles, adaptive recommendations" },
    { feature: "Media Monitoring", sources: "9,500+", metrics: "140+", useCases: "Brand mentions, public relations, reputation tracking, competitive analysis" },
    { feature: "Content Analysis", sources: "10,000+", metrics: "160+", useCases: "Sentiment tracking, key entity extraction, topic relevance, content summarization" }
  ];

  const platformFeatures = [
    { 
      title: "Comprehensive News Coverage", 
      description: "Aggregate content from thousands of sources including major publications, niche blogs, podcasts, and video content in one unified platform", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" 
    },
    { 
      title: "AI-Powered Content Analysis", 
      description: "Advanced natural language processing that intelligently categorizes, summarizes, and extracts key insights from news content", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png" 
    },
    { 
      title: "Real-time Alerts & Breaking News", 
      description: "Instant notifications for emerging stories, breaking news, and topics matching user interests or specified criteria", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Powerful Customization & Personalization", 
      description: "Deliver tailored news experiences with customizable feeds, smart recommendations, and personalized content discovery", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    }
  ];

  return (
    <>
      {/* News Aggregation Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            News Aggregation Solution
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Curate, structure, and present pertinent news from countless sources 
            using our advanced news aggregation platform.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Broad Content Sourcing</Heading>
              <Text>Gather news from thousands of worldwide sources, including top publishers, specialized blogs, trade journals, and multimedia formats. Our system indexes and organizes content instantly for thorough coverage.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Smart Content Processing</Heading>
              <Text>Utilize AI-driven analysis to automatically sort, summarize, and highlight key elements in articles. Our platform uncovers relationships between stories, delivering deeper insights for better comprehension.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Customized News Delivery</Heading>
              <Text>Provide personalized news feeds tailored to user interests, reading patterns, and trending topics. Our adaptive engine refines content suggestions over time to enhance relevance.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Core Advantages of News Aggregation
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">76%</StatNumber>
                <StatLabel>Increased Engagement</StatLabel>
              </Stat>
              <Text>
                Platform users experience a 76% boost in interaction rates 
                thanks to tailored content recommendations.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">89%</StatNumber>
                <StatLabel>Time Efficiency</StatLabel>
              </Stat>
              <Text>
                Businesses save up to 89% of the time previously spent on 
                manually collecting and sorting news content.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">50M+</StatNumber>
                <StatLabel>Articles Processed Daily</StatLabel>
              </Stat>
              <Text>
                Our system handles over 50 million articles each day 
                from more than 10,000 reputable global sources.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Aggregation Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Robust Aggregation Tools
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {aggregationFeatures.map((feature, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{feature.feature}</StatLabel>
                  <Flex justify="space-between" align="center">
                    <StatNumber color="red.600">{feature.sources}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Sources</Text>
                  </Flex>
                  <Flex justify="space-between" align="center" mt={1}>
                    <StatNumber color="red.400">{feature.metrics}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Metrics</Text>
                  </Flex>
                </Stat>
                <Text fontSize="sm" color="gray.600">
                  <Text as="span" fontWeight="bold">Key Applications:</Text> {feature.useCases}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      
      {/* Platform Features Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={4} fontWeight="medium">
            Cutting-Edge News Aggregation Features
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our platform blends state-of-the-art AI with extensive source integration 
            for unmatched news aggregation.
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Language Processing" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Sophisticated NLP Core</Heading>
                <Text color="gray.600">Context-sensitive language processing that decodes topics, sentiments, and connections across more than 40 languages.</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Semantic Analysis" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Semantic Grouping & Analysis</Heading>
                <Text color="gray.600">Smart clustering of related articles from various sources, automatically distinguishing primary and supporting narratives.</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Media Analysis" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Rich Media Insights</Heading>
                <Text color="gray.600">Derive insights from images, videos, podcasts, and other multimedia alongside conventional text-based content.</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="Trend Detection" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Trend Forecasting</Heading>
                <Text color="gray.600">AI-driven predictions that spot emerging stories and assess their potential impact and trajectory.</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Detailed Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            News Aggregation Capabilities
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Content Sourcing & Insights</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Live Content Tracking</Text> - Constant indexing and analysis of fresh content.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Emerging Topic Identification</Text> - Detect trending stories and new topics.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Source Trustworthiness</Text> - Assess the credibility and reliability of news sources.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Urgent News Notifications</Text> - Instant alerts for significant breaking stories.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Contextual Analysis</Text> - Grasp meaning and connections beyond simple keywords.</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Customization & Delivery</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Tailored News Feeds</Text> - Personalized content based on user preferences.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Automated News Summaries</Text> - Concise digests of key stories by topic.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Cross-Platform Delivery</Text> - Share content via web, mobile, email, and APIs.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Interaction Metrics</Text> - Monitor content engagement and user behavior.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Article Summarization</Text> - AI-crafted summaries for lengthy content.</Text>
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Case Studies Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            News Aggregation Achievements
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">Media Giant Boosts Audience Engagement</Heading>
              <Text mb={4}>
                A top-tier media company adopted our news aggregation solution to enhance its digital presence. 
                By leveraging our AI-driven discovery and personalization tools, they delivered highly relevant 
                content to readers, achieving a 143% increase in time spent on their platforms, a 78% rise in 
                article views per session, and a 37% improvement in subscriber loyalty within six months.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The platform's personalization features have redefined how we engage our audience. 
                We're now connecting readers with precisely the content they want, when they want it, 
                and the results are clear in our metrics."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">Corporate Intelligence Enhances Strategic Decisions</Heading>
              <Text mb={4}>
                A Fortune 500 firm's intelligence team deployed our platform to track industry news, competitors, 
                and global markets. Using our source reliability scoring and breaking news alerts, they identified 
                critical developments 4.2 hours faster than before, enabling quicker, more informed strategic choices 
                and positioning them ahead of competitors in seizing market opportunities.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "In our industry, speed is everything. The platform's ability to filter noise and highlight 
                critical news has given us a decisive edge in responding to market shifts and opportunities."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Source Coverage Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Extensive Source Integration
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our platform encompasses a vast array of leading publications and content providers.
          </Text>
          
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={4} mt={8}>
              <VStack>
                <Text fontWeight="bold" color="red.600">News Outlets</Text>
                <Text>7,500+</Text>
                <Text>Global Sources</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Trade Journals</Text>
                <Text>3,200+</Text>
                <Text>Specialized Sources</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Blogs & Independent</Text>
                <Text>25,000+</Text>
                <Text>Monitored</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Multimedia</Text>
                <Text>1,800+</Text>
                <Text>Video & Podcast</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Languages</Text>
                <Text>40+</Text>
                <Text>Supported</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Content Archive</Text>
                <Text>10+ Years</Text>
                <Text>Available</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="red.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Revolutionize Your News Experience
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Begin curating content from thousands of sources and deliver 
            customized news experiences at scale.
          </Text>
          
          <Flex justify="center" gap={6} flexWrap="wrap">
            <Button
              size="lg"
              bg="white"
              color="red.500"
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
              _hover={{ bg: "red.700" }}
              as="a"
              href="https://cloud.roamingproxy.com/signup"
            >
              Start Free Trial
            </Button>
          </Flex>
        </Box>
      </Box>
      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default NewsAggregationPage;