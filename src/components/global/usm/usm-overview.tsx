import { Box, Text, Flex, Input, Button } from "@chakra-ui/react"
import React, { useState } from "react"
import { PBUSM } from "../../porterbuddy/PBUnifiedShippingModule"
import {
  homeOptions,
  pickupOptions,
  storeOptions,
} from "../../porterbuddy/sample-usm-data"

export const USMOverview = () => {
  const [maxWidth, setMaxWidth] = useState<string | undefined>("414px")
  const [tempWidthState, setTempWidthState] = useState<string | undefined>(
    "414px"
  )

  return (
    <Box>
      <Flex>
        <Text mr="3">Max-width:</Text>
        <Input
          type="text"
          size="sm"
          maxWidth="100px"
          mr="3"
          value={tempWidthState}
          onChange={e => setTempWidthState(e.target.value)}
        />
        <Button
          size="sm"
          colorScheme="purple"
          onClick={() => setMaxWidth(tempWidthState)}
        >
          Set
        </Button>
      </Flex>
      <Box maxWidth={maxWidth}>
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
          }}
        />
      </Box>
    </Box>
  )
}
