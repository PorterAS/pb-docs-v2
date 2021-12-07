import * as React from "react"
import { useEffect, useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { sidebarRoutes, SidebarRouteType } from "../../routes"
import { MDXProvider } from "@mdx-js/react"
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  BoxProps,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import {
  FaBook,
  FaBookOpen,
  FaCodeBranch,
  FaInfoCircle,
  FaPeopleCarry,
  FaPlay,
  FaShoppingCart,
} from "react-icons/fa"
// @ts-ignore
import Logo from "../../images/porterbuddy-logo.png"
import Header from "./header"
import "./layout.css"
import { Container } from "./container"
import { GrCatalog, GrIntegration } from "react-icons/gr"
import { GiClothJar } from "react-icons/gi"
import { Copyright, SocialMediaLinks } from "./footer"
import { PBProductCard } from "../porterbuddy/pb-product-card-widget"
import { PBCheckoutWidget } from "../porterbuddy/pb-checkout-widget"

interface NavItemType extends BoxProps {
  icon: React.ReactNode | any | undefined
  navLink: string
  children: React.ReactNode
  pageURL?: string
}

const NavItem = React.memo(
  ({ icon, navLink, children, pageURL, ...rest }: NavItemType) => {
    return (
      <Link to={navLink}>
        <Flex
          align="center"
          _hover={{ color: "#661AFF", opacity: 0.8 }}
          transition={"0.5s"}
          cursor="pointer"
          color={
            pageURL?.includes(navLink)
              ? useColorModeValue("#661AFF", "gray.400")
              : "gray.600"
          }
          role="group"
          fontWeight="semibold"
          {...rest}
        >
          {icon && <Icon mr="2" boxSize="4" as={icon} />}
          {children}
        </Flex>
      </Link>
    )
  }
)

type SidebarType = {
  route: SidebarRouteType
  iconMap?: any
  pageURL?: string
}

const SidebarAccordion = ({ route, iconMap, pageURL }: SidebarType) => {
  return (
    <Accordion allowToggle allowMultiple>
      <AccordionItem borderTopWidth={"none"} style={{ borderBottomWidth: "0" }}>
        <AccordionButton
          px={0}
          _hover={{
            backgroundColor: "white",
          }}
          justifyContent={"space-between"}
        >
          <NavItem
            navLink={route.parentPath}
            key={route.group}
            icon={iconMap[route.icon]}
            flex={1}
            pageURL={pageURL}
          >
            <Text fontSize={"sm"}>{route.label}</Text>
          </NavItem>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          {route.children &&
            route.children.map((childRoute, index) => (
              <Link to={childRoute.routePath} key={index}>
                <Box
                  pl={6}
                  fontSize={"14px"}
                  py={2}
                  fontWeight={"500"}
                  transition={"0.5s"}
                  color={
                    pageURL?.includes(childRoute.routePath) &&
                    childRoute.routePath !== "/"
                      ? useColorModeValue("#661AFF", "gray.400")
                      : "gray.600"
                  }
                  _hover={{
                    borderRadius: 3,
                    backgroundColor:
                      pageURL?.includes(childRoute.routePath) &&
                      childRoute.routePath !== "/"
                        ? useColorModeValue(
                            "rgba(194,170,245,0.25)",
                            "gray.400"
                          )
                        : "rgba(194,170,245,0.25)",
                  }}
                >
                  {childRoute.label}
                </Box>
              </Link>
            ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}
const SidebarItem = ({ route, iconMap, pageURL }: SidebarType) => {
  return (
    <Box>
      <NavItem
        navLink={route.parentPath}
        key={route.group}
        icon={iconMap[route.icon]}
        flex={1}
        pageURL={pageURL}
      >
        {route.label}
      </NavItem>
      {route.children &&
        route.children.map((childRoute, index) => (
          <Link to={childRoute.routePath} key={index}>
            <Box
              pl={6}
              fontSize={"14px"}
              py={2}
              fontWeight={"500"}
              transition={"0.5s"}
              color={
                pageURL?.includes(childRoute.routePath) &&
                childRoute.routePath !== "/"
                  ? useColorModeValue("#661AFF", "gray.400")
                  : "gray.600"
              }
              _hover={{
                borderRadius: 3,
                backgroundColor:
                  pageURL?.includes(childRoute.routePath) &&
                  childRoute.routePath !== "/"
                    ? useColorModeValue("rgba(194,170,245,0.25)", "gray.400")
                    : "rgba(194,170,245,0.25)",
              }}
            >
              {childRoute.label}
            </Box>
          </Link>
        ))}
    </Box>
  )
}

const DocsLayout = React.memo(({ children }: any) => {
  const [pageURL, setPageURL] = useState<string | undefined>("")

  useEffect(() => {
    setPageURL(typeof window !== "undefined" ? window.location.href : "")
  }, [])

  const shortcodes: any = { PBProductCard, PBCheckoutWidget }

  const iconMap = {
    FaPlay: FaPlay,
    FaBook: FaBook,
    FaInfoCircle: FaInfoCircle,
    FaShoppingCart: FaShoppingCart,
    FaPeopleCarry: FaPeopleCarry,
    FaCodeBranch: FaCodeBranch,
    FaBookOpen: FaBookOpen,
    GrCatalog: GrCatalog,
    GrIntegration: GrIntegration,
    GiClothJar: GiClothJar,
  }

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

  const SidebarContent = (props: any) => (
    <Box
      as="nav"
      pb={[0, 10, 10]}
      mt={[20, 0, 0]}
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue("white", "gray.800")}
      w={[null, 60, 60]}
      pos={["inherit", "fixed", "fixed"]}
      height={"calc(100vh - 8.125rem)"}
      {...props}
    >
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        {sidebarRoutes &&
          sidebarRoutes.map((route, index) => {
            return (
              <Box mb={5} key={index}>
                {route.accordion === false ? (
                  <SidebarItem
                    route={route}
                    pageURL={pageURL}
                    iconMap={iconMap}
                  />
                ) : (
                  <SidebarAccordion
                    pageURL={pageURL}
                    route={route}
                    iconMap={iconMap}
                  />
                )}
              </Box>
            )
          })}
      </Flex>
    </Box>
  )
  return (
    <MDXProvider components={shortcodes}>
      <Box>
        <Header
          siteTitle={data.site.siteMetadata?.title || `Title`}
          pos={"fixed"}
          top={0}
          width={"100%"}
          zIndex={1000}
          navComponent={<SidebarContent />}
        />

        <Box mt={"5em"}>
          <Container>
            {/*<Box display={["none", "block", "block"]}>*/}
            {/*  <MenuDrawer>*/}
            {/*    <SidebarContent w="full" borderRight="none" />*/}
            {/*  </MenuDrawer>*/}
            {/*</Box>*/}

            <Box as="section" pos={"relative"}>
              <Grid
                templateRows="repeat(1, 1fr)"
                templateColumns={[
                  "repeat(1, 1fr)",
                  "repeat(5, 1fr)",
                  "repeat(5, 1fr)",
                ]}
                gap={2}
              >
                <GridItem colSpan={1} display={["none", "block", "block"]}>
                  <Box py={5}>
                    <SidebarContent />
                  </Box>
                </GridItem>

                <GridItem colSpan={4}>
                  <Box
                    as={"main"}
                    py={[2, 3, 3]}
                    px={[1, 2, 3]}
                    mx={[0, "5.3em", "5.3em"]}
                  >
                    {children}
                  </Box>
                  {/*<Box>*/}
                  {/*  <Footer />*/}
                  {/*</Box>*/}
                </GridItem>

                <GridItem colSpan={0} display={["none", "none", "none"]}>
                  <Box
                    m={5}
                    p={3}
                    borderRadius={5}
                    bgColor={"green.200"}
                    color={"black"}
                    minH={"100px"}
                    pos={"fixed"}
                  >
                    <Text fontWeight={"bold"} fontSize={"md"}>
                      Green Deliveries
                    </Text>
                    <Text fontSize={"sm"}>
                      Register to get green deliveries
                    </Text>
                    <Center mt={"20px"} pos={"relative"}>
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

        <Box display={["block", "none", "none"]}>
          <Stack
            direction={{ base: "column-reverse", md: "row" }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Copyright />
            <SocialMediaLinks />
          </Stack>
        </Box>
      </Box>
    </MDXProvider>
  )
})

export default DocsLayout
