import * as React from "react"
import { useState } from "react"
import { Box, Flex, Text } from "@chakra-ui/react"
import { FaTimes } from "react-icons/all"

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
}: ContentCalloutPropType) => {
  const [closeBanner, setCloseBanner] = useState(false)

  let bgColor
  let emojiIcon

  switch (type) {
    case "error":
      bgColor = "red"
      emojiIcon = "🚨 "
      break
    case "warning":
      bgColor = "main"
      emojiIcon = "⚠️ "
      break
    case "info":
      bgColor = "secondary"
      emojiIcon = "💡 "
      break
    default:
      bgColor = "secondary"
      emojiIcon = "💡 "
  }
  console.log(bgColor, emojiIcon)

  return (
    <>
      {!closeBanner && (
        <Box as={"div"}>
          <Box
            p={3}
            minH={"10%"}
            bgColor={"#F9F6FF"}
            borderRadius={5}
            color={"#00261D"}
            my={"2%"}
            borderColor={"#661AFF"}
            borderWidth={2}
          >
            <Flex justifyContent={"space-between"} width={"100%"}>
              <Box>
                <Text fontSize={"lg"} fontWeight={"600"} color="#661AFF">
                  {emojiIcon}
                  {title}
                </Text>
                <Text>{children}</Text>
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
