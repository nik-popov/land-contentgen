import { Box, Flex, Grid, Heading, Image, Text, VStack, Button, Link } from "@chakra-ui/react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import HeroSection from '../../components/HeroSection';
import Footer from '../../components/Common/Footer'; // Import the new Footer component

export const Route = createFileRoute("/_layout/")({
  component: LandingPage,
});

function LandingPage() {
  const navigate = useNavigate();
  return (
    <Box>
      <HeroSection />
    {/* Section 3: Proxy Network Coverage for Web Scraping */}
    <Box py={16} bg="gray.50" color="gray.800">
        <Heading as="h2" size="2xl" textAlign="center" mb={10} fontWeight="medium">
          Global Web Scraping Proxy Network
        </Heading>
        <Flex justify="space-around" flexWrap="wrap" maxW="1200px" mx="auto" px={4}>
          <VStack textAlign="center" p={4} minW="150px" spacing={2}>
            <Text fontSize="4xl" fontWeight="bold" color="orange.400">190+</Text>
            <Text fontSize="lg">Countries</Text>
          </VStack>
          <VStack textAlign="center" p={4} minW="150px" spacing={2}>
            <Text fontSize="4xl" fontWeight="bold" color="orange.400">99.9%</Text>
            <Text fontSize="lg">Uptime</Text>
          </VStack>
          <VStack textAlign="center" p={4} minW="150px" spacing={2}>
            <Text fontSize="4xl" fontWeight="bold" color="orange.400">24/7</Text>
            <Text fontSize="lg">Support</Text>
          </VStack>
          <VStack textAlign="center" p={4} minW="150px" spacing={2}>
            <Text fontSize="4xl" fontWeight="bold" color="orange.400">10M+</Text>
            <Text fontSize="lg">IP Pool</Text>
          </VStack>
          <VStack textAlign="center" p={4} minW="150px" spacing={2}>
            <Text fontSize="4xl" fontWeight="bold" color="orange.400">Unlimited</Text>
            <Text fontSize="lg">Capacity</Text>
          </VStack>
        </Flex>
      </Box>
        {/* Cloud Provider Links */}
        <Box py={10} bg="grey.50">
        <Flex justify="center" gap={8} flexWrap="wrap">
          <Link href="https://aws.amazon.com" isExternal>
            <Image
              src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png"
              alt="AWS Logo"
              boxSize="50px"
            />
          </Link>
          <Link href="https://cloud.google.com" isExternal>
            <Image
              src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/gcp.png"
              alt="GCP Logo"
              boxSize="50px"
            />
          </Link>
          <Link href="https://azure.microsoft.com" isExternal>
            <Image
              src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/microsoft_azure.png"
              alt="Microsoft Azure Logo"
              boxSize="50px"
            />
          </Link>
          <Link href="https://www.ibm.com/cloud" isExternal>
            <Image
              src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/ibm_cloud.png"
              alt="IBM Cloud Logo"
              boxSize="50px"
            />
          </Link>
          <Link href="https://www.digitalocean.com" isExternal>
            <Image
              src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/digital_ocean.png"
              alt="Digital Ocean Logo"
              boxSize="50px"
            />
          </Link>
        </Flex>
      </Box>

  
    {/* Section 2: Proxy Features for Web Scraping */}
    <Box py={16} bg="white" maxW="1200px" mx="auto" px={4}>
        <Heading as="h2" size="2xl" textAlign="center" mb={10} color="gray.800" fontWeight="medium"  pb="5">
          Advanced Web Scraping Proxy Features
        </Heading>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium" textAlign="left" >
              Robust Security
            </Heading>
            <Text color="gray.600">
              Strong encryption with reliable authentication methods
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium" textAlign="left">
              Fast Response Times
            </Heading>
            <Text color="gray.600">
              Optimized infrastructure for efficient data collection
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium" textAlign="left">
              Cloud Integration
            </Heading>
            <Text color="gray.600">
              Seamless compatibility with popular cloud platforms
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium" textAlign="left">
              Intelligent Routing
            </Heading>
            <Text color="gray.600">
              Effective algorithms for reliable connection management
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium" textAlign="left">
              Compliance
            </Heading>
            <Text color="gray.600">
              ISO 27001, SOC 2, and GDPR compatible
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium" textAlign="center">
              Scalable Scraping 
            </Heading>
            <Text color="gray.600">
            Cost-effective web scraping for businesses of all sizes.
            </Text>
          </VStack>
        </Grid>
      </Box>

    

      {/* Section 1: Web Scraping Infrastructure - Centered */}
      <Box py={16} bg="gray.50" maxW="1200px" mx="auto" px={4}>
        <VStack spacing={8} textAlign="center">
          <Heading as="h2" size="2xl" color="gray.800" fontWeight="medium">
            Web Scraping Infrastructure
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="800px">
            Our reliable proxy network delivers effective data collection capabilities for organizations requiring web scraping solutions. Specifically designed for data extraction, competitor monitoring, price comparison, and machine learning data acquisition, our infrastructure helps overcome access limitations while maintaining reliable performance and regulatory compliance.
          </Text>
          <Flex justify="center" gap={6} flexWrap="wrap">
            <Image
              src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png"
              alt="JavaScript Logo"
              boxSize="40px"
            />
            <Image
              src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/http.png"
              alt="HTTP Logo"
              boxSize="40px"
            />
            <Image
              src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/selenium.png"
              alt="Selenium Logo"
              boxSize="40px"
            />
            <Image
              src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png"
              alt="Python Logo"
              boxSize="40px"
            />
            <Image
              src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png"
              alt="REST Logo"
              boxSize="40px"
            />
          </Flex>
        </VStack>
      </Box>

          <Box py={16} bg="white" maxW="1200px" mx="auto" px={4}>
        <Heading as="h2" size="2xl" textAlign="center" mb={10} color="gray.800" fontWeight="medium">
          Web Scraping Business Solutions
        </Heading>
        <Text fontSize="lg" color="gray.600" textAlign="center" mb={8} maxW="800px" mx="auto">
          Our specialized web scraping proxy infrastructure powers a wide range of business applications, 
          helping companies gather the insights they need to make data-driven decisions.
        </Text>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Market Research
            </Heading>
            <Text color="gray.600">
              Collect comprehensive market data through automated web scraping. Monitor emerging trends, 
              track consumer sentiment, and identify new opportunities before your competitors. Our proxies 
              ensure reliable access to global market information.
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              AI Training Datasets
            </Heading>
            <Text color="gray.600">
              Build robust machine learning datasets through efficient web scraping. Our proxy network 
              helps AI researchers and developers gather diverse, high-quality training data from multiple 
              sources while respecting rate limits and maintaining ethical collection practices.
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Price Monitoring
            </Heading>
            <Text color="gray.600">
              Track competitor pricing across thousands of products and dozens of websites simultaneously. 
              Optimize your market position with real-time data on price changes, discounts, and promotional 
              activities. Our scraping infrastructure scales with your monitoring needs.
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Content Aggregation
            </Heading>
            <Text color="gray.600">
              Gather and analyze content from multiple web sources to create comprehensive knowledge bases, 
              comparison services, or specialized search engines. Our proxies help maintain consistent access 
              to content sources while avoiding IP blocks.
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Lead Generation
            </Heading>
            <Text color="gray.600">
              Extract business contact information, job postings, and company details to fuel your sales 
              pipeline. Our proxy network enables consistent, reliable access to business directories and 
              professional networks while maintaining collection integrity and compliance.
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              SEO Monitoring
            </Heading>
            <Text color="gray.600">
              Track search engine rankings, analyze competitors' SEO strategies, and monitor backlink profiles 
              from multiple geographic locations. Our global proxy network provides authentic local search results 
              to inform your regional SEO campaigns.
            </Text>
          </VStack>
        </Grid>
      </Box>

{/* Call to Action Section */}
<Box py={16} bg="gray.50" textAlign="center" maxW="1200px" mx="auto" px={4}>
  <Heading as="h2" size="2xl" color="gray.800" mb={6} fontWeight="medium">
    Ready to Get Started?
  </Heading>
  <Text fontSize="lg" color="gray.600" mb={8}>
    Experience our enterprise-grade proxy solutions today
  </Text>
  <Flex justify="center" gap={4}>
    <Button
      border="2px solid"
      borderColor="orange.400"
      color="orange.400"
      bg="transparent"
      size="lg"
      _hover={{ bg: "orange.400", color: "white" }}
      onClick={() => navigate({ to: "/technical-assessment" })}
    >
      Start Technical Assessment
    </Button>
    <Button
      border="2px solid"
      borderColor="orange.400"
      color="orange.400"
      bg="transparent"
      size="lg"
      _hover={{ bg: "orange.400", color: "white" }}
      onClick={() => navigate({ to: "/consultation" })}
    >
      Schedule Consultation
    </Button>
    <Button
      border="2px solid"
      borderColor="orange.400"
      color="orange.400"
      bg="transparent"
      size="lg"
      _hover={{ bg: "orange.400", color: "white" }}
      as="a"
      href="/proxy-solution-guide.pdf"
      download
    >
      Download Solution Guide
    </Button>
  </Flex>
</Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
}

export default LandingPage;