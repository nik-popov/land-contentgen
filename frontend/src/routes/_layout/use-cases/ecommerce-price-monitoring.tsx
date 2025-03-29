import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon, DownloadIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/use-cases/ecommerce-price-monitoring")({
  component: EcommercePriceMonitoringPage,
});

function EcommercePriceMonitoringPage() {
  const monitoringFeatures = [
    { feature: "Competitor Tracking", sites: "5,000+", updates: "Real-time", useCases: "Price comparison, MAP monitoring, promotional detection, dynamic pricing" },
    { feature: "Historical Analysis", sites: "3,500+", updates: "Hourly", useCases: "Pricing trends, seasonal patterns, competitive positioning, market analysis" },
    { feature: "Product Matching", sites: "4,200+", updates: "Continuous", useCases: "SKU alignment, variant detection, catalog mapping, product comparison" },
    { feature: "Stock Monitoring", sites: "2,800+", updates: "Real-time", useCases: "Inventory tracking, availability alerts, restocking patterns, market demand" },
    { feature: "Promotional Analysis", sites: "3,200+", updates: "Hourly", useCases: "Discount tracking, bundle offers, loyalty programs, coupon monitoring" },
    { feature: "Market Insights", sites: "4,500+", updates: "Daily", useCases: "Category trends, market positioning, competitive landscape, pricing strategy" }
  ];

  const platformFeatures = [
    { 
      title: "Global E-commerce Coverage", 
      description: "Monitor prices across 5,000+ online retailers, marketplaces, and direct-to-consumer brands in over 50 countries", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" 
    },
    { 
      title: "AI-Powered Product Matching", 
      description: "Our advanced algorithms automatically match identical and similar products across different retailers with 99.8% accuracy", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png" 
    },
    { 
      title: "Real-time Price Alerts", 
      description: "Receive instant notifications when competitors change prices, launch promotions, or go out of stock on key products", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Dynamic Pricing Recommendations", 
      description: "Get AI-driven pricing recommendations based on competitive landscape, market trends, and your business rules", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    }
  ];

  return (
    <>
      {/* E-commerce Price Monitoring Hero Section */}
      <Box py={16} bg="blue.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            E-commerce Price Monitoring
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Track competitor prices, optimize your pricing strategy, and maximize
            profitability with our advanced e-commerce price monitoring platform.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Competitor Price Tracking</Heading>
              <Text>Monitor your competitors' prices in real-time across thousands of online retailers, marketplaces, and direct-to-consumer brands. Track regular prices, promotional offers, and dynamic pricing patterns.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Intelligent Price Optimization</Heading>
              <Text>Leverage AI-powered pricing recommendations based on competitive data, market trends, and your specific business rules. Set automated repricing strategies to maximize margins while maintaining market competitiveness.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Market & Trend Analysis</Heading>
              <Text>Gain valuable insights into pricing trends, market positioning, and competitive landscape. Identify opportunities for pricing adjustments and track the effectiveness of your pricing strategies over time.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Key Benefits of Price Monitoring
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">15%</StatNumber>
                <StatLabel>Average Margin Improvement</StatLabel>
              </Stat>
              <Text>
                Our customers typically see a 15% increase in profit margins
                through optimized pricing strategies based on competitive intelligence.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">24/7</StatNumber>
                <StatLabel>Real-time Monitoring</StatLabel>
              </Stat>
              <Text>
                Continuous monitoring of competitor prices ensures you never
                miss a price change, promotion, or inventory fluctuation.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">98%</StatNumber>
                <StatLabel>Time Saved on Research</StatLabel>
              </Stat>
              <Text>
                Eliminate manual price checking and market research with
                automated monitoring of your entire competitive landscape.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Monitoring Features Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Comprehensive Monitoring Features
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {monitoringFeatures.map((feature, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{feature.feature}</StatLabel>
                  <Flex justify="space-between" align="center">
                    <StatNumber color="blue.600">{feature.sites}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Retailers</Text>
                  </Flex>
                  <Flex justify="space-between" align="center" mt={1}>
                    <StatNumber color="blue.400">{feature.updates}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Updates</Text>
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
            Advanced Platform Capabilities
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our e-commerce price monitoring platform combines cutting-edge technology with comprehensive market coverage
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Real-time Dashboard" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Real-time Monitoring Dashboard</Heading>
                <Text color="gray.600">Comprehensive visualization of competitor pricing, market positioning, and historical trends with customizable alerts</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="AI Matching" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">AI Product Matching</Heading>
                <Text color="gray.600">Advanced algorithms that automatically match identical and similar products across retailers with 99.8% accuracy</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Dynamic Pricing" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Dynamic Pricing Engine</Heading>
                <Text color="gray.600">Set automated pricing rules based on competitor prices, inventory levels, margin targets, and market position</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="API Integration" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Seamless API Integration</Heading>
                <Text color="gray.600">Connect directly with your e-commerce platform, ERP system, or pricing tools for automated data synchronization</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Detailed Features Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Price Monitoring Platform Features
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="blue.600">Competitive Intelligence</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Real-time Price Tracking</Text> - Monitor competitor prices with up-to-the-minute accuracy</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Promotional Detection</Text> - Automatically identify sales, discounts, bundles, and special offers</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">MAP Compliance Monitoring</Text> - Track minimum advertised price adherence across all channels</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Product Availability Tracking</Text> - Monitor stock levels and inventory changes at competitor sites</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Market Share Analysis</Text> - Understand your positioning within specific product categories</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="blue.600">Strategic Pricing Tools</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Price Optimization Engine</Text> - AI-driven recommendations to maximize margins and market share</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Rule-based Pricing</Text> - Set custom pricing rules based on competitor activities and market conditions</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">What-if Analysis</Text> - Simulate different pricing scenarios and their impact on sales and profitability</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Historical Trend Analysis</Text> - Identify seasonal patterns and pricing cycles to anticipate changes</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Automated Repricing</Text> - Direct integration with your e-commerce platform for immediate price updates</Text>
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
            Price Monitoring Success Stories
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="blue.600">Electronics Retailer Increases Margins by 22%</Heading>
              <Text mb={4}>
                A mid-sized electronics retailer used our price monitoring platform to track competitors 
                across 15,000 SKUs. By implementing our dynamic pricing recommendations and identifying 
                opportunities where they could maintain higher prices without losing sales, they increased 
                their average profit margin by 22% within the first 90 days.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The granular insights into our competitor pricing allowed us to be much more strategic 
                with our pricing decisions. We discovered numerous products where we were unnecessarily 
                undercutting the market, and others where slight price reductions dramatically improved conversion."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="blue.600">Fashion Brand Optimizes Promotional Strategy</Heading>
              <Text mb={4}>
                A global fashion brand leveraged our promotional analysis tools to monitor competitor 
                discount patterns and timing. By adjusting their promotional calendar based on these 
                insights, they reduced their average discount depth by 8% while maintaining sales volume, 
                resulting in a 15% increase in quarterly revenue.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The ability to track not just regular prices but promotional activities across hundreds 
                of competitors gave us unprecedented insight into market dynamics. We've completely 
                transformed our promotional strategy based on these insights."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Market Coverage Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Comprehensive Market Coverage
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our price monitoring solution covers all major e-commerce sites and marketplaces globally
          </Text>
          
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={4} mt={8}>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Online Retailers</Text>
                <Text>2,500+</Text>
                <Text>Monitored</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Marketplaces</Text>
                <Text>185+</Text>
                <Text>Covered</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Countries</Text>
                <Text>54</Text>
                <Text>Global Reach</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Product Categories</Text>
                <Text>500+</Text>
                <Text>Specialized</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Data Points</Text>
                <Text>25M+</Text>
                <Text>Daily Collection</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Update Frequency</Text>
                <Text>Real-time</Text>
                <Text>to Hourly</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="blue.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Optimize Your Pricing Strategy
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Start monitoring competitor prices and maximizing your
            profitability with our powerful price intelligence platform
          </Text>
          
          <Flex justify="center" gap={6} flexWrap="wrap">
          <Button
              size="lg"
              bg="white"
              color="purple.500"
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
              href="https://dashboard.thedataproxy.com/signup"
            >
              Start Free Trial
            </Button>
          </Flex>
        </Box>
      </Box>
      
      {/* Integration Partners */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h3" size="lg" mb={8} fontWeight="medium">
            Powered by Advanced Web Technologies
          </Heading>
          <Flex justify="center" gap={8} flexWrap="wrap">
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png" alt="Python" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/selenium.png" alt="Selenium" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="AWS" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/docker.png" alt="Docker" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" alt="Kubernetes" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Redis" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png" alt="MongoDB" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postgresql.png" alt="PostgreSQL" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="REST API" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png" alt="JavaScript" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/html.png" alt="HTML" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/css.png" alt="CSS" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png" alt="Node.js" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png" alt="React" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/typescript.png" alt="TypeScript" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rabbitmq.png" alt="RabbitMQ" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/graphql.png" alt="GraphQL" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/git.png" alt="Git" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/prometheus.png" alt="Prometheus" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Grafana" boxSize="50px" />
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

export default EcommercePriceMonitoringPage;