import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon, DownloadIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/use-cases/real-estate-data-scraping")({
  component: RealEstateDataScrapingPage,
});

function RealEstateDataScrapingPage() {
  const scrapingFeatures = [
    { feature: "Property Listings", sources: "2,500+", fields: "95+", useCases: "Market insights, competitor analysis, investment studies, pricing strategies" },
    { feature: "Property Details", sources: "1,800+", fields: "120+", useCases: "Appraisal, feature benchmarking, property database creation, amenity monitoring" },
    { feature: "Sales & Transaction", sources: "1,200+", fields: "65+", useCases: "Transaction history, price movements, turnover metrics, market flow analysis" },
    { feature: "Rental Data", sources: "1,600+", fields: "85+", useCases: "Rental return analysis, occupancy trends, lease conditions, rental market dynamics" },
    { feature: "Location Intelligence", sources: "850+", fields: "75+", useCases: "Community profiling, demographic trends, proximity insights, school zone mapping" },
    { feature: "Agent & Broker", sources: "1,400+", fields: "55+", useCases: "Competitor benchmarking, agent metrics, market share analysis, service comparisons" }
  ];

  const platformFeatures = [
    { 
      title: "Worldwide Property Coverage", 
      description: "Retrieve property data from residential, commercial, and rental listings across leading real estate platforms, MLS databases, and agency websites globally", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" 
    },
    { 
      title: "AI-Driven Property Insights", 
      description: "Sophisticated algorithms that identify and organize property attributes, amenities, and details from unstructured text and visuals", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png" 
    },
    { 
      title: "Geographic Data Enrichment", 
      description: "Enhance property data with location-based insights, including community demographics, nearby amenities, and geospatial information", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Market Trend Tracking", 
      description: "Monitor shifts in property listings, pricing, and availability to uncover market patterns and investment prospects", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    }
  ];

  return (
    <>
      {/* Real Estate Data Scraping Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Real Estate Data Collection
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Gather extensive property information efficiently to fuel your real estate analysis, investment strategies, and market insights.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Property Listing Insights</Heading>
              <Text>Retrieve comprehensive details from property listings, including pricing, specifications, square footage, lot size, bedrooms, bathrooms, and amenities from thousands of real estate platforms.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Market Trends</Heading>
              <Text>Convert raw property data into valuable market insights with detailed analysis of pricing patterns, inventory changes, time on market, and competitive landscapes across regions and property types.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Investment Opportunities</Heading>
              <Text>Pinpoint investment prospects by evaluating property valuations, rental returns, growth rates, and neighborhood trends to support informed, data-backed decisions.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Advantages of Real Estate Data Collection
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">99.7%</StatNumber>
                <StatLabel>Data Precision Rate</StatLabel>
              </Stat>
              <Text>
                Our advanced AI verification delivers near-flawless accuracy for all collected property data and market insights.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">85%</StatNumber>
                <StatLabel>Quicker Market Insights</StatLabel>
              </Stat>
              <Text>
                Uncover market trends and insights up to 85% faster than conventional research and data-gathering approaches.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">25M+</StatNumber>
                <StatLabel>Daily Property Data Points</StatLabel>
              </Stat>
              <Text>
                Our platform handles over 25 million property data points daily, covering residential, commercial, and rental markets.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Scraping Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Extensive Data Retrieval
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {scrapingFeatures.map((feature, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{feature.feature}</StatLabel>
                  <Flex justify="space-between" align="center">
                    <StatNumber color="red.600">{feature.sources}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Sources</Text>
                  </Flex>
                  <Flex justify="space-between" align="center" mt={1}>
                    <StatNumber color="red.400">{feature.fields}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Data Fields</Text>
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
            Advanced Real Estate Data Solution
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our real estate data collection platform blends innovative technology with broad market coverage.
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Real-time Monitoring" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Live Market Tracking</Heading>
                <Text color="gray.600">Ongoing monitoring of property listings with instant notifications for new listings, price updates, and status changes.</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Property Matching" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Smart Property Consolidation</Heading>
                <Text color="gray.600">Intelligent algorithms that detect identical properties across multiple sources and merge data for complete profiles.</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Image Analysis" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Visual Property Insights</Heading>
                <Text color="gray.600">Extract property attributes, conditions, and features directly from listing images and virtual tours.</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="API Integration" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Effortless Data Connectivity</Heading>
                <Text color="gray.600">Link property data to your analytics platforms, CRM, or custom tools through our robust API.</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Detailed Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Real Estate Data Solution Features
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Property Data Retrieval</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Full Property Specs</Text> - Capture all available property attributes and details.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Multi-Source Aggregation</Text> - Combine data from MLS, real estate portals, agency sites, and public records.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Transaction History</Text> - Gather past sales data, pricing, and ownership transitions.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Media Collection</Text> - Collect property images, floor plans, virtual tours, and videos.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Listing Updates</Text> - Monitor time on market, price adjustments, and status changes.</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Market Insights & Analysis</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Market Dynamics</Text> - Track pricing trends, inventory shifts, and market patterns.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Community Insights</Text> - Detailed location data covering demographics, amenities, and trends.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Property Valuations</Text> - Automated appraisals using comparable sales and market data.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Investment Metrics</Text> - Assess potential returns, cap rates, and ROI for investment properties.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Forecasting Models</Text> - AI-driven predictions for market trends and property valuations.</Text>
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
              <Heading as="h3" size="md" mb={4} color="red.600">Investment Firm Boosts Returns by 32%</Heading>
              <Text mb={4}>
                A mid-sized real estate investment firm leveraged our data collection platform to analyze over 250,000 properties across various regions. Using detailed property data and predictive insights, they identified undervalued assets with strong growth potential, achieving a 32% increase in ROI compared to their prior strategy.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The accuracy and depth of the property data revolutionized our investment approach. We now have insights into market dynamics and property values that give us a clear edge in spotting opportunities before they hit the mainstream market."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">PropTech Startup Pioneers Valuation Model</Heading>
              <Text mb={4}>
                A real estate tech startup utilized our data collection platform to develop an innovative property valuation system. By gathering detailed data on property features, neighborhood profiles, and past transactions, they built machine learning models to predict property values with exceptional precision, now powering valuation services for major lenders and real estate platforms.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The extensive property data we accessed through the platform provided the foundation for valuation models that are 40% more accurate than traditional approaches. This level of detail was critical to building our technology."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Global Coverage Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Global Real Estate Data Reach
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our real estate data collection platform spans major property markets and listing sources worldwide.
          </Text>
          
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={4} mt={8}>
              <VStack>
                <Text fontWeight="bold" color="red.600">MLS Systems</Text>
                <Text>850+</Text>
                <Text>Integrated</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Property Portals</Text>
                <Text>1,200+</Text>
                <Text>Monitored</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Broker Websites</Text>
                <Text>15,000+</Text>
                <Text>Covered</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Countries</Text>
                <Text>42</Text>
                <Text>Global Markets</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Property Types</Text>
                <Text>35+</Text>
                <Text>Categories</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Daily Listings</Text>
                <Text>2.5M+</Text>
                <Text>Processed</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="red.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Elevate Your Real Estate Insights
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Begin collecting comprehensive property data to unlock powerful market insights for your real estate business.
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
              Schedule a Demo
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

export default RealEstateDataScrapingPage;