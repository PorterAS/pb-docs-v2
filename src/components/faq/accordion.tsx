import * as React from "react"
import {
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
  Box,
  BoxProps,
} from "@chakra-ui/react"

export function AccordionElement({
  title,
  children,
  titleFontSize = "md",
  ...rest
}: AccordionType) {
  return (
    <AccordionItem
      // py={5}
      borderRadius={5}
      borderWidth={0}
      my={5}
      pb={3}
      borderBottomWidth={1}
      {...rest}
    >
      <Box>
        <AccordionButton _hover={{ backgroundColor: "white" }}>
          <AccordionIcon color={"#661AFF"} fontWeight={"600"} />
          <Box
            flex="1"
            textAlign="left"
            fontWeight={600}
            color={"#00261D"}
            fontSize={titleFontSize}
          >
            {title}
          </Box>
        </AccordionButton>
      </Box>
      <AccordionPanel pb={4} color={"gray.700"} fontSize={"sm"}>
        {children}
      </AccordionPanel>
    </AccordionItem>
  )
}

interface AccordionType extends BoxProps {
  title: string
  children: React.ReactNode
  titleFontSize?: string
}
