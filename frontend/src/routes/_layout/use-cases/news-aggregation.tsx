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
            News Aggregation Platform
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Discover, organize, and deliver relevant news content from thousands 
            of sources with our intelligent news aggregation technology.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Comprehensive Content Discovery</Heading>
              <Text>Access news from thousands of global sources including major publications, niche blogs, industry journals, and multimedia content. Our platform continuously indexes and categorizes content in real-time for complete coverage.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Intelligent Content Analysis</Heading>
              <Text>Leverage AI-powered content understanding that automatically categorizes, summarizes, and extracts key entities from articles. Our technology identifies connections between stories and provides contextual insights for deeper understanding.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Personalized News Experience</Heading>
              <Text>Deliver tailored news experiences with customizable feeds based on interests, reading history, and trending topics. Our personalization engine learns user preferences over time to continuously improve content relevance.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Key Benefits of News Aggregation
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">76%</StatNumber>
                <StatLabel>Higher Engagement</StatLabel>
              </Stat>
              <Text>
                Users of our platform show 76% higher content engagement
                rates through personalized content discovery.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">89%</StatNumber>
                <StatLabel>Time Saved</StatLabel>
              </Stat>
              <Text>
                Organizations using our platform save up to 89% of time
                previously spent manually sourcing and organizing news content.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">50M+</StatNumber>
                <StatLabel>Daily Articles Processed</StatLabel>
              </Stat>
              <Text>
                Our platform processes over 50 million news articles daily
                from more than 10,000 trusted global sources.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Aggregation Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Comprehensive Aggregation Capabilities
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
                  <Text as="span" fontWeight="bold">Common Use Cases:</Text> {feature.useCases}
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
            Advanced News Aggregation Technology
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our news aggregation platform combines cutting-edge AI with comprehensive source coverage
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Language Processing" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Advanced NLP Engine</Heading>
                <Text color="gray.600">Context-aware language processing that understands topics, sentiment, and content relationships across 40+ languages</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Semantic Analysis" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Semantic Analysis & Clustering</Heading>
                <Text color="gray.600">Intelligent grouping of related stories across sources with automatic identification of primary and secondary narratives</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Media Analysis" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Multimedia Content Analysis</Heading>
                <Text color="gray.600">Extract insights from images, videos, podcasts, and other rich media content alongside traditional text-based sources</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="Trend Detection" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Predictive Trend Detection</Heading>
                <Text color="gray.600">AI-powered forecasting that identifies emerging news stories and predicts their potential trajectory and importance</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Detailed Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            News Aggregation Features
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Content Discovery & Analysis</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Real-time Content Monitoring</Text> - Continuous indexing and processing of new content</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Advanced Topic Detection</Text> - Identify emerging topics and trending stories</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Source Credibility Scoring</Text> - Evaluate reliability and authority of content sources</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Breaking News Alerts</Text> - Instant notifications for major developing stories</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Semantic Content Analysis</Text> - Understand meaning and context beyond keywords</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Personalization & Distribution</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Personalized Feed Creation</Text> - Tailored news experiences based on user interests</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Custom News Digests</Text> - Automated summaries of important stories by topic</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Multi-channel Distribution</Text> - Deliver content via web, mobile, email, and API</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Engagement Analytics</Text> - Track content performance and user interactions</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Content Summarization</Text> - AI-generated summaries of lengthy articles</Text>
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
            News Aggregation Success Stories
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">Major Media Company Increases Reader Engagement</Heading>
              <Text mb={4}>
                A leading media organization implemented our news aggregation platform to enhance their 
                digital strategy. By leveraging our AI-powered content discovery and personalization 
                capabilities, they were able to deliver highly relevant news experiences to their audience. 
                This resulted in a 143% increase in time spent on their digital properties, a 78% increase 
                in article views per session, and a 37% improvement in subscriber retention rates within 
                the first six months of implementation.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The personalization capabilities of the platform have transformed how we connect with 
                our audience. We're now delivering the right content to the right people at the right time, 
                and the engagement metrics speak for themselves."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">Corporate Intelligence Team Improves Decision Making</Heading>
              <Text mb={4}>
                A Fortune 500 company's corporate intelligence department utilized our platform to monitor 
                news relevant to their industry, competitors, and global market conditions. By implementing 
                our source credibility scoring and breaking news detection features, they were able to 
                identify critical market developments on average 4.2 hours faster than their previous 
                system. This improved information flow enabled more agile strategic decision-making and 
                helped the company capitalize on market opportunities ahead of competitors.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "In our business, time is literally money. The platform's ability to cut through the noise 
                and surface truly important news has given us a significant competitive advantage in how 
                quickly we can respond to market changes and emerging opportunities."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Source Coverage Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Comprehensive Source Coverage
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our news aggregation platform covers all major publications and content sources
          </Text>
          
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={4} mt={8}>
              <VStack>
                <Text fontWeight="bold" color="red.600">News Publications</Text>
                <Text>7,500+</Text>
                <Text>Global Sources</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Industry Journals</Text>
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
            Transform Your News Discovery
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Start aggregating relevant content from thousands of sources
            and deliver personalized news experiences at scale
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