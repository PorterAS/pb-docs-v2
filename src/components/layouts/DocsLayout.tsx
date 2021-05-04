import * as React from "react"
import PropTypes from "prop-types"
import { Box, Grid, GridItem, Text } from "@chakra-ui/react"
import { useStaticQuery, graphql, Link } from "gatsby"

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
  const slugs = data.allMdx.edges

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Box>
        <Grid
          gap={5}
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(5, 1fr)"
        >
          <GridItem colSpan={1} borderRightWidth={2} px={5} py={5}>
            <Box as="aside">
              <Text fontSize={"xl"} fontWeight="bold">
                Docs
              </Text>

              {slugs.map((slug: any, index: number) => {
                // const [parent, root] = slug.node.fields.slug
                //   .split("/")
                //   .filter(function (el: any) {
                //     return el != ""
                //   })

                return (
                  <Link to={slug.node.fields.slug} key={index}>
                    <Text>{slug.node.frontmatter.title}</Text>
                  </Link>
                )
              })}
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
