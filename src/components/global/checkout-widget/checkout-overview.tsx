import { Box, Text } from "@chakra-ui/react"
import React, { useState } from "react"
import { PBCheckoutWidget } from "../../porterbuddy/PBCheckoutWidget"
import { pbAvailabilityData } from "../../porterbuddy/sample-data"

export const CheckoutWithBackgroundData = () => {
  const [selectedDeliveryWindow, setSelectedDeliveryWindow] = useState<
    undefined | string
  >(undefined)
  return (
    <Box display={["block", "block", "flex"]} mb={5}>
      <Box
        maxWidth="500px"
        mb={4}
        border="1px"
        borderColor="gray.300"
        borderRadius="5"
        p="2"
      >
        <PBCheckoutWidget
          options={{
            token: "y3wt37LqBsiLo62Jkx284XEdi4LzdX6pihZFwqYX",
            apiMode: "test",
            view: "checkout",
            postalCode: "0153",
            language: "NO",
            discount: 10000,
            availabilityResponse: pbAvailabilityData,
            onSelectDeliveryWindow: window => {
              setSelectedDeliveryWindow(JSON.stringify(window))
            },
            onSetCallbacks: function (callbacks) {
              window.unselectDeliveryWindow = callbacks.unselectDeliveryWindow
            },
          }}
        />
      </Box>
      <Box ml={[0, 10, 10]}>
        <Text fontWeight="bold">Background data (selected delivery)</Text>
        <pre
          style={{
            maxWidth: "400px",
            wordWrap: "break-word",
            whiteSpace: "initial",
          }}
        >
          {selectedDeliveryWindow}
        </pre>
      </Box>
    </Box>
  )
}
