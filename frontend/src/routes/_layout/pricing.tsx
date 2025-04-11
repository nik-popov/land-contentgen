import { Box, Flex, Grid, Heading, Text, VStack, Button, SimpleGrid, List, ListItem, ListIcon, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Divider, Badge, Table, Thead, Tbody, Tr, Th, Td, Switch, FormControl, FormLabel } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../components/Common/Footer';
import { CheckCircleIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export const Route = createFileRoute("/_layout/pricing")({
  component: PricingPage,
});

function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for hobbyists and small projects looking to tap into data effortlessly.",
      monthlyPrice: 49,
      annualPrice: 39, // ~20% discount from $49
      features: [
        "100,000 API calls per month",
        "20 simultaneous threads",
        "Targeting in US & EU regions",
        "Dynamic page rendering",
        "High-quality residential & mobile proxies",
        "Sophisticated anti-block technology",
        "Data extraction & formatting tools",
      ],
      limitations: [
        "No personal account manager",
        "No premium chat support",
      ],
    },
    {
      name: "Analyst",
      description: "Ideal for data analysts and teams scaling their insights with confidence",
      monthlyPrice: 149,
      annualPrice: 119, // ~20% discount from $149
      popular: true,
      features: [
        "1,000,000 API calls per month",
        "50 simultaneous threads",
        "Targeting in US & EU regions",
        "Dynamic page rendering",
        "High-quality residential & mobile proxies",
        "Sophisticated anti-block technology",
        "Data extraction & formatting tools",
      ],
      limitations: [
        "No personal account manager",
        "No premium chat support",
      ],
    },
    {
      name: "Business",
      description: "Designed for data enthusiasts and companies tackling large-scale data challenges.",
      monthlyPrice: 475,
      annualPrice: 380, // ~20% discount from $475
      features: [
        "5,000,000 API calls per month",
        "200 simultaneous threads",
        "Global country-specific targeting",
        "Dynamic page rendering",
        "High-quality residential & mobile proxies",
        "Sophisticated anti-block technology",
        "Data extraction & formatting tools",
      ],
      limitations: [
        "No personal account manager",
        "No premium chat support",
      ],
    },
    {
      name: "Enterprise",
      description: "Tailored for leaders managing vast data ecosystems with premium support.",
      customPricing: true,
      features: [
        "5,000,000+ API calls per month",
        "200+ simultaneous threads",
        "Global country-specific targeting",
        "Dynamic page rendering",
        "High-quality residential & mobile proxies",
        "Sophisticated anti-block technology",
        "Data extraction & formatting tools",
        "Personal account manager",
        "Premium chat support",
      ],
      limitations: [],
    },
  ];

  const featureComparison = [
    {
      category: "API Capabilities",
      features: [
        {
          name: "Monthly API calls",
          starter: "100,000",
          analyst: "1,000,000",
          business: "5,000,000",
          enterprise: "5,000,000+",
        },
        {
          name: "Simultaneous threads",
          starter: "20",
          analyst: "50",
          business: "200",
          enterprise: "200+",
        },
      ],
    },
    {
      category: "Proxy Features",
      features: [
        {
          name: "Location targeting",
          starter: "US & EU",
          analyst: "US & EU",
          business: "Country-level",
          enterprise: "Country-level",
        },
        {
          name: "Residential proxy access",
          starter: true,
          analyst: true,
          business: true,
          enterprise: true,
        },
      ],
    },
    {
      category: "Scraping Tools",
      features: [
        {
          name: "Dynamic rendering",
          starter: true,
          analyst: true,
          business: true,
          enterprise: true,
        },
        {
          name: "Anti-block solutions",
          starter: true,
          analyst: true,
          business: true,
          enterprise: true,
        },
      ],
    },
  ];

  const faqItems = [
    {
      question: "How do you calculate API requests?",
      answer: "Each API call counts as one request toward your monthly quota. This includes successful calls and failed ones due to client errors (4xx status codes), but not server errors (5xx). Unused requests expire at the end of the month.",
    },
    {
      question: "Can I upgrade or downgrade my plan anytime?",
      answer: "Yes! Upgrades take effect immediately with prorated billing for the remaining subscription period. Downgrades apply at the start of your next billing cycle to maintain uninterrupted service.",
    },
    {
      question: "Do you offer custom plans for specific needs?",
      answer: "Definitely! The Enterprise plan is fully customizable, offering tailored API limits, dedicated infrastructure, and specialized support. Reach out to our sales team for a personalized quote.",
    },
    {
      question: "What happens if I exceed my monthly request limit?",
      answer: "You can keep going with pay-as-you-go rates: $0.005 per extra request for Starter, $0.004 for Analyst, and $0.003 for Business. Set up alerts or auto-upgrades in your account to stay in control.",
    },
    {
      question: "How secure is my data?",
      answer: "Your data’s safety is our priority. We use TLS 1.3 encryption for transmission and encrypt data at rest. With SOC 2 compliance and strict access policies, we only touch your data for troubleshooting with your consent.",
    },
  ];

  return (
    <>
      {/* Pricing Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Pricing That Scales With You
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={8} maxW="800px" mx="auto">
            From small experiments to enterprise solutions, find a plan that powers your data journey.
          </Text>
          <Box maxW="300px" mx="auto" mb={10}>
            <FormControl display="flex" alignItems="center" justifyContent="center">
              <FormLabel htmlFor="billing-toggle" mb="0" mr={2}>
                Monthly
              </FormLabel>
              <Switch
                id="billing-toggle"
                colorScheme="blue"
                size="lg"
                isChecked={isAnnual}
                onChange={() => setIsAnnual(!isAnnual)}
              />
              <FormLabel htmlFor="billing-toggle" mb="0" ml={2}>
                Annual
                <Badge ml={2} colorScheme="green" fontSize="0.8em">Save 20%</Badge>
              </FormLabel>
            </FormControl>
          </Box>
        </Box>
      </Box>

      {/* Pricing Plans Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={8}>
            {pricingPlans.map((plan, index) => (
              <Box
                key={index}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow={plan.popular ? "lg" : "md"}
                bg={plan.popular ? "red.50" : "white"}
                position="relative"
              >
                {plan.popular && (
                  <Badge
                    position="absolute"
                    top={4}
                    right={4}
                    colorScheme="blue"
                    variant="solid"
                    px={2}
                    py={1}
                    borderRadius="md"
                  >
                    Most Popular
                  </Badge>
                )}
                <Box p={6}>
                  <Heading as="h3" size="lg" mb={2}>
                    {plan.name}
                  </Heading>
                  <Text color="gray.600" h="60px" mb={4}>
                    {plan.description}
                  </Text>
                  {plan.customPricing ? (
                    <Box my={6}>
                      <Text fontSize="3xl" fontWeight="bold" mb={1}>
                        Custom Pricing
                      </Text>
                      <Text color="gray.600">
                        Tailored to your needs
                      </Text>
                    </Box>
                  ) : (
                    <Box my={6}>
                      <Text fontSize="3xl" fontWeight="bold" mb={1}>
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </Text>
                      <Text color="gray.600">
                        per month {isAnnual && "(billed annually)"}
                      </Text>
                    </Box>
                  )}
                  <Button
                    colorScheme={plan.popular ? "blue" : "gray"}
                    variant={plan.popular ? "solid" : "outline"}
                    size="lg"
                    width="full"
                    mb={6}
                    as="a"
                    href="/contact-sales"
                  >
                    {plan.customPricing ? "Contact Sales" : "Select Plan"}
                  </Button>
                  <Divider mb={4} />
                  <Text fontWeight="medium" mb={3}>Features:</Text>
                  <List spacing={2} mb={6}>
                    {plan.features.map((feature, featureIndex) => (
                      <ListItem key={featureIndex} display="flex">
                        <ListIcon as={CheckCircleIcon} color="green.500" mt={1} />
                        <Text>{feature}</Text>
                      </ListItem>
                    ))}
                  </List>
                  {plan.limitations.length > 0 && (
                    <>
                      <Text fontWeight="medium" mb={3}>Limitations:</Text>
                      <List spacing={2}>
                        {plan.limitations.map((limitation, limitationIndex) => (
                          <ListItem key={limitationIndex} display="flex" color="gray.600">
                            <ListIcon as={CloseIcon} color="red.500" mt={1} fontSize="xs" />
                            <Text>{limitation}</Text>
                          </ListItem>
                        ))}
                      </List>
                    </>
                  )}
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Feature Comparison Table */}
      <Box py={16} bg="gray.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Compare Plans
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            See how our plans stack up to match your data needs.
          </Text>
          <Box overflowX="auto">
            <Table variant="simple" bg="white" boxShadow="md" borderRadius="md">
              <Thead>
                <Tr bg="gray.100">
                  <Th width="30%">Feature</Th>
                  <Th width="17.5%">Starter</Th>
                  <Th width="17.5%" bg="red.50">Analyst</Th>
                  <Th width="17.5%">Business</Th>
                  <Th width="17.5%">Enterprise</Th>
                </Tr>
              </Thead>
              <Tbody>
                {featureComparison.map((category, categoryIndex) => (
                  <>
                    <Tr key={`category-${categoryIndex}`} bg="gray.50">
                      <Td colSpan={5} fontWeight="bold" fontSize="md">
                        {category.category}
                      </Td>
                    </Tr>
                    {category.features.map((feature, featureIndex) => (
                      <Tr key={`feature-${categoryIndex}-${featureIndex}`}>
                        <Td fontWeight="medium">{feature.name}</Td>
                        <Td>
                          {typeof feature.starter === 'boolean'
                            ? (feature.starter ? <CheckCircleIcon color="green.500" /> : <CloseIcon color="red.500" fontSize="xs" />)
                            : feature.starter}
                        </Td>
                        <Td bg="red.50">
                          {typeof feature.analyst === 'boolean'
                            ? (feature.analyst ? <CheckCircleIcon color="green.500" /> : <CloseIcon color="red.500" fontSize="xs" />)
                            : feature.analyst}
                        </Td>
                        <Td>
                          {typeof feature.business === 'boolean'
                            ? (feature.business ? <CheckCircleIcon color="green.500" /> : <CloseIcon color="red.500" fontSize="xs" />)
                            : feature.business}
                        </Td>
                        <Td>
                          {typeof feature.enterprise === 'boolean'
                            ? (feature.enterprise ? <CheckCircleIcon color="green.500" /> : <CloseIcon color="red.500" fontSize="xs" />)
                            : feature.enterprise}
                        </Td>
                      </Tr>
                    ))}
                  </>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Box>
      </Box>

      {/* FAQ Section */}
      <Box py={16} bg="white">
        <Box maxW="900px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Got Questions?
          </Heading>
          <Box borderRadius="md" boxShadow="sm" overflow="hidden">
            <Accordion allowToggle>
              {faqItems.map((faq, index) => (
                <AccordionItem key={index} borderColor="gray.200">
                  <h3>
                    <AccordionButton py={4} px={6} _expanded={{ bg: "red.50", color: "red.600" }}>
                      <Box flex="1" textAlign="left" fontWeight="medium" fontSize="md">
                        {faq.question}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h3>
                  <AccordionPanel pb={4} px={6} bg="gray.50">
                    <Text color="gray.700">{faq.answer}</Text>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
        </Box>
      </Box>

      {/* Usage Statistics Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Data Powerhouse
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={10} maxW="700px" mx="auto">
            Trusted by thousands to deliver reliable, scalable data solutions.
          </Text>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={10}>
            <VStack>
              <Heading as="h3" size="2xl" color="red.600">99.9%</Heading>
              <Text fontWeight="medium">Uptime Reliability</Text>
              <Text fontSize="sm" color="gray.600">Built for the enterprise</Text>
            </VStack>
            <VStack>
              <Heading as="h3" size="2xl" color="red.600">5B+</Heading>
              <Text fontWeight="medium">Monthly Requests</Text>
              <Text fontSize="sm" color="gray.600">Across our network</Text>
            </VStack>
            <VStack>
              <Heading as="h3" size="2xl" color="red.600">15K+</Heading>
              <Text fontWeight="medium">Active Users</Text>
              <Text fontSize="sm" color="gray.600">From solo to scale</Text>
            </VStack>
            <VStack>
              <Heading as="h3" size="2xl" color="red.600">190+</Heading>
              <Text fontWeight="medium">Countries Covered</Text>
              <Text fontSize="sm" color="gray.600">Global reach</Text>
            </VStack>
          </SimpleGrid>
          <Box mt={16} p={8} bg="white" borderRadius="lg" boxShadow="md">
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              <VStack align="flex-start">
                <Heading as="h3" size="md" color="red.600" mb={2}>Top-Tier Security</Heading>
                <Text>SOC 2 compliant, fully encrypted, and audited regularly.</Text>
              </VStack>
              <VStack align="flex-start">
                <Heading as="h3" size="md" color="red.600" mb={2}>Scales With You</Heading>
                <Text>Handles peak demand without breaking a sweat.</Text>
              </VStack>
              <VStack align="flex-start">
                <Heading as="h3" size="md" color="red.600" mb={2}>Dev-Ready</Heading>
                <Text>APIs, SDKs, and examples to get you started fast.</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>

      {/* Call to Action */}
      <Box py={16} bg="red.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Start Collecting Data Today
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Pick your plan or talk to sales for a custom fit. Enjoy a 14-day trial, no card needed.
          </Text>
          <Flex justify="center" gap={6} flexWrap="wrap">
            <Button
              size="lg"
              variant="outline"
              borderColor="white"
              color="white"
              _hover={{ bg: "red.700" }}
              as="a"
              href="https://cloud.roamingproxy.com/signup"
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              borderColor="white"
              color="white"
              _hover={{ bg: "red.700" }}
              as="a"
              href="/contact"
            >
              Contact Sales
            </Button>
          </Flex>
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default PricingPage;