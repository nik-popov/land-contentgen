import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/network/security")({
  component: SecurityFeaturesPage,
});

function SecurityFeaturesPage() {
  const securityTiers = [
    { tier: "Network Safeguards", features: 3, protocols: 8, useCases: "Securing data transfers, thwarting interception, protecting API endpoints" },
    { tier: "Identity & Permissions", features: 6, protocols: 12, useCases: "User authentication, role-specific access, detailed privilege control" },
    { tier: "Risk Mitigation", features: 8, protocols: 7, useCases: "DDoS defense, bot prevention, malware blocking" },
    { tier: "Regulatory Adherence", features: 5, protocols: 9, useCases: "Audit logging, data residency, compliance documentation" },
    { tier: "Information Protection", features: 7, protocols: 11, useCases: "Data encryption, masking sensitive info, key security" },
    { tier: "System Defense", features: 4, protocols: 6, useCases: "Network isolation, intrusion alerts, weakness detection" }
  ];

  const securityFeatures = [
    { 
      title: "Top-Tier Encryption", 
      description: "Robust encryption for data on the move and at rest, featuring dynamic cipher rotation and perfect forward secrecy", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" 
    },
    { 
      title: "Zero-Trust Framework", 
      description: "Thorough identity checks on every action, with fine-tuned access rules and ongoing validation", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png" 
    },
    { 
      title: "Smart Threat Sensing", 
      description: "Live oversight and AI-driven anomaly spotting to catch and stop risks before they disrupt", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Regulatory Support", 
      description: "Integrated tools and auto-reports for effortless alignment with GDPR, HIPAA, SOC 2, and more", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/analytics.png" 
    }
  ];

  return (
    <>
      {/* Security Features Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Cybersecurity Enhancements
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Robust, enterprise-level defenses for your critical data and systems, ensuring safety across every layer.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="purple.500">Cutting-Edge Encryption</Heading>
              <Text>High-strength encryption using TLS 1.3, AES-256, and ChaCha20-Poly1305 to lock down your sensitive data completely.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="purple.500">Risk Awareness</Heading>
              <Text>Instant risk identification powered by AI and machine learning to neutralize threats before they strike.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="purple.500">Access Management</Heading>
              <Text>Precise control over identities and permissions with role-tailored access, multi-factor checks, and full audit tracking.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Why Our Cybersecurity Platform Excels
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="purple.500">99.99%</StatNumber>
                <StatLabel>Risk Identification</StatLabel>
              </Stat>
              <Text>
                Our sophisticated algorithms catch nearly all known risks, with constant updates to counter new threats.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="purple.500">92%</StatNumber>
                <StatLabel>Fewer Incidents</StatLabel>
              </Stat>
              <Text>
                Companies using our full security suite see up to 92% fewer breaches compared to typical industry stats.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="purple.500">15+</StatNumber>
                <StatLabel>Regulatory Standards</StatLabel>
              </Stat>
              <Text>
                Built-in features and reports for over 15 key standards like GDPR, HIPAA, SOC 2, ISO 27001, and PCI DSS, with auto-auditing.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Security Tiers Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Cybersecurity Layers
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {securityTiers.map((tier, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{tier.tier}</StatLabel>
                  <Flex justify="space-between" align="center">
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Components</Text>
                    <StatNumber color="purple.500">{tier.features}</StatNumber>
                  </Flex>
                  <Flex justify="space-between" align="center" mt={1}>
                    <Text color="gray.500" fontSize="sm" fontWeight="normal">Methods</Text>
                    <StatNumber color="red.400">{tier.protocols}</StatNumber>
                  </Flex>
                </Stat>
                <Text fontSize="sm" color="gray.600">
                  <Text as="span" fontWeight="bold">Applications:</Text> {tier.useCases}
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
            Robust Security Innovations
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our layered defense strategy blends leading tech with custom safeguards for total protection
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Constant Oversight" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Non-Stop Risk Watch</Heading>
                <Text color="gray.600">Round-the-clock monitoring and instant alerts, backed by our SOC team to tackle evolving risks</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Trustless Design" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Trustless Design</Heading>
                <Text color="gray.600">Verify every move—full identity checks on all requests, no matter the source</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Leak Prevention" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Leak Prevention</Heading>
                <Text color="gray.600">Smart content monitoring and rules to stop data leaks and unauthorized sharing</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="API Shield" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">API Shield</Heading>
                <Text color="gray.600">Full API defense with rate controls, format validation, and unusual activity detection</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Security Platform Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Cybersecurity Platform Capabilities
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="purple.500">Data & Access Safety</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Full Encryption</Text> - Top-level encryption for data moving and stored</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Multi-Step Verification</Text> - Versatile MFA with biometrics, tokens, and phone checks</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Key Handling</Text> - Auto-rotating keys with hardware-backed security</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Identity Syncing</Text> - Smooth linkage with your existing ID systems and SSO</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Elevated Access Control</Text> - On-demand access for high-level tasks with approval steps</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="purple.500">Threat Defense & Standards</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">DDoS Protection</Text> - Smart filtering and scaling to handle large-scale attacks</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Intrusion Monitoring</Text> - AI-driven detection to spot and halt odd activities</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Flaw Detection</Text> - Auto-scans and fix suggestions for your systems</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Standards Reporting</Text> - Embedded tools with automatic proof gathering for compliance</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Security Insights</Text> - Detailed dashboards offering clear views of your defenses</Text>
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
            Cybersecurity Wins
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="purple.500">Bank Locks Out Breaches</Heading>
              <Text mb={4}>
                A top financial institution rolled out our full security platform across its worldwide operations. Adopting our trustless framework, they achieved zero breaches over two years, slashing security costs by 32%.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "This all-in-one security solution has redefined how we safeguard client data. Our team now focuses on planning ahead instead of fighting fires."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="purple.500">Healthcare Simplifies Standards</Heading>
              <Text mb={4}>
                A major healthcare system used our platform to streamline compliance with HIPAA, HITRUST, and local rules. Automated features and live tracking cut audit prep time by 78%, strengthening their overall security stance.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Audits used to drain countless hours. Now we maintain steady compliance with automated tools, freeing us to prioritize patient care."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Security Framework Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Holistic Cybersecurity System
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our multi-level defense strategy delivers comprehensive protection across your entire system
          </Text>
          
          <Box bg="white" p={6} borderRadius="md" boxShadow="md">
            <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={4} mt={8}>
              <VStack>
                <Text fontWeight="bold" color="purple.500">Network Safety</Text>
                <Text>3 Components</Text>
                <Text>8 Methods</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="purple.500">Identity</Text>
                <Text>6 Components</Text>
                <Text>12 Methods</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="purple.500">Risk Defense</Text>
                <Text>8 Components</Text>
                <Text>7 Methods</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="purple.500">Regulations</Text>
                <Text>5 Components</Text>
                <Text>9 Methods</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="purple.500">Data Safety</Text>
                <Text>7 Components</Text>
                <Text>11 Methods</Text>
              </VStack>
              <VStack>
                <Text fontWeight="bold" color="purple.500">Systems</Text>
                <Text>4 Components</Text>
                <Text>6 Methods</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="purple.500" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Fortify Your Systems Now
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Launch our all-encompassing security platform to shield your critical assets from emerging risks
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
              Book a Demo
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              borderColor="white"
              color="white"
              _hover={{ bg: "red.700" }}
              as="a"
              href="https://cloud.roamingproxy.com/signup"
            >
              Try Free Now
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