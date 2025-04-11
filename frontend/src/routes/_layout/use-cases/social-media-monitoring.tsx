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
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Social Media Insights Platform
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Observe, evaluate, and engage with discussions about your brand 
            across social channels using advanced AI-driven analytics.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Extensive Brand Monitoring</Heading>
              <Text>Capture every reference to your brand, products, or sector across social media, news outlets, blogs, forums, and review sites. Stay informed with real-time tracking for a holistic view of your digital footprint.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Sophisticated Sentiment Insights</Heading>
              <Text>Gain a deeper understanding of customer emotions through AI-enhanced sentiment analysis. Identify subtle sentiments, monitor trends over time, and pinpoint drivers of positive and negative feedback.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Market and Competitor Analysis</Heading>
              <Text>Keep tabs on competitors’ moves, measure your social impact against theirs, and spot emerging market trends. Uncover strategic opportunities to stand out and guide your marketing approach.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Core Advantages of Social Media Insights
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">83%</StatNumber>
                <StatLabel>Quicker Crisis Handling</StatLabel>
              </Stat>
              <Text>
                Identify and address potential brand issues up to 83% faster 
                with instant alerts and sentiment tracking.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">42%</StatNumber>
                <StatLabel>Boosted Engagement</StatLabel>
              </Stat>
              <Text>
                Companies using our platform see an average 42% rise in 
                social interaction through analytics-driven strategies.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">5B+</StatNumber>
                <StatLabel>Social Data Points Daily</StatLabel>
              </Stat>
              <Text>
                Our system analyzes over 5 billion social media data points 
                daily across major platforms and discussion sources.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Monitoring Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Robust Monitoring Tools
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {monitoringFeatures.map((feature, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{feature.feature}</StatLabel>
                  <Flex justify="space-between" align="center">
                    <StatNumber color="red.600">{feature.platforms}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Platforms</Text>
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
            Cutting-Edge Social Analytics Technology
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our platform integrates advanced AI with extensive platform coverage 
            for unparalleled social media insights.
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="NLP Engine" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Sophisticated NLP Core</Heading>
                <Text color="gray.600">Context-sensitive processing that decodes slang, emojis, and sector-specific terms across 45+ languages.</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Smart Filtering" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Intelligent Sorting & Prioritization</Heading>
                <Text color="gray.600">Smart classification of mentions by topic, sentiment, influence, and business relevance to highlight critical insights.</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Image Analysis" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Multimedia Content Analysis</Heading>
                <Text color="gray.600">Identify brand logos, scenes, objects, and emotions in images and videos across social channels.</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="Predictive Analytics" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Predictive Trend Forecasting</Heading>
                <Text color="gray.600">AI-driven predictions that spot emerging trends and evaluate their potential effects on your brand.</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Detailed Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Social Media Analytics Capabilities
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Tracking & Insights</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Live Brand Tracking</Text> - Monitor all brand mentions and discussions in real time.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Deep Sentiment Insights</Text> - Decode the emotions driving social conversations.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Competitor Analysis</Text> - Measure your social presence against industry rivals.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Issue Alerts</Text> - Immediate notifications for potential brand challenges.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Audience Profiling</Text> - Gain insights into your audience’s demographics and preferences.</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Interaction & Reporting</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Unified Engagement Hub</Text> - Manage and respond to mentions from a single interface.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Tailored Dashboards</Text> - Create customized analytics views for various teams.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Automated Insights</Text> - Schedule and share reports with stakeholders.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Campaign Tracking</Text> - Evaluate the performance of social campaigns.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Business Impact Metrics</Text> - Link social data to measurable business results.</Text>
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
            Social Analytics Success Stories
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">Global Brand Prevents Major Issue</Heading>
              <Text mb={4}>
                A leading international brand utilized our platform to spot early warning signs of a 
                product concern circulating on social media. With real-time notifications and sentiment 
                analysis, they detected negative patterns 72 hours before the issue hit mainstream news. 
                This foresight enabled them to investigate, craft a response plan, and engage customers 
                proactively, averting a potential crisis and maintaining consumer confidence.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The platform’s early alerts were a game-changer, helping us avoid a major brand issue. 
                Acting proactively instead of scrambling to react made all the difference in protecting 
                our reputation."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">Retailer Boosts Engagement by 67%</Heading>
              <Text mb={4}>
                A mid-sized retail chain transformed its social strategy using our content performance 
                and trend-spotting tools. By analyzing which formats, topics, and posting schedules drove 
                the most interaction, they refined their content plan. They also leveraged emerging industry 
                trends ahead of competitors, resulting in a 67% surge in engagement and a 41% increase in 
                their social following within six months.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The platform’s insights revolutionized our social media approach. We’ve moved from guesswork 
                to precision, knowing exactly what connects with our audience and when to share it, with 
                remarkable improvements in ROI."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Platform Coverage Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Extensive Platform Reach
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our analytics platform spans all major social networks and conversation hubs.
          </Text>
          
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={4} mt={8}>
              <VStack>
                <Text fontWeight="bold" color="red.600">Social Networks</Text>
                <Text>12+</Text>
                <Text>Major Platforms</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">News Sources</Text>
                <Text>50,000+</Text>
                <Text>Publications</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Blogs & Forums</Text>
                <Text>100M+</Text>
                <Text>Monitored</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Review Sites</Text>
                <Text>350+</Text>
                <Text>Platforms</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Languages</Text>
                <Text>45+</Text>
                <Text>Supported</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Historical Data</Text>
                <Text>5+ Years</Text>
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
            Elevate Your Social Strategy
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Begin tracking conversations about your brand and uncover 
            actionable insights to refine your marketing efforts.
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

export default SocialMediaMonitoringPage;