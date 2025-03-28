import { Flex } from "@chakra-ui/react";
import { Outlet, createFileRoute } from "@tanstack/react-router";
import TopNav from "../components/Common/TopNav";

export const Route = createFileRoute("/_layout")({
  component: Layout,
});

function Layout() {
  return (
    <Flex direction="column" minH="100vh" w="100%">
      <TopNav />
      <Flex
        flex="1"
        direction="column"
        maxW="1200px"
        mx="auto"
        w="100%"
      >
        <Outlet />
      </Flex>
    </Flex>
  );
}