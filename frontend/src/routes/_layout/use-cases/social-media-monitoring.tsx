import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon, DownloadIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/use-cases/social-media-monitoring")({
  component: SocialMediaMonitoringPage,
});

function SocialMediaMonitoringPage() {
  const monitoringFeatures = [
    { feature: "Brand Mentions", platforms: "35+", metrics: "180+", useCases: "Brand health, crisis detection, competitive analysis, engagement tracking" },
    { feature: "Sentiment Analysis", platforms: "30+", metrics: "120+", useCases: "Customer satisfaction, brand perception, reaction monitoring, trend analysis" },
    { feature: "Competitor Tracking", platforms: "28+", metrics: "150+", useCases: "Market positioning, share of voice, strategy insights, campaign benchmarking" },
    { feature: "Influencer Analytics", platforms: "25+", metrics: "90+", useCases: "Influencer discovery, campaign measurement, audience insights, engagement metrics" },
    { feature: "Content Performance", platforms: "32+", metrics: "110+", useCases: "Content strategy, engagement analysis, format effectiveness, audience resonance" },
    { feature: "Trend Detection", platforms: "35+", metrics: "130+", useCases: "Emerging topics, hashtag monitoring, consumer interests, industry movements" }
  ];

  const platformFeatures = [
    { 
      title: "Comprehensive Social Coverage", 
      description: "Monitor conversations across all major social networks, forums, blogs, review sites, and news outlets in one unified dashboard", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" 
    },
    { 
      title: "AI-Powered Sentiment Analysis", 
      description: "Advanced natural language processing that accurately detects sentiment, emotion, and intent in social conversations", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png" 
    },
    { 
      title: "Real-time Alerts & Notifications", 
      description: "Instant alerts for brand crises, sudden sentiment shifts, competitive moves, and emerging opportunities", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Powerful Visualization & Reporting", 
      description: "Transform social data into actionable insights with customizable dashboards, automated reports, and presentation-ready visuals", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    }
  ];

  return (
    <>
      {/* Social Media Monitoring Hero Section */}
      <Box py={16} bg="blue.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Social Media Monitoring Platform
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Track, analyze, and respond to conversations about your brand
            across all social platforms with powerful AI-driven insights.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Comprehensive Brand Listening</Heading>
              <Text>Monitor all mentions of your brand, products, and industry across social networks, news sites, blogs, forums, and review platforms. Track conversations in real-time and gain a complete view of your online presence.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Advanced Sentiment Intelligence</Heading>
              <Text>Understand the emotions behind customer conversations with AI-powered sentiment analysis. Detect nuanced feelings, track sentiment trends over time, and identify what drives both positive and negative reactions.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Competitive & Market Insights</Heading>
              <Text>Track competitor activities, benchmark your social performance, and identify emerging industry trends. Discover opportunities for differentiation and gain strategic insights to inform your marketing decisions.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Key Benefits of Social Media Monitoring
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">83%</StatNumber>
                <StatLabel>Faster Crisis Response</StatLabel>
              </Stat>
              <Text>
                Detect and respond to potential brand crises up to 83% faster
                with real-time alerts and sentiment monitoring.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">42%</StatNumber>
                <StatLabel>Increased Engagement</StatLabel>
              </Stat>
              <Text>
                Brands using our platform achieve an average 42% increase in
                social engagement through data-driven content strategies.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">5B+</StatNumber>
                <StatLabel>Daily Social Data Points</StatLabel>
              </Stat>
              <Text>
                Our platform processes over 5 billion social media data points
                daily across all major platforms and conversation sources.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Monitoring Features Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Comprehensive Monitoring Capabilities
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {monitoringFeatures.map((feature, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{feature.feature}</StatLabel>
                  <Flex justify="space-between" align="center">
                    <StatNumber color="blue.600">{feature.platforms}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Platforms</Text>
                  </Flex>
                  <Flex justify="space-between" align="center" mt={1}>
                    <StatNumber color="blue.400">{feature.metrics}</StatNumber>
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
            Advanced Social Monitoring Technology
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our social media monitoring platform combines cutting-edge AI with comprehensive platform coverage
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="NLP Engine" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Advanced NLP Engine</Heading>
                <Text color="gray.600">Context-aware language processing that understands slang, emojis, and industry-specific terminology across 45+ languages</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Smart Filtering" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Smart Filtering & Classification</Heading>
                <Text color="gray.600">Intelligent categorization of mentions by topic, sentiment, influence level, and business impact to focus on what matters most</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Image Analysis" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Visual Content Analysis</Heading>
                <Text color="gray.600">Detect brand logos, scenes, objects, and sentiment in images and videos across social platforms</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="Predictive Analytics" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Predictive Trend Analytics</Heading>
                <Text color="gray.600">AI-powered forecasting that identifies emerging trends and predicts their potential impact on your brand</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Detailed Features Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Social Media Monitoring Features
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="blue.600">Monitoring & Intelligence</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Real-time Brand Monitoring</Text> - Track all brand mentions and conversations as they happen</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Advanced Sentiment Analysis</Text> - Understand the emotions behind social conversations</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Competitor Benchmarking</Text> - Compare social performance against key competitors</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Crisis Detection & Alerts</Text> - Instant notifications for potential brand issues</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Audience Insight Analytics</Text> - Understand your audience demographics and interests</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="blue.600">Engagement & Reporting</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Social Engagement Hub</Text> - Respond to and engage with mentions from a unified inbox</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Custom Dashboards</Text> - Build personalized analytics views for different teams and needs</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Automated Reporting</Text> - Schedule and distribute insights to stakeholders</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Campaign Measurement</Text> - Track and analyze social campaign performance</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Social ROI Analytics</Text> - Connect social metrics with business outcomes</Text>
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
            Social Monitoring Success Stories
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="blue.600">Global Brand Averts Potential Crisis</Heading>
              <Text mb={4}>
                A multinational consumer brand used our monitoring platform to detect early signs of a 
                potential product issue brewing on social media. The real-time alerts and sentiment tracking 
                identified concerning patterns in customer feedback 72 hours before mainstream media coverage. 
                This early warning allowed the brand to investigate, prepare a response strategy, and engage 
                with concerned customers proactively, effectively neutralizing the situation before it escalated.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The early detection capabilities saved us from what could have been a significant brand crisis. 
                Being able to respond proactively rather than reactively completely changed the trajectory of 
                the situation and preserved customer trust."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="blue.600">Retailer Increases Social Engagement by 67%</Heading>
              <Text mb={4}>
                A mid-sized retail chain leveraged our content performance and trend detection features to 
                transform their social media strategy. By analyzing which content formats, topics, and posting 
                times generated the highest engagement, they optimized their content calendar accordingly. 
                Additionally, they were able to identify and capitalize on emerging trends in their industry 
                before competitors. This data-driven approach resulted in a 67% increase in overall engagement 
                and a 41% growth in their social audience within six months.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The insights from the platform completely transformed how we approach social media. Instead of 
                guessing what might work, we now know exactly what resonates with our audience and when to post 
                it. The ROI on our social media efforts has increased dramatically."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Platform Coverage Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Comprehensive Platform Coverage
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our social media monitoring platform covers all major networks and conversation sources
          </Text>
          
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={4} mt={8}>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Social Networks</Text>
                <Text>12+</Text>
                <Text>Major Platforms</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">News Sources</Text>
                <Text>50,000+</Text>
                <Text>Publications</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Blogs & Forums</Text>
                <Text>100M+</Text>
                <Text>Monitored</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Review Sites</Text>
                <Text>350+</Text>
                <Text>Platforms</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Languages</Text>
                <Text>45+</Text>
                <Text>Supported</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Historical Data</Text>
                <Text>5+ Years</Text>
                <Text>Available</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="blue.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Transform Your Social Intelligence
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Start monitoring social conversations about your brand
            and gain valuable insights for your marketing strategy
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
              href="https://cloud.thedataproxy.com/signup"
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

export default SocialMediaMonitoringPage;