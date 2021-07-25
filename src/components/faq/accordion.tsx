import * as React from "react"
import {
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
  Box,
  Text,
} from "@chakra-ui/react"
import { FAQType } from "../../faqContent"

export function AccordionElement({ question, answer }: FAQType) {
  return (
    <AccordionItem py={5} borderRadius={5} borderWidth={0.5} my={5}>
      <Text>
        <AccordionButton>
          <Box flex="1" textAlign="left" fontWeight={500} color={"purple.800"}>
            {question}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </Text>
      <AccordionPanel pb={4} color={"gray.700"}>
        {answer}
      </AccordionPanel>
    </AccordionItem>
  )
}
