import * as React from "react"
import { graphql, Link } from "gatsby"
import {
  Text,
  SimpleGrid,
  Center,
  Box,
  Flex,
  Image,
  Button,
} from "@chakra-ui/react"
import { FeatureCard } from "../components/home/feature-card"
import Layout from "../components/layouts/home-layout"
import SEO from "../components/seo"
import {
  FaPlay,
  FaTimes,
  FaBook,
  FaHandshake,
  FaInfoCircle,
  FaBookOpen,
  FaPeopleCarry,
} from "react-icons/all"
import { useState } from "react"
// @ts-ignore
import CoWorking from "../images/co-working.jpeg"

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
type InfoBannerPropType = {
  title?: string
  children: React.ReactNode
  bannerLink?: string | "#"
  canClose?: boolean
}
export const InfoBanner = ({
  title,
  children,
  bannerLink = "#",
  canClose = false,
}: InfoBannerPropType) => {
  const [closeBanner, setCloseBanner] = useState(false)
  return (
    <>
      {!closeBanner && (
        <Link to={bannerLink}>
          <Box
            p={5}
            minH={"10%"}
            bgColor={"#661AFF"}
            borderRadius={5}
            color={"white"}
            my={"5%"}
            boxShadow={"2px 2px 10px 1px gray"}
          >
            <Flex justifyContent={"space-between"} width={"100%"}>
              <Box>
                <Text fontSize={"xl"} mb={3} fontWeight={"600"}>
                  {title}
                </Text>
                <Text width={"85%"}>{children}</Text>
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

const IndexPage = ({}: any) => {
  // const slugs = data.allMdx.edges
  return (
    <Layout>
      <SEO title="Home" />
      <Box mt={"5%"} mb={"10%"}>
        <Center>
          <Text fontSize="4xl" fontWeight={"600"}>
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

      <SimpleGrid columns={3} spacing="10" my={"10%"}>
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
          link="/blog/"
          actionText="Learn more"
        />
        <FeatureCard
          icon={<FaPeopleCarry />}
          title={"Porterbuddy Community"}
          content={
            "Discover awesome technical content created to help you build better"
          }
          link="/blog/"
          actionText="Learn more"
        />
      </SimpleGrid>

      <Box my={"15%"}>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Box>
            <Text fontSize={"2xl"} fontWeight={"600"} mb={3}>
              Get started with Porterbuddy
            </Text>
            <Text width={"70%"}>
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
            >
              <a href={"mailto:mats@porterbuddy.com"}>Speak with us</a>
            </Button>
          </Box>
        </Flex>
      </Box>

      <Box bgColor={"#661AFF"} borderRadius={5} color={"white"} my={"10%"}>
        <Flex justifyContent={"space-between"} alignItems={"center"} p={5}>
          <Box>
            <Text fontSize={"2xl"} fontWeight={"600"} mb={3}>
              Join Porterbuddy
            </Text>
            <Text width={"70%"} mb={10}>
              Are you interested in building the future of e-commerce logistics?
              Come work with equally talented and motivated individuals on
              things you care about.
            </Text>
            <Center>
              <Button
                bgColor={"#3a118e"}
                _hover={{ bgColor: "#3a118e", opacity: 0.8 }}
              >
                <a href={"https://google.com"}>Work with us</a>
              </Button>
            </Center>
          </Box>
          <Image src={CoWorking} width={300} borderRadius={5} my={"auto"} />
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
