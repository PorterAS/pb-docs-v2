import * as React from "react"
import { Accordion, Box, Text } from "@chakra-ui/react"
import { faqContent, FAQType } from "../faqContent"
import Layout from "../components/layouts/docs-layout"
import SEO from "../components/seo"
import { AccordionElement } from "../components/faq/accordion"

const FAQ = ({}: any) => {
  return (
    <Layout>
      <SEO
        title="Frequently Asked Questions"
        description="Find answers to frequently asked questions on Porterbuddy's integration and technology"
        lang={"en"}
      />
      <Box>
        <Box mb={"3em"}>
          <Text fontSize="2xl" fontWeight={"600"} as={"h1"} mb={5}>
            Frequently asked questions
          </Text>
          <Text as={"h2"} lineHeight={7}>
            Find answers to frequently asked questions while integrating with
            Porterbuddy, both on your store and warehouse.
          </Text>
        </Box>

        <Box>
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
