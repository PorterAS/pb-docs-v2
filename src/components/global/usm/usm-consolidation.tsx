import {
  Box,
  SimpleGrid,
  Text,
  Button,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react"
import React, { useState } from "react"
import { isBrowser } from "../../porterbuddy/PBScript"
import { PBUSM } from "../../porterbuddy/PBUnifiedShippingModule"
import {
  homeOptions,
  pickupOptions,
  storeOptions,
} from "../../porterbuddy/sample-usm-data"
import {
  IPorterbuddyShippingOption,
  IServiceLevelShippingOption,
  RecipientInfoType,
} from "../../porterbuddy/types"

import { createDeliveryWindows } from "../../porterbuddy/CreateDeliveryWindows"

function modifyHomeOptions({
  postCode,
  streetAddress,
  consolidatedWindow,
}: RecipientInfoType & { consolidatedWindow?: boolean }): (
  | IPorterbuddyShippingOption
  | IServiceLevelShippingOption
)[] {
  let response = homeOptions
  response[0].availabilityResponse.destinationResolvedAddress.postalCode =
    postCode
  response[0].availabilityResponse.destinationResolvedAddress.streetName =
    streetAddress.split(" ")[0]
  response[0].availabilityResponse.destinationResolvedAddress.streetNumber =
    streetAddress.split(" ")[1]

  if (consolidatedWindow) {
    response[0].availabilityResponse.consolidatedWindow =
      createDeliveryWindows()[0]
    response[0].availabilityResponse.consolidatedWindow.consolidated = true
  }
  return response
}

export const USMConsolidation = () => {
  const [deliveryData, setDeliveryData] = useState<string | undefined>("")
  const [apiMode, setApiMode] = useState<string | "simulated" | "real">(
    "simulated"
  )
  function clearStorage() {
    if (isBrowser()) {
      setDeliveryData(undefined)
      localStorage.clear()
      window.forceRefresh()
    }
  }

  return (
    <Box>
      <Box>
        <Text fontWeight="bold">Demo API Mode</Text>
        <Box mb="5">
          <RadioGroup
            value={apiMode}
            onChange={setApiMode}
            onClick={window ? () => window.forceRefresh() : () => {}}
          >
            <Stack direction="row">
              <Radio value="simulated">Simulated</Radio>
              <Radio value="real">Real</Radio>
            </Stack>
          </RadioGroup>
        </Box>
        <Button size="sm" colorScheme="purple" onClick={clearStorage}>
          Clear address in local storage
        </Button>
      </Box>

      <SimpleGrid columns={[1, 2, 2]} spacing={5}>
        <Box key={apiMode}>
          <PBUSM
            options={{
              homeDeliveryOptions: [],
              pickupPointOptions: [],
              storeOptions: [],
              language: "NO",
              onRecipientInfoEntered: function ({
                email,
                postCode,
                streetAddress,
              }) {
                if (isBrowser()) {
                  window.porterbuddy.storeOptions = storeOptions
                  window.porterbuddy.pickupPointOptions = pickupOptions
                  console.log(apiMode)
                  if (
                    email === "consolidated@porterbuddy.com" &&
                    apiMode === "simulated"
                  ) {
                    window.porterbuddy.homeDeliveryOptions = modifyHomeOptions({
                      postCode,
                      streetAddress,
                      consolidatedWindow: true,
                    })
                  } else {
                    window.porterbuddy.homeDeliveryOptions = modifyHomeOptions({
                      postCode,
                      streetAddress,
                    })
                  }
                }
                window.refreshShippingOptions()
              },
              onSetCallbacks: function (callbacks) {
                if (isBrowser()) {
                  window.refreshShippingOptions =
                    callbacks.refreshShippingOptions
                  window.forceRefresh = callbacks.forceRefresh
                  window.setRecipientInfo = callbacks.setRecipientInfo
                  window.setRecipientInfoLocked =
                    callbacks.setRecipientInfoLocked
                }
              },
              onSelectionChanged: function (_, selectedShipping) {
                setDeliveryData(JSON.stringify(selectedShipping))
              },
            }}
          />
        </Box>
        <Box mt="3">
          <Box>
            <Text fontSize="xl">Background data</Text>
            <Text>Selected delivery</Text>
            <Box>
              <pre
                style={{
                  wordWrap: "break-word",
                  whiteSpace: "initial",
                }}
              >
                {deliveryData}
              </pre>
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  )
}
