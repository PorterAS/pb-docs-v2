import * as React from "react"
import { useState } from "react"
import { Box, Flex, Text } from "@chakra-ui/react"
import { FaTimes } from "react-icons/all"
import { Link } from "gatsby"

type ContentCalloutPropType = {
  title?: string
  children: React.ReactNode
  bannerLink?: string | "#"
  canClose?: boolean
  type?: "error" | "warning" | "info"
}
export const ContentCallout = ({
  title,
  children,
  canClose = false,
  type = "info",
  bannerLink,
  ...rest
}: ContentCalloutPropType) => {
  const [closeBanner, setCloseBanner] = useState(false)

  let bgColor
  let emojiIcon

  switch (type) {
    case "error":
      bgColor = "#FF5500"
      emojiIcon = "🚨 "
      break
    case "warning":
      bgColor = "#661AFF"
      emojiIcon = "⚠️ "
      break
    case "info":
      bgColor = "#F9F6FF"
      emojiIcon = "💡 "
      break
    default:
      bgColor = "#F9F6FF"
      emojiIcon = "💡 "
  }

  return (
    <>
      {!closeBanner && (
        <Box as={"div"} {...rest}>
          <Box
            p={3}
            minH={"10%"}
            bgColor={bgColor}
            borderRadius={4}
            color={type == "info" ? "#00261D" : "#FFFFFF"}
            // my={"2%"}
            borderColor={type == "error" ? "#FF5500" : "#661AFF"}
            borderWidth={2}
            boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
            mb={5}
          >
            <Flex justifyContent={"space-between"} width={"100%"}>
              <Box>
                <Text
                  fontSize={"lg"}
                  fontWeight={"600"}
                  color={type == "info" ? "#661AFF" : "#FFFFFF"}
                  mb={5}
                >
                  {emojiIcon}
                  {title}
                </Text>
                <Text fontWeight={300}>{children}</Text>
              </Box>
              {canClose && (
                <Box onClick={() => setCloseBanner(true)}>
                  <FaTimes fontSize={"22px"} />
                </Box>
              )}
            </Flex>
          </Box>
        </Box>
      )}
    </>
  )
}
