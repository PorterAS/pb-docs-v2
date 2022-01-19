import {
  Box,
  Button,
  Flex,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react"
import React, { useState } from "react"
import { PBCheckoutWidget } from "../../porterbuddy/PBCheckoutWidget"
import { isBrowser } from "../../porterbuddy/PBScript"
import {
  pbAvailabilityData,
  pbAvailabilityDataWithConsolidation,
  pbAvailabilityDataWithFlag,
} from "../../porterbuddy/sample-data"
import { AvailabilityResponseType } from "../../porterbuddy/types"

export const CheckoutConsolidationCheck = () => {
  const [selectedDeliveryWindow, setSelectedDeliveryWindow] = useState<
    undefined | string
  >(undefined)
  const [postCode, setPostCode] = useState<string | undefined>("0678")
  const [availabilityResponse, setAvailabilityResponse] = useState<
    AvailabilityResponseType | undefined
  >(pbAvailabilityDataWithFlag)
  const [apiMode, setApiMode] = useState<string | "simulated" | "real">(
    "simulated"
  )

  // function _removeConsolidation() {
  //   if (isBrowser()) {
  //     setAvailabilityResponse(pbAvailabilityData)
  //     setSelectedDeliveryWindow(undefined)
  //   }
  // }

  // function _addConsolidation() {
  //   if (isBrowser()) {
  //     setAvailabilityResponse(pbAvailabilityDataWithConsolidation)
  //   }
  // }
  function savePostCode() {
    if (isBrowser()) {
      // let forceRefreshReference = window.forceRefreshReference
      // window.porterbuddy.postalCode = postCode
      // forceRefreshReference().then(function () {
      //   console.log("Refreshed the product card widget!")
      // })
    }
  }

  function changeApiMode() {
    // setAvailabilityResponse(pbAvailabilityData)
    console.log("i ran")
  }

  return (
    <Box>
      <Flex mb="5" alignItems="center">
        <label>Postcode</label>
        <Input
          value={postCode}
          onChange={e => setPostCode(e.target.value)}
          maxWidth="300px"
          mx={5}
        />
        <Button size="sm" onClick={savePostCode} colorScheme="purple">
          Set
        </Button>
      </Flex>

      <Text fontWeight="bold">Demo API Mode</Text>
      {/* <Box>
        <label>Simulated</label>
        <input type="radio" value="simulated" name="mode" />

        <label>Real</label>
        <input type="radio" value="real" name="mode" />
      </Box> */}

      <Box display={["block", "block", "flex"]} mb={5}>
        <Box maxWidth="500px" mb={4} p="2">
          <PBCheckoutWidget
            key={
              availabilityResponse ? JSON.stringify(availabilityResponse) : ""
            }
            options={{
              token: "y3wt37LqBsiLo62Jkx284XEdi4LzdX6pihZFwqYX",
              apiMode: "test",
              view: "checkout",
              postalCode: "0153",
              language: "NO",
              discount: 10000,
              now: "2019-03-14T09:00:00+01:00",
              availabilityResponse: availabilityResponse,
              onSelectDeliveryWindow: window => {
                setSelectedDeliveryWindow(JSON.stringify(window))
              },
              onSetCallbacks: function (callbacks) {
                window.setSelectedDeliveryWindow =
                  callbacks.setSelectedDeliveryWindow
              },
              onUpdateDeliveryWindows: async function (
                callback,
                additionalInfo
              ) {
                if (
                  apiMode == "simulated" &&
                  additionalInfo.email == "consolidated@porterbuddy.com"
                ) {
                  setAvailabilityResponse(pbAvailabilityDataWithConsolidation)
                }
              },
            }}
          />
        </Box>
        <Box ml={[0, 10, 10]}>
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
    </Box>
  )
}
