import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/tools/scheduler")({
  component: SchedulerPage,
});

function SchedulerPage() {
  const industryData = [
    { industry: "E-commerce", growth: 58, useCases: "Inventory updates, pricing synchronization, order processing" },
    { industry: "Digital Marketing", growth: 51, useCases: "Campaign scheduling, analytics reporting, content publishing" },
    { industry: "Financial Services", growth: 43, useCases: "Report generation, data reconciliation, compliance checks" },
    { industry: "Operations", growth: 47, useCases: "Resource allocation, maintenance scheduling, SLA monitoring" },
    { industry: "Data Analytics", growth: 62, useCases: "ETL processes, data pipeline management, dashboard refreshes" },
    { industry: "IT Management", growth: 44, useCases: "System backups, security scans, infrastructure scaling" }
  ];

  const schedulerFeatures = [
    { 
      title: "Visual Workflow Builder", 
      description: "Create complex workflows with our intuitive drag-and-drop interface - no coding required for most automation tasks", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png" 
    },
    { 
      title: "Advanced Scheduling", 
      description: "Set precise execution schedules with cron expressions, dependencies, and conditional triggers based on events", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" 
    },
    { 
      title: "Distributed Execution", 
      description: "Run jobs across multiple workers with automatic load balancing, retry logic, and parallel processing", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Comprehensive Monitoring", 
      description: "Track execution history, resource usage, and success rates with detailed logs and performance metrics", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/prometheus.png" 
    }
  ];

  return (
    <>
      {/* Scheduler Hero Section */}
      <Box py={16} bg="blue.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Scheduler
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Automate your data workflows with our powerful scheduling and orchestration platform.
            Design, execute, and monitor complex processes with precision timing and reliable delivery.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.500">Intelligent Automation</Heading>
              <Text>Create sophisticated data workflows that combine APIs, web scraping, transformations, and delivery into seamless automated processes that run exactly when needed.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.500">Reliable Execution</Heading>
              <Text>Ensure your critical processes run on time, every time with our fault-tolerant architecture. Automatic retries, dependency management, and alerting keep your workflows on track.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="blue.500">Complete Visibility</Heading>
              <Text>Monitor all your scheduled tasks from a single dashboard with real-time execution status, detailed logs, resource utilization metrics, and customizable alerts.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Key Benefits of Scheduler
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.500">76%</StatNumber>
                <StatLabel>Operational Efficiency Gain</StatLabel>
              </Stat>
              <Text>
                Organizations using our Scheduler report up to 76% increase in operational efficiency 
                by eliminating manual processes and reducing errors in mission-critical workflows.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.500">24/7</StatNumber>
                <StatLabel>Automated Operations</StatLabel>
              </Stat>
              <Text>
                Achieve round-the-clock operation with automated workflows that run nights, 
                weekends, and holidays without human intervention or oversight.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="blue.500">94%</StatNumber>
                <StatLabel>Error Reduction</StatLabel>
              </Stat>
              <Text>
                Eliminate human error from your data processes with standardized workflows 
                that follow the same precise steps every time they execute.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Industry Applications Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Industry-Specific Scheduling Solutions
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {industryData.map((industry, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{industry.industry}</StatLabel>
                  <StatNumber color="blue.500">{industry.growth}%</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    Automation Adoption
                  </StatHelpText>
                </Stat>
                <Text fontSize="sm" color="gray.600">
                  <Text as="span" fontWeight="bold">Common Use Cases:</Text> {industry.useCases}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      
      {/* Scheduler Features Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={4} fontWeight="medium">
            Advanced Scheduling Capabilities
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our Scheduler provides sophisticated workflow management tools to handle complex business processes
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png" alt="Workflow Automation" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Workflow Automation</Heading>
                <Text color="gray.600">Connect multiple tasks with complex dependencies, conditional logic, and parallel execution paths in a visual workflow builder</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="API Integration" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">API Integration</Heading>
                <Text color="gray.600">Trigger and connect to hundreds of third-party systems through pre-built connectors and custom API integrations</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/docker.png" alt="Containerized Execution" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Containerized Execution</Heading>
                <Text color="gray.600">Run each job in isolated containers with precise resource allocation and security boundaries for reliable execution</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Execution Monitoring" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Execution Monitoring</Heading>
                <Text color="gray.600">Track every aspect of your scheduled jobs with detailed logs, performance metrics, and historical execution data</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Platform Features Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Scheduler Platform Features
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="blue.500">Scheduling & Orchestration</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Cron Expressions</Text> - Schedule jobs with precise timing using standard cron syntax with seconds-level granularity</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Event-Based Triggers</Text> - Initiate workflows based on external events such as file uploads, API calls, or database changes</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Dependency Management</Text> - Define complex task dependencies with conditional execution paths based on task outcomes</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Parameterized Jobs</Text> - Create reusable job templates with configurable parameters for flexible execution</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Retry Policies</Text> - Configure automatic retry logic with backoff strategies for handling transient failures</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="blue.500">Operations & Monitoring</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Real-time Monitoring</Text> - Track job status, duration, and resource utilization in real-time on a centralized dashboard</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Alerting System</Text> - Receive notifications via email, Slack, or webhook when jobs fail or exceed duration thresholds</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Audit Logs</Text> - Maintain comprehensive execution history with detailed logs for compliance and troubleshooting</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Resource Management</Text> - Allocate CPU, memory, and concurrent execution limits for optimal performance</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Team Collaboration</Text> - Share workflows, schedule across teams with role-based access controls and versioning</Text>
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
            Scheduler Success Stories
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="blue.500">E-commerce Platform Streamlines Operations</Heading>
              <Text mb={4}>
                A rapidly growing e-commerce platform implemented our Scheduler to automate inventory management 
                across 15 warehouses and 50,000+ SKUs. They reduced manual processing time by 84% and eliminated 
                out-of-stock incidents by 96% through timely inventory updates and reorder automations.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "Before the Scheduler, we had a team working around the clock just to keep our inventory synchronized. 
                Now the process runs automatically, and we can focus on growth strategies instead of firefighting."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="blue.500">Financial Services Firm Automates Reporting</Heading>
              <Text mb={4}>
                A financial services company used our Scheduler to orchestrate their daily reporting workflows 
                across 37 different systems. They reduced report generation time from 6 hours to 45 minutes and 
                eliminated manual errors that previously required extensive reconciliation.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The dependency management in the Scheduler has been a game-changer for us. We can now define 
                complex workflows that ensure data consistency across all our reports, and the alerting system 
                notifies us immediately if any issues arise."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Integration Partners */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Integration Partners
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our Scheduler integrates seamlessly with your existing tools and platforms
          </Text>
          
          <Flex justify="center" flexWrap="wrap" gap={10} mb={12} align="center">
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="AWS" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/gcp.png" alt="Google Cloud" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png" alt="Salesforce" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://1000logos.net/wp-content/uploads/2021/06/Slack-logo.png" alt="Slack" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postgresql.png" alt="PostgreSQL" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
          </Flex>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="blue.500" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Ready to Automate Your Workflows?
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Get started with our Scheduler today and transform your manual processes into
            reliable, automated workflows that save time and eliminate errors
          </Text>
          
          <Flex justify="center" gap={6} flexWrap="wrap">
            <Button
              size="lg"
              bg="white"
              color="blue.500"
              _hover={{ bg: "gray.100" }}
              as="a"
              href="/demo-request"
            >
              Request Scheduler Demo
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              borderColor="white"
              color="white"
              _hover={{ bg: "gray.200" }}
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

export default SchedulerPage;