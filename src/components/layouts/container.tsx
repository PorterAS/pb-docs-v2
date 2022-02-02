import { Box, BoxProps } from "@chakra-ui/react"
import * as React from "react"

interface ContainerPropType extends BoxProps {
  children: React.ReactNode
}
export const Container = (props: ContainerPropType) => {
  const { children, ...rest } = props
  return (
    <Box
      {...rest}
      width={{ base: "95%", md: "90%", lg: "90%" }}
      mx={"auto"}
      maxWidth={1700}
    >
      {children}
    </Box>
  )
}

export const DocsContainer = (props: ContainerPropType)=>{
const { children, ...rest } = props
  return (
    <Box
      {...rest}
      width={{ base: "95%", md: "100%", lg: "100%" }}
      // mx={"auto"}
      maxWidth={1700}
    >
      {children}
    </Box>
  )
}