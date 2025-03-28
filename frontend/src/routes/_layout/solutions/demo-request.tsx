import { createFileRoute } from '@tanstack/react-router';
import { 
  Box, 
  Heading, 
  Text, 
  VStack, 
  Container,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
  Flex,
  Checkbox,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  SimpleGrid,
  Icon,
  useToast
} from "@chakra-ui/react";
import { CheckCircleIcon, InfoIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import Footer from '../../../components/Common/Footer';

export const Route = createFileRoute('/_layout/solutions/demo-request')({
  component: RequestDemoPage,
});

function RequestDemoPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);
  const [useCase, setUseCase] = useState('');
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with a delay
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      window.scrollTo(0, 0);
    }, 1500);
  };

  if (formSubmitted) {
    return (
      <Box>
        <Container maxW="800px" mx="auto" px={4} py={16} color="gray.800">
          <Alert
            status="success"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            py={8}
            borderRadius="md"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={2} fontSize="xl">
              Demo Request Submitted Successfully
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              Thank you for your interest in our web scraping solutions. A member of our team will contact you within 24 hours to schedule your personalized demo.
            </AlertDescription>
            <Button mt={6} colorScheme="orange" onClick={() => window.location.href = "/"}>
              Return to Homepage
            </Button>
          </Alert>
        </Container>
        <Footer />
      </Box>
    );
  }

  return (
    <Box>
      <Container maxW="800px" mx="auto" px={4} py={16} color="gray.800">
        <VStack spacing={8} align="start" w="full">
          <Heading as="h1" size="xl" fontWeight="medium">
            Request a Market Research Solution Demo
          </Heading>
          
          <Text fontSize="lg" color="gray.600">
            Experience the power of our enterprise-grade web scraping proxy infrastructure. Complete this form to schedule a personalized demo tailored to your market research needs.
          </Text>

          {/* Benefits */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
            <Box bg="orange.50" p={5} borderRadius="md">
              <Flex align="center" mb={3}>
                <Icon as={CheckCircleIcon} color="orange.500" boxSize={5} mr={2} />
                <Text fontWeight="medium">Personalized Demonstration</Text>
              </Flex>
              <Text fontSize="sm" color="gray.600">
                Our team will showcase features most relevant to your specific market research needs.
              </Text>
            </Box>
            
            <Box bg="orange.50" p={5} borderRadius="md">
              <Flex align="center" mb={3}>
                <Icon as={CheckCircleIcon} color="orange.500" boxSize={5} mr={2} />
                <Text fontWeight="medium">Technical Deep Dive</Text>
              </Flex>
              <Text fontSize="sm" color="gray.600">
                Get answers to your technical questions from our expert engineering team.
              </Text>
            </Box>
            
            <Box bg="orange.50" p={5} borderRadius="md">
              <Flex align="center" mb={3}>
                <Icon as={CheckCircleIcon} color="orange.500" boxSize={5} mr={2} />
                <Text fontWeight="medium">Custom Integration Planning</Text>
              </Flex>
              <Text fontSize="sm" color="gray.600">
                Learn how our solutions integrate with your existing data infrastructure.
              </Text>
            </Box>
            
            <Box bg="orange.50" p={5} borderRadius="md">
              <Flex align="center" mb={3}>
                <Icon as={CheckCircleIcon} color="orange.500" boxSize={5} mr={2} />
                <Text fontWeight="medium">Pricing Consultation</Text>
              </Flex>
              <Text fontSize="sm" color="gray.600">
                Transparent discussion about pricing options tailored to your usage needs.
              </Text>
            </Box>
          </SimpleGrid>
          
          {/* Request Form */}
          <Box w="full" as="form" onSubmit={handleSubmit} mt={6} bg="white" p={8} borderRadius="md" boxShadow="sm">
            <VStack spacing={6} align="start">
              <Heading as="h2" size="md" fontWeight="medium">
                Your Information
              </Heading>
              
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
                <FormControl isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" placeholder="Enter your first name" />
                </FormControl>
                
                <FormControl isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" placeholder="Enter your last name" />
                </FormControl>
              </SimpleGrid>
              
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
                <FormControl isRequired>
                  <FormLabel>Business Email</FormLabel>
                  <Input type="email" placeholder="Enter your business email" />
                </FormControl>
                
                <FormControl isRequired>
                  <FormLabel>Phone Number</FormLabel>
                  <Input type="tel" placeholder="Enter your phone number" />
                </FormControl>
              </SimpleGrid>
              
              <FormControl isRequired>
                <FormLabel>Company Name</FormLabel>
                <Input type="text" placeholder="Enter your company name" />
              </FormControl>
              
              <FormControl isRequired>
                <FormLabel>Job Title</FormLabel>
                <Input type="text" placeholder="Enter your job title" />
              </FormControl>
              
              <FormControl isRequired>
                <FormLabel>Primary Use Case</FormLabel>
                <Select 
                  placeholder="Select primary use case" 
                  value={useCase}
                  onChange={(e) => setUseCase(e.target.value)}
                >
                  <option value="competitive_intelligence">Competitive Intelligence</option>
                  <option value="market_analysis">Market Analysis & Trends</option>
                  <option value="price_monitoring">Price Monitoring</option>
                  <option value="sentiment_analysis">Consumer Sentiment Analysis</option>
                  <option value="product_research">Product Research</option>
                  <option value="lead_generation">Lead Generation</option>
                  <option value="content_aggregation">Content Aggregation</option>
                  <option value="other">Other (please specify)</option>
                </Select>
              </FormControl>
              
              {useCase === 'other' && (
                <FormControl>
                  <FormLabel>Please specify your use case</FormLabel>
                  <Input type="text" placeholder="Describe your use case" />
                </FormControl>
              )}
              
              <FormControl>
                <FormLabel>Additional Requirements or Questions</FormLabel>
                <Textarea 
                  placeholder="Please share any specific requirements, questions, or areas of interest for the demo"
                  rows={4}
                />
              </FormControl>
              
              <FormControl>
                <FormLabel>Preferred Demo Date/Time</FormLabel>
                <Input type="datetime-local" />
                <Text fontSize="sm" color="gray.500" mt={1}>
                  We'll do our best to accommodate your preferred time or suggest alternatives.
                </Text>
              </FormControl>
              
              <FormControl isRequired mt={4}>
                <Checkbox 
                  size="md" 
                  colorScheme="orange"
                  isChecked={consentChecked}
                  onChange={(e) => setConsentChecked(e.target.checked)}
                >
                  I agree to receive communications about The Data Proxy services. I understand that my information will be processed in accordance with the 
                  <Button variant="link" color="orange.500" mx={1}>Privacy Policy</Button>.
                </Checkbox>
              </FormControl>
              
              <Button 
                type="submit" 
                bg="orange.400"
                color="white"
                _hover={{ bg: "orange.500" }}
                size="lg" 
                w={{ base: "full", md: "auto" }}
                isLoading={isSubmitting}
                loadingText="Submitting"
                isDisabled={!consentChecked}
                mt={4}
              >
                Request Demo
              </Button>
              
              <Text fontSize="sm" color="gray.500" mt={2}>
                <Icon as={InfoIcon} mr={1} />
                Our team typically responds within 24 business hours.
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Container>
      <Footer />
    </Box>
  );
}

export default RequestDemoPage;