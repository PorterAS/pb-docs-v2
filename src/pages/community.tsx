import * as React from "react"
import {
  Box,
  Button,
  Flex,
  List,
  Text,
  ListItem,
  ListIcon,
  HStack,
} from "@chakra-ui/react"
import Layout from "../components/layouts/docs-layout"
import SEO from "../components/seo"
import { MdCheckCircle } from "react-icons/md"
import { FaFacebook, FaLinkedin } from "react-icons/fa"
import { ContentCallout } from "../components/global/ContentCallout"

type CommunityUpdateItemType = {
  content: string
  link?: string
}
const CommunityUpdateItem = ({ content, link }: CommunityUpdateItemType) => (
  <>
    {link ? (
      <a href={link} target={"_blank"}>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="#661AFF" />
          {content}
        </ListItem>
      </a>
    ) : (
      <ListItem>
        <ListIcon as={MdCheckCircle} color="#661AFF" />
        {content}
      </ListItem>
    )}
  </>
)
const CommunityPage = () => {
  return (
    <Layout>
      <SEO
        title="Porterbuddy Developer Community"
        description={
          "Connect and interact with developers building e-commerce products. Collaborate on solutions to issues regarding integrating with Porterbuddy"
        }
      />
      <Box>
        <Box mb={"3em"}>
          <Text fontSize="2xl" fontWeight={"600"} as={"h1"} mb={5}>
            Porterbuddy Developer Community
          </Text>
          <Text as={"h2"} lineHeight={7}>
            Collaborate on solutions, find answers to questions, and connect
            with other developers and creators in the Porterbuddy developer
            community.
          </Text>
        </Box>

        <ContentCallout type="info" title="Porterbuddy Developers on Discord">
          <Text width={"95%"}>Join our Discord community.</Text>
          <Box>
            <a href={"https://discord.gg/4XQfYHvQkF"} target={"_blank"}>
              <Button
                bgColor={"#661AFF"}
                _hover={{ bgColor: "#661AFF", opacity: 0.8 }}
                color={"white"}
                size={"md"}
                mt={[5, 0, 0]}
                disabled
              >
                Join us
              </Button>
            </a>
          </Box>
        </ContentCallout>

        <Box mb={10} mt={5}>
          <Box mb={4}>
            <Text fontSize={"xl"} fontWeight={"600"} mb={5}>
              Community updates
            </Text>
            <Text lineHeight={7}>
              Recent updates and information from the Porterbuddy developer
              community.
            </Text>
          </Box>
          <Box>
            <List spacing={3}>
              <CommunityUpdateItem
                content={"There are no updates at the moment :)"}
              />
            </List>
          </Box>
        </Box>

        <Box display={["none", "block", "block"]}>
          <Box mb={4}>
            <Text fontSize={"xl"} fontWeight={"600"} mb={5}>
              Find us on social media
            </Text>
          </Box>
          <HStack spacing={5}>
            <a
              href={"https://www.linkedin.com/company/porteras"}
              target={"_blank"}
            >
              <FaLinkedin fontSize={"3em"} color={"#0e76a8"} />
            </a>
            <a href={"https://www.facebook.com/porterbuddy/"} target={"_blank"}>
              <FaFacebook fontSize={"3em"} color={"#4267B2"} />
            </a>
          </HStack>
        </Box>
      </Box>
    </Layout>
  )
}
export default CommunityPage
