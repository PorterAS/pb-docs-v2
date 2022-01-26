import { Box, SimpleGrid, Text, Button, Input } from "@chakra-ui/react"
import React, { useState } from "react"
import { PBUSM } from "../../porterbuddy/PBUnifiedShippingModule"
import {
  homeOptions,
  pickupOptions,
  storeOptions,
} from "../../porterbuddy/sample-usm-data"

export const USMCallbacks = () => {
  const [email, setEmail] = useState<string | undefined>("")
  const [postCode, setPostCode] = useState<string | undefined>("")
  const [streetAddress, setStreetAdddress] = useState<string | undefined>("")
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
              onRecipientInfoEntered: function ({
                email,
                postCode,
                streetAddress,
              }) {
                setEmail(email)
                setPostCode(postCode)
                setStreetAdddress(streetAddress)
              },
            }}
          />
        </Box>
        <Box mt="3">
          <Box>
            <Text fontSize="xl">Selected shipping option</Text>
            <Text>Entered email</Text>
            <Box>
              <pre>{email}</pre>
            </Box>

            <Text>Entered postcode:</Text>
            <Box>
              <pre>{postCode}</pre>
            </Box>
            <Text>Entered street address</Text>
            <Box>
              <pre>{streetAddress}</pre>
            </Box>
          </Box>
          <Box>
            <Text fontWeight="bold">Callback triggers</Text>
            <Button colorScheme="purple" size="sm" mb="3">
              Force refresh
            </Button>
            <Input type="text" placeholder="Email address" mb="3" />
            <Input type="text" placeholder="Postcode" mb="3" />
            <Input type="text" placeholder="Street address" mb="3" />
            <Button colorScheme="purple" size="sm" mb="3" isFullWidth>
              Set recipient info
            </Button>
            <Box>
              <Button colorScheme="purple" size="sm" mb="3">
                Refresh shipping options
              </Button>
            </Box>
            <Box>
              <Button colorScheme="purple" size="sm">
                Toggle recipientInfoLocked
              </Button>
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  )
}
