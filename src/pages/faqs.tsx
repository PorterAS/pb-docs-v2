import * as React from "react"
import { Link, graphql } from "gatsby"
import { Text, SimpleGrid, Center, Box, Accordion } from "@chakra-ui/react"
import { faqContent, FAQType } from "../faqContent"

import Layout from "../components/layouts/HomeLayout"
import SEO from "../components/seo"
import { AccordionElement } from "./Accordion"

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

const FAQ = ({ data }: any) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Box my={10}>
        <Center>
          <Text fontSize="4xl">FAQs</Text>
        </Center>
        <Text textAlign="center">
          Frequently asked questions and their answers
        </Text>
        <Box mt={5}>
          <Accordion allowMultiple>
            {faqContent.map((item: FAQType, index: number) => (
              <AccordionElement
                question={item.question}
                answer={item.answer}
                key={index}
              />
            ))}
          </Accordion>
        </Box>
      </Box>
    </Layout>
  )
}
export default FAQ
