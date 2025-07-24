import React, { useState } from 'react';
import {
  Box,
  Flex,
  Icon,
  Text,
  IconButton,
  Image,
  Link,
  Button,
  useDisclosure,
  Container,
} from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { Link as RouterLink } from "@tanstack/react-router";
import { 
  FiLogOut, 
  FiMenu, 
  FiRefreshCw,
  FiUsers, 
  FiChevronDown, 
  FiUser,
  FiDatabase,
  FiCode,
  FiTool,
  FiPieChart,
  FiTarget,
  FiMonitor,
  FiGlobe,
  FiFileText,
  FiBook,
  FiHelpCircle,
  FiShield,
  FiTrendingUp,
  FiSettings
} from "react-icons/fi";

import Logo from "/assets/images/bright-credit-logo.png";
import type { UserPublic } from "../../client";
import useAuth from "../../hooks/useAuth";

interface NavItem {
  title: string;
  icon?: any;
  path?: string;
  subItems?: SubItem[];
  description?: string;
}

interface SubItem {
  title: string;
  path: string;
  description?: string;
  icon?: any;
}

interface NavItemsProps {
  onClose?: () => void;
  isMobile?: boolean;
}


const navStructure: NavItem[] = [
  {
    title: "Services",
    icon: FiTool,
    description: "Professional credit repair and financial optimization services",
    subItems: [
      { title: "Dispute Management", path: "/services/dispute-management", description: "Professional dispute letters and follow-up with credit bureaus", icon: FiFileText },
      { title: "Credit Monitoring", path: "/services/credit-monitoring", description: "Real-time credit score tracking and alerts for changes", icon: FiMonitor },
      { title: "Point Optimization", path: "/services/point-optimization", description: "Strategic credit utilization and payment timing to maximize score gains", icon: FiTrendingUp },
      { title: "Debt Validation", path: "/services/debt-validation", description: "Challenge questionable debts and ensure all reported items are accurate", icon: FiShield },
      { title: "Legal Compliance", path: "/services/legal-compliance", description: "All services follow FCRA, FDCPA, and state credit repair regulations", icon: FiSettings },
      { title: "Personal Support", path: "/services/personal-support", description: "Dedicated credit specialists to guide you through every step", icon: FiUser },
      { title: "Credit Analysis", path: "/services/credit-analysis", description: "Comprehensive review of your credit reports and personalized action plan", icon: FiPieChart },
      { title: "Score Tracking", path: "/services/score-tracking", description: "Monitor and track your credit score improvements over time", icon: FiDatabase },
    ]
  },
  {
    title: "Solutions",
    icon: FiTarget,
    description: "Credit repair solutions for specific financial goals",
    subItems: [
      { title: "Home Loan Approval", path: "/solutions/home-loan-approval", description: "Improve credit score to qualify for better mortgage rates", icon: FiTrendingUp },
      { title: "Auto Financing", path: "/solutions/auto-financing", description: "Get approved for car loans with lower interest rates", icon: FiTarget },
      { title: "Credit Card Rewards", path: "/solutions/credit-card-rewards", description: "Qualify for premium credit cards with better rewards and benefits", icon: FiDatabase },
      { title: "Business Funding", path: "/solutions/business-funding", description: "Access business loans and lines of credit with improved personal credit", icon: FiFileText }
    ]
  },
  {
    title: "Education",
    icon: FiBook,
    description: "Credit education and financial literacy resources",
    subItems: [
      { title: "Credit Guides", path: "/education/credit-guides", description: "Learn how credit scores work and how to improve them", icon: FiBook },
      { title: "Financial Planning", path: "/education/financial-planning", description: "Strategies for long-term financial health and credit management", icon: FiPieChart },
      { title: "Dispute Templates", path: "/education/dispute-templates", description: "Sample dispute letters and templates for common credit issues", icon: FiFileText },
      { title: "Credit Calculator", path: "/education/credit-calculator", description: "Tools to estimate credit score improvements and payment impacts", icon: FiSettings }
    ]
  },
  {
    title: "Resources",
    icon: FiHelpCircle,
    description: "Support and additional resources for credit repair",
    subItems: [
      { title: "Support Center", path: "/resources/support-center", description: "Get help with your credit repair journey", icon: FiHelpCircle },
      { title: "Credit Articles", path: "/resources/blog", description: "Latest articles on credit repair and financial tips", icon: FiFileText },
      { title: "FAQ", path: "/resources/faq", description: "Frequently asked questions about credit repair", icon: FiBook },
      { title: "Contact Support", path: "/resources/contact", description: "Reach out to our credit repair specialists", icon: FiUser }
    ]
  },
  {
    title: "Pricing",
    path: "/pricing",
    description: "View our credit repair pricing plans and features"
  }
];

