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
      width={{ base: "95%", md: "80%", lg: "80%" }}
      mx={"auto"}
      maxWidth={1700}
    >
      {children}
    </Box>
  )
}
