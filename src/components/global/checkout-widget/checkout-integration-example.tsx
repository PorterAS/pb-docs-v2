import { Box } from "@chakra-ui/react"
import React from "react"
import { PBCheckoutWidget } from "../../porterbuddy/PBCheckoutWidget"
import { pbAvailabilityData } from "../../porterbuddy/sample-data"

export const CheckoutIntegrationExample = () => {
  return (
    <Box mb={5}>
      <Box mb={4} border="1px" borderColor="gray.300" borderRadius="5" p="2">
        <PBCheckoutWidget
          options={{
            token: "y3wt37LqBsiLo62Jkx284XEdi4LzdX6pihZFwqYX",
            apiMode: "test",
            view: "checkout",
            postalCode: "0153",
            language: "NO",
            availabilityResponse: pbAvailabilityData,
            onSelectDeliveryWindow: window => {},
            onSetCallbacks: function (callbacks) {},
          }}
        />
      </Box>
    </Box>
  )
}
