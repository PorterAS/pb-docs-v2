import { Box, Button, Text } from "@chakra-ui/react"
import React, { useState } from "react"
import { PBCheckoutWidget } from "../../porterbuddy/PBCheckoutWidget"
import { isBrowser } from "../../porterbuddy/PBScript"
import {
  pbAvailabilityData,
  pbAvailabilityDataWithConsolidation,
} from "../../porterbuddy/sample-data"
import { AvailabilityResponseType } from "../../porterbuddy/types"

export const CheckoutAnonConsolidation = () => {
  const [selectedDeliveryWindow, setSelectedDeliveryWindow] = useState<
    undefined | string
  >(undefined)
  const [availabilityResponse, setAvailabilityResponse] = useState<
    AvailabilityResponseType | undefined
  >(pbAvailabilityDataWithConsolidation)

  function _removeConsolidation() {
    if (isBrowser()) {
      setAvailabilityResponse(pbAvailabilityData)
      setSelectedDeliveryWindow(undefined)
    }
  }

  function _addConsolidation() {
    if (isBrowser()) {
      setAvailabilityResponse(pbAvailabilityDataWithConsolidation)
    }
  }
  return (
    <Box display={["block", "block", "flex"]} mb={5}>
      <Box maxWidth="500px" mb={4} p="2">
        <PBCheckoutWidget
          key={JSON.stringify(availabilityResponse)}
          options={{
            token: "y3wt37LqBsiLo62Jkx284XEdi4LzdX6pihZFwqYX",
            apiMode: "test",
            view: "checkout",
            postalCode: "0153",
            language: "NO",
            discount: 10000,
            now: "2019-03-14T09:00:00+01:00",
            availabilityResponse: availabilityResponse,
            onSelectDeliveryWindow: window => {
              setSelectedDeliveryWindow(JSON.stringify(window))
            },
            onSetCallbacks: function (callbacks) {
              window.setSelectedDeliveryWindow =
                callbacks.setSelectedDeliveryWindow
            },
          }}
        />
      </Box>
      <Box ml={[0, 10, 10]}>
        <Box>
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
        <Box mb={5}>
          <Button
            colorScheme="purple"
            size="xs"
            onClick={_removeConsolidation}
            mr={3}
          >
            Remove consolidated window
          </Button>
          <Button colorScheme="purple" size="xs" onClick={_addConsolidation}>
            Add consolidated window
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
