import { Box, Button, Input, Flex } from "@chakra-ui/react"
import React, { useState } from "react"
import { PBProductCard } from "../../porterbuddy/PBProductCardWidget"
import { isBrowser } from "../../porterbuddy/PBScript"

export const ProductCardWithRefresh = () => {
  const [postalCode, setPostalCode] = useState<string>("0153")

  function refresh() {
    if (isBrowser()) {
      let forceRefreshReference = window.forceRefreshReference
      window.porterbuddy.postalCode = postalCode
      forceRefreshReference().then(function () {
        console.log("Refreshed the product card widget!")
      })
    }
  }

  return (
    <Box>
      <Flex mb="5" alignItems="center">
        <label>Postcode</label>
        <Input
          value={postalCode}
          onChange={e => setPostalCode(e.target.value)}
          maxWidth="300px"
          mx={5}
        />
        <Button size="sm" onClick={refresh} colorScheme="purple">
          Refresh
        </Button>
      </Flex>
      <Box maxWidth="500px">
        <PBProductCard
          options={{
            token: "y3wt37LqBsiLo62Jkx284XEdi4LzdX6pihZFwqYX",
            apiMode: "test",
            view: "availability",
            postalCode: "0153",
            language: "NO",
            onSetCallbacks: function (callbacks) {
              window.forceRefreshReference = callbacks.forceRefresh
            },
          }}
        />
      </Box>
    </Box>
  )
}
