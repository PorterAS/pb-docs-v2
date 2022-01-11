import { Box, Button, Text } from "@chakra-ui/react"
import React, { useState } from "react"
import { PBCheckoutWidget } from "../../porterbuddy/PBCheckoutWidget"
import { isBrowser } from "../../porterbuddy/PBScript"
import { pbAvailabilityData } from "../../porterbuddy/sample-data"

export const CheckoutInIframe = () => {
  const [selectedDeliveryWindow, setSelectedDeliveryWindow] = useState<
    undefined | string
  >(undefined)

  function _unselectDeliveryWindow() {
    if (isBrowser()) {
      window.unselectDeliveryWindow()
    }
  }

  function _reselectLastWindow() {
    if (isBrowser()) {
      window.setSelectedDeliveryWindow(window.selectedDeliveryWindow)
    }
  }
  function _selectDefault() {
    if (isBrowser()) {
      window.setSelectedDeliveryWindow(null, true)
    }
  }

  function _forceRefresh() {
    if (isBrowser()) {
      window.forceRefreshReference()
      setSelectedDeliveryWindow(undefined)
    }
  }
  return (
    <Box display={["block", "block", "flex"]} mb={5}>
      <Box maxWidth="500px" mb={4} p="2">
        <PBCheckoutWidget
          options={{
            token: "y3wt37LqBsiLo62Jkx284XEdi4LzdX6pihZFwqYX",
            apiMode: "test",
            view: "checkout",
            postalCode: "0153",
            language: "NO",
            discount: 10000,
            now: "2019-03-14T09:00:00+01:00",
            availabilityResponse: pbAvailabilityData,
            onSelectDeliveryWindow: window => {
              setSelectedDeliveryWindow(JSON.stringify(window))
            },
            onSetCallbacks: function (callbacks) {
              window.forceRefreshReference = callbacks.forceRefresh
              window.unselectDeliveryWindow = callbacks.unselectDeliveryWindow
              window.setSelectedDeliveryWindow =
                callbacks.setSelectedDeliveryWindow
            },
          }}
        />
      </Box>
      <Box ml={[0, 10, 10]}>
        <Box mb={5}>
          <Text fontWeight="bold">Functions</Text>
          <Button colorScheme="purple" size="xs" onClick={_forceRefresh} mr={3}>
            Refresh
          </Button>
          <Button
            colorScheme="purple"
            size="xs"
            onClick={_selectDefault}
            mr={3}
          >
            Select default
          </Button>
          <Button
            mr={3}
            colorScheme="purple"
            size="xs"
            onClick={_unselectDeliveryWindow}
          >
            Unselect Window
          </Button>
          <Button colorScheme="purple" size="xs" onClick={_reselectLastWindow}>
            Reselect last selected
          </Button>
        </Box>
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
      </Box>
    </Box>
  )
}
