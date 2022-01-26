import { Box, SimpleGrid, Text } from "@chakra-ui/react"
import React, { useState } from "react"
import { PBUSM } from "../../porterbuddy/PBUnifiedShippingModule"
import {
  homeOptions,
  pickupOptions,
  storeOptions,
} from "../../porterbuddy/sample-usm-data"

export const USMIntegration = () => {
  const [shippingOptionType, setShippingOptionType] = useState<
    string | undefined
  >("")
  const [shippingOptionData, setShippingOptionData] = useState<
    string | undefined
  >("")
  return (
    <Box>
      <SimpleGrid columns={[1, 2, 2]} spacing={5}>
        <Box>
          <PBUSM
            options={{
              homeDeliveryOptions: homeOptions,
              pickupPointOptions: pickupOptions,
              storeOptions: storeOptions,
              language: "NO",
              // now: "2022-01-26T12:30:00+01:00", // only for testing!
              recipientInfo: {
                email: "person@porterbuddy.com",
                postCode: "0678",
                streetAddress: "Høyenhallveien 25",
              },
              onSelectionChanged: function (type, selectedShipping) {
                // use the selection data
                setShippingOptionType(type)
                setShippingOptionData(JSON.stringify(selectedShipping, null, 2))
              },
            }}
          />
        </Box>
        <Box mt="3">
          <Text fontSize="xl">Selected shipping option</Text>
          <Text>Type:</Text>
          <Box>
            <pre>{shippingOptionType}</pre>
          </Box>

          <Text>Data:</Text>
          <Box>
            <pre
              style={{
                wordWrap: "break-word",
                whiteSpace: "initial",
              }}
            >
              {shippingOptionData}
            </pre>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  )
}
