import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon, DownloadIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/use-cases/travel-fare-aggregation")({
  component: TravelFareAggregationPage,
});

function TravelFareAggregationPage() {
  const aggregationFeatures = [
    { feature: "Airline Pricing", sources: "1,200+", fields: "85+", useCases: "Cost comparison, flight path insights, carrier rates, peak season trends" },
    { feature: "Lodging Costs", sources: "35,000+", fields: "75+", useCases: "Price benchmarking, room availability, flexible pricing, deal tracking" },
    { feature: "Vehicle Rentals", sources: "650+", fields: "60+", useCases: "Rate analysis, vehicle stock, regional pricing, seasonal shifts" },
    { feature: "Holiday Bundles", sources: "420+", fields: "90+", useCases: "Package pricing, deal value, provider comparisons, seasonal specials" },
    { feature: "Cruise Pricing", sources: "180+", fields: "110+", useCases: "Room rates, route breakdowns, extra services, seasonal discounts" },
    { feature: "Insurance Plans", sources: "350+", fields: "65+", useCases: "Plan comparisons, cost analysis, coverage details, regional variations" }
  ];

  const platformFeatures = [
    { 
      title: "Worldwide Travel Insights", 
      description: "Compile pricing and fare data from airlines, hotels, OTAs, rental services, and cruises across key global regions", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" 
    },
    { 
      title: "Live Rate Monitoring", 
      description: "Observe price shifts and fare updates instantly with automated notifications and past trend reviews", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png" 
    },
    { 
      title: "Smart Pricing Tools", 
      description: "AI-driven systems to spot trends, forecast rate changes, and pinpoint the best booking times", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Unified Data Processing", 
      description: "Advanced tools to standardize pricing formats, accommodation types, booking terms, and additional offerings", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    }
  ];

  return (
    <>
      {/* Travel Fare Aggregation Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Travel Pricing Compilation
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Gather and evaluate extensive travel cost data from numerous sources to enhance your price comparison and market insights.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Broad Pricing Coverage</Heading>
              <Text>Collect cost details from airlines, hotels, car rentals, cruises, and travel agencies globally, including rates, availability, terms, and cancellation rules.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Instant Cost Updates</Heading>
              <Text>Track price changes and adjustments across travel sectors in real time, with alerts for shifts and quick identification of limited-time deals.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Market Positioning</Heading>
              <Text>Analyze rates against competitors, understand market standings, and monitor pricing tactics to build informed pricing strategies.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Advantages of Travel Pricing Compilation
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">18%</StatNumber>
                <StatLabel>Revenue Boost</StatLabel>
              </Stat>
              <Text>
                Travel businesses leveraging our pricing compilation see an average 18% revenue rise through smarter pricing approaches.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">99.9%</StatNumber>
                <StatLabel>Accuracy Level</StatLabel>
              </Stat>
              <Text>
                Our rigorous validation ensures near-perfect precision in all compiled travel pricing data.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">250M+</StatNumber>
                <StatLabel>Daily Rate Points</StatLabel>
              </Stat>
              <Text>
                Our system processes over 250 million travel price points daily across flights, accommodations, rentals, and more.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Aggregation Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Extensive Travel Price Gathering
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {aggregationFeatures.map((feature, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{feature.feature}</StatLabel>
                  <Flex justify="space-between" align="center">
                    <StatNumber color="red.600">{feature.sources}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Providers</Text>
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
            Cutting-Edge Pricing Technology
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our pricing compilation platform blends innovative tools with broad global reach
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Live Price Checks" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Live Price Checks</Heading>
                <Text color="gray.600">Instant tracking of rate shifts with historical comparisons and trend spotting</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Rate Schedules" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Rate Schedules</Heading>
                <Text color="gray.600">Future-focused pricing insights with booking period analysis and seasonal rate trends</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Booking Terms" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Booking Terms Insights</Heading>
                <Text color="gray.600">Auto-extraction and analysis of reservation terms, cancellation rules, and restrictions</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="Extra Services" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Extra Services Tracking</Heading>
                <Text color="gray.600">Monitor and evaluate add-on costs like luggage fees, seat choices, meals, and perks</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Detailed Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Pricing Compilation Capabilities
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Collection & Standardization</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Multi-Source Collection</Text> - Gather rates from GDSs, OTAs, direct providers, and search platforms</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Currency Alignment</Text> - Unify rates across currencies with live exchange conversions</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Service Sorting</Text> - Auto-group and match similar travel offerings across providers</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Fee Breakdown</Text> - Split base costs from taxes, fees, and extras for clear comparisons</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Past Rate Records</Text> - Store detailed pricing history for trend tracking and predictions</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Analysis & Insights</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Market Rate Standing</Text> - See how your prices stack up against rivals</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Demand Sensitivity</Text> - Gauge price impacts across booking periods and rates</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Rate Predictions</Text> - AI-based forecasts for price trends and booking sweet spots</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Deal Spotting</Text> - Auto-detect sales, discounts, and market-wide promotions</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Tailored Insights</Text> - Custom dashboards and automated market reports</Text>
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
            Pricing Compilation Wins
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">OTA Boosts Bookings by 35%</Heading>
              <Text mb={4}>
                A growing online travel agency used our platform to refine pricing for flights and hotels. By studying competitor trends and finding ideal price points, they rolled out a real-time pricing system, lifting conversions by 35% and bookings by 28% in six months.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The detailed pricing insights reshaped our strategy. We can now set rates perfectly in the market at any time, driving up conversions and revenue significantly."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">Hotel Group Enhances Earnings</Heading>
              <Text mb={4}>
                A premium hotel chain tapped our platform to track competitor rates across 150+ locations globally. By spotting parity gaps and market opportunities, they tailored pricing per region, increasing RevPAR by 22% and occupancy by 15%.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The precise view of competitor pricing in each market has been transformative for our revenue team. Our pricing choices have directly lifted profits across all properties."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Global Coverage Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Worldwide Travel Reach
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our pricing platform spans major travel providers and categories across the globe
          </Text>
          
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={4} mt={8}>
              <VStack>
                <Text fontWeight="bold" color="red.600">Airlines</Text>
                <Text>1,200+</Text>
                <Text>Operators</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Hotels</Text>
                <Text>35,000+</Text>
                <Text>Sites</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Rentals</Text>
                <Text>650+</Text>
                <Text>Services</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Tour Agencies</Text>
                <Text>420+</Text>
                <Text>Firms</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Cruises</Text>
                <Text>180+</Text>
                <Text>Lines</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">OTAs & Search</Text>
                <Text>350+</Text>
                <Text>Sites</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="red.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Elevate Your Travel Pricing
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Start compiling extensive travel pricing data to sharpen your strategy with top-tier market insights
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
              Schedule Demo
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
              Begin Free Trial
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