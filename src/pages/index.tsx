import * as React from "react"
import { graphql } from "gatsby"
import { Text, SimpleGrid, Center, Box } from "@chakra-ui/react"
import { FeatureCard } from "../components/home/feature-card"
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

const IndexPage = ({}: any) => {
  // const slugs = data.allMdx.edges
  return (
    <Layout>
      <SEO title="Home" />
      <Box my={10}>
        <Center>
          <Text fontSize="4xl">PB Developer Portal</Text>
        </Center>
        <Text textAlign="center">
          Find all technical information on building with Porterbuddy
        </Text>
      </Box>

      <SimpleGrid columns={3} spacing="10" my={5}>
        <FeatureCard
          title={"Get Started"}
          content={
            "Integrate Porterbuddy's product card widget, Checkout widget and Universal shipping module"
          }
          link="/getting-started/"
          actionText="Learn more"
        />
        <FeatureCard
          title={"API Documentation"}
          content={
            "Utilize the robust Porterbuddy API reference to build your own custom integration"
          }
          link="/api-reference/"
          actionText="Learn more"
        />
        <FeatureCard
          title={"Integrations"}
          content={
            "Discover our library of existing integrations with musltiple systems to get started quickly"
          }
          link="/integrations/"
          actionText="Learn more"
        />
        <FeatureCard
          title={"FAQs"}
          content={
            "Find answers to frequently asked questions regarding integrations"
          }
          link="/faqs/"
          actionText="Learn more"
        />
        <FeatureCard
          title={"PB Blog"}
          content={
            "Discover awesome technical content created to help you build better"
          }
          link="/blog/"
          actionText="Learn more"
        />
      </SimpleGrid>

      {/* <UnorderedList>
        {slugs.map((val: any, index: number) => (
          <ListItem key={index}>
            <Link to={val.node.fields.slug}>{val.node.frontmatter.title}</Link>
          </ListItem>
        ))}
      </UnorderedList> */}
    </Layout>
  )
}
export default IndexPage
