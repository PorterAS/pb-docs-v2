import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layouts/docs-layout"
import SEO from "../components/seo"
import { Box, Text } from "@chakra-ui/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "./docs-template.css"
import "highlight.js/styles/github.css"

export const query = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        meta_title
        meta_description
      }
      timeToRead
      wordCount {
        words
      }
      body
    }
  }
`

const BlogPostMdx = ({ data }: any) => {
  const doc = data.mdx
  return (
    <Layout>
      <SEO
        title={doc.frontmatter.meta_title}
        description={doc.frontmatter.meta_description}
        lang="en"
      />
      <Text as={'h1'} fontSize={"3xl"} fontWeight={"bold"}>
        {doc.frontmatter.title}
      </Text>

      {/*handle MDX content*/}
      <Box className={"blog-content"}>
        <MDXRenderer>{doc.body}</MDXRenderer>
      </Box>
    </Layout>
  )
}

export default BlogPostMdx
