import { Box, SimpleGrid, Text, Button, Input } from "@chakra-ui/react"
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

export const USMIframe = () => {
  const [email, setEmail] = useState<string | undefined>("")
  const [postCode, setPostCode] = useState<string>("")
  const [streetAddress, setStreetAdddress] = useState<string>("")

  const [shippingOptionType, setShippingOptionType] = useState<
    string | undefined
  >("")
  const [shippingOptionData, setShippingOptionData] = useState<
    string | undefined
  >("")

  // Recipient info form handling
  const [recipientInfoFormEmail, setRecipientInfoFormEmail] = useState<
    string | undefined
  >("")
  const [recipientInfoFormPostCode, setRecipientInfoFormPostCode] =
    useState<string>("")
  const [recipientInfoFormAddress, setRecipientInfoFormAddress] =
    useState<string>("")

  function modifyHomeOptions({
    postCode,
    streetAddress,
  }: RecipientInfoType): (
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
    return response
  }

  function setRecipientInfo() {
    if (isBrowser()) {
      window.setRecipientInfo({
        email: recipientInfoFormEmail,
        postCode: recipientInfoFormPostCode,
        streetAddress: recipientInfoFormAddress,
      })
    }
  }

  function forceRefresh() {
    if (isBrowser()) {
      window.forceRefresh()
    }
  }

  return (
    <Box>
      <SimpleGrid columns={[1, 2, 2]} spacing={5}>
        <Box>
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
                setEmail(email)
                setPostCode(postCode)
                setStreetAdddress(streetAddress)
                if (isBrowser()) {
                  window.porterbuddy.homeDeliveryOptions = modifyHomeOptions({
                    postCode,
                    streetAddress,
                  })
                  window.porterbuddy.storeOptions = storeOptions
                  window.porterbuddy.pickupPointOptions = pickupOptions
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
              onSelectionChanged: function (type, selectedShipping) {
                setShippingOptionType(type)
                setShippingOptionData(JSON.stringify(selectedShipping, null, 2))
              },
            }}
          />
        </Box>
        <Box mt="3">
          <Box>
            <Text fontWeight="bold">Callback triggers</Text>
            <Button
              colorScheme="purple"
              size="sm"
              mb="3"
              onClick={forceRefresh}
            >
              Force refresh
            </Button>
            <Input
              type="text"
              placeholder="Email address"
              mb="3"
              value={recipientInfoFormEmail}
              onChange={e => setRecipientInfoFormEmail(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Postcode"
              mb="3"
              value={recipientInfoFormPostCode}
              onChange={e => setRecipientInfoFormPostCode(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Street address"
              mb="3"
              value={recipientInfoFormAddress}
              onChange={e => setRecipientInfoFormAddress(e.target.value)}
            />
            <Button
              colorScheme="purple"
              size="sm"
              mb="3"
              isFullWidth
              onClick={setRecipientInfo}
            >
              Set recipient info
            </Button>
          </Box>
          <Box>
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
        </Box>
      </SimpleGrid>
    </Box>
  )
}
