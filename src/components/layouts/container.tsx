import { Box, BoxProps } from "@chakra-ui/react"
import * as React from "react"

interface ContainerPropType extends BoxProps {
  children: React.ReactNode
}
export const Container = (props: ContainerPropType) => {
  const { children, ...rest } = props
  return (
    <Box {...rest} width={"80%"} mx={"auto"}>
      {children}
    </Box>
  )
}
