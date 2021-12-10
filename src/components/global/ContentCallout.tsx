import * as React from "react"
import { useState } from "react"
import { Box, Flex, Text } from "@chakra-ui/react"
import { FaTimes } from "react-icons/all"

type ContentCalloutPropType = {
  title?: string
  children: React.ReactNode
  bannerLink?: string | "#"
  canClose?: boolean
  bgColor?: string
}
export const ContentCallout = ({
  title,
  children,
  canClose = false,
  bgColor = "#661AFF",
}: ContentCalloutPropType) => {
  const [closeBanner, setCloseBanner] = useState(false)
  return (
    <>
      {!closeBanner && (
        <Box as={"div"}>
          <Box
            p={3}
            minH={"10%"}
            bgColor={bgColor}
            borderRadius={5}
            color={"white"}
            my={"2%"}
            boxShadow={"2px 2px 10px 1px gray"}
          >
            <Flex justifyContent={"space-between"} width={"100%"}>
              <Box>
                <Text fontSize={"lg"} fontWeight={"600"}>
                  {title}
                </Text>
                <Text>{children}</Text>
              </Box>
              {canClose && (
                <Box onClick={() => setCloseBanner(true)}>
                  <FaTimes fontSize={"20px"} />
                </Box>
              )}
            </Flex>
          </Box>
        </Box>
      )}
    </>
  )
}