const NavItems = ({ onClose, isMobile = false }: NavItemsProps) => {
  const queryClient = useQueryClient();
  const textColor = "gray.800";
  const hoverColor = "red.600";
  const bgActive = "red.100";
  const activeTextColor = "red.800";
  const currentUser = queryClient.getQueryData<UserPublic>(["currentUser"]);
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);

  const finalNavStructure = [...navStructure];
  if (currentUser?.is_superuser && !finalNavStructure.some(item => item.title === "Admin")) {
    finalNavStructure.push({ title: "Admin", icon: FiUsers, path: "/admin" });
  }

  const handleMenuToggle = (index: number) => {
    setActiveMenuIndex(activeMenuIndex === index ? null : index);
  };

  const renderNavItems = (items: NavItem[]) =>
    items.map(({ icon, title, path, subItems, description }, index) => {
      const isActive = activeMenuIndex === index;

      if (subItems) {
        return (
          <Box key={title} position="relative">
            <Flex
              as="button"
              px={4}
              py={2}
              color={textColor}
              _hover={{ color: hoverColor }}
              _active={{ bg: bgActive, color: activeTextColor }}
              align="center"
              onClick={() => handleMenuToggle(index)}
              w="100%"
            >
              {icon && <Icon as={icon} mr={2} />}
              <Text flex={1} textAlign="left">{title}</Text>
              <Icon as={FiChevronDown} ml={1} transform={isActive ? "rotate(180deg)" : "rotate(0deg)"} transition="transform 0.2s" />
            </Flex>
            {isActive && (
              <Box
                bg="white"
                w={isMobile ? "100%" : "100%"} // Full width within Container on desktop
                maxW={isMobile ? "100%" : "1200px"} // Match Container maxW
                mx={isMobile ? 0 : "auto"} // Center on desktop
                pl={isMobile ? 6 : 0}
                py={isMobile ? 2 : 4}
                position={isMobile ? "static" : "fixed"}
                top={isMobile ? "auto" : "60px"} // Below header (adjust if needed)
                left={isMobile ? "auto" : "50%"} // Center within viewport
                transform={isMobile ? "none" : "translateX(-50%)"} // Center align
                zIndex={20}
                boxShadow={isMobile ? "none" : "md"}
                borderRadius={isMobile ? 0 : "md"}
              >
                {/* Title and Subtitle */}
                <Box px={4} py={2} borderBottom="1px" borderColor="gray.200">
                  {/* <Text fontWeight="bold" fontSize="lg">{title}</Text> */}
                  {description && (
                    <Text fontSize="sm" color="gray.600" mt={1}>{description}</Text>
                  )}
                </Box>
                <Flex
                  direction={isMobile ? "column" : "row"}
                  wrap={isMobile ? "nowrap" : "wrap"}
                  justify={isMobile ? "flex-start" : "space-between"}
                  p={isMobile ? 0 : 4}
                >
                  {subItems.map((subItem) => (
                    <Box
                      key={subItem.title}
                      as={RouterLink}
                      to={subItem.path}
                      color={textColor}
                      _hover={{ color: hoverColor, bg: "gray.100" }}
                      onClick={() => {
                        if (isMobile && onClose) onClose();
                        setActiveMenuIndex(null);
                      }}
                      p={2}
                      flex={isMobile ? "none" : "0 0 25%"} // 4 per row on desktop
                      minW={isMobile ? "auto" : 0}
                    >
                      <Flex align="center">
                        {subItem.icon && <Icon as={subItem.icon} mr={2} />}
                        <Box>
                          <Text fontWeight="medium">{subItem.title}</Text>
                          {subItem.description && (
                            <Text fontSize="xs" color="gray.500">{subItem.description}</Text>
                          )}
                        </Box>
                      </Flex>
                    </Box>
                  ))}
                </Flex>
              </Box>
            )}
          </Box>
        );
      }

      return (
        <Flex
          key={title}
          as={RouterLink}
          to={path}
          px={4}
          py={2}
          color={textColor}
          _hover={{ color: hoverColor }}
          activeProps={{ style: { background: bgActive, color: activeTextColor } }}
          align="center"
          onClick={() => isMobile && onClose ? onClose() : null}
        >
          {icon && <Icon as={icon} mr={2} />}
          <Text>{title}</Text>
        </Flex>
      );
    });

  return (
    <Flex 
      align="center" 
      gap={2} 
      flexDir={isMobile ? "column" : "row"}
      justify="center"
    >
      {renderNavItems(finalNavStructure)}
    </Flex>
  );
};

