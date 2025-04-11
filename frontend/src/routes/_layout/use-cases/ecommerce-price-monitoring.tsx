import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon, DownloadIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/use-cases/ecommerce-price-monitoring")({
  component: EcommercePriceMonitoringPage,
});

function EcommercePriceMonitoringPage() {
  const monitoringFeatures = [
    { feature: "Rival Observation", sites: "5,000+", updates: "Real-time", useCases: "Pricing benchmarks, MAP oversight, promo spotting, adaptive pricing" },
    { feature: "Past Data Review", sites: "3,500+", updates: "Hourly", useCases: "Price shifts, seasonal cycles, rival placement, industry trends" },
    { feature: "Item Pairing", sites: "4,200+", updates: "Continuous", useCases: "SKU syncing, variant identification, product catalog alignment, item benchmarking" },
    { feature: "Inventory Watch", sites: "2,800+", updates: "Real-time", useCases: "Stock monitoring, availability notices, restock trends, demand signals" },
    { feature: "Promo Insights", sites: "3,200+", updates: "Hourly", useCases: "Discount observation, package deals, rewards tracking, voucher analysis" },
    { feature: "Industry Perspectives", sites: "4,500+", updates: "Daily", useCases: "Sector patterns, market stance, competitive overview, pricing tactics" }
  ];

  const platformFeatures = [
    { 
      title: "Worldwide E-commerce Reach", 
      description: "Track pricing across 5,000+ online stores, marketplaces, and direct brands in over 50 nations", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" 
    },
    { 
      title: "AI-Enhanced Item Matching", 
      description: "Cutting-edge algorithms align identical or similar items across retailers with 99.8% precision", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png" 
    },
    { 
      title: "Instant Price Notifications", 
      description: "Get immediate alerts for rival price changes, new promotions, or stock shortages on critical items", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Smart Pricing Suggestions", 
      description: "Receive AI-based pricing advice tailored to rival actions, market shifts, and your custom rules", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    }
  ];

  return (
    <>
      {/* E-commerce Price Monitoring Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            E-commerce Pricing Tracker
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Monitor rival prices, refine your pricing approach, and boost 
            earnings with our sophisticated e-commerce pricing tool.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Rival Price Oversight</Heading>
              <Text>Keep an eye on competitor pricing live across thousands of online stores, marketplaces, and direct brands. Observe standard rates, special deals, and shifting price trends.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Smart Pricing Refinement</Heading>
              <Text>Use AI-driven pricing guidance based on rival data, industry patterns, and your unique rules. Implement automated adjustments to optimize profits while staying competitive.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Industry & Trend Insights</Heading>
              <Text>Unlock key understanding of pricing movements, market placement, and rival landscape. Spot chances for price tweaks and measure your strategy’s impact over time.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Core Advantages of Pricing Tracking
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">15%</StatNumber>
                <StatLabel>Profit Boost Average</StatLabel>
              </Stat>
              <Text>
                Users typically enjoy a 15% profit increase by refining pricing 
                with insights from competitive data.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">24/7</StatNumber>
                <StatLabel>Live Oversight</StatLabel>
              </Stat>
              <Text>
                Round-the-clock tracking ensures you catch every rival price 
                shift, promotion, or stock change.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">98%</StatNumber>
                <StatLabel>Research Time Cut</StatLabel>
              </Stat>
              <Text>
                Skip manual price checks and market studies with automated 
                coverage of your full rival landscape.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Monitoring Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Robust Tracking Capabilities
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {monitoringFeatures.map((feature, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{feature.feature}</StatLabel>
                  <Flex justify="space-between" align="center">
                    <StatNumber color="red.600">{feature.sites}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Stores</Text>
                  </Flex>
                  <Flex justify="space-between" align="center" mt={1}>
                    <StatNumber color="red.400">{feature.updates}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Refreshes</Text>
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
            Cutting-Edge Platform Tools
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our e-commerce pricing tracker blends innovative tech with extensive market reach
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Live Insights Panel" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Live Insights Panel</Heading>
                <Text color="gray.600">Detailed views of rival pricing, market stance, and past trends with adjustable notifications</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="AI Pairing" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">AI Item Pairing</Heading>
                <Text color="gray.600">Sophisticated algorithms that align matching or similar items across stores with 99.8% accuracy</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Adaptive Pricing" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Adaptive Pricing System</Heading>
                <Text color="gray.600">Apply automated pricing adjustments based on rival rates, stock levels, profit goals, and market position</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="System Syncing" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Smooth System Syncing</Heading>
                <Text color="gray.600">Link directly to your e-commerce setup, ERP, or pricing systems for seamless data updates</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Detailed Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Pricing Tracker Platform Features
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Rival Intelligence</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Live Price Monitoring</Text> - Track rival prices with pinpoint timing</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Promo Identification</Text> - Instantly spot sales, discounts, bundles, and deals</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">MAP Adherence Checks</Text> - Monitor compliance with minimum advertised prices across channels</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Stock Level Oversight</Text> - Track inventory changes and availability at rival sites</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Category Share Insights</Text> - Gauge your stance within specific product groups</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Pricing Strategy Tools</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Pricing Enhancement Engine</Text> - AI-guided suggestions to boost profits and market presence</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Custom Pricing Rules</Text> - Define tailored pricing based on rival moves and market conditions</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Scenario Testing</Text> - Explore pricing options and their effects on revenue and sales</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Trend History Review</Text> - Spot seasonal shifts and pricing rhythms to plan ahead</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Auto Price Updates</Text> - Sync with your e-commerce system for instant pricing changes</Text>
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
            Pricing Tracker Wins
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">Tech Retailer Lifts Margins by 22%</Heading>
              <Text mb={4}>
                A mid-sized tech retailer used our pricing tracker to monitor rivals across 15,000 SKUs. 
                By applying our smart pricing tips and finding spots to hold higher prices without losing 
                sales, they raised average profit margins by 22% in just 90 days.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The detailed rival pricing data let us refine our approach strategically. We found items 
                where we were underpricing unnecessarily and others where small cuts boosted sales significantly."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">Fashion Label Refines Promo Timing</Heading>
              <Text mb={4}>
                A global fashion label tapped our promo insights to track rival discount trends and timing. 
                Adjusting their promo schedule based on this data cut their average discount size by 8% while 
                keeping sales steady, lifting quarterly revenue by 15%.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Tracking both regular prices and promos across numerous rivals gave us unmatched market 
                insight. It reshaped our promo strategy entirely based on what we learned."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Market Coverage Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Extensive Market Reach
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our pricing tracker spans major e-commerce platforms and marketplaces worldwide
          </Text>
          
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={4} mt={8}>
              <VStack>
                <Text fontWeight="bold" color="red.600">Online Stores</Text>
                <Text>2,500+</Text>
                <Text>Tracked</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Market Hubs</Text>
                <Text>185+</Text>
                <Text>Included</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Nations</Text>
                <Text>54</Text>
                <Text>Worldwide Scope</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Item Groups</Text>
                <Text>500+</Text>
                <Text>Detailed</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Data Metrics</Text>
                <Text>25M+</Text>
                <Text>Daily Gathered</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Refresh Rate</Text>
                <Text>Real-time</Text>
                <Text>to Hourly</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="red.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Enhance Your Pricing Approach
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Begin tracking rival prices and amplifying your profits 
            with our robust pricing intelligence tool
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
              Try Free Today
            </Button>
          </Flex>
        </Box>
      </Box>
      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default EcommercePriceMonitoringPage;