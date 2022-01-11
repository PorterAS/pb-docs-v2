import { Box, Button } from "@chakra-ui/react"
import React from "react"
import { PBCheckoutWidget } from "../../porterbuddy/PBCheckoutWidget"
import { isBrowser } from "../../porterbuddy/PBScript"
import { pbAvailabilityData } from "../../porterbuddy/sample-data"

//  todo: check functions
export const CheckoutWithCallbackFunctions = () => {
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
    }
  }
  return (
    <Box mb={5}>
      <Box mb={5}>
        <Button
          mr={3}
          colorScheme="purple"
          size="xs"
          onClick={_unselectDeliveryWindow}
        >
          Unselect Window
        </Button>
        <Button
          mr={3}
          colorScheme="purple"
          size="xs"
          onClick={_reselectLastWindow}
        >
          Reselect last selected
        </Button>
        <Button mr={3} colorScheme="purple" size="xs" onClick={_selectDefault}>
          Select default
        </Button>
        <Button colorScheme="purple" size="xs" onClick={_forceRefresh}>
          Force refresh
        </Button>
      </Box>

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
            now: "2019-03-14T09:00:00+01:00",
            initialSelectedWindow: pbAvailabilityData.deliveryWindows[0],
            onSelectDeliveryWindow: deliveryWindow => {
              if (isBrowser() && window) {
                window.selectedDeliveryWindow = deliveryWindow
              }
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
    </Box>
  )
}
