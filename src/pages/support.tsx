import * as React from "react"
import { Box, Center, Text } from "@chakra-ui/react"
import Layout from "../components/layouts/docs-layout"
import SEO from "../components/seo"
// import { PBProductCard } from "../components/porterbuddy/PBProductCardWidget"
import { PBCheckoutWidget } from "../components/porterbuddy/PBCheckoutWidget"
import { pbAvailabilityData } from "../components/porterbuddy/sample-data"
import { IPBWidget, IPBCheckoutWidget } from "../components/porterbuddy/types"
import { Search } from "../components/global/Search"

const SupportPage = () => {
  const pbProductCardOptions: IPBWidget = {
    token: "7cDRiTIsB89nKJzwMJfuLLqEfF9Sw9ImkJnneoAm",
    view: "availability",
    language: "NO",
    apiMode: "test",
    hideIfUnavailable: false,
    alternateAvailabilityView: true,
  }

  const pbCheckoutWidgetOptions: IPBCheckoutWidget = {
    token: "7cDRiTIsB89nKJzwMJfuLLqEfF9Sw9ImkJnneoAm",
    view: "checkout",
    language: "NO",
    apiMode: "test",
    hideIfUnavailable: false,
    alternateAvailabilityView: true,
    availabilityResponse: pbAvailabilityData,
    onSelectDeliveryWindow: (window: any) => {
      console.log(window)
    },
  }
  return (
    <Layout>
      <SEO title="Porterbuddy Developer support" />
      <Box>
        <Center>
          <Text fontSize="2xl">Developer Support</Text>
        </Center>
        <Text textAlign="center">
          This page wil be filled with content soon.
        </Text>
        {/*<PBProductCard options={pbProductCardOptions} />*/}
        {/* <PBCheckoutWidget options={pbCheckoutWidgetOptions} /> */}
        <Search />
      </Box>
    </Layout>
  )
}
export default SupportPage
