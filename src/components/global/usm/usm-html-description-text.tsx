import { Box } from "@chakra-ui/react"
import React from "react"
import { PBUSM } from "../../porterbuddy/PBUnifiedShippingModule"
import {
  homeOptions,
  pickupOptions,
  storeOptions,
} from "../../porterbuddy/sample-usm-data"
import {
  IPorterbuddyShippingOption,
  IServiceLevelShippingOption,
} from "../../porterbuddy/types"

function modifyHomeDeliveryOption(): (
  | IPorterbuddyShippingOption
  | IServiceLevelShippingOption
)[] {
  let response = homeOptions
  response[0].default = true
  response[0].description =
    '<span style="font-weight: bold; color: #661AFF;">Porterbuddy</span> is a convenient option to get deliveries right to your doorstep'
  return response
}

export const USMHTMLDescription = () => {
  return (
    <Box>
      <Box maxWidth={500}>
        <PBUSM
          options={{
            homeDeliveryOptions: modifyHomeDeliveryOption(),
            pickupPointOptions: pickupOptions,
            storeOptions: storeOptions,
            language: "NO",
            recipientInfo: {
              email: "person@porterbuddy.com",
              postCode: "0678",
              streetAddress: "Høyenhallveien 25",
            },
            enableHtmlDescriptions: true,
          }}
        />
      </Box>
    </Box>
  )
}
