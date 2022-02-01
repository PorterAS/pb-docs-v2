import { Box } from "@chakra-ui/react"
import React from "react"
import { PBUSM } from "../../porterbuddy/PBUnifiedShippingModule"
import {
  homeOptions,
  pickupOptions,
  storeOptions,
} from "../../porterbuddy/sample-usm-data"

function modifyPickupOption(): IPickupShippingOption[]{
  let response = pickupOptions;
  response[0].updateInterval = 60
  return response;
}

export const USMPeriodicUpdate = () => {
  return (
    <Box>
      <Box maxWidth={500}>
        <PBUSM
          options={{
            homeDeliveryOptions: homeOptions,
            pickupPointOptions: modifyPickupOption(),
            storeOptions: storeOptions,
            language: "NO",
            // now: "2022-01-26T12:30:00+01:00", // only for testing!
            recipientInfo: {
              email: "person@porterbuddy.com",
              postCode: "0678",
              streetAddress: "Høyenhallveien 25",
            },
          }}
        />
      </Box>
    </Box>
  )
}
