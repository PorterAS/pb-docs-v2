import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import { Box, Flex, Text } from "@chakra-ui/react"
import { FaTimes } from "react-icons/all"

type InfoBannerPropType = {
  title?: string
  children: React.ReactNode
  bannerLink?: string | "#"
  canClose?: boolean
  bgColor?: string
}
export const InfoBanner = ({
  title,
  children,
  bannerLink = "#",
  canClose = false,
  bgColor = "#661AFF",
}: InfoBannerPropType) => {
  const [closeBanner, setCloseBanner] = useState(false)
  return (
    <>
      {!closeBanner && (
        <Link to={bannerLink}>
          <Box
            p={[3, 3, 5]}
            minH={"10%"}
            bgColor={bgColor}
            borderRadius={5}
            color={"white"}
            my={"5%"}
            // boxShadow={"2px 2px 10px 1px gray"}
          >
            <Flex justifyContent={"space-between"} width={"100%"}>
              <Box>
                <Text fontSize={"xl"} mb={3} fontWeight={"600"}>
                  {title}
                </Text>
                <Text width={["100%", "100%", "85%"]}>{children}</Text>
              </Box>
              {canClose && (
                <Box onClick={() => setCloseBanner(true)}>
                  <FaTimes fontSize={"20px"} />
                </Box>
              )}
            </Flex>
          </Box>
        </Link>
      )}
    </>
  )
}
