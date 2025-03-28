import { Box, Flex, Grid, Heading, Image, Text, VStack, Button, Link } from "@chakra-ui/react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import HeroSection from '../../components/HeroSection';
import Footer from '../../components/Common/Footer'; // Import the new Footer component

export const Route = createFileRoute("/_layout/")({
  component: LandingPage,
});

function LandingPage() {
  const navigate = useNavigate();
  return (
    <Box>
      <HeroSection />
    {/* Section 3: Proxy Network Coverage for Web Scraping */}
    <Box py={16} bg="blue.50" color="gray.800">
        <Heading as="h2" size="2xl" textAlign="center" mb={10} fontWeight="medium">
          Global Web Scraping Proxy Network
        </Heading>
        <Flex justify="space-around" flexWrap="wrap" maxW="1200px" mx="auto" px={4}>
          <VStack textAlign="center" p={4} minW="150px" spacing={2}>
            <Text fontSize="4xl" fontWeight="bold" color="orange.400">190+</Text>
            <Text fontSize="lg">Countries</Text>
          </VStack>
          <VStack textAlign="center" p={4} minW="150px" spacing={2}>
            <Text fontSize="4xl" fontWeight="bold" color="orange.400">99.9%</Text>
            <Text fontSize="lg">Uptime</Text>
          </VStack>
          <VStack textAlign="center" p={4} minW="150px" spacing={2}>
            <Text fontSize="4xl" fontWeight="bold" color="orange.400">24/7</Text>
            <Text fontSize="lg">Support</Text>
          </VStack>
          <VStack textAlign="center" p={4} minW="150px" spacing={2}>
            <Text fontSize="4xl" fontWeight="bold" color="orange.400">10M+</Text>
            <Text fontSize="lg">IP Pool</Text>
          </VStack>
          <VStack textAlign="center" p={4} minW="150px" spacing={2}>
            <Text fontSize="4xl" fontWeight="bold" color="orange.400">Unlimited</Text>
            <Text fontSize="lg">Capacity</Text>
          </VStack>
        </Flex>
      </Box>
        {/* Cloud Provider Links */}
        <Box py={10} bg="blue.50">
        <Flex justify="center" gap={8} flexWrap="wrap">
          <Link href="https://aws.amazon.com" isExternal>
            <Image
              src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png"
              alt="AWS Logo"
              boxSize="50px"
            />
          </Link>
          <Link href="https://cloud.google.com" isExternal>
            <Image
              src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/gcp.png"
              alt="GCP Logo"
              boxSize="50px"
            />
          </Link>
          <Link href="https://azure.microsoft.com" isExternal>
            <Image
              src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/microsoft_azure.png"
              alt="Microsoft Azure Logo"
              boxSize="50px"
            />
          </Link>
          <Link href="https://www.ibm.com/cloud" isExternal>
            <Image
              src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/ibm_cloud.png"
              alt="IBM Cloud Logo"
              boxSize="50px"
            />
          </Link>
          <Link href="https://www.digitalocean.com" isExternal>
            <Image
              src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/digital_ocean.png"
              alt="Digital Ocean Logo"
              boxSize="50px"
            />
          </Link>
        </Flex>
      </Box>

  
    {/* Section 2: Proxy Features for Web Scraping */}
    <Box py={16} bg="white" maxW="1200px" mx="auto" px={4}>
        <Heading as="h2" size="2xl" textAlign="center" mb={10} color="gray.800" fontWeight="medium"  pb="5">
          Advanced Web Scraping Proxy Features
        </Heading>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium" textAlign="left" >
              Robust Security
            </Heading>
            <Text color="gray.600">
              Strong encryption with reliable authentication methods
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium" textAlign="left">
              Fast Response Times
            </Heading>
            <Text color="gray.600">
              Optimized infrastructure for efficient data collection
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium" textAlign="left">
              Cloud Integration
            </Heading>
            <Text color="gray.600">
              Seamless compatibility with popular cloud platforms
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium" textAlign="left">
              Intelligent Routing
            </Heading>
            <Text color="gray.600">
              Effective algorithms for reliable connection management
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium" textAlign="left">
              Compliance
            </Heading>
            <Text color="gray.600">
              ISO 27001, SOC 2, and GDPR compatible
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium" textAlign="center">
              Scalable Scraping 
            </Heading>
            <Text color="gray.600">
            Cost-effective web scraping for businesses of all sizes.
            </Text>
          </VStack>
        </Grid>
      </Box>

{/* Section 1: Web Scraping Infrastructure - Centered */}
{/* Section 1: Web Scraping Infrastructure - Centered */}
<Box py={16} bg="blue.50" maxW="1200px" mx="auto" px={4}>
  <VStack spacing={8} textAlign="center">
    <Heading as="h2" size="2xl" color="gray.800" fontWeight="medium">
      Web Scraping Infrastructure
    </Heading>
    
    <Text fontSize="lg" color="gray.600" maxW="800px">
      Our enterprise-grade proxy infrastructure enables seamless web data extraction at scale. We leverage a powerful stack of technologies including JavaScript, Python, Selenium, and Puppeteer to deliver reliable results across diverse target websites.
    </Text>
    
    <Text fontSize="lg" color="gray.600" maxW="800px">
      With tools like Playwright for browser automation, BeautifulSoup for HTML parsing, Scrapy for crawling frameworks, and both Requests and AIOHTTP for HTTP handling, we ensure comprehensive coverage of all web scraping needs while respecting website terms of service.
    </Text>
  
    
    <Flex justify="center" gap={6} flexWrap="wrap" maxW="900px">
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png" alt="JavaScript" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png" alt="Python" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/selenium.png" alt="Selenium" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/http.png" alt="HTTP" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/puppeteer.png" alt="Puppeteer" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/playwright.png" alt="Playwright" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/beautiful_soup.png" alt="Beautiful Soup" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/scrapy.png" alt="Scrapy" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/requests.png" alt="Requests" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aiohttp.png" alt="AIOHTTP" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/websocket.png" alt="WebSocket" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rest.png" alt="REST API" boxSize="50px" />
    </Flex>
    
    <Text fontSize="lg" color="gray.600" maxW="800px">
      Once data is collected, our data processing pipeline employs Pandas for structured data manipulation, NumPy for numerical operations, and Dask for scaling beyond memory limitations. For larger workloads, we utilize Apache Spark distributed computing, while integrating with data stores like MongoDB, PostgreSQL, Elasticsearch, and Redis for efficient storage and retrieval.
    </Text>
    
    <Flex justify="center" gap={6} flexWrap="wrap" maxW="900px">
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/pandas.png" alt="Pandas" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/numpy.png" alt="NumPy" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/dask.png" alt="Dask" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/spark.png" alt="Apache Spark" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/tensorflow.png" alt="TensorFlow" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/graphql.png" alt="GraphQL" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kafka.png" alt="Apache Kafka" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rabbitmq.png" alt="RabbitMQ" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/elasticsearch.png" alt="Elasticsearch" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="Redis" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png" alt="MongoDB" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postgresql.png" alt="PostgreSQL" boxSize="50px" />
    </Flex>

    
    <Text fontSize="lg" color="gray.600" maxW="800px">
      Our infrastructure is fully cloud-native, with Docker containerization and Kubernetes orchestration ensuring consistent performance across all environments. We deploy seamlessly to AWS, Google Cloud Platform, and Microsoft Azure, using infrastructure-as-code tools like Terraform and Ansible for reproducible environments and S3 for cost-effective storage.
    </Text>
  
    
    <Flex justify="center" gap={6} flexWrap="wrap" maxW="900px">
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/docker.png" alt="Docker" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" alt="Kubernetes" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png" alt="AWS" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/gcp.png" alt="Google Cloud Platform" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/microsoft_azure.png" alt="Microsoft Azure" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/terraform.png" alt="Terraform" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/ansible.png" alt="Ansible" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/s3.png" alt="Amazon S3" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/prometheus.png" alt="Prometheus" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/grafana.png" alt="Grafana" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kibana.png" alt="Kibana" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/datadog.png" alt="Datadog" boxSize="50px" />
    </Flex>
    
    <Text fontSize="lg" color="gray.600" maxW="800px">
      Our development workflow integrates Git version control through GitHub and GitLab, with CI/CD pipelines via Jenkins and CircleCI. Our teams collaborate efficiently using Jira for project management and Slack for communication, while developers leverage VSCode, Postman for API testing, and package managers like NPM and PyPI to maintain dependencies.
    </Text>
  
    
    <Flex justify="center" gap={6} flexWrap="wrap" maxW="900px">
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/git.png" alt="Git" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/github.png" alt="GitHub" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/gitlab.png" alt="GitLab" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/jenkins.png" alt="Jenkins" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/circleci.png" alt="CircleCI" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/jira.png" alt="Jira" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/vscode.png" alt="VSCode" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postman.png" alt="Postman" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/npm.png" alt="NPM" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/pypi.png" alt="PyPI" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/slack.png" alt="Slack" boxSize="50px" />
      <Image src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/typescript.png" alt="TypeScript" boxSize="50px" />
    </Flex>
    
    <Box py={4}></Box>
    
    <Text fontSize="lg" color="gray.600" maxW="800px">
      Advanced monitoring is provided through Prometheus for metrics collection, Grafana for visualization dashboards, Kibana for log analysis, and Datadog for comprehensive application performance monitoring. This full-stack observability ensures your web scraping operations maintain peak performance and availability.
    </Text>
  </VStack>
</Box>
          <Box py={16} bg="white" maxW="1200px" mx="auto" px={4}>
        <Heading as="h2" size="2xl" textAlign="center" mb={10} color="gray.800" fontWeight="medium">
          Web Scraping Business Solutions
        </Heading>
        <Text fontSize="lg" color="gray.600" textAlign="center" mb={8} maxW="800px" mx="auto">
          Our specialized web scraping proxy infrastructure powers a wide range of business applications, 
          helping companies gather the insights they need to make data-driven decisions.
        </Text>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Market Research
            </Heading>
            <Text color="gray.600">
              Collect comprehensive market data through automated web scraping. Monitor emerging trends, 
              track consumer sentiment, and identify new opportunities before your competitors. Our proxies 
              ensure reliable access to global market information.
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              AI Training Datasets
            </Heading>
            <Text color="gray.600">
              Build robust machine learning datasets through efficient web scraping. Our proxy network 
              helps AI researchers and developers gather diverse, high-quality training data from multiple 
              sources while respecting rate limits and maintaining ethical collection practices.
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Price Monitoring
            </Heading>
            <Text color="gray.600">
              Track competitor pricing across thousands of products and dozens of websites simultaneously. 
              Optimize your market position with real-time data on price changes, discounts, and promotional 
              activities. Our scraping infrastructure scales with your monitoring needs.
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Content Aggregation
            </Heading>
            <Text color="gray.600">
              Gather and analyze content from multiple web sources to create comprehensive knowledge bases, 
              comparison services, or specialized search engines. Our proxies help maintain consistent access 
              to content sources while avoiding IP blocks.
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              Lead Generation
            </Heading>
            <Text color="gray.600">
              Extract business contact information, job postings, and company details to fuel your sales 
              pipeline. Our proxy network enables consistent, reliable access to business directories and 
              professional networks while maintaining collection integrity and compliance.
            </Text>
          </VStack>
          <VStack p={6} bg="gray.50" borderRadius="md" spacing={4} align="start">
            <Heading as="h3" size="md" color="gray.800" fontWeight="medium">
              SEO Monitoring
            </Heading>
            <Text color="gray.600">
              Track search engine rankings, analyze competitors' SEO strategies, and monitor backlink profiles 
              from multiple geographic locations. Our global proxy network provides authentic local search results 
              to inform your regional SEO campaigns.
            </Text>
          </VStack>
        </Grid>
      </Box>

{/* Call to Action Section */}
<Box py={16} bg="blue.50" textAlign="center" maxW="1200px" mx="auto" px={4}>
  <Heading as="h2" size="2xl" color="gray.800" mb={6} fontWeight="medium">
    Ready to Get Started?
  </Heading>
  <Text fontSize="lg" color="gray.600" mb={8}>
    Experience our enterprise-grade proxy solutions today
  </Text>
  <Flex justify="center" gap={4}>
    <Button
      border="2px solid"
      borderColor="orange.400"
      color="orange.400"
      bg="transparent"
      size="lg"
      _hover={{ bg: "orange.400", color: "white" }}
      onClick={() => navigate({ to: "/technical-assessment" })}
    >
      Start Technical Assessment
    </Button>
    <Button
      border="2px solid"
      borderColor="orange.400"
      color="orange.400"
      bg="transparent"
      size="lg"
      _hover={{ bg: "orange.400", color: "white" }}
      onClick={() => navigate({ to: "/consultation" })}
    >
      Schedule Consultation
    </Button>
    <Button
      border="2px solid"
      borderColor="orange.400"
      color="orange.400"
      bg="transparent"
      size="lg"
      _hover={{ bg: "orange.400", color: "white" }}
      as="a"
      href="/proxy-solution-guide.pdf"
      download
    >
      Download Solution Guide
    </Button>
  </Flex>
</Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
}

export default LandingPage;