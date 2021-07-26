import {
  Button,
  chakra,
  HTMLChakraProps,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import * as React from "react"
import { FooterHeading } from "./footer"

export const SubscribeForm = (props: HTMLChakraProps<"form">) => {
  return (
    <chakra.form {...props} onSubmit={e => e.preventDefault()}>
      <Stack spacing="4" fontSize={"sm"}>
        <FooterHeading>Subscribe to receive updates</FooterHeading>
        <Text>
          Get notified when we add new components or we have exciting news for
          you.
        </Text>
        <Stack spacing="4" direction={{ base: "column", md: "row" }}>
          <Input
            bg={useColorModeValue("white", "inherit")}
            placeholder="Enter your email"
            type="email"
            required
            focusBorderColor={useColorModeValue("blue.500", "blue.300")}
            _placeholder={{
              opacity: 1,
              color: useColorModeValue("gray.500", "whiteAlpha.700"),
            }}
          />
          <Button
            fontSize={"sm"}
            type="submit"
            bgColor="#661AFF"
            color={"white"}
            flexShrink={0}
            _hover={{ bgColor: "#661AFF", opacity: 0.8 }}
            width={{ base: "full", md: "auto" }}
          >
            Subscribe
          </Button>
        </Stack>
      </Stack>
    </chakra.form>
  )
}
