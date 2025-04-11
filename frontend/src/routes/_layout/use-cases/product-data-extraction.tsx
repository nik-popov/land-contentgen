import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon, DownloadIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/use-cases/product-data-extraction")({
  component: ProductDataExtractionPage,
});

function ProductDataExtractionPage() {
  const extractionFeatures = [
    { feature: "E-commerce Platforms", sites: "3,500+", fields: "85+", useCases: "Product listings, competitor analysis, market insights, price tracking" },
    { feature: "Marketplace Integration", sites: "250+", fields: "70+", useCases: "Vendor monitoring, buy box analysis, shipping options, seller feedback" },
    { feature: "Specification Extraction", sites: "4,200+", fields: "120+", useCases: "Technical specs, feature comparisons, compatibility details, product studies" },
    { feature: "Review & Sentiment", sites: "2,800+", fields: "45+", useCases: "User feedback, sentiment evaluation, product concerns, enhancement opportunities" },
    { feature: "Image & Media", sites: "3,100+", fields: "30+", useCases: "Visual inventories, asset organization, creative evaluation, brand oversight" },
    { feature: "Pricing Intelligence", sites: "5,000+", fields: "65+", useCases: "Price trends, discounts, promotions, bundle strategies, adaptive pricing" }
  ];

  const platformFeatures = [
    { 
      title: "Global Product Reach", 
      description: "Gather detailed product information from e-commerce platforms, marketplaces, manufacturer sites, and retailers worldwide", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" 
    },
    { 
      title: "AI-Driven Extraction", 
      description: "Our sophisticated machine learning algorithms accurately detect and retrieve product details from unstructured sources", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png" 
    },
    { 
      title: "Tailored Data Structure", 
      description: "Create custom product data schemas or leverage our industry-standard templates to capture precise data points", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Smart Data Refinement", 
      description: "Advanced processing that standardizes measurements, fixes inaccuracies, and unifies attributes for reliable output", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    }
  ];

  return (
    <>
      {/* Product Data Extraction Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Product Data Retrieval
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Gather extensive product details efficiently with our cutting-edge extraction tool designed for e-commerce and retail analysis.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Full Product Details</Heading>
              <Text>Retrieve in-depth product information such as specifications, pricing, visuals, descriptions, variants, and stock levels for complete market insights.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Worldwide Retail Access</Heading>
              <Text>Obtain product data from thousands of online stores, marketplaces, and brand sites globally, supporting multilingual extraction across key markets.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.600">Organized Data Delivery</Heading>
              <Text>Get neatly formatted product data in your chosen format, with our system refining, cleaning, and structuring information for immediate use.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Advantages of Product Data Retrieval
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">99.8%</StatNumber>
                <StatLabel>Data Precision Rate</StatLabel>
              </Stat>
              <Text>
                Our state-of-the-art extraction technology delivers near-perfect product data through rigorous validation and quality checks.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">95%</StatNumber>
                <StatLabel>Time Saved vs. Manual</StatLabel>
              </Stat>
              <Text>
                Automated extraction slashes the time and effort required for product data gathering by up to 95% compared to manual methods.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.600">Unlimited</StatNumber>
                <StatLabel>Scaling Potential</StatLabel>
              </Stat>
              <Text>
                Our system seamlessly scales from hundreds to millions of products while maintaining speed and data accuracy.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Extraction Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Robust Extraction Capabilities
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {extractionFeatures.map((feature, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{feature.feature}</StatLabel>
                  <Flex justify="space-between" align="center">
                    <StatNumber color="red.600">{feature.sites}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Sources</Text>
                  </Flex>
                  <Flex justify="space-between" align="center" mt={1}>
                    <StatNumber color="red.400">{feature.fields}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Attributes</Text>
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
            Cutting-Edge Extraction Technology
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our product data extraction platform harnesses advanced AI and machine learning for exceptional performance.
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Adaptive Extraction" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Dynamic Extraction Engine</Heading>
                <Text color="gray.600">Self-adapting algorithms that adjust to website updates and new layouts without requiring manual adjustments.</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Pattern Recognition" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Pattern Detection</Heading>
                <Text color="gray.600">Sophisticated pattern recognition that retrieves data from varied product page designs and formats.</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Semantic Understanding" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Contextual Analysis</Heading>
                <Text color="gray.600">Natural language processing that interprets product descriptions to extract relevant attributes and features.</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="Data Normalization" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Smart Data Standardization</Heading>
                <Text color="gray.600">Automated normalization of units, formats, and values for uniform, comparable product data across sources.</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Detailed Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Product Data Retrieval Features
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Data Gathering Capabilities</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Complete Product Specs</Text> - Retrieve all available product details and specifications.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Multi-Source Aggregation</Text> - Integrate data from retailers, marketplaces, and manufacturers.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Dynamic Content Processing</Text> - Extract data from JavaScript-driven pages and dynamic elements.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Visual Asset Retrieval</Text> - Collect product images, videos, 3D models, and other media.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Variant Tracking</Text> - Capture all product variations and their associated attributes.</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.600">Data Processing & Output</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Customizable Schema</Text> - Design your own data structure or use predefined industry templates.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Data Refinement & Enhancement</Text> - Automatic correction, standardization, and enrichment.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Flexible Export Options</Text> - Receive data in JSON, CSV, XML, or custom formats.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Live API Integration</Text> - Seamlessly connect with your systems through a robust API.</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Automated Delivery</Text> - Schedule data exports to your preferred storage or processing platforms.</Text>
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
            Product Data Retrieval Success Stories
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">Marketplace Seller Boosts Catalog by 400%</Heading>
              <Text mb={4}>
                An e-commerce retailer aimed to expand their product range but lacked the capacity to manually compile detailed listings. Using our extraction tool, they automatically gathered comprehensive data from supplier sites, enriched it with additional details, and generated 20,000 new high-quality listings in two weeks, resulting in a 62% revenue surge within three months.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "What would have taken months to do manually was completed in days with remarkable precision. The organized data enabled us to create consistent, detailed listings that significantly boosted our conversion rates across all product lines."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.600">Electronics Brand Tracks 15,000 Products Daily</Heading>
              <Text mb={4}>
                A consumer electronics company needed to oversee how their products were displayed across numerous retail partners. Our platform retrieved detailed product data, pricing, visuals, and placement information daily, enabling them to spot discrepancies, pricing violations, and unauthorized vendors. This thorough monitoring enhanced brand consistency and increased MAP compliance by 28% among retailers.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The insights we gained into our retail network were game-changing. We can now quickly detect issues with product listings, unauthorized pricing, and content accuracy across our entire distribution chain, safeguarding our brand and retailer partnerships."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Global Coverage Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Worldwide Data Retrieval Coverage
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our product data extraction platform spans major online retailers, marketplaces, and brand websites globally.
          </Text>
          
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={4} mt={8}>
              <VStack>
                <Text fontWeight="bold" color="red.600">E-commerce Sites</Text>
                <Text>3,500+</Text>
                <Text>Leading Retailers</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Marketplaces</Text>
                <Text>250+</Text>
                <Text>Global Platforms</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Brand Websites</Text>
                <Text>12,000+</Text>
                <Text>Manufacturer Sites</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Languages</Text>
                <Text>45+</Text>
                <Text>Supported</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Product Categories</Text>
                <Text>1,200+</Text>
                <Text>Specialized</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="red.600">Data Points</Text>
                <Text>350+</Text>
                <Text>Per Product</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="red.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Elevate Your Product Insights
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Begin collecting comprehensive product data and unlock valuable business insights today.
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

export default ProductDataExtractionPage;