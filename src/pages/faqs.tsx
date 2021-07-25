import * as React from "react"
import { Accordion, Box, Center, Text } from "@chakra-ui/react"
import { faqContent, FAQType } from "../faqContent"
import Layout from "../components/layouts/home-layout"
import SEO from "../components/seo"
import { AccordionElement } from "../components/faq/accordion"

const FAQ = ({}: any) => {
  return (
    <Layout>
      <SEO
        title="Frequently asked questions"
        description="Find answers to frequently asked questions on Porterbuddy's integration and technology"
        lang={"en"}
      />
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
