import * as React from "react"
import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react"
import Layout from "../components/layouts/docs-layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery, Link } from "gatsby"
import porterbuddyImage from "../images/porterbuddy-image.png"
import { ContentCallout } from "../components/global/ContentCallout"

const GuidesPage = (): any => {
  const {
    allMdx: { edges: guides },
  } = useStaticQuery(graphql`
    query GuidesQuery {
      allMdx(
        filter: { slug: { regex: "/guides/" } }
        sort: { fields: frontmatter___publishBy, order: ASC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              meta_description
              coverPhoto
            }
            timeToRead
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO
        title="Porterbuddy Integration Guides"
        description={
          "Integrate with Porterbuddy using example guides and tutorials"
        }
      />
      <Box>
        <Box mb={"3em"}>
          <Text fontSize="2xl" fontWeight={"600"} as={"h1"} mb={5}>
            Integration guides
          </Text>
          <Text as={"h2"} lineHeight={7}>
            Add Porterbuddy to your e-commerce system by following the guides
            below. The guides aim to provide step by step requirements to using
            Porterbuddy, possibly demonstrated on a live application.
          </Text>
        </Box>

        <Box mb={"4em"}>
          <ContentCallout title={"Samlevert upgrade guide"}>
            Upgrade your existing Porterbuddy implementation to serve
            consolidated deliveries using Samlevert
          </ContentCallout>
        </Box>

        <Box mb={"4em"}>
          <Box mb={"2em"}>
            <Text fontSize={"xl"} fontWeight={"600"} color="#661AFF">
              Latest guides
            </Text>
          </Box>
          <SimpleGrid columns={[1, 5, 5]} spacing={5}>
            {guides &&
              guides.map(
                (guide: {
                  node: {
                    fields: { slug: string }
                    frontmatter: {
                      coverPhoto: any
                      title: string
                      meta_description:
                        | boolean
                        | React.ReactChild
                        | React.ReactFragment
                        | React.ReactPortal
                        | null
                        | undefined
                    }
                  }
                }) => (
                  <Link
                    key={guide.node.fields.slug}
                    to={guide.node.fields.slug}
                  >
                    <Box
                      borderRadius={4}
                      boxShadow={"0px 2px 4px rgba(0, 0, 0, 0.25)"}
                    >
                      <Box maxHeight="200px">
                        <Image
                          src={
                            guide.node.frontmatter.coverPhoto ||
                            porterbuddyImage
                          }
                          alt={guide.node.frontmatter.title}
                          objectFit={"cover"}
                          h={"7em"}
                          w={"full"}
                          borderTopRadius={5}
                        />
                      </Box>
                      <Box p={2} textAlign="center">
                        <Text fontSize={"md"} fontWeight={"600"} mb={2}>
                          {guide.node.frontmatter.title}
                        </Text>
                        <Text fontSize={"xs"} mb={2}>
                          {guide.node.frontmatter.meta_description}
                        </Text>
                      </Box>
                    </Box>
                  </Link>
                )
              )}
          </SimpleGrid>
        </Box>
      </Box>
    </Layout>
  )
}
export default GuidesPage
