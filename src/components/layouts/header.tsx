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
} from "@chakra-ui/react"
// @ts-ignore
import PorterbuddyLogo from "../../images/developerbuddy-logo.svg"
import { DocsContainer } from "./container"
import { MenuDrawer } from "./menu-drawer"

const Header = ({ navComponent, siteTitle, ...rest }: HeaderProps) => {
  return (
    <Box
      as="header"
      backgroundColor="white"
      py={2}
      px={"1%"}
      {...rest}
      borderBottomColor={"#F7F7F7"}
      borderBottomWidth="1px"
    >
      <DocsContainer>
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
                  <Image src={PorterbuddyLogo} my={"auto"} width={"200px"} />
                  <Badge ml="2">beta</Badge>
                </HStack>
              </Link>
            </Text>
          </Box>
          <Box
            width={{ base: "0%", md: "0%", lg: "20%" }}
            display={{ base: "none", md: "block" }}
          >
            <Input
              placeholder={"Search docs"}
              backgroundColor={"#F9F6FF"}
              focusBorderColor={"purple.50"}
              color={"#661AFF"}
              disabled
            />
          </Box>
          {/* <Box
            textColor={"white"}
            fontWeight={"500"}
            display={{ base: "none", md: "block" }}
          >
            <HStack spacing={10} fontSize={"sm"}>
              <Link to={"/api-reference/"}>API Reference</Link>
              <Link to={"/integrations/"}>Integrations</Link>
              <Link to={"/changelog/"}>Changelog</Link>
            </HStack>
          </Box> */}
          <MenuDrawer>{navComponent}</MenuDrawer>
        </Flex>
      </DocsContainer>
    </Box>
  )
}

interface HeaderProps extends BoxProps {
  siteTitle?: string
  drawerPlacement?: boolean
  navComponent?: React.ReactNode
}

export default Header
