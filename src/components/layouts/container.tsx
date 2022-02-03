import { Box, BoxProps } from "@chakra-ui/react"
import * as React from "react"

interface ContainerPropType extends BoxProps {
  children: React.ReactNode
  bgColor?: string
}

export const Container = (props: ContainerPropType) => {
  const { children, bgColor, ...rest } = props
  return (
    <Box bgColor={bgColor}>
      <Box
        {...rest}
        width={{ base: "95%", md: "90%", lg: "90%" }}
        mx={"auto"}
        maxWidth={1700}
      >
        {children}
      </Box>
    </Box>
  )
}

export const DocsContainer = (props: ContainerPropType) => {
  const { children, ...rest } = props
  return (
    <Box
      {...rest}
      width={{ base: "95%", md: "100%", lg: "100%" }}
      mx={["auto", "0", "0"]}
      maxWidth={1700}
    >
      {children}
    </Box>
  )
}
