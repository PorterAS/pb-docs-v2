import * as React from "react"
import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react"
import Layout from "../components/layouts/docs-layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery, Link } from "gatsby"
// @ts-ignore
import porterbuddyImage from "../images/porterbuddy-image.png"
import { InfoBanner } from "../components/global/InfoBanner"

const GuidesPage = (): any => {
  const {
    allMdx: { edges: guides },
  } = useStaticQuery(graphql`
    query GuidesQuery {
      allMdx(
        filter: { slug: { regex: "/guides/" } }
        sort: { fields: frontmatter___publishBy, order: DESC }
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
            below. The guides below aim to provide step by step requirements to
            using Porterbuddy, possibly demonstrated on a live application.
          </Text>
        </Box>

        <Box mb={"4em"}>
          <InfoBanner
            title={"💡 Samlevert upgrade guide"}
            bannerLink={"/guides/samlevert-upgrade-guide"}
          >
            Upgrade your existing Porterbuddy implementation to serve
            consolidated deliveries using Samlevert
          </InfoBanner>
        </Box>

        <Box mb={"4em"}>
          <Box mb={"3em"}>
            <Text fontSize={"xl"} fontWeight={"600"}>
              Latest guides
            </Text>
          </Box>
          <SimpleGrid columns={3} spacing={5}>
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
                    timeToRead: number
                  }
                }) => (
                  <Link
                    key={guide.node.fields.slug}
                    to={guide.node.fields.slug}
                  >
                    <Box backgroundColor={"gray.100"} borderRadius={5}>
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
                        />
                      </Box>
                      <Box p={2}>
                        <Text
                          fontSize={"sm"}
                          fontWeight={"500"}
                          mb={2}
                          textTransform={"uppercase"}
                        >
                          {guide.node.frontmatter.title}
                        </Text>
                        <Text fontSize={"sm"} mb={2}>
                          {guide.node.frontmatter.meta_description}
                        </Text>
                        <Text
                          fontSize={"sm"}
                          textAlign={"right"}
                          color={"gray.600"}
                        >
                          {`⏳ ${guide.node.timeToRead} ${
                            guide.node.timeToRead <= 1 ? "min" : "mins"
                          }`}
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
