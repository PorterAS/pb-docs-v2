import * as React from "react"
import PropTypes from "prop-types"
import { Box, Grid, GridItem, Text } from "@chakra-ui/react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { sidebarRoutes } from "../../routes"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }: any) => {
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
  const url = typeof window !== "undefined" ? window.location.href : ""
  console.log(url)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Box pt={20}>
        <Grid
          gap={5}
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(5, 1fr)"
        >
          <GridItem colSpan={1} borderRightWidth={2} px={5} py={5}>
            <Box as="aside" position="fixed" overscroll={"auto"}>
              <Text
                fontSize={"lg"}
                fontWeight="bold"
                textTransform="uppercase"
                mb={5}
              >
                Docs
              </Text>
              <Box
                mb={5}
                backgroundColor={
                  url.includes("getting-started") ? "purple.200" : "white"
                }
                borderRadius={url.includes("getting-started") ? 3 : 0}
                p={1}
              >
                <Link to={"/getting-started"}>
                  <Text
                    color={
                      url.includes("getting-started") ? "black" : "gray.600"
                    }
                    fontSize={"sm"}
                  >
                    Getting started
                  </Text>
                </Link>
              </Box>

              {/* {slugs.map((slug: any, index: number) => {
                return (
                  <Link to={slug.node.fields.slug} key={index}>
                    <Text>{slug.node.frontmatter.title}</Text>
                  </Link>
                )
              })} */}
              {sidebarRoutes.map((route, index) => (
                <Box key={index}>
                  <Text
                    fontWeight="500"
                    mb={2}
                    textTransform="uppercase"
                    fontSize="sm"
                  >
                    <Link to={route.parentPath}>{route.label}</Link>
                  </Text>
                  <Box mb={5} ml={2}>
                    {route.children.map((childRoute, index) => (
                      <Box
                        mb={1}
                        _hover={{
                          backgroundColor: url.includes(childRoute.routePath)
                            ? "purple.200"
                            : "purple.50",
                          borderRadius: 3,
                          transitionDuration: "300ms",
                        }}
                        p={1}
                        backgroundColor={
                          url.includes(childRoute.routePath)
                            ? "purple.200"
                            : "white"
                        }
                        borderRadius={
                          url.includes(childRoute.routePath) ? 3 : 0
                        }
                        key={`route_${index}`}
                      >
                        <Link to={childRoute.routePath}>
                          <Text
                            color={
                              url.includes(childRoute.routePath)
                                ? "black"
                                : "gray.600"
                            }
                            fontSize={"sm"}
                          >
                            {childRoute.label}
                          </Text>
                        </Link>
                      </Box>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          </GridItem>

          <GridItem colSpan={3}>
            <Box as="main">
              <Box>{children}</Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
