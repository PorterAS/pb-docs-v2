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
import React, { useEffect, useState } from "react"
import { PBCheckoutWidget } from "../../porterbuddy/PBCheckoutWidget"
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
  const [postCode, setPostCode] = useState<string>("0678")
  const [availabilityResponse, setAvailabilityResponse] = useState<
    AvailabilityResponseType | undefined
  >(pbAvailabilityDataWithFlag)
  const [apiMode, setApiMode] = useState<string | "simulated" | "real">(
    "simulated"
  )

  useEffect(() => {
    if (apiMode == "simulated") {
      setAvailabilityResponse(pbAvailabilityDataWithFlag)
    } else {
      setAvailabilityResponse(pbAvailabilityData)
    }
  }, [apiMode])

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
        <Button size="sm" colorScheme="purple">
          Set
        </Button>
      </Flex>

      <Text fontWeight="bold">Demo API Mode</Text>
      <Box>
        <RadioGroup value={apiMode} onChange={setApiMode}>
          <Stack direction="row">
            <Radio value="simulated">Simulated</Radio>
            <Radio value="real">Real</Radio>
          </Stack>
        </RadioGroup>
      </Box>

      <Box display={["block", "block", "flex"]} mb={5}>
        <Box maxWidth="500px" mb={4} p="2">
          <PBCheckoutWidget
            key={apiMode}
            options={{
              token: "y3wt37LqBsiLo62Jkx284XEdi4LzdX6pihZFwqYX",
              apiMode: "test",
              view: "checkout",
              postalCode: postCode,
              language: "NO",
              now: "2019-03-14T09:00:00+01:00",
              availabilityResponse: availabilityResponse,
              onSelectDeliveryWindow: selectedWindow => {
                setSelectedDeliveryWindow(JSON.stringify(selectedWindow))
              },
              onSetCallbacks: function (callbacks) {
                window.setSelectedDeliveryWindow =
                  callbacks.setSelectedDeliveryWindow
                window.udpateDeliveryWindows = callbacks.updateDeliveryWindows
              },
              onUpdateDeliveryWindows: async function (_, additionalInfo) {
                if (
                  apiMode == "simulated" &&
                  additionalInfo.email == "consolidated@porterbuddy.com"
                ) {
                  setAvailabilityResponse(pbAvailabilityDataWithConsolidation)
                  window.udpateDeliveryWindows(
                    pbAvailabilityDataWithConsolidation
                  )
                }
                if (
                  apiMode == "simulated" &&
                  additionalInfo.email !== "consolidated@porterbuddy.com"
                ) {
                  setAvailabilityResponse(pbAvailabilityDataWithFlag)
                  window.udpateDeliveryWindows(pbAvailabilityDataWithFlag)
                }

                if (apiMode == "real") {
                  setAvailabilityResponse(pbAvailabilityDataWithFlag)
                  window.udpateDeliveryWindows(pbAvailabilityDataWithFlag)
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
