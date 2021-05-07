import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layouts/DocsLayout"
import SEO from "../components/seo"
import { Box, Center, HStack, Text } from "@chakra-ui/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "./docs-template.css"
import hljs from "highlight.js/lib/core"
import "highlight.js/styles/github.css"

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
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
  useEffect(() => {
    hljs.highlightAll()
  }, [data])

  const doc = data.mdx
  return (
    <Layout>
      <SEO title="Home" />
      <Text my={5} fontSize={"3xl"} fontWeight={"bold"}>
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
