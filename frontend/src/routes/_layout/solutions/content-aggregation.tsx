import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/solutions/content-aggregation")({
  component: ContentAggregationPage,
});

function ContentAggregationPage() {
  const industryData = [
    { industry: "Media & Publishing", growth: 42, useCases: "Content syndication, topic tracking, pattern analysis" },
    { industry: "Financial Services", growth: 36, useCases: "Market updates, investment analysis, compliance monitoring" },
    { industry: "Healthcare", growth: 31, useCases: "Medical studies, trial data, policy tracking" },
    { industry: "Legal", growth: 27, useCases: "Case law monitoring, regulatory changes, compliance updates" },
    { industry: "Market Research", growth: 38, useCases: "Customer trends, competitor insights, forecasting" },
    { industry: "Academic & Research", growth: 33, useCases: "Research summaries, citation analysis, collaborative studies" }
  ];

  const contentStrategies = [
    { 
      title: "Broad Source Aggregation", 
      description: "Collect content from varied platforms including websites, repositories, social networks, and exclusive systems", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    },
    { 
      title: "Smart Categorization", 
      description: "Automatically sort and label content using AI-driven entity detection and contextual analysis", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/elasticsearch.png" 
    },
    { 
      title: "Duplicate Removal", 
      description: "Eliminate repetitive content using advanced algorithms to detect and filter out redundant information", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" 
    },
    { 
      title: "Tone Analysis", 
      description: "Monitor sentiment and opinion shifts in aggregated content to uncover risks and opportunities", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/prometheus.png" 
    }
  ];

  return (
    <>
      {/* Content Aggregation Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Content Aggregation Platform
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Leverage robust content aggregation with our scalable data extraction framework. Track countless sources, derive actionable insights, and stay ahead of market trends in real time.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Extensive Source Reach</Heading>
              <Text>Gather content from thousands of websites, databases, and platforms concurrently using our high-capacity proxy network and extraction tools.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Instant Content Updates</Heading>
              <Text>Get immediate notifications on critical news, rising trends, and key information aligned with your industry and strategic goals.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Strategic Insights</Heading>
              <Text>Turn raw data into informed decisions with powerful analytics, tailored dashboards, and streamlined reporting tools.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Advantages of Automated Content Aggregation
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">78%</StatNumber>
                <StatLabel>Enhanced Content Discovery</StatLabel>
              </Stat>
              <Text>
                Businesses using our aggregation platform uncover 78% more relevant content compared to conventional research methods.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">92%</StatNumber>
                <StatLabel>Efficiency Gains</StatLabel>
              </Stat>
              <Text>
                Cut manual content collection time by up to 92%, freeing your team to focus on analysis and decision-making.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">6x</StatNumber>
                <StatLabel>Quicker Trend Detection</StatLabel>
              </Stat>
              <Text>
                Spot emerging trends and key developments up to 6 times faster than manual tracking, gaining a competitive edge in dynamic markets.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Industry Applications Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Sector-Specific Content Aggregation Uses
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {industryData.map((industry, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{industry.industry}</StatLabel>
                  <StatNumber color="teal.500">{industry.growth}%</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    Adoption Growth
                  </StatHelpText>
                </Stat>
                <Text fontSize="sm" color="gray.600">
                  <Text as="span" fontWeight="bold">Primary Uses:</Text> {industry.useCases}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      
      {/* Content Strategies Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={4} fontWeight="medium">
            Sophisticated Content Approaches
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our aggregation platform empowers advanced strategies to fuel innovation and market leadership.
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://marketplace-assets.digitalocean.com/logos/sharklabs-kibana.svg" alt="Real-time Topic Monitoring" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Live Topic Tracking</Heading>
                <Text color="gray.600">Monitor specific subjects, entities, and keywords across thousands of sources with instant alerts on updates.</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/prometheus.png" alt="Competitive Intelligence" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Market Intelligence</Heading>
                <Text color="gray.600">Track competitor moves, product releases, and positioning across news, social platforms, and industry sources.</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Trend Analysis" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Pattern Detection</Heading>
                <Text color="gray.600">Uncover rising trends and market shifts through AI-driven analysis of content from diverse sources.</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/elasticsearch.png" alt="Content Curation" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Content Organization</Heading>
                <Text color="gray.600">Filter and arrange aggregated content into tailored feeds based on relevance, quality, and user needs.</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Platform Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Content Aggregation System Features
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="teal.500">Data Retrieval Capabilities</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Massive Data Capture</Text> - Collect millions of content pieces daily from thousands of sources.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Versatile Format Support</Text> - Retrieve content from websites, PDFs, APIs, databases, and structured feeds.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Dynamic Content Handling</Text> - Extract JavaScript-driven content and interactive web elements.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Metadata Capture</Text> - Automatically retrieve and standardize publication dates, authors, and categories.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Flexible Scheduling</Text> - Adjust collection frequency from real-time to periodic intervals.</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="teal.500">Analytics & Connectivity</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Text Analysis</Text> - Identify entities, themes, and sentiment in unstructured content.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Instant Notifications</Text> - Get immediate alerts for content matching your specific criteria.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">System Integration</Text> - Seamlessly connect aggregated content to your platforms via a powerful API.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Tailored Visualizations</Text> - Display content data through customizable dashboards and reports.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Streamlined Processes</Text> - Automate actions based on specific content triggers or thresholds.</Text>
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
            Content Aggregation Achievements
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="teal.500">Financial Firm Boosts Insights by 65%</Heading>
              <Text mb={4}>
                A global financial institution adopted our aggregation platform to track market trends across over 8,000 news outlets, financial repositories, and regulatory sites. Their analysts saw a 65% surge in relevant insights and identified market-shifting events 4.2 times faster.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The broad coverage and AI-driven organization revolutionized our market insights. We now spot opportunities that competitors overlook."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="teal.500">Healthcare Group Enhances Research Efficiency</Heading>
              <Text mb={4}>
                A top healthcare research organization used our platform to collect data from journals, trial databases, and news sources. Their review process became 73% more efficient, uncovering 28% more relevant studies than manual methods.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Tasks that once took weeks are now automated in real time. We stay updated on treatments and research across multiple fields effortlessly."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Integration Partners */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Connected Tools
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our aggregation platform integrates smoothly with your existing business applications.
          </Text>
          
          <Flex justify="center" flexWrap="wrap" gap={10} mb={12} align="center">
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg/2203px-Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg.png" alt="Microsoft PowerPoint" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://logos-world.net/wp-content/uploads/2022/02/Microsoft-Excel-Symbol.png" alt="Microsoft Excel" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png" alt="Salesforce" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1200px-Microsoft_Azure_Logo.svg.png" alt="Microsoft Azure" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://1000logos.net/wp-content/uploads/2021/06/Slack-logo.png" alt="Slack" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
          </Flex>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="teal.500" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Ready to Elevate Your Content Strategy?
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Book a tailored demo to explore how our aggregation platform can transform your information gathering and market intelligence.
          </Text>
          
          <Flex justify="center" gap={6} flexWrap="wrap">
            <Button
              size="lg"
              bg="white"
              color="teal.500"
              _hover={{ bg: "gray.100" }}
              as="a"
              href="/demo-request"
            >
              Schedule Demo
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              borderColor="white"
              color="white"
              _hover={{ bg: "teal.600" }}
              as="a"
              href="https://buy.stripe.com/4gwg1C2by9Cs2Ry6op"
            >
              Try for Free
            </Button>
          </Flex>
        </Box>
      </Box>
      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default ContentAggregationPage;