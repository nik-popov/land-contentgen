import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/network/security")({
  component: SecurityFeaturesPage,
});

function SecurityFeaturesPage() {
  const securityTiers = [
    { tier: "Connection Security", features: 3, protocols: 8, useCases: "Protecting data in transit, preventing MITM attacks, securing API access" },
    { tier: "Authentication & Access Control", features: 6, protocols: 12, useCases: "User verification, role-based access, granular permissions" },
    { tier: "Threat Protection", features: 8, protocols: 7, useCases: "DDoS mitigation, bot detection, malware prevention" },
    { tier: "Compliance & Governance", features: 5, protocols: 9, useCases: "Regulatory audit trails, data sovereignty, compliance reporting" },
    { tier: "Data Security", features: 7, protocols: 11, useCases: "Encryption at rest, data masking, secure key management" },
    { tier: "Infrastructure Protection", features: 4, protocols: 6, useCases: "Network segmentation, intrusion detection, vulnerability scanning" }
  ];

  const securityFeatures = [
    { 
      title: "Enterprise-grade Encryption", 
      description: "Military-grade encryption for all data in transit and at rest with rotating cipher suites and forward secrecy", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" 
    },
    { 
      title: "Zero-Trust Architecture", 
      description: "Comprehensive identity verification on every request with granular access control and continuous authorization", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png" 
    },
    { 
      title: "Advanced Threat Detection", 
      description: "Real-time monitoring and AI-powered anomaly detection to identify and neutralize threats before they impact systems", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Compliance Framework", 
      description: "Built-in controls and automated reporting for seamless compliance with GDPR, HIPAA, SOC 2, and other frameworks", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    }
  ];

  return (
    <>
      {/* Security Features Hero Section */}
      <Box py={16} bg="blue.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Security Features
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Enterprise-grade security for your most sensitive data and operations.
            Comprehensive protection across all layers of your infrastructure.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="purple.500">Advanced Encryption</Heading>
              <Text>Military-grade encryption for all data with TLS 1.3, AES-256, and ChaCha20-Poly1305 ciphers ensuring complete confidentiality for your most sensitive information.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="purple.500">Threat Intelligence</Heading>
              <Text>Real-time threat detection powered by AI and machine learning algorithms that identify and neutralize potential attacks before they can impact your systems.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="purple.500">Access Controls</Heading>
              <Text>Granular identity and access management with role-based permissions, multi-factor authentication, and detailed audit trails for comprehensive security governance.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Key Benefits of Our Security Platform
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="purple.500">99.99%</StatNumber>
                <StatLabel>Threat Detection Rate</StatLabel>
              </Stat>
              <Text>
                Our advanced security algorithms detect virtually all known threats and vulnerabilities, 
                with continuous updates to protect against emerging attack vectors.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="purple.500">92%</StatNumber>
                <StatLabel>Reduction in Security Incidents</StatLabel>
              </Stat>
              <Text>
                Organizations implementing our comprehensive security suite report up to 92%
                fewer security incidents and data breaches compared to industry averages.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="purple.500">15+</StatNumber>
                <StatLabel>Compliance Frameworks</StatLabel>
              </Stat>
              <Text>
                Built-in controls and reporting for over 15 major compliance frameworks including 
                GDPR, HIPAA, SOC 2, ISO 27001, and PCI DSS with automated audit capabilities.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Security Tiers Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Security Protection Tiers
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {securityTiers.map((tier, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{tier.tier}</StatLabel>
                  <Flex justify="space-between" align="center">
                 
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Features</Text>
                    <StatNumber color="purple.500">{tier.features}</StatNumber>
                  </Flex>
                  <Flex justify="space-between" align="center" mt={1}>
                    
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Protocols</Text>
                    <StatNumber color="blue.400">{tier.protocols}</StatNumber>
                  </Flex>
                </Stat>
                <Text fontSize="sm" color="gray.600">
                  <Text as="span" fontWeight="bold">Common Use Cases:</Text> {tier.useCases}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      
      {/* Security Technologies Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={4} fontWeight="medium">
            Advanced Security Technologies
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our multi-layered security approach combines best-in-class technologies with proprietary protection mechanisms
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Monitoring & Detection" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">24/7 Threat Monitoring</Heading>
                <Text color="gray.600">Continuous monitoring and real-time alerts with our SOC team providing around-the-clock protection against evolving threats</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Zero Trust" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Zero Trust Architecture</Heading>
                <Text color="gray.600">Never trust, always verify - with comprehensive identity verification on every request regardless of origin</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Data Protection" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Data Loss Prevention</Heading>
                <Text color="gray.600">Intelligent content analysis and policy enforcement to prevent data leakage and unauthorized information sharing</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="API Security" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">API Security Gateway</Heading>
                <Text color="gray.600">Comprehensive protection for your APIs with rate limiting, schema validation, and anomaly detection</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Security Platform Features Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Security Platform Features
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="purple.500">Data & Identity Protection</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">End-to-End Encryption</Text> - Military-grade encryption for all data in transit and at rest</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Multi-Factor Authentication</Text> - Flexible MFA options including biometrics, tokens, and mobile verification</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Secure Key Management</Text> - Automated key rotation with hardware security module integration</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Identity Federation</Text> - Seamless integration with your existing identity providers and SSO solutions</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Privileged Access Management</Text> - Just-in-time access for privileged operations with approval workflows</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="purple.500">Threat Protection & Compliance</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">DDoS Mitigation</Text> - Advanced traffic filtering with automatic scaling to absorb volumetric attacks</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Intrusion Detection</Text> - AI-powered anomaly detection to identify and block suspicious activities</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Vulnerability Management</Text> - Automated scanning and patching recommendations for your infrastructure</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Compliance Reporting</Text> - Built-in controls with automated evidence collection for major frameworks</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Security Analytics</Text> - Comprehensive dashboards with actionable insights on your security posture</Text>
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
            Security Success Stories
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="purple.500">Financial Institution Achieves Zero Breaches</Heading>
              <Text mb={4}>
                A leading financial services company implemented our comprehensive security platform across 
                their global operations. After transitioning to our zero-trust architecture, they recorded zero 
                security breaches over a 24-month period while reducing security operational costs by 32%.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The integrated security approach has transformed our ability to protect customer data. Our security 
                team now focuses on strategic improvements rather than constantly responding to incidents."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="purple.500">Healthcare Provider Streamlines Compliance</Heading>
              <Text mb={4}>
                A national healthcare network leveraged our security platform to automate compliance across 
                HIPAA, HITRUST, and state regulations. Automated controls and real-time monitoring reduced audit 
                preparation time by 78% while improving their overall security posture.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Before implementing this platform, compliance audits would consume thousands of staff hours. 
                Now we maintain continuous compliance with automated controls and evidence collection, letting
                us focus on delivering better patient care."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Security Framework Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Comprehensive Security Framework
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our defense-in-depth approach provides layered protection across all aspects of your infrastructure
          </Text>
          
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={4} mt={8}>
              <VStack>
                <Text fontWeight="bold" color="purple.500">Connection Security</Text>
                <Text>3 Features</Text>
                <Text>8 Protocols</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="purple.500">Authentication</Text>
                <Text>6 Features</Text>
                <Text>12 Protocols</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="purple.500">Threat Protection</Text>
                <Text>8 Features</Text>
                <Text>7 Protocols</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="purple.500">Compliance</Text>
                <Text>5 Features</Text>
                <Text>9 Protocols</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="purple.500">Data Security</Text>
                <Text>7 Features</Text>
                <Text>11 Protocols</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="purple.500">Infrastructure</Text>
                <Text>4 Features</Text>
                <Text>6 Protocols</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="purple.500" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Secure Your Infrastructure Today
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Get started with our comprehensive security platform and protect
            your most valuable assets from evolving threats
          </Text>
          
          <Flex justify="center" gap={6} flexWrap="wrap">
            <Button
              size="lg"
              bg="white"
              color="purple.500"
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
              href="https://cloud.thedataproxy.com/signup"
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

export default SecurityFeaturesPage;