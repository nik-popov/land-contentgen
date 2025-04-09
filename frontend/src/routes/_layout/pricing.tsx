import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, List, ListItem, ListIcon, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Divider, Tag, HStack, Table, Thead, Tbody, Tr, Th, Td, Switch, FormControl, FormLabel, Badge } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../components/Common/Footer';
import { CheckCircleIcon, CloseIcon, StarIcon, InfoIcon, TimeIcon } from '@chakra-ui/icons';
import { useState } from 'react';

export const Route = createFileRoute("/_layout/pricing")({
  component: PricingPage,
});

function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const pricingPlans = [
    {
      name: "Basic",
      description: "For individuals and small projects exploring data collection",
      monthlyPrice: 99,
      annualPrice: 75,
      features: [
        "10,000 API requests per month",
        "Standard proxy rotation",
        "Basic data extraction templates",
        "Email support (24h response time)",
        "Single user account"
      ],
      limitations: [
        "Limited to 5 concurrent requests",
        "No custom proxies",
        "No advanced extraction tools"
      ]
    },
    {
      name: "Pro",
      description: "For professionals and growing businesses with regular data needs",
      monthlyPrice: 399,
      annualPrice: 285,
      popular: true,
      features: [
        "50,000 API requests per month",
        "Advanced proxy rotation settings",
        "Custom extraction templates",
        "Priority email support (8h response)",
        "Up to 3 user accounts",
        "Advanced data parsing & cleaning",
        "Custom headers and cookies management"
      ],
      limitations: [
        "Limited to 20 concurrent requests",
        "Basic IP geolocation options"
      ]
    },
    {
      name: "Business",
      description: "For teams and businesses with high-volume data requirements",
      monthlyPrice: 749,
      annualPrice: 495,
      features: [
        "200,000 API requests per month",
        "Premium proxy pool access",
        "Advanced data extraction suite",
        "Priority support (4h response)",
        "Up to 10 user accounts",
        "Advanced IP geolocation targeting",
        "Custom extraction rules & scripts",
        "Scheduled data collection jobs",
        "Dedicated success manager"
      ],
      limitations: [
        "Limited to 50 concurrent requests"
      ]
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large organizations with specific requirements",
      customPricing: true,
      features: [
        "Unlimited API requests",
        "Dedicated proxy infrastructure",
        "Custom data extraction solutions",
        "24/7 premium support with SLA",
        "Unlimited user accounts",
        "Custom integrations & workflows",
        "On-premises deployment options",
        "Custom contracts & compliance",
        "Dedicated account representative",
        "Custom development services"
      ],
      limitations: []
    }
  ];

  const featureComparison = [
    {
      category: "API Access",
      features: [
        {
          name: "Monthly API requests",
          basic: "10,000",
          professional: "50,000",
          business: "200,000",
          enterprise: "Unlimited"
        },
        {
          name: "Concurrent requests",
          basic: "5",
          professional: "20",
          business: "50",
          enterprise: "Unlimited"
        },
        {
          name: "Rate limits",
          basic: "60/minute",
          professional: "180/minute",
          business: "600/minute",
          enterprise: "Custom"
        }
      ]
    },
    {
      category: "Proxy Services",
      features: [
        {
          name: "Proxy rotation",
          basic: "Standard",
          professional: "Advanced",
          business: "Premium",
          enterprise: "Dedicated"
        },
        {
          name: "Geolocation targeting",
          basic: "Limited",
          professional: "Basic",
          business: "Advanced",
          enterprise: "Custom"
        },
        {
          name: "Residential proxies",
          basic: false,
          professional: true,
          business: true,
          enterprise: true
        }
      ]
    },
    {
      category: "Data Collection",
      features: [
        {
          name: "Extraction templates",
          basic: "Basic",
          professional: "Advanced",
          business: "Premium",
          enterprise: "Custom"
        },
        {
          name: "JavaScript rendering",
          basic: "Limited",
          professional: true,
          business: true,
          enterprise: true
        },
        {
          name: "Custom scripts",
          basic: false,
          professional: true,
          business: true,
          enterprise: true
        }
      ]
    },
    
  ];

  const faqItems = [
    {
      question: "How do you calculate API requests?",
      answer: "Each API request counts as one unit against your monthly quota. A request is counted when you make a call to any of our API endpoints. Failed requests due to client errors (4xx status codes) still count toward your quota, while server errors (5xx) do not. Unused requests do not roll over to the next month."
    },
    {
      question: "Can I upgrade or downgrade my plan at any time?",
      answer: "Yes, you can upgrade your plan at any time, and the new features will be available immediately. When upgrading, we prorate the remaining balance of your current subscription. Downgrades take effect at the start of your next billing cycle to ensure uninterrupted service."
    },
    {
      question: "Do you offer custom plans for specific needs?",
      answer: "Absolutely! Our Enterprise plan is fully customizable to meet your specific requirements. This includes custom API limits, dedicated infrastructure, specialized support arrangements, and tailored contracts. Please contact our sales team to discuss your needs and get a custom quote."
    },
    {
      question: "What happens if I exceed my monthly request limit?",
      answer: "If you exceed your monthly API request limit, you can continue using the service at a pay-as-you-go rate. Overage charges are billed at $0.005 per additional request for Basic plan, $0.004 for Professional, and $0.003 for Business. You can also set up usage alerts or auto-upgrade options in your account settings."
    },
    {
      question: "How secure is my data?",
      answer: "We take data security very seriously. All data transmission is encrypted using TLS 1.3, and all stored data is encrypted at rest. We maintain SOC 2 compliance and follow industry best practices for security. We do not access your collected data except for troubleshooting purposes with your explicit permission."
    }
  ];

  return (
    <>
      {/* Pricing Hero Section */}
      <Box py={16} bg="blue.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Transparent Pricing for Every Need
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={8} maxW="800px" mx="auto">
            Choose the plan that fits your data collection requirements, from individual projects to enterprise-scale operations.
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
                bg={plan.popular ? "blue.50" : "white"}
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
                      <Text fontSize="2xl" fontWeight="bold" mb={1}>
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
            Feature Comparison
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Compare all features across our plans to find the right fit for your needs
          </Text>
          
          <Box overflowX="auto">
            <Table variant="simple" bg="white" boxShadow="md" borderRadius="md">
              <Thead>
                <Tr bg="gray.100">
                  <Th width="30%">Feature</Th>
                  <Th width="17.5%">Basic</Th>
                  <Th width="17.5%" bg="blue.50">Pro</Th>
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
                          {typeof feature.basic === 'boolean' 
                            ? (feature.basic 
                                ? <CheckCircleIcon color="green.500" />
                                : <CloseIcon color="red.500" fontSize="xs" />)
                            : feature.basic}
                        </Td>
                        <Td bg="blue.50">
                          {typeof feature.professional === 'boolean' 
                            ? (feature.professional
                                ? <CheckCircleIcon color="green.500" />
                                : <CloseIcon color="red.500" fontSize="xs" />)
                            : feature.professional}
                        </Td>
                        <Td>
                          {typeof feature.business === 'boolean' 
                            ? (feature.business
                                ? <CheckCircleIcon color="green.500" />
                                : <CloseIcon color="red.500" fontSize="xs" />)
                            : feature.business}
                        </Td>
                        <Td>
                          {typeof feature.enterprise === 'boolean' 
                            ? (feature.enterprise
                                ? <CheckCircleIcon color="green.500" />
                                : <CloseIcon color="red.500" fontSize="xs" />)
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
            Frequently Asked Questions
          </Heading>
          
          <Box borderRadius="md" boxShadow="sm" overflow="hidden">
            <Accordion allowToggle>
              {faqItems.map((faq, index) => (
                <AccordionItem key={index} borderColor="gray.200">
                  <h3>
                    <AccordionButton py={4} px={6} _expanded={{ bg: "blue.50", color: "blue.600" }}>
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
            <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Delivering Data at Scale
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={10} maxW="700px" mx="auto">
            Join thousands of businesses leveraging our platform for reliable data collection
          </Text>
          
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={10}>
            <VStack>
              <Heading as="h3" size="2xl" color="blue.600">99.9%</Heading>
              <Text fontWeight="medium">Uptime Reliability</Text>
              <Text fontSize="sm" color="gray.600">Enterprise-grade infrastructure</Text>
            </VStack>
            
            <VStack>
              <Heading as="h3" size="2xl" color="blue.600">5B+</Heading>
              <Text fontWeight="medium">Monthly Requests</Text>
              <Text fontSize="sm" color="gray.600">Across all customers</Text>
            </VStack>
            
            <VStack>
              <Heading as="h3" size="2xl" color="blue.600">15K+</Heading>
              <Text fontWeight="medium">Active Users</Text>
              <Text fontSize="sm" color="gray.600">From startups to enterprises</Text>
            </VStack>
            
            <VStack>
              <Heading as="h3" size="2xl" color="blue.600">190+</Heading>
              <Text fontWeight="medium">Countries Covered</Text>
              <Text fontSize="sm" color="gray.600">Global proxy network</Text>
            </VStack>
          </SimpleGrid>
          
          <Box mt={16} p={8} bg="white" borderRadius="lg" boxShadow="md">
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              <VStack align="flex-start">
                <Heading as="h3" size="md" color="blue.600" mb={2}>Enterprise-Grade Security</Heading>
                <Text>
                  SOC 2 Type II compliant with end-to-end encryption and regular security audits to protect your data.
                </Text>
              </VStack>
              
              <VStack align="flex-start">
                <Heading as="h3" size="md" color="blue.600" mb={2}>Scalable Architecture</Heading>
                <Text>
                  Our infrastructure automatically scales to handle peak loads without compromising performance.
                </Text>
              </VStack>
              
              <VStack align="flex-start">
                <Heading as="h3" size="md" color="blue.600" mb={2}>Developer-Friendly</Heading>
                <Text>
                  Comprehensive API documentation, SDKs for popular languages, and ready-to-use code examples.
                </Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      {/* Call to Action */}
      <Box py={16} bg="blue.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Ready to Get Started?
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Choose the plan that fits your needs or contact our sales team for a custom solution.
            All plans include a 14-day free trial with no credit card required.
          </Text>
          
          <Flex justify="center" gap={6} flexWrap="wrap">
          <Button
              size="lg"
              variant="outline"
              borderColor="white"
              color="white"
              _hover={{ bg: "blue.700" }}
              as="a"
              href="https://cloud.thedataproxy.com/signup"
            >
              Start Free Trial
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              borderColor="white"
              color="white"
              _hover={{ bg: "blue.700" }}
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