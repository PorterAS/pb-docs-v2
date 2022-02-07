import { Box, Stack, StackDivider } from "@chakra-ui/react"
import * as React from "react"
import { Link } from "gatsby"
import { SubscribeForm } from "./subscribe-form"
// @ts-ignore
import PorterbuddyLogo from "../../images/porterbuddy-logo.png"
import {
  Text,
  TextProps,
  Heading,
  HeadingProps,
  useColorModeValue,
  SimpleGrid,
  SimpleGridProps,
  ButtonGroup,
  ButtonGroupProps,
  IconButton,
} from "@chakra-ui/react"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { Container } from "./container"

export const SocialMediaLinks = (props: ButtonGroupProps) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton
      as="a"
      href="#"
      aria-label="LinkedIn"
      icon={<FaLinkedin fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="#"
      aria-label="GitHub"
      icon={<FaGithub fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="#"
      aria-label="Twitter"
      icon={<FaTwitter fontSize="20px" />}
    />
  </ButtonGroup>
)

export const Copyright = (props: TextProps) => (
  <Text fontSize="xs" {...props}>
    &copy; {new Date().getFullYear()} Porter AS. All rights reserved.
  </Text>
)

export const LinkGrid = (props: SimpleGridProps) => (
  <SimpleGrid columns={2} {...props}>
    <Box minW="130px" fontSize={"sm"}>
      <FooterHeading mb="4">Product</FooterHeading>
      <Stack>
        <Link to={"/api-reference/"}>API Reference</Link>
        <Link to={"/integrations/"}>Integrations</Link>
        <Link to={"/guides/"}>Guides</Link>
      </Stack>
    </Box>
    <Box minW="130px" fontSize={"sm"}>
      <FooterHeading mb="4">Support</FooterHeading>
      <Stack>
        <Link to={"/faqs/"}>FAQs</Link>
        <Link to={"/community/"}>Porterbuddy Community</Link>
        <Link to={"/"}>Careers</Link>
        <Link to={"/changelog/"}>Changelog</Link>
      </Stack>
    </Box>
  </SimpleGrid>
)
export const FooterHeading = (props: HeadingProps) => (
  <Heading
    as="h4"
    color={useColorModeValue("#661AFF", "gray.400")}
    fontSize="sm"
    fontWeight="semibold"
    textTransform="uppercase"
    letterSpacing="wider"
    {...props}
  />
)
export const Footer = ({ ...rest }: any) => (
  <Box {...rest} backgroundColor={"white"} mt={[5, 0, 0]} mb={5}>
    <Container>
      <Box as="footer" role="contentinfo" pt={[0, 10, 12]}>
        <Stack spacing="5" divider={<StackDivider />}>
          <Stack
            direction={{ base: "column", lg: "row" }}
            spacing={{ base: "10", lg: "28" }}
          >
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={{ base: "10", md: "20" }}
            >
              <LinkGrid spacing={{ base: "10", md: "20", lg: "28" }} />
              <SubscribeForm width={{ base: "full", md: "sm" }} />
            </Stack>
          </Stack>
          {/* <Stack
            direction={{ base: "column-reverse", md: "row" }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Copyright />
            <SocialMediaLinks />
          </Stack> */}
        </Stack>
      </Box>
    </Container>
  </Box>
)
