import React from "react"
import { chakra, Box, Text, useColorModeValue, Flex } from "@chakra-ui/react"
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
      // boxShadow={"0px 0px 10px 0px grey"}
      shadow={"md"}
      rounded="lg"
    >
      <Flex alignItems={"center"}>
        <Box width={"10%"} color={"#661AFF"}>
          {icon}
        </Box>
        <chakra.h3
          color={useColorModeValue("gray.800", "white")}
          fontSize={{ base: "xl", md: "xl" }}
          mt={{ base: 2, md: 0 }}
          fontWeight="bold"
        >
          {title}
        </chakra.h3>
      </Flex>

      <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.200")}>
        {content}
      </chakra.p>
      <Link to={link}>
        <Text
          mt={3}
          color={useColorModeValue("purple.600", "gray.200")}
          fontSize={"sm"}
        >
          {actionText}
        </Text>
      </Link>

      {children}
    </Box>
  )
}

export { FeatureCard }
