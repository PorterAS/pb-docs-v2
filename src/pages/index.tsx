import * as React from "react"
import { graphql } from "gatsby"
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react"
import { FeatureCard } from "../components/home/feature-card"
import Layout from "../components/layouts/home-layout"
import SEO from "../components/seo"
import {
  FaBook,
  FaBookOpen,
  FaHandshake,
  FaInfoCircle,
  FaPeopleCarry,
  FaPlay,
} from "react-icons/fa"
// @ts-ignore
import CoWorking from "../images/co-working.jpeg"
import { InfoBanner } from "../components/global/InfoBanner"

export const query = graphql`
  query {
    allMdx {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

const IndexPage = ({}: any) => {
  // const slugs = data.allMdx.edges
  return (
    <Layout>
      <SEO title="Home" />
      <Box mt={"5%"} mb={{ base: "15%", sm: "15%", md: "10%", lg: "10%" }}>
        <Center>
          <Text
            fontSize={{ base: "3xl", sm: "3xl", md: "3xl", lg: "4xl" }}
            fontWeight={"600"}
          >
            Porterbuddy Developers
          </Text>
        </Center>
        <Text textAlign="center">
          Welcome to Porterbuddy Developers! Find information on building an
          efficient logistics experience with Porterbuddy
        </Text>
      </Box>
      <InfoBanner title={"Porterbuddy Samlevert v1"}>
        All new Porterbuddy Samlevert product launch. Learn to upgrade your
        existing Porterbuddy integration to use Samlevert. Samlevert lets your
        customers purchase items from multiple stores and receive all the orders
        within the same delivery window.
      </InfoBanner>

      <SimpleGrid columns={[1, 3, 3]} spacing="10" my={"10%"}>
        <FeatureCard
          title={"Getting Started"}
          content={
            "Integrate Porterbuddy's product card widget, Checkout widget and Universal shipping module"
          }
          link="/getting-started/"
          actionText="Learn more"
          icon={<FaPlay />}
        />
        <FeatureCard
          icon={<FaBook />}
          title={"API Reference"}
          content={
            "Utilize the robust Porterbuddy API reference to build your own custom integration"
          }
          link="/api-reference/"
          actionText="Learn more"
        />
        <FeatureCard
          icon={<FaHandshake />}
          title={"Integrations"}
          content={
            "Discover our library of existing integrations with musltiple systems to get started quickly"
          }
          link="/integrations/"
          actionText="Learn more"
        />
        <FeatureCard
          icon={<FaInfoCircle />}
          title={"FAQs"}
          content={
            "Find answers to frequently asked questions regarding integrations"
          }
          link="/faqs/"
          actionText="Learn more"
        />
        <FeatureCard
          icon={<FaBookOpen />}
          title={"Guides"}
          content={
            "Discover awesome technical content created to help you build better"
          }
          link="/guides/"
          actionText="Learn more"
        />
        <FeatureCard
          icon={<FaPeopleCarry />}
          title={"Porterbuddy Community"}
          content={
            "Discover awesome technical content created to help you build better"
          }
          link="/community/"
          actionText="Learn more"
        />
      </SimpleGrid>

      <Box my={"15%"}>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          flexWrap={["wrap", "nowrap", "nowrap"]}
        >
          <Box>
            <Text fontSize={"2xl"} fontWeight={"600"} mb={3}>
              Get started with Porterbuddy
            </Text>
            <Text width={["100%", "80%", "70%"]}>
              Looking to deliver parcels with Porterbuddy from your webshop? Get
              in touch with a sales representative to schedule a walkthrough
            </Text>
          </Box>
          <Box>
            <Button
              bgColor={"#661AFF"}
              _hover={{ bgColor: "#661AFF", opacity: 0.8 }}
              color={"white"}
              size={"lg"}
              mt={[5, 0, 0]}
            >
              <a href={"mailto:mats@porterbuddy.com"}>Speak with us</a>
            </Button>
          </Box>
        </Flex>
      </Box>

      <Box bgColor={"#661AFF"} borderRadius={5} color={"white"} my={"10%"}>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          p={[3, 3, 5]}
          flexWrap={["wrap", "nowrap", "nowrap"]}
        >
          <Box>
            <Text fontSize={"2xl"} fontWeight={"600"} mb={3}>
              Join Porterbuddy
            </Text>
            <Text width={["100%", "100%", "70%"]} mb={7}>
              Are you interested in building the future of e-commerce logistics?
              Come work with equally talented and motivated individuals on
              things you care about.
            </Text>
            <Box>
              <Button
                bgColor={"#3a118e"}
                _hover={{ bgColor: "#3a118e", opacity: 0.8 }}
              >
                <a href={"mailto:dev@porterbuddy.com"}>Work with us</a>
              </Button>
            </Box>
          </Box>
          <Image
            src={CoWorking}
            width={[350, 300, 300]}
            borderRadius={5}
            my={"auto"}
            mx={"auto"}
            mt={[10, 0, 0]}
          />
        </Flex>
      </Box>

      {/* <UnorderedList>
        {slugs.map((val: any, index: number) => (
          <ListItem key={index}>
            <Link to={val.node.fields.slug}>{val.node.frontmatter.title}</Link>
          </ListItem>
        ))}
      </UnorderedList> */}
    </Layout>
  )
}
export default IndexPage
