import * as React from "react"
import { Link } from "gatsby"
import { Badge, Box, Text } from "@chakra-ui/react"

const Header = (props: HeaderProps) => (
  <Box as="header" backgroundColor="#661AFF">
    <Box
      style={{
        margin: `0 auto`,
        maxWidth: 1700,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Text as="h1" style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: "1.6em",
          }}
        >
          Porterbuddy Developers
        </Link>
        <Badge ml="2">beta</Badge>
      </Text>
    </Box>
  </Box>
)

type HeaderProps = {
  siteTitle?: string
}

export default Header
