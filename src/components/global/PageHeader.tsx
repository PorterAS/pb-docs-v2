import { Box, Text } from "@chakra-ui/react"
import * as React from "react"

type PageHeaderType = {
  title: string
  subtitle?: string
}
export const PageHeader = ({
  title,
  subtitle,
}: PageHeaderType): React.ReactNode => {
  return (
    <Box mb={"3em"}>
      <Text fontSize="2xl" fontWeight={"600"}>
        {title}
      </Text>
      <Text lineHeight={7}>{subtitle}</Text>
    </Box>
  )
}
