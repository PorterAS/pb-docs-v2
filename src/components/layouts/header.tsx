import * as React from "react"
import { Link } from "gatsby"
import { Badge, Box, Text, Image, HStack, Flex, Input } from "@chakra-ui/react"
// @ts-ignore
import PorterbuddyLogo from "../../images/porterbuddy-logo.png"
import { Container } from "./container"

const Header = ({ ...rest }: HeaderProps) => {
  return (
    <Box as="header" backgroundColor="#661AFF" py={2} maxWidth={1700} {...rest}>
      <Container>
        <Flex
          alignItems={"center"}
          width={"100%"}
          justifyContent={"space-between"}
        >
          <Box>
            <Text as="h1" style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                <HStack alignItems={"center"}>
                  <Image src={PorterbuddyLogo} my={"auto"} width={"50px"} />
                  <Text>Developers</Text>
                  <Badge ml="2">beta</Badge>
                </HStack>
              </Link>
            </Text>
          </Box>
          <Box width={"40%"}>
            <Input
              placeholder={"Search docs"}
              backgroundColor={"whiteAlpha.900"}
              focusBorderColor={"purple.50"}
            />
          </Box>
          <Box textColor={"white"} fontWeight={"500"}>
            <HStack spacing={10}>
              <Link to={"/"}>Support</Link>
              <Link to={"/"}>API Reference</Link>
              <Link to={"/"}>Integrations</Link>
            </HStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

type HeaderProps = {
  siteTitle?: string
}

export default Header
