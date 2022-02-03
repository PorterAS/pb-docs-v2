import React from "react"
import { Box, Text, useColorModeValue, Flex } from "@chakra-ui/react"
import { Link } from "gatsby"

type FeatureCardProps = {
  title: string
  content: string
  children?: React.ReactElement
  link: string
  actionText?: string
  icon?: React.ReactElement
}
const FeatureCard = ({
  title,
  content,
  link,
  actionText,
  children,
  icon,
}: FeatureCardProps) => {
  return (
    <Box
      mx="auto"
      py={4}
      px={5}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"0px 2px 4px rgba(0, 0, 0, 0.25)"}
      borderRadius={4}
    >
      <Flex alignItems={"center"}>
        <Box width={"10%"} color={"#661AFF"}>
          {icon}
        </Box>
        <Text
          color={"#661AFF"}
          fontSize={{ base: "xl", md: "xl" }}
          mt={{ base: 2, md: 0 }}
          fontWeight="500"
        >
          {title}
        </Text>
      </Flex>

      <Text mt={3} mb={"5%"} color={useColorModeValue("gray.600", "gray.200")}>
        {content}
      </Text>
      <Link to={link}>
        <Text
          mt={3}
          color={useColorModeValue("purple.600", "gray.200")}
          fontSize={"sm"}
          textDecoration={"underline"}
        >
          {actionText}
        </Text>
      </Link>

      {children}
    </Box>
  )
}

export { FeatureCard }
