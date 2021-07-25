import * as React from "react"
import PropTypes from "prop-types"
import { Box } from "@chakra-ui/react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import { Container } from "./container"

const Layout = ({ children }: any) => {
  const data = useStaticQuery(graphql`
    query HomeSiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Box>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Container>
        <Box as="main">{children}</Box>
      </Container>
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
