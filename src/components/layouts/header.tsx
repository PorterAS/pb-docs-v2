import * as React from "react"
import { Link } from "gatsby"
import {
  Badge,
  Box,
  BoxProps,
  Flex,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react"
// @ts-ignore
import PorterbuddyLogo from "../../images/porterbuddy-logo.png"
import { Container } from "./container"
import { MenuDrawer } from "./menu-drawer"

const Header = ({ navComponent, ...rest }: any) => {
  return (
    <Box as="header" backgroundColor="#661AFF" py={2} {...rest}>
      <Container>
        <Flex
          alignItems={"center"}
          width={"100%"}
          justifyContent={"space-between"}
        >
          <Box>
            <Text as="h1" style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                <HStack alignItems={"center"}>
                  <Image src={PorterbuddyLogo} my={"auto"} width={"50px"} />
                  <Text>Developers</Text>
                  <Badge ml="2">beta</Badge>
                </HStack>
              </Link>
            </Text>
          </Box>
          <Box
            width={{ base: "0%", md: "0%", lg: "30%" }}
            display={{ base: "none", md: "block" }}
          >
            <Input
              placeholder={"Search docs"}
              backgroundColor={"whiteAlpha.900"}
              focusBorderColor={"purple.50"}
              disabled
            />
          </Box>
          <Box
            textColor={"white"}
            fontWeight={"500"}
            display={{ base: "none", md: "block" }}
          >
            <HStack spacing={10} fontSize={"sm"}>
              <Link to={"/api-reference/"}>API Reference</Link>
              <Link to={"/integrations/"}>Integrations</Link>
              <Link to={"/changelog/"}>Changelog</Link>
            </HStack>
          </Box>
          <MenuDrawer>
            {/*<VStack*/}
            {/*  spacing={8}*/}
            {/*  fontSize={["lg", "lg", "sm"]}*/}
            {/*  mt={5}*/}
            {/*  // divider={<StackDivider />}*/}
            {/*>*/}
            {/*  <Link to={"/api-reference/"}>API Reference</Link>*/}
            {/*  <Link to={"/integrations/"}>Integrations</Link>*/}
            {/*  <Link to={"/changelog/"}>Changelog</Link>*/}
            {/*</VStack>*/}
            {navComponent}
          </MenuDrawer>
        </Flex>
      </Container>
    </Box>
  )
}

interface HeaderProps extends BoxProps {
  siteTitle?: string
  drawerPlacement?: boolean
}

export default Header
