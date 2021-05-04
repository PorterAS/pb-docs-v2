import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layouts/DocsLayout"
import SEO from "../components/seo"
import { Box, Center, HStack, Text } from "@chakra-ui/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "./docs-template.css"

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
  const doc = data.mdx
  return (
    <Layout>
      <SEO title="Home" />
      <Text my={5} fontSize={"3xl"} fontWeight={"bold"}>
        {doc.frontmatter.title}
      </Text>

      {/* <Box mb={10}>
        <Center>
          <HStack spacing={5} mt={3}>
            <Text color={"gray.400"} fontSize={"xs"}>
              {doc.timeToRead} {doc.timeToRead > 1 ? "mins read" : "min read"}
            </Text>
            <Text color={"gray.400"} fontSize={"xs"}>
              {post.frontmatter.publishBy}
            </Text>
          </HStack>
        </Center>
      </Box> */}

      {/*handle MDX content*/}
      <Box className={"blog-content"}>
        <MDXRenderer>{doc.body}</MDXRenderer>
      </Box>
    </Layout>
  )
}

export default BlogPostMdx
