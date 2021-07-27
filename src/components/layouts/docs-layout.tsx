import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { sidebarRoutes } from "../../routes"
import {
  Box,
  BoxProps,
  Button,
  Center,
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

interface NavItemType extends BoxProps {
  icon: React.ReactNode | any
  navLink: string
  children: React.ReactNode
}
const DocsLayout = ({ children }: any) => {
  // Get page URl on layout mount to be used in updating styles
  // const [pageURL, setPageURL] = useState("")
  //
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setPageURL(window.location.href)
  //   }
  // }, [])
  const pageURL = typeof window !== "undefined" ? window.location.href : ""

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

  const sidebar = useDisclosure()
  const integrationsCollapse = useDisclosure()

  const NavItem = ({ icon, navLink, children, ...rest }: NavItemType) => {
    return (
      <Link to={navLink}>
        <Flex
          align="center"
          _hover={{ color: "#661AFF", opacity: 0.8 }}
          transition={"0.5s"}
          cursor="pointer"
          color={
            pageURL.includes(navLink)
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

  const SidebarContent = (props: any) => (
    <Box
      as="nav"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue("white", "gray.800")}
      w="60"
      pos={"fixed"}
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
          sidebarRoutes.map(route => {
            return (
              <Box mb={5}>
                <NavItem
                  navLink={route.parentPath}
                  key={route.group}
                  icon={iconMap[route.icon]}
                  onClick={route.children && integrationsCollapse.onToggle}
                >
                  {route.label}
                </NavItem>
                {route.children &&
                  route.children.map(childRoute => (
                    <Link to={childRoute.routePath}>
                      <Box
                        pl={6}
                        fontSize={"14px"}
                        py={2}
                        fontWeight={"500"}
                        transition={"0.5s"}
                        color={
                          pageURL.includes(childRoute.routePath) &&
                          childRoute.routePath !== "/"
                            ? useColorModeValue("#661AFF", "gray.400")
                            : "gray.600"
                        }
                        _hover={{
                          borderRadius: 3,
                          backgroundColor:
                            pageURL.includes(childRoute.routePath) &&
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
              </Box>
            )
          })}
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
                {/*<Box>*/}
                {/*  <Footer />*/}
                {/*</Box>*/}
              </GridItem>

              <GridItem colSpan={1}>
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
                  <Text fontSize={"sm"}>Register to get green deliveries</Text>
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

      {/*<Box>*/}
      {/*  <Footer />*/}
      {/*</Box>*/}
    </Box>
  )
}

export default DocsLayout
