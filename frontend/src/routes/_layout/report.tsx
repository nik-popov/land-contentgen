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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      category: category,
      details: e.target.details.value,
      amount_involved: e.target.amountInvolved?.value || null,
      is_immediate_risk: e.target.isImmediateRisk?.value === 'yes' || false,
      evidence_description: e.target.evidenceDescription?.value || null,
      witnesses: e.target.witnesses?.value || null,
      communication_preference: e.target.communicationPreference.value,
      anonymous_email: e.target.anonymousEmail?.value || null,
    };

    try {
      const response = await fetch('https://apis.thedataproxy.com/api/v1/utils/whistleblower-report/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit report');
      }

      const data = await response.json();
      setReportId(data.report_id);
      setAccessKey(data.access_key);
      setFormSubmitted(true);
      window.scrollTo(0, 0);
      
      toast({
        title: "Report Submitted",
        description: "Your confidential report has been received.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Failed to submit your report",
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
              Report Submitted Successfully
            </AlertTitle>
            <Alert status="warning" my={4} borderRadius="md">
              <AlertIcon />
              <Box>
                <AlertTitle fontWeight="bold">Important: Save Your Access Information</AlertTitle>
                <AlertDescription>
                  <Text mb={2}>Please save this information securely to track your report anonymously:</Text>
                  <Text fontWeight="bold">Report ID: {reportId}</Text>
                  <Text fontWeight="bold">Access Key: {accessKey}</Text>
                </AlertDescription>
              </Box>
            </Alert>
            <AlertDescription maxWidth="lg">
              <Text mb={4}>
                Our team will review your report within 1 business day. Use your Report ID and Access Key to check status anonymously.
              </Text>
              <HStack justifyContent="center" mt={4}>
                <Button colorScheme="blue" onClick={() => window.print()}>
                  Print This Information
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
            <Text fontSize="lg" color="gray.600" mt={2}>
              Safe, secure, and anonymous reporting of ethical concerns
            </Text>
          </Box>

          <Box w="full" border="1px" borderColor="gray.200" p={6} borderRadius="md">
            <VStack align="start" spacing={4}>
              <Heading as="h2" size="md" fontWeight="semibold">
                About This Reporting Channel
              </Heading>
              <Text>
                Report misconduct or ethical concerns confidentially or anonymously. We’re committed to integrity and protecting whistleblowers.
              </Text>
            </VStack>
          </Box>

          <Accordion allowToggle w="full">
            {/* FAQ items remain the same */}
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

          <Box w="full" as="form" onSubmit={handleSubmit}>
            <VStack spacing={6} align="start">
              <Heading as="h2" size="md" fontWeight="medium">
                Submit a Confidential Report
              </Heading>

              <FormControl isRequired>
                <FormLabel>Type of Concern</FormLabel>
                <Select 
                  name="category"
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
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Details of the Incident or Concern</FormLabel>
                <Textarea 
                  name="details"
                  placeholder="Provide detailed description including dates, locations, and individuals involved."
                  rows={8}
                />
              </FormControl>

              {category === 'financial' && (
                <FormControl>
                  <FormLabel>Approximate Amount Involved (if applicable)</FormLabel>
                  <Input name="amountInvolved" type="text" placeholder="e.g., $5,000" />
                </FormControl>
              )}

              {(category === 'harassment' || category === 'safety') && (
                <FormControl>
                  <FormLabel>Is this an ongoing situation that poses immediate risk?</FormLabel>
                  <RadioGroup name="isImmediateRisk" defaultValue="no">
                    <Stack direction="row" spacing={5}>
                      <Radio value="yes">Yes</Radio>
                      <Radio value="no">No</Radio>
                    </Stack>
                  </RadioGroup>
                  <FormHelperText color="red.500">
                    For emergencies, contact appropriate authorities immediately.
                  </FormHelperText>
                </FormControl>
              )}

              <FormControl>
                <FormLabel>Supporting Evidence (Optional)</FormLabel>
                <Textarea 
                  name="evidenceDescription"
                  placeholder="Describe any evidence (e.g., 'Email exchanges March 5-10, 2025')"
                  rows={3}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Witnesses (Optional)</FormLabel>
                <Textarea 
                  name="witnesses"
                  placeholder="Mention any witnesses aware of the situation."
                  rows={3}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Anonymous Communication Preference</FormLabel>
                <RadioGroup name="communicationPreference" defaultValue="regularly">
                  <Stack direction="column" spacing={3}>
                    <Radio value="regularly">I will check for updates regularly</Radio>
                    <Radio value="notify">Notify me via anonymous email</Radio>
                  </Stack>
                </RadioGroup>
                <Input name="anonymousEmail" mt={3} placeholder="Anonymous email (optional)" />
              </FormControl>

              <Alert status="info" borderRadius="md" mb={6}>
                <AlertIcon />
                <Box>
                  <AlertTitle>Important Note</AlertTitle>
                  <AlertDescription fontSize="sm">
                    Anonymity may limit investigation scope, but we respect your choice and will proceed with available information.
                  </AlertDescription>
                </Box>
              </Alert>

              <Flex w="full" direction={{ base: "column", sm: "row" }} gap={6}>
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
              </Flex>
            </VStack>
          </Box>

          <Divider />

          <Box w="full" border="1px" borderColor="gray.200" p={6} borderRadius="md">
            <Heading as="h2" size="md" fontWeight="medium" mb={4}>
              Our Non-Retaliation Commitment
            </Heading>
            <Text fontSize="md">
              We prohibit retaliation against whistleblowers. Report any retaliation to compliance@thedataproxy.com.
            </Text>
          </Box>

          <Box w="full">
            <Heading as="h2" size="md" fontWeight="medium" mb={4}>
              Alternative Reporting Methods
            </Heading>
            <VStack align="start" spacing={2}>
              <Text><strong>Phone:</strong> +1 (855) 440-2242</Text>
              <Text><strong>Email:</strong> privacy@thedataproxy.com</Text>
              <Text><strong>Mail:</strong> Ethics & Compliance, 99 Wall St Suite 5660, NY 10005</Text>
            </VStack>
          </Box>
        </VStack>
      </Container>
      <Footer />
    </Box>
  );
}

export default WhistleblowerReportPage;