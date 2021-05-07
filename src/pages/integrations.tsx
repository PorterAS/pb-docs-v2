import * as React from "react"
import { graphql } from "gatsby"
import { Text, Center, Box } from "@chakra-ui/react"

import Layout from "../components/layouts/HomeLayout"
import SEO from "../components/seo"

// export const query = graphql`
//   query {
//     allMdx {
//       edges {
//         node {
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//           }
//         }
//       }
//     }
//   }
// `

const IntegrationsPage = ({ data }: any) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Box my={10}>
        <Center>
          <Text fontSize="4xl">Integrations</Text>
        </Center>
        <Text textAlign="center">Info on all Porterbuddy integrations</Text>
      </Box>
    </Layout>
  )
}
export default IntegrationsPage
