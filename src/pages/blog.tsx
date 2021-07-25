import * as React from "react"
import { graphql } from "gatsby"
import { Box, Center, Text } from "@chakra-ui/react"
import Layout from "../components/layouts/home-layout"
import SEO from "../components/seo"

export const query = graphql`
  query {
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
`

const Blog = ({}: any) => {
  // const slugs = data.allMdx.edges
  return (
    <Layout>
      <SEO title="Porterbuddy Blog" lang="en" />
      <Box my={10}>
        <Center>
          <Text fontSize="4xl">Blog</Text>
        </Center>
        <Text textAlign="center">PB Blog home</Text>
      </Box>
    </Layout>
  )
}
export default Blog