const TopNav = () => {
  const queryClient = useQueryClient();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { logout } = useAuth();
  const currentUser = queryClient.getQueryData<UserPublic>(["currentUser"]);
  const textColor = "gray.800";
  const hoverColor = "red.600";

  const handleLogout = async () => {
    await logout();
    onClose();
  };

  return (
    <Box w="100%">
      {/* Sticky Header */}
      <Box
        bg="red.50"
        px={4}
        py={2}
        position="sticky"
        top="0"
        zIndex="sticky"
        boxShadow="sm"
      >
        <Container maxW="1200px" px={0}>
          <Flex align="center" justify="space-between" w="100%">
            <Link href="/" as={RouterLink} onClick={onClose}>
              <Image src={Logo} alt="Bright Credit Services" h="40px" />
            </Link>

            <IconButton
              onClick={isOpen ? onClose : onOpen}
              display={{ base: "flex", md: "none" }}
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              fontSize="20px"
              color="red.5600"
              icon={<FiMenu />}
              variant="ghost"
            />

            <Flex 
              align="center" 
              gap={4} 
              display={{ base: "none", md: "flex" }}
              flex={1}
              justify="center"
            >
              <NavItems /> {/* No onClose for desktop */}
            </Flex>

            <Flex 
              align="center" 
              display={{ base: "none", md: "flex" }}
            >
              {currentUser ? (
                <Box position="relative">
                  <Flex
                    as="button"
                    px={4}
                    py={2}
                    color={textColor}
                    _hover={{ color: hoverColor }}
                    onClick={onOpen}
                  >
                    <Icon as={FiUser} mr={2} />
                    <Text maxW="200px" isTruncated>{currentUser.email}</Text>
                    <Icon as={FiChevronDown} ml={1} />
                  </Flex>
                  {isOpen && (
                    <Box
                      position="absolute"
                      right={0}
                      top="100%"
                      bg="white"
                      boxShadow="md"
                      borderRadius="md"
                      zIndex={20}
                    >
                      <Box 
                        as={RouterLink} 
                        to="/settings" 
                        p={2} 
                        display="block" 
                        _hover={{ bg: "gray.100" }}
                        onClick={onClose}
                      >
                        Settings
                      </Box>
                      <Box 
                        as="button" 
                        p={2} 
                        display="block" 
                        _hover={{ bg: "gray.100" }} 
                        onClick={handleLogout}
                      >
                        Log out
                      </Box>
                    </Box>
                  )}
                </Box>
              ) : (
                <Flex gap={2}>
                  <Button as={RouterLink} to="https://buy.stripe.com/4gwg1C2by9Cs2Ry6op" colorScheme="red" variant="solid" size="sm">
                    Start Free Trial
                  </Button>
                  <Button as={RouterLink} to="https://cloud.brightcreditservices.com/login" variant="outline" colorScheme="red" size="sm">
                    Login
                  </Button>
                </Flex>
              )}
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* Mobile Menu - Accordion Style */}
      <Box
        display={{ base: isOpen ? "block" : "none", md: "none" }}
        bg="white"
        w="100%"
      >
        <Container maxW="1200px" px={0}>
          <Flex flexDir="column" py={4}>
            <NavItems onClose={onClose} isMobile={true} />
            {currentUser ? (
              <>
                <Text color={textColor} fontSize="sm" px={4} py={2}>
                  Logged in as: {currentUser.email}
                </Text>
                <Box
                  as={RouterLink}
                  to="/settings"
                  p={2}
                  px={4}
                  color={textColor}
                  _hover={{ color: hoverColor }}
                  onClick={onClose}
                >
                  Settings
                </Box>
                <Flex
                  as="button"
                  onClick={handleLogout}
                  color={hoverColor}
                  fontWeight="bold"
                  alignItems="center"
                  gap={2}
                  px={4}
                  py={2}
                >
                  <FiLogOut />
                  <Text>Log out</Text>
                </Flex>
              </>
            ) : (
              <Flex flexDir="column" gap={2} px={4} py={2}>
                <Button
                  as={RouterLink}
                  to="https://buy.stripe.com/4gwg1C2by9Cs2Ry6op"
                  colorScheme="red"
                  variant="solid"
                  size="sm"
                  onClick={onClose}
                >
                  Start Free Trial
                </Button>
                <Button
                  as={RouterLink}
                  to="https://cloud.brightcreditservices.com/login"
                  variant="outline"
                  colorScheme="red"
                  size="sm"
                  onClick={onClose}
                >
                  Login
                </Button>
              </Flex>
            )}
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default TopNav;
