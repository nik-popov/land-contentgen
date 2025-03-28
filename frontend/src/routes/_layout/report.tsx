import { createFileRoute } from '@tanstack/react-router';
import { 
  Box, 
  Heading, 
  Text, 
  VStack, 
  Container,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
  Radio,
  RadioGroup,
  Stack,
  FormHelperText,
  useToast,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  HStack,
  Icon,
  Badge,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  List,
  ListItem,
  ListIcon,
  Flex
} from "@chakra-ui/react";
import { InfoIcon, LockIcon, WarningIcon, CheckCircleIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import Footer from '../../components/Common/Footer';

export const Route = createFileRoute('/_layout/report')({
  component: WhistleblowerReportPage,
});

function WhistleblowerReportPage() {
  const [category, setCategory] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reportId, setReportId] = useState('');
  const [accessKey, setAccessKey] = useState('');
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with a delay
    setTimeout(() => {
      // Generate a random report ID and access key
      const newReportId = 'REP' + Math.random().toString(36).substring(2, 10).toUpperCase();
      const newAccessKey = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
      
      setReportId(newReportId);
      setAccessKey(newAccessKey);
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
              Report Submitted Successfully
            </AlertTitle>
            <Alert status="warning" my={4} borderRadius="md">
              <AlertIcon />
              <Box>
                <AlertTitle fontWeight="bold">Important: Save Your Access Information</AlertTitle>
                <AlertDescription>
                  <Text mb={2}>Please save the following information in a secure location. You will need it to check the status of your report and communicate with our investigation team anonymously.</Text>
                  <Text fontWeight="bold">Report ID: {reportId}</Text>
                  <Text fontWeight="bold">Access Key: {accessKey}</Text>
                </AlertDescription>
              </Box>
            </Alert>
            <AlertDescription maxWidth="lg">
              <Text mb={4}>
                Our Ethics &amp; Compliance team has received your report and will begin reviewing it within 1 business day. You can use your Report ID and Access Key to securely check the status of your report and communicate with our team while maintaining your anonymity.
              </Text>
              <Text mb={4}>
                Thank you for bringing this matter to our attention. We take all reports seriously and are committed to conducting a thorough investigation while protecting your confidentiality.
              </Text>
              <HStack justifyContent="center" mt={4}>
                <Button colorScheme="blue" onClick={() => window.print()}>
                  Print This Information
                </Button>
                <Button colorScheme="green" onClick={() => window.location.href = "/report-status"}>
                  Check Report Status
                </Button>
              </HStack>
            </AlertDescription>
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
          <Box w="full">
            <Heading as="h1" size="xl" fontWeight="medium">
              Confidential Reporting Channel
            </Heading>
            <HStack mt={2}>
              
              <Text fontSize="lg" color="gray.600">
                Safe, secure, and anonymous reporting of ethical concerns
              </Text>
            </HStack>
          </Box>
          
          {/* Introduction & Information Box */}
          <Box w="full" border="1px" borderColor="gray.200" p={6} borderRadius="md">
            <VStack align="start" spacing={4}>
              <Heading as="h2" size="md" fontWeight="semibold">
                About This Reporting Channel
              </Heading>
              
              <Text>
                This secure reporting channel allows you to report potential misconduct, ethics violations, or compliance concerns confidentially or anonymously. The Data Proxy is committed to maintaining a culture of integrity, and your reports help us uphold our ethical standards.
              </Text>
              
    
            </VStack>
          </Box>
          
          {/* FAQ Accordion */}
          <Accordion allowToggle w="full">
            <AccordionItem>
              <h2>
                <AccordionButton py={3}>
                  <Box flex="1" textAlign="left" fontWeight="medium">
                    What can I report through this channel?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} bg="gray.50">
                <Text mb={3}>
                  This channel is intended for reporting serious concerns such as:
                </Text>
                <List spacing={2}>
                  <ListItem>
                    <ListIcon as={WarningIcon} color="orange.500" />
                    Financial fraud or accounting irregularities
                  </ListItem>
                  <ListItem>
                    <ListIcon as={WarningIcon} color="orange.500" />
                    Corruption, bribery, or illegal activities
                  </ListItem>
                  <ListItem>
                    <ListIcon as={WarningIcon} color="orange.500" />
                    Data security breaches or privacy violations
                  </ListItem>
                  <ListItem>
                    <ListIcon as={WarningIcon} color="orange.500" />
                    Ethical violations or conflicts of interest
                  </ListItem>
                  <ListItem>
                    <ListIcon as={WarningIcon} color="orange.500" />
                    Harassment, discrimination, or workplace safety issues
                  </ListItem>
                  <ListItem>
                    <ListIcon as={WarningIcon} color="orange.500" />
                    Environmental, health, or safety violations
                  </ListItem>
                  <ListItem>
                    <ListIcon as={WarningIcon} color="orange.500" />
                    Violations of our Code of Conduct or policies
                  </ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton py={3}>
                  <Box flex="1" textAlign="left" fontWeight="medium">
                    How is my anonymity protected?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} bg="gray.50">
                <Text mb={3}>
                  We take several measures to protect your identity:
                </Text>
                <List spacing={2}>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    This system is hosted by a third-party provider separate from our corporate IT infrastructure
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    We do not track IP addresses, device information, or metadata
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    End-to-end encryption protects all communications
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    You receive a random Report ID and Access Key to check on your report without revealing your identity
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Only designated Ethics & Compliance team members have access to reports
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Our strict non-retaliation policy prohibits any action against whistleblowers
                  </ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton py={3}>
                  <Box flex="1" textAlign="left" fontWeight="medium">
                    What happens after I submit a report?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} bg="gray.50">
                <Text mb={2}>
                  1. <strong>Initial Review:</strong> Our Ethics & Compliance team will review your report within 1 business day.
                </Text>
                <Text mb={2}>
                  2. <strong>Investigation:</strong> If warranted, we will initiate an investigation by appropriate personnel.
                </Text>
                <Text mb={2}>
                  3. <strong>Communication:</strong> We may ask follow-up questions through the anonymous messaging system.
                </Text>
                <Text mb={2}>
                  4. <strong>Resolution:</strong> We will take appropriate action based on investigation findings.
                </Text>
                <Text mb={2}>
                  5. <strong>Closure:</strong> You will be notified when the investigation is complete (via the secure portal).
                </Text>
                <Text mt={4} fontStyle="italic">
                  The timeline for resolution varies depending on the complexity of the issue, but we strive to complete all investigations promptly while ensuring thoroughness.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          
          <Divider />
          
          {/* Report Form */}
          <Box w="full" as="form" onSubmit={handleSubmit}>
            <VStack spacing={6} align="start">
              <Heading as="h2" size="md" fontWeight="medium">
                Submit a Confidential Report
              </Heading>
              
              {/* Report Category */}
              <FormControl isRequired>
                <FormLabel>Type of Concern</FormLabel>
                <Select 
                  placeholder="Select category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="financial">Financial Fraud or Accounting Irregularities</option>
                  <option value="corruption">Corruption, Bribery, or Illegal Activities</option>
                  <option value="data">Data Security or Privacy Violations</option>
                  <option value="ethics">Ethics Violations or Conflicts of Interest</option>
                  <option value="harassment">Harassment or Discrimination</option>
                  <option value="safety">Environmental, Health, or Safety Concerns</option>
                  <option value="conduct">Code of Conduct Violations</option>
                  <option value="other">Other Compliance Concerns</option>
                </Select>
                <FormHelperText>
                  Select the category that best describes your concern
                </FormHelperText>
              </FormControl>
              
              {/* Report Details */}
              <FormControl isRequired>
                <FormLabel>Details of the Incident or Concern</FormLabel>
                <Textarea 
                  placeholder="Please provide a detailed description of your concern, including relevant dates, locations, individuals involved, and any other pertinent information. The more specific details you can provide, the better we can investigate."
                  rows={8}
                />
                <FormHelperText>
                  Be as specific as possible, but please avoid including personally identifying information about yourself if you wish to remain anonymous
                </FormHelperText>
              </FormControl>
              
              {/* Additional Questions based on Category */}
              {category === 'financial' && (
                <FormControl>
                  <FormLabel>Approximate Amount Involved (if applicable)</FormLabel>
                  <Input type="text" placeholder="e.g., $5,000" />
                </FormControl>
              )}
              
              {(category === 'harassment' || category === 'safety') && (
                <FormControl>
                  <FormLabel>Is this an ongoing situation that poses immediate risk?</FormLabel>
                  <RadioGroup defaultValue="no">
                    <Stack direction="row" spacing={5}>
                      <Radio value="yes">Yes</Radio>
                      <Radio value="no">No</Radio>
                    </Stack>
                  </RadioGroup>
                  <FormHelperText color="red.500">
                    If this is an emergency situation that requires immediate attention, please also contact appropriate authorities.
                  </FormHelperText>
                </FormControl>
              )}
              
              {/* Evidence Upload Option */}
              <FormControl>
                <FormLabel>Supporting Evidence (Optional)</FormLabel>
                <Text fontSize="sm" mb={2}>
                  If you have documents, screenshots, or other evidence that supports your report, please describe them here. 
                  For security reasons, do not upload files directly. Our team will provide secure upload instructions later if needed.
                </Text>
                <Textarea placeholder="Describe any evidence you have (e.g., 'Email exchanges between March 5-10, 2025', 'Financial records showing irregular payments')" rows={3} />
              </FormControl>
              
              {/* Witnesses */}
              <FormControl>
                <FormLabel>Witnesses (Optional)</FormLabel>
                <Textarea placeholder="If there are others who are aware of or witnessed the situation, you may mention them here. Note: We will maintain your anonymity when we contact these individuals." rows={3} />
              </FormControl>
              
              {/* Two-way Communication */}
              <FormControl>
                <FormLabel>Anonymous Communication Preference</FormLabel>
                <Text fontSize="sm" mb={3}>
                  We may need to ask follow-up questions or provide updates about your report. You can check the status of your report and communicate with our team while remaining anonymous by using the Report ID and Access Key you'll receive after submission.
                </Text>
                <RadioGroup defaultValue="regularly">
                  <Stack direction="column" spacing={3}>
                    <Radio value="regularly">
                      <Text>I will check for updates regularly (recommended)</Text>
                    </Radio>
                    <Radio value="notify">
                      <Text>I'd like to provide an anonymous email for notifications (optional)</Text>
                    </Radio>
                  </Stack>
                </RadioGroup>
                <Input mt={3} placeholder="Anonymous email address (optional)" />
                <FormHelperText>
                  If provided, this email will receive notifications when there are updates to your report. Consider using a non-work email that doesn't identify you.
                </FormHelperText>
              </FormControl>
              
              <Alert status="info" borderRadius="md" mb={6}>
                <AlertIcon />
                <Box>
                  <AlertTitle>Important Note on Anonymity</AlertTitle>
                  <AlertDescription fontSize="sm">
                    While you can submit this report anonymously, please be aware that in some cases, complete anonymity might limit our ability to fully investigate if we cannot gather additional information. However, we respect your choice and will investigate to the best of our ability with the information provided.
                  </AlertDescription>
                </Box>
              </Alert>
              
              {/* Submit Button */}
              <Flex w="full" justifyContent="flex-start" direction={{ base: "column", sm: "row" }} gap={6} mt={4}>
                <Button 
                  type="submit" 
                  colorScheme="blue" 
                  size="lg"
                  isLoading={isSubmitting}
                  loadingText="Submitting Securely"
                >
                  <Icon as={LockIcon} mr={2} />
                  Submit Report
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={() => window.location.href="/report-status"}
                >
                  Check Existing Report Status
                </Button>
              </Flex>
              
              <Text fontSize="sm" color="gray.600" mt={2}>
                <Icon as={InfoIcon} mr={1} />
                This form is secured with end-to-end encryption. No identifying information such as your IP address or browser information is stored.
              </Text>
            </VStack>
          </Box>
          
          <Divider />
          
          {/* Non-Retaliation Policy */}
          <Box w="full" border="1px" borderColor="gray.200" p={6} borderRadius="md">
            <Heading as="h2" size="md" fontWeight="medium" mb={4}>
              Our Non-Retaliation Commitment
            </Heading>
            
            <Text fontSize="md" mb={4}>
              The Data Proxy strictly prohibits retaliation against anyone who reports a concern in good faith or participates in an investigation. Retaliation in any form, including harassment, demotion, termination, or any other adverse action, will not be tolerated.
            </Text>
            
            <Text fontSize="md">
              If you believe you have experienced retaliation as a result of making a report or participating in an investigation, please report it immediately through this channel or directly to the Ethics & Compliance Officer at compliance@thedataproxy.com.
            </Text>
          </Box>
          
          {/* Alternative Contact */}
          <Box w="full">
            <Heading as="h2" size="md" fontWeight="medium" mb={4}>
              Alternative Reporting Methods
            </Heading>
            
            <Text fontSize="md" mb={4}>
              While this online portal is our primary channel for confidential reporting, you may also report concerns through these alternative methods:
            </Text>
            
            <VStack align="start" spacing={2} pl={4} mb={4}>
              <Text><strong>Phone:</strong> +1 (855) 440-2242</Text>
              <Text><strong>Privacy Team Email:</strong> privacy@thedataproxy.com</Text>
              <Text><strong>Mail:</strong> Ethics & Compliance Office, The Data Proxy, 99 Wall St Suite 5660, New York, NY 10005, USA</Text>
            </VStack>
          </Box>
        </VStack>
      </Container>
      <Footer />
    </Box>
  );
}

export default WhistleblowerReportPage;