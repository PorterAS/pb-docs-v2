import * as React from "react"
import { graphql, Link } from "gatsby"
import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react"
import { FeatureCard } from "../components/home/feature-card"
import Layout from "../components/layouts/home-layout"
import SEO from "../components/seo"
import ShopifyLogo from "../images/shopify-logo.png"
import WooCommerceLogo from "../images/woocommerce-logo.png"
import MagentoLogo from "../images/magento-logo.png"
import WebshipperLogo from "../images/webshipper-logo.png"
import UnifaunLogo from "../images/unifaun-logo.png"
import OngoingLogo from "../images/ongoing-logo.svg"
import ConsignorLogo from "../images/consignor-logo.png"
import GetStartedImage from "../images/get-started.png"
import BecomeAPartnerImage from "../images/become-a-partner.png"

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
import { ContentCallout } from "../components/global/ContentCallout"
import { Container } from "../components/layouts/container"
import { EcomIntegrationCard } from "./integrations"

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
      <SEO
        title="Porterbuddy Developer Portal"
        description="Build and integrate with Porterbuddy APIs and technology"
      />
      <Container>
        <Box mt={"3%"} mb={{ base: "5%", sm: "5%", md: "5%", lg: "5%" }}>
          <Text
            fontSize={{ base: "3xl", sm: "3xl", md: "3xl", lg: "4xl" }}
            fontWeight={"600"}
          >
            Porterbuddy Developers
          </Text>
          <Text textAlign="left">
            Welcome to Porterbuddy Developers! Find information on building an
            efficient logistics experience with Porterbuddy
          </Text>
        </Box>
        <ContentCallout title={"Porterbuddy Samlevert v1"} type="info">
          The all new Porterbuddy Samlevert product launch. Learn to upgrade
          your existing Porterbuddy integration to use Samlevert. Samlevert lets
          your customers purchase items from multiple stores and receive all the
          orders within the same delivery window.
        </ContentCallout>
      </Container>

      <Container bgColor={"#F7F7F7"}>
        <Box my={"5%"} py="2%">
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            // flexWrap={["wrap", "nowrap", "nowrap"]}
          >
            <Box>
              <Text fontSize={"2xl"} fontWeight={"600"} mb={3}>
                Getting started
              </Text>
              <Text width={["100%", "100%", "100%"]} mb={5}>
                Integrate Porterbuddy's product card widget, Checkout widget and
                Universal shipping module
              </Text>
              <Button
                bgColor={"#661AFF"}
                _hover={{ bgColor: "#661AFF", opacity: 0.8 }}
                color={"white"}
                size={"md"}
                mt={[5, 0, 0]}
              >
                <Link to={"/getting-started/"}>Get started</Link>
              </Button>
            </Box>
            <Box display={["none", "flex", "flex"]}>
              <Image
                src={GetStartedImage}
                width={[350, 300, 300]}
                borderRadius={5}
                my={"auto"}
                mx={"auto"}
                mt={[10, 0, 0]}
              />
            </Box>
          </Flex>
        </Box>
      </Container>

      <Container>
        <Box mb={"4em"}>
          <Text fontSize={"xl"} fontWeight={"600"} mb={3}>
            Integrations
          </Text>
          <Box mb={7}>
            <Text fontWeight={"500"}>E-commerce Integrations</Text>
          </Box>

          <Box mb={7}>
            <SimpleGrid columns={[2, 6, 6]} spacing={5}>
              <EcomIntegrationCard
                title={"Shopify"}
                link={"/integrations/shopify-integration/"}
                logo={ShopifyLogo}
              />
              <EcomIntegrationCard
                title={"Magento"}
                link={"/integrations/"}
                logo={MagentoLogo}
              />
              <EcomIntegrationCard
                title={"WooCommerce"}
                link={"/integrations/woocommerce"}
                logo={WooCommerceLogo}
              />
            </SimpleGrid>
          </Box>

          <Box mb={3}>
            <Text fontWeight={"500"}>
              Transport and Warehouse Management Systems Integrations
            </Text>
          </Box>

          <Box>
            <SimpleGrid columns={[2, 6, 6]} spacing={5}>
              <EcomIntegrationCard
                title={"Unifaun"}
                link={"/integrations/unifaun"}
                logo={UnifaunLogo}
              />
              <EcomIntegrationCard
                title={"Consignor"}
                link={"/integrations/"}
                logo={ConsignorLogo}
              />
              <EcomIntegrationCard
                title={"Ongoing"}
                link={"/integrations/"}
                logo={OngoingLogo}
              />
              <EcomIntegrationCard
                title={"Webshipper"}
                link={"/integrations/"}
                logo={WebshipperLogo}
              />
            </SimpleGrid>
          </Box>
        </Box>
      </Container>

      <Container bgColor={"#F7F7F7"}>
        <Box my={"5%"} py="2%">
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            // flexWrap={["wrap", "nowrap", "nowrap"]}
          >
            <Box>
              <Text fontSize={"2xl"} fontWeight={"600"} mb={3}>
                Become a partner?
              </Text>
              <Text width={["100%", "100%", "100%"]} mb={5}>
                Looking to deliver parcels with Porterbuddy from your webshop?
                get in touch with a sales representative to schedule a
                walkthrough
              </Text>
              <Button
                bgColor={"#661AFF"}
                _hover={{ bgColor: "#661AFF", opacity: 0.8 }}
                color={"white"}
                size={"md"}
                mt={[5, 0, 0]}
              >
                <a href={"mailto:mats@porterbuddy.com"}>Speak with us</a>
              </Button>
            </Box>
            <Box display={["none", "flex", "flex"]}>
              <Image
                src={BecomeAPartnerImage}
                width={[350, 300, 300]}
                borderRadius={5}
                my={"auto"}
                mx={"auto"}
                mt={[10, 0, 0]}
              />
            </Box>
          </Flex>
        </Box>
      </Container>

      <Container>
        <SimpleGrid columns={[1, 4, 4]} spacing="10" my={"5%"}>
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
            content={"Find and connect with others building ecommerce products"}
            link="/community/"
            actionText="Learn more"
          />
        </SimpleGrid>
      </Container>

      <Container bgColor={"#F7F7F7"}>
        <Box mt={"5%"} py="2%">
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            // flexWrap={["wrap", "nowrap", "nowrap"]}
          >
            <Box>
              <Text fontSize={"2xl"} fontWeight={"600"} mb={3}>
                Work with us
              </Text>
              <Text width={["100%", "100%", "100%"]} mb={5}>
                Are you interested in building the future of e-commerce
                logistics? Come work with equally talented and motivated
                individuals on things you care about.
              </Text>
              <Button
                bgColor={"#661AFF"}
                _hover={{ bgColor: "#661AFF", opacity: 0.8 }}
                color={"white"}
                size={"md"}
                mt={[5, 0, 0]}
              >
                <a href={"mailto:dev@porterbuddy.com"}>Work with us</a>
              </Button>
            </Box>
            <Box display={["none", "flex", "flex"]}>
              <Image
                src={
                  "https://res.cloudinary.com/chuloo/image/upload/q_auto,f_auto,w_350/v1641985218/porterbuddy/co-working.jpg"
                }
                width={[350, 300, 300]}
                borderRadius={5}
                my={"auto"}
                mx={"auto"}
                mt={[10, 0, 0]}
              />
            </Box>
          </Flex>
        </Box>
      </Container>
    </Layout>
  )
}
export default IndexPage
