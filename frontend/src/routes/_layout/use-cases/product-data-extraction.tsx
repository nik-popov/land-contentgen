import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon, DownloadIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/use-cases/product-data-extraction")({
  component: ProductDataExtractionPage,
});

function ProductDataExtractionPage() {
  const extractionFeatures = [
    { feature: "E-commerce Platforms", sites: "3,500+", fields: "85+", useCases: "Product catalogs, competitive analysis, market research, price monitoring" },
    { feature: "Marketplace Integration", sites: "250+", fields: "70+", useCases: "Seller monitoring, buy box tracking, fulfillment options, seller ratings" },
    { feature: "Specification Extraction", sites: "4,200+", fields: "120+", useCases: "Technical details, feature comparison, compatibility data, product research" },
    { feature: "Review & Sentiment", sites: "2,800+", fields: "45+", useCases: "Customer feedback, sentiment analysis, product issues, improvement areas" },
    { feature: "Image & Media", sites: "3,100+", fields: "30+", useCases: "Visual catalogs, asset management, creative analysis, brand monitoring" },
    { feature: "Pricing Intelligence", sites: "5,000+", fields: "65+", useCases: "Price points, discounts, promotions, bundling strategies, dynamic pricing" }
  ];

  const platformFeatures = [
    { 
      title: "Universal Product Coverage", 
      description: "Extract comprehensive product data from e-commerce sites, marketplaces, manufacturer websites, and retail platforms worldwide", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" 
    },
    { 
      title: "AI-Powered Data Extraction", 
      description: "Our advanced machine learning algorithms automatically identify and extract product attributes even from unstructured content", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png" 
    },
    { 
      title: "Custom Data Schema", 
      description: "Define your own product data schema or use our industry-specific templates to capture exactly the data points you need", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Automated Data Cleansing", 
      description: "Intelligent data processing that normalizes units, corrects errors, and standardizes attributes for consistent output", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    }
  ];

  return (
    <>
      {/* Product Data Extraction Hero Section */}
      <Box py={16} bg="blue.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Product Data Extraction
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Collect comprehensive product information at scale with our
            advanced extraction platform for e-commerce and retail intelligence.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Complete Product Attributes</Heading>
              <Text>Extract detailed product information including specifications, pricing, images, descriptions, variants, and availability. Capture every data point for complete product intelligence.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Global Retail Coverage</Heading>
              <Text>Access product data from thousands of online retailers, marketplaces, and brand websites worldwide. Our platform supports multi-language extraction across all major global markets.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.600">Structured Data Output</Heading>
              <Text>Receive perfectly structured product data in your preferred format. Our system normalizes, cleans, and organizes product information into consistent, usable datasets ready for analysis.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Key Benefits of Product Data Extraction
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">99.8%</StatNumber>
                <StatLabel>Data Accuracy Rate</StatLabel>
              </Stat>
              <Text>
                Our advanced extraction technology ensures virtually error-free
                product data with multi-point validation and quality controls.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">95%</StatNumber>
                <StatLabel>Time Saved vs. Manual</StatLabel>
              </Stat>
              <Text>
                Automated extraction reduces the time and resources needed for
                product data collection by up to 95% compared to manual processes.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.600">Unlimited</StatNumber>
                <StatLabel>Scaling Capability</StatLabel>
              </Stat>
              <Text>
                Our infrastructure scales effortlessly from hundreds to millions
                of products without compromising speed or data quality.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Extraction Features Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Comprehensive Extraction Capabilities
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {extractionFeatures.map((feature, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{feature.feature}</StatLabel>
                  <Flex justify="space-between" align="center">
                    <StatNumber color="blue.600">{feature.sites}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Sources</Text>
                  </Flex>
                  <Flex justify="space-between" align="center" mt={1}>
                    <StatNumber color="blue.400">{feature.fields}</StatNumber>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Attributes</Text>
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
            Advanced Extraction Technology
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our product data extraction platform leverages cutting-edge AI and machine learning for unmatched performance
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Adaptive Extraction" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Adaptive Extraction Engine</Heading>
                <Text color="gray.600">Self-learning algorithms that automatically adapt to site changes and new layouts without manual intervention</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Pattern Recognition" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Pattern Recognition</Heading>
                <Text color="gray.600">Advanced pattern matching that identifies and extracts data from diverse product page layouts and structures</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Semantic Understanding" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Semantic Understanding</Heading>
                <Text color="gray.600">Natural language processing that comprehends product descriptions and extracts meaningful attributes and features</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="Data Normalization" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Intelligent Data Normalization</Heading>
                <Text color="gray.600">Automated standardization of units, formats, and values for consistent, comparable product data across sources</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Detailed Features Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Product Data Extraction Features
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="blue.600">Data Collection Capabilities</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Complete Product Attributes</Text> - Extract all available product specifications and details</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Multi-source Integration</Text> - Combine data from multiple retailers, marketplaces, and manufacturers</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Dynamic Content Handling</Text> - Extract data from JavaScript-rendered pages and dynamic content</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Image & Media Extraction</Text> - Collect product images, videos, 3D models, and visual assets</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Variant Mapping</Text> - Capture all product variations, options, and their respective attributes</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="blue.600">Data Processing & Delivery</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Custom Data Schema</Text> - Define your own data structure or use industry-specific templates</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Data Cleaning & Enrichment</Text> - Automated correction, standardization, and enhancement</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Multiple Export Formats</Text> - Receive data in JSON, CSV, XML, or custom formats</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Real-time API Access</Text> - Direct integration with your systems via comprehensive API</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.600" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Scheduled Exports</Text> - Automated delivery to your preferred storage or processing systems</Text>
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
            Product Data Extraction Success Stories
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="blue.600">Marketplace Seller Expands Product Catalog by 400%</Heading>
              <Text mb={4}>
                An online retailer needed to rapidly expand their product offerings but lacked the resources 
                to manually create detailed product listings. Using our extraction platform, they automatically 
                collected comprehensive product data from manufacturer websites, enriched it with additional 
                specifications, and created 20,000 new high-quality listings in just two weeks, leading to a 
                62% increase in revenue within three months.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "What would have taken our team months to complete manually was done in days with incredible 
                accuracy. The structured data allowed us to create consistent, detailed product listings that 
                significantly improved our conversion rates across all categories."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="blue.600">Electronics Brand Monitors 15,000 Products Daily</Heading>
              <Text mb={4}>
                A consumer electronics manufacturer needed to monitor how their products were being presented 
                across hundreds of retail partners. Our platform extracted detailed product information, 
                pricing, imagery, and placement data daily, allowing them to identify inconsistencies, 
                pricing violations, and unauthorized sellers. This comprehensive monitoring improved brand 
                consistency and led to a 28% increase in MAP compliance among retailers.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The visibility we gained into our retail ecosystem was transformative. We can now instantly 
                identify issues with product listings, unauthorized discounting, and content accuracy across 
                our entire distribution network, protecting both our brand integrity and retailer relationships."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Global Coverage Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Global Data Extraction Coverage
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our product data extraction platform covers all major online retailers, marketplaces, and brand sites worldwide
          </Text>
          
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={4} mt={8}>
              <VStack>
                <Text fontWeight="bold" color="blue.600">E-commerce Sites</Text>
                <Text>3,500+</Text>
                <Text>Major Retailers</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Marketplaces</Text>
                <Text>250+</Text>
                <Text>Global Platforms</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Brand Websites</Text>
                <Text>12,000+</Text>
                <Text>Manufacturer Sites</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Languages</Text>
                <Text>45+</Text>
                <Text>Supported</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Product Categories</Text>
                <Text>1,200+</Text>
                <Text>Specialized</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="blue.600">Data Points</Text>
                <Text>350+</Text>
                <Text>Per Product</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="blue.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Transform Your Product Intelligence
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Start extracting comprehensive product data and gain
            valuable insights for your business today
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
              href="https://dashboard.thedataproxy.com/signup"
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

export default ProductDataExtractionPage;