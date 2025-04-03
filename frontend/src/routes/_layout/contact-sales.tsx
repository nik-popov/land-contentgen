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
  useToast,
  Divider
} from "@chakra-ui/react";
import { CheckCircleIcon, InfoIcon, ArrowForwardIcon, PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import Footer from '../../components/Common/Footer';

export const Route = createFileRoute('/_layout/contact-sales')({
  component: SalesContactPage,
});

function SalesContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);
  const [businessSize, setBusinessSize] = useState('');
  const [budgetRange, setBudgetRange] = useState('');
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Debug which fields are available
      console.log("Form elements:", e.target.elements);
      
      // Safely get form values with fallbacks
      const formData = {
        first_name: e.target.firstName?.value || "",
        last_name: e.target.lastName?.value || "",
        business_email: e.target.businessEmail?.value || "",
        phone_number: e.target.phoneNumber?.value || "",
        company_name: e.target.companyName?.value || "",
        job_title: e.target.jobTitle?.value || "",
        business_size: businessSize || "",
        budget_range: budgetRange || "",
        primary_interest: e.target.primaryInterest?.value || "",
        project_timeline: e.target.projectTimeline?.value || "",
        requirements: e.target.requirements?.value || "",
        contact_preference: e.target.contactPreference?.value || ""
      };
      
      console.log("Form data being submitted:", formData);

      const response = await fetch('https://apis.thedataproxy.com/api/v1/utils/contact-sales/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit sales contact request');
      }

      const data = await response.json();
      setFormSubmitted(true);
      window.scrollTo(0, 0);
      toast({
        title: "Success",
        description: data.message,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: error.message || "An error occurred while submitting your request",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
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
              Thank You for Contacting Our Sales Team
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              Your inquiry has been received and a dedicated sales representative will contact you within 1 business day to discuss how our solutions can meet your specific needs.
            </AlertDescription>
            <Button mt={6} colorScheme="blue" onClick={() => window.location.href = "/"}>
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
            Contact Our Sales Team
          </Heading>
          
          <Text fontSize="lg" color="gray.600">
            Interested in our data collection and proxy solutions? Fill out this form to connect with our sales team and learn how we can help you achieve your business goals.
          </Text>

          {/* Quick Contact Info */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
            <Box 
              bg="blue.50" 
              p={5} 
              borderRadius="md" 
              display="flex" 
              alignItems="center"
            >
              <Icon as={PhoneIcon} color="blue.500" boxSize={5} mr={3} />
              <Box>
                <Text fontWeight="medium">Call Us Directly</Text>
                <Text fontSize="sm" color="gray.600">
                  +1 (855) 440-2242
                </Text>
              </Box>
            </Box>
            
            <Box 
              bg="blue.50" 
              p={5} 
              borderRadius="md"
              display="flex" 
              alignItems="center"
            >
              <Icon as={EmailIcon} color="blue.500" boxSize={5} mr={3} />
              <Box>
                <Text fontWeight="medium">Email Sales</Text>
                <Text fontSize="sm" color="gray.600">
                  sales@thedataproxy.com
                </Text>
              </Box>
            </Box>
          </SimpleGrid>

          <Divider />

          {/* Why Contact Sales */}
          <Heading as="h2" size="md" fontWeight="medium">
            How Our Sales Team Can Help You
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
            <Box bg="blue.50" p={5} borderRadius="md">
              <Flex align="center" mb={3}>
                <Icon as={CheckCircleIcon} color="blue.500" boxSize={5} mr={2} />
                <Text fontWeight="medium">Custom Solutions</Text>
              </Flex>
              <Text fontSize="sm" color="gray.600">
                Get tailored data collection solutions designed specifically for your business requirements.
              </Text>
            </Box>
            
            <Box bg="blue.50" p={5} borderRadius="md">
              <Flex align="center" mb={3}>
                <Icon as={CheckCircleIcon} color="blue.500" boxSize={5} mr={2} />
                <Text fontWeight="medium">Volume Pricing</Text>
              </Flex>
              <Text fontSize="sm" color="gray.600">
                Discover cost-effective pricing options for large scale data needs and enterprise implementations.
              </Text>
            </Box>
            
            <Box bg="blue.50" p={5} borderRadius="md">
              <Flex align="center" mb={3}>
                <Icon as={CheckCircleIcon} color="blue.500" boxSize={5} mr={2} />
                <Text fontWeight="medium">Integration Support</Text>
              </Flex>
              <Text fontSize="sm" color="gray.600">
                Learn how our solutions integrate with your existing tech stack and business processes.
              </Text>
            </Box>
            
            <Box bg="blue.50" p={5} borderRadius="md">
              <Flex align="center" mb={3}>
                <Icon as={CheckCircleIcon} color="blue.500" boxSize={5} mr={2} />
                <Text fontWeight="medium">Compliance Guidance</Text>
              </Flex>
              <Text fontSize="sm" color="gray.600">
                Get expert advice on data compliance and ethical web scraping practices for your industry.
              </Text>
            </Box>
          </SimpleGrid>
          
          {/* Contact Form */}
          <Box w="full" as="form" onSubmit={handleSubmit} mt={6} bg="white" p={8} borderRadius="md" boxShadow="sm">
            <VStack spacing={6} align="start">
              <Heading as="h2" size="md" fontWeight="medium">
                Tell Us About Your Needs
              </Heading>
              
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
                <FormControl isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input name="firstName" type="text" placeholder="Enter your first name" focusBorderColor="blue.400" />
                </FormControl>
                
                <FormControl isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input name="lastName" type="text" placeholder="Enter your last name" focusBorderColor="blue.400" />
                </FormControl>
              </SimpleGrid>
              
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
                <FormControl isRequired>
                  <FormLabel>Business Email</FormLabel>
                  <Input name="businessEmail" type="email" placeholder="Enter your business email" focusBorderColor="blue.400" />
                </FormControl>
                
                <FormControl isRequired>
                  <FormLabel>Phone Number</FormLabel>
                  <Input name="phoneNumber" type="tel" placeholder="Enter your phone number" focusBorderColor="blue.400" />
                </FormControl>
              </SimpleGrid>
              
              <FormControl isRequired>
                <FormLabel>Company Name</FormLabel>
                <Input name="companyName" type="text" placeholder="Enter your company name" focusBorderColor="blue.400" />
              </FormControl>
              
              <FormControl isRequired>
                <FormLabel>Job Title</FormLabel>
                <Input name="jobTitle" type="text" placeholder="Enter your job title" focusBorderColor="blue.400" />
              </FormControl>
              
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
                <FormControl isRequired>
                  <FormLabel>Business Size</FormLabel>
                  <Select 
                    name="businessSize"
                    placeholder="Select business size" 
                    value={businessSize}
                    onChange={(e) => setBusinessSize(e.target.value)}
                    focusBorderColor="blue.400"
                  >
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="501-1000">501-1000 employees</option>
                    <option value="1000+">1000+ employees</option>
                  </Select>
                </FormControl>
                
                <FormControl isRequired>
                  <FormLabel>Estimated Monthly Budget</FormLabel>
                  <Select 
                    name="budgetRange"
                    placeholder="Select budget range" 
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    focusBorderColor="blue.400"
                  >
                    <option value="under_1k">Under $1,000</option>
                    <option value="1k_5k">$1,000 - $5,000</option>
                    <option value="5k_10k">$5,000 - $10,000</option>
                    <option value="10k_25k">$10,000 - $25,000</option>
                    <option value="25k_plus">$25,000+</option>
                  </Select>
                </FormControl>
              </SimpleGrid>
              
              <FormControl isRequired>
                <FormLabel>Primary Interest</FormLabel>
                <Select 
                  name="primaryInterest"
                  placeholder="Select your primary interest" 
                  focusBorderColor="blue.400"
                >
                  <option value="web_scraping">Web Scraping Solutions</option>
                  <option value="proxy_services">Proxy Services</option>
                  <option value="data_extraction">Data Extraction API</option>
                  <option value="residential_proxies">Residential Proxy Network</option>
                  <option value="custom_solution">Custom Data Solution</option>
                  <option value="enterprise">Enterprise Partnership</option>
                </Select>
              </FormControl>
              
              <FormControl>
                <FormLabel>Project Timeline</FormLabel>
                <Select 
                  name="projectTimeline"
                  placeholder="Select your timeline" 
                  focusBorderColor="blue.400"
                >
                  <option value="immediate">Immediate (within days)</option>
                  <option value="1_month">Within 1 month</option>
                  <option value="1_3_months">1-3 months</option>
                  <option value="3_6_months">3-6 months</option>
                  <option value="exploratory">Just exploring options</option>
                </Select>
              </FormControl>
              
              <FormControl>
                <FormLabel>Tell Us More About Your Requirements</FormLabel>
                <Textarea 
                  name="requirements"
                  placeholder="Please share details about your data collection needs, challenges, and goals"
                  rows={4}
                  focusBorderColor="blue.400"
                />
              </FormControl>
              
              <FormControl>
                <FormLabel>How would you prefer to be contacted?</FormLabel>
                <Select 
                  name="contactPreference"
                  placeholder="Select contact preference" 
                  focusBorderColor="blue.400"
                >
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="video_call">Video Call</option>
                </Select>
              </FormControl>
              
              <FormControl isRequired mt={4}>
                <Checkbox 
                  name="consent"
                  size="md" 
                  colorScheme="blue"
                  isChecked={consentChecked}
                  onChange={(e) => setConsentChecked(e.target.checked)}
                >
                  I agree to receive communications from The Data Proxy. I understand that my information will be processed in accordance with the 
                  <Button as="a" href="/privacy" variant="link" color="blue.500" mx={1}>Privacy Policy</Button>.
                </Checkbox>
              </FormControl>
              
              <Button 
                type="submit" 
                bg="blue.500"
                color="white"
                _hover={{ bg: "blue.600" }}
                size="lg" 
                w={{ base: "full", md: "auto" }}
                isLoading={isSubmitting}
                loadingText="Submitting"
                isDisabled={!consentChecked}
                mt={4}
                rightIcon={<ArrowForwardIcon />}
              >
                Contact Sales
              </Button>
              
              <Text fontSize="sm" color="gray.500" mt={2}>
                <Icon as={InfoIcon} mr={1} />
                Our sales team typically responds within 1 business day.
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Container>
      <Footer />
    </Box>
  );
}

export default SalesContactPage;