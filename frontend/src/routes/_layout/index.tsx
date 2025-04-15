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
      <HeroSection
        title="Your Portal to Effortless Web Connectivity"
        subtitle="SaaS proxy services crafted for large-scale data handling, web crawling, AI model training, and more."
        ctas={[
          { text: "Begin Now", link: "/demo-request" },
          { text: "Try for Free", link: "https://buy.stripe.com/4gwg1C2by9Cs2Ry6op" },
        ]}
        bgImage="https://images.unsplash.com/photo-1625685554528-2a0b517e094c"
      />
      
      {/* Section 3: Proxy Network Coverage for Web Scraping */}
      <Box py={16} bg="red.50" color="gray.800">
        <Heading as="h2" size="2xl" textAlign="center" mb={10} fontWeight="medium">
          Worldwide Proxy Network for Web Crawling
        </Heading>
        <Flex justify="space-around" flexWrap="wrap" maxW="1200px" mx="auto" px={4}>
          <VStack textAlign="center" p={4} minW="150px" spacing={2}>
            <Text fontSize="4xl" fontWeight="bold" color="red.600">200+</Text>
            <Text fontSize="lg">Locations Covered</Text>
          </VStack>
          <VStack textAlign="center" p={4} minW="150px" spacing={2}>
            <Text fontSize="4xl" fontWeight="bold" color="red.600">99.8%</Text>
            <Text fontSize="lg">Availability</Text>
          </VStack>
          <VStack textAlign="center" p={4} minW="150px" spacing={2}>
            <Text fontSize="4xl" fontWeight="bold" color="red.600">24/7</Text>
            <Text fontSize="lg">Customer Support</Text>
          </VStack>
          <VStack textAlign="center" p={4} minW="150px" spacing={2}>
            <Text fontSize="4xl" fontWeight="bold" color="red.600">15M+</Text>
            <Text fontSize="lg">IP Addresses</Text>
          </VStack>
          <VStack textAlign="center" p={4} minW="150px" spacing={2}>
            <Text fontSize="4xl" fontWeight="bold" color="red.600">Unlimited</Text>
            <Text fontSize="lg">Bandwidth</Text>
          </VStack>
        </Flex>
      </Box>
      
      {/* Cloud Provider Links */}
      <Box py={10} bg="red.50">
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
        <Heading as="h2" size="2xl" textAlign="center" mb={10} color="gray.800" fontWeight="medium" pb="5">
          Cutting-Edge Proxy Capabilities for Web Crawling
        </Heading>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium" textAlign="left">
              Enhanced Security
            </Heading>
            <Text color="gray.600">
              Advanced encryption paired with secure authentication protocols
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium" textAlign="left">
              Swift Data Delivery
            </Heading>
            <Text color="gray.600">
              High-performance systems for rapid information retrieval
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium" textAlign="left">
              Cloud Compatibility
            </Heading>
            <Text color="gray.600">
              Smooth integration with leading cloud ecosystems
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium" textAlign="left">
              Smart Traffic Routing
            </Heading>
            <Text color="gray.600">
              Sophisticated algorithms for stable connection handling
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium" textAlign="left">
              Regulatory Compliance
            </Heading>
            <Text color="gray.600">
              Adheres to ISO 27001, SOC 2, and GDPR standards
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium" textAlign="center">
              Flexible Web Crawling
            </Heading>
            <Text color="gray.600">
              Budget-friendly scraping solutions for enterprises of all scales
            </Text>
          </VStack>
        </Grid>
      </Box>

      <Box py={16} bg="red.50" maxW="1200px" mx="auto" px={4}>
        <Heading as="h2" size="2xl" textAlign="center" mb={10} color="gray.800" fontWeight="medium">
          Tailored Web Scraping Solutions for Businesses
        </Heading>
        <Text fontSize="lg" color="gray.600" textAlign="center" mb={8} maxW="800px" mx="auto">
          Our advanced proxy infrastructure supports a variety of business use cases, 
          enabling organizations to extract valuable insights for informed decision-making.
        </Text>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Competitive Analysis
            </Heading>
            <Text color="gray.600">
              Gather extensive market intelligence through automated crawling. Stay ahead by 
              monitoring industry trends, consumer preferences, and emerging opportunities with 
              reliable access to global data sources.
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              AI Data Collection
            </Heading>
            <Text color="gray.600">
              Create comprehensive datasets for machine learning with efficient web crawling. 
              Our proxies enable researchers to ethically collect diverse, high-quality data 
              from various sources while respecting platform limits.
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Pricing Intelligence
            </Heading>
            <Text color="gray.600">
              Monitor competitor prices across countless products and websites in real time. 
              Strengthen your market strategy with insights into pricing trends, promotions, 
              and discounts, scalable to your needs.
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Data Aggregation
            </Heading>
            <Text color="gray.600">
              Compile content from diverse online sources to build knowledge hubs, comparison 
              tools, or niche search platforms. Our proxies ensure uninterrupted access to 
              content while preventing IP restrictions.
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Sales Prospecting
            </Heading>
            <Text color="gray.600">
              Extract business contacts, job listings, and company information to boost your 
              sales efforts. Our proxy network ensures dependable access to directories and 
              professional platforms while upholding compliance.
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              SEO Tracking
            </Heading>
            <Text color="gray.600">
              Monitor search engine performance, analyze rival SEO tactics, and track backlinks 
              across multiple regions. Our global proxies deliver accurate localized search 
              data to optimize your regional campaigns.
            </Text>
          </VStack>
        </Grid>
      </Box>

      {/* Call to Action */}
      <Box py={16} bg="red.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Ready to Turn Web Data into Powerful APIs?
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Start leveraging our HTML scraper APIs to unlock structured web data 
            for your applications, analytics, and strategic insights.
          </Text>
          
          <Flex justify="center" gap={6} flexWrap="wrap">
            <Button
              size="lg"
              bg="white"
              color="red.600"
              _hover={{ bg: "gray.200" }}
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
              _hover={{ bg: "white", color: "red.600" }}
              as="a"
              href="/contact-sales"
            >
              Reach Out to Sales
            </Button>
          </Flex>
        </Box>
      </Box>
      
      {/* Footer */}
      <Footer />
    </Box>
  );
}

export default LandingPage;
