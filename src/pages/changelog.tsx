import * as React from "react"
import { Box, Center, Text } from "@chakra-ui/react"

import Layout from "../components/layouts/docs-layout"
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

const GuidesPage = () => {
  return (
    <Layout>
      <SEO title="Porterbuddy Changelog" />
      <Box>
        <Center>
          <Text fontSize="2xl">Changelogs</Text>
        </Center>
        <Text textAlign="center">
          This page wil be filled with content soon.
        </Text>
      </Box>
    </Layout>
  )
}
export default GuidesPage
