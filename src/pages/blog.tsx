import * as React from "react"
import { Link, graphql } from "gatsby"
import { Text, SimpleGrid, Center, Box } from "@chakra-ui/react"
import { FeatureCard } from "../components/home/FeatureCard"

import Layout from "../components/layouts/HomeLayout"
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

const Blog = ({ data }: any) => {
  const slugs = data.allMdx.edges
  return (
    <Layout>
      <SEO title="Home" />
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
