import { Box, Flex, Grid, Heading, Text, VStack, Button, Link, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image, List, ListItem, ListIcon } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import Footer from '../../../components/Common/Footer';
import { CheckCircleIcon } from '@chakra-ui/icons';

export const Route = createFileRoute("/_layout/solutions/training-ai")({
  component: TrainingAIPage,
});

function TrainingAIPage() {
  const industryData = [
    { industry: "Healthcare", growth: 42, useCases: "Medical image analysis, predictive diagnostics, patient outcome forecasting" },
    { industry: "Finance", growth: 38, useCases: "Fraud detection, algorithmic trading, risk assessment, customer segmentation" },
    { industry: "Manufacturing", growth: 31, useCases: "Predictive maintenance, quality control, supply chain optimization" },
    { industry: "Retail", growth: 35, useCases: "Customer behavior analysis, recommendation engines, inventory forecasting" },
    { industry: "Transportation", growth: 29, useCases: "Route optimization, autonomous vehicle training, demand prediction" },
    { industry: "Education", growth: 26, useCases: "Personalized learning paths, student success prediction, automated grading" }
  ];

  const aiStrategies = [
    { 
      title: "Transfer Learning", 
      description: "Accelerate AI development by leveraging pre-trained models and fine-tuning them for your specific use case", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/tensorflow.png" 
    },
    { 
      title: "Federated Learning", 
      description: "Train models across multiple devices while maintaining data privacy and security, ideal for sensitive information", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" 
    },
    { 
      title: "Reinforcement Learning", 
      description: "Develop AI that learns through interaction with its environment, perfect for optimization and decision-making tasks", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png" 
    },
    { 
      title: "Unsupervised Learning", 
      description: "Discover hidden patterns and structures in your data without the need for labeled examples or human guidance", 
      icon: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/numpy.png" 
    }
  ];

  return (
    <>
      {/* AI Training Hero Section */}
      <Box py={16} bg="blue.50" color="gray.800">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8} fontWeight="medium">
           AI Training Solutions
          </Heading>
          <Text fontSize="xl" textAlign="center" mb={12} maxW="800px" mx="auto">
            Accelerate your AI initiatives with our high-performance training infrastructure.
            Build, train, and deploy machine learning models at scale with unprecedented speed and efficiency.
          </Text>
          
          <Flex justify="space-between" flexWrap="wrap" gap={6}>
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="purple.500">Scalable Computing Resources</Heading>
              <Text>Access GPU and TPU clusters optimized for deep learning workloads, with automated scaling to match your training demands.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="purple.500">Managed Data Pipelines</Heading>
              <Text>Streamline data preparation with our managed ETL processes, ensuring high-quality inputs for more accurate model training.</Text>
            </VStack>
            
            <VStack flex="1" minW="280px" align="flex-start" bg="white" p={6} borderRadius="md" spacing={4}>
              <Heading as="h3" size="md" color="purple.500">Model Optimization Framework</Heading>
              <Text>Deploy our proprietary optimization techniques to reduce training time, improve model accuracy, and minimize resource consumption.</Text>
            </VStack>
          </Flex>
        </Box>
      </Box>
      
      {/* Key Benefits Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            Key Benefits of AI Training Pipelines
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap={10} mt={10}>
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="purple.500">76%</StatNumber>
                <StatLabel>Training Time Reduction</StatLabel>
              </Stat>
              <Text>
                Organizations utilizing our AI training infrastructure report an average 76% reduction in 
                model training times, accelerating their path from concept to production.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="purple.500">3.2x</StatNumber>
                <StatLabel>Compute Efficiency</StatLabel>
              </Stat>
              <Text>
                Our optimized training environment delivers 3.2x more compute efficiency than 
                standard implementations, reducing costs while improving performance.
              </Text>
            </VStack>
            
            <VStack align="flex-start" spacing={4} bg="gray.50" p={6} borderRadius="md">
              <Stat>
                <StatNumber color="purple.500">42%</StatNumber>
                <StatLabel>Improved Model Accuracy</StatLabel>
              </Stat>
              <Text>
                Enhanced data preparation and hyperparameter tuning typically results in a 42% improvement 
                in model accuracy compared to traditional training approaches.
              </Text>
            </VStack>
          </Grid>
        </Box>
      </Box>
      
      {/* Industry Applications Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontWeight="medium">
            Industry-Specific AI Training Applications
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {industryData.map((industry, index) => (
              <Box key={index} p={6} bg="white" borderRadius="md" boxShadow="sm" borderColor="blue.100">
                <Stat mb={4}>
                  <StatLabel fontSize="lg" fontWeight="medium">{industry.industry}</StatLabel>
                  <StatNumber color="purple.500">{industry.growth}%</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    Annual AI Adoption
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
      
      {/* AI Strategies Section */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={4} fontWeight="medium">
            Advanced AI Training Approaches
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={12} maxW="700px" mx="auto">
            Our AI training infrastructure supports diverse methodologies to solve your most challenging business problems
          </Text>
          
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/tensorflow.png" alt="Transfer Learning" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Transfer Learning</Heading>
                <Text color="gray.600">Accelerate AI development by leveraging pre-trained models and fine-tuning them for your specific use cases</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" alt="Distributed Training" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Distributed Training</Heading>
                <Text color="gray.600">Scale your training across hundreds of nodes with our optimized distributed training frameworks</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="Automated ML" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Automated ML (AutoML)</Heading>
                <Text color="gray.600">Leverage our AutoML platform to automatically discover optimal model architectures and hyperparameters</Text>
              </Box>
            </Flex>
            
            <Flex p={6} bg="gray.50" borderRadius="md" boxShadow="sm" align="flex-start">
              <Box w="50px" h="50px" mr={4} display="flex" alignItems="center" justifyContent="center">
                <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png" alt="Reinforcement Learning" />
              </Box>
              <Box>
                <Heading as="h3" size="md" mb={2} fontWeight="medium">Reinforcement Learning</Heading>
                <Text color="gray.600">Develop AI that learns through interaction with its environment, perfect for optimization and decision-making tasks</Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Box>
      
      {/* Platform Features Section */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center" mb={8} fontWeight="medium">
            AI Training Platform Features
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="purple.500">Infrastructure & Performance</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Multi-GPU & TPU Support</Text> - Harness the power of the latest NVIDIA A100s, AMD Instinct, and Google TPUs</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Auto-Scaling Clusters</Text> - Dynamic resource allocation based on workload demands and priority</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Distributed Training</Text> - Framework-agnostic support for data-parallel and model-parallel training</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Optimized Networking</Text> - High-throughput, low-latency InfiniBand connections for minimal communication overhead</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Container Optimization</Text> - Pre-built, optimized containers for popular frameworks like TensorFlow, PyTorch, and JAX</Text>
                </ListItem>
              </List>
            </Box>
            
            <Box p={8} bg="white" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={5} color="purple.500">Training Workflow & Management</Heading>
              <List spacing={3}>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Experiment Tracking</Text> - Comprehensive logging of metrics, parameters, and artifacts for reproducibility</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Hyperparameter Optimization</Text> - Advanced search strategies including Bayesian, evolutionary, and population-based training</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Integrated Data Pipelines</Text> - Seamless ETL processes optimized for large-scale ML training data</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Version Control Integration</Text> - Native support for Git-based workflows and model versioning</Text>
                </ListItem>
                <ListItem display="flex">
                  <ListIcon as={CheckCircleIcon} color="purple.500" mt={1} />
                  <Text><Text as="span" fontWeight="bold">Automated Deployment</Text> - One-click deployment to production environments with A/B testing capabilities</Text>
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
            AI Training Success Stories
          </Heading>
          
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="purple.500">Financial Services Firm Accelerates Fraud Detection by 89%</Heading>
              <Text mb={4}>
                A global financial institution deployed our AI training infrastructure to rebuild their fraud detection systems. 
                By implementing distributed training across specialized hardware, they reduced model training time from weeks to 
                days while improving detection accuracy by 34%, resulting in $27M in annual fraud prevention.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The ability to rapidly iterate on complex models gave us a competitive edge in fraud detection. We can now 
                respond to new fraud patterns within hours instead of weeks, dramatically reducing our exposure."
              </Text>
            </Box>
            
            <Box p={8} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading as="h3" size="md" mb={4} color="purple.500">Healthcare Provider Revolutionizes Medical Imaging Analysis</Heading>
              <Text mb={4}>
                A leading healthcare network implemented our training platform to develop advanced medical imaging models. 
                Using our transfer learning frameworks and specialized GPU clusters, they built diagnostic systems that achieved 
                radiologist-level accuracy while processing 50x more images per day than previously possible.
              </Text>
              <Text fontStyle="italic" fontSize="sm" color="gray.600">
                "The performance gains weren't just about speed—they enabled us to use much larger datasets and more 
                complex architectures, which directly translated to better patient outcomes through earlier detection."
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      
      {/* Framework Partners */}
      <Box py={16} bg="blue.50">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={8} fontWeight="medium">
            Framework Partners
          </Heading>
          <Text fontSize="lg" mb={12} maxW="700px" mx="auto">
            Our AI training platform integrates seamlessly with all major machine learning frameworks
          </Text>
          
          <Flex justify="center" flexWrap="wrap" gap={10} mb={12} align="center">
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png" alt="TensorFlow" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/PyTorch_logo_icon.svg/1200px-PyTorch_logo_icon.svg.png" alt="PyTorch" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Keras_logo.svg/1200px-Keras_logo.svg.png" alt="Keras" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://raw.githubusercontent.com/scikit-learn/scikit-learn/main/doc/logos/scikit-learn-logo.png" alt="Scikit-learn" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
            <Box width="160px" height="80px" display="flex" alignItems="center" justifyContent="center">
              <Image src="https://mxnet.apache.org/assets/img/mxnet_logo.png" alt="MXNet" maxHeight="80px" maxWidth="160px" objectFit="contain" />
            </Box>
          </Flex>
        </Box>
      </Box>
      
      {/* Call to Action */}
      <Box py={16} bg="purple.600" color="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h2" size="xl" mb={6} fontWeight="medium" color="white">
            Transform Your AI Development Pipeline
          </Heading>
          <Text fontSize="lg" mb={10} maxW="700px" mx="auto" color="white">
            Schedule a consultation with our AI infrastructure experts to receive a customized
            assessment of how our training solutions can accelerate your specific AI initiatives
          </Text>
          
          <Flex direction={{ base: "column", md: "row" }} justify="center" gap={6} align="center" maxW="600px" mx="auto">
      <Button
        size="lg"
        bg="white"
        color="purple.600"
        _hover={{ bg: "gray.100" }}
        width={{ base: "full", md: "auto" }}
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
        _hover={{ bg: "purple.500" }}
        width={{ base: "full", md: "auto" }}
        as="a"
        href="https://dashboard.thedataproxy.com/signup"
      >
        Start Free Trial
      </Button>
    </Flex>
        </Box>
      </Box>
      
      {/* Technology Stack */}
      <Box py={16} bg="white">
        <Box maxW="1200px" mx="auto" px={4} textAlign="center">
          <Heading as="h3" size="lg" mb={8} fontWeight="medium">
            Powered by Advanced Web Technologies
          </Heading>
          <Flex justify="center" gap={8} flexWrap="wrap">
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png" alt="Python" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/selenium.png" alt="Selenium" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="AWS" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/docker.png" alt="Docker" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" alt="Kubernetes" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Redis" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png" alt="MongoDB" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postgresql.png" alt="PostgreSQL" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="REST API" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png" alt="JavaScript" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/html.png" alt="HTML" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/css.png" alt="CSS" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png" alt="Node.js" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png" alt="React" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/typescript.png" alt="TypeScript" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rabbitmq.png" alt="RabbitMQ" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/graphql.png" alt="GraphQL" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/git.png" alt="Git" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/prometheus.png" alt="Prometheus" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Grafana" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/gcp.png" alt="Google Cloud Platform" boxSize="50px" />
            <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/microsoft_azure.png" alt="Microsoft Azure" boxSize="50px" />
          </Flex>
        </Box>
      </Box>
      
      {/* Footer */}
      <Footer />
      </>
  );
}

export default TrainingAIPage;