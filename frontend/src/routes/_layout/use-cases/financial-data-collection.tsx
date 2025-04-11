import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon, DownloadIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/use-cases/financial-data-collection")({
  component: FinancialDataCollectionPage,
});

function FinancialDataCollectionPage() {
  const dataCollectionFeatures = [
    { feature: "Market Insights", sources: "150+", fields: "280+", useCases: "Pricing trends, trade signals, volatility analysis, market indicators" },
    { feature: "Corporate Metrics", sources: "80+", fields: "350+", useCases: "Core analysis, valuation insights, sector comparisons, company vitality" },
    { feature: "Economic Trends", sources: "60+", fields: "180+", useCases: "Broad economic studies, predictions, regional insights, policy effects" },
    { feature: "Non-Traditional Data", sources: "200+", fields: "420+", useCases: "Opinion analysis, buyer patterns, ESG factors, logistics insights" },
    { feature: "Investment Returns", sources: "90+", fields: "210+", useCases: "Return comparisons, portfolio planning, risk assessment, fund manager reviews" },
    { feature: "Compliance Documents", sources: "45+", fields: "320+", useCases: "Regulatory oversight, filing reviews, insider tracking, ownership shifts" }
  ];

  const platformFeatures = [
    { 
      title: "Extensive Financial Reach", 
      description: "Tap into data from worldwide exchanges, compliance sources, company reports, and unconventional data streams across all investment types", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" 
    },
    { 
      title: "Instant Market Updates", 
      description: "Get up-to-the-second market insights for stocks, bonds, commodities, forex, and derivatives globally", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png" 
    },
    { 
      title: "Insightful Financial Tools", 
      description: "Turn raw figures into strategic decisions with advanced models, metrics, and custom algorithms", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Deep Historical Records", 
      description: "Access decades of refined, standardized data for trend analysis, strategy testing, and forecasting", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    }
  ];

  return (
    <>
      {/* Financial Data Collection Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Financial Insights Gathering
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Collect vital financial data from worldwide markets to fuel investment planning, risk evaluation, and strategic choices.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Markets & Investments</Heading>
              <Text>Retrieve live and past data on stocks, bonds, derivatives, currencies, and commodities from global exchanges, including prices, volumes, spreads, and order details with pinpoint timing.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Company Insights</Heading>
              <Text>Gather detailed corporate reports, action updates, ownership info, and leadership details. Pull organized data from earnings, slides, and compliance documents.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Unique & ESG Insights</Heading>
              <Text>Leverage alternative sources like social trends, satellite views, online activity, supply chain stats, and ESG factors for distinctive investment perspectives.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Advantages of Financial Insights Gathering
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">99.99%</StatNumber>
                <StatLabel>Data Precision</StatLabel>
              </Stat>
              <Text>
                Our thorough validation process guarantees near-perfect precision with extensive cleaning and standardization.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">24%</StatNumber>
                <StatLabel>Strategy Edge Gain</StatLabel>
              </Stat>
              <Text>
                Investment firms using our insights report up to a 24% boost in strategy performance and returns.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">10B+</StatNumber>
                <StatLabel>Daily Insights</StatLabel>
              </Stat>
              <Text>
                Our system handles over 10 billion data points daily, spanning markets, firms, and economic trends globally.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Data Collection Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Wide-Ranging Financial Insights
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {dataCollectionFeatures.map((feature, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{feature.feature}</StatLabel>
                  <Flex justify="space-between" align="center">
                    <StatNumber color="red.600">{feature.sources}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Origins</Text>
                  </Flex>
                  <Flex justify="space-between" align="center" mt={1}>
                    <StatNumber color="red.400">{feature.fields}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Categories</Text>
                  </Flex>
                </Stat>
                <Text fontSize="sm" color="gray.600">
                  <Text as="span" fontWeight="bold">Applications:</Text> {feature.useCases}
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
            Sophisticated Insights Platform
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our insights platform merges innovative tech with extensive global market reach
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Fast Processing" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Fast Processing</Heading>
                <Text color="gray.600">High-speed system offering microsecond responses for urgent financial needs</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Text Analysis" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Text Analysis</Heading>
                <Text color="gray.600">Pull structured insights from reports, news, calls, and filings with advanced language processing</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Time-Specific Data" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Time-Specific Data</Heading>
                <Text color="gray.600">View past data as it was at any moment, avoiding bias and supporting precise testing</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="API Connectivity" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">API Connectivity</Heading>
                <Text color="gray.600">Versatile API options like REST, WebSocket, and bulk delivery with adaptable formats and queries</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Detailed Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Platform Capabilities
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Gathering & Refining</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Diverse Sources</Text> - Pull insights from exchanges, regulators, news, and unique data providers</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Live Updates</Text> - Stream data with microsecond timing for critical applications</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Event Adjustments</Text> - Auto-correct for splits, dividends, mergers, and more</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Data Refinement</Text> - Multi-step checks for accuracy and fullness</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Identity Linking</Text> - Full IDs and structures for firms, securities, and funds</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Analysis & Access</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Calculated Metrics</Text> - Ready-to-use ratios, indicators, and stats</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Tailored Streams</Text> - Custom data feeds based on your needs</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">API & Tools</Text> - Easy integration with detailed guides</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Cloud Storage</Text> - Direct access to organized data in the cloud</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Strategy Testing</Text> - Built-in tools for evaluating plans with past data</Text>
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
            Success in Financial Insights
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">Hedge Fund Lifts Returns by 31%</Heading>
              <Text mb={4}>
                A data-driven hedge fund tapped our platform to refine trading tactics with unique data blends. Merging market stats with public sentiment, satellite data, and supply insights, they spotted trends ahead of rivals, boosting returns by 31% and cutting losses by 18% in tough markets.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The depth and accuracy of the data reshaped our approach. Blending alternative insights with classic financials gave us a clear lead in catching market shifts early."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">Asset Firm Slashes Study Time by 85%</Heading>
              <Text mb={4}>
                A worldwide asset manager used our text-analysis tools to speed up core research. Automatically pulling key figures, tones, and projections from earnings, filings, and reports, they cut research time by 85% and tripled their company coverage with the same staff.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Our team now focuses on analysis, not data hunting. The text tools nail down subtle details from documents, letting us track far more firms efficiently."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Global Coverage Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Worldwide Financial Reach
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our platform spans all key markets, investment types, and data categories globally
          </Text>
          
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={4} mt={8}>
              <VStack>
                <Text fontWeight="bold" color="red.600">Markets</Text>
                <Text>150+</Text>
                <Text>Worldwide</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Instruments</Text>
                <Text>500K+</Text>
                <Text>Active</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Firms</Text>
                <Text>75K+</Text>
                <Text>All Types</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Past Records</Text>
                <Text>50+ Years</Text>
                <Text>History</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Unique Sources</Text>
                <Text>200+</Text>
                <Text>Providers</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Refresh Rate</Text>
                <Text>Microsecond</Text>
                <Text>to Daily</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="red.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Elevate Your Market Insights
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Begin tapping into vast financial data to sharpen your investment strategies and market understanding
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
              Book a Demo
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              borderColor="white"
              color="white"
              _hover={{ bg: "red.700" }}
              as="a"
              href="https://buy.stripe.com/4gwg1C2by9Cs2Ry6op"
            >
              Try Free Now
            </Button>
          </Flex>
        </Box>
      </Box>
      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default FinancialDataCollectionPage;