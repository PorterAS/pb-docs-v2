import * as React from "react"
import { Link } from "gatsby"
import {Text} from '@chakra-ui/react'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Text fontSize="2xl">PB Developer Portal</Text>
    <p>Developer resources will live here</p>
    <Link to="/get-delivery-window">
      <Text fontSize="lg" fontWeight="bold">Click here to see a sample document in MDX</Text>
      </Link>
  </Layout>
)

export default IndexPage
