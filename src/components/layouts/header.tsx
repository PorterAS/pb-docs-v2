import * as React from "react"
import { Link } from "gatsby"
import { Badge } from "@chakra-ui/react"

const Header = (props: HeaderProps) => (
  <header
    style={{
      background: `#661AFF`,
      // marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
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
      </h1>
    </div>
  </header>
)

type HeaderProps = {
  siteTitle?: string
}

export default Header
