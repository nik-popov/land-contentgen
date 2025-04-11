import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/tools/scheduler")({
  component: SchedulerPage,
});

function SchedulerPage() {
  const industryData = [
    { industry: "E-commerce", growth: 58, useCases: "Stock updates, price alignment, order automation" },
    { industry: "Digital Marketing", growth: 51, useCases: "Campaign timing, report generation, content deployment" },
    { industry: "Financial Services", growth: 43, useCases: "Report creation, data syncing, compliance verification" },
    { industry: "Operations", growth: 47, useCases: "Resource planning, upkeep scheduling, SLA tracking" },
    { industry: "Data Analytics", growth: 62, useCases: "ETL workflows, pipeline coordination, dashboard updates" },
    { industry: "IT Management", growth: 44, useCases: "Backups, security audits, system scaling" }
  ];

  const schedulerFeatures = [
    { 
      title: "Graphical Task Designer", 
      description: "Build intricate task sequences using an easy drag-and-drop tool—no coding needed for most automations", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png" 
    },
    { 
      title: "Precision Timing", 
      description: "Define exact run times with cron syntax, task dependencies, and event-driven triggers", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" 
    },
    { 
      title: "Scalable Task Execution", 
      description: "Distribute tasks across workers with auto-balancing, retry mechanisms, and parallel runs", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "In-Depth Oversight", 
      description: "Monitor run history, resource use, and success metrics with detailed logs and analytics", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/prometheus.png" 
    }
  ];

  return (
    <>
      {/* Scheduler Hero Section */}
      <Box py={16} bg="red.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
            Task Scheduler
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Streamline your workflows with our robust scheduling and orchestration tool. 
            Plan, run, and oversee intricate processes with accurate timing and dependable execution.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.500">Smart Workflow Automation</Heading>
              <Text>Design advanced workflows integrating APIs, scraping, data processing, and delivery into smooth, automated sequences that trigger precisely when required.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.500">Dependable Performance</Heading>
              <Text>Guarantee your key tasks execute on schedule with a resilient system featuring retries, dependency handling, and alerts to keep everything running smoothly.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="red.500">Full Transparency</Heading>
              <Text>Keep tabs on all scheduled activities via a unified dashboard showing live status, detailed logs, resource stats, and tailored notifications.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Why Choose Our Scheduler
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.500">76%</StatNumber>
                <StatLabel>Boost in Efficiency</StatLabel>
              </Stat>
              <Text>
                Companies using our tool see up to a 76% rise in efficiency by automating tasks and minimizing errors in critical operations.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.500">24/7</StatNumber>
                <StatLabel>Non-Stop Automation</StatLabel>
              </Stat>
              <Text>
                Enable continuous operations with workflows that run unattended during nights, weekends, and holidays.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="red.500">94%</StatNumber>
                <StatLabel>Mistake Reduction</StatLabel>
              </Stat>
              <Text>
                Cut out human errors with consistent, repeatable workflows that execute flawlessly every time.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Industry Applications Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Sector-Tailored Automation
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {industryData.map((industry, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{industry.industry}</StatLabel>
                  <StatNumber color="red.500">{industry.growth}%</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    Automation Growth
                  </StatHelpText>
                </Stat>
                <Text fontSize="sm" color="gray.600">
                  <Text as="span" fontWeight="bold">Applications:</Text> {industry.useCases}
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
            Powerful Automation Features
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our Scheduler delivers advanced tools to manage sophisticated business workflows
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png" alt="Task Designer" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Task Designer</Heading>
                <Text color="gray.600">Link tasks with dependencies, logic conditions, and parallel paths using a visual design tool</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="System Integration" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">System Integration</Heading>
                <Text color="gray.600">Activate and connect with numerous external systems via ready-made connectors or custom APIs</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/docker.png" alt="Isolated Runs" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Isolated Runs</Heading>
                <Text color="gray.600">Execute tasks in secure, isolated containers with controlled resources for consistent performance</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Run Monitoring" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Run Monitoring</Heading>
                <Text color="gray.600">Observe every detail of your tasks with comprehensive logs, performance data, and past run records</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Platform Features Section */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Scheduler Core Capabilities
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.500">Timing & Workflow Control</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Cron Scheduling</Text> - Set precise task times with cron syntax down to the second</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Event Triggers</Text> - Launch workflows based on events like file uploads, API hits, or data changes</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Task Dependencies</Text> - Set up intricate task sequences with conditional paths based on results</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Flexible Templates</Text> - Design reusable tasks with adjustable settings for versatile use</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Retry Handling</Text> - Apply smart retry policies with delays for temporary setbacks</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="red.500">Management & Tracking</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Live Tracking</Text> - View task status, runtime, and resource use on a central dashboard</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Notifications</Text> - Get alerts via email, Slack, or webhooks for failures or delays</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Run History</Text> - Keep detailed records of all runs for auditing and problem-solving</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Resource Allocation</Text> - Control CPU, memory, and concurrency for peak efficiency</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="red.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Team Coordination</Text> - Share tasks and manage access with permissions and version control</Text>
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
            Automation Wins
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.500">E-commerce Firm Enhances Efficiency</Heading>
              <Text mb={4}>
                A fast-growing online retailer used our Scheduler to automate stock management across 15 warehouses and over 50,000 SKUs. They cut manual work by 84% and reduced stockouts by 96% with timely updates and reordering.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "We used to have staff working non-stop to sync inventory. Now it’s all automated, letting us focus on scaling rather than fixing issues."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="red.500">Finance Company Speeds Up Reports</Heading>
              <Text mb={4}>
                A financial firm leveraged our Scheduler to streamline daily reports across 37 systems. They shortened report creation from 6 hours to 45 minutes and removed manual errors that once demanded heavy rework.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The task dependency features transformed our reporting. We ensure data accuracy across all reports, and alerts keep us ahead of any problems."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Integration Partners */}
      <Box py={16} bg="red.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Connected Tools
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our Scheduler works smoothly with your current platforms and services
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
      <Box py={16} bg="red.500" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Ready to Streamline Your Processes?
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Begin using our Scheduler now to turn repetitive tasks into efficient, error-free automated workflows
          </Text>
          
          <Flex justify="center" gap={6} flexWrap="wrap">
            <Button
              size="lg"
              bg="white"
              color="red.500"
              _hover={{ bg: "gray.100" }}
              as="a"
              href="/demo-request"
            >
              Schedule a Demo
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              borderColor="white"
              color="white"
              _hover={{ bg: "gray.200" }}
              as="a"
              href="https://cloud.roamingproxy.com/signup"
            >
              Try It Free
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