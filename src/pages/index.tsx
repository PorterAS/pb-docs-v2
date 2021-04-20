import * as React from "react"
import { Link, graphql } from "gatsby"
import {Text, UnorderedList, ListItem} from '@chakra-ui/react'

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query {
    allMdx {
      edges {
        node{
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

const IndexPage = ({data}: any) => {
  const slugs = data.allMdx.edges
console.log(slugs)
  return (
    <Layout>
    <SEO title="Home" />
    <Text fontSize="2xl">PB Developer Portal</Text>
    <p>Developer resources will live here</p>
  
    <Text fontSize="lg" fontWeight="bold" mt='1.2em'>Available pages</Text>
    <UnorderedList>
      {
        slugs.map((val, index) => (
          <ListItem key={index}><Link to={val.node.fields.slug}>{val.node.frontmatter.title}</Link></ListItem>
        ))
      }
    </UnorderedList>
  </Layout>
  )
}
export default IndexPage
