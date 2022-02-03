import * as React from "react"
import PropTypes from "prop-types"
import { Box, VStack } from "@chakra-ui/react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Header from "./header"
import "./layout.css"
import { Container } from "./container"
import { Footer } from "./footer"

const HomeNav = () => (
  <VStack
    spacing={8}
    fontSize={["lg", "lg", "sm"]}
    mt={5}
    // divider={<StackDivider />}
  >
    <Link to={"/api-reference/"}>API Reference</Link>
    <Link to={"/integrations/"}>Integrations</Link>
    <Link to={"/changelog/"}>Changelog</Link>
  </VStack>
)
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
      <Container>
        <Header
          siteTitle={data.site.siteMetadata?.title || `Title`}
          navComponent={<HomeNav />}
          px={0}
        />
        <Box as="main">{children}</Box>
        <Footer />
      </Container>
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
