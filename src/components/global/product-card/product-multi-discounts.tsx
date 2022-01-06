import { Box, Button, Input, Flex } from "@chakra-ui/react"
import React from "react"
import { PBProductCard } from "../../porterbuddy/PBProductCardWidget"

export const ProductCardWithMultiDiscounts = () => {
  return (
    <Box mb={5}>
      <Box maxWidth="500px" mb={4}>
        <PBProductCard
          options={{
            token: "y3wt37LqBsiLo62Jkx284XEdi4LzdX6pihZFwqYX",
            apiMode: "test",
            view: "availability",
            postalCode: "0153",
            language: "NO",
            discount: 5000,
            additionalDiscounts: {
              largeOrder: 10000,
            },
            onSetCallbacks: function (callbacks) {
              window.forceRefreshReference = callbacks.forceRefresh
            },
            text: {
              availabilityPostcodeSuccess:
                "Hjem {{delivery}} med Porterbuddy fra **{{price_lowest_price}}** eller kun **{{price_lowest_price_largeOrder}}** om du handler for over 1000,-",
            },
          }}
        />
      </Box>

      <Flex mb="5" alignItems="center">
        <label>Standard discount</label>
        <Input defaultValue={5000} maxWidth="300px" mx={5} />
      </Flex>

      <Flex mb="5" alignItems="center">
        <label>Large order discount</label>
        <Input defaultValue={10000} maxWidth="300px" mx={5} />
      </Flex>

      <Button size="sm" colorScheme="purple">
        Set Discounts
      </Button>
    </Box>
  )
}
