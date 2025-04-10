import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon, DownloadIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/use-cases/real-estate-data-scraping")({
  component: RealEstateDataScrapingPage,
});

function RealEstateDataScrapingPage() {
  const scrapingFeatures = [
    { feature: "Property Listings", sources: "2,500+", fields: "95+", useCases: "Market analysis, competitive intelligence, investment research, pricing models" },
    { feature: "Property Details", sources: "1,800+", fields: "120+", useCases: "Valuation, feature comparison, property database building, amenity tracking" },
    { feature: "Sales & Transaction", sources: "1,200+", fields: "65+", useCases: "Sales history, price trends, turnover rates, market liquidity analysis" },
    { feature: "Rental Data", sources: "1,600+", fields: "85+", useCases: "Rental yield analysis, vacancy rates, lease terms, rental market trends" },
    { feature: "Location Intelligence", sources: "850+", fields: "75+", useCases: "Neighborhood analysis, demographic insights, proximity data, school districts" },
    { feature: "Agent & Broker", sources: "1,400+", fields: "55+", useCases: "Competitive analysis, agent performance, market share, service offerings" }
  ];

  const platformFeatures = [
    { 
      title: "Global Real Estate Coverage", 
      description: "Extract property data from residential, commercial, and rental listings across major real estate portals, MLS systems, and broker websites worldwide", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" 
    },
    { 
      title: "AI-Powered Property Analysis", 
      description: "Advanced algorithms that extract and categorize property features, amenities, and details from unstructured descriptions and images", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png" 
    },
    { 
      title: "Geospatial Data Integration", 
      description: "Enrich property data with location-specific insights including neighborhood statistics, points of interest, and geographic information", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Historical Trend Analysis", 
      description: "Track changes in property listings, prices, and availability over time to identify market trends and investment opportunities", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    }
  ];

  return (
    <>
      {/* Real Estate Data Scraping Hero Section */}
      <Box py={16} bg="blue.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Real Estate Data Scraping
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Extract comprehensive property data at scale to power your
            real estate analytics, investment decisions, and market intelligence.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Property Listing Data</Heading>
              <Text>Collect detailed information from property listings including prices, features, square footage, lot size, bedrooms, bathrooms, and amenities from thousands of real estate websites and platforms.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Market Analytics</Heading>
              <Text>Transform raw property data into actionable market insights with comprehensive analytics on pricing trends, inventory levels, days on market, and competitive positioning across different locations and property types.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Investment Intelligence</Heading>
              <Text>Identify investment opportunities by analyzing property values, rental yields, appreciation rates, and neighborhood trends. Make data-driven decisions with comprehensive market intelligence.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Key Benefits of Real Estate Data Scraping
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">99.7%</StatNumber>
                <StatLabel>Data Accuracy Rate</StatLabel>
              </Stat>
              <Text>
                Our advanced AI validation ensures near-perfect accuracy
                for all extracted property data and market intelligence.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">85%</StatNumber>
                <StatLabel>Faster Market Insights</StatLabel>
              </Stat>
              <Text>
                Gain market insights and identify trends up to 85% faster
                than traditional research and data collection methods.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">25M+</StatNumber>
                <StatLabel>Daily Property Data Points</StatLabel>
              </Stat>
              <Text>
                Our platform processes over 25 million property data points
                daily across residential, commercial, and rental markets.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Scraping Features Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Comprehensive Data Collection
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {scrapingFeatures.map((feature, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{feature.feature}</StatLabel>
                  <Flex justify="space-between" align="center">
                    <StatNumber color="blue.600">{feature.sources}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Sources</Text>
                  </Flex>
                  <Flex justify="space-between" align="center" mt={1}>
                    <StatNumber color="blue.400">{feature.fields}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Data Fields</Text>
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
            Advanced Real Estate Data Platform
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our real estate data scraping platform combines cutting-edge technology with comprehensive market coverage
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Real-time Monitoring" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Real-time Market Monitoring</Heading>
                <Text color="gray.600">Continuous tracking of property listings with instant alerts for new properties, price changes, and status updates</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Property Matching" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Intelligent Property Matching</Heading>
                <Text color="gray.600">Advanced algorithms that identify the same property across multiple listings and consolidate data for complete profiles</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Image Analysis" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Computer Vision Property Analysis</Heading>
                <Text color="gray.600">Extract property features, conditions, and attributes directly from listing photos and virtual tours</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="API Integration" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Seamless Data Integration</Heading>
                <Text color="gray.600">Connect property data directly to your analytics tools, CRM, or custom applications via our comprehensive API</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Detailed Features Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Real Estate Data Platform Features
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="blue.600">Property Data Collection</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Comprehensive Property Details</Text> - Extract all available property specifications and features</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Multi-source Integration</Text> - Combine data from MLS, portals, broker sites, and public records</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Sales History Tracking</Text> - Collect historical transaction data, pricing, and ownership changes</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Image & Media Collection</Text> - Gather property photos, floor plans, virtual tours, and videos</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Listing Activity Monitoring</Text> - Track days on market, price changes, and listing status updates</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="blue.600">Market Intelligence & Analytics</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Market Trend Analysis</Text> - Identify pricing trends, inventory changes, and market dynamics</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Neighborhood Analytics</Text> - Comprehensive location data including demographics, amenities, and trends</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Valuation Models</Text> - Automated property valuations based on comparable sales and market data</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Investment Analysis</Text> - Calculate potential returns, cap rates, and ROI for investment properties</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Predictive Analytics</Text> - Machine learning models that forecast market trends and property values</Text>
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
            Real Estate Data Success Stories
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="blue.600">Real Estate Investment Firm Increases ROI by 32%</Heading>
              <Text mb={4}>
                A mid-sized real estate investment firm used our data scraping platform to analyze over 
                250,000 properties across multiple markets. By leveraging comprehensive property data and 
                our predictive analytics, they identified undervalued properties with high appreciation 
                potential. Their data-driven acquisition strategy resulted in a 32% higher ROI compared to 
                their previous investment approach.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The depth and accuracy of the property data transformed our investment strategy. We now 
                have insights into market trends and property values that give us a significant competitive 
                advantage in identifying opportunities before they become apparent to the broader market."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="blue.600">PropTech Startup Builds Innovative Valuation Model</Heading>
              <Text mb={4}>
                A real estate technology startup used our data scraping platform to build a revolutionary 
                property valuation model. By collecting detailed data on property features, neighborhood 
                characteristics, and historical transactions, they trained machine learning algorithms to 
                predict property values with unprecedented accuracy. Their platform now powers valuation 
                services for several major mortgage lenders and real estate portals.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The comprehensive property data we accessed through the platform gave us the foundation 
                to build valuation models that are 40% more accurate than traditional methods. We simply 
                couldn't have developed our technology without this level of detailed property data."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Global Coverage Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Global Real Estate Data Coverage
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our real estate data scraping platform covers major property markets and listing sources worldwide
          </Text>
          
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={4} mt={8}>
              <VStack>
                <Text fontWeight="bold" color="blue.600">MLS Systems</Text>
                <Text>850+</Text>
                <Text>Integrated</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Property Portals</Text>
                <Text>1,200+</Text>
                <Text>Monitored</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Broker Websites</Text>
                <Text>15,000+</Text>
                <Text>Covered</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Countries</Text>
                <Text>42</Text>
                <Text>Global Markets</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Property Types</Text>
                <Text>35+</Text>
                <Text>Categories</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Daily Listings</Text>
                <Text>2.5M+</Text>
                <Text>Processed</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="blue.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Transform Your Real Estate Intelligence
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Start extracting comprehensive property data and gain
            valuable market insights for your real estate business
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

export default RealEstateDataScrapingPage;