import { Box, Flex, Grid, Heading, Image, Text, VStack, Button, Link } from "@chakra-ui/react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import HeroSection from '../../components/HeroSection';
import Footer from '../../components/Common/Footer';

export const Route = createFileRoute("/_layout/")({
  component: LandingPage,
});

function LandingPage() {
  const navigate = useNavigate();
  return (
    <Box>
      <HeroSection
        title="Transform Your Credit Score with Bright Credit"
        subtitle="Professional credit repair, dispute management, and credit optimization services to boost your financial future."
        ctas={[
          { text: "Get Started", link: "https://cloud.brightcreditservices.com" },
          { text: "Free Consultation", link: "/demo-request" },
        ]}
        bgImage="https://images.unsplash.com/photo-1625685554528-2a0b517e094c"
      />
      
      {/* Section 3: Credit Repair Results */}
      <Box py={16} bg="blue.50" color="gray.800">
        <Heading as="h2" size="2xl" textAlign="center" mb={10} fontWeight="medium">
          Proven Credit Repair Results
        </Heading>
        <Flex justify="space-around" flexWrap="wrap" maxW="1200px" mx="auto" px={4}>
          <VStack textAlign="center" p={4} minW="150px" spacing={2}>
            <Text fontSize="4xl" fontWeight="bold" color="blue.600">150+</Text>
            <Text fontSize="lg">Average Point Increase</Text>
          </VStack>
          <VStack textAlign="center" p={4} minW="150px" spacing={2}>
            <Text fontSize="4xl" fontWeight="bold" color="blue.600">95%</Text>
            <Text fontSize="lg">Success Rate</Text>
          </VStack>
          <VStack textAlign="center" p={4} minW="150px" spacing={2}>
            <Text fontSize="4xl" fontWeight="bold" color="blue.600">24/7</Text>
            <Text fontSize="lg">Expert Support</Text>
          </VStack>
          <VStack textAlign="center" p={4} minW="150px" spacing={2}>
            <Text fontSize="4xl" fontWeight="bold" color="blue.600">10K+</Text>
            <Text fontSize="lg">Clients Helped</Text>
          </VStack>
          <VStack textAlign="center" p={4} minW="150px" spacing={2}>
            <Text fontSize="4xl" fontWeight="bold" color="blue.600">90 Days</Text>
            <Text fontSize="lg">Average Timeline</Text>
          </VStack>
        </Flex>
      </Box>

      {/* Section 2: Credit Repair Features */}
      <Box py={16} bg="white" maxW="1200px" mx="auto" px={4}>
        <Heading as="h2" size="2xl" textAlign="center" mb={10} color="gray.800" fontWeight="medium" pb="5">
          Comprehensive Credit Repair Services
        </Heading>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium" textAlign="left">
              Dispute Management
            </Heading>
            <Text color="gray.600">
              Professional dispute letters and follow-up with all three credit bureaus
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium" textAlign="left">
              Credit Monitoring
            </Heading>
            <Text color="gray.600">
              Real-time credit score tracking and alerts for changes to your report
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium" textAlign="left">
              Point Optimization
            </Heading>
            <Text color="gray.600">
              Strategic credit utilization and payment timing to maximize score gains
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium" textAlign="left">
              Debt Validation
            </Heading>
            <Text color="gray.600">
              Challenge questionable debts and ensure all reported items are accurate
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium" textAlign="left">
              Legal Compliance
            </Heading>
            <Text color="gray.600">
              All services follow FCRA, FDCPA, and state credit repair regulations
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium" textAlign="center">
              Personal Support
            </Heading>
            <Text color="gray.600">
              Dedicated credit specialists to guide you through every step
            </Text>
          </VStack>
        </Grid>
      </Box>

      <Box py={16} bg="blue.50" maxW="1200px" mx="auto" px={4}>
        <Heading as="h2" size="2xl" textAlign="center" mb={10} color="gray.800" fontWeight="medium">
          Transform Your Financial Future with Bright Credit
        </Heading>
        <Text fontSize="lg" color="gray.600" textAlign="center" mb={8} maxW="800px" mx="auto">
          Our comprehensive credit repair services are designed to help you achieve your financial goals and unlock better opportunities.
        </Text>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Home Loan Approval
            </Heading>
            <Text color="gray.600">
              Improve your credit score to qualify for better mortgage rates and increase your buying power.
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Auto Financing
            </Heading>
            <Text color="gray.600">
              Get approved for car loans with lower interest rates and better terms through improved credit.
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Credit Card Rewards
            </Heading>
            <Text color="gray.600">
              Qualify for premium credit cards with better rewards, cashback, and travel benefits.
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Business Funding
            </Heading>
            <Text color="gray.600">
              Access business loans and lines of credit to grow your company with improved personal credit.
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Lower Insurance Rates
            </Heading>
            <Text color="gray.600">
              Reduce insurance premiums as many providers use credit scores in their pricing models.
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Employment Opportunities
            </Heading>
            <Text color="gray.600">
              Pass employer credit checks and qualify for positions requiring financial responsibility.
            </Text>
          </VStack>
        </Grid>
      </Box>

      {/* Call to Action */}
      <Box py={16} bg="blue.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Start Your Credit Repair Journey Today
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Take control of your financial future with our proven credit repair and optimization services.
          </Text>
          
          <Flex justify="center" gap={6} flexWrap="wrap">
            <Button
              size="lg"
              bg="white"
              color="blue.600"
              _hover={{ bg: "gray.200" }}
              as="a"
              href="https://cloud.brightcreditservices.com"
            >
              Get Started Now
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              borderColor="white"
              color="white"
              _hover={{ bg: "white", color: "blue.600" }}
              as="a"
              href="/contact"
            >
              Free Consultation
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
