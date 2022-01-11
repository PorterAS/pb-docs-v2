import { Box } from "@chakra-ui/react"
import React from "react"
import { PBCheckoutWidget } from "../../porterbuddy/PBCheckoutWidget"
import { pbAvailabilityData } from "../../porterbuddy/sample-data"
import { AvailabilityResponseType } from "../../porterbuddy/types"

// Todo: check this works
export const CheckoutWithPeriodicUpdates = () => {
  function updateDeliveryWindows(
    callback: (arg0: AvailabilityResponseType) => void
  ) {
    let updatedAvailabilityResponse = pbAvailabilityData // fetch from availability api with additionalInfo added to the request
    callback(updatedAvailabilityResponse)
  }

  return (
    <Box mb={5}>
      <Box mb={4} border="1px" borderColor="gray.300" borderRadius="5" p="2">
        <PBCheckoutWidget
          options={{
            token: "y3wt37LqBsiLo62Jkx284XEdi4LzdX6pihZFwqYX",
            view: "checkout",
            availabilityResponse: pbAvailabilityData,
            now: "2019-03-14T09:00:00+01:00",
            updateDeliveryWindowsInterval: 30,
            onUpdateDeliveryWindows: updateDeliveryWindows, // update every 30 secons
          }}
        />
      </Box>
    </Box>
  )
}
