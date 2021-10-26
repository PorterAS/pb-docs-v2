import * as React from "react"
import { Box, Center, Text } from "@chakra-ui/react"
import Layout from "../components/layouts/docs-layout"
import SEO from "../components/seo"
import { PBProductCard } from "../components/porterbuddy/pb-product-card-widget"
import { PBCheckoutWidget } from "../components/porterbuddy/pb-checkout-widget"
import { pbAvailabilityData } from "../components/porterbuddy/sample-data"
import {
  IPBWidget,
  PBCheckoutWidgetType,
} from "../components/porterbuddy/types"

const SupportPage = () => {
  const pbProductCardOptions: IPBWidget = {
    token: "7cDRiTIsB89nKJzwMJfuLLqEfF9Sw9ImkJnneoAm",
    view: "availability",
    language: "NO",
    apiMode: "test",
    hideIfUnavailable: false,
  }

  const pbCheckoutWidgetOptions: PBCheckoutWidgetType = {
    token: "7cDRiTIsB89nKJzwMJfuLLqEfF9Sw9ImkJnneoAm",
    view: "checkout",
    language: "NO",
    apiMode: "test",
    hideIfUnavailable: false,
    availabilityResponse: pbAvailabilityData,
    onSelectDeliveryWindow: window => {
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
        <PBProductCard options={pbProductCardOptions} />
        <PBCheckoutWidget options={pbCheckoutWidgetOptions} />
      </Box>
    </Layout>
  )
}
export default SupportPage
