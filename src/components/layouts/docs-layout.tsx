import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
// import { sidebarRoutes } from "../../routes"
import {
  Box,
  Button,
  Center,
  Collapse,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Grid,
  GridItem,
  Icon,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react"
import { FaClipboardCheck, FaRss } from "react-icons/fa"
import { AiFillGift } from "react-icons/ai"
import { BsGearFill } from "react-icons/bs"
import { HiCode, HiCollection } from "react-icons/hi"
import { MdHome, MdKeyboardArrowRight } from "react-icons/md"
// @ts-ignore
import Logo from "../../images/porterbuddy-logo.png"

import Header from "./header"
import "./layout.css"
import { Container } from "./container"
import { Footer } from "./footer"

const DocsLayout = ({ children }: any) => {
  const data = useStaticQuery(graphql`
    query DocsSiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allMdx {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)
  // const slugs = data.allMdx.edges

  // const url = typeof window !== "undefined" ? window.location.href : ""
  const sidebar = useDisclosure()
  const integrations = useDisclosure()

  const NavItem = ({ icon, children, ...rest }: any) => {
    return (
      <Flex
        align="center"
        px="4"
        pl="4"
        py="3"
        cursor="pointer"
        color={useColorModeValue("inherit", "gray.400")}
        _hover={{
          bg: useColorModeValue("gray.100", "gray.900"),
          color: useColorModeValue("gray.900", "gray.200"),
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        {...rest}
      >
        {icon && (
          <Icon
            mr="2"
            boxSize="4"
            _groupHover={{
              color: useColorModeValue("gray.600", "gray.300"),
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    )
  }

  const SidebarContent = (props: any) => (
    <Box
      as="nav"
      // zIndex="sticky"
      // h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue("white", "gray.800")}
      borderColor={useColorModeValue("inherit", "gray.700")}
      w="60"
      pos={"fixed"}
      {...props}
    >
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <NavItem icon={MdHome}>Home</NavItem>
        <NavItem icon={FaRss}>Articles</NavItem>
        <NavItem icon={HiCollection}>Collections</NavItem>
        <NavItem icon={FaClipboardCheck}>Checklists</NavItem>
        <NavItem icon={HiCode} onClick={integrations.onToggle}>
          Integrations
          <Box ml="auto" transform={integrations.isOpen && "rotate(90deg)"}>
            <MdKeyboardArrowRight />
          </Box>
        </NavItem>
        <Collapse in={integrations.isOpen}>
          <NavItem pl="12" py="2">
            Shopify
          </NavItem>
          <NavItem pl="12" py="2">
            Slack
          </NavItem>
          <NavItem pl="12" py="2">
            Zapier
          </NavItem>
        </Collapse>
        <NavItem icon={AiFillGift}>Changelog</NavItem>
        <NavItem icon={BsGearFill}>Settings</NavItem>
      </Flex>
    </Box>
  )
  return (
    <Box>
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        pos={"fixed"}
        top={0}
        width={"100%"}
        zIndex={1000}
      />

      <Box mt={"5em"}>
        <Container>
          <Drawer
            isOpen={sidebar.isOpen}
            onClose={sidebar.onClose}
            placement="left"
          >
            <DrawerOverlay />
            <DrawerContent>
              <SidebarContent w="full" borderRight="none" />
            </DrawerContent>
          </Drawer>

          <Box as="section" pos={"relative"}>
            <Grid
              // h="200px"
              templateRows="repeat(1, 1fr)"
              templateColumns="repeat(5, 1fr)"
              gap={2}
            >
              <GridItem colSpan={1}>
                <Box py={5}>
                  <SidebarContent display={{ base: "none", md: "unset" }} />
                </Box>
              </GridItem>

              <GridItem colSpan={3}>
                <Box as={"main"} py={5} px={3}>
                  {children}
                </Box>
              </GridItem>

              <GridItem colSpan={1}>
                <Box
                  m={5}
                  p={3}
                  borderRadius={5}
                  bgColor={"purple.900"}
                  color={"white"}
                  minH={"7%"}
                  pos={"fixed"}
                >
                  <Text fontWeight={"bold"} fontSize={"md"}>
                    Green Deliveries
                  </Text>
                  <Text fontSize={"sm"}>Register to get green deliveries</Text>
                  <Center mt={"5%"}>
                    <Button
                      bgColor={"#661AFF"}
                      _hover={{ bgColor: "#661AFF", opacity: 0.8 }}
                      color={"white"}
                      size={"md"}
                    >
                      <a href={"mailto:mats@porterbuddy.com"}>Try now</a>
                    </Button>
                  </Center>
                </Box>
              </GridItem>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Box>
        <Footer />
      </Box>
    </Box>
  )
}

export default DocsLayout
