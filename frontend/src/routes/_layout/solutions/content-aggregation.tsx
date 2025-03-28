import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/solutions/content-aggregation")({
  component: ContentAggregationPage,
});

function ContentAggregationPage() {
  const industryData = [
    { industry: "Media & Publishing", growth: 42, useCases: "Syndicated content, topic monitoring, trend analysis" },
    { industry: "Financial Services", growth: 36, useCases: "Market intelligence, investment research, regulatory updates" },
    { industry: "Healthcare", growth: 31, useCases: "Medical research, clinical trials, healthcare policy monitoring" },
    { industry: "Legal", growth: 27, useCases: "Case law tracking, legislative updates, regulatory compliance" },
    { industry: "Market Research", growth: 38, useCases: "Consumer insights, competitive intelligence, trend forecasting" },
    { industry: "Academic & Research", growth: 33, useCases: "Literature reviews, citation tracking, research collaboration" }
  ];

  const contentStrategies = [
    { 
      title: "Multi-Source Integration", 
      description: "Aggregate content from diverse sources including websites, databases, social media, and proprietary platforms", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    },
    { 
      title: "Intelligent Classification", 
      description: "Automatically categorize and tag incoming content using AI-powered entity recognition and semantic analysis", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/elasticsearch.png" 
    },
    { 
      title: "Content Deduplication", 
      description: "Eliminate redundant information with advanced similarity detection algorithms that identify duplicate content", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" 
    },
    { 
      title: "Sentiment Analysis", 
      description: "Track emotional tone and opinion trends across aggregated content to identify opportunities and risks", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/prometheus.png" 
    }
  ];

  return (
    <>
      {/* Content Aggregation Hero Section */}
      <Box py={16} bg="blue.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
             Content Aggregation Solutions
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Harness the power of comprehensive content aggregation with our scalable web scraping infrastructure.
            Monitor millions of sources, extract valuable insights, and stay ahead of industry trends in real-time.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Comprehensive Source Coverage</Heading>
              <Text>Aggregate content from thousands of websites, databases, and platforms simultaneously with our enterprise-grade proxy network and data extraction capabilities.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Real-time Content Intelligence</Heading>
              <Text>Receive instant alerts on breaking news, emerging trends, and critical information relevant to your industry, competitors, and strategic objectives.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="teal.500">Actionable Content Insights</Heading>
              <Text>Transform raw aggregated data into strategic decisions with advanced analytics, customizable dashboards, and automated reporting systems.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Key Benefits of Automated Content Aggregation
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">78%</StatNumber>
                <StatLabel>Information Discovery Improvement</StatLabel>
              </Stat>
              <Text>
                Organizations implementing our content aggregation solutions report finding 78% more relevant 
                information compared to traditional research and monitoring methods.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">92%</StatNumber>
                <StatLabel>Time Savings</StatLabel>
              </Stat>
              <Text>
                Reduce the time spent on manual content gathering by up to 92%, allowing your team 
                to focus on analysis and strategic decisions rather than data collection.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="teal.500">6x</StatNumber>
                <StatLabel>Faster Trend Identification</StatLabel>
              </Stat>
              <Text>
                Identify emerging trends and critical developments up to 6 times faster than manual monitoring,
                providing a significant competitive advantage in fast-moving industries.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Industry Applications Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Industry-Specific Content Aggregation Applications
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {industryData.map((industry, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{industry.industry}</StatLabel>
                  <StatNumber color="teal.500">{industry.growth}%</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    Implementation Growth
                  </StatHelpText>
                </Stat>
                <Text fontSize="sm" color="gray.600">
                  <Text as="span" fontWeight="bold">Common Use Cases:</Text> {industry.useCases}
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
            Advanced Content Strategies
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our content aggregation infrastructure enables sophisticated approaches that drive innovation and competitive advantage
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://marketplace-assets.digitalocean.com/logos/sharklabs-kibana.svg" alt="Real-time Topic Monitoring" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Real-time Topic Monitoring</Heading>
                <Text color="gray.600">Track specific topics, entities, and keywords across thousands of sources with instant notifications on new developments</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/prometheus.png" alt="Competitive Intelligence" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Competitive Intelligence</Heading>
                <Text color="gray.600">Monitor competitor activities, product launches, and market positioning across news, social media, and industry platforms</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Trend Analysis" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Trend Analysis</Heading>
                <Text color="gray.600">Identify emerging patterns and market shifts through AI-powered analysis of aggregated content from diverse sources</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/elasticsearch.png" alt="Content Curation" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Content Curation</Heading>
                <Text color="gray.600">Automatically filter and organize aggregated content into customized feeds based on relevance, quality, and user preferences</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Platform Features Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
             Content Aggregation Platform Features
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="teal.500">Data Collection Capabilities</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">High-volume Extraction</Text> - Aggregate millions of content items daily across thousands of sources</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Multi-format Support</Text> - Extract content from web pages, PDFs, databases, APIs, and structured data feeds</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Dynamic Elements</Text> - Capture JavaScript-rendered content and interactive elements on modern websites</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Metadata Extraction</Text> - Automatically extract and normalize publication dates, authors, categories, and other metadata</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Scheduled Monitoring</Text> - Customize extraction frequency from real-time to scheduled intervals</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="teal.500">Analytics & Integration</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Natural Language Processing</Text> - Extract entities, topics, and sentiment from unstructured content</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Real-time Alerts</Text> - Receive instant notifications for critical content matching your custom criteria</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">API Access</Text> - Integrate aggregated content directly into your existing systems via our robust API</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Custom Dashboards</Text> - Visualize content data through customizable dashboards and reporting tools</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="teal.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Automated Workflows</Text> - Set rule-based actions triggered by specific content patterns or thresholds</Text>
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
            Content Aggregation Success Stories
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="teal.500">Financial Services Firm Enhances Research by 65%</Heading>
              <Text mb={4}>
                A global financial services firm implemented our content aggregation solution to monitor market trends across 
                8,000+ news sources, financial databases, and regulatory websites. Their research team reported a 65% increase 
                in relevant insights discovery and 4.2x faster identification of market-moving events.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The comprehensive coverage and AI-powered categorization transformed our market intelligence capabilities. 
                We're now able to identify opportunities our competitors miss entirely."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="teal.500">Healthcare Organization Streamlines Research Process</Heading>
              <Text mb={4}>
                A leading healthcare research organization used our platform to aggregate content from medical journals, 
                clinical trial databases, and healthcare news sources. Their systematic reviews process became 73% more 
                efficient, and they identified 28% more relevant studies than their previous manual methods.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "What once took our research team weeks now happens automatically in real-time. We're able to stay current 
                on emerging treatments and research developments across dozens of specialized fields simultaneously."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Integration Partners */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Integration Partners
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our content aggregation infrastructure integrates seamlessly with your existing business tools
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
            Ready to Transform Your Content Strategy?
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Schedule a personalized demo to see how our content aggregation solution can revolutionize 
            your information discovery and competitive intelligence
          </Text>
          
          <Flex justify="center" gap={6} flexWrap="wrap">
            <Button
              size="lg"
              bg="white"
              color="teal.500"
              _hover={{ bg: "gray.100" }}
              as="a"
              href="/solutions/demo-request"
            >
              Request Demo
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              borderColor="white"
              color="white"
              _hover={{ bg: "teal.600" }}
              as="a"
              href="https://dashboard.thedataproxy.com/signup"
            >
              Start Free Trial
            </Button>
          </Flex>
        </Box>
      </Box>
      
      {/* Technology Stack */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h3" size="lg" mb={8} fontWeight="medium">
            Powered by Advanced Data Technology
          </Heading>
          <Flex justify="center" gap={8} flexWrap="wrap">
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png" alt="Python" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/selenium.png" alt="Selenium" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="AWS" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/elasticsearch.png" alt="Elasticsearch" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Grafana" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" alt="Kubernetes" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Redis" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png" alt="MongoDB" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postgresql.png" alt="PostgreSQL" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="REST API" boxSize="50px" />
            {/* Added more technology icons */}
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/graphql.png" alt="GraphQL" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/docker.png" alt="Docker" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/prometheus.png" alt="Prometheus" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/numpy.png" alt="NumPy" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/pandas.png" alt="Pandas" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/websocket.png" alt="WebSocket" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/tensorflow.png" alt="TensorFlow" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/git.png" alt="Git" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/github.png" alt="GitHub" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png" alt="JavaScript" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png" alt="React" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png" alt="Node.js" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/typescript.png" alt="TypeScript" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/gcp.png" alt="Google Cloud Platform" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/microsoft_azure.png" alt="Microsoft Azure" boxSize="50px" />
          </Flex>
        </Box>
      </Box>
      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default ContentAggregationPage;