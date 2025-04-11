import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon, DownloadIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/use-cases/travel-fare-aggregation")({
  component: TravelFareAggregationPage,
});

function TravelFareAggregationPage() {
  const aggregationFeatures = [
    { feature: "Flight Data", sources: "1,200+", fields: "85+", useCases: "Fare comparison, route analysis, airline pricing, seasonal trends" },
    { feature: "Hotel Rates", sources: "35,000+", fields: "75+", useCases: "Rate benchmarking, availability tracking, dynamic pricing, promotion analysis" },
    { feature: "Car Rental", sources: "650+", fields: "60+", useCases: "Pricing intelligence, fleet availability, location analysis, seasonal patterns" },
    { feature: "Vacation Packages", sources: "420+", fields: "90+", useCases: "Bundle pricing, value analysis, operator comparisons, seasonal offers" },
    { feature: "Cruise Lines", sources: "180+", fields: "110+", useCases: "Cabin pricing, itinerary analysis, onboard packages, seasonal promotions" },
    { feature: "Travel Insurance", sources: "350+", fields: "65+", useCases: "Coverage comparison, premium analysis, policy features, regional differences" }
  ];

  const platformFeatures = [
    { 
      title: "Global Travel Data Coverage", 
      description: "Aggregate fare and pricing data from airlines, hotels, OTAs, car rentals, and cruise lines across all major global markets", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" 
    },
    { 
      title: "Real-time Pricing Intelligence", 
      description: "Track fare changes and price fluctuations in real-time with automated alerts and historical trend analysis", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png" 
    },
    { 
      title: "Advanced Rate Analysis", 
      description: "AI-powered algorithms that identify patterns, predict pricing trends, and detect optimal booking windows", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Comprehensive Data Normalization", 
      description: "Sophisticated processing that standardizes fare structures, room types, booking conditions, and ancillary services", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    }
  ];

  return (
    <>
      {/* Travel Fare Aggregation Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Travel Fare Aggregation
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Collect and analyze comprehensive travel pricing data from
            thousands of sources to power your fare comparison and pricing intelligence.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Comprehensive Fare Data</Heading>
              <Text>Aggregate pricing information from airlines, hotels, car rentals, cruises, and tour operators worldwide. Capture rates, availability, booking conditions, and cancellation policies.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Real-time Rate Tracking</Heading>
              <Text>Monitor fare changes and pricing adjustments in real-time across all travel segments. Receive instant alerts for rate fluctuations and detect time-sensitive offers and promotions.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Competitive Analysis</Heading>
              <Text>Compare pricing across competitors, identify market positioning, and track dynamic pricing strategies. Develop data-driven pricing models based on comprehensive market intelligence.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Key Benefits of Travel Fare Aggregation
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">18%</StatNumber>
                <StatLabel>Average Revenue Increase</StatLabel>
              </Stat>
              <Text>
                Travel companies using our fare aggregation typically see
                an 18% increase in revenue through optimized pricing strategies.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">99.9%</StatNumber>
                <StatLabel>Data Accuracy Rate</StatLabel>
              </Stat>
              <Text>
                Our multi-layered validation ensures virtually perfect accuracy
                for all aggregated fares and travel pricing information.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">250M+</StatNumber>
                <StatLabel>Daily Price Points</StatLabel>
              </Stat>
              <Text>
                Our platform processes over 250 million travel fare data points
                daily across flights, hotels, car rentals, and other segments.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Aggregation Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Comprehensive Travel Fare Collection
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {aggregationFeatures.map((feature, index) => (
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
            Advanced Fare Aggregation Technology
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our travel fare aggregation platform combines cutting-edge technology with comprehensive global coverage
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Dynamic Fare Tracking" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Dynamic Fare Tracking</Heading>
                <Text color="gray.600">Real-time monitoring of price changes with historical comparison and trend identification</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Rate Calendars" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Comprehensive Rate Calendars</Heading>
                <Text color="gray.600">Forward-looking fare intelligence with booking window analysis and seasonal pricing patterns</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Fare Rules Analysis" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Fare Rules & Conditions Analysis</Heading>
                <Text color="gray.600">Automated extraction and comparison of booking conditions, cancellation policies, and fare restrictions</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="Ancillary Services" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Ancillary Services Intelligence</Heading>
                <Text color="gray.600">Track and analyze supplementary service pricing including baggage fees, seat selection, meal options, and amenities</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Detailed Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Travel Fare Aggregation Features
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="blue.600">Data Collection & Normalization</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Multi-Channel Fare Aggregation</Text> - Collect pricing from GDSs, OTAs, direct suppliers, and metasearch engines</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Currency Normalization</Text> - Standardize pricing across different currencies with real-time exchange rates</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Product Categorization</Text> - Automatically classify and align similar travel products across different providers</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Tax & Fee Unbundling</Text> - Separate base rates from taxes, fees, and surcharges for true pricing comparisons</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Historical Data Storage</Text> - Maintain comprehensive fare history for trend analysis and forecasting</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="blue.600">Analytics & Intelligence</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Competitive Rate Positioning</Text> - Analyze where your pricing stands relative to competitors</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Price Elasticity Modeling</Text> - Understand demand sensitivity across different fare points and booking windows</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Predictive Price Forecasting</Text> - AI-powered predictions of future rate movements and optimal booking times</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Promotion Detection</Text> - Automatically identify sales, discounts, and special offers across the market</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Custom Reporting Suite</Text> - Tailored analytics dashboards and automated competitive intelligence reports</Text>
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
            Travel Fare Aggregation Success Stories
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="blue.600">OTA Increases Conversion Rate by 35%</Heading>
              <Text mb={4}>
                A mid-sized online travel agency used our fare aggregation platform to optimize their pricing 
                strategy across flight and hotel offerings. By analyzing competitors' pricing patterns and 
                identifying optimal rate positions, they implemented a dynamic pricing engine that adjusted 
                rates in real-time. This resulted in a 35% increase in conversion rates and a 28% growth in 
                overall booking volume within six months.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The comprehensive fare intelligence transformed our pricing strategy. We're now able to position 
                our rates optimally within the market at any given moment, which has dramatically improved our 
                conversion rates and revenue performance."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="blue.600">Hotel Chain Optimizes Revenue Management</Heading>
              <Text mb={4}>
                A luxury hotel chain leveraged our rate aggregation platform to monitor competitive pricing 
                across 150+ properties worldwide. By tracking rate parity issues and identifying pricing 
                opportunities in each market, they implemented market-specific pricing strategies. The 
                data-driven approach led to a 22% increase in RevPAR (Revenue Per Available Room) and a 
                15% improvement in overall occupancy rates.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The granular visibility into competitive pricing in each of our markets has been game-changing 
                for our revenue management team. We've significantly improved our pricing decisions, which has 
                directly impacted our bottom line across our entire property portfolio."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Global Coverage Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Global Travel Data Coverage
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our travel fare aggregation platform covers all major travel providers and segments worldwide
          </Text>
          
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={4} mt={8}>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Airlines</Text>
                <Text>1,200+</Text>
                <Text>Carriers</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Hotel Chains</Text>
                <Text>35,000+</Text>
                <Text>Properties</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Car Rentals</Text>
                <Text>650+</Text>
                <Text>Agencies</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Tour Operators</Text>
                <Text>420+</Text>
                <Text>Companies</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Cruise Lines</Text>
                <Text>180+</Text>
                <Text>Operators</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">OTAs & Metasearch</Text>
                <Text>350+</Text>
                <Text>Platforms</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="blue.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Transform Your Travel Pricing Strategy
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Start aggregating comprehensive travel fare data and optimize
            your pricing strategy with market-leading intelligence
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

export default TravelFareAggregationPage;